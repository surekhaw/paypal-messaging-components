pipeline {
    agent {
        label 'mesos'
    }

    tools {
        nodejs 'Node18'
    }

    environment {
        BRANCH_NAME = sh(returnStdout: true, script: 'echo $GIT_BRANCH | sed "s#origin/##g"').trim()
        GIT_COMMIT_MESSAGE = sh(returnStdout: true, script: 'git log -1 --pretty=%B').trim()
        GIT_COMMIT_HASH = GIT_COMMIT.take(7)
        VERSION = sh(returnStdout: true, script: "echo $GIT_COMMIT_MESSAGE | cut -d ':' -f2 | cut -d '[' -f1").trim()
    }

    stages {
        stage('Setup') {
            steps {
                checkout scm
                sh '''
                    echo $GIT_COMMIT_MESSAGE
                    node -v
                    npm -v
                    npm i --reg $REGISTRY -g @paypalcorp/web
                '''
            }
        }

        // For release, deploy existing build assets
        stage('Bundle Stage') {
            steps {
                script {
                    if (GIT_COMMIT_MESSAGE.contains('test')) {
                        // dir('dist/bizcomponents/sandbox') {
                        //     deleteDir()
                        // }
                        // dir('dist/bizcomponents/js') {
                        //     deleteDir()
                        // }
                        withCredentials([usernamePassword(credentialsId: 'web-cli-creds', passwordVariable: 'SVC_ACC_PASSWORD', usernameVariable: 'SVC_ACC_USERNAME')]) {
                           sh '''
                                rm -rf ./dist/bizcomponents/sandbox
                                rm -rf ./dist/bizcomponents/js
                                stageBundleId=up-stage-v$VERSION-$GIT_COMMIT_HASH
                                output=$(web stage --tag stageBundleId)
                                git checkout -- dist
                           '''
                        }
                        // stageBundleId=$(node -e 'console.log(JSON.parse(process.argv.slice(1)).id)' "$output")
                        // web notify "$stageBundleId"
                    }
                }
            }
        }
        stage('Bundle Sandbox') {
            steps {
                script {
                    if (GIT_COMMIT_MESSAGE.contains('test')) {
                        // dir('dist/bizcomponents/stage') {
                        //     deleteDir()
                        // }
                        // dir('dist/bizcomponents/js') {
                        //     deleteDir()
                        // }
                        withCredentials([usernamePassword(credentialsId: 'web-cli-creds', passwordVariable: 'SVC_ACC_PASSWORD', usernameVariable: 'SVC_ACC_USERNAME')]) {
                           sh '''
                                rm -rf ./dist/bizcomponents/stage
                                rm -rf ./dist/bizcomponents/js
                                sandboxBundleId=up-sb-v$VERSION-$GIT_COMMIT_HASH
                                output=$(web stage --tag $sandboxBundleId)
                                git checkout -- dist
                           '''
                        }
                    }
                    // sandboxBundleId=$(node -e 'console.log(JSON.parse(process.argv.slice(1)).id)' "$output")
                    // web notify "$sandboxBundleId"
                }
            }
        }
        stage('Build Production') {
            steps {
                script {
                    if (GIT_COMMIT_MESSAGE.contains('test')) {
                        // dir('dist/bizcomponents/stage') {
                        //     deleteDir()
                        // }
                        // dir('dist/bizcomponents/sandbox') {
                        //     deleteDir()
                        // }
                        withCredentials([usernamePassword(credentialsId: 'web-cli-creds', passwordVariable: 'SVC_ACC_PASSWORD', usernameVariable: 'SVC_ACC_USERNAME')]) {
                           sh '''
                                rm -rf ./dist/bizcomponents/stage
                                rm -rf ./dist/bizcomponents/sandbox
                                productionBundleId=up-stage-v$VERSION-$GIT_COMMIT_HASH
                                output=$(web stage --tag $productionBundleId)
                                
                                git checkout -- dist
                           '''
                        }
                        // $productionBundleId=$(node -e 'console.log(JSON.parse(process.argv.slice(1)).id)' "$output")
                        // web notify "$productionBundleId"
                    }
                }
            }
        }
    }

    // Send email notification
    post {
        success {
            emailext(
                mimeType: 'text/html',
                // Single quotes on this so the variable makes it to the email plugin instead of Jenkins trying to replace
                to: '$DEFAULT_RECIPIENTS',
                subject: "paypal-messaging-components - ${BRANCH_NAME} - Build #${env.BUILD_NUMBER} - SUCCESS!",
                // The ${FILE} similarly needs to be sent to the plugin to be replaced, so the $ is escaped
                body: """
                    Build Succeeded!<br />
                    <br />
                    ${GIT_COMMIT_MESSAGE}<br />
                    Build URL: ${env.BUILD_URL}<br />
                    Assets have been bundled and are ready for review or testing.<br />
                    please approve and deploy stage, sandbox, and production respectively.<br />
                    <br />
                    Regards,<br />
                    Your friendly neighborhood digital butler
                """
            )
        }
    }
}

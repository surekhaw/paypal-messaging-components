void deployAssetsForEachEnv(env) {
    // Check if commit message contains a specific string to skip the stage
    // if (GIT_COMMIT_MESSAGE.contains('chore(release)')) {
    //     sh '''
    //         echo Deploying $env
    //         make publish
    //         git reset --hard HEAD
    //     '''    
    // }
    echo deploy $env
    return
}

pipeline {
    agent {
        label 'mesos'
    }

    tools {
        nodejs 'Node12'
    }

    // STAGE_TAG will be {branch_name}_{timestamp}
    environment {
        BRANCH_NAME = sh(returnStdout: true, script: 'echo $GIT_BRANCH | sed "s#origin/##g"').trim()
        GIT_COMMIT_MESSAGE = sh(returnStdout: true, script: 'git log -1 --pretty=%B').trim()
        // sed commands in order:
        // remove origin/ from the branch name
        // replace any hyphens (-) with underscores (_)
        // shorten to 18 characters to allow space for the timestamp at the end
        STAGE_TAG = sh(returnStdout: true, script: 'echo $(echo $GIT_BRANCH | sed "s#origin/##g" | sed "s/-/_/g" | sed -e "s/(.{18}).*/$1/g")_$(date +%s)').trim()
    }

    stages {
        stage('Setup') {
            steps {
                checkout scm
                sh '''
                    echo $GIT_COMMIT_MESSAGE
                    node -v
                    npm -v
                    npm i --reg https://npm.paypal.com -g @paypalcorp/web
                '''
            }
        }

        // For non-release, auto-generate a stage build
        stage('Stage Tag') {
            when {
                not {
                    // branch 'release'
                    branch 'jenkinsTest'
                }
            }
            steps {
                withCredentials([usernamePassword(credentialsId: 'web-cli-creds', passwordVariable: 'SVC_ACC_PASSWORD', usernameVariable: 'SVC_ACC_USERNAME')]) {
                    sh '''
                        npm i --reg https://npm.paypal.com
                        npm run build -- -t $STAGE_TAG -s $TEST_ENV
                    '''
                }
            }
        }

        // For release, deploy existing build assets
        stage('Build Stage') {
            when {
                // branch 'release'
                branch 'jenkinsTest'
            }
            steps {
                script {
                    // dir('./dist/bizcomponents/sandbox') {
                    //     deleteDir()
                    // }
                    // dir('./dist/bizcomponents/js') {
                    //     deleteDir()
                    // }
                    // deployAssetsForEachEnv('stage')
                    // sh '''
                    //     echo Deploying stage
                    //     make publish
                    //     git checkout -- dist
                    // '''    
                    if (GIT_COMMIT_MESSAGE.contains('test')) {
                        sh '''
                            echo test conditional statement
                        '''
                    }
                    sh '''
                        echo building stage
                        rm -rf stage-package-*.tar.tgz
                        tar czf stage-package-$BUILD_NUMBER.tar.tgz ./dist/bizcomponents/stage
                    '''
                }
            }
        }
        // stage('Build Sandbox') {
        //     when {
        //         // branch 'release'
        //         branch 'jenkinsTest'
        //     }
        //     steps {
        //         script {
        //             dir('/dist/bizcomponents/stage') {
        //                 deleteDir()
        //             }
        //             dir('/dist/bizcomponents/js') {
        //                 deleteDir()
        //             }
        //             deployAssetsForEachEnv('sandbox')
        //         }
        //     }
        // }
        // stage('Build Production') {
        //     when {
        //         // branch 'release'
        //         branch 'jenkinsTest'
        //     }
        //     steps {
        //         script {
        //             dir('/dist/bizcomponents/stage') {
        //                 deleteDir()
        //             }
        //             dir('/dist/bizcomponents/sandbox') {
        //                 deleteDir()
        //             }
        //             deployAssetsForEachEnv('production')
        //         }
        //     }
        // }
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
                    Stage Tag: ${STAGE_TAG}<br />
                    CDN Bundle: https://UIDeploy--StaticContent--${STAGE_TAG}--ghe.preview.dev.paypalinc.com/upstream/bizcomponents/stage?cdn:list<br />
                    Test Page: ${TEST_URL}${STAGE_TAG}<br />
                    <br />
                    Regards,<br />
                    Your friendly neighborhood digital butler
                """
            )
        }
    }
}

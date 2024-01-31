/** @jsx h */
import { h } from 'preact';

const Icon = ({ name = '', color, content, isQLDesign }) => {
    if (content) {
        // eslint-disable-next-line react/no-danger
        return <div aria-hidden="true" className="icon__wrapper" dangerouslySetInnerHTML={{ __html: content }} />;
    }

    switch (name) {
        case 'logo':
            return (
                <svg
                    role="img"
                    aria-label="PayPal"
                    width="45"
                    height="45"
                    viewBox="0 0 258 258"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <title>PayPal</title>
                    <path
                        d="M190.709 84.0373C191.182 59.4578 170.902 40.5938 143.016 40.5938H85.3376C83.9939 40.594 82.6944 41.0737 81.6729 41.9467C80.6514 42.8197 79.975 44.0286 79.7654 45.3558L56.6551 189.763C56.5517 190.418 56.5913 191.086 56.7713 191.724C56.9513 192.361 57.2673 192.952 57.6976 193.456C58.1278 193.96 58.6622 194.364 59.2638 194.641C59.8654 194.919 60.5199 195.062 61.1823 195.062H95.353L90.0133 228.507C89.9103 229.161 89.9502 229.83 90.1303 230.467C90.3105 231.104 90.6265 231.695 91.0568 232.198C91.487 232.702 92.0212 233.106 92.6227 233.383C93.2241 233.66 93.8784 233.804 94.5406 233.804H122.377C123.72 233.804 124.918 233.324 125.939 232.451C126.961 231.578 127.127 230.369 127.336 229.042L135.506 180.965C135.715 179.638 136.391 177.918 137.413 177.044C138.434 176.171 139.326 175.691 140.67 175.69H157.705C185.013 175.69 208.185 156.28 212.421 129.283C215.418 110.118 207.202 92.6834 190.709 84.0373Z"
                        fill="#001C64"
                    />
                    <path
                        d="M102.745 141.81L94.2348 195.776L88.8951 229.629C88.792 230.283 88.8319 230.952 89.0121 231.589C89.1922 232.227 89.5083 232.817 89.9385 233.321C90.3688 233.824 90.903 234.228 91.5044 234.505C92.1058 234.783 92.7601 234.926 93.4223 234.926H122.881C124.225 234.926 125.524 234.446 126.546 233.573C127.567 232.7 128.244 231.491 128.453 230.164L136.215 180.964C136.424 179.637 137.1 178.427 138.122 177.554C139.143 176.681 140.443 176.2 141.787 176.2H159.129C186.437 176.2 209.608 156.279 213.844 129.282C216.848 110.119 207.202 92.6847 190.709 84.0387C190.669 86.0796 190.49 88.1155 190.174 90.1322C185.94 117.127 162.765 137.05 135.459 137.05H108.318C106.974 137.05 105.674 137.53 104.653 138.403C103.631 139.276 102.955 140.483 102.745 141.81Z"
                        fill="#0070E0"
                    />
                    <path
                        d="M94.2305 195.776H59.9576C59.2953 195.776 58.6408 195.633 58.0392 195.356C57.4376 195.079 56.9032 194.675 56.4729 194.171C56.0426 193.668 55.7265 193.077 55.5466 192.44C55.3666 191.802 55.3269 191.133 55.4304 190.479L78.5407 43.927C78.7503 42.5998 79.4267 41.3909 80.4482 40.5179C81.4697 39.645 82.7692 39.1652 84.1129 39.165H143.017C170.903 39.165 191.183 59.4588 190.709 84.0384C183.77 80.4003 175.618 78.3172 166.685 78.3172H117.576C116.231 78.3175 114.932 78.7976 113.91 79.671C112.889 80.5444 112.212 81.7538 112.003 83.0815L102.75 141.81L94.2305 195.776Z"
                        fill="#003087"
                    />
                </svg>
            );
        case 'qLDesign__pi4_logo':
            return (
                <svg
                    role="img"
                    aria-label="PayPal"
                    width="96"
                    height="60"
                    viewBox="0 0 96 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <title>PayPal</title>
                    <rect width="96" height="60" rx="4" fill="#003087" />
                    <rect x="19.2031" y="13" width="57.6" height="33.75" rx="4" fill="#003087" />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M39.9356 22.8026C40.3356 20.5359 39.9356 18.9359 38.6689 17.5359C37.4022 16.0026 34.9356 15.3359 31.7356 15.3359H22.7356C22.0689 15.3359 21.5356 15.8026 21.4022 16.4693L17.6022 40.5359C17.5356 41.0026 17.8689 41.4026 18.3356 41.4026H23.9356L23.5356 43.8693C23.4689 44.3359 23.8022 44.6693 24.2022 44.6693H28.9356C29.5356 44.6693 30.0022 44.2026 30.0689 43.7359L30.1356 43.5359L31.0022 37.9359L31.0689 37.6693C31.1356 37.1359 31.6689 36.7359 32.2022 36.7359H32.9356C37.5356 36.7359 41.1356 34.8693 42.2022 29.4693C42.6689 27.2693 42.4022 25.3359 41.2689 24.0026C40.9356 23.4026 40.4689 23.0693 39.9356 22.8026Z"
                        fill="white"
                        fill-opacity="0.68"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M39.9356 22.8026C40.3356 20.5359 39.9356 18.9359 38.6689 17.5359C37.4022 16.0026 34.9356 15.3359 31.7356 15.3359H22.7356C22.0689 15.3359 21.5356 15.8026 21.4022 16.4693L17.6022 40.5359C17.5356 41.0026 17.8689 41.4026 18.3356 41.4026H23.9356L25.3356 32.4693L25.2689 32.7359C25.4022 32.0693 26.0022 31.6026 26.6022 31.6026H29.2689C34.5356 31.6026 38.6022 29.4693 39.8689 23.3359C39.8689 23.1359 39.9356 22.9359 39.9356 22.8026Z"
                        fill="white"
                        fill-opacity="0.7"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M26.9356 22.8026C27.0022 22.4026 27.2022 22.1359 27.6022 21.9359C27.7356 21.8693 27.8689 21.8026 28.1356 21.8026H35.2689C36.0689 21.8693 36.8689 21.9359 37.6689 22.0026C37.8689 22.0026 38.0689 22.0693 38.2689 22.1359C38.4689 22.2026 38.6689 22.2026 38.8689 22.2693C38.9356 22.2693 39.0022 22.3359 39.1356 22.3359C39.5356 22.4693 39.8022 22.5359 40.0689 22.8026C40.4689 20.5359 40.0689 18.9359 38.8022 17.5359C37.4689 16.0026 35.0022 15.3359 31.8022 15.3359H22.7356C22.0689 15.3359 21.5356 15.8026 21.4022 16.4693L17.6022 40.5359C17.5356 41.0026 17.8689 41.4026 18.3356 41.4026H23.9356L26.9356 22.8026Z"
                        fill="white"
                    />
                    <g className="icon__qLDesign__logo">
                        <path
                            d="M66 46C74.8366 46 82 38.8366 82 30C82 21.1634 74.8366 14 66 14C57.1634 14 50 21.1634 50 30C50 38.8366 57.1634 46 66 46Z"
                            stroke="white"
                            stroke-width="3"
                        />
                    </g>
                    <path
                        d="M82 30C82 21.1634 74.8366 14 66 14"
                        stroke="#3ABBA1"
                        stroke-width="3"
                        stroke-linecap="round"
                    />
                    <path
                        d="M67.362 35.25C67.152 35.25 67.04 35.138 67.04 34.928V33.038H62.686C62.476 33.038 62.364 32.926 62.364 32.716V32.184C62.364 32.03 62.406 31.904 62.49 31.778L65.458 27.508C65.906 26.864 66.564 25.87 66.858 25.45C66.956 25.296 67.082 25.24 67.25 25.24H68.118C68.328 25.24 68.44 25.352 68.44 25.562V31.876H69.518C69.728 31.876 69.84 31.988 69.84 32.198V32.716C69.84 32.926 69.728 33.038 69.518 33.038H68.44V34.928C68.44 35.138 68.328 35.25 68.118 35.25H67.362ZM63.89 31.876H67.04V29.174C67.04 28.152 67.096 27.452 67.096 27.06H67.068L65.71 29.216L64.73 30.63C64.31 31.232 63.862 31.876 63.89 31.876Z"
                        fill="white"
                    />
                </svg>
            );
        case 'qLDesign__pmo_logo':
            return (
                <svg
                    role="img"
                    aria-label="PayPal"
                    width="96"
                    height="60"
                    viewBox="0 0 96 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <title>PayPal</title>
                    <rect width="96" height="60" rx="4" fill="#003087" />
                    <path
                        d="M53.7067 16H78.4183C80.0015 16 81.125 17.1507 81.125 18.3816V42.0526C81.125 43.2835 80.0015 44.4342 78.4183 44.4342H53.7067C52.1235 44.4342 51 43.2835 51 42.0526V18.3816C51 17.1507 52.1235 16 53.7067 16Z"
                        stroke="#0070E0"
                        stroke-width="2"
                        stroke-linejoin="round"
                    />
                    <path d="M73.6719 15V18.3816" stroke="#AAE542" stroke-width="2" stroke-linecap="round" />
                    <path d="M58.4531 15L58.4519 18.3816" stroke="#AAE542" stroke-width="2" stroke-linecap="round" />
                    <circle cx="59.3018" cy="25.8643" r="2.53618" fill="#69D5BA" />
                    <circle cx="59.3018" cy="34.3174" r="2.53618" fill="#69D5BA" />
                    <circle cx="66.0596" cy="25.8643" r="2.53618" fill="#69D5BA" />
                    <circle cx="66.0596" cy="34.3174" r="2.53618" fill="#69D5BA" />
                    <circle cx="72.8252" cy="25.8643" r="2.53618" fill="#69D5BA" />
                    <circle cx="72.8252" cy="34.3174" r="2.53618" fill="white" />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M39.9356 22.8026C40.3356 20.5359 39.9356 18.9359 38.6689 17.5359C37.4022 16.0026 34.9356 15.3359 31.7356 15.3359H22.7356C22.0689 15.3359 21.5356 15.8026 21.4022 16.4693L17.6022 40.5359C17.5356 41.0026 17.8689 41.4026 18.3356 41.4026H23.9356L23.5356 43.8693C23.4689 44.3359 23.8022 44.6693 24.2022 44.6693H28.9356C29.5356 44.6693 30.0022 44.2026 30.0689 43.7359L30.1356 43.5359L31.0022 37.9359L31.0689 37.6693C31.1356 37.1359 31.6689 36.7359 32.2022 36.7359H32.9356C37.5356 36.7359 41.1356 34.8693 42.2022 29.4693C42.6689 27.2693 42.4022 25.3359 41.2689 24.0026C40.9356 23.4026 40.4689 23.0693 39.9356 22.8026Z"
                        fill="white"
                        fill-opacity="0.68"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M39.9356 22.8026C40.3356 20.5359 39.9356 18.9359 38.6689 17.5359C37.4022 16.0026 34.9356 15.3359 31.7356 15.3359H22.7356C22.0689 15.3359 21.5356 15.8026 21.4022 16.4693L17.6022 40.5359C17.5356 41.0026 17.8689 41.4026 18.3356 41.4026H23.9356L25.3356 32.4693L25.2689 32.7359C25.4022 32.0693 26.0022 31.6026 26.6022 31.6026H29.2689C34.5356 31.6026 38.6022 29.4693 39.8689 23.3359C39.8689 23.1359 39.9356 22.9359 39.9356 22.8026Z"
                        fill="white"
                        fill-opacity="0.7"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M26.9356 22.8026C27.0022 22.4026 27.2022 22.1359 27.6022 21.9359C27.7356 21.8693 27.8689 21.8026 28.1356 21.8026H35.2689C36.0689 21.8693 36.8689 21.9359 37.6689 22.0026C37.8689 22.0026 38.0689 22.0693 38.2689 22.1359C38.4689 22.2026 38.6689 22.2026 38.8689 22.2693C38.9356 22.2693 39.0022 22.3359 39.1356 22.3359C39.5356 22.4693 39.8022 22.5359 40.0689 22.8026C40.4689 20.5359 40.0689 18.9359 38.8022 17.5359C37.4689 16.0026 35.0022 15.3359 31.8022 15.3359H22.7356C22.0689 15.3359 21.5356 15.8026 21.4022 16.4693L17.6022 40.5359C17.5356 41.0026 17.8689 41.4026 18.3356 41.4026H23.9356L26.9356 22.8026Z"
                        fill="white"
                    />
                </svg>
            );
        case 'close':
            return (
                <svg
                    aria-hidden="true"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12 0L0 12"
                        transform="translate(12 12)"
                        stroke={color || '#2C2E2F'}
                        stroke-width="2"
                        stroke-linecap="round"
                    />
                    <path
                        d="M0 0L12 12"
                        transform="translate(12 12)"
                        stroke={color || '#2C2E2F'}
                        stroke-width="2"
                        stroke-linecap="round"
                    />
                </svg>
            );
        case 'qLDesign__close':
            return (
                <svg
                    aria-hidden="true"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon__qLDesign__close"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16.203 4.79289C16.5935 5.18342 16.5935 5.81658 16.203 6.20711L9.91007 12.5L16.203 18.7929C16.5935 19.1834 16.5935 19.8166 16.203 20.2071C15.8125 20.5977 15.1793 20.5977 14.7888 20.2071L7.79582 13.2142C7.40137 12.8197 7.40142 12.1802 7.79582 11.7858L14.7888 4.79289C15.1793 4.40237 15.8125 4.40237 16.203 4.79289Z"
                        fill="#545D68"
                    />
                </svg>
            );
        case 'warning':
            return (
                <svg
                    aria-hidden="true"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7ZM6.58612 7.98166H7.41296C7.54914 7.98166 7.63669 7.90217 7.64642 7.76305C7.66126 7.40817 7.68064 7.05884 7.7004 6.70263C7.74538 5.89189 7.79233 5.04545 7.79233 4.01681V3.23179C7.79233 3.08273 7.71451 3.00324 7.5686 3.00324H6.43048C6.28457 3.00324 6.20675 3.08273 6.20675 3.23179V4.01681C6.20675 5.04544 6.2537 5.89182 6.29867 6.70256C6.31844 7.05879 6.33781 7.40815 6.35266 7.76305C6.36239 7.90217 6.44994 7.98166 6.58612 7.98166ZM7 11.5C7.55228 11.5 8 11.0523 8 10.5C8 9.94772 7.55228 9.5 7 9.5C6.44772 9.5 6 9.94772 6 10.5C6 11.0523 6.44772 11.5 7 11.5Z"
                        fill="#E85E00"
                    />
                </svg>
            );
        case 'PRODUCT_LIST-desktop':
            return (
                <svg
                    aria-hidden="true"
                    width="338"
                    height="145"
                    viewBox="0 0 338 145"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="background-desktop"
                >
                    <g clip-path="url(#clip0_793_723)">
                        <path
                            d="M568.155 313.122C574.483 454.46 471.924 583.98 337.392 605.873C288.823 613.775 241.399 611.34 192.448 612.319C161.191 612.939 156.081 620.341 151.425 643.595C136.644 717.367 127.833 792.238 116.013 866.56C111.237 890.435 114.198 929.828 80.5053 930.091C28.1952 930.218 -24.1148 930.218 -76.4249 930.091C-79.9206 930.166 -83.3901 929.472 -86.5882 928.059C-89.7864 926.646 -92.6351 924.548 -94.9332 921.913C-97.2313 919.278 -98.9228 916.171 -99.8879 912.811C-100.853 909.451 -101.068 905.92 -100.518 902.467C-97.8679 885.349 -71.6492 719.11 -71.6492 719.11L-25.229 425.094C-25.229 425.094 20.403 136.401 22.5282 123.7C25.1071 107.967 35.9956 98.4883 51.8748 97.581C138.793 97.3662 225.687 97.4618 312.606 97.3901C355.778 97.3901 400.957 102.38 442.195 122.721C513.544 155.477 563.976 229.894 568.179 308.347L568.155 313.122Z"
                            fill="#FFD140"
                        />
                        <path
                            d="M605.816 157.363C610.059 252.157 541.297 339.025 451.099 353.709C418.535 359.009 386.739 357.376 353.92 358.032C332.963 358.448 329.537 363.413 326.415 379.009C316.505 428.487 310.597 478.703 302.673 528.55C299.471 544.562 301.456 570.983 278.866 571.159C243.794 571.245 208.723 571.245 173.651 571.159C171.307 571.209 168.981 570.744 166.837 569.797C164.692 568.849 162.782 567.442 161.242 565.675C159.701 563.908 158.567 561.824 157.92 559.57C157.273 557.316 157.128 554.948 157.497 552.633C159.274 541.152 176.853 429.656 176.853 429.656L207.976 232.462C207.976 232.462 238.57 38.8382 239.995 30.3196C241.724 19.7673 249.024 13.4103 259.671 12.8019C317.946 12.6577 376.205 12.7219 434.48 12.6738C463.426 12.6738 493.716 16.0204 521.365 29.6631C569.202 51.6323 603.014 101.543 605.832 154.161L605.816 157.363Z"
                            fill="#0070E0"
                        />
                        <mask id="mask0_793_723" maskUnits="userSpaceOnUse" x="-128" y="97" width="901" height="1121">
                            <path
                                d="M771.971 387.656C780.483 577.825 642.514 752.094 461.532 781.551C396.193 792.184 332.397 788.907 266.544 790.224C224.495 791.059 217.621 801.018 211.357 832.306C191.472 931.567 179.619 1032.3 163.718 1132.3C157.293 1164.43 161.276 1217.43 115.951 1217.78C45.5795 1217.96 -24.7917 1217.96 -95.1628 1217.78C-99.8655 1217.89 -104.533 1216.95 -108.835 1215.05C-113.138 1213.15 -116.97 1210.33 -120.061 1206.78C-123.153 1203.24 -125.429 1199.06 -126.727 1194.54C-128.025 1190.01 -128.315 1185.26 -127.575 1180.62C-124.009 1157.59 -88.7382 933.911 -88.7382 933.911L-26.2905 538.314C-26.2905 538.314 35.0969 149.879 37.9558 132.79C41.4251 111.621 56.073 98.8677 77.435 97.647C194.363 97.3579 311.26 97.4865 428.188 97.3901C486.267 97.3901 547.044 104.104 602.521 131.473C698.505 175.546 766.349 275.674 772.003 381.231L771.971 387.656Z"
                                fill="#FFD140"
                            />
                        </mask>
                        <g mask="url(#mask0_793_723)">
                            <path
                                d="M600.432 197.172C604.675 291.968 535.906 378.837 445.698 393.521C413.131 398.821 381.332 397.187 348.509 397.844C327.55 398.26 324.123 403.224 321.001 418.821C311.09 468.3 305.182 518.516 297.256 568.364C294.054 584.376 296.039 610.797 273.447 610.974C238.372 611.059 203.296 611.059 168.22 610.974C165.876 611.024 163.55 610.559 161.406 609.611C159.261 608.663 157.351 607.256 155.81 605.489C154.269 603.722 153.135 601.638 152.488 599.384C151.841 597.131 151.696 594.762 152.065 592.447C153.842 580.966 171.423 469.469 171.423 469.469L202.549 272.272C202.549 272.272 233.147 78.6462 234.572 70.1274C236.301 59.575 243.602 53.218 254.25 52.6095C312.531 52.4654 370.797 52.5295 429.078 52.4814C458.027 52.4814 488.32 55.8281 515.972 69.4709C563.814 91.4404 597.63 141.352 600.448 193.97L600.432 197.172Z"
                                fill="#003087"
                            />
                        </g>
                    </g>
                    <defs>
                        <clipPath id="clip0_793_723">
                            <rect width="466" height="145" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            );
        case 'PRODUCT_LIST-mobile':
            return (
                <svg
                    aria-hidden="true"
                    width="272"
                    height="217"
                    viewBox="0 0 272 217"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="background-mobile"
                >
                    <g clip-path="url(#clip0_793_755)">
                        <path
                            d="M567.97 384.694C574.298 526.032 471.739 655.552 337.207 677.445C288.638 685.348 241.215 682.913 192.264 683.891C161.007 684.512 155.897 691.914 151.24 715.167C136.46 788.94 127.648 863.811 115.828 938.133C111.053 962.007 114.013 1001.4 80.3207 1001.66C28.0106 1001.79 -24.2994 1001.79 -76.6095 1001.66C-80.1052 1001.74 -83.5746 1001.04 -86.7728 999.632C-89.971 998.219 -92.8197 996.121 -95.1178 993.486C-97.4159 990.851 -99.1074 987.744 -100.072 984.384C-101.038 981.024 -101.253 977.493 -100.703 974.04C-98.0524 956.922 -71.8338 790.683 -71.8338 790.683L-25.4136 496.667C-25.4136 496.667 20.2184 207.974 22.3436 195.273C24.9225 179.539 35.811 170.061 51.6903 169.154C138.608 168.939 225.503 169.035 312.421 168.963C355.594 168.963 400.772 173.953 442.01 194.294C513.36 227.05 563.791 301.467 567.994 379.919L567.97 384.694Z"
                            fill="#FFD140"
                        />
                        <path
                            d="M680.217 223.547C685.388 339.084 601.58 444.96 491.645 462.856C451.956 469.316 413.203 467.325 373.202 468.126C347.66 468.633 343.484 474.683 339.679 493.692C327.601 553.997 320.4 615.2 310.741 675.955C306.839 695.471 309.258 727.673 281.726 727.888C238.98 727.992 196.234 727.992 153.488 727.888C150.631 727.949 147.796 727.382 145.183 726.227C142.569 725.072 140.241 723.357 138.363 721.203C136.485 719.049 135.103 716.509 134.315 713.763C133.526 711.016 133.35 708.129 133.799 705.307C135.965 691.314 157.39 555.422 157.39 555.422L195.323 315.079C195.323 315.079 232.612 79.0878 234.349 68.7051C236.456 55.8439 245.354 48.0959 258.33 47.3543C329.357 47.1786 400.364 47.2568 471.39 47.1982C506.67 47.1982 543.588 51.2771 577.287 67.905C635.591 94.6814 676.802 155.514 680.236 219.644L680.217 223.547Z"
                            fill="#0070E0"
                        />
                        <mask id="mask0_793_755" maskUnits="userSpaceOnUse" x="-137" y="168" width="902" height="1122">
                            <path
                                d="M763.786 459.18C772.299 649.35 634.329 823.618 453.347 853.075C388.009 863.708 324.212 860.431 258.36 861.748C216.31 862.584 209.436 872.542 203.172 903.83C183.288 1003.09 171.434 1103.83 155.533 1203.83C149.109 1235.95 153.092 1288.96 107.766 1289.31C37.3949 1289.48 -32.9762 1289.48 -103.347 1289.31C-108.05 1289.41 -112.717 1288.48 -117.02 1286.58C-121.322 1284.67 -125.154 1281.85 -128.246 1278.31C-131.338 1274.76 -133.613 1270.58 -134.911 1266.06C-136.21 1261.54 -136.499 1256.79 -135.76 1252.14C-132.194 1229.11 -96.9228 1005.44 -96.9228 1005.44L-34.4751 609.838C-34.4751 609.838 26.9123 221.404 29.7713 204.314C33.2406 183.145 47.8885 170.392 69.2504 169.171C186.179 168.882 303.075 169.011 420.004 168.915C478.082 168.915 538.859 175.628 594.336 202.997C690.32 247.07 758.164 347.198 763.818 452.755L763.786 459.18Z"
                                fill="#FFD140"
                            />
                        </mask>
                        <g mask="url(#mask0_793_755)">
                            <path
                                d="M593.248 238.697C597.491 333.492 528.722 420.361 438.513 435.045C405.946 440.345 374.147 438.712 341.324 439.368C320.365 439.785 316.939 444.749 313.817 460.345C303.906 509.825 297.997 560.04 290.072 609.888C286.869 625.901 288.855 652.322 266.263 652.498C231.187 652.583 196.111 652.583 161.036 652.498C158.692 652.548 156.365 652.083 154.221 651.135C152.076 650.188 150.166 648.781 148.625 647.013C147.084 645.246 145.95 643.162 145.303 640.909C144.656 638.655 144.512 636.287 144.88 633.971C146.658 622.49 164.238 510.994 164.238 510.994L195.364 313.797C195.364 313.797 225.962 120.171 227.387 111.652C229.116 101.099 236.417 94.7424 247.065 94.1339C305.346 93.9898 363.612 94.0539 421.894 94.0059C450.842 94.0059 481.136 97.3525 508.787 110.995C556.629 132.965 590.446 182.877 593.264 235.494L593.248 238.697Z"
                                fill="#003087"
                            />
                        </g>
                    </g>
                    <defs>
                        <clipPath id="clip0_793_755">
                            <rect width="466" height="217" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            );
        case 'PAY_LATER_SHORT_TERM-mobile':
        case 'PAYPAL_CREDIT_NO_INTEREST-mobile':
        case 'PAY_LATER_PAY_IN_1-mobile':
            return (
                <svg
                    aria-hidden="true"
                    width="286"
                    height="265"
                    viewBox="0 0 286 265"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`background-mobile ${isQLDesign ? 'icon__qLDesign' : ''}`}
                >
                    <g clip-path="url(#clip0_793_650)">
                        <path
                            d="M562.155 433.17C568.483 574.508 465.924 704.028 331.392 725.921C282.823 733.823 235.399 731.388 186.448 732.367C155.191 732.988 150.081 740.389 145.425 763.643C130.644 837.416 121.833 912.286 110.013 986.608C105.237 1010.48 108.198 1049.88 74.5053 1050.14C22.1952 1050.27 -30.1148 1050.27 -82.4249 1050.14C-85.9206 1050.21 -89.3901 1049.52 -92.5882 1048.11C-95.7864 1046.69 -98.6351 1044.6 -100.933 1041.96C-103.231 1039.33 -104.923 1036.22 -105.888 1032.86C-106.853 1029.5 -107.068 1025.97 -106.518 1022.52C-103.868 1005.4 -77.6492 839.159 -77.6492 839.159L-31.229 545.142C-31.229 545.142 14.403 256.45 16.5282 243.748C19.1071 228.015 29.9956 218.537 45.8748 217.629C132.793 217.414 219.687 217.51 306.606 217.438C349.778 217.438 394.957 222.428 436.195 242.769C507.544 275.525 557.976 349.943 562.179 428.395L562.155 433.17Z"
                            fill="#FFD140"
                        />
                        <path
                            d="M608.816 145.363C613.059 240.157 544.297 327.025 454.099 341.709C421.535 347.009 389.739 345.376 356.92 346.032C335.963 346.448 332.537 351.413 329.415 367.009C319.505 416.487 313.597 466.703 305.673 516.55C302.471 532.562 304.456 558.983 281.866 559.159C246.794 559.245 211.723 559.245 176.651 559.159C174.307 559.209 171.981 558.744 169.837 557.797C167.692 556.849 165.782 555.442 164.242 553.675C162.701 551.908 161.567 549.824 160.92 547.57C160.273 545.316 160.128 542.948 160.497 540.633C162.274 529.152 179.853 417.656 179.853 417.656L210.976 220.462C210.976 220.462 241.57 26.8382 242.995 18.3196C244.724 7.76732 252.024 1.41033 262.671 0.801858C320.946 0.657745 379.205 0.721866 437.48 0.673828C466.426 0.673828 496.716 4.02042 524.365 17.6631C572.202 39.6323 606.014 89.5434 608.832 142.161L608.816 145.363Z"
                            fill="#0070E0"
                        />
                        <mask id="mask0_793_650" maskUnits="userSpaceOnUse" x="-142" y="217" width="901" height="1121">
                            <path
                                d="M757.971 507.656C766.483 697.825 628.514 872.094 447.532 901.551C382.193 912.184 318.397 908.907 252.544 910.224C210.495 911.059 203.621 921.018 197.357 952.306C177.472 1051.57 165.619 1152.3 149.718 1252.3C143.293 1284.43 147.276 1337.43 101.951 1337.78C31.5795 1337.96 -38.7917 1337.96 -109.163 1337.78C-113.865 1337.89 -118.533 1336.95 -122.835 1335.05C-127.138 1333.15 -130.97 1330.33 -134.061 1326.78C-137.153 1323.24 -139.429 1319.06 -140.727 1314.54C-142.025 1310.01 -142.315 1305.26 -141.575 1300.62C-138.009 1277.59 -102.738 1053.91 -102.738 1053.91L-40.2905 658.314C-40.2905 658.314 21.0969 269.879 23.9558 252.79C27.4251 231.621 42.073 218.868 63.435 217.647C180.363 217.358 297.26 217.487 414.188 217.39C472.267 217.39 533.044 224.104 588.521 251.473C684.505 295.546 752.349 395.674 758.003 501.231L757.971 507.656Z"
                                fill="#FFD140"
                            />
                        </mask>
                        <g mask="url(#mask0_793_650)">
                            <path
                                d="M587.432 280.172C591.675 374.968 522.906 461.837 432.698 476.521C400.131 481.821 368.332 480.187 335.509 480.844C314.55 481.26 311.123 486.224 308.001 501.821C298.09 551.3 292.182 601.516 284.256 651.364C281.054 667.376 283.039 693.797 260.447 693.974C225.372 694.059 190.296 694.059 155.22 693.974C152.876 694.024 150.55 693.559 148.406 692.611C146.261 691.663 144.351 690.256 142.81 688.489C141.269 686.722 140.135 684.638 139.488 682.384C138.841 680.131 138.696 677.762 139.065 675.447C140.842 663.966 158.423 552.469 158.423 552.469L189.549 355.272C189.549 355.272 220.147 161.646 221.572 153.127C223.301 142.575 230.602 136.218 241.25 135.609C299.531 135.465 357.797 135.529 416.078 135.481C445.027 135.481 475.32 138.828 502.972 152.471C550.814 174.44 584.63 224.352 587.448 276.97L587.432 280.172Z"
                                fill="#003087"
                            />
                        </g>
                    </g>
                    <defs>
                        <clipPath id="clip0_793_650">
                            <rect width="286" height="265" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            );
        case 'PAY_LATER_LONG_TERM-desktop':
        case 'PAY_LATER_SHORT_TERM-desktop':
        case 'PAYPAL_CREDIT_NO_INTEREST-desktop':
        case 'PAY_LATER_PAY_IN_1-desktop':
            return (
                <svg
                    aria-hidden="true"
                    width="338"
                    height="176"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`background-desktop ${isQLDesign ? 'icon__qLDesign' : ''}`}
                >
                    <g clip-path="url(#a)">
                        <path
                            d="M567.776 343.886c6.328 141.338-96.231 270.858-230.763 292.751-48.569 7.903-95.992 5.467-144.944 6.446-31.257.621-36.367 8.022-41.023 31.276-14.781 73.773-23.592 148.644-35.412 222.966-4.776 23.874-1.815 63.268-35.508 63.53-52.31.128-104.62.128-156.93 0a23.88 23.88 0 0 1-23.463-17.279 23.87 23.87 0 0 1-.63-10.344c2.65-17.118 28.869-183.357 28.869-183.357l46.42-294.017S20.024 167.166 22.15 154.465c2.58-15.734 13.468-25.212 29.347-26.119 86.918-.215 173.813-.12 260.731-.191 43.172 0 88.351 4.99 129.589 25.331 71.349 32.756 121.781 107.173 125.984 185.625l-.024 4.775Z"
                            fill="#FFD140"
                        />
                        <path
                            d="M607.437 149.079c4.243 94.795-64.519 181.663-154.717 196.346-32.564 5.3-64.359 3.667-97.179 4.323-20.957.417-24.383 5.381-27.505 20.977-9.91 49.479-15.817 99.694-23.742 149.541-3.202 16.013-1.217 42.433-23.807 42.609a21453.9 21453.9 0 0 1-105.215 0 16.01 16.01 0 0 1-16.154-18.526c1.777-11.481 19.356-122.976 19.356-122.976l31.123-197.195s30.594-193.623 32.019-202.142c1.729-10.552 9.029-16.91 19.676-17.518 58.275-.144 116.534-.08 174.81-.128 28.945 0 59.235 3.347 86.884 16.99 47.837 21.969 81.649 71.88 84.467 124.497l-.016 3.202Z"
                            fill="#0070E0"
                        />
                        <mask id="b" maskUnits="userSpaceOnUse" x="-137" y="128" width="901" height="1121">
                            <path
                                d="M763.592 418.372c8.512 190.17-129.457 364.438-310.439 393.895-65.338 10.633-129.135 7.356-194.988 8.673-42.049.835-48.923 10.794-55.187 42.082-19.884 99.261-31.738 199.998-47.639 299.998-6.425 32.12-2.441 85.13-47.767 85.48-70.371.17-140.743.17-211.114 0-4.702.1-9.37-.83-13.672-2.73a32.17 32.17 0 0 1-11.226-8.27 32.185 32.185 0 0 1-6.666-12.25 32.144 32.144 0 0 1-.848-13.92c3.566-23.03 38.837-246.702 38.837-246.702L-34.67 569.03s61.387-388.434 64.246-405.524c3.47-21.169 18.117-33.922 39.479-35.143 116.928-.289 233.825-.16 350.753-.257 58.079 0 118.856 6.714 174.333 34.083 95.984 44.073 163.828 144.201 169.482 249.758l-.032 6.425Z"
                                fill="#FFD140"
                            />
                        </mask>
                        <g mask="url(#b)">
                            <path
                                d="M593.053 238.889c4.243 94.795-64.526 181.664-154.734 196.348-32.567 5.3-64.366 3.667-97.189 4.323-20.959.417-24.385 5.381-27.508 20.977-9.911 49.479-15.819 99.695-23.745 149.543-3.202 16.013-1.217 42.434-23.809 42.61-35.075.085-70.151.085-105.227 0a16.005 16.005 0 0 1-12.41-5.485 16.011 16.011 0 0 1-3.745-13.042c1.777-11.481 19.358-122.978 19.358-122.978l31.126-197.196s30.598-193.627 32.023-202.145c1.729-10.553 9.03-16.91 19.678-17.518 58.281-.144 116.547-.08 174.828-.128 28.949 0 59.242 3.346 86.894 16.989 47.842 21.97 81.658 71.881 84.476 124.499l-.016 3.203Z"
                                fill="#003087"
                            />
                        </g>
                    </g>
                    <defs>
                        <clipPath id="a">
                            <path fill="#fff" d="M0 0h466v176H0z" />
                        </clipPath>
                    </defs>
                </svg>
            );
        case 'PAY_LATER_LONG_TERM-mobile':
            return (
                <svg
                    aria-hidden="true"
                    width="285"
                    height="196"
                    viewBox="0 0 285 196"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`background-mobile ${isQLDesign ? 'icon__qLDesign' : ''}`}
                >
                    <g clip-path="url(#clip0_793_1319)">
                        <path
                            d="M568.292 364.045C574.62 505.383 472.062 634.903 337.529 656.796C288.96 664.698 241.537 662.263 192.586 663.242C161.329 663.863 156.219 671.264 151.563 694.518C136.782 768.291 127.97 843.161 116.15 917.483C111.375 941.358 114.336 980.751 80.643 981.014C28.3329 981.141 -23.9771 981.141 -76.2873 981.014C-79.7829 981.089 -83.2524 980.395 -86.4505 978.982C-89.6487 977.569 -92.4974 975.471 -94.7955 972.836C-97.0936 970.202 -98.7851 967.095 -99.7502 963.734C-100.715 960.374 -100.93 956.843 -100.381 953.391C-97.7302 936.273 -71.5115 770.034 -71.5115 770.034L-25.0913 476.017C-25.0913 476.017 20.5407 187.325 22.6659 174.623C25.2448 158.89 36.1333 149.412 52.0125 148.504C138.931 148.289 225.825 148.385 312.743 148.313C355.916 148.313 401.094 153.303 442.333 173.644C513.682 206.4 564.114 280.818 568.316 359.27L568.292 364.045Z"
                            fill="#FFD140"
                        />
                        <path
                            d="M607.954 147.238C612.196 242.032 543.435 328.9 453.236 343.584C420.673 348.884 388.877 347.251 356.057 347.907C335.101 348.323 331.675 353.288 328.553 368.884C318.643 418.362 312.735 468.578 304.81 518.425C301.608 534.437 303.594 560.858 281.004 561.034C245.932 561.12 210.86 561.12 175.788 561.034C173.445 561.084 171.119 560.619 168.974 559.672C166.83 558.724 164.92 557.317 163.379 555.55C161.839 553.783 160.704 551.699 160.057 549.445C159.41 547.191 159.266 544.823 159.635 542.508C161.412 531.027 178.99 419.531 178.99 419.531L210.113 222.337C210.113 222.337 240.708 28.7132 242.133 20.1946C243.862 9.64232 251.162 3.28533 261.808 2.67686C320.084 2.53275 378.343 2.59687 436.618 2.54883C465.564 2.54883 495.854 5.89542 523.503 19.5381C571.34 41.5073 605.152 91.4184 607.97 144.036L607.954 147.238Z"
                            fill="#0070E0"
                        />
                        <mask id="mask0_793_1319" maskUnits="userSpaceOnUse" x="-136" y="148" width="901" height="1121">
                            <path
                                d="M764.108 438.531C772.621 628.7 634.652 802.969 453.67 832.426C388.331 843.059 324.534 839.782 258.682 841.099C216.633 841.934 209.758 851.893 203.494 883.181C183.61 982.442 171.756 1083.18 155.855 1183.18C149.431 1215.3 153.414 1268.31 108.088 1268.66C37.7171 1268.83 -32.654 1268.83 -103.025 1268.66C-107.728 1268.76 -112.395 1267.83 -116.697 1265.93C-121 1264.02 -124.832 1261.2 -127.924 1257.66C-131.015 1254.11 -133.291 1249.93 -134.589 1245.41C-135.887 1240.89 -136.177 1236.14 -135.437 1231.49C-131.872 1208.46 -96.6005 984.786 -96.6005 984.786L-34.1528 589.189C-34.1528 589.189 27.2346 200.754 30.0935 183.665C33.5628 162.496 48.2107 149.743 69.5726 148.522C186.501 148.233 303.397 148.362 420.326 148.265C478.405 148.265 539.182 154.979 594.658 182.348C690.643 226.421 758.487 326.549 764.14 432.106L764.108 438.531Z"
                                fill="#FFD140"
                            />
                        </mask>
                        <g mask="url(#mask0_793_1319)">
                            <path
                                d="M593.57 239.047C597.813 333.843 529.044 420.712 438.836 435.396C406.268 440.696 374.47 439.062 341.646 439.719C320.687 440.135 317.261 445.099 314.139 460.696C304.228 510.175 298.319 560.391 290.394 610.239C287.192 626.251 289.177 652.672 266.585 652.849C231.509 652.934 196.434 652.934 161.358 652.849C159.014 652.899 156.688 652.434 154.543 651.486C152.399 650.538 150.489 649.131 148.948 647.364C147.407 645.597 146.272 643.513 145.625 641.259C144.978 639.006 144.834 636.637 145.203 634.322C146.98 622.841 164.56 511.344 164.56 511.344L195.687 314.147C195.687 314.147 226.284 120.521 227.709 112.002C229.439 101.45 236.74 95.093 247.387 94.4845C305.669 94.3404 363.934 94.4045 422.216 94.3564C451.164 94.3564 481.458 97.7031 509.11 111.346C556.952 133.315 590.768 183.227 593.586 235.845L593.57 239.047Z"
                                fill="#003087"
                            />
                        </g>
                    </g>
                    <defs>
                        <clipPath id="clip0_793_1319">
                            <rect width="466" height="196" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            );
        default:
            return null;
    }
};

export default Icon;

<template>
    <div>
        
        <v-dialog v-model="open" width="400">
                <v-card :loading="loading">
                    <v-card-title></v-card-title>
                    <v-tabs v-model="$route.query.action" fixed-tabs class="login-dialog" slider-size="0" icons-and-text>
                        <v-tab :key="'login'" to="?action=login" :disabled="loginopen || loading">
                            <div class="d-flex flex-column align-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 127 124">
                                    <g id="Group 2">
                                        <path id="hoodie" d="M0.560818 113.117C0.625165 115.048 2.24346 116.562 4.17539 116.498C6.10731 116.434 7.62129 114.815 7.55694 112.883L0.560818 113.117ZM26.2716 70.6908L27.3791 74.0109C28.6551 73.5853 29.5742 72.4661 29.7437 71.1318C29.9131 69.7975 29.303 68.4841 28.174 67.753L26.2716 70.6908ZM53.5 4L53.5 0.5L53.5 0.5L53.5 4ZM99.4431 112.883C99.3787 114.815 100.893 116.434 102.825 116.498C104.757 116.562 106.375 115.048 106.439 113.117L99.4431 112.883ZM80.7284 70.6908L78.826 67.753C77.697 68.4841 77.0869 69.7975 77.2563 71.1318C77.4258 72.4661 78.3449 73.5853 79.6209 74.0109L80.7284 70.6908ZM95.7757 47.7434L98.5393 45.5957L98.5393 45.5957L95.7757 47.7434ZM7.75462 48.6724C6.28747 49.931 6.11837 52.1406 7.37692 53.6078C8.63547 55.0749 10.8451 55.244 12.3122 53.9855L7.75462 48.6724ZM93.6298 54.0939C95.1568 55.2791 97.3555 55.0019 98.5407 53.4749C99.7259 51.9479 99.4487 49.7492 97.9217 48.564L93.6298 54.0939ZM35.5039 39.8553C35.5039 37.9223 33.9369 36.3553 32.0039 36.3553C30.0709 36.3553 28.5039 37.9223 28.5039 39.8553H35.5039ZM52.7835 72.8421L51.6759 76.1622L52.2151 76.3421H52.7835V72.8421ZM78.4961 39.8553C78.4961 37.9223 76.9291 36.3553 74.9961 36.3553C73.0631 36.3553 71.4961 37.9223 71.4961 39.8553H78.4961ZM7.55694 112.883C7.2078 102.401 8.45454 93.9075 11.5942 87.462C14.6642 81.1597 19.6481 76.59 27.3791 74.0109L25.164 67.3707C15.6981 70.5285 9.21742 76.3568 5.30113 84.3966C1.45456 92.2932 0.193414 102.086 0.560818 113.117L7.55694 112.883ZM28.174 67.753C24.3328 65.2655 19.6394 61.3855 16.5687 57.4964C15.0231 55.539 14.0679 53.8025 13.7007 52.416C13.3622 51.1381 13.5693 50.4297 13.9878 49.8912L8.4607 45.5957C6.37136 48.2841 6.19029 51.4003 6.93406 54.2083C7.6491 56.9079 9.24661 59.5189 11.0748 61.8342C14.7514 66.4906 20.0895 70.8573 24.3691 73.6286L28.174 67.753ZM13.9878 49.8912C16.4597 46.7105 25.1857 35.8387 34.1665 25.7829C38.6636 20.7475 43.1652 15.9839 46.9473 12.5024C48.8453 10.7553 50.4849 9.40315 51.7996 8.5094C52.4568 8.06263 52.9633 7.77839 53.3264 7.61629C53.7298 7.43616 53.7502 7.5 53.5 7.5L53.5 0.5C52.3541 0.500001 51.2997 0.855166 50.4726 1.22442C49.6052 1.61171 48.7255 2.13491 47.8643 2.72038C46.1421 3.89111 44.2158 5.50262 42.2065 7.35221C38.1738 11.0642 33.4948 16.0263 28.9456 21.1201C19.8338 31.3225 11.0046 42.3224 8.4607 45.5957L13.9878 49.8912ZM106.439 113.117C106.807 102.086 105.545 92.2932 101.699 84.3966C97.7826 76.3568 91.3019 70.5285 81.836 67.3707L79.6209 74.0109C87.3519 76.59 92.3358 81.1597 95.4058 87.462C98.5455 93.9075 99.7922 102.401 99.4431 112.883L106.439 113.117ZM82.6309 73.6286C86.9105 70.8573 92.2486 66.4906 95.9252 61.8342C97.7534 59.5189 99.3509 56.9079 100.066 54.2083C100.81 51.4003 100.629 48.2841 98.5393 45.5957L93.0122 49.8912C93.4307 50.4297 93.6378 51.1381 93.2993 52.416C92.9321 53.8025 91.9769 55.5389 90.4314 57.4964C87.3606 61.3855 82.6672 65.2655 78.826 67.753L82.6309 73.6286ZM98.5393 45.5957C95.9954 42.3224 87.1662 31.3225 78.0544 21.1201C73.5052 16.0263 68.8262 11.0642 64.7935 7.35221C62.7842 5.50262 60.8579 3.89111 59.1357 2.72038C58.2745 2.13491 57.3948 1.61171 56.5274 1.22442C55.7003 0.855165 54.6459 0.500001 53.5 0.5L53.5 7.5C53.2498 7.5 53.2702 7.43616 53.6736 7.61629C54.0367 7.77839 54.5432 8.06263 55.2004 8.5094C56.5151 9.40315 58.1547 10.7553 60.0527 12.5024C63.8348 15.9839 68.3364 20.7475 72.8335 25.7829C81.8143 35.8387 90.5403 46.7105 93.0122 49.8912L98.5393 45.5957ZM12.3122 53.9855C36.0296 33.6402 66.7485 33.2307 93.6298 54.0939L97.9217 48.564C68.6264 25.8272 34.195 25.9914 7.75462 48.6724L12.3122 53.9855ZM28.5039 39.8553C28.5039 44.7765 29.462 52.1316 32.7849 59.1086C36.1424 66.1583 41.9817 72.9283 51.6759 76.1622L53.891 69.522C46.3883 67.0191 41.8378 61.8373 39.1047 56.0987C36.337 50.2873 35.5039 44.0174 35.5039 39.8553H28.5039ZM52.7835 76.3421C60.7373 76.3421 67.2065 70.2214 71.434 63.3894C75.7639 56.3919 78.4961 47.5151 78.4961 39.8553H71.4961C71.4961 46.0595 69.2126 53.6761 65.4814 59.706C61.6479 65.9014 57.0108 69.3421 52.7835 69.3421V76.3421Z" />
                                        <path id="book" d="M21.8402 113.165C21.9319 115.096 23.5716 116.586 25.5024 116.495C27.4332 116.403 28.9241 114.763 28.8323 112.833L21.8402 113.165ZM54.5178 86.5014C56.4507 86.5014 58.0178 84.9344 58.0178 83.0014C58.0178 81.0684 56.4507 79.5014 54.5178 79.5014L54.5178 86.5014ZM80.2032 112.834C80.1114 114.765 81.6023 116.404 83.5331 116.496C85.4639 116.588 87.1036 115.097 87.1953 113.166L80.2032 112.834ZM53.7882 79.5014C51.8552 79.5014 50.2882 81.0684 50.2882 83.0014C50.2882 84.9344 51.8552 86.5014 53.7882 86.5014L53.7882 79.5014ZM46.4928 94.5C44.5598 94.5 42.9928 96.067 42.9928 98C42.9928 99.933 44.5598 101.5 46.4928 101.5V94.5ZM62.5427 101.5C64.4757 101.5 66.0427 99.933 66.0427 98C66.0427 96.067 64.4757 94.5 62.5427 94.5V101.5ZM28.8323 112.833C28.4675 105.153 28.3486 99.7126 28.7551 95.7688C29.1628 91.814 30.0422 90.0448 31.0703 89.0685C32.1367 88.0558 34.0115 87.2703 37.9453 86.8677C41.8522 86.4678 47.0251 86.5 54.1525 86.5014L54.1539 79.5014C47.2283 79.5 41.591 79.458 37.2327 79.904C32.9014 80.3473 29.0562 81.3277 26.25 83.9926C23.4055 86.6938 22.2598 90.5138 21.792 95.0511C21.3232 99.5995 21.4787 105.555 21.8402 113.165L28.8323 112.833ZM54.1525 86.5014C54.2738 86.5014 54.3955 86.5014 54.5178 86.5014L54.5178 79.5014C54.396 79.5014 54.2747 79.5014 54.1539 79.5014L54.1525 86.5014ZM87.1953 113.166C87.5575 105.541 87.6688 99.5705 87.1243 94.9974C86.5787 90.4156 85.3102 86.6113 82.3647 83.9391C79.4801 81.3222 75.5816 80.3465 71.1845 79.9037C66.7613 79.4583 61.0824 79.5 54.1525 79.5014L54.1539 86.5014C61.28 86.5 66.5039 86.4677 70.4831 86.8685C74.4884 87.2718 76.4917 88.0625 77.6613 89.1235C78.7699 90.1292 79.7077 91.9144 80.1734 95.825C80.64 99.7443 80.5673 105.169 80.2032 112.834L87.1953 113.166ZM54.1525 79.5014C54.0315 79.5014 53.9101 79.5014 53.7882 79.5014L53.7882 86.5014C53.9106 86.5014 54.0325 86.5014 54.1539 86.5014L54.1525 79.5014ZM46.4928 101.5H62.5427V94.5H46.4928V101.5Z" />
                                        <path id="tick" d="M77.3765 91.5957C77.0882 91.8263 76.8263 92.0882 76.5957 92.3765C74.8015 94.6192 73.973 97.3498 74.3583 100.176C74.729 102.894 76.1508 105.222 77.9645 107.036C77.9919 107.063 78.0196 107.09 78.0476 107.117L89.0476 117.617C90.8796 119.365 93.7297 119.468 95.6828 117.856L127.183 91.8561C127.448 91.6374 127.69 91.3918 127.904 91.1235C129.653 88.9373 130.459 86.362 130.133 83.7548C129.821 81.2569 128.534 79.2272 127.016 77.826C125.515 76.4396 123.534 75.428 121.376 75.1624C119.228 74.898 116.698 75.3821 114.687 77.2505L94.0155 94.1247C91.5948 91.7791 89.1954 90.2127 86.7153 89.5295C82.5489 88.3819 79.3711 90 77.3765 91.5957Z"  :stroke="`${$vuetify.theme.dark ? 'rgba(5,14,29,1)' : 'white'}`" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                </svg>
                                <p class="mb-0 mt-1 text-caption text-capitaize">Login</p>
                            </div>
                        </v-tab>
                        <v-tab :key="'register'" to="?action=register" :disabled="registeropen || loading">
                            <div class="d-flex flex-column align-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 126 124">
                                    <g id="Group 1">
                                    <path id="hoodie" d="M0.560818 113.117C0.625165 115.048 2.24346 116.562 4.17539 116.498C6.10731 116.434 7.62129 114.815 7.55694 112.883L0.560818 113.117ZM26.2716 70.6908L27.3791 74.0109C28.6551 73.5853 29.5742 72.4661 29.7437 71.1318C29.9131 69.7975 29.303 68.4841 28.174 67.753L26.2716 70.6908ZM53.5 4L53.5 0.5L53.5 0.5L53.5 4ZM99.4431 112.883C99.3787 114.815 100.893 116.434 102.825 116.498C104.757 116.562 106.375 115.048 106.439 113.117L99.4431 112.883ZM80.7284 70.6908L78.826 67.753C77.697 68.4841 77.0869 69.7975 77.2563 71.1318C77.4258 72.4661 78.3449 73.5853 79.6209 74.0109L80.7284 70.6908ZM95.7757 47.7434L98.5393 45.5957L98.5393 45.5957L95.7757 47.7434ZM7.75462 48.6724C6.28747 49.931 6.11837 52.1406 7.37692 53.6078C8.63547 55.0749 10.8451 55.244 12.3122 53.9855L7.75462 48.6724ZM93.6298 54.0939C95.1568 55.2791 97.3555 55.0019 98.5407 53.4749C99.7259 51.9479 99.4487 49.7492 97.9217 48.564L93.6298 54.0939ZM35.5039 39.8553C35.5039 37.9223 33.9369 36.3553 32.0039 36.3553C30.0709 36.3553 28.5039 37.9223 28.5039 39.8553H35.5039ZM52.7835 72.8421L51.6759 76.1622L52.2151 76.3421H52.7835V72.8421ZM78.4961 39.8553C78.4961 37.9223 76.9291 36.3553 74.9961 36.3553C73.0631 36.3553 71.4961 37.9223 71.4961 39.8553H78.4961ZM7.55694 112.883C7.2078 102.401 8.45454 93.9075 11.5942 87.462C14.6642 81.1597 19.6481 76.59 27.3791 74.0109L25.164 67.3707C15.6981 70.5285 9.21742 76.3568 5.30113 84.3966C1.45456 92.2932 0.193414 102.086 0.560818 113.117L7.55694 112.883ZM28.174 67.753C24.3328 65.2655 19.6394 61.3855 16.5687 57.4964C15.0231 55.539 14.0679 53.8025 13.7007 52.416C13.3622 51.1381 13.5693 50.4297 13.9878 49.8912L8.4607 45.5957C6.37136 48.2841 6.19029 51.4003 6.93406 54.2083C7.6491 56.9079 9.24661 59.5189 11.0748 61.8342C14.7514 66.4906 20.0895 70.8573 24.3691 73.6286L28.174 67.753ZM13.9878 49.8912C16.4597 46.7105 25.1857 35.8387 34.1665 25.7829C38.6636 20.7475 43.1652 15.9839 46.9473 12.5024C48.8453 10.7553 50.4849 9.40315 51.7996 8.5094C52.4568 8.06263 52.9633 7.77839 53.3264 7.61629C53.7298 7.43616 53.7502 7.5 53.5 7.5L53.5 0.5C52.3541 0.500001 51.2997 0.855166 50.4726 1.22442C49.6052 1.61171 48.7255 2.13491 47.8643 2.72038C46.1421 3.89111 44.2158 5.50262 42.2065 7.35221C38.1738 11.0642 33.4948 16.0263 28.9456 21.1201C19.8338 31.3225 11.0046 42.3224 8.4607 45.5957L13.9878 49.8912ZM106.439 113.117C106.807 102.086 105.545 92.2932 101.699 84.3966C97.7826 76.3568 91.3019 70.5285 81.836 67.3707L79.6209 74.0109C87.3519 76.59 92.3358 81.1597 95.4058 87.462C98.5455 93.9075 99.7922 102.401 99.4431 112.883L106.439 113.117ZM82.6309 73.6286C86.9105 70.8573 92.2486 66.4906 95.9252 61.8342C97.7534 59.5189 99.3509 56.9079 100.066 54.2083C100.81 51.4003 100.629 48.2841 98.5393 45.5957L93.0122 49.8912C93.4307 50.4297 93.6378 51.1381 93.2993 52.416C92.9321 53.8025 91.9769 55.5389 90.4314 57.4964C87.3606 61.3855 82.6672 65.2655 78.826 67.753L82.6309 73.6286ZM98.5393 45.5957C95.9954 42.3224 87.1662 31.3225 78.0544 21.1201C73.5052 16.0263 68.8262 11.0642 64.7935 7.35221C62.7842 5.50262 60.8579 3.89111 59.1357 2.72038C58.2745 2.13491 57.3948 1.61171 56.5274 1.22442C55.7003 0.855165 54.6459 0.500001 53.5 0.5L53.5 7.5C53.2498 7.5 53.2702 7.43616 53.6736 7.61629C54.0367 7.77839 54.5432 8.06263 55.2004 8.5094C56.5151 9.40315 58.1547 10.7553 60.0527 12.5024C63.8348 15.9839 68.3364 20.7475 72.8335 25.7829C81.8143 35.8387 90.5403 46.7105 93.0122 49.8912L98.5393 45.5957ZM12.3122 53.9855C36.0296 33.6402 66.7485 33.2307 93.6298 54.0939L97.9217 48.564C68.6264 25.8272 34.195 25.9914 7.75462 48.6724L12.3122 53.9855ZM28.5039 39.8553C28.5039 44.7765 29.462 52.1316 32.7849 59.1086C36.1424 66.1583 41.9817 72.9283 51.6759 76.1622L53.891 69.522C46.3883 67.0191 41.8378 61.8373 39.1047 56.0987C36.337 50.2873 35.5039 44.0174 35.5039 39.8553H28.5039ZM52.7835 76.3421C60.7373 76.3421 67.2065 70.2214 71.434 63.3894C75.7639 56.3919 78.4961 47.5151 78.4961 39.8553H71.4961C71.4961 46.0595 69.2126 53.6761 65.4814 59.706C61.6479 65.9014 57.0108 69.3421 52.7835 69.3421V76.3421Z" />
                                    <path id="book" d="M21.8402 113.165C21.9319 115.096 23.5716 116.586 25.5024 116.495C27.4332 116.403 28.9241 114.763 28.8323 112.833L21.8402 113.165ZM54.5178 86.5014C56.4507 86.5014 58.0178 84.9344 58.0178 83.0014C58.0178 81.0684 56.4507 79.5014 54.5178 79.5014L54.5178 86.5014ZM80.2032 112.834C80.1114 114.765 81.6023 116.404 83.5331 116.496C85.4639 116.588 87.1036 115.097 87.1953 113.166L80.2032 112.834ZM53.7882 79.5014C51.8552 79.5014 50.2882 81.0684 50.2882 83.0014C50.2882 84.9344 51.8552 86.5014 53.7882 86.5014L53.7882 79.5014ZM46.4928 94.5C44.5598 94.5 42.9928 96.067 42.9928 98C42.9928 99.933 44.5598 101.5 46.4928 101.5V94.5ZM62.5427 101.5C64.4757 101.5 66.0427 99.933 66.0427 98C66.0427 96.067 64.4757 94.5 62.5427 94.5V101.5ZM28.8323 112.833C28.4675 105.153 28.3486 99.7126 28.7551 95.7688C29.1628 91.814 30.0422 90.0448 31.0703 89.0685C32.1367 88.0558 34.0115 87.2703 37.9453 86.8677C41.8522 86.4678 47.0251 86.5 54.1525 86.5014L54.1539 79.5014C47.2283 79.5 41.591 79.458 37.2327 79.904C32.9014 80.3473 29.0562 81.3277 26.25 83.9926C23.4055 86.6938 22.2598 90.5138 21.792 95.0511C21.3232 99.5995 21.4787 105.555 21.8402 113.165L28.8323 112.833ZM54.1525 86.5014C54.2738 86.5014 54.3955 86.5014 54.5178 86.5014L54.5178 79.5014C54.396 79.5014 54.2747 79.5014 54.1539 79.5014L54.1525 86.5014ZM87.1953 113.166C87.5575 105.541 87.6688 99.5705 87.1243 94.9974C86.5787 90.4156 85.3102 86.6113 82.3647 83.9391C79.4801 81.3222 75.5816 80.3465 71.1845 79.9037C66.7613 79.4583 61.0824 79.5 54.1525 79.5014L54.1539 86.5014C61.28 86.5 66.5039 86.4677 70.4831 86.8685C74.4884 87.2718 76.4917 88.0625 77.6613 89.1235C78.7699 90.1292 79.7077 91.9144 80.1734 95.825C80.64 99.7443 80.5673 105.169 80.2032 112.834L87.1953 113.166ZM54.1525 79.5014C54.0315 79.5014 53.9101 79.5014 53.7882 79.5014L53.7882 86.5014C53.9106 86.5014 54.0325 86.5014 54.1539 86.5014L54.1525 79.5014ZM46.4928 101.5H62.5427V94.5H46.4928V101.5Z" />
                                    <path id="pen border" d="M81.4583 113.405C81.2551 115.274 82.0202 117.117 83.487 118.292C84.9539 119.468 86.9194 119.812 88.6988 119.206L100.427 115.213C101.242 114.936 101.981 114.47 102.584 113.855L126.691 89.2309C127.722 88.1777 128.287 86.7549 128.26 85.2814C128.233 83.8078 127.615 82.4069 126.546 81.3927L117.424 72.7411C115.265 70.6932 111.869 70.7341 109.76 72.8333L84.3494 98.1225C83.4579 99.0098 82.8974 100.176 82.7614 101.426L81.4583 113.405Z" :stroke="`${$vuetify.theme.dark ? 'rgba(5,14,29,1)' : 'white'}`" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path id="pen" class="spec" d="M88.2292 102.021L86.9261 114L98.6539 110.007L122.761 85.3832L113.639 76.7316L88.2292 102.021Z" :fill="`${$vuetify.theme.dark ? 'rgba(5,14,29,1)' : 'white'}`" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                </svg>
                                <p class="mb-0 mt-1 text-caption text-capitaize">Register</p>
                            </div>
                        </v-tab>
                    </v-tabs>

                    <v-card-actions class="justify-center my-2 px-10">
                        <v-divider />
                        <div class="d-flex align-items-center px-3 py-1 rounded-pill mx-3" style="border: 1px solid rgba(255, 255, 255, 0.12);" >
                            <logo type="hover" size='xs' speed="fast" />
                            <p class="text-caption mb-0 ml-4" style="font-family: Monospace !important;line-height: 30px;">
                                <span style="font-family: Monospace !important;" class="mr-1">></span>{{loginopen ? 'logname' : registeropen ? 'whoami' : 'help'}} </p>
                        </div>
                        <v-divider />
                    </v-card-actions>



                    <form v-if="loginopen" @submit.prevent="login">
                        <v-card-text class="px-10">
                            <v-text-field v-model="loginvars.username" placeholder="Username" class="py-0" prepend-inner-icon="mdi-account-circle" outlined />
                            <v-text-field v-model="loginvars.password" placeholder="Password" :append-icon="loginvars.showpass ? 'mdi-eye' : 'mdi-eye-off'" :type="loginvars.showpass ? 'text' : 'password'" class="py-0" prepend-inner-icon="mdi-lock" outlined hide-details @click:append="loginvars.showpass = !loginvars.showpass" />
                        </v-card-text>
                        <v-card-text class="px-16 mb-5">
                            <v-btn color="primary" :disabled="loading" type="submit" class="login-button" style="width: 100%;"> Login </v-btn>
                        </v-card-text>
                    </form>

                    <div v-else-if="registeropen">

                        <form v-if="stype==='hacker'" @submit.prevent="signup">
                            <v-card-text v-if="!signupvars.submitted" class="px-10">
                                <v-text-field v-model="signupvars.username" placeholder="Username" class="py-0" prepend-inner-icon="mdi-account-circle" outlined />
                                <v-text-field v-model="signupvars.email" placeholder="Email" class="py-0" prepend-inner-icon="mdi-email" outlined />
                                <v-text-field v-model="signupvars.name" placeholder="Full Name" class="py-0" prepend-inner-icon="mdi-account" outlined />
                                <v-text-field v-model="signupvars.password" placeholder="Password" type="password" class="py-0" prepend-inner-icon="mdi-lock" outlined hide-details />
                                <v-checkbox v-model="signupvars.referred" :label="'Have a Ref Code?'" ></v-checkbox>
                                <v-text-field v-if="signupvars.referred" v-model="signupvars.refcode" placeholder="Reference Code" type="password" class="py-0" prepend-inner-icon="mdi-key" outlined hide-details />
                            </v-card-text>
                            <v-card-text v-else class="px-10">
                                <p class="text-body1">Account Signup Successful. An Email for activation has been sent to your registered Email. Follow the steps provided there.</p>
                            </v-card-text>
                            <v-card-text v-if="!signupvars.submitted" class="px-16 mb-5">
                                <v-btn color="primary" :disabled="loading" type="submit" class="login-button" style="width: 100%;"> Signup </v-btn>
                            </v-card-text>
                            <v-card-text v-else class="px-16 mb-5">
                                <v-btn color="primary" :disabled="loading" to="?action=login" class="login-button" style="width: 100%;"> Login </v-btn>
                            </v-card-text>
                        </form>

                        <form v-else-if="stype==='company'" @submit.prevent="newcontact">
                            <v-stepper v-if="!registervars.submitted" v-model="e1" color="transparent" style="background: transparent !important;">

                                <v-stepper-items>
                                    <v-stepper-content step="1" class="pt-2">
                                        <v-card class="mb-12 pt-2 px-10" color="transparent" flat>
                                            <v-text-field v-model="registervars.name" required outlined placeholder="Company Name" class="pb-0" />
                                            <v-text-field v-model="registervars.email" required outlined placeholder="Official Email" class="pb-0" />
                                            <v-text-field v-model="registervars.username" required outlined placeholder="Preferred Username" class="pb-0" />
                                <v-text-field v-model="registervars.password" placeholder="Set Password" type="password" class="py-0" outlined hide-details @keyup.enter="handleEnter" />
                                        </v-card>

                                        <v-card-text class="px-16 mb-5">
                                            <v-btn color="primary" :disabled="loading" class="login-button" style="width: 100%;" @click="next"> Continue </v-btn>
                                        </v-card-text>
                                    </v-stepper-content>

                                    <v-stepper-content step="2" class="pt-2">
                                        <v-card class="mb-12 pt-2 px-10" color="transparent" flat>
                                            <v-card-subtitle class="pl-0">Choose Plan
                                                <v-menu open-on-hover :close-on-content-click="false" :nudge-width="200" offset-x >
                                                    <template #activator="{ on, attrs }"><v-icon small v-bind="attrs" v-on="on">mdi-help-circle</v-icon></template>
                                                    <v-card width="300">
                                                        <v-card-text>About Cyber3ra Plans</v-card-text>
                                                        <v-divider />
                                                        <v-card-text> <strong>Startup</strong> This is the basic Startup plan with benefits etc. </v-card-text>
                                                        <v-card-text> <strong>Enterprise</strong> This is the Enterprise level. </v-card-text>
                                                        <v-card-text> <strong>Managed</strong> It would be signed up and managed. </v-card-text>
                                                        <v-card-actions>
                                                            <v-spacer />
                                                            <v-btn color="primary" text router to="/awards" small > Learn More </v-btn>
                                                        </v-card-actions>
                                                    </v-card>
                                                </v-menu>
                                            </v-card-subtitle>
                                            <v-select v-model="ctype" item-text="label" item-value="value" :items="ctypes" outlined ></v-select>
                                            <v-text-field v-model="registervars.contact" required outlined placeholder="Contact Number" class="pb-0" />
                                            <!-- <v-select v-model="reason" item-text="label" required item-value="value" :items="reasons" outlined ></v-select> -->
                                        </v-card>


                                        <v-card-text class="px-16 mb-5">
                                            <v-btn color="primary" :disabled="loading" class="login-button" style="width: 100%;" type="submit"> Register </v-btn>
                                        </v-card-text>

                                        <v-btn text @click="e1 = 1">Go Back</v-btn>
                                    </v-stepper-content>

                                </v-stepper-items>
                            </v-stepper>
                            <v-card v-if="registervars.submitted" class="px-10">
                                <v-card-title>Successful</v-card-title>
                                <v-card-subtitle>An Email has been sent to you. Please follow the instructions accordingly.</v-card-subtitle>
                            </v-card>
                        </form>
                        <v-card-text v-else>
                            <v-row class="px-0c mx-0">
                                <v-col cols="6" class="" >
                                    <v-card to="?action=register" @click="nextc('hacker')"> 
                                        <v-card-title class="mb-2"><v-icon large>mdi-account-tie</v-icon></v-card-title>
                                        <v-card-subtitle>I'm a Hacker</v-card-subtitle>
                                    </v-card>
                                </v-col>
                                <v-col cols="6" class="" >
                                    <v-card to="?action=register" @click="nextc('company')">
                                        <v-card-title class="mb-2"><v-icon large>mdi-domain</v-icon></v-card-title>
                                        <v-card-subtitle>I'm a Company</v-card-subtitle>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </div>
                    <div v-else>
                        <v-card-title>
                            Stuck Somewhere Eh?
                        </v-card-title>
                        <v-card-text >
                            <p class="text-body1">Too much testing might do this. Follow the links below.</p>
                        </v-card-text>
                    </div>
                    <v-card-actions>
                        <NuxtLink class="ml-1 text-caption" router to="?action=register">Register</NuxtLink>
                        <v-spacer />
                        <!-- <NuxtLink router to="/forgot-password"> -->
                        <a href="/forgot-password" class="ml-1 text-caption">Forgot Password</a>
                        <!-- </NuxtLink> -->
                    </v-card-actions>
                </v-card>
        </v-dialog>

        
        <!-- <v-btn icon small class="mr-1" @click="setlogin()">
            <v-icon>mdi-power</v-icon>
        </v-btn> -->
        <!-- {{mode}}{{mode === 'signup'}}{{dsignup}} -->
    </div>
</template>

<script>
import Logo from '../universal/Logo.vue'
export default {
    name: 'MainAuth',
    components: {Logo,},
    props: {
        mode: { type: String, default: 'signup'},
        setlogin: { type: Function, default: ()=> console.log('no function provided') },
        setsignup: { type: Function, default: ()=> console.log('no function provided') },
        close: { type: Function, default: ()=> console.log('no function provided') },
    },
    data() {
        return {
            loading: false,
            open: this.$route.query.action === 'login' || this.$route.query.action === 'register',
            loginopen: this.$route.query.action === 'login',
            registeropen: this.$route.query.action === 'register',
            type: 'none',
            stype: 'none',
            e1: 1,
            ctype: { label: 'Startup', value: 'S' },
            ctypes: [
                { label: 'Startup', value: 'S' },
                { label: 'Enterprise', value: 'E' },
                { label: 'Managed', value: 'M' },
            ],
            reason: '-',
            reasons: [
                '-',
                'I would like to talk to sales',
                'I would like a product demo',
                'I would like to partner with Cyber3ra',
                'I just want to Signup'
            ],
            signupvars: {
                submitted: false,
                username: '',
                name: '',
                email: '',
                password: '',
                referred: false,
                refcode: ''
            },
            registervars: {
                submitted: false,
                name: '',
                email: '',
                username: '',
                contact: '',
                password: '',
            },
            loginvars: {
                username: '',
                password: '',
                loading: false,
                showpass: false
            },
        }
    },
    watch: { 
        open(newVal, oldVal) {
            if(!newVal){
                // this.close()
                this.$router.replace('/')
            }
        },
        $route(newVal, oldVal) {
            // console.log(newVal)
            // console.log(this.$route.query.action,this.$route.query.action === 'login')
            // console.log(this.$route.query)
            this.loginopen = this.$route.query.action === 'login'
            this.registeropen = this.$route.query.action === 'register'
            this.open = this.loginopen || this.registeropen
        },
      	mode (newVal, oldVal) { 
            this.dsignup = newVal === 'signup';
            this.dlogin = newVal === 'login';
        },
    },
    methods: {
        nextc (meth) {
            // console.log(meth)
            // console.log(this.$route.query.action)
            // console.log(this.$route.query)
            this.stype = meth
        },
        async signup() {
            if(this.signupvars.username.length < 1 || this.signupvars.email.length < 1 || this.signupvars.name.length < 1 || this.signupvars.password.length < 1) {
                this.$store.commit('showSnack', { message: 'Please add everything peoperly', type: 'warning', timeout: 5000 })
                return 0;
            }
            this.loading = true;
            const post = {
                username: this.signupvars.username,
                name: this.signupvars.name,
                email: this.signupvars.email,
                password: this.signupvars.password,
            }
            if(this.signupvars.referred) {
                post.refcode = this.signupvars.refcode
            }
            try {
                const resp = await this.$axios.post('/app/accounts/signup',post);
              //  console.log(resp.data);
                if(!resp.data.error){
                    this.signupvars.submitted = true;
                    // this.close()
                }
            }
            catch (e) {
                console.log('Error : ',e);
            }
            this.loading = false;
        },
        async login() {
            const starttime = new Date();
            if (this.loginvars.username.length < 1 || this.loginvars.password.length < 1) {
                this.$store.commit('showSnack', { message: 'Please add everything peoperly', type: 'warning', timeout: 5000 })
                return 0;}
            this.loading = true;
            // console.log('aha')
            const post = {
                username: this.loginvars.username,
                password: this.loginvars.password,
            }
            try {
                // The Below method takes too much time
                // const response = await this.$auth.loginWith('local', { data: post })
                const response = await this.$axios.post('/app/accounts/login', post)
                // console.log(response.data)
                if(!response.data.error){
                    this.$auth.setUser(response.data.details)
                    if(!response.data.new_user) {
                        localStorage.setItem("new_user","false")
                    }
                    // this.$store.commit('LOGIN',response.data.details)
                    await this.$auth.setUserToken(response.data.access_token, response.data.refresh_token);
                    console.log("Elapsed time",new Date() - starttime);
                    this.$router.push('/dashboard')
                }
                
            } catch (err) {
                console.log(err)
            }
            this.loading = false;
        },
        handleEnter (e) {
            e.preventDefault()
            console.log(e.keyCode)
            if(e.keyCode===13){
                this.next()
            }
        },
        next () {
            const re = /\S+@\S+\.\S+/;
            if(this.registervars.name.length < 1 || this.registervars.email.length < 1 || this.registervars.username.length < 1){
                this.$store.commit('showSnack', { message: 'Please add everything peoperly', type: 'warning', timeout: 5000 })
                // console.log(this)
                return 0;
            }
            if (re.test(this.registervars.email)) {
                // console.log('valid')
            } else {
                this.$store.commit('showSnack', { message: 'Please enter a valid Email', type: 'warning', timeout: 5000 })
                return 0;
            }
            this.e1 = 2
        },
        async newcontact () {
        // if(this.reason === '-'){
        //   return 0;
        // }
            this.loading = true;
            const post = {
                username: this.registervars.username,
                name: this.registervars.name,
                email: this.registervars.email,
                password: this.registervars.password,
                reason: this.reason,
                type: this.ctype,
                contact: this.registervars.contact
            }
            if(this.registervars.referred) {
                post.refcode = this.registervars.refcode
            }
            try {
                const resp = await this.$axios.post('/app/accounts/companysignup',post);
                //  console.log(resp.data);
                if(!resp.data.error){
                    this.registervars.submitted = true;
                }
            }
            catch (e) {
                console.log('Error : ',e);
            }
            this.loading = false;
        }
    },
}
</script>
<style>
.login-dialog .v-tabs-slider-wrapper {
    display: flex;
    justify-content: center;
}
.login-dialog .v-tabs-slider {
    width: 30% !important;
}
.login-dialog.theme--dark.v-tabs > .v-tabs-bar .v-tab, .login-dialog.theme--dark.v-tabs > .v-tabs-bar .v-tab svg {
    color: rgba(255, 255, 255, 0.6) !important;
    fill: rgba(255, 255, 255, 0.6) !important;
}
.login-dialog.theme--dark.v-tabs > .v-tabs-bar .v-tab--disabled, .login-dialog.theme--dark.v-tabs > .v-tabs-bar .v-tab--disabled svg {
    color: #03cdd7 !important;
    fill: #03cdd7 !important;
    opacity: 1;
}
.login-dialog.theme--dark.v-tabs > .v-tabs-bar .v-tab .spec {
    stroke: rgba(255, 255, 255, 0.6);
}
.login-dialog.theme--dark.v-tabs > .v-tabs-bar .v-tab--disabled .spec {
    stroke: #03cdd7;
}
.theme--dark.v-tabs.login-dialog .v-tab--active:hover::before, .theme--dark.v-tabs.login-dialog .v-tab--active::before {
    opacity: 0 !important;
}
.login-button:hover {
    box-shadow: 0 0 10px #07cad4e3, 0 0 40px #07cad4e3, 0 0 80px #07cad4e3 !important;
}
</style>
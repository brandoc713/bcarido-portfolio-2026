import React from 'react';

const LogoBackgroundAnimation = () => (
    <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
        <svg
            className="BgAnimation__svg"
            viewBox="0 0 1073 785"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: '100%', height: '100%' }}
        >

            {/* ========================================== */}
            {/* THE TRACKS (YOUR CUSTOM LOGO VECTORS)      */}
            {/* Changed opacity to 0.05 for more transparency */}
            {/* ========================================== */}
            <g opacity="0.05">
                <path id="track_1" stroke="url(#track_glow)" d="M192.058 0V784.5" />
                <path id="track_2" stroke="url(#track_glow)" d="M191.558 59.5L236.058 33.5M191.558 59.5L148.058 33.5M191.558 59.5V119.5M191.558 119.5L266.058 71M191.558 119.5L120.058 71M191.558 119.5V170M191.558 170L298.058 119.5M191.558 170L86.5583 119.5" />
                <path id="track_3" stroke="url(#track_glow)" d="M191.558 170V226.5M191.558 226.5L326.058 183.5M191.558 226.5L60.0583 183.5M191.558 226.5V288.5M191.558 288.5L365.558 247M191.558 288.5L19.0583 247M191.558 288.5V340.5M191.558 340.5H386.058M191.558 340.5H0.0583496M191.558 340.5V408M191.558 408L386.058 442M191.558 408L0.0583496 430.5M191.558 408V479.5M191.558 479.5L354.058 524.5M191.558 479.5L28.5583 524.5M191.558 479.5V539.5M191.558 539.5L272.058 584.5M191.558 539.5L95.5583 584.5" />
                <path id="track_4" stroke="url(#track_glow)" d="M616.558 136.5L363.558 247L193.058 286.5V340.5M193.058 340.5H388.058H616.558M193.058 340.5V408L388.058 442L845.058 631" />
                <path id="track_5" stroke="url(#track_glow)" d="M1072.06 221V266M1072.06 266V325.5M1072.06 266L1004.56 234L882.558 202H776.058L652.058 249L614.558 290V337V393L652.058 447.5L776.058 496H882.558L1004.56 468L1072.06 423" />
                <path id="track_6" stroke="url(#track_glow)" d="M1004.56 134.5L963.058 267.5L922.058 393L877.058 535.5L843.058 629L804.058 535.5L768.558 425L742.058 329.5L717.558 243.5L693.558 172L678.558 134.5M1004.56 134.5H944.558M1004.56 134.5H1066.06M678.558 134.5H742.058M678.558 134.5H616.558" />
            </g>

            {/* ========================================== */}
            {/* THE COMETS (12 COMETS, 2 PER LINE)         */}
            {/* rx/ry set to 1.5, d shortened to -20,     */}
            {/* strokeWidth set to 1.5                    */}
            {/* ========================================== */}

            {/* Comet 1a (Purple, Track 1) */}
            <g>
                <ellipse rx="1.5" ry="1.5" fill="#945DD6">
                    <animateMotion dur="10s" begin="0s" repeatCount="indefinite" rotate="auto"><mpath xlinkHref="#track_1" /></animateMotion>
                </ellipse>
                <path d="M 0 0 L -20 0" stroke="url(#purple_tail)" strokeWidth="1.5">
                    <animateMotion dur="10s" begin="0s" repeatCount="indefinite" rotate="auto"><mpath xlinkHref="#track_1" /></animateMotion>
                </path>
            </g>
            {/* Comet 1b (Purple, Track 1) - Delayed */}
            <g>
                <ellipse rx="1.5" ry="1.5" fill="#945DD6">
                    <animateMotion dur="10s" begin="6s" repeatCount="indefinite" rotate="auto"><mpath xlinkHref="#track_1" /></animateMotion>
                </ellipse>
                <path d="M 0 0 L -20 0" stroke="url(#purple_tail)" strokeWidth="1.5">
                    <animateMotion dur="10s" begin="6s" repeatCount="indefinite" rotate="auto"><mpath xlinkHref="#track_1" /></animateMotion>
                </path>
            </g>

            {/* Comet 2a (Orange, Track 2) */}
            <g>
                <ellipse rx="1.5" ry="1.5" fill="#F46737">
                    <animateMotion dur="12s" begin="2s" repeatCount="indefinite" rotate="auto"><mpath xlinkHref="#track_2" /></animateMotion>
                </ellipse>
                <path d="M 0 0 L -20 0" stroke="url(#orange_tail)" strokeWidth="1.5">
                    <animateMotion dur="12s" begin="2s" repeatCount="indefinite" rotate="auto"><mpath xlinkHref="#track_2" /></animateMotion>
                </path>
            </g>
            {/* Comet 2b (Orange, Track 2) - Delayed */}
            <g>
                <ellipse rx="1.5" ry="1.5" fill="#F46737">
                    <animateMotion dur="12s" begin="8s" repeatCount="indefinite" rotate="auto"><mpath xlinkHref="#track_2" /></animateMotion>
                </ellipse>
                <path d="M 0 0 L -20 0" stroke="url(#orange_tail)" strokeWidth="1.5">
                    <animateMotion dur="12s" begin="8s" repeatCount="indefinite" rotate="auto"><mpath xlinkHref="#track_2" /></animateMotion>
                </path>
            </g>

            {/* Comet 3a (Blue, Track 3) */}
            <g>
                <ellipse rx="1.5" ry="1.5" fill="#13ADC7">
                    <animateMotion dur="14s" begin="1s" repeatCount="indefinite" rotate="auto"><mpath xlinkHref="#track_3" /></animateMotion>
                </ellipse>
                <path d="M 0 0 L -20 0" stroke="url(#blue_tail)" strokeWidth="1.5">
                    <animateMotion dur="14s" begin="1s" repeatCount="indefinite" rotate="auto"><mpath xlinkHref="#track_3" /></animateMotion>
                </path>
            </g>
            {/* Comet 3b (Blue, Track 3) - Delayed */}
            <g>
                <ellipse rx="1.5" ry="1.5" fill="#13ADC7">
                    <animateMotion dur="14s" begin="7s" repeatCount="indefinite" rotate="auto"><mpath xlinkHref="#track_3" /></animateMotion>
                </ellipse>
                <path d="M 0 0 L -20 0" stroke="url(#blue_tail)" strokeWidth="1.5">
                    <animateMotion dur="14s" begin="7s" repeatCount="indefinite" rotate="auto"><mpath xlinkHref="#track_3" /></animateMotion>
                </path>
            </g>

            {/* Comet 4a (Purple, Track 4) */}
            <g>
                <ellipse rx="1.5" ry="1.5" fill="#945DD6">
                    <animateMotion dur="8s" begin="4s" repeatCount="indefinite" rotate="auto"><mpath xlinkHref="#track_4" /></animateMotion>
                </ellipse>
                <path d="M 0 0 L -20 0" stroke="url(#purple_tail)" strokeWidth="1.5">
                    <animateMotion dur="8s" begin="4s" repeatCount="indefinite" rotate="auto"><mpath xlinkHref="#track_4" /></animateMotion>
                </path>
            </g>
            {/* Comet 4b (Purple, Track 4) - Delayed */}
            <g>
                <ellipse rx="1.5" ry="1.5" fill="#945DD6">
                    <animateMotion dur="8s" begin="9s" repeatCount="indefinite" rotate="auto"><mpath xlinkHref="#track_4" /></animateMotion>
                </ellipse>
                <path d="M 0 0 L -20 0" stroke="url(#purple_tail)" strokeWidth="1.5">
                    <animateMotion dur="8s" begin="9s" repeatCount="indefinite" rotate="auto"><mpath xlinkHref="#track_4" /></animateMotion>
                </path>
            </g>

            {/* Comet 5a (Orange, Track 5) */}
            <g>
                <ellipse rx="1.5" ry="1.5" fill="#F46737">
                    <animateMotion dur="15s" begin="0.5s" repeatCount="indefinite" rotate="auto"><mpath xlinkHref="#track_5" /></animateMotion>
                </ellipse>
                <path d="M 0 0 L -20 0" stroke="url(#orange_tail)" strokeWidth="1.5">
                    <animateMotion dur="15s" begin="0.5s" repeatCount="indefinite" rotate="auto"><mpath xlinkHref="#track_5" /></animateMotion>
                </path>
            </g>
            {/* Comet 5b (Orange, Track 5) - Delayed */}
            <g>
                <ellipse rx="1.5" ry="1.5" fill="#F46737">
                    <animateMotion dur="15s" begin="5s" repeatCount="indefinite" rotate="auto"><mpath xlinkHref="#track_5" /></animateMotion>
                </ellipse>
                <path d="M 0 0 L -20 0" stroke="url(#orange_tail)" strokeWidth="1.5">
                    <animateMotion dur="15s" begin="5s" repeatCount="indefinite" rotate="auto"><mpath xlinkHref="#track_5" /></animateMotion>
                </path>
            </g>

            {/* Comet 6a (Blue, Track 6) */}
            <g>
                <ellipse rx="1.5" ry="1.5" fill="#13ADC7">
                    <animateMotion dur="11s" begin="3s" repeatCount="indefinite" rotate="auto"><mpath xlinkHref="#track_6" /></animateMotion>
                </ellipse>
                <path d="M 0 0 L -20 0" stroke="url(#blue_tail)" strokeWidth="1.5">
                    <animateMotion dur="11s" begin="3s" repeatCount="indefinite" rotate="auto"><mpath xlinkHref="#track_6" /></animateMotion>
                </path>
            </g>
            {/* Comet 6b (Blue, Track 6) - Delayed */}
            <g>
                <ellipse rx="1.5" ry="1.5" fill="#13ADC7">
                    <animateMotion dur="11s" begin="8.5s" repeatCount="indefinite" rotate="auto"><mpath xlinkHref="#track_6" /></animateMotion>
                </ellipse>
                <path d="M 0 0 L -20 0" stroke="url(#blue_tail)" strokeWidth="1.5">
                    <animateMotion dur="11s" begin="8.5s" repeatCount="indefinite" rotate="auto"><mpath xlinkHref="#track_6" /></animateMotion>
                </path>
            </g>

            {/* ========================================== */}
            {/* DEFINITIONS (GRADIENTS & GLOWS)              */}
            {/* x2 set to -20 to match shorter tail          */}
            {/* ========================================== */}
            <defs>
                <radialGradient id="track_glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(536 392) rotate(90) scale(500)">
                    <stop offset="0.3" stopColor="#FBFBFB" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>

                <linearGradient id="purple_tail" x1="0" y1="0" x2="-20" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#945DD6" />
                    <stop offset="1" stopColor="#945DD6" stopOpacity="0" />
                </linearGradient>

                <linearGradient id="orange_tail" x1="0" y1="0" x2="-20" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F46737" />
                    <stop offset="1" stopColor="#F46737" stopOpacity="0" />
                </linearGradient>

                <linearGradient id="blue_tail" x1="0" y1="0" x2="-20" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#13ADC7" />
                    <stop offset="1" stopColor="#13ADC7" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    </div>
);

export default LogoBackgroundAnimation;

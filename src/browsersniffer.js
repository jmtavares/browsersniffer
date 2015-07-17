/* global bowser */
/* global window */

(function (name, global, factory) {
    'use strict';
    global[name] = factory();
}('browsersniffer', this, function () {
    'use strict';

    function getBrowserFlags() {
        return {
            chrome: 'Chrome',
            firefox: 'Firefox',
            msie: 'Internet Explorer',
            msedge: 'Internet Explorer Edge',
            ios: 'iOS Native',
            opera: 'Opera',
            phantom: 'PhantomJS',
            phantomjs: 'PhantomJS',
            safari: 'Safari',
            seamonkey: 'SeaMonkey',
            blackberry: 'BlackBerry',
            webos: 'WebOS',
            silk: 'Amazon Kindle Browser',
            bada: 'Bada',
            tizen: 'Tizen',
            sailfish: 'Sailfish'
        };
    }

    function getMobileOSFlags() {
        return {
            android: 'Android',
            windowsphone: 'Windows Phone',
            iphone: 'iPhone',
            ipad: 'iPad',
            ipod: 'iPod',
            blackberry: 'Blackberry',
            firefoxos: 'Firefox OS',
            webos: 'WebOS',
            bada: 'Bada',
            tizen: 'Tizen',
            sailfish: 'Sailfish'
        };
    }

    function getNavigatorProperties(browserData) {
        if (window.navigator) {
            browserData.language = window.navigator.language;
            browserData.javaEnabled = window.navigator.javaEnabled();
            browserData.onLine = window.navigator.onLine;
        }
    }

    function getScreenProperties(browserData) {
        var screen = {};

        if (window.screen) {
            screen.currentResolution = window.screen.width + 'x' + window.screen.height;
            screen.colorDepth = window.screen.colorDepth;
            if (window.hasOwnProperty('orientation')) {
                screen.orientation = window.Math.abs(window.orientation) - 90 === 0 ? 'landscape' : 'portrait';
            }
        }

        if (window.navigator) {
            screen.maxTouchPoints = window.navigator.maxTouchPoints;
        }

        browserData.screen = screen;
    }

    function getPerformanceProperties(browserData) {
        var navigationStart;
        var timing = {};

        if (window.performance && window.performance.timing) {
            navigationStart = window.performance.timing.navigationStart;

            for (var i in window.performance.timing) {
                if (i !== 'navigationStart') {
                    if (window.performance.timing[i] < navigationStart) {
                        timing[i] = window.performance.timing[i];
                    } else {
                        timing[i] = window.performance.timing[i] - navigationStart;
                    }
                }
            }
        }

        browserData.timing = timing;
    }

    function detect() {
        var browserDescription = 'Unknown Browser';
        var operatingSystemDescription = 'Unknown Operating System';
        var bowserInstance;
        var browserData;
        var browserFlags = getBrowserFlags();
        var mobileOperatingSystem = getMobileOSFlags();
        var flag;

        try {
            bowserInstance = bowser;
        } catch (e) {}

        for (flag in bowserInstance) {
            if (browserFlags.hasOwnProperty(flag)) {
                browserDescription = browserFlags[flag];
            }

            if (mobileOperatingSystem.hasOwnProperty(flag)) {
                operatingSystemDescription = mobileOperatingSystem[flag];
            }
        }

        browserData = {
            browser: browserDescription,
            version: bowserInstance.version,
            mobileOS: operatingSystemDescription,
            mobileOSVersion: bowserInstance.osversion || '',
            bowser: bowserInstance
        };

        getNavigatorProperties(browserData);
        getScreenProperties(browserData);
        getPerformanceProperties(browserData);

        return browserData;
    }

    return {
        detect: detect
    };
}));

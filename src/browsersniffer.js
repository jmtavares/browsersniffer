/* global bowser */

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
            android: 'Android Native',
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
            iphone: 'iOS Iphone',
            ipad: 'iOS Ipad',
            ipod: 'iOS Ipod',
            blackberry: 'Blackberry',
            firefoxos: 'Firefox OS',
            webos: 'WebOS',
            bada: 'Bada',
            tizen: 'Tizen',
            sailfish: 'Sailfish'
        };
    }

    function detect() {
        var browserDescription = 'Unknown Browser';
        var operatingSystemDescription = 'Unknown Operating System';
        var bowserInstance;
        var browserData = {};
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

        browserData.browser = browserDescription;
        browserData.mobileOperatingSystem = operatingSystemDescription;
        browserData.version = bowserInstance.version;
        browserData.bowser = bowserInstance;


        return browserData;
    }

    return {
        detect: detect
    };
}));

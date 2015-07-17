# Browser Sniffer

Basically this uses [Bowser](https://github.com/ded/bowser) to detect the browser name, browser version and mobile operating system (if possible).


## Install

* `npm install`
* `grunt`


Include the minified version in your page and call this method:

``` js
window.browsersniffer.detect();
```

And it will return an object like this:

``` json
"browser" : "Chrome",
"mobileOperatingSystem" : "Unknown Operating System",
"version" : "43.0",
"bowser" : {
    "name" : "Chrome",
    "chrome" : true,
    "version" : "43.0",
    "webkit" : true,
    "a":true
    }
}
```

The bowser result is added to this object if you need to check anything else.

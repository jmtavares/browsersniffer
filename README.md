# Browser Sniffer

Browser Sniffer uses [Bowser](https://github.com/ded/bowser) to detect the browser name, browser version and mobile operating system (if possible).

You can check in the Bowser Repository the full list of devices supported ([User Agents](https://github.com/ded/bowser/blob/master/src/useragents.js).

## Install

* `npm install`
* `grunt`


Include the minified version (dist/browsersniffer.min.js) in your page and call this method:

``` js
window.browsersniffer.detect();
```

And it will return an object like this:

``` json
{
  "browser": "Android Native",
  "mobileOperatingSystem": "Android",
  "version": "4.0",
  "bowser": {
    "name": "Android",
    "version": "4.0",
    "webkit": true,
    "android": true,
    "osversion": "4.0",
    "mobile": true,
    "x": true
  }
}
```

The bowser result is added to this object if you need to check anything else.



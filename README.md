# Browser Sniffer

Browser Sniffer aggregates information about the browser (browser name, operating system, screen capabilities, performance measures).

It uses [Bowser](https://github.com/ded/bowser) to detect the browser. You can check in the Bowser Repository the full list of devices supported ([User Agents](https://github.com/ded/bowser/blob/master/src/useragents.js)).
 

## Install

``` js
npm install browsersniffer --save-dev
```

Include the minified version (browsersniffer.min.js) in your page and call this method:

``` js
window.browsersniffer.detect();
```

And it will return an object like this:

``` json
{
  "browser": "Chrome",
  "version": "42.0",
  "mobileOS": "Android",
  "mobileOSVersion": "4.4.4",
  "bowser": {
    "name": "Chrome",
    "chrome": true,
    "version": "42.0",
    "webkit": true,
    "android": true,
    "osversion": "4.4.4",
    "mobile": true,
    "a": true
  },
  "language": "en-US",
  "javaEnabled": true,
  "onLine": true,
  "screen": {
    "currentResolution": "384x640",
    "colorDepth": 24,
    "maxTouchPoints": 1,
    "orientation": "landscape"
  },
  "timing": {
    "unloadEventStart": 4,
    "unloadEventEnd": 4,
    "redirectStart": 0,
    "redirectEnd": 0,
    "fetchStart": 0,
    "domainLookupStart": 1,
    "domainLookupEnd": 1,
    "connectStart": 1,
    "connectEnd": 1,
    "secureConnectionStart": 0,
    "requestStart": 1,
    "responseStart": 3,
    "responseEnd": 4,
    "domLoading": 9,
    "domInteractive": 688,
    "domContentLoadedEventStart": 688,
    "domContentLoadedEventEnd": 705,
    "domComplete": 1239,
    "loadEventStart": 1239,
    "loadEventEnd": 1239
  }
}
```

# Licence

The MIT License (MIT)

Copyright (c) 2015 José Tavares

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.





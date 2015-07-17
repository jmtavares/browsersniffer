# Browser Sniffer

Browser Sniffer uses [Bowser](https://github.com/ded/bowser) to detect the browser name, browser version and mobile operating system (if possible).

You can check in the Bowser Repository the full list of devices supported ([User Agents](https://github.com/ded/bowser/blob/master/src/useragents.js)).

## Install

Include the minified version (browsersniffer.min.js) in your page and call this method:

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





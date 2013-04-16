# Logger client for MessageBus.js

- For the server MessageBus.js server: https://github.com/Alexandre-Strzelewicz/MessageBus.js

## Options

### Init

```javascript
var Logger = require('MBClient');

Logger.init({
   // Port of the MessageBus.js server
   port : 9995,
   // IP adress of the MessageBus.js server
   ip : '127.0.0.1',
   // Do the log should send data to MessageBus.js
   remote : true,
   // Display log messages ? (for debug)
   display : true
});
```

### Usage

#### Same event logger (debug like)

If you want to use the same storage key (also a route with Messagebus.js):

```javascript
var log = require('MBClient').getLogger('user:registration');

log({msg : 'User registered'});
```

#### Custom events

If you want to throw custom events (user:signup for example) :

```javascript
var log = require('MBClient').getCustomLogger();

log('user:signup', {msg : 'User alex registered'});
```

## Example

- example in examples/client.js and in test/

or : 

app.js :

```javascript
// In main file init the logger
var Logger = require('MBClient');

Logger.init({
    port : 9995,
    ip : '127.0.0.1',
    remote : true
});
```

other.js :

```javascript
// When you creates a logger replace MAIN by the name of your logger
// like you do with debug module
var log = require('MBClient').getLogger('MAIN');

// Example
setInterval(function() {
    log({my : 'message'});
}, 300);
```

# License

(The MIT License)

Copyright (c) 2013 Wiredcraft <opensource@wiredcraft.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

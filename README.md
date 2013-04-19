# Logger client for afflux-server.js

Logger for server side applications, send events and custom message to afflux-server.js

## Options

### Init

```javascript
var Logger = require('afflux-logger');

Logger.init({
   port : 3044,      // Port of the MessageBus.js server   
   ip : '127.0.0.1', // IP adress of the MessageBus.js server
   remote : true,    // Do the log should send data to MessageBus.js
   display : true    // Display log messages ? (for debug)
});
```

### Usage

#### Custom events

If you want to throw custom events (user:signup for example) :

```javascript
var log = require('afflux-logger').getCustomLogger();

// Will send { event : 'user:signup', msg : { dt : 'User alex registered' } }
log('user:signup', {dt : 'User alex registered'});
```

#### Same event logger (debug like)

If you want to use the same storage key (also a route with Messagebus.js):

```javascript
var log = require('afflux-logger').getLogger('user:registration');

// Will send { event : 'user:registration', msg : 'User registered'}
log({msg : 'User registered'});
```

## Example

- example in examples/client.js and in test/

or : 

app.js :

```javascript
// In main file init the logger
var Logger = require('afflux-logger');

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
var log = require('afflux-logger').getLogger('MAIN');

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

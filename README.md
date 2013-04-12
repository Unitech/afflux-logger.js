# Logger client for MessageBus.js

For the server : https://github.com/Alexandre-Strzelewicz/MessageBus.js

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

```javascript
var log = require('MBClient').getLogger('user:registration');

log({msg : 'User registered'});
```

## Example

- example in examples/client.js

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

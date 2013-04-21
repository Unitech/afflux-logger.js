//     __  _______
//    /  |/  / __ )
//   / /|_/ / __  |
//  / /  / / /_/ /
// /_/  /_/_____/
//

// In main file init the logger
var MBClient = require('..');

MBClient.init({
    port : 40356,
    ip : '127.0.0.1',
    remote : true,
    display : true
});


var log = require('..').getLogger('forward:user');
var customLog = require('..').getCustomLogger();
var prefixedLog = require('..').getPrefixedLogger('forward');

setInterval(function() {
    customLog('bla:user', {data : true});
}, 1000);


setInterval(function() {
    prefixedLog('user', {data : true});
}, 1000);


setInterval(function() {
    log({username : 'toot', pass : 'hehe'});
}, 1000);



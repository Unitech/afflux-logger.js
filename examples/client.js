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

setInterval(function() {
    log({username : 'toot', pass : 'hehe'});
}, 1000);



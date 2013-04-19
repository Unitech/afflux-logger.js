
var log = require('..').getLogger('forward:user');

setInterval(function() {
    log({username : 'toot', pass : 'hehe'});
}, 1000);



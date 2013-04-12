
var log = require('..').getLogger('api:user');

setInterval(function() {
    log({username : 'toot', pass : 'hehe'});
}, 1000);



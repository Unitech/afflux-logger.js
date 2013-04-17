//     __  _______
//    /  |/  / __ )
//   / /|_/ / __  |
//  / /  / / /_/ /
// /_/  /_/_____/
//

// In main file init the logger
var MBClient = require('..');

MBClient.init({
    port : 3044,
    ip : '127.0.0.1',
    remote : true,
    display : true
});

require('./child.js');

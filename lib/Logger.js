//     __  _______
//    /  |/  / __ )
//   / /|_/ / __  |
//  / /  / / /_/ /
// /_/  /_/_____/
//

var axon = require('axon'); 

exports.getLogger = function(name) {
    return Logger.buildLogger(name);
};

exports.getCustomLogger = function() {
    return Logger.customLogger();
};

exports.init = function(opts) {
    Logger.init(opts);
    return Logger;
};

var Logger = {
    init : function(options) {
	if (typeof options == 'undefined')
	    options = {};
	
	this.display = options.display || false;
	this.remote = options.remote || false;

	this.port = options.port || 3000;
	this.ip = options.ip || '127.0.0.1';
	
	this.sock = axon.socket('pub-emitter');
	
	this.events = this.sock.connect(this.port, this.ip);

	this.last_message = null;
	
	return this;
    },
    // For testing purposes
    getLastMessage : function() {
	return this.last_message;
    },
    // for custom events
    send : function(event, msg) {
	this.last_message = {event : event, msg : msg};
	this.sock.emit(event, msg);
    },
    //
    // Logger Factory
    //
    buildLogger : function(event) {
	var self = this;

	return function(msg) {
	    if (self.display)
		console.log('[' + event + '] ', msg);
	    if (self.remote)
		self.send(event, msg);
	};
    },
    customLogger : function() {
	var self = this;

	return function(event, msg) {
	    if (self.display)
		console.log('[' + event + '] ', msg);
	    if (self.remote)
		self.send(event, msg);
	};
    }
};

exports.log = Logger;

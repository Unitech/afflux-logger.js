'use strict';

var logger = require('..');
var fs = require('fs');

describe('Global', function() {
    var loggG = null;
    
    it('should init well', function() {
        loggG = logger.init({
	    port : 9995,
	    ip : '127.0.0.1',
	    remote : true,
	    display : false
	});
    });

    
    it('should have right properties', function() {
	logger.log.should.have.property('send');
	logger.log.should.have.property('buildLogger');
	logger.log.should.have.property('customLogger');
    });
    
    it('should instancy a new global logger and have the same props', function() {
	var logger = require('..');

	logger.log.should.have.property('send');
	logger.log.should.have.property('buildLogger');
	logger.log.should.have.property('customLogger');
    });

    it('should instancy a new global output logger and lof the right message', function() {
	var logger = require('..').getLogger('log:output');
	
	logger('my message');

	loggG.getLastMessage().should.eql({
	    event : 'log:output',
	    msg : 'my message'
	});
    });
    
    it('should send custom events', function() {
	var customLogger = require('..').getCustomLogger();

	customLogger('user:signup', {user : 'alex', data : 'hehe'});

	loggG.getLastMessage().should.eql({
	    event: 'user:signup',
	    msg: {
		user: 'alex',
		data: 'hehe'
	    }
	});	
    });

});

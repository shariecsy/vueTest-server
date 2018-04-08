var redis = require('redis');
var config = require('../config/redis-config.js');
var RedisService = (function() {
	var getRedisClient = function() {
		var redisClient = redis.createClient(config);
		redisClient.on("error", function(err) {
			console.log("RedisClient " + err);
		});
		return redisClient;
	}
	var client = getRedisClient();

	var _set = function(key, value) {
		try {
			client.set(key, value);
		} catch(e) {
			console.log("method:_set " + err);
		}
	}

	var _get = function(key, fn) {
		try {
			client.get(key, fn);
		} catch(e) {
			console.log("method:_get " + err);
		}
	}

	var _del = function(key) {
		try {
			client.del(key);
		} catch(e) {
			console.log("method:_del " + err);
		}
	}

	return {
		set: _set,
		get: _get,
		del: _del
	}
})();

module.exports = RedisService;
// Generated by CoffeeScript 1.4.0
var Memcached, key_namespace, memcached, prepare_connection, settings;

Memcached = require('memcached');

settings = require('node_settings_module');

memcached = null;

key_namespace = settings.get("memcached").key_namespace;

exports.get = function(cache_key, callback) {
  var key;
  key = key_namespace + cache_key;
  return memcached.get(key, function(error, result) {
    if (error) {
      console.log(error);
    }
    return callback(result);
  });
};

exports["delete"] = function(cache_key, callback) {
  var key;
  key = key_namespace + cache_key;
  return memcached["delete"](key, function(error, result) {
    if (error) {
      console.log(error);
    }
    if (callback) {
      return callback(result);
    }
  });
};

exports.set = function(cache_key, value, timeout, callback) {
  var key;
  key = key_namespace + cache_key;
  return memcached.set(key, value, timeout, function(error, result) {
    if (error) {
      console.log(error);
    }
    if (callback) {
      return callback(result);
    }
  });
};

prepare_connection = function() {
  return memcached = new Memcached(settings.get("memcached").servers);
};

prepare_connection();
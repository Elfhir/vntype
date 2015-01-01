(function(root, undefined) {

  "use strict";



// Namespace
var vntype = vntype || {};

vntype.VERSION = '0.0.1';
vntype.running = false;

vntype.inputs = [];

vntype.run = function(){

	// TMP
	vntype.inputs[0] = vntype.input.select("test");

	window.setInterval(function() {
		console.dir(vntype.inputs[0][0].value);
	}, 2000);
};


// ---- config class ----
// MAYBE : separate classes in different files, using require.js

// User of Default
vntype.config = {};

// TODO
/**
 * @constructor
 * Description : Define the config with either User or Defaults settings
 */
vntype.config.init = function(){};

// TODO
// Read an User external config file
vntype.config.load = function(){};

// TODO
// Edit the User external config file
vntype.config.edit = function(){};

// TODO
// The default(s) combination(s)
vntype.config.default = {};

// ---- end config class ----


// ---- input class ----
// MAYBE : inherit from an input class

vntype.input = {};
vntype.input = document.createElement("form");

vntype.input.init = function(){
	return document.createElement("form");
};

// TEMP
// TODO : a parser for all inputs form in the page
vntype.input.select = function(selector){
	return document.getElementById(selector);
};


// Export to the root, which is probably `window`.
root.vntype = vntype;

}(this));

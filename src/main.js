
// Namespace
var vntype = vntype || {};

vntype.VERSION = '0.0.1';
vntype.running = false;

vntype.inputs = [];

vntype.run = function(){

	// TMP
	vntype.inputs[0] = vntype.input.select("test");

	// é è & ' ~ (
	/*vntype.diacritics = ['&#233;','&#232;','&amp;','&#39;','&#126;','&#40;'];*/
	vntype.diacritics = ['é','è','&amp;','&#39;','&#126;','&#40;'];

	window.setInterval(function() {

		vntype.arr = vntype.inputs[0][0].value.split('');

		if (vntype.arr instanceof Array) {

			for (var i=0, l=vntype.arr.length; i<l; i++) {

				if (vntype.arr[i] == vntype.diacritics[0]) {

					if (vntype.arr[i-1] == 'a' ) {
						vntype.arr.splice(i-1, 2, 'á');
					}
				}
			}
		}

		vntype.str = vntype.arr.toString();

		vntype.input.select("test-input").value = vntype.str;
		console.dir(vntype.str);

	}, 2000);
};

// ----============== POO after ==================---------------
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
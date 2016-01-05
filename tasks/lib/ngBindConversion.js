/*
 *
 *
 *
 * Copyright (c)
 * Licensed under the MIT license.
 */

'use strict';
var cheerio = require('cheerio');

var ngBindConversion = function (grunt) {
	var regex = /{{(.+?)}}/g;

	var _convert = function (dom) {
		if (dom.children().length) {
			return;
		}

		var currentDivText = dom.text(),
			bracesText = currentDivText.match(regex),
			matches = regex.exec(currentDivText)[1];

		if (!bracesText.length) {
			return;
		}

		return dom.attr('ng-bind', matches).text('');
	};

	this.init = function (filepath) {
		if (!grunt.file.exists(filepath)) {
			grunt.log.warn('Source file "' + filepath + '" not found.');
			return false;
		}
		this.filepath = filepath;
	};

	this.convert = function () {
		if (!this.filepath) {
			return;
		}

		var content = grunt.file.read(this.filepath),
			$ = cheerio.load(content);

		$('div').filter(function () {
			return _convert($(this));
		});

        $('span').filter(function () {
            return _convert($(this));
        });

		return $.html();
	};

};

module.exports = ngBindConversion;
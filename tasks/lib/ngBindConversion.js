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
	var regex = /{{(.+?)}}/g,
		currentDom;


	var _convert = function (dom) {
		if (dom.children().length || dom.is('label')) {
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


		$('*').filter(function () {
			currentDom = $(this);
			/** Need to check just to avoid unnecessary check for empty text
			 * for eg: <meta>,<html>
			 */
			if (currentDom.text()) {
				_convert(currentDom);
			}
		});

		return $.html();
	};

};

module.exports = ngBindConversion;
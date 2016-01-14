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


    var _getText = function(text) {
        var bracesText = text.match(regex),
            matches = regex.exec(text)[1];

        if (!bracesText.length) {
            return;
        }

        return matches;
    };
	var _convert = function (dom, options) {
        if (dom.is('label')) {
            var labelText = _getText(dom.text()),
                html = '<' + options.custom_tag + ' ng-bind="' + labelText +'">' + '</' + options.custom_tag + '>',
                labelChild = dom.children().clone();
            return dom.text('').append(html).append(labelChild);
        }

        if (dom.children().length) {
			return;
		}

		var matches = _getText(dom.text());
		return matches && dom.attr('ng-bind', matches).text('');
	};

	this.init = function (filepath, options) {
		if (!grunt.file.exists(filepath)) {
			grunt.log.warn('Source file "' + filepath + '" not found.');
			return false;
		}
		this.filepath = filepath;
		this.options = options;
	};

	this.convert = function () {
		if (!this.filepath) {
			return;
		}

		var content = grunt.file.read(this.filepath),
			$ = cheerio.load(content),
            options = this.options;

		$('*').filter(function () {
			currentDom = $(this);
			/** Need to check just to avoid unnecessary check for empty text
			 * for eg: <meta>,<html>
			 */
			if (currentDom.text()) {
				_convert(currentDom, options);
			}
		});

		return $.html();
	};

};

module.exports = ngBindConversion;
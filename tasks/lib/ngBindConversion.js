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

    var _bindTextToCurrentDom = function (dom, customTag) {
        var labelText = _getText(dom.text()),
            html = '<' + customTag + ' ng-bind="' + labelText +'">' + '</' + customTag + '>',
            labelChild = dom.children();
        return dom.text('').append(html).append(labelChild);
    };

	var _convert = function (dom, options) {
        if (dom.is('label')) {
            return _bindTextToCurrentDom(dom, options.custom_tag);
        }

        if (dom.children().length) {
            var parentText = dom.first().contents().filter(function () {
                return this.nodeType === 3;
            }).text().replace(/\s+/, "");

            if (!parentText) {
                return;
            }

            return _bindTextToCurrentDom(dom, options.custom_tag);
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
			/** Need to add a check just to avoid unnecessary check for empty text
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
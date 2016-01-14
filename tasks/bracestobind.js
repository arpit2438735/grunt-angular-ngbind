/*
 * bracestobind
 * 
 *
 * Copyright (c) 2015 
 * Licensed under the MIT license.
 */

'use strict';
var ngBindConversion = require("./lib/ngBindConversion");

module.exports = function (grunt) {

	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks

	grunt.registerMultiTask('bracestobind', 'Convert {{}} to ng-bind for angular html pages', function () {

		// Merge task-specific and/or target-specific options with these defaults.
		var options = this.options({
            custom_tag: 'span'
        });
		var content;
		var ngbindconversion = new ngBindConversion(grunt);

		// Iterate over all specified file groups.
		this.files.forEach(function (file) {
			// Concat specified files.
			file.src.filter(function (filepath) {
				// Warn on and remove invalid source files (if nonull was set).
				ngbindconversion.init(filepath, options);
				content = ngbindconversion.convert();

				grunt.file.write(file.dest + filepath, content);
			});

			// Print a success message.
			grunt.log.writeln('File "' + file.dest + '" created.');
		});
	});

};

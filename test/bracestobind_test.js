'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.bracestobind = {
	default_options: function (test) {
		test.expect(1);
		var template = 'basic-braces.html';
		var actual = grunt.file.read('tmp/test/templates/' + template);
		var expected = grunt.file.read('test/expected/' + template);
		test.equal(actual, expected, 'should contain ng-bind tag with exact html.');

		test.done();
	},

	angular_component: function (test) {
		test.expect(1);
		var template = 'braces-for-component.html';
		var actual = grunt.file.read('tmp/test/templates/' + template);
		var expected = grunt.file.read('test/expected/' + template);
		test.equal(actual, expected, 'should contain ng-bind tag with exact html.');

		test.done();
	},

    test_for_label_conversion_for_default_options: function (test) {
        test.expect(1);
        var template = 'braces-for-labels.html';
        var actual = grunt.file.read('tmp/test/templates/' + template);
        var expected = grunt.file.read('test/expected/' + template);
        test.equal(actual, expected, 'should contain ng-bind tag added in tag as default options.');

        test.done();
    },

    test_for_label_conversion_for_custom_options: function (test) {
        test.expect(1);
        var template = 'braces-for-labels.html';
        var actual = grunt.file.read('tmp/custom/test/templates/' + template);
        var expected = grunt.file.read('test/expected/custom/' + template);
        test.equal(actual, expected, 'should contain ng-bind tag added in tag mention in custom options..');

        test.done();
    },

    test_for_component_deep_nested: function (test) {
        test.expect(1);
        var template = 'braces-for-component-deep-nested.html';
        var actual = grunt.file.read('tmp/test/templates/' + template);
        var expected = grunt.file.read('test/expected/' + template);
        test.equal(actual, expected, 'should contain ng-bind tag mention as default and internal component as well if present..');

        test.done();
    }
};

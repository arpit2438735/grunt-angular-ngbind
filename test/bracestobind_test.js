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
    var actual = grunt.file.read('tmp/test/templates/' +  template);
    var expected = grunt.file.read('test/expected/' + template);
    test.equal(actual, expected, 'should contain ng-bind tag with exact html.');

    test.done();
  }
};

# bracestobind

[![Build Status](https://travis-ci.org/arpit2438735/grunt-angular-ngbind.svg?branch=master)](https://travis-ci.org/arpit2438735/grunt-angular-ngbind)

> Convert {{}} to ng-bind for angular html pages

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install bracestobind --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('bracestobind');
```

## The "bracestobind" task

### Overview
In your project's Gruntfile, add a section named `bracestobind` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  bracestobind: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.separator
Type: `String`
Default value: `',  '`

A string value that is used to do something with whatever.

#### options.punctuation
Type: `String`
Default value: `'.'`

A string value that is used to do something else with whatever else.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  bracestobind: {
    options: {},
    files: {
      'dest/': 'src/**/*.html',
    },
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
v0.1.1 - Currently supported for div and span elements.

## License
Copyright (c) 2015 . Licensed under the MIT license.

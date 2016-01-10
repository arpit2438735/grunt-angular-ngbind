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

### Usage Examples

#### Default Options

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
* v0.1.3 - Changes for current version
     * Fix for multiple html/template page
     * Support for directive/component {{}} text
* v0.1.1 - Currently supported for div and span elements.

## Questions

1. Why I am in this earth want this stupid plugin?

    Because it's hard to read `ng-bind` text/value for a us(developer).
    
        <div class="foo" value-pass-to-component="model" again-some-value-pass="{{text}}" one-more-value="example.test">{{bar}}</div>
        
    -> **VS** <-
        
        <div class="foo" ng-bind="bar" value-pass-to-component="model" again-some-value-pass="{{text}}" one-more-value="example.test"></div>    
    Which one is better for readable perspective? `//For me first one`
    
2. Why I need a conversion {{}} is good?

    In terms of performance it's slow compare to ng-bind.Below are the links:-
    
    * [http://stackoverflow.com/questions/16125872/angularjs-why-ng-bind-is-better-than-in-angular](http://stackoverflow.com/questions/16125872/angularjs-why-ng-bind-is-better-than-in-angular)
    * [http://ng-perf.com/2014/10/30/tip-4-ng-bind-is-faster-than-expression-bind-and-one-time-bind](http://ng-perf.com/2014/10/30/tip-4-ng-bind-is-faster-than-expression-bind-and-one-time-bind/)
    * [https://github.com/toddmotto/angular-styleguide/issues/41](https://github.com/toddmotto/angular-styleguide/issues/41)

3. Look Great I want to use now but for all tags you guys are supporting?
    Yes we support for all tags except `label` one because `ng-bind` breaks for labels other way is to add some tag inside label and put `ng-bind`, but I feel its kind of hack apply so currently thinking of some other solution.If you guys has some solution then you can guys fork it and send me the solution it will be great help.
    
Any more question comes in your mind just add those question in [Issue Forum](https://github.com/arpit2438735/grunt-angular-ngbind/issues).I will be happy to solve your problem.

## License
Copyright (c) 2016 . Licensed under the MIT license.

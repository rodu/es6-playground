/* global module */
// jshint onevar: false
module.exports = function exports(grunt){
  'use strict';

  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
    watch: {
      scripts: {
        files: ['./src/**/*.js'],
        tasks: ['babel'],
        options: {
          spawn: false
        }
      }
    },

    babel: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'build/app.js': 'src/**/*.js'
        }
      }
    }
  });

  grunt.registerTask('default', ['babel']);

  // on watch events configure jshint:all to only run on changed file
  grunt.event.on('watch', function(action, filepath) {
    var files = {};
    files['build/' + filepath.replace(/src\//, '')] = filepath;

    grunt.config('babel.dist.files', files);
  });
};
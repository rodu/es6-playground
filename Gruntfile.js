/* global module */
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
          'build/app.js': 'src/app.js'
        }
      }
    }
  });

  grunt.registerTask('default', ['babel']);

};
/* global module */
// jshint onevar: false
module.exports = function exports(grunt){
  'use strict';

  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
    watch: {
      scripts: {
        files: ['./src/**/*.js'],
        tasks: ['babel', 'shell'],
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
    },

    shell: {
      options: {
        stderr: false
      },
      target: {
        command: 'ls'
      }
    }
  });

  grunt.registerTask('default', ['babel']);

  // on watch events configure jshint:all to only run on changed file
  grunt.event.on('watch', function(action, filepath) {
    var files = {},
      fileBuildPath = filepath.replace(/^src\//, 'build/'),
      shellTarget = 'node ' + fileBuildPath + ' > build/output.txt';

    files[fileBuildPath] = filepath;

    grunt.config('babel.dist.files', files);
    grunt.config('shell.target.command', shellTarget);
  });
};
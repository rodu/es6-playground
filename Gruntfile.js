/* global module */
// jshint onevar: false
module.exports = function exports(grunt){
  'use strict';

  var logfile = require('logfile-grunt');

  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
    config: {
      outputFile: 'build/output.txt',
      errorsFile: 'build/errors.txt'
    },

    clean: ['<%= config.errorsFile %>'],

    watch: {
      scripts: {
        files: ['./src/**/*.js'],
        tasks: ['clean', 'devlog', 'babel', 'shell'],
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

  grunt.task.registerTask(
    'devlog',
    'Dump errors to a log file.',
    function() {
      logfile(grunt, {
        filePath: grunt.config('config.errorsFile'),
        clearLogFile: true
      });
    }
  );

  // on watch events configure jshint:all to only run on changed file
  grunt.event.on('watch', function(action, filepath) {
    var files = {},
      fileBuildPath = filepath.replace(/^src\//, 'build/'),
      shellTarget = 'node ' +
        fileBuildPath +
        ' > ' +
        grunt.config('config.outputFile');

    files[fileBuildPath] = filepath;

    grunt.config('babel.dist.files', files);
    grunt.config('shell.target.command', shellTarget);
  });
};
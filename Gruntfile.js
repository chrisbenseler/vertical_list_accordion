'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    qunit: {
      files: ['test/index.html'],
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'

      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      src: {
        src: ['src/**/*.js']
      },
      tests: {
        src: ['test/**/*.js']
        
      },
    },
    uglify: {
      my_target: {
        files: {"verticallistaccordion-min.js": ["src/verticallistaccordion.js"]}
      }
    }
    
  });

  // These plugins provide necessary tasks.
  //grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  

  // Default task.
  grunt.registerTask('default', ['jshint', 'uglify']);


  //Travis CI task
  grunt.registerTask('test', ['qunit']);




};

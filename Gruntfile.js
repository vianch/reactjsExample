'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Watches for changes in files and runs certain Grunt tasks.
        watch: {
            js: {
                files: ['app/components/*.js','app/*.js'],
                tasks: ['browserify']
            } 
        },
        // Compiles ES6 modules so we can use it in the browser.
        // I am using its transform option so it will also transpile the code from ES6 to JavaScript with Babel.
        browserify: {
            dist: {
                files: {
                    'app/js/app.js': ['app/index.js'],
                },
                options: {
                    transform: ['babelify'],
                    browserifyOptions: {
                        debug: false
                    }
                }
            }
        }

    });

    //libs
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //custom taks
    grunt.registerTask('default', []);

};
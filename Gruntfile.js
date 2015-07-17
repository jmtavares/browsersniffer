module.exports = function (grunt) {

    'use strict';

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        eslint: {
            options: {
                configFile: 'eslint.json'
            },
            target: ['src/*.js']
        },

        uglify: {
            dist: {
                options: {
                    mangle: true,
                    preserveComments: true,
                    banner: grunt.file.readJSON('package.json').banner
                },
                files: {
                    'dist/browsersniffer.min.js': [
                        'src/*.js',
                        'node_modules/bowser/bowser.min.js'
                    ]
                }
            },
            debug: {
                options: {
                    mangle: false,
                    beautify: true,
                    compress: false,
                    preserveComments: true,
                    banner: grunt.file.readJSON('package.json').banner
                },
                files: {
                    'dist/browsersniffer.js': [
                        'src/*.js',
                        'node_modules/bowser/bowser.js'
                    ]
                }
            }
        },

        versioncheck: {
            options: {
                hideUpToDate : true
            }
        }
    });

    grunt.registerTask('default', [
        'eslint',
        'uglify'
    ]);
};

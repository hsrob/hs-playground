'use strict';

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        nodeunit: {
            files: ['test/**/*_test.js']
        },
        concat:{
            styles: {
                files: [
                    {
                        src:
                            [
                                'app/assets/bootstrap/css/bootstrap.min.css',
                                'app/assets/bootstrap/css/bootstrap-glyphicons.css'
                            ],
                        dest: 'app/assets/css/bundle_bootstrap.css'
                    },
                    {
                        src:
                            [
                                'app/assets/css/shared_order/bootstrap-hs.css',
                                'app/assets/css/shared_order/style.css'
                            ],
                        dest: 'app/assets/css/bundle_order.css'
                    },
                    {
                        src:
                            [
                                'app/assets/css/shared/**/*.css'
                            ],
                        dest: 'app/assets/css/bundle.css',
                        filter: 'isFile'
                    }
                ]
            },
            scripts: {
                files: [
                    {
                        src: [
                            'app/assets/js/shared_order/angular/angular.min.js',
                            'app/assets/js/bootstrap/bootstrap.js',
                            'app/assets/js/shared_order/lodash.js',
                            'app/assets/js/shared_order/restangular.js',
                            'app/assets/js/shared_order/hammer.js',
                            'app/assets/js/shared_order/angular-hammer.js',
                        ],
                        dest: 'app/assets/js/bundle_order.js',
                        filter: 'isFile'
                    },
                    {
                        src:
                            [
                                'app/assets/js/shared/**/*.js'
                            ],
                        dest: 'app/assets/js/bundle.js',
                        filter: 'isFile'
                    }
                ]
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            scripts: {
                files: [{
                    src: ['app/assets/js/bundle_order.js', 'app/assets/js/bundle.js'],
                    dest: 'app/assets/js/build/app_bundle.min.js',
                    filter: 'isFile'
                }]
            }
        },
        cssmin: {
            styles: {
                files: [{
                    src: ['app/assets/css/bundle_bootstrap.css', 'app/assets/css/bundle_order.css', 'app/assets/css/bundle.css'],
                    dest: 'app/assets/css/build/app_bundle.min.css',
                    filter: 'isFile'
                }]
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            app: {
                src: [
                    'app/assets/js/angular_apps/**/*.js',
                    'app/assets/js/angular_apps/*.js',
                    'app/assets/js/shared/**/*.js',
                    'app/assets/js/shared/*.js',
                    'app/assets/js/shared_order/**/*.js',
                    'app/assets/js/shared_order/*.js',
                ]
            },
            test: {
                src: ['test/**/*.js']
            }
        },
        watch: {
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            lib: {
                files: '<%= jshint.app.src %>',
                tasks: ['concat:scripts', 'uglify']
            },
            styles: {
                files: [
                    'app/assets/css/shared/**/*.css',
                    'app/assets/css/shared/*.css',
                    'app/assets/css/shared_order/**/*.css',
                    'app/assets/css/shared_order/*.css',
                ],
                tasks: ['concat:styles', 'cssmin']
            },
            test: {
                files: '<%= jshint.test.src %>',
                tasks: ['jshint:test', 'nodeunit']
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task.
    grunt.registerTask('default', ['jshint', 'nodeunit']);
    grunt.registerTask('bundle', ['concat', 'uglify', 'cssmin']);

};

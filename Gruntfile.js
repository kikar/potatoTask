'use strict';
module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.initConfig({
        uglify: {
            my_target: {
                files: {
                    'public/prod/script.min.js': ['public/prod/script.min.js']
                }
            }
        },
        concat: {
            js: {
                src: ['public/lib/angular.js', 'public/lib/angular-ui-router.js', 'public/js/*.js'],
                dest: 'public/prod/script.min.js',
            },
            css: {
                src: ['public/css/*.css'],
                dest: 'public/prod/style.min.css'
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'public/prod/',
                    src: ['style.min.css'],
                    dest: 'public/prod/',
                    ext: '.min.css'
                }]
            }
        }
    });

    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};
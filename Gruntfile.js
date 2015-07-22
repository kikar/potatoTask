'use strict';
module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.initConfig({
        uglify: {
            my_target: {
                files: {
                    'public/script.min.js': ['public/script.min.js']
                }
            }
        },
        concat: {
            js: {
                src: ['public/lib/angular.js', 'public/lib/angular-ui-router.js', 'public/js/*.js'],
                dest: 'public/script.min.js',
            },
            css: {
                src: ['public/css/*.css'],
                dest: 'public/style.min.css'
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'public',
                    src: ['style.min.css'],
                    dest: 'public',
                    ext: '.min.css'
                }]
            }
        }
    });

    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};
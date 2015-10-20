module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        env: process.env,
        clean: ['dist', 'test-reports', 'test-coverage'],

        browserify: {
            dist: {
                files: {
                    'dist/js/all.js': ['src/js/main.js']
                }
            }
        },

        connect: {
            server: {
                options: {
                    port: 9001,
                    open: {
                        target: 'http://localhost:9001/examples'
                    }
                }
            }
        },

        watch: {
            all: {
                options:{
                    livereload: true
                },
                files: ['src/js/**/*.js','src/scss/*.scss'],
                tasks: ['package']
            }
        }
    });

    grunt.loadTasks('grunt-tasks');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('package', ['clean', 'browserify']);
    grunt.registerTask('dev', ['package', 'connect', 'watch:all']);
};
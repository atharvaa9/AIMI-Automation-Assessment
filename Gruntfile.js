module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        'dart-sass': {
            dist: {
                options: {
                    sourceMap: true
                },
                files: {
                    'dist/css/styles.css': 'src/scss/styles.scss'
                }
            }
        },
        watch: {
            styles: {
                files: ['src/scss/**/*.scss'],
                tasks: ['dart-sass'],
                options: {
                    spawn: false,
                },
            },
        },
    });

    grunt.loadNpmTasks('grunt-dart-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['dart-sass', 'watch']);
};
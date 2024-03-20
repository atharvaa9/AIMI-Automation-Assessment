
const config = {
    sass: {
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'dist/css/styles.css': 'src/scss/styles.scss'
        }
      }
    },
    copy: {
      dist: {
        files: [
          {
            expand: true,
            cwd: 'src/js/',
            src: ['script.js'],
            dest: 'dist/js/'
          },
          {
            expand: true,
            cwd: 'src/components/',
            src: ['image-box.html'],
            dest: 'dist/'
          }
        ]
      }
    },
    watch: {
      sass: {
        files: ['src/scss/**/*.scss'],
        tasks: ['sass:dist']
      },
      js: {
        files: ['src/js/**/*.js'],
        tasks: ['copy:dist']
      },
      html: {
        files: ['src/*.html', 'src/components/*.html'],
        tasks: ['copy:dist']
      }
    }
  };
  
  const { loadNpmTasks } = grunt;
  
  loadNpmTasks('grunt-contrib-sass');
  loadNpmTasks('grunt-contrib-copy');
  loadNpmTasks('grunt-contrib-watch');
  
  grunt.initConfig(config);
  
  grunt.registerTask('default', ['sass:dist', 'copy:dist', 'watch']);
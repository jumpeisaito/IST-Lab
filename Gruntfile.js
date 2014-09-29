module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-typescript');
  grunt.loadNpmTasks('grunt-contrib-watch');
  //grunt.loadNpmTasks('grunt-contrib-compass');
  //grunt.loadNpmTasks('grunt-bower-task');
  //grunt.loadNpmTasks('grunt-contrib-requirejs');
  //grunt.loadNpmTasks('grunt-contrib-clean');
  //grunt.loadNpmTasks('grunt-karma');
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-tsd');
  //grunt.loadNpmTasks('grunt-contrib-jade');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      typescript: {
        files: ['src/*.ts'],
        tasks: ['typescript']
      }
    },
    typescript: {
      base: {
        src: ['src/*.ts'],
        dest: '',
        options: {
          module: 'amd',
          target: 'es5',
          sourcemap: false,
          declaration: false,
        }
      }
    }
  });

  grunt.registerTask('default', 'watch');
};
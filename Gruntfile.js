

/* 'docs/css/bootstrap.css',
'docs/css/animate.css',
'docs/css/bootstrap.min.css',
'docs/css/owl.carousel.css',
'docs/css/owl.theme.css',
'docs/css/responsive.css',
'docs/css/style.css',
'docs/css/swiper.min.css' */
const files = ['docs/css/style.css'];
    
  files.forEach(element =>  {
  module.exports = function(grunt) {

    // Project configuration.

              grunt.initConfig({
                  purifycss: {
                      options: {},
                      target: {
                          src: ['docs/index.html', 'docs/js/*.js'],
                          css:[element],
                          dest:'css/' + element,
                      }
                  }
                });
              
         

  
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-purifycss');
    // Default task(s).
    grunt.registerTask('default', ['uglify']);
  
  };
});
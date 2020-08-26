const gulp = require('gulp'),
      purgecss = require('gulp-purgecss');

gulp.task('purgecss', () => {
        return gulp
          .src(['docs/css/*.css', "!docs/css/swiper.min.css"])
          .pipe( 
            purgecss({
              content: ['docs/index.html','docs/proyect/index.html']
            })
          )
          .pipe(gulp.dest('docs/css/'))
      })
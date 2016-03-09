var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');

gulp.task('default', ['sass', 'watch']);

gulp.task('watch', function() {
  gulp.watch('sass/**/*.scss', ['sass']);
});


gulp.task('sass', function () {
  return gulp
    // Find all `.scss` files from the `stylesheets/` folder
    .src('sass/**/*.scss')
    // Run Sass on those files
    .pipe(sass())
    // Write the resulting CSS in the output folder
    .pipe(gulp.dest('./css'));
});
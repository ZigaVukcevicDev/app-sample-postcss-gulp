var gulp = require('gulp');
var postcss = require('gulp-postcss');
var simpleGrid = require('postcss-simple-grid');

gulp.task('css', function () {
    var processors = [
        simpleGrid
    ];
    return gulp.src('app/styles/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('dist/styles/'));
});
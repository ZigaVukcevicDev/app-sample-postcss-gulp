var gulp       = require('gulp');
var del        = require('del');
var postcss    = require('gulp-postcss');
var simpleGrid = require('postcss-simple-grid');

gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

gulp.task('css', function () {
    var processors = [
        simpleGrid
    ];
    return gulp.src('app/styles/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('dist/styles/'));
});


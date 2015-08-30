var gulp         = require('gulp');
var del          = require('del');
var gulpSequence = require('gulp-sequence');
var postcss      = require('gulp-postcss');
var simpleGrid   = require('postcss-simple-grid');

// gulp tasks

gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

gulp.task('css', function () {
    var processors = [
        simpleGrid
    ];
    return gulp.src('app/styles/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('dist/styles/'));
});

// gulp build task

gulp.task('default', gulpSequence(['clean'], 'css'));
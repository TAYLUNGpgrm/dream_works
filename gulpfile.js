const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() {
    return gulp.src('./public/styles/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('dist/css'));
}

exports.default = styles;
exports.watch = function() {
    gulp.watch('./public/styles/*.scss', styles);
}
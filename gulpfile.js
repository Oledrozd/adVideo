var gulp = require('gulp'),
    minifyCss = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('css', function() {
    gulp.src('src/styles/*.css')
        .pipe(autoprefixer({
            browsers: ['last 20 versions'],
            cascade: false
        }))

        .pipe(minifyCss())

        .pipe(gulp.dest('public/styles'));
});
gulp.watch('src/styles/*.css', ['css']);
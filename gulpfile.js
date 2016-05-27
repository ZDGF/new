var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync').create(),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass');

gulp.task('default',['watch']); //定义默认任务

gulp.task('sass', function(done) {
  gulp.src('./private/*/css/*.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    // .pipe(minifyCss({
    //   keepSpecialComments: 0
    // }))
    // .pipe(rename({ extname: '.min.css' }))
    .pipe(autoprefixer('Firefox 14'))
    .pipe(gulp.dest('./public/'))
    .on('end', done);
});

gulp.task('copyfile', function() {
    gulp.src('./private/*/html/*.html')
        .pipe(gulp.dest('./public'))
});


gulp.task('jsx', function () {
return gulp.src('./private/*/js/*.jsx')
    .pipe(plumber({
        errorHandler: function(error) {
            gutil.log(
                gutil.colors.cyan('Plumber') + gutil.colors.red(' found unhandled error:\n'),
                error.toString()
            );
            this.emit('end');
        }
    }))
    .pipe(react())
    .pipe(plumber.stop())
    .pipe(rename({ extname: '.js' }))
    // .pipe(uglify())
    .pipe(gulp.dest('./public/'));
});

// // Static server
// 实时刷新页面，如需使用在自己的开发环境中开启
// gulp.task('browser-sync', function() {
//     var files = [
//     '**/*.html',
//     '**/*.scss',
//     '**/*.js'
//     ];
//     browserSync.init(files,{
//         server: {
//             baseDir: "./"
//         }
//     });
//     gulp.watch('./app/css/*.scss', ["sass"]);
//     gulp.watch('./app/js/*js',['jsmin']);
// });

// Domain server
//gulp.task('browser-sync', function() {
//    browserSync.init({
//        proxy: "yourlocal.dev"
//    });
//});


gulp.task('watch', function() {
    gulp.watch('./private/*/css/*.scss', ['sass']);
    // gulp.watch('./private/*/css/*.less', ['less']);
    // gulp.watch('./private/*/js/*.jsx', ['jsx']);
    // gulp.watch('./private/*/jsx/*.jsx', ['jsx']);
    // gulp.watch('./lib/jsx/*.jsx', ['jsx']);
});








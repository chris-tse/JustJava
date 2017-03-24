/////////////////////////////
// Required
/////////////////////////////
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    prefix = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    gutil = require('gulp-util'),
    dedupe = require('gulp-dedupe'),
    clean = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    del = require('del'),
    bower = require('gulp-bower')

/////////////////////////////
// Scripts Task
/////////////////////////////
gulp.task('scripts', function() {
    gulp.src(['app/js-dev/*.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('app/js'))
        .pipe(rename({suffix:'.min'}))
        .pipe(uglify().on('error', function(e) {gutil.log(gutil.colors.red('[Error]'), e.toString()); this.emit('end');}))
        .pipe(gulp.dest('app/js'))
        .pipe(reload({stream:true}));
});

/////////////////////////////
// Sass Task
/////////////////////////////
gulp.task('sass', function() {

    gulp.src('app/sass/mainmenu.sass')
    .pipe(concat('mainmenu.sass'))
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix({
        browsers: ['> 5%'],
        cascade: false
    }))
    .pipe(clean())
    .pipe(gulp.dest('app/css'))
    .pipe(reload({stream:true}));

    gulp.src('app/sass/styles.sass')
    .pipe(concat('styles.sass'))
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix({
        browsers: ['> 5%'],
        cascade: false
    }))
    .pipe(clean())
    .pipe(gulp.dest('app/css'))
    .pipe(reload({stream:true}));
});

/////////////////////////////
// HTML Task
/////////////////////////////
gulp.task('html', function() {
    gulp.src('app/**/*.html')
    .pipe(reload({stream:true}));
})

/////////////////////////////
// Build Tasks
/////////////////////////////
gulp.task('clean', function() {
    return del([
        'build'
    ]);
});

gulp.task('build-copy', ['clean'], function() {
    gulp.src('app/ch1/*.html').pipe(gulp.dest('build/ch1/'));
    gulp.src(['app/index.html', 'app/test.html', '!app/bower_components/**/*']).pipe(gulp.dest('build/'));
    gulp.src('app/css/**/*.css').pipe(gulp.dest('build/css/'));
    gulp.src('app/js/*.js').pipe(gulp.dest('build/js/'));
    gulp.src('app/img/**/*').pipe(gulp.dest('build/img/'));
    gulp.src(['app/bower_components/interactjs/dist/interact.min.js','app/bower_components/highlight/src/highlight.pack.js']).pipe(gulp.dest('build/js/'));
    gulp.src('app/bower_components/highlight/src/styles/agate.css').pipe(gulp.dest('build/css/'))
});

gulp.task('build', ['build-copy']);

/////////////////////////////
// browserSync Task
/////////////////////////////
gulp.task('browser-sync', function() {
    browserSync({
        server:{
            baseDir: "./app/"
        }
    });
});

/////////////////////////////
// Watch Task
/////////////////////////////
gulp.task('watch', function() {
    gulp.watch(['app/js-dev/**/*.js','!app/js-dev/all.*'], ['scripts']);
    gulp.watch(['app/sass/**/*.sass'], ['sass']);
    gulp.watch(['app/**/*.html'], ['html']);

});

/////////////////////////////
// Default Task
/////////////////////////////
gulp.task('default', ['scripts','sass','html','browser-sync','watch']);

/////////////////////////////
// Required
/////////////////////////////
const gulp = require('gulp'),
    babel = require('gulp-babel'),
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
    del = require('del')

/////////////////////////////
// Scripts Task
/////////////////////////////
gulp.task('scripts', function() {
    gulp.src(['app/js-dev/*.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('app/js'))
        .pipe(rename({suffix:'.min'}))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify().on('error', function(e) {gutil.log(gutil.colors.red('[Error]'), e.toString()); this.emit('end');}))
        .pipe(gulp.dest('app/js'))
        .pipe(reload({stream:true}));
});

/////////////////////////////
// Sass Task
/////////////////////////////
gulp.task('sass', function() {
    // sidenav
    gulp.src('app/sass/sidenav.sass')
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix({
        browsers: ['> 5%'],
        cascade: false
    }))
    .pipe(clean())
    .pipe(gulp.dest('app/css'))
    .pipe(reload({stream:true}));

    // homepage
    gulp.src('app/sass/homepage.sass')
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix({
        browsers: ['> 5%'],
        cascade: false
    }))
    .pipe(clean())
    .pipe(gulp.dest('app/css'))
    .pipe(reload({stream:true}));

    // main menu
    gulp.src('app/sass/mainmenu.sass')
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix({
        browsers: ['> 5%'],
        cascade: false
    }))
    .pipe(clean())
    .pipe(gulp.dest('app/css'))
    .pipe(reload({stream:true}));

    // general
    gulp.src('app/sass/general.sass')
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix({
        browsers: ['> 5%'],
        cascade: false
    }))
    .pipe(clean())
    .pipe(gulp.dest('app/css'))
    .pipe(reload({stream:true}));

    //styles
    gulp.src('app/sass/style.sass')
    .pipe(concat('style.sass'))
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
    gulp.src(['app/ch1/*.html', 'app/ch1/*.java']).pipe(gulp.dest('build/ch1/'));
    gulp.src(['app/ch2/*.html', 'app/ch2/*.java']).pipe(gulp.dest('build/ch2/'));
    gulp.src(['app/ch3/*.html', 'app/ch3/*.java']).pipe(gulp.dest('build/ch3/'));
    gulp.src(['app/ch4/*.html', 'app/ch4/*.java']).pipe(gulp.dest('build/ch4/'));
    gulp.src(['app/ch5/*.html', 'app/ch5/*.java']).pipe(gulp.dest('build/ch5/'));
    gulp.src(['app/index.html', 'app/test.html', 'app/sidenav.html', 'app/tableofcontents.html']).pipe(gulp.dest('build/'));
    gulp.src('app/css/**/*.css').pipe(gulp.dest('build/css/'));
    gulp.src('app/js/*.js').pipe(gulp.dest('build/js/'));
    gulp.src('app/img/*').pipe(gulp.dest('build/img/'));
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

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var jshint = require('gulp-jshint');
var exec = require('child_process').exec;

gulp.task('startserver', function() {
  exec('jspm-server');
});

gulp.task('sass', function () {
  return gulp.src('./app/css/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({
			browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
		}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('lint', function() {
  return gulp.src('./app/**/*.js')
    .pipe(jshint({esversion: 6}))
    .pipe(jshint.reporter('default'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./app/**/*.scss', ['sass']);
});

gulp.task('jshint:watch', function() {
  gulp.watch('./app/**/*.js', ['lint']);
});




gulp.task('default', ['sass:watch', 'jshint:watch', 'startserver']);

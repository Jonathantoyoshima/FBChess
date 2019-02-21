const { series, parallel, src, dest, watch } = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

sass.compiler = require('node-sass');

function server() {
  browserSync.init({
    server: {
      baseDir:"./app",
      https:true
    }
  })
}

function clean(cb){
  cb();
}

function build() {
  return src('./src/*.html').pipe(dest('./app'));
}

function script() {
  return src(['./src/js/**/*.js'])
         .pipe(sourcemaps.init())
         .pipe(babel({
           plugins: ['@babel/transform-runtime'],
           presets:['@babel/env']
         }))
         .pipe(concat('script.all.js'))
         .pipe(sourcemaps.write('.'))
         .pipe(dest('./app/js'))
}

function style() {
  return src('./src/sass/**/*.scss')
         .pipe(sourcemaps.init())
         .pipe(sass().on('error', sass.logError))
         .pipe(concat('style.css'))
         .pipe(sourcemaps.write('.'))
         .pipe(dest('./app/css'));
}

function watcher(){
  const htmlObj = watch("./src/*.html");
  const cssObj = watch("./src/sass/**/*.scss");
  const jsObj = watch("./src/js/**/*.js");
  htmlObj.on('change', series(build, browserSync.reload));
  cssObj.on('change', series(style, browserSync.reload));
  jsObj.on('change', series(script, browserSync.reload));
}

exports.build = build;
exports.default = series(
  clean,
  parallel(build, style, script),
  parallel(watcher, server));

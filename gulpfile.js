const { series, parallel, src, dest, watch } = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

sass.compiler = require('node-sass');

function server() {
  browserSync.init({
    https:true,
    proxy: "localhost:5000",
    // server: {
    // //   // proxy:"http://localhost:5000",
    // //   baseDir:"./public",
    // //   // https:true
    // }
  })
}

function build() {
  return src('./src/*.html').pipe(dest('./public'));
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
         .pipe(dest('./public/js'))
}

function style() {
  return src('./src/sass/**/*.scss')
         .pipe(sourcemaps.init())
         .pipe(sass().on('error', sass.logError))
         .pipe(concat('style.css'))
         .pipe(sourcemaps.write('.'))
         .pipe(dest('./public/css'));
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
  parallel(build, style, script),
  parallel(watcher, server));

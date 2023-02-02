const { src, dest, parallel, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const images = require('gulp-images');
// const changed = require('gulp-changed');

var sourcemaps = require('gulp-sourcemaps');
var minCss = require('gulp-clean-css');
var mode = require('gulp-mode')();



function compileImages() {
    return src('src/img/**')
        .pipe(images())
        .pipe(dest('dist/img'));
}

function style() {
    return src('./src/style/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(mode.production(minCss()))
        .pipe(mode.development(sourcemaps.write()))
        .pipe(dest('./dist/'))
}

function html() {
    return src('./src/**/*.html').pipe(dest('./dist/'))
}

function watchAll() {
    watch('./src/style/**/*.scss', style);
    watch('./src/**/*.html', html);
}

// 1 Зробити функцю для картинок
// 2 Зробити функцю для Js файлів
// 3 Зробити функцію очистки папки dist

exports.default = parallel(html, style, compileImages, watchAll)
exports.build = parallel(html, style)
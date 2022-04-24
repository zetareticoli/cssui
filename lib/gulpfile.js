const {src, dest, series, parallel, watch} = require('gulp');
const del = require('del');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const concat = require('gulp-concat');
const zip = require('gulp-zip');
const connect = require('gulp-connect');
const htmlmin = require('gulp-htmlmin');

const config = {
    SOURCE_FOLDER: './src',
    OUTPUT_FOLDER: './dist',
    DEV_SERVER_FOLDER: './dev-server',
    BUNDLE_NAME: 'cssui.bundle.min.css',
    STATIC_FOLDER: '../static/.'
}

const postcssPlugins = [
    autoprefixer(),
    cssnano()
];

function clean() {
    return del(config.OUTPUT_FOLDER);
}

function buildStyles() {
    return src(`${config.SOURCE_FOLDER}/**/*.scss`)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(postcssPlugins))
        .pipe(rename(path => {
            // All output files in main folder
            path.dirname = '.';
            path.extname = '.min.css';

            if (path.basename !== 'cssui') {
                path.basename = 'cssui.' + path.basename;
            }
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(dest(config.OUTPUT_FOLDER));
}

function buildPreviewStyles() {
    return src(`${config.SOURCE_FOLDER}/**/*.scss`)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(dest(config.DEV_SERVER_FOLDER))
        .pipe(connect.reload());
}

function buildPreviewHtml() {
    return src(`${config.SOURCE_FOLDER}/**/*.html`)
        .pipe(htmlmin())
        .pipe(dest(config.DEV_SERVER_FOLDER))
        .pipe(connect.reload());
}


function buildStylesBundle() {
    return src(`${config.SOURCE_FOLDER}/**/*.scss`)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(postcssPlugins))
        .pipe(concat(config.BUNDLE_NAME))
        .pipe(sourcemaps.write('./'))
        .pipe(dest(config.OUTPUT_FOLDER));
}

function taskBuild() {
    return series(clean, parallel(buildStyles, buildStylesBundle));
}

function taskBuildRelease() {
    const zipTask = () => src(config.OUTPUT_FOLDER + '/*')
        .pipe(zip('cssui.zip'))
        .pipe(dest(config.STATIC_FOLDER));

    return series(taskBuild(), zipTask);
}

function start() {
    connect.server({
        root: config.DEV_SERVER_FOLDER,
        livereload: true
    });

    watch(`${config.SOURCE_FOLDER}/**/*.scss`, {ignoreInitial: false}, buildPreviewStyles);
    watch(`${config.SOURCE_FOLDER}/**/*.html`, {ignoreInitial: false}, buildPreviewHtml);
}

exports.build = taskBuild();
exports.buildRelease = taskBuildRelease();
exports.start = start;

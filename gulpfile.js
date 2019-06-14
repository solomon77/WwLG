const gulp = require('gulp')

// sass関連
const sass = require('gulp-sass')
const autoPrefixer = require('gulp-autoprefixer')
const sassGlob = require('gulp-sass-glob')
const cleanCss = require('gulp-clean-css')
const sourcemaps = require('gulp-sourcemaps')
const groupMediaQueries = require('gulp-group-css-media-queries')

// ユーティリティ
const fs = require('fs')
const plumber = require('gulp-plumber')

// テーマ設定
const pkg = require('./package.json')
const themeName = pkg.name
const themeDir = '../app/public/wp-content/themes/' + themeName
const styleCssPath = themeDir + '/style.css'

/**
 * テーマ情報を含む style.css を作成
 * package.json の情報をそのまま style.css にコピー
 */

const styleCssContent = `
@charset 'utf8';
/*
Theme Name: ${themeName}
Author: ${pkg.author}
*/
`

const createStyleCss = () => {
  fs.writeFile(styleCssPath, styleCssContent, (err) => {
    if (err) throw err
  })
}

const src = {
  css: './css/**/**.sass',
  templates: './template/**',
}

const dest = {
  css: themeDir + '/css',
}

const css = () => {
  return gulp.src(src.css)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(autoPrefixer())
    .pipe(groupMediaQueries())
    .pipe(cleanCss())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(dest.css))
}

const templates = () => {
  return gulp.src(src.templates)
    .pipe(gulp.dest(themeDir))
}

gulp.watch([src.css], css)
gulp.watch([src.templates], templates)

const defaultTask = gulp.series(css, templates, createStyleCss)
exports.default = defaultTask

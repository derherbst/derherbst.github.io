"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();

gulp.task('styles', function () {
  gulp.src('sass/style.scss')
    .pipe(plumber())
    .pipe(sass({
      style: 'compressed'
    }))
    .pipe(postcss([
      autoprefixer({browsers: [
        "last 2 versions"
      ]})
    ]))
    .pipe(gulp.dest('css'))
    .pipe(server.stream());
});

//Watch task
//Watches JS

gulp.task('watch', function () {
  
  server.init({
    server: ".",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });
  
  gulp.watch("sass/**/*.{scss,sass}", ['styles']);
  gulp.watch("*.html").on("change", server.reload);
});

gulp.task('default', ['styles', 'watch']);

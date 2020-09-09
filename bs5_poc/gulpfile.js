"use strict";

const { watch, series, src, dest } = require("gulp");
var gulp = require("gulp");

var sass = require("gulp-sass");

//this is to change sass ocmppiler
sass.compiler = require("node-sass");

gulp.task("sass", async function () {
  return gulp
    .src("./scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css"));
});

gulp.task("sass:watch", async function () {
  gulp.watch("./scss/**/*.scss", ["sass"]);
});

// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
function clean(cb) {
  // body omitted
  cb();
}

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
function build(cb) {
  // body omitted
  cb();
}

function streamTask() {
  return src("*.js").pipe(dest("output"));
}

exports.build = build;
exports.default = series(clean, build);

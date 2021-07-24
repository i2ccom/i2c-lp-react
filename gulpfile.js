const { src, dest, series } = require("gulp");
const rename = require("gulp-rename");

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

function copySPAFiles(cb) {
  return src("./dist/index.html")
    .pipe(rename("200.html"))
    .pipe(dest("./dist"));
}
exports.build = build;
exports.copySPAFiles = copySPAFiles;

const { parallel, series } = require("gulp");

const serveTask = require("./gulp-tasks/serve").serve;
const watchTask = require("./gulp-tasks/watch").watch;
const cleanTask = require("./gulp-tasks/clean").clean;
const htmlTask = require("./gulp-tasks/html").html;
const stylesTask = require("./gulp-tasks/styles").styles;
const scriptsTask = require("./gulp-tasks/scripts").scripts;
const imgTask = require("./gulp-tasks/img").img;

const build = parallel(cleanTask, series(htmlTask, stylesTask, scriptsTask, imgTask));
const dev = parallel(serveTask,watchTask, build)

exports.dev = dev;
exports.build = build;

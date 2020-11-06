const { watch } = require("gulp");
const htmlTask = require("./html").html;
const scriptsTask = require("./scripts").scripts;
const stylesTask = require("./styles").styles;
const imgTask = require("./img").img;
const browserSync = require("./serve").browserSync;

const watcher = () => {
	watch("./src/html/*.html", (cb) => {
		htmlTask();
		browserSync.reload();
		cb();
	});
	watch("./src/js/*.js", (cb) => {
		scriptsTask();
		browserSync.reload();
		cb();
	});
	watch("./src/scss/*.scss", (cb) => {
		stylesTask();
		browserSync.reload();
		cb();
	});
		watch("src/images/**/*", (cb) => {
		imgTask();
		browserSync.reload();
		cb();
	});
};

exports.watch = watcher;

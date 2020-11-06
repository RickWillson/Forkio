const {src, dest } = require("gulp");
const jsMinify = require("gulp-js-minify");
const concat = require('gulp-concat');

const scripts = () => {
	return src("./src/js/*.js")
		.pipe(concat('script.min.js'))
		.pipe(jsMinify())
		.pipe(dest("./dist/js/"));
};

exports.scripts = scripts;


const {src, dest } = require("gulp");
const fileinclude = require("gulp-file-include");

const html = () => {
	return src("./src/html/index.html")
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
            }))
		.pipe(dest("./"));
};

exports.html = html;


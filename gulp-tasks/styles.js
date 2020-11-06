const { src, dest } = require("gulp");
const concat = require('gulp-concat');
const sass = require("gulp-sass");
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');

const styles = () => {
	return src(["./src/scss/normalized.scss","./src/scss/main.scss"])
		.pipe(concat('styles.min.css'))
		.pipe(sass().on("error", sass.logError))
		.pipe(autoprefixer({overrideBrowserslist: ['last 2 versions'],
			cascade: false
		}))
		.pipe(csso({
            restructure: false,
            sourceMap: true,
            debug: true
        }))
		.pipe(dest("./dist/css/"));
};

exports.styles = styles;

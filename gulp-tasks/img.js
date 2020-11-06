// тожу что и
// const gulp = require("gulp");

const { src, dest } = require("gulp");
const imagemin = require("gulp-imagemin");

// const scripts = () => {
// 	return gulp.src("./src/js/*.js")
// 		.pipe(gulp.dest("./dist/js/"));
// };

const img = () => {
	return src("./src/images/**/*")
    .pipe(imagemin([
			imagemin.gifsicle({interlaced: true}),
			imagemin.mozjpeg({quality: 75, progressive: true}),
			imagemin.optipng({optimizationLevel: 5}),
			imagemin.svgo({
				plugins: [
					{removeViewBox: true},
					{cleanupIDs: false}
				]
			})
	]))
	.pipe(dest("./dist/img/"));
};

exports.img = img;


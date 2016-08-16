var gulp         = require('gulp'),
	sass         = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	rename       = require('gulp-rename'),
	cleanCSS     = require('gulp-clean-css');

var path = {
	style: {
		watch: 'scss/**/*.scss',
		comp: 'scss/thegrid.scss',
		build: 'dist/'
	}
};

gulp.task('build', function(){
	return gulp.src(path.style.comp)
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({browsers: ['last 10 versions'],cascade: false}))
		.pipe(gulp.dest(path.style.build))
		.pipe(cleanCSS())
		.pipe(rename({suffix: ".min"}))
		.pipe(gulp.dest(path.style.build));
});

gulp.task('watch', function(){
	gulp.watch(path.style.watch, ['build']);
});

gulp.task('default', ['build',  'watch']);
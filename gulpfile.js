var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

gulp.task("compile", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});

gulp.task('res', () => {
    return gulp.src([
            './src/**/*.png',
            './src/**/*.jpg',
            './src/**/*.gif',
            './src/**/*.ico',
            './src/**/*.wxml',
            './src/**/*.wxss',
            './src/**/*.json',
        ])
        .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['res', 'compile']);
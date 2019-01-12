var gulp = require("gulp");
var gulp = require("gulp");
var sass = require("gulp-sass");
var server = require("gulp-webserver");

gulp.task("devSass", function() {
    return gulp.src("./src/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./src/css"))
})

gulp.task("devServer", function() {
    return gulp.src("src")
        .pipe(server({
            port: 3300,
            proxies: [{
                source: "/api/get/train_tickets",
                target: "http://localhost:3000/api/get/train_tickets"
            }]
        }))
})

gulp.task("watch", function() {
    return gulp.watch("./src/scss/*.scss", gulp.series("devSass"));
});

gulp.task("dev", gulp.series("devSass", "devServer", "watch"));
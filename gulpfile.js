'use strict';

// Include Gulp & Tools We'll Use
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');
var runSequence = require('run-sequence');
//var browserSync = require('browser-sync');
//var pagespeed = require('psi');
var minifyCSS = require('gulp-minify-css');
var ejs = require("gulp-ejs");
//var replace = require("gulp-replace");
//var reload = browserSync.reload;
var exec = require('child_process').exec;
var supervisor = require( "gulp-supervisor" );

// Optimize Images
gulp.task('images', function () {
    return gulp.src('src/images/**/*',!'src/images/**/*.psd')
        .pipe(gulp.dest('public/images'))
        .pipe($.size({title: 'images'}));
});

// Copy All Files At The Root Level (app)
gulp.task('copy', function() {
    gulp.src(['src/*.swf'],{base:'src/'})
        .pipe(gulp.dest('public'))
        .pipe($.size({title: 'copy:swf'}));

    gulp.src(['src/stylesheets/*.*','src/fonts/**/*.*'],{base:'src/'})
        .pipe(gulp.dest('public'))
        .pipe($.size({title: 'copy'}));

//    gulp.src('nginx/console.conf',{base:'.'})
//        .pipe(gulp.dest('public/nginx/conf.d'))
//        .pipe($.size({title: 'copy nginx config file'}));
});

gulp.task('minify-css', function() {
    gulp.src('./public/css/*.css')
        .pipe(minifyCSS({keepBreaks:true}))
        .pipe(gulp.dest('./public/css/'));
});

// Compile Any Other Sass Files You Added (app/styles)
gulp.task('styles:main', function () {
    return gulp.src(['src/scss/main.scss'])
        .pipe($.rubySass({
            style: 'expanded',
            precision: 10,
            loadPath: ['src/stylesheets']
        }))
        .on('error', console.error.bind(console))
        //.pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
        .pipe(gulp.dest('src/stylesheets'))
        .pipe($.size({title: 'styles:scss'}));
});

// Output Final CSS Styles
gulp.task('styles', ['styles:main']);

gulp.task('rjs', function(cb) {
    exec('sh build.sh', function(err) {
        if (err) return cb(err); //return error
        cb(); // finished task
    });
});

gulp.task('template',function(){

    gulp.src("./views/advertisement.html")
        .pipe(ejs({app_name:'Admin Console'}))
        .pipe(gulp.dest("./public"));
    gulp.src("./views/organization.html")
        .pipe(ejs({app_name:'Admin Console'}))
        .pipe(gulp.dest("./public"));
    gulp.src("./views/tools.html")
        .pipe(ejs({app_name:'Admin Console'}))
        .pipe(gulp.dest("./public"));
    gulp.src("./views/notification.html")
        .pipe(ejs({app_name:'Admin Console'}))
        .pipe(gulp.dest("./public"));
    gulp.src("./views/analytics.html")
        .pipe(ejs({app_name:'Admin Console'}))
        .pipe(gulp.dest("./public"));
    gulp.src("./views/settings.html")
        .pipe(ejs({app_name:'Admin Console'}))
        .pipe(gulp.dest("./public"));
});

// Clean Output Directory
gulp.task('clean', del.bind(null, [
    '.tmp',
    'public/css',
    'public/fonts',
    'public/images',
    'public/javascript',
    'public/localization',
    'public/stylesheets',
    'public/ZeroClipboard.swf',
    'public/*.html',
    'public/nginx'
]));

// Watch Files For Changes & Reload
gulp.task('serve', function () {
    gulp.watch(['src/scss/*.scss'], ['styles']);
    gulp.watch(['src/scss/modules/*.scss'], ['styles']);
    gulp.watch(['src/scss/modules/**/*.scss'], ['styles']);
    gulp.watch(['src/scss/util/*.scss'], ['styles']);

    supervisor( "app.js", {
        args: ["--dev"],
        watch: [ "app" ],
        ignore: [ "tasks","src","node_modules","public","views"],
        pollInterval: 500,
        extensions: [ "js" ],
        exec: "node",
        debug: true,
        debugBrk: false,
        harmony: true,
        noRestartOn: "exit",
        forceWatch: true,
        quiet: false
    } );
});

// Build and serve the output from the dist build
//gulp.task('serve:dist', ['default'], function () {
//    browserSync({
//        notify: false,
//        server: {
//            baseDir: 'public'
//        }
//    });
//});

// Build Production Files, the Default Task
gulp.task('build', ['clean'], function (cb) {
    runSequence('styles', ['copy','images','rjs','template'],'minify-css', cb);
});

gulp.task('default', ['styles'], function (cb) {
    runSequence('serve', cb);
});

// Run PageSpeed Insights
// Update `url` below to the public URL for your site
//gulp.task('pagespeed', pagespeed.bind(null, {
//    // By default, we use the PageSpeed Insights
//    // free (no API key) tier. You can use a Google
//    // Developer API key if you have one. See
//    // http://goo.gl/RkN0vE for info key: 'YOUR_API_KEY'
//    url: 'https://example.com',
//    strategy: 'mobile'
//}));

// Load custom tasks from the `tasks` directory
//try { require('require-dir')('tasks'); } catch (err) {}

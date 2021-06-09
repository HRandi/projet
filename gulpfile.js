/* #region  Chargement des modules pour gulp */
let series = require('gulp').series;
let del = require('delete');
const { src, dest } = require('gulp');
const gulp = require('gulp');
var help = require('gulp-help-four');
help(gulp, {
    //option de gulp-help-four
});

const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const ts = require('gulp-typescript');
const exec = require('child_process').exec
/* #endregion */

/* #region  Configuration de la toolschain */
const TS_CONFIG = {
    target: "ES5",
    noImplicitAny: true
};
const file_to_run = 'build/server.js';
/* #endregion */

/* #region   Définition des tâches */
function buildx() { // produit une version uglifier du code final
    console.log("... traitement du buildx ...");
    return (src('build/*.js')
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(dest('buildx/'))
    );
}

function compil(){
    return (src('src/**/*.ts')
        .pipe(ts(TS_CONFIG))
        .pipe(dest('build/www'))
    );
}

function copy_www(){
    return (src(['src/www/**/*', '!src/**/*.ts'])
        .pipe(dest('build/www'))
    );
}

function clean(finish) {
    console.log("... traitement du clean ...");
    del(['build/*', 'buildx/*'], finish); //on doit appeler cette fonction à la fin de la tâche
}

function build(finish) {
    console.log("... traitement du build ...");
    return (src('src/**/*.ts')
        .pipe(ts(TS_CONFIG))
        .pipe(dest('build/'))
    );
}

let full = series(clean, build, buildx);
/* #endregion */

/* #region  Publication des tâches */

gulp.task('run', "Lancement du serveur", function(finish){
    exec('node '+file_to_run, function (err, stdout, stderr){
        console.log(stdout);
        console.log(stderr);
        finish();
    });
});

exports.copy_www = copy_www;
exports.buildx = buildx;
exports.clean = clean;
exports.build = build;
exports.full = full;
exports.default = build;

/* #endregion */
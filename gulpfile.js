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
const spawn = require('child_process').spawn
/* #endregion */

/* #region  Configuration de la toolschain */
const TS_CONFIG = {
    target: "ES6",
    noImplicitAny: true,
    removeComments: true,
    module: 'commonjs',
    moduleResolution: "node"
};
const file_to_run = 'server.js';
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

function copy_www(){ // copier les codes de src/www dans build/www sans le code .ts
    return (src(['src/www/**/*', '!src/**/*.ts'])
        .pipe(dest('build/www'))
    );
}

function clean(finish) { //Netoyer le code dans le dossier build et buildx
    console.log("... traitement du clean ...");
    del(['build/*', 'buildx/*'], finish); 
}

function build() { // Transpliter les codes sources .ts
    console.log("... traitement du build ...");
    return (src('src/**/*.ts')
        .pipe(ts(TS_CONFIG))
        .pipe(dest('build/'))
    );
}

let full = series(clean, build, buildx, copy_www);
/* #endregion */

/* #region  Publication des tâches */

gulp.task('run', "Lancement du serveur", function(finish){
    //utilisation d'un mode de lancement de commande avec affichage asynchrone
    let cmd = spawn("node", [file_to_run], {cwd : 'build'});

    cmd.stdout.on("data", val => console.log(val.toString()));
    cmd.stderr.on("data", val => console.log(val.toString()));

    cmd.on('close', finish);
});

exports.copy_www = copy_www;
exports.buildx = buildx;
exports.clean = clean;
exports.build = build;
exports.full = full;
exports.default = build;

/* #endregion */
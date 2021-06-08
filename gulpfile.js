/* #region  Définition des variables à utiliser */
let series = require('gulp').series;
let del = require('delete');
const { src, dest } = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
let ts = require('gulp-typescript');
/* #endregion */

/* #region  Configuration de la transpilation TypeSCRIPT */
const TS_CONFIG = {
    target: "ES6"
};

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
exports.buildx = buildx;
exports.clean = clean;
exports.build = build;
exports.full = full;
exports.default = build;

/* #endregion */
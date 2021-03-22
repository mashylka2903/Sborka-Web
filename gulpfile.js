const {src, dest} = require('gulp'); //функции GULP
const sass = require('gulp-sass'); //импортировать SASS

exports.default = async function() { // передать асинхронную функцию
    console.log('HELLO');
}

exports.copy = function () {
    return src('style/*.scss') //что взять    
    .pipe(dest('output')) //куда копировать в какую папку. папка создается сама автоматом
} 

exports.built = function () {
    return src('style/main.scss') //что взять 
    .pipe(sass())   
    .pipe(dest('output')) //куда копировать в какую папку. папка создается сама автоматом
} 

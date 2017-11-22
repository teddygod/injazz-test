var gulp       = require('gulp'), // Подключаем Gulp
	sass         = require('gulp-sass'), //Подключаем Sass пакет,
	browserSync  = require('browser-sync'), // Подключаем Browser Sync
	concat       = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
	uglify       = require('gulp-uglifyjs'), // Подключаем gulp-uglifyjs (для сжатия JS)
	cssnano      = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
	rename       = require('gulp-rename'), // Подключаем библиотеку для переименования файлов
	del          = require('del'), // Подключаем библиотеку для удаления файлов и папок
	imagemin     = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
	pngquant     = require('imagemin-pngquant'), // Подключаем библиотеку для работы с png
	cache        = require('gulp-cache'), // Подключаем библиотеку кеширования
	sourcemaps    = require('gulp-sourcemaps'),
	//extendHtml   = require('gulp-html-extend'),
	autoprefixer = require('gulp-autoprefixer');// Подключаем библиотеку для автоматического добавления префиксов

gulp.task('scss', function(){ // Создаем таск Sass
	return gulp.src('app/scss/**/*.+(scss|sass)') // Берем источник
		.pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
		.pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
		.pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

// gulp.task('html', function () {
// 	return gulp.src('./app/**/*.html')
// 		.pipe(extendHtml({annotations:true,verbose:false}))
// 		.pipe(rename({suffix: '-page'}))
// 		.pipe(gulp.dest('./app/'))
// });

gulp.task('browser-sync', function() { // Создаем таск browser-sync
	browserSync({ // Выполняем browserSync
		server: { // Определяем параметры сервера
			baseDir: 'app' // Директория для сервера - app
		},
		notify: false // Отключаем уведомления
	});
});

gulp.task('scripts', function() {
	return gulp.src([ // Берем все необходимые библиотеки
		'app/libs/jquery/dist/jquery.min.js', // Берем jQuery
		'app/libs/jquery-ui/jquery-ui.min.js', // Берем jQuery-ui
		'app/libs/bxslider-4/dist/jquery.bxslider.min.js',
		'app/libs/inputmask/dist/min/jquery.inputmask.bundle.min.js',
		'app/libs/inputmask/dist/inputmask/phone-codes/*.js',
		'app/libs/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js',
		'app/js/component.js',
		'app/js/select-block.js',
		'app/js/tabs.js',
		'app/libs/jquery.doubletaptogo.min.js',
		'app/libs/slicknav/dist/jquery.slicknav.min.js',
		'app/js/responsiveCarousel.min.js',
		'app/libs/raty-fa/lib/jquery.raty-fa.js',
		'app/libs/jquery.ns-autogrow/dist/jquery.ns-autogrow.min.js'
		])
		.pipe(concat('libs.min.js')) // Собираем их в кучу в новом файле libs.min.js
		//.pipe(uglify()) // Сжимаем JS файл
		.pipe(gulp.dest('app/js')); // Выгружаем в папку app/js
});

gulp.task('css-libs', ['scss'], function() {
	return gulp.src('app/css/libs.css')// Выбираем файл для минификации
		.pipe(sourcemaps.init())
			.pipe(cssnano()) // Сжимаем
			.pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('css')); // Выгружаем в папку app/css
});

gulp.task('watch', ['browser-sync', 'css-libs', 'scripts'], function() {
	gulp.watch('app/scss/**/*.scss', ['scss'],  browserSync.reload); // Наблюдение за sass файлами в папке sass
	gulp.watch('app/*.html',  browserSync.reload); // Наблюдение за HTML файлами в корне проекта
	gulp.watch('app/js/**/*.js', browserSync.reload);   // Наблюдение за JS файлами в папке js

});

gulp.task('clean', function() {
	return del.sync('dist'); // Удаляем папку dist перед сборкой
});

gulp.task('img', function() {
	return gulp.src('app/img/**/*') // Берем все изображения из app
		.pipe(cache(imagemin({ // С кешированием
		// .pipe(imagemin({ // Сжимаем изображения без кеширования
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))/**/)
		.pipe(gulp.dest('dist/img')); // Выгружаем на продакшен
});

gulp.task('build', ['clean', 'img', 'sass', 'scripts'], function() {

	var buildCss = gulp.src([ // Переносим библиотеки в продакшен
		'app/css/main.css',
		'app/css/libs.min.css'
		])
	.pipe(gulp.dest('dist/css'))

	var buildFonts = gulp.src('app/fonts/**/*') // Переносим шрифты в продакшен
	.pipe(gulp.dest('dist/fonts'))

	var buildFonts = gulp.src('app/font/**/*') // Переносим шрифты в продакшен
	.pipe(gulp.dest('dist/font'))

	var buildJs = gulp.src('app/js/**/*') // Переносим скрипты в продакшен
	.pipe(gulp.dest('dist/js'))

	var buildHtml = gulp.src('app/*.html') // Переносим HTML в продакшен
	.pipe(gulp.dest('dist'));

});

gulp.task('clear', function (callback) {
	return cache.clearAll();
})

gulp.task('default', ['watch']);

var gulp  = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var es = require('event-stream');

// 复制src中除了/js/index.js之外所有文件到dist中
gulp.task('copyfile',function(){
    return gulp.src(['./src/**/*','!./src/js/react/*']).
    pipe(gulp.dest('./dist/'));
})

// index.js依赖于react，对此文件进行了压缩（压缩方式参考《React精髓》）
gulp.task('default',['copyfile'],function(){
    //定义多个入口文件
    var entryFiles = [
        'index.js',
        'stores/ListStore.js',
        'dispatcher/Dispatcher.js',
        'dispatcher/AppDispatcher.js',
        'actions/ButtonActions.js'
    ];

    //遍历映射这些入口文件
    var tasks = entryFiles.map(function(entry){
        return browserify('./src/js/react/'+ entry)
           .transform(babelify,{presets: ['react']})
           .bundle()
           .pipe(source(entry))
           .pipe(gulp.dest('./dist/js'));
    });

    //创建一个合并流
    return es.merge.apply(null, tasks);
})


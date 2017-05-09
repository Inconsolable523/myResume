# myResume
## 基于yeogurt做的简历
在线地址：[https://inconsolable523.github.io/myResume/build/index.html](https://inconsolable523.github.io/myResume/build/index.html)

Based on [generator-yeogurt@1.5.2](https://github.com/larsonjj/generator-yeogurt)

## 技术

JavaScript(使用Babel将es6代码转换为es5)

- [Browserify](http://browserify.org/) with ES6/2015 support through [Babel](https://babeljs.io/)

CSS

- [Less](http://lesscss.org/)
- [iconfont](http://www.iconfont.cn/)

HTML

- [Nunjucks模板](https://mozilla.github.io/nunjucks/)

优化

- [Imagemin](https://github.com/imagemin/imagemin)
- [Uglify](https://github.com/mishoo/UglifyJS)

页面同步测试工具

- [BrowserSync](http://www.browsersync.io/)

Linting

- [ESlint](http://eslint.org/)

工作流

- [Gulp](http://gulpjs.com)

代码管理

- [commitizen](http://commitizen.github.io/cz-cli/)
- [Git](https://git-scm.com/)

## Gulp工作流

## Gulp工作流

`gulp --production`: Same as `gulp serve --production` also run `gulp test` and  not boot up production server

`gulp serve`: Compiles preprocessors and boots up development server

`gulp serve --open`: Same as `gulp serve` but will also open up site/app in your default browser

`gulp serve --production`: Same as `gulp serve` but will run all production tasks so you can view the site/app in it's final optimized form

`gulp test`: Lints all `*.js` file in the `source` folder using eslint and runs all `*.test.js` file unit tests through [Karma](http://karma-runner.github.io/0.13/index.html) and Mocha + Chai

`gulp test --watch`: Same as `gulp test` but will constantly watch `*.test.js` files and rerun tests when changes are detected

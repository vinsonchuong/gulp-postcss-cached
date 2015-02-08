# gulp-postcss-cached
[![Code Climate](https://codeclimate.com/github/vinsonchuong/gulp-postcss-cached.png)](https://codeclimate.com/github/vinsonchuong/gulp-postcss-cached)

## Installing
`gulp-postcss-cached` is available as an
[npm package](https://www.npmjs.com/package/gulp-postcss-cached).

## Usage
```js
var gulp = require('gulp');
var postcssCached = require('gulp-postcss-cached');
var cssnext = require('cssnext');

gulp.task('build:css', function() {
  return gulp.src('app/styles.css')
    .pipe(postcssCached({map: true})
      .use(cssnext({sourcemap: true})))
    .pipe(gulp.dest('dist'));
});
```

## Development
### Getting Started
The application requires the following external dependencies:
* Node.js

The rest of the dependencies are handled through:
```bash
npm install
```

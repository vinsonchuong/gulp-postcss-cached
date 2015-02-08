'use strict';
var postcssCached = require('postcss-cached');
var through = require('through2');
var applySourceMap = require('vinyl-sourcemaps-apply');
var gulpUtil = require('gulp-util');

module.exports = function(options) {
  options = Object(options);
  var postcssCachedInstance = postcssCached();

  var gulpPlugin = through.obj(function(file, encoding, callback) {
    var fileOptions = Object(options);
    fileOptions.from = file.path;
    fileOptions.map = fileOptions.map || file.sourceMap;

    try {
      var result = postcssCachedInstance
        .process(file.contents.toString('utf8'), fileOptions);
      file.contents = new Buffer(result.css);
      if (fileOptions.map) {
        applySourceMap(file, result.map);
      }
      this.push(file);
      callback();
    } catch(e) {
      callback(new gulpUtil.PluginError('gulp-postcss-cached', e));
    }
  });

  gulpPlugin.use = function(postcssPlugin) {
    postcssCachedInstance.use(postcssPlugin);
    return this;
  };

  return gulpPlugin;
};

var marked = require('marked');
marked.setOptions({
  smartypants: true
});

var renderer = new marked.Renderer();

renderer.em = function(text) {
  return '<Text style={styles.emphasis}>' + text + '</Text>';
};

renderer.paragraph = function(text) {
  return '<Text style={styles.paragraph}>' + text + '</Text>';
};

module.exports = renderer;

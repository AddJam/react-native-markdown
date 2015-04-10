var React = require('react-native');
var {
  View
} = React;
var _ = require('lodash');
var SimpleMarkdown = require('simple-markdown');

var styles = {
  em: {
    fontFamily: 'HelveticaNeue-Italic'
  },
  hr: {
    backgroundColor: '#cccccc',
    height: 1
  },
  image: {
    height: 50, // TODO: React Native needs to support auto image size
    width: 50 // TODO: React Native needs to support auto image size
  },
  u: {
    borderColor: '#333333',
    borderBottomWidth: 1
  },
  paragraph: {
    margin: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  strong: {
    fontFamily: 'HelveticaNeue-Bold'
  }
};


var Markdown = React.createClass({

  componentWillMount: function() {
    var rules = require('./rules')(_.merge(styles, this.props.style));
    rules = _.merge(SimpleMarkdown.defaultRules, rules);

    var parser = SimpleMarkdown.parserFor(rules);
    this.parse = function(source) {
      var blockSource = source + '\n\n';
      return parser(blockSource, {inline: false});
    };
    this.renderer = SimpleMarkdown.outputFor(SimpleMarkdown.ruleOutput(rules, 'react'));
  },

  render: function() {

    var child = _.isArray(this.props.children)
      ? this.props.children.join('') : this.props.children;
    var tree = this.parse(child);
    return <View style={this.props.style}>{this.renderer(tree)}</View>;
  }
});

module.exports = Markdown;

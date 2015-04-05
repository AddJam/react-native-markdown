# react-native-markdown

A component for rendering Markdown in React Native. This component is still in early development.

## Getting started

1. `npm install react-native-markdown --save`

## Usage

All you need is to `require` the `react-native-markdown` module and then use the
`<Markdown/>` tag.

```javascript
var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;
var Markdown = require('react-native-markdown');

var cameraApp = React.createClass({
  render: function() {
    return (
      <View>
        <Markdown>
          Some *really* basic **Markdown**.
        </Markdown>
      </View>
    );
  }
});

AppRegistry.registerComponent('cameraApp', () => cameraApp);
```

## Properties

#### `style`

Default style properties will be applied to the markdown. You will likely want to customize these styles, the following properties can be used to modify the rendered elements:

*Note: The text inside the parentheses denotes the element type.*

- `emphasis` (`<Text>`)
- `paragraph` (`<Text>`)

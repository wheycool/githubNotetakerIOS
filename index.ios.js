//Chris Mirabile's first ReactiveNative app – 4/22/2015

'use strict';

var React = require('react-native');
var Main = require('./App/Components/Main');

var {
    AppRegistry,
    StyleSheet,
    Text,
    NavigatorIOS,
    View,
    } = React;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111111'
    }
});

class githubNotetaker extends React.Component{
    render() {
        return (
          <NavigatorIOS
              style={styles.container}
              initialRoute={{
                title: 'Github Notetaker',
                component: Main
            }} />
      );
    }
}

//var styles = StyleSheet.create({
//    container: {
//        flex: 1,
//        justifyContent: 'center',
//        alignItems: 'center',
//        backgroundColor: '#F5FCFF',
//    },
//    welcome: {
//        fontSize: 20,
//        textAlign: 'center',
//        margin: 10,
//    },
//    instructions: {
//        textAlign: 'center',
//        color: '#333333',
//        marginBottom: 5,
//    },
//});

AppRegistry.registerComponent('githubNotetaker', () => githubNotetaker);

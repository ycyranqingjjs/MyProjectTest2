/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
//导入类库
import React, { Component } from 'react';
import Header from './Header'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    TextInput
} from 'react-native';

//定义类
export default class MyProjectTest extends Component {
//render方法是程序入口,用于渲染
  render() {
    
    return (
      //View为Root
      <View style={styles.container}>

        <Header/>
        <Text style={styles.welcome}>
          用VSCode开发发react-native
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <Text style={styles.instructions}>
        测试一下
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
  },
  instructions: {
    color: '#333333',
    marginBottom: 5,
  },
});

const mystyles = StyleSheet.create({
  co:{
    flex:1,
    justifyContent: 'center',

  }
}

) 

AppRegistry.registerComponent('MyProjectTest', () => MyProjectTest);

//Emportação ES5
//CommonJS
// const React = require('react');
// const Text = require('react-native').Text;
// const Button = require('react-native').Button;
// const View = require('react-native').View;
// const AppRegistry = require('react-native').AppRegistry;

//Emportação ES6
//Import
import React from 'react';
import {View,Text,Button,AppRegistry} from 'react-native';

let gerarnumero = () =>{
  //~Math.floor() -ratorna valor inteiro
  //Math.random() * 1000 gera um valor aleatório entre 1 e 1000
  alert(Math.floor(Math.random() * 1000));
}

const App = () =>{
  return <View>
    <Text>App Random</Text>
    <Button title='Gerar Numero' onPress={gerarnumero}></Button>
  </View>
}

AppRegistry.registerComponent('AppRadom', () =>{ return App});
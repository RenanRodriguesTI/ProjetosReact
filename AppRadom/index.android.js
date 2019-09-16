//Emportação ES5
//CommonJS
// const React = require('react');
// const Text = require('react-native').Text;
// const Button = require('react-native').Button;
// const View = require('react-native').View;
// const AppRegistry = require('react-native').AppRegistry;

//Emportação ES6
//Import
import React from 'react'; // Importe o componente React do módulo react
import {View,Text,Button,AppRegistry} from 'react-native'; //Importe os componentes {View,Text,Button,AppRegistry} do módulo react-native 

let gerarnumero = () =>{
  //~Math.floor() -ratorna valor inteiro
  //Math.random() * 1000 gera um valor aleatório entre 1 e 1000
  alert(Math.floor(Math.random() * 1000));
}

//App contém os componente que serão mostrados na tela 
const App = () =>{
  return <View>
    <Text>App Random</Text>
    <Button title='Gerar Numero' onPress={gerarnumero}></Button>
  </View>
}

//Registra o componente criado
AppRegistry.registerComponent('AppRadom', () =>{ return App});
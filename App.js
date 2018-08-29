import React,{Component} from 'react';
import {View,TouchableOpacity,Text} from 'react-native';
import {createStore} from 'redux';
import {Provider,connect} from 'react-redux'

import rootReducer from './src/reducers/index'
import actions from './src/actions/'
import Index from './src/index'

export default class App extends Component{
  render(){
    const store=createStore(rootReducer)
    return(
      <Provider store={store}>
        <Index/>
      </Provider>
    )
  }
}

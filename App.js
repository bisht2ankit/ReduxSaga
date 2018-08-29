import React,{Component} from 'react';
import {View,TouchableOpacity,Text} from 'react-native';
import {createStore,applyMiddleware} from 'redux';
import {Provider,connect} from 'react-redux'
import createSagaMiddleware from 'redux-saga';

import rootReducer from './src/reducers/index'
import actions from './src/actions/'
import Index from './src/index'
import rootSaga from './src/sagas/'

export default class App extends Component{
  render(){
    const sagaMiddleware=createSagaMiddleware()
    const store=createStore(rootReducer,applyMiddleware(sagaMiddleware))
    sagaMiddleware.run(rootSaga)
    
    return(
      <Provider store={store}>
        <Index/>
      </Provider>
    )
  }
}

import React,{Component} from 'react';
import {View,TouchableOpacity,Text} from 'react-native';
import {createStore} from 'redux';
import {Provider,connect} from 'react-redux'

import rootReducer from './reducers/index'
import * as actions from './actions/'

class Index extends Component{
  render(){
    return(
      <View>
      <TouchableOpacity style={{marginTop:100,marginLeft:10,backgroundColor:'black',height:44,width:120,justifyContent:'center'}}
        onPress={() => this.props.increaseAction()}>
        <Text style={{color:'white',alignSelf:'center'}}>Increment +</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{marginTop:20,marginLeft:10,backgroundColor:'black',height:44,width:120,justifyContent:'center'}}
        onPress={() => this.props.step>0?this.props.decreaseAction():null}>
        <Text style={{color:'white',alignSelf:'center'}}>Decrement -</Text>
      </TouchableOpacity>

      <Text style={{marginLeft:10,marginTop:20}}>Current value : {this.props.step}</Text>
      </View>
    )
  }
}
const mapStateToProps = (state) => ({
  step:state.counterReducer.step?state.counterReducer.step:0
})

const mapDispatchToProps = (dispatch) => ({
  increaseAction:() => dispatch(actions.increaseAction()),
  decreaseAction:() => dispatch(actions.decreaseAction())

})

export default connect(mapStateToProps,mapDispatchToProps)(Index)

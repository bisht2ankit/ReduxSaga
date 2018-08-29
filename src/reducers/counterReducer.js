const defaultState={
  step:0
}

export default function counterReducer(state=defaultState,action) {
    switch(action.type){
      case "increment":
      return{
        step:state.step+1
      }
      break;
      case "decrement":
      return{
        step:state.step-1
      }
      break;
      default:
      return state
    }
}

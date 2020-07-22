import {useReducer} from "react";
import {Actions} from "../actions/Actions";
import {CHANGE_VALUE} from "../actions/ActionType"


const changeValue=(value)=>Actions.changeValue(value)

const initialState = {
  value: "Enter"
};

const todoReducer =(state,action)=>{
  console.log(action)
    switch (action.type) {
      case CHANGE_VALUE: 
        return {...state,value:action.payload};
      default: 
        return { ...state };
    }
}

export const ValueReducer =()=>{

  const [state, dispatch] = useReducer(todoReducer, initialState)


  const changeValueAction=(value)=>{
    dispatch({type: changeValue(value).type, payload: changeValue(value).payload})
  }

  return {...state,changeValueAction}
  
}
import {useReducer} from "react";
import {Actions} from "../actions/Actions";
import {CHANGE_COLOR} from "../actions/ActionType"


const changeColor=(value)=>Actions.changeColor(value)

const initialState = {
  color: "blue"
};

const todoReducer =(state,action)=>{
  console.log(action)
    switch (action.type) {
      case CHANGE_COLOR: 
        return {...state,color:action.payload};
      default: 
        return { ...state };
    }
}

export const ColorReducer =()=>{

  const [state, dispatch] = useReducer(todoReducer, initialState)


  const changeColorAction=(value)=>{
    dispatch({type: changeColor(value).type, payload: changeColor(value).payload})
  }

  return {...state,changeColorAction}
  
}
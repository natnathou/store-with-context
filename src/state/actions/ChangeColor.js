import {CHANGE_COLOR} from "./ActionType"

export const changeColor =(color)=>{
  console.log(color)
  return {type:CHANGE_COLOR, payload:color}
}

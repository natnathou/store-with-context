import {CHANGE_VALUE} from "./ActionType"

export const changeValue =(value)=>{
  return {type:CHANGE_VALUE, payload:value}
}

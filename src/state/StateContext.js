import React from 'react';
import {ColorReducer} from "./reducers/ColorReducer";
import {ContextDevTool} from 'react-context-devtool';

const Context= React.createContext({});

export const StateContext =(props)=> {

const reducers ={
  colorReducer:ColorReducer()
}


  return(
      <Context.Provider value={{...reducers}}>
        <ContextDevTool 
                context={Context} 
                id="Context" 
                displayName="Context" 
               />
          {props.children}
      </Context.Provider>
  )
}
export default Context;
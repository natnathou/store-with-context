import React,{useContext} from "react";
import StateContext from "../state/StateContext"

const Test = () => {
  const context = useContext(StateContext)
  const colorReducer =context["colorReducer"]
  return <div>
      <button
        onClick={
            ()=>colorReducer.changeColorAction("red")
          }
        >
          {context["colorReducer"]["color"]}
        </button>
  </div>
};

export default Test;

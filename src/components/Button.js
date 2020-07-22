import React,{useContext} from "react";
import StateContext from "../state/StateContext"

const Test = () => {
  const context = useContext(StateContext)
  const colorReducer =context["colorReducer"]
  const valueReducer =context["valueReducer"]
  return <div>
      <button
        onClick={
            ()=>{
              colorReducer.changeColorAction("red")
              valueReducer.changeValueAction("Delete")
            }
          }
        style={{
          color: `${colorReducer["color"]}`
        }}
        >
          {valueReducer["value"]}
        </button>
  </div>
};

export default Test;

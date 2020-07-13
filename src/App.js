import React from 'react';
import { StateContext } from "./state/StateContext";
import Button from "./components/Button";


const App= () => {
  return (
      <StateContext>
        <Button />
      </StateContext>
  );
};

export default App;

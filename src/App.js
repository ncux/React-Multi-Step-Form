import React from 'react';
import './App.css';
import { StepsState } from "./context/steps";
import { AllInformation } from "./components/allInformation";

function App() {
  return (
   <StepsState>
    <div className="App">
      <div className="Content">
        <AllInformation/>
      </div>
    </div>
   </StepsState>
  );
}

export default App;

import React, { useState,useEffect } from "react";
// import "./App.css";
// import "./style.css";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Operator from "./components/ButtonComponents/OperatorButtons/Operators";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Display from "./components/DisplayComponents/Display";

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  const [numA, setNumA] = useState("0");
  const [numB, setNumB] = useState("");
  const [operator, setOperator] = useState("");
  const [display, setDisplay] = useState(numA);
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  function inputNum(num) {
    if (!operator || operator === "=") {
      if (numA === "0" || operator === "=") {
        setNumA(num);
        setOperator("");
      } else if (numA.length < 11) {
        setNumA(numA + num);
      }
    } 
    else {
      if (!numB || numB === "0") 
        setNumB(num);
      else if (numB.length < 11) {
        setNumB(numB + num);
      }
    }
  }
  function inputOperator(value) {
    if (!operator || !numB) { // set operator
        setOperator(value)
    }
    else { 
        // eslint-disable-next-line no-eval
        let cal=eval(numA+operator+numB)
      let len= cal.toString().length

        if (len<11){
          setNumA(cal)
        setNumB('')
        setOperator(value)
        }
        else{
            setNumA(cal.toExponential(2))
            setNumB('')
        setOperator(value)
          }
        
    }
}

function inputSpecial(character) {
    // eslint-disable-next-line default-case
    switch (character) {
      case 'C':
          setNumA('0')
          setOperator('')
          setNumB('')
          break
      case '+/-':
          if (numB) setNumB(String(Number(numB) * -1))
          else setNumA(String(Number(numA) * -1))
          break
      case '%':
          if (numB) setNumB(String(Number(numB) / 100))
          else setNumA(String(Number(numA) / 100))
          break
    }
}
  useEffect(() => {
    setDisplay(numB ? numB : numA);
  }, [numA, numB]);
  return (
    <div className="container">
      <Logo />
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <Display display={display} />
        <div className="TwoDiv">
          <div className="Special_number">
            <Specials inputSpecial={inputSpecial} />
            <Numbers inputNum={inputNum} />
          </div>
          <div className="Operate">
            <Operator inputOperator={inputOperator}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

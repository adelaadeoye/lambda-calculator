import React from "react";

const NumberButton = props => {
  return (
  
      <button className="special_pro " onClick={()=>{props.inputNum(props.numbers)} } >{props.numbers}</button>
    
  
  );
};
export default NumberButton;

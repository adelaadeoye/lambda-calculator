import React from "react";

const NumberButton = props => {
  return (
  
      <button className="special_pro " onClick={()=>'call a function' } >{props.numbers}</button>
    
  
  );
};
export default NumberButton;

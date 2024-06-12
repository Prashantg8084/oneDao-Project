import React from "react";

const Required = (props) => {
    
  return (
    <>
      <p style={{color:'red',marginTop:'0px'}}><em>{props.message}</em></p>
    </>
  );
};

export default Required;
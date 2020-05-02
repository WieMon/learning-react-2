import React from 'react';


const Cash = (props) => {
  return(
    <div>{props.title} {props.cash <= 0 ? '' : (props.cash / props.ratio).toFixed(2)}</div>
  )
}

export default Cash; 
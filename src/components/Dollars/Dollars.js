import React from 'react';


const Dollars = (props) => {
  return(
    <div>Dollars: {props.cash <= 0 ? '' : (props.cash / props.ratio).toFixed(2)}</div>
  )
}

export default Dollars; 
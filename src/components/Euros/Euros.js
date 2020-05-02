import React from 'react';

const Euros = (props) => {
  const value = (props.cash / props.ratio).toFixed(2);

  return(
    <div>Euro: {props.cash <= 0 ? '' : value} </div>
  )
}

export default Euros; 
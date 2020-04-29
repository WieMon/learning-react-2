import React from 'react';

const Form = (props) => {
  const {submit, isConfirmed, change} = props;
  return (
  <form onSubmit={submit}>
    <input type='checkbox' id='age' 
          onChange={change} 
          checked={isConfirmed} />
    <label htmlFor='age'>I am 18 years old</label>
    <br/>
    <button type='submit'>Buy</button>
  </form>
  )
}

export default Form;

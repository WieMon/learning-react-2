import React from 'react';

const Header = (props) => {
  const activeItems = props.items.filter(item => item.active);
  const number = activeItems.length;

  return (
    <header>
      <h2>Summary: {number}</h2>
      <h2>Price: {number ? `${number* 10}PLN ` : 'you do not pay'}</h2>
    </header>
  )
}
export default Header;
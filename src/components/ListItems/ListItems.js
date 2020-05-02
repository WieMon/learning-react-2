import React from 'react';
import styles from '../ListItems/ListItems.scss'
import Items from '../Items/Items';

const ListItems = (props) => {
  const items = props.items.map(item => (
    <Items 
      key={item.id} 
      id={item.id}
      name={item.name}
      active={item.active}
      changeStatus={props.changeStatus}
    />
  ))

  return (
    <div className={styles.list}> 
      <h2>Your order:</h2>
      <ul className={styles.html}>
        {items}
      </ul>
    </div>
   
  )
}

export default ListItems; 
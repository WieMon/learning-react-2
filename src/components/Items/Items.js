import React from 'react';
import styles from '../Items/Items.scss'

const Items = (props) => {
  return (
    <li className={props.active ? styles.enabled : styles.disabled} 
    onClick={() => props.changeStatus(props.id)}>{props.name}</li>
  )
}
export default Items;
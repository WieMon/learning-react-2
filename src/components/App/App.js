import React from 'react';
import Form from '../Form/Form';
import styles from './App.scss';
import Item from '../Item/Item';
import Header from '../Header/Header';
import ListItems from '../ListItems/ListItems';
//import Items from '../Items/Items';

//const PositiveMessage = () => <p>You are allowed to watch the movie.</p>

//const NegativeMessage = () => <p>You are not allowed to watch the movie.</p>

const ValidationMessage = (props) => {
  const {txt} = props

  return(
    <p>{txt}</p>
  )
}

class App extends React.Component {

  state = {
    isConfirmed: false,        //Checkobx
    isFormSubmitted: false,    //Checkobx
    availableProducts: 7,      //Cart
    shoppingCart: 1,            //Cart
    items: ['apple', 'plum', 'pear'],  //Array
    itemsMenu: [
      { id: 1, name: "herbata", active: true },
      { id: 2, name: "ziemniaki", active: false },
      { id: 3, name: "kasza", active: false },
      { id: 4, name: "zupa wodna", active: true },
      { id: 5, name: "wrzątek", active: false },
      { id: 6, name: "chleb", active: false },
    ]
  }
  
  //Checkbox
  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormSubmitted: false
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    if(!this.state.isFormSubmitted) {
      this.setState({
        isFormSubmitted: true
      })
    }
  }

  displayMessage = () => {
    if(this.state.isFormSubmitted){
      if(this.state.isConfirmed) {
        return <ValidationMessage txt='You are allowed to watch the movie.'/>
      } else {
        return <ValidationMessage txt='You are not allowed to watch the movie.'/>
      }
    } else {return null}
  }

  //Cart
  handleRemoveFromCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart -1,
    })
  }

  handleAddToCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart +1,
    })
  }

  handleBuy = () => {
    //console.log('Bought');
    this.setState({
      availableProducts: this.state.availableProducts - this.state.shoppingCart,
      shoppingCart: 0
    })
  }
  userList = () => {

  }

  render() {
    const {isConfirmed} = this.state;
    console.log(isConfirmed);
    const {shoppingCart, availableProducts} = this.state;
    const style = shoppingCart === 0 ? {opacity: 0.3} : {};
    const Items = this.state.items.map(item => <Item key={item} content={item} />);
    
    return (
      <>
        <div>
          <h1>Buy the ticket!</h1>
          <Form 
          change={this.handleCheckboxChange} 
          submit={this.handleFormSubmit} 
          checked={this.isConfirmed}
          />
          {this.displayMessage()} 
        </div>

        <div className={styles.container}>
          <button className={styles.btn} 
                  disabled={shoppingCart ? false : true} 
                  onClick={this.handleRemoveFromCart}>-</button>
          <span style={style}>{shoppingCart}</span>
          <button className={styles.btn} 
                  disabled={shoppingCart === availableProducts ? true : false} 
                  onClick={this.handleAddToCart}>+</button>
          {shoppingCart > 0 && <button className={styles.btn} onClick={this.handleBuy}>Buy</button>}
        </div>

        <div>
          {Items}
         </div>

         <div className={styles.containerMenu}>
           <Header items={this.state.itemsMenu} />
           <ListItems />
         </div>
      </>
    )
  }
}

export default App;



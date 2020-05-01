import React from 'react';
import Form from '../Form/Form';
import styles from './App.scss';
import Item from '../Item/Item';

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
    items: ['apple', 'plum', 'pear']  //Array
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
          <ul>
            {Items}
          </ul>
        </div>
      </>
    )
  }
}

export default App;

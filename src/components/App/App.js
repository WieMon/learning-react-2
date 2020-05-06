import React from 'react';
import Form from '../Form/Form';
import styles from './App.scss';
import Item from '../Item/Item';
import Header from '../Header/Header';
import ListItems from '../ListItems/ListItems';
//import Dollars from '../Dollars/Dollars';
//import Euros from '../Euros/Euros';
import Cash from '../Cash/Cash';
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
    itemsMenu: [                                   //Menu
      { id: 1, name: "herbata", active: true },
      { id: 2, name: "ziemniaki", active: false },
      { id: 3, name: "kasza", active: false },
      { id: 4, name: "zupa wodna", active: true },
      { id: 5, name: "wrzątek", active: false },
      { id: 6, name: "chleb", active: false },
    ],
    city: 'London',   //Form
    text: '',         //Form
    isLoved: true,    //Form
    number: '2',      //Form
    amount: '',       //Currency Converter
    product: 'electricity',  //Currency Converter
    //ratioDollar: 3.6,  //Currency Converter
    //ratioEuro: 4.2     //Currency Converter
    number1: 0,
    number2: 0,
    number3: 0,
    number4: 0
  }

  //Currency Converter
  static defaultProps ={
    currencies: [
      {
        id: 0,
        name: 'zloty',
        ratio: 1,
        title: 'Price in zloties:'
      },
        {
          id: 1,
          name: 'dollar',
          ratio: 3.6,
          title: 'Price in dollars:'
        },
        {
          id: 2,
          name: 'euro',
          ratio: 4.1,
          title: 'Price in euro:'
        },
        {
          id: 3,
          name: 'pound',
          ratio: 4.55,
          title: 'Price in pounds:'
        },
    ],
    prices: {
      electricity: .51,
      gas: 4.76,
      oranges: 3.79
    }
  }
  

  //Menu
  handleChangeStatus = (id) => {
    const itemsMenu = this.state.itemsMenu.map(item => {
      if (id === item.id) {
        item.active = !item.active
      }
      return item
    })
    this.setState({
      itemsMenu: itemsMenu
    })
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
      this.setState({
      availableProducts: this.state.availableProducts - this.state.shoppingCart,
      shoppingCart: 0
    })
  }
  userList = () => {

  }

  //Form
  handleChange = e => {
    console.log(e.target.type);
    if (e.target.type === "checkbox") {
      this.setState({
        [e.target.name]: e.target.checked
      })
    } else {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  }

  //Currency Converter
  handleChange = e => {
    this.setState({
      amount: e.target.value,
    })
  }
 
  handleSelect = e => {
    this.setState({
      product: e.target.value,
      amount: ''
    })
  }

  insertSuffix(select) {
    if(select === 'electricity')
      return <em>kWh</em>
      else if(select === 'gas')
        return <em>liters</em>
        else if(select === 'oranges')
          return <em>kilos</em>
          else return null
  } 

  selectPrice(select) {
    const price = this.props.prices[select]
    return price
  }

  //Asynchronicity and merging
  handleClick1 = () => {
    this.setState({
      number1: this.state.number1 + 1,
    })
    console.log('number1 in handleClick; ', this.state.number1);
  }

  handleClick2 = () => {
    this.setState({
      number2: this.state.number2 + 1,
    })
    this.setState({
      number2: this.state.number2 + 1,
    })
    this.setState({
      number12: this.state.number2 + 1,
    })
    console.log('number2 in handleClick; ', this.state.number2);
  }

  handleClick3 = () => {
    this.setState(() => ({
      number3: this.state.number3 + 1,
    }))
    this.setState(() => ({
      number3: this.state.number3 + 1,
    }))
    this.setState(() => ({
      number3: this.state.number3 + 1,
    }))
    console.log('number2 in handleClick; ', this.state.number2);
  }

  handleClick4 = () => {
    this.setState((state) => {
      console.log('numer 4 in handleCLick4: ', state);
      return {
        number4: this.state.number4 + 1,
      }
    })
    this.setState((state) => {
      console.log('numer 4 in handleCLick4: ', state);
      return {
        number4: this.state.number4 + 1,
      }
    })
    this.setState((state) => {
      console.log('numer 4 in handleCLick4: ', state);
      return {
        number4: this.state.number4 + 1,
      }
    })
  }

  render() {
    const {isConfirmed} = this.state;
    const {shoppingCart, availableProducts} = this.state;
    const style = shoppingCart === 0 ? {opacity: 0.3} : {};
    const Items = this.state.items.map(item => <Item key={item} content={item} />);
    const{amount, product, ratioDollar, ratioEuro} = this.state   //Currency Converter
    const price = this.selectPrice(product)
    const calculators = this.props.currencies.map(currency => (
      <Cash key={currency.id} 
            ratio={currency.ratio} 
            title={currency.title} 
            cash={amount} 
            price={price}
      />
    ))
    console.log('number1 in render; ', this.state.number1);
    console.log('number2 in render; ', this.state.number2);
    console.log('number3 in render; ', this.state.number3);
    return (
      <>
        <div>
          <h1>Buy the ticket!</h1>
          <Form 
          change={this.handleCheckboxChange} 
          submit={this.handleFormSubmit} 
          checked={isConfirmed}
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
           <ListItems items={this.state.itemsMenu} changeStatus={this.handleChangeStatus}/>
         </div>

         <div>
           <label>Provide city </label>
            <input name='city'
                   value={this.state.city} 
                  onChange={this.handleChange} 
                  type='text' 
            />
          <br />
          <label>Provide information on this city </label>
            <textarea name='text'
                      value={this.state.text} 
                      onChange={this.handleChange}></textarea>
          <br />
          <label>Do you like this city?
            <input name='isLoved'
                   type='checkbox' 
                   checked={this.state.isLoved} 
                   onChange={this.handleChange}/>
          </label>
          <br />
          <label>
            How many times have you visited this city?
            <select name='number'
                    value={this.state.number} 
                    onChange={this.handleChange}>
              <option value='0'>0</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='more'>more</option>
            </select>
          </label>
          <div className={styles.containerMenu}>
            <label>Select the product: 
              <select value={product} onChange={this.handleSelect}>
                <option value='electricity'>Electricity</option>
                <option value='gas'>Gas</option>
                <option value='oranges'>Orange</option>
              </select>
            </label>
            <br />
            <label>
              <input type='number' 
                     value={amount} 
                     onChange={this.handleChange}/>
              {/*<Dollars cash={amount} ratio={ratioDollar} />
              <Euros cash={amount} ratio={ratioEuro}/>
              <Cash cash={amount} ratio={ratioDollar} title='Dollars: ' />
              <Cash cash={amount} ratio={ratioEuro} title='Euro: ' />*/}
              {this.insertSuffix(this.state.product)}
              {calculators}
            </label>
          </div>

          <div>
            <button onClick={this.handleClick1}>Increase by 1</button>
            <h2>{this.state.number1}</h2>
            <br />
            <button onClick={this.handleClick2}>Increase by 3</button>
            <h2>{this.state.number2}</h2>
            <br />
            <button onClick={this.handleClick3}>Increase by 3</button>
            <h2>{this.state.number3}</h2>
            <br />
            <button onClick={this.handleClick4}>Increase by 3</button>
            <h2>{this.state.number4}</h2>
          </div>
         </div>
      </>
    )
  }
}

export default App;



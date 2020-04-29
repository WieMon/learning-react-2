import React from 'react';

const PositiveMessage = () => <p>You are allowed to watch the movie.</p>

const NegativeMessage = () => <p>You are not allowed to watch the movie.</p>

class App extends React.Component {

  state = {
    isConfirmed: false,
    isFormSubmitted: false
  }

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
        return <PositiveMessage />
      } else {
        return <NegativeMessage />
      }
    } else {return null}
  }

  render() {
    console.log(this.state.isConfirmed);
    return (
      <div>
        <h1>Buy the ticket!</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input type='checkbox' id='age' 
                 onChange={this.handleCheckboxChange} 
                 checked={this.state.isConfirmed} />
          <label htmlFor='age'>I am 18 years old</label>
          <br/>
          <button type='submit'>Buy</button>
          {this.displayMessage()} 
        </form>    
      </div>
    )
  }
}

export default App;

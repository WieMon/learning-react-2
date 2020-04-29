import React from 'react';

const PositiveMessage = () => <p>You are allowed to watch the movie.</p>

const NegativeMessage = () => <p>You are not allowed to watch the movie.</p>

class App extends React.Component {

  state = {
    isConfirmed: false,
  }

  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed
    })
  }

  displayMessage = () => {
    if(this.state.isConfirmed) {
      return <PositiveMessage />
    } else {
      return <NegativeMessage />
    }
  }

  render() {
    console.log(this.state.isConfirmed);
    return (
      <div>
        <h1>Buy the ticket!</h1>
        <input type='checkbox' id='age' 
        onChange={this.handleCheckboxChange} 
        checked={this.state.isConfirmed} />
        <label htmlFor='age'>I am 18 years old</label>
        {this.displayMessage()} 
      </div>
    )
  }
}

export default App;

import React from 'react';

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
        return <ValidationMessage txt='You are allowed to watch the movie.'/>
      } else {
        return <ValidationMessage txt='You are not allowed to watch the movie.'/>
      }
    } else {return null}
  }

  render() {
    const {isConfirmed} = this.state
    console.log(isConfirmed);

    return (
      <div>
        <h1>Buy the ticket!</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input type='checkbox' id='age' 
                 onChange={this.handleCheckboxChange} 
                 checked={isConfirmed} />
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

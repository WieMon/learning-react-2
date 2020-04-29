import React from 'react';
import Form from '../Form/Form';

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
        <Form 
        change={this.handleCheckboxChange} 
        submit={this.handleFormSubmit} 
        checked={this.isConfirmed}
        />
        {this.displayMessage()} 
      </div>
    )
  }
}

export default App;

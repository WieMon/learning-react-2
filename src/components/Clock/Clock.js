import React from 'react';

class Clock extends React.Component {

  state = {
    time: this.getTime()
  }

  getTime() {
    const currentTime = new Date();
    // console.log(currentTime);
    return ({
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds(),
    })
  }

  setTime() {
    // console.log(this);
    const time = this.getTime()
    this.setState({ time })
  }

  componentDidMount() {
    console.log("Zegarek zamontowany");
    this.interval = setInterval(() => this.setTime(), 1000)
  }

  componentWillUnmount() {
    console.log("Zegarek usunięty");
    clearInterval(this.interval)
  }

  render() {
    const { hours, minutes, seconds } = this.state.time
    console.log('interval: ', this.interval);
    return (
      <div>
        {hours} : {minutes > 9 ? minutes : `0${minutes}`} : {seconds > 9 ? seconds : `0${seconds}`}
      </div>
    )
  }
}


export default Clock;
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {isTimerOn: false, seconds: 0}

  onStart = () => {
    this.setState({isTimerOn: true})
    this.timerID = setInterval(this.tick, 1000)
  }

  tick = () => {
    const {seconds} = this.state
    this.setState({seconds: seconds + 1})
  }

  onStop = () => {
    clearInterval(this.timerID)
  }

  onReset = () => {
    this.setState({isTimerOn: false, seconds: 0})
    clearInterval(this.timerID)
  }

  stringifyTime = s => {
    const minutes = Math.floor(s / 60)
    const seconds = s % 60
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`
    return {stringifiedMinutes, stringifiedSeconds}
  }

  render() {
    const {isTimerOn, seconds} = this.state
    const {stringifiedMinutes, stringifiedSeconds} = this.stringifyTime(seconds)
    return (
      <div className="bg-container">
        <h1>Stopwatch</h1>
        <div className="timer">
          <div className="title-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="icon"
            />
            <p className="title">Timer</p>
          </div>
          <h1 className="time-display">
            {stringifiedMinutes}:{stringifiedSeconds}
          </h1>
          <div className="btn-container">
            <button
              type="button"
              className="btn start-btn"
              onClick={this.onStart}
            >
              Start
            </button>
            <button
              type="button"
              className="btn stop-btn"
              onClick={this.onStop}
            >
              Stop
            </button>
            <button
              type="button"
              className="btn reset-btn"
              onClick={this.onReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch

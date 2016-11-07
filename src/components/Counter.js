import React, { Component, PropTypes } from 'react'

class Counter extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    onDivideTo0: PropTypes.func.isRequired
  }

  render() {
    const { value, onIncrement, onDecrement, onDivideTo0 } = this.props
    return (
      <p>
        Clicked: {value} times
        {' '}
        <button onClick={onIncrement}>
          +
        </button>
        {' '}
        <button onClick={onDecrement}>
          -
        </button>
        <br/>
        <br/>
        {' DIVIDE TO 0 '}
        <button onClick={onDivideTo0}>
          -
        </button>        
      </p>
    )
  }
}

export default Counter


import React from 'react'

/**
 * Counter Button
 */
export default class Counter extends React.Component {
  constructor () {
    super()
    this.state = {
      count: 0
    }
  }

  render () {
    return (
      <button
        onClick={() => {
          this.setState({count: this.state.count + 1})
        }}
      >
        Count: {this.state.count}
      </button>
    )
  }
}

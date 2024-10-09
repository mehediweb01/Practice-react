import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('I have a error of errorBoundary', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>I have a error of errorBoundary</h1>
        </div>
      )
    }
    return this.props.children
  }
}

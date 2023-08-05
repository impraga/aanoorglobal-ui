import React from 'react'
import PropTypes from 'prop-types'


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: false }
  }

  static getDerivedStateFromError() {
    return {error: true}
  }

  componentDidCatch(error) {
    this.setState({ error: `${error.name}: ${error.message}` })
  }

  render() {
    const { error } = this.state
    if (error) {
      return (
        <h1>Something went wrong {error}</h1>
      )
    }
    const { children} = this.props
    return children
  }
}

ErrorBoundary.propTypes  = {
  children: PropTypes.node.isRequired
}

export default ErrorBoundary

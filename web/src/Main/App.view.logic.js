import React from 'react'
import App from './App.view.js'

export default class AppLogic extends React.Component {
  state = {
    isHome: true,
    isTermsAndConditions: false,
    isConfirmation: false,
  }

  onClick = () => {
    if (this.state.isHome) {
      this.setState({
        isHome: false,
        isTermsAndConditions: true,
        isConfirmation: false,
      })
    }

    if (this.state.isTermsAndConditions) {
      this.setState({
        isHome: false,
        isTermsAndConditions: false,
        isConfirmation: true,
      })
    }

    if (this.state.isConfirmation) {
      this.setState({
        isHome: true,
        isTermsAndConditions: false,
        isConfirmation: false,
      })
    }
  }

  render() {
    return <App {...this.props} {...this.state} onClick={this.onClick} />
  }
}

import React from 'react'
import App from './App.view.js'

export default class AppLogic extends React.Component {
  state = {
    isHome: true,
    isTermsAndConditions: false,
    isLoanDetails: false,
    isApplicationSubmitted: false,
    isResultAvailable: false,
    isAccepted: false,
  }

  onClick = () => {
    if (this.state.isHome) {
      this.setState({
        isHome: false,
        isTermsAndConditions: true,
        isLoanDetails: false,
        isApplicationSubmitted: false,
        isResultAvailable: false,
        isAccepted: false,
      })
    }

    if (this.state.isTermsAndConditions) {
      this.setState({
        isHome: false,
        isTermsAndConditions: false,
        isLoanDetails: true,
        isApplicationSubmitted: false,
        isResultAvailable: false,
        isAccepted: false,
      })
    }

    if (this.state.isLoanDetails) {
      this.setState(
        {
          isHome: false,
          isTermsAndConditions: false,
          isLoanDetails: false,
          isApplicationSubmitted: true,
          isResultAvailable: false,
          isAccepted: false,
        },
        () => {
          // automatic acceptance
          setTimeout(() => {
            if (this.state.isApplicationSubmitted) {
              this.setState({
                isHome: false,
                isTermsAndConditions: false,
                isLoanDetails: false,
                isApplicationSubmitted: true,
                isResultAvailable: false,
                isAccepted: true,
              })
            }
          }, 3000)
        }
      )
    }

    // cancel
    if (this.state.isApplicationSubmitted) {
      this.setState({
        isHome: true,
        isTermsAndConditions: false,
        isLoanDetails: false,
        isApplicationSubmitted: false,
        isResultAvailable: false,
        isAccepted: false,
      })
    }

    if (this.state.isResultAvailable) {
      this.setState({
        isHome: true,
        isTermsAndConditions: false,
        isLoanDetails: false,
        isApplicationSubmitted: false,
        isResultAvailable: false,
        isAccepted: false,
      })
    }
  }

  render() {
    return <App {...this.props} {...this.state} onClick={this.onClick} />
  }
}

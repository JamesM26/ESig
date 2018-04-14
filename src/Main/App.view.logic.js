import { AppLoading, Font } from 'expo'
import { Animated } from 'react-native'
import fonts from '../fonts.js'
import React from 'react'
import App from './App.view.js'

export default class AppLogic extends React.Component {
  state = {
    _isReady: false,
    isLoanDetails: false,
    isTermsAndConditions: true,
  }

  render() {
    const { _isReady, ...state } = this.state

    if (!_isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return <App {...this.props} {...state} />
  }

  _cacheResourcesAsync() {
    return Font.loadAsync(fonts)
  }
}

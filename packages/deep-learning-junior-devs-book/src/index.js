import React, { createElement, Component, PropTypes } from 'react'
import Routes from './components/Routes'
import './styles/index.css'

// TODO: Need to export other little components users can use
export default class Book extends Component {
  static propTypes = {
    components: PropTypes.object
  };

  static childContextTypes = {
    renderTutorialComponent: PropTypes.func
  };

  getChildContext () {
    return { renderTutorialComponent: ::this.renderTutorialComponent }
  }

  renderTutorialComponent (name, props) {
    return createElement(this.props.components[name], props)
  }

  render () {
    return <Routes />
  }
}

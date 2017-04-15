import React, {Component} from 'react';

import {connect} from 'react-redux';

import YouTube from './YouTube';

class App extends Component {
  render() {
    // routing
    switch (this.props.view) {
      case 'youtube':
        return (
          <YouTube
            id={this.props.stream.data.id}
            state={this.props.stream.state}
          />
        );
      default:
        return <h1>Hello FruitCast!</h1>;
    }
  }
}

export default connect(state => {
  return {
    view: state.view,
    stream: state.stream,
  };
})(App);

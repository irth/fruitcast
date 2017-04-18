import React, {Component} from 'react';

import {connect} from 'react-redux';

import Home from './Home';
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
            volume={this.props.stream.volume}
          />
        );
      default:
        return <Home />;
    }
  }
}

export default connect(state => {
  return {
    view: state.view,
    stream: state.stream,
  };
})(App);

import React, {Component} from 'react';

import ReactYouTube from 'react-youtube';

const style = {
  player: {
    width: '100%',
    height: '100%',
    border: 0,
    margin: 0,
    padding: 0,
  },
};

export default class YouTube extends Component {
  constructor(props) {
    super(props);
    this.state = {player: null};
  }

  componentWillReceiveProps(newProps) {
    this.syncPlayerState(newProps.state);
  }

  render() {
    return (
      <ReactYouTube
        opts={{
          height: '100%',
          width: '100%',
          playerVars: {
            disablekb: 1,
            controls: 0,
          },
        }}
        videoId={this.props.id}
        onReady={this._onReady.bind(this)}
      />
    );
  }

  syncPlayerState(state) {
    const player = this.state.player;
    if (this.state.player == null) return;
    switch (state) {
      case 'playing':
        player.playVideo();
        break;
      case 'paused':
        player.pauseVideo();
        break;
      case 'stopped':
        player.stopVideo();
        break;
    }
  }

  _onReady(e) {
    this.setState({player: e.target});
    this.syncPlayerState(this.props.state);
  }
}

import React, {Component} from 'react';

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
  render() {
    return <h1>{this.props.state}</h1>;
    return (
      <iframe
        style={style.player}
        src={
          `https://youtube.com/embed/${this.props.id}?autoplay=1&controls=0&disablekb=1&enablejsapi=1`
        }
      />
    );
  }
}

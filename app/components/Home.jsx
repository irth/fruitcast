import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: 'red',
      time: new Date()
    };

    setInterval(this.tick.bind(this), 1000);
  }

  tick() {
    this.setState({ time: new Date() })
  }

  componentWillMount() {
    fetch(`api/nasa/apod`)
      .then(response => {
        console.log("??")
        return response.json();
      })
      .then(data => this.setState({ background: `url(${data.url})` }));
  }

  render() {
    return (
      <div style={{ ...style.container, backgroundImage: this.state.background }}>
        <div style={style.date}>{this.state.time.toLocaleDateString()}</div>
        <div style={style.time}>{this.state.time.toLocaleTimeString()}</div>
      </div>
    );
  }
}

const style = {
  container: {
    fontFamily: 'Open Sans',
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
    background: 'black',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    fontSize: '128px',
    lineHeight: 1,
    textShadow: '0 0 7px black',
  },
  date: {
    paddingTop: '50px',
    fontSize: '32px',
    textShadow: '0 0 5px black',
  }
};

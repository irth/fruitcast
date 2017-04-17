// A wrapper over socket.io that dispatches the correct actions
class Client {
  constructor(io) {
    // helper function
    this.dispatch = (type, data) =>
      io.emit('dispatch', Object.assign({type}, data));
  }

  startStreaming(type, data) {
    this.dispatch('SWITCH_VIEW', {view: type});
    this.dispatch('SET_STREAM_DATA', {data});
  }

  play() {
    this.dispatch('SET_STREAM_STATE', {state: 'playing'});
  }

  pause() {
    this.dispatch('SET_STREAM_STATE', {state: 'paused'});
  }

  stop() {
    this.dispatch('SET_STREAM_STATE', {state: 'stopped'});
  }

  setVolume(volume) {
    this.dispatch('SET_STREAM_VOLUME', {volume});
  }
}

module.exports = io => new Client(io);

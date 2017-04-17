module.exports = client => ({
  post: {
    '/stream/youtube': data => client.startStreaming('youtube', data),
    '/controls/play': () => client.play(),
    '/controls/pause': () => client.pause(),
    '/controls/stop': () => client.stop(),
    '/controls/volume': json => client.setVolume(json.volume),
  },
  get: {
    '/': () => 'Welcome to FruitCast!',
  },
});

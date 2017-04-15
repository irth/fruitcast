module.exports = client => ({
  post: {
    '/stream/youtube': data => client.startStreaming('youtube', data),
    '/controls/play': () => client.play(),
    '/controls/pause': () => client.pause(),
    '/controls/stop': () => client.stop(),
    '/test': d => JSON.stringify(d),
  },
  get: {
    '/': () => 'Welcome to FruitCast!',
  },
});

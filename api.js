const fetch = require('node-fetch');
let NASA_APOD = [0, ''];
const NASA_API_KEY = process.env.NASA_API_KEY || 'DEMO_KEY';

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
    '/nasa/apod': () => {
      const time = Date.now();
      if (time - NASA_APOD[0] > 3600e3) {
        return fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`
        ).then(response => {
          console.log('HELLO');
          return response.json();
        }).then(data => {
          NASA_APOD = [time, data];
          return Promise.resolve(data);
        });
      } else return NASA_APOD[1];
    },
  },
});

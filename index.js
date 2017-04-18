const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const server = require('http').Server(app);

// This object allows for easy control of the clients. It basically wraps io.emit.
const client = require('./client')(require('socket.io')(server));

// Helper function to register an api method with express
const registerRouteHandler = (method, url, handler) =>
  app[method](`/api${url}`, (req, res) => {
    const ret = handler(req.body);
    if (ret != null) {
      if (ret instanceof Promise) {
        ret.then(retVal => res.send(retVal));
      } else {
        res.send(ret);
      }
    } else res.send('OK')
  });

// Helper function to register a dict of api methods with helper
const registerRouteHandlers = (method, handlers) => {
  Object.entries(handlers).map(x => registerRouteHandler(method, ...x));
};

// The client is passed to the API so that the API can use it.
const api = require('./api')(client);

registerRouteHandlers('post', api.post);
registerRouteHandlers('get', api.get);

// Serve the frontend. Webpack builds it to ./front.
app.use(express.static('front'));

server.listen(3000, () => console.log('Listening at 3000'));

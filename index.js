const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const server = require('http').Server(app);

app.use(bodyParser.json());

const client = require('./client')(require('socket.io')(server));

const registerRouteHandler = (method, url, handler) =>
  app[method](`/api${url}`, (req, res) => {
    const ret = handler(req.body);
    ret ? res.send(ret) : res.send('OK');
  });

const registerRouteHandlers = (method, handlers) => {
  Object.entries(handlers).map(x => registerRouteHandler(method, ...x));
};

const api = require('./api')(client);

registerRouteHandlers('post', api.post);
registerRouteHandlers('get', api.get);

app.use(express.static('front'));

server.listen(3000, () => console.log('Listening at 3000'));

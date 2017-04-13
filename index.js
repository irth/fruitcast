const express = require('express');
const app = express();

app.get('/api', (req, res) => res.send('Welcome to FruitCast!'));
app.use(express.static('front'));

app.listen(3000, () => console.log('Listening at 3000'));

const express = require('express');
const Podlet = require('@podium/podlet');
var cors = require('cors');

const podlet = new Podlet({
  name: 'podlet-c',
  version: '1.0.0',
  pathname: '/',
  content: '/',
  fallback: '/fallback',
  development: true,
});

const app = express();
app.use(cors({ origin: 'http://localhost:7000' }));

app.use('/build/dist', express.static('./build/dist'));

app.use(podlet.middleware());

app.get(podlet.content(), (req, res) => {
  res.status(200).podiumSend(`
        <div id="root"></div>
    `);
});

app.get(podlet.manifest(), (req, res) => {
  res.status(200).send(podlet);
});

podlet.css({ value: '/build/dist/css/index-0ca7e266.css' });
podlet.js({ value: '/build/dist/index-1860e6da.js', type: 'module' });

app.listen(7300, () => console.log('Podlet listening on port 7300'));

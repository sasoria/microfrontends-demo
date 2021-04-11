const express = require('express');
const Podlet = require('@podium/podlet');

const podlet = new Podlet({
  name: 'podlet-b',
  version: '1.0.0',
  pathname: '/',
  content: '/',
  fallback: '/fallback',
  development: true,
});

podlet.css({ value: '/build/dist/index.css' });
podlet.js({ value: '/build/dist/index.js', type: 'module' });

const app = express();
app.use(podlet.middleware());

app.use('/build/dist', express.static('./build/dist'));

app.get(podlet.content(), (req, res) => {
  res.status(200).podiumSend(`
        <div id="root"></div>
    `);
});

app.get(podlet.manifest(), (req, res) => {
  res.status(200).send(podlet);
});

app.listen(7200, () => console.log('Podlet listening on port 7200'));

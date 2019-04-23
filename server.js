const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const db = require('./db');

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/doctors', (req, res) => {
      res.send(db.physicians);
    });

    server.get('/doctors/:id/appointments', (req, res) => {
      res.send(db.findApptsByPhysician(req.params.id));
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });

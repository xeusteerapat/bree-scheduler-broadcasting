const express = require('express');
const Bree = require('bree');
require('dotenv').config();

const connectDB = require('./config/db');
const { createMessage } = require('./controller/message');
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const bree = new Bree({
  jobs: [
    {
      name: 'broadcast',
      interval: '1m',
    },
  ],
});

bree.start();

app.post('/broadcast', createMessage);

app.listen(5000, () => {
  console.log('server is listening on port 5000 🔥');
});

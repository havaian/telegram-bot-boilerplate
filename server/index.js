const express = require('express');

const server = express();

server.all('/', (req, res) => {
  res.send('BookStore bot is running!');
})

function keepAlive() {
  server.listen(3030, () => {
    console.log('Server ✅');
  })
}

module.exports = keepAlive;
const http = require('http');
const express = require('express');
const path = require('path');

const app = express()

app.use(express.static(path.join(__dirname, '/../')))

var httpServer = http.createServer(app)
.listen(8083, () => {
  console.log('HTTP server starting', httpServer.address())
})

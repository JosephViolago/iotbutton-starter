require('dotenv').config();
const http = require('http');
const express = require('express');
const io = require('socket.io');

const httpRoutes = require('./server/httpRoutes');
const socketListeners = require('./server/socketListeners');
const persistence = require('./server/persistence');

// Set up servers
const app = express();
const server = http.Server(app);
const ioServer = io(server);

// Mount routes
socketListeners(ioServer);
httpRoutes(app, ioServer);

// Mount persistence
app.dataPath = './data/seed.json';
persistence.mountState(app);

// Start server
const port = process.env.port || 8888;
server.listen(port, () => {
    console.log(`listening on port ${port}`);
});

function mountSocket(ioServer) {
    ioServer.on('connection', socket => {
        console.log('a connection was established');
        socket.on('disconnect', () => {
            console.log('a connection dropped');
        });
    });

}

module.exports = mountSocket;
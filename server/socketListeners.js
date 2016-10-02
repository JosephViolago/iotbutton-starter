function mountSocket(ioServer) {
    ioServer.on('connection', socket => {
        console.log('a connection was established');
        socket.on('disconnect', () => {
            console.log('a connection dropped');
        });
        socket.on('chat message', function(msg){
            console.log('message: ' + msg);
        });
        socket.on('message', function(msg){
            console.log('message: ' + JSON.stringify(msg, null, 2));
        });
    });

}

module.exports = mountSocket;
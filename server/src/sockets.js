const { Server } = require('socket.io');
const io = new Server();

const Socket = {
	emit: function (event, data) {
		io.sockets.emit(event, data);
	},
};

io.on('connection', (socket) => {
	console.log(`${socket.id} connected`);

	socket.on('disconnect', () => {
		console.log(`${socket.id} disconnected`);
	});
});

exports.Socket = Socket;

exports.io = io;

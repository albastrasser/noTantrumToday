const Message = require('../db/models/message');
const Channel = require('../db/models/channel');

const users = {};
module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log(socket.id, ' has made a persistent connection to the server!');

    socket.on('new-user', (name) => {
      users[socket.id] = name;
      socket.broadcast.emit('user-connected', name);
    });

    socket.on('new-message', (message) => {
      socket.broadcast.emit('new-message', {
        content: message,
        name: users[socket.id],
      });
    });

    socket.on('new-node', (newNode) => {
      socket.broadcast.emit('new-node', newNode);
    });
    socket.on('disconnect', () => {
      console.log('a user disconnected');
      socket.broadcast.emit('user-disconnected', users[socket.id]);
      delete users[socket.id];
    });

    // socket.on('new-channel', (channel) => {
    //   socket.broadcast.emit('new-channel', channel);
    // });
  });
};

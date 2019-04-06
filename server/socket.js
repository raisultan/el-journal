let io;
const socket = require('socket.io');

module.exports = {
  init: (httpServer) => {
    io = socket(httpServer);
    return io;
  },
  getIO: () => {
    if (!io) {
      throw new Error('Socket.io not initialized!');
    }
    return io;
  },
};

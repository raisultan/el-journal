const socketIo = require('./socket');
const app = require('./app');
const models = require('./database/models');

const server = app.listen(3000);
const io = socketIo.init(server);

io.on('connection', (socket) => {
  console.log('Client connect');
});

models.sequelize.sync()
  .then(() => {
    console.log('Nice! Database looks fine');
  })
  .catch((err) => {
    console.log(err, 'Something went wrong with the Database Update!');
  });

module.exports = server;

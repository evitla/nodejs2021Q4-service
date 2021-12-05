const { PORT } = require('./common/config');
const app = require('./app');

const start = async () => {
  try {
    await app.listen(PORT, (err, address) => {
      if (err) throw err;
      console.log(`Server is now listening on ${address}`);
    });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();

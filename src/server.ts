import config from './common/config';
import app from './app';

const start = async () => {
  try {
    await app.listen(config.PORT, (err: any, address: any) => {
      if (err) throw err;
      console.log(`Server is now listening on ${address}`);
    });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();

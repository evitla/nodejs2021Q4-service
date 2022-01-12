import config from './common/config';
import app from './app';

const start = async () => {
  try {
    app.listen(config.PORT, '::', (err: Error | null) => {
      if (err) throw err;
    });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();

import pino from 'pino';
import { LOG_LEVELS } from './config';

const transport = pino.transport({
  targets: [
    {
      level: LOG_LEVELS[0] as pino.LevelWithSilent,
      target: 'pino-pretty',
      options: {
        destination: './logs/error.log',
        mkdir: true,
        translateTime: 'SYS:dd-mm-yyyy HH:MM:ss',
        ignore: 'pid,hostname',
      },
    },
    {
      level: LOG_LEVELS[4] as pino.LevelWithSilent,
      target: 'pino-pretty',
      options: {
        destination: './logs/all.log',
        mkdir: true,
        translateTime: 'SYS:dd-mm-yyyy HH:MM:ss',
        ignore: 'pid,hostname',
      },
    },
  ],
});

export default pino(transport);

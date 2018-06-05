// const winston = require('winston')

// const logger = new (winston.Logger) ({
//   transports: [
//     new (winston.transports.File)({
//       name: 'error-logger',
//       filename: 'logos/error.log',
//       level: 'error'
//     }),
//     new (winston.transports.Console)({
//     }),
//     new (winston.transports.File)({
//       name: 'info-logger',
//       filename: 'logos/info.log',
//       level: 'info'
//     })
//   ]
// })

// logger.info('my first log with winston!')
// logger.error('my first error log with winston!')

const winston = require('winston')
require('winston-daily-rotate-file')

const { Logger, transports} = winston
const { File, Console, DailyRotateFile} = transports

const logger = new Logger({
  transports: [
    new DailyRotateFile({
      name: 'error-logger',
      filename: 'logos/error.log.',
      level: 'error',
      prepend: false,
      datePattern: 'YYYY-MM-DD-HH.'
    }),
    new DailyRotateFile({
      name: 'info-logger',
      filename: 'logos/info.log.',
      level: 'info',
      prepend: false,
      datePattern: 'YYYY-MM-DD-HH.'
    }),
  ]
})

logger.info('my first log with winston!')
logger.error('my first error log with winston!')
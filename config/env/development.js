'use strict';

var defaultEnvConfig = require('./default');

module.exports = {
  log: {
    // logging with Morgan - https://github.com/expressjs/morgan
    // Can specify one of 'combined', 'common', 'dev', 'short', 'tiny'
    format: 'dev',
    options: {
      // Stream defaults to process.stdout
      // Uncomment/comment to toggle the logging to a log on the file system
      //stream: {
      //  directoryPath: process.cwd(),
      //  fileName: 'access.log',
      //  rotatingLogs: { // for more info on rotating logs - https://github.com/holidayextras/file-stream-rotator#usage
      //    active: false, // activate to use rotating logs 
      //    fileName: 'access-%DATE%.log', // if rotating logs are active, this fileName setting will be used
      //    frequency: 'daily',
      //    verbose: false
      //  }
      //}
    }
  },
  app: {
    title: defaultEnvConfig.app.title
  },
  livereload: true,
  roles: ['admin', 'guest', 'user'],

  db: {
    options: {
      database: 'bazaprojekata',
      password: '12345',
      username: 'postgres',
      //logging: process.env.DB_LOGGING === 'true' ? console.log : false,
      logging: false
    },
    sync: {
      force: process.env.DB_FORCE === 'true'
    }
  }
};

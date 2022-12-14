const moment = require('moment')

const logger = (req, res, next) =>{
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next();
  }
  
  //Init middleware
  app.use(logger);

  module.exports = logger;
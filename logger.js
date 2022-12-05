const { createLogger, format, transports } = require("winston");

module.exports = createLogger({
  format: format.combine(format.timestamp(), format.json()),
  transports: [
   new transports.File({ level: "error", filename: "logs/errors.log" }),
   new transports.File({ level: "info", filename: "logs/info.log" }),
   new transports.Console({
     format: format.combine(format.colorize(), format.simple()),
   })
  ],
  exceptionHandlers: [new transports.File({ filename: "logs/exceptions.log" })],
  rejectionHandlers: [new transports.File({ filename: "logs/rejections.log" })],
});
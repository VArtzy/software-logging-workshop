import winston from "winston"

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console({}),
        new winston.transports.File({
            filename: 'application.log'
        })
    ]
})

logger.log({level: 'info', message: 'Hello World'})
logger.log({level: 'info', message: 'Hello World'})
logger.log({level: 'info', message: 'Hello World'})
logger.log({level: 'info', message: 'Hello World'})
logger.log({level: 'info', message: 'Hello World'})

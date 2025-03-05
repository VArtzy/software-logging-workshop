import winston from "winston"

const logger = winston.createLogger({
    level: 'info',
    transports: [
        new winston.transports.Console({}),
        new winston.transports.File({
            filename: 'application.log'
        }),
        new winston.transports.File({
            level: 'error',
            filename: 'application-error.log'
        })
    ]
})

logger.log({level: 'info', message: 'Hello World'})
logger.log({level: 'info', message: 'Hello World'})
logger.log({level: 'error', message: 'Hello World'})
logger.log({level: 'error', message: 'Hello World'})

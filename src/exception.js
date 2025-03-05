import winston from "winston"

const logger = winston.createLogger({
    level: 'info',
    //handleExceptions: true,
    transports: [
        new winston.transports.File({
            filename: 'exception.log',
            handleExceptions: true
        })
    ]
})

hello()

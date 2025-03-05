import winston from "winston"

const logger = winston.createLogger({
    level: 'info',
    //format: winston.format.json(),
    format: winston.format.simple(),
    transports: [
        new winston.transports.Console({})
    ]
})

logger.info("Hello World")
logger.error("Hi World")

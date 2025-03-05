import winston from "winston"

const logger = winston.createLogger({
    level: 'debug',
    transports: [
        new winston.transports.Console({})
    ]
})

logger.log({level: 'error', message: 'Error Message'})
logger.log({level: 'warn', message: 'Warn Message'})
logger.log({level: 'info', message: 'Info Message'})
logger.log({level: 'http', message: 'HTTP Message'})
logger.log({level: 'verbose', message: 'Verbose Message'})
logger.log({level: 'debug', message: 'Debug Message'})
logger.log({level: 'silly', message: 'Silly Message'})

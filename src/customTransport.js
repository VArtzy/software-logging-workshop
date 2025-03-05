import winston from "winston"
import TransportStream from "winston-transport"

class MyTransport extends TransportStream {
    constructor(option) {
        super(option)
    }

    log(info, next) {
        console.log(`${new Date()} : ${info.level.toUpperCase()} : ${info.message}`)
        next()
    }
}

const logger = winston.createLogger({
    level: 'silly',
    transports: [
        new MyTransport({})
    ]
})

logger.log({level: 'error', message: 'Error Message'})
logger.log({level: 'info', message: 'Info Message'})

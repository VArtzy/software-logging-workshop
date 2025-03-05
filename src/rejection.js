import winston from "winston"

const logger = winston.createLogger({
    level: 'info',
    //handleExceptions: true,
    //handleRejections: true,
    transports: [
        new winston.transports.File({
            filename: 'rejection.log',
            handleExceptions: true,
            handleRejections: true
        })
    ]
})

async function callAsync() {
    return Promise.reject("Ups")
}

callAsync()

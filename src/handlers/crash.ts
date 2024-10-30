import util from 'util';

module.exports = async () => {

    process.on('unhandledRejection', (reason, promise) => {
        console.log('Unhandled Rejection at:', promise, 'reason:', util.inspect(reason, { depth: null }));
    });

    process.on('uncaughtException', (err, origin) => {
        console.log(`Caught exception: ${util.inspect(err, { depth: null })}\n` + `Exception origin: ${origin}`);
    });

    process.on('uncaughtExceptionMonitor', (err, origin) => {
        console.log(`Caught exception: ${util.inspect(err, { depth: null })}\n` + `Exception origin: ${origin}`);
    });

    /*
    process.on('unhandledRejection', (reason, promise) => {
        console.log('Unhandled Rejection at:', promise, 'reason:', reason);
    });

    process.on('uncaughtException', (err, origin) => {
        console.log(`Caught exception: ${err}\n` + `Exception origin: ${origin}`);
    });

    process.on('uncaughtExceptionMonitor', (err, origin) => {
        console.log(`Caught exception: ${err}\n` + `Exception origin: ${origin}`);
    });
    */
}
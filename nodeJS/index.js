
const logger = require('./logger');
logger.log('viskas veikia');

//////

const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('messageLogged', function(){
    console.log('Gauta zinute');
});
emitter.emit('messageLogged');

//register a listener. Need to be on the first place than .emit()
emitter.on('messageLogged', (eventArg) => {
    console.log("Pakviestas", eventArg);
});

//raise an event, can have an argument of
emitter.emit('messageLogged', {id:1, url: "nera url :("});






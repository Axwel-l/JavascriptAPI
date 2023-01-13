const app = require('../src/app')
const debug = require('debug')('nodestr:server');
const http = require('http');
const { on } = require('events');

const port = normalizePort(process.env.PORT||'3000')
app.set('port',port);

const server = http.createServer(app);


server.listen(port);
//server.on(quando ele inicia,só para se o eu do futuro for idiota e esquecer)
server.on('error',onError)
server.on('listening',onListening)
console.log('API rodando na porta '+ port);

//função para denominar um porta
function normalizePort(val){
    const port = parseInt(val,10);
    if (isNaN(port)){
        return val;
    }else if (port >=0){
        return port;
    }else{
        return false;
    }
}
//verificador de erro
function onError(error){
    if (error.syscall !== 'listen'){
        throw error;
    }

    const bind = typeof port === 'string'?
        'Pipe' +port: 'Port' +port;

    switch(error.code){
        case 'EACCES':
            console.error(bind + 'permisão baixa')
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' já esta em uso')
            process.exit(1)
            break;
        default:
            throw error;
    }
}
//debug
function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string'
        ?'pipe' +addr
        :'port' +addr.port;
    debug('Listening on '+bind)
}
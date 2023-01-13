'use strict'
/*
const http = require('http');
const debug = require('debug')('nodestr:server');
const express = require('express');
const { on } = require('events');

const app = express();
//const port = 3000;
const port = normalizePort(process.env.PORT||'3000')
app.set('port',port);

const server = http.createServer(app);
const router =express.Router();

const route = router.get('/',(req, res, next) =>{
    res.status(200).send({
        title:"Node Store API",
        version: "0.0.1"
    });
});
app.use('/',route);

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
            console.error(bind + 'Endereço ja esta em uso')
            process.exit(1)
            break;
        default:
            throw error;
    }
}

function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string'
        ?'pipe' +addr
        :'port' +addr.port;
    debug('Listening on '+bind)
}*/
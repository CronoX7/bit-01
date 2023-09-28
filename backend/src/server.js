const express = require('express');
const { request } = require('http');
const morgan = require('morgan');

const server =express();
const port = 4000;

server.set ("port", port);

server.use(morgan('dev'));

server.get('/', (request, response)=>{
    response.send('works!');
});

module.exports= server;
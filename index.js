const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server, Socket } = require("socket.io");
let socket2
const io = new Server(server,{
    cors: {
    origin: "http://127.0.0.1:5500",
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection',(socket)=>{
    socket2 = socket
    console.log('Usuario conectado..');
    socket.emit('message','hola mundo');
    socket.on('disconnect',()=>{
        console.log('Usuario desconectado');
    })
    socket.on('chatmsg',msg=>{
      socket.emit('message',msg);
      console.log('Mensaje del usuario:'+msg);
      if(msg=='prender')
      port.write('prender\n');
      if(msg=='apagar')
      port.write('apagar\n');
       
    })
})

const { SerialPort,ReadlineParser } = require('serialport')
const port = new SerialPort({
  path: 'COM3',
  baudRate: 9600,
  //autoOpen: false,
})

let cont = 1;
let array = new Array();

const parser = new ReadlineParser({delimiter: '\r\n'});
port.pipe(parser);
parser.on('data', function (temp){
    array.push({"valor": temp});
    if(cont == 10){
      let print = JSON.stringify({array});
      console.log(print);
      array = [];
      cont=1
    }
    cont++;
})

server.listen(3000, () => {
  console.log('listening on *:3000');
});

const datasSet = [1,4,5,1,2,12,15,12,11]

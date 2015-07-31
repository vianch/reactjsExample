import express from 'express';
import http from 'http';
import engine from 'socket.io';

const port = 3000;
const app = express();

app.use('/',express.static(__dirname + '../../app'));

app.listen(port, () => {
   console.log(`El servkdlr esta escuchando en el puerto ${port}`);
});

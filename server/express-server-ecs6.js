import express from 'express';
import http from 'http';
import engine from 'socket.io';
import path from 'path';
import dbapi from './dbapi';

const port = 3000;
const app = express();


app.use('/',express.static(__dirname + '../../app'));

app.get('/', (req, res) => {
	res.sendFile(path.resolve('app/ejemplo4.html'));
});

app.get('/pokemons', (req, res) => {
	dbapi.pokemons.find((pokemons) =>{
		res.json(pokemons);
	});
});

let server = http.createServer(app).listen(port, () => {
  console.log(`El servidor está escuchando en el puerto ${port}`);
});


const io = engine.listen(server);

io.on('connection', (socket) => {
	console.log("io connecte");
  socket.on('message', (msg) => {
  	console.log("io meesage connection");
    io.emit('message', msg);
  })
})

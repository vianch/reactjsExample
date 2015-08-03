import React from 'react';
import Uid from 'uid';
import PokeTable from './poketable';
import PokeChat from './pokechat';
import $ from 'jquery';
import io from 'socket.io-client';

class PokeApp extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			messages: [],
			pokemons: []
		};
		this.onGrowl = this.onGrowl.bind(this);
		this.user = Uid(10);
	} 

	componentWillMount() {
		$.get('/pokemons', (pokemons) => {
			this.setState({
				pokemons: pokemons
			});
		});

		this.socket = io('http://localhost:3000');
		this.socket.on('message', (message) => {
			console.log("message from server"+message);
			if(message.user !== this.user) {
				this.newMessage(message);
			}
		});
	}

	onGrowl(name) {
		let pokeName = `${name}: ${name}!`;
		let pokeMessage = {id: Uid(10), text: pokeName, user: this.user};
		this.newMessage(pokeMessage);
		console.log("emmiting message");
		  this.socket.emit('message', pokeMessage);
		 
	}

	newMessage(message) {
		this.state.messages.push(message);
		let messages = this.state.messages;
		this.setState({ messages: messages });
	}

	render() {
		if(this.state.pokemons.length) {
			return <div className = "pokeapp">
				<PokeTable pokemons={this.state.pokemons} onGrowl = { this.onGrowl }/>
				<PokeChat messages = {this.state.messages}/>
			</div>
		} else {
			return <p> Cargando... </p>		
		}
	}
}
 
export default PokeApp;
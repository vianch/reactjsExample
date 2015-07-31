import React from 'react';
import Uid from 'uid';
import PokeTable from './poketable';
import PokeChat from './pokechat';

class PokeApp extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			messages: []
		};
		this.onGrowl = this.onGrowl.bind(this);
	} 

	onGrowl(name) {
		let pokeName = `${name}: ${name}!`;
		let pokeMessage = "";
		
		this.state.messages.push({id: Uid(10), text: pokeName});
		pokeMessage = this.state.messages;

		this.setState({ messages: pokeMessage });
	}

	render() {
		let pokemons = [ 
			{number: 1, name: 'Bulbasaur'},
			{number: 2, name: 'Ivysaur'},
			{number: 3, name: 'Venusaur'}
		];

		return <div className = "pokeapp">
			<PokeTable pokemons={pokemons} onGrowl = { this.onGrowl }/>
			<PokeChat messages = {this.state.messages}/>
		</div>
	}
}
 
export default PokeApp;
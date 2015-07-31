import React from 'react';
import PokeMessage from './pokemessage'

export default class PokeChat extends React.Component {
	render() {
		return <ul className = "pokechat"> 
			{
				this.props.messages.map((message) => {
					return <PokeMessage key = {message.id}  message = {message} />
				})
			}
		</ul>
	}
}

PokeChat.defaultProps = { messages: [] };
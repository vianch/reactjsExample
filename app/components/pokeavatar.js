import React from 'react';

class PokeAvatar extends React.Component {
	render() {
		var url =  `http://localhost:3000/images/${this.props.number}.png`;
		return <img src={url} className ="avatar"/>
	}
}

export default PokeAvatar;
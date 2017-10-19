import React, { Component } from 'react';

class BeerItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			item : props.beerItem
		}
	}

	delete() {
		console.log('hit BeerItem');
		console.log(this);
		this.props.remove(this.state.item.id);
	}

  render() {
    return (
			<li>
				{ this.state.item.name }
				<button onClick={ this.delete.bind(this) }>Delete</button>
			</li>
		)
  }
}

export default BeerItem;

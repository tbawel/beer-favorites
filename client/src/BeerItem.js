import React, { Component } from 'react';

class BeerItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			item : props.beerItem
		}
	}

  render() {
    return <li>{ this.state.item.name }</li>
  }
}

export default BeerItem;

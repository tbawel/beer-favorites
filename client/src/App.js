import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      beers: []
    }
  }

  componentWillMount() {
    axios.get('/api/beers')
      .then((response) => {
        this.setState({
          beers: response.data
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteBeer(id) {
    // let remainder = this.state.beers.filter((beer) => {
    //   if(beer.id !== id) {
    //     return beer;
    //   }
    // });

    console.log(id);

    // this.setState({
    //   beers: remainder
    // })

    // axios.delete('/api/beers/' + id)
    // .then((response) => {
    // 	this.setState({
    // 		beers: remainder
    // 	})
    // })
    // .catch((error) => {
    // 	console.log(error);
    // });
  }

  render() {

    let beerItems = this.state.beers.map((beer) => {
      return <li key={beer.id}>{beer.name}</li>
    });

    return (
      <ul>
        {beerItems}
      </ul>
    );
  }
}

export default App;

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

  render() {
    let beerItems = this.state.beers.map( (beer) => {
      return <li key={ beer.id }>{ beer.name }</li>
    });

    return (
      <div>
        <header>
          <h1>Georgie's Favorite Beers</h1>
        </header>
        <ul> { beerItems } </ul>
      </div>
    );
  }
}

export default App;

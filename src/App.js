import React, { Component } from "react";
import "./App.css";
import CreateBeer from "./CreateBeer";
import BeerList from "./BeerList";
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [
        // {
        //   id: 0,
        //   name: "Choco Stout",
        //   edit: false
        // }
      ],
      newBeerCounter: 3,
      newBeerName: ""
    };
  }

componentDidMount() {
  axios
  .get('https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/beers',{
    params:{
      key: "d1202111af60f9eb7cd4ae68c32eb604",
      styleId: 1,
      // abv: 6,
      // isOrganic: 'Y',
    }
  })
  .then((response) => {
    // handle success
    console.log(response.data.data);
    let beerAPI = response.data.data.map((beer) => {
      return {
        id: beer.id,
        name: beer.name,
      };
    })


  //   let idCounter = 10
  //   let repeatCardListArr = characters.map((card) => {
  //     let newCard = {
  //       ...card,
  //       id: idCounter++
  //     }
  //     return newCard
  //   })
  //   var fullCardList = characters.slice().concat(repeatCardListArr)

    this.setState({
      beers: beerAPI
    })
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  
  .finally(function () {
    // always executed
  });

  axios.put('https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/beer',{
    params:{
      key: "d1202111af60f9eb7cd4ae68c32eb604",
      // name: "TopHat Cat"
    }
  })
  .then((response) => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  })
}

  setEdit = (e, beerId) => {
    let newBeers = this.state.beers.map(beer => {
      if (beer.id === beerId) {
        return { ...beer, edit: true };
      } else {
        return { ...beer, edit: false };
      }
    });
    this.setState({
      beers: newBeers
    });
  };

  handleDelete = (beerId, e) => {
    e.preventDefault();
    const updatedBeerlist = this.state.beers.filter(beer => beer.id !== beerId);
    this.setState({
      beers: updatedBeerlist
    });
  };

  handleUpdate(beerId, updateBeerName, e) {
    e.preventDefault();
    const updatedBeerlist = this.state.beers.map(beer => {
      if (beer.id === beerId) {
        return { ...beer, name: updateBeerName, edit: false };
      } else {
        return { ...beer, edit: false };
      }
    });
    this.setState({
      beers: updatedBeerlist
    });
  }

  handleSubmit(e, newBeerName) {
    e.preventDefault();
    this.setState({
      beers: [
        ...this.state.beers,
        {
          id: this.state.newBeerCounter,
          name: newBeerName
        }
      ],
      newBeerCounter: this.state.newBeerCounter + 1
    });
  }

  render() {
    return (
      <div>
        <h1>Harambe's Beer Favorites</h1>
        <BeerList
          beers={this.state.beers}
          setEdit={this.setEdit.bind(this)}
          handleDelete={this.handleDelete.bind(this)}
          handleUpdate={this.handleUpdate.bind(this)}
        />
        <CreateBeer handleSubmit={this.handleSubmit.bind(this)} />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import BeerList from "./BeerList";
import CreateBeer from "./CreateBeer";
import { Link, Route, Switch, withRouter } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [
        {
          id: 0,
          name: "Choco Stout",
          edit: false
        },
        {
          id: 1,
          name: "Blonde White",
          edit: false
        },
        {
          id: 2,
          name: "Thunder Monkey",
          edit: false
        }
      ],
      newBeerCounter: 3,
      newBeerName: ""
    };
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

  handleUpdate(e, beerId) {
    const updatedBeerlist = this.state.beers.map(beer => {
      if (beer.id === beerId) {
        return { ...beer, name: e.target.value };
      } else {
        return { ...beer };
      }
    });
    this.setState({
      beers: updatedBeerlist
    });
  }

  handleSubmit(e, newBeerName) {
    debugger;
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
    //this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <br />
        <Link to="/create-beer">Create Beer</Link>
        <Switch>
          <Route
            exact
            path="/"
            render={props => <BeerList {...props} beers={this.state.beers} />}
          />
          <Route
            exact
            path="/create-beer"
            render={props => (
              <CreateBeer {...props} handleSubmit={e => this.handleSubmit(e)} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);

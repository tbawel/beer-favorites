import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button
} from "reactstrap";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      beers: [
        {
          id: 0,
          name: "Choco Stout",
          alcoholContent: 2.4,
          brewery: "Bridger Brewing"
        },
        {
          id: 1,
          name: "Blonde White",
          alcoholContent: 3.1,
          brewery: "406 Brewing"
        },
        {
          id: 2,
          name: "Thunder Monkey",
          alcoholContent: 4.2,
          brewery: "MAP Brewing"
        }
      ]
    };

    this.deleteBeer = this.deleteBeer.bind(this);
  }

  deleteBeer(beerId) {
    let newBeers = this.state.beers.filter(beer => beer.id !== beerId);

    this.setState({
      beers: newBeers
    });
  }

  render() {
    let beerFavs = this.state.beers.map(beer => {
      return (
        <ListGroupItem key={beer.id}>
          {beer.name}
          <Button
            color="danger float-right"
            onClick={this.deleteBeer.bind(this, beer.id)}
          >
            Delete
          </Button>
        </ListGroupItem>
      );
    });

    return (
      <div className="App">
        <Container>
          <Row>
            <Col>
              <h1>Beer Favorites</h1>
              <ListGroup>{beerFavs}</ListGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;

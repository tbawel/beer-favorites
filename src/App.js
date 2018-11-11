import React, { Component } from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      beers: [
        {
          name: "Choco Stout",
          alcoholContent: 2.4,
          brewery: "Bridger Brewing"
        },
        {
          name: "Blonde White",
          alcoholContent: 3.1,
          brewery: "406 Brewing"
        },
        {
          name: "Thunder Monkey",
          alcoholContent: 4.2,
          brewery: "MAP Brewing"
        }
      ]
    };
  }

  render() {
    let beerFavs = this.state.beers.map(beer => {
      return <ListGroupItem>{beer.name}</ListGroupItem>;
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

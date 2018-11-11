import React, { Component } from "react";
import { Row, Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

class EditBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editBeerName: "",
      editBeerAlc: 0,
      editBeerBrewery: ""
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate() {}

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleEdit(event) {
    event.preventDefault();
    let updatedBeer = {
      id: this.props.beer.id,
      name: this.state.editBeerName,
      alcoholContent: this.state.editBeerAlc,
      brewery: this.state.editBeerBrewery
    };

    debugger;

    let newBeers = this.state.beers.map(beer => {
      if (beer.id === this.props.beer.id) {
        return updatedBeer;
      } else {
        return beer;
      }
    });

    this.setState({
      beers: newBeers
    });
  }

  render() {
    return (
      <Form onSubmit={this.handleEdit}>
        <caption>Edit Beer</caption>
        <FormGroup>
          <Row>
            <Col sm="3">
              <Label for="editBeerName">Name:</Label>
            </Col>
            <Col sm="9">
              <Input
                type="text"
                name="editBeerName"
                id="editBeerName"
                value={this.props.beer.name}
                onChange={this.handleChange}
              />
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col sm="3">
              <Label for="editBeerAlc">Alcohol Content:</Label>
            </Col>
            <Col sm="9">
              <Input
                type="text"
                name="editBeerAlc"
                id="editBeerAlc"
                value={this.props.beer.alcoholContent}
                onChange={this.handleChange}
              />
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col sm="3">
              <Label for="editBeerBrewery">Brewery:</Label>
            </Col>
            <Col sm="9">
              <Input
                type="text"
                name="editBeerBrewery"
                id="editBeerBrewery"
                value={this.props.beer.brewery}
                onChange={this.handleChange}
              />
            </Col>
          </Row>
        </FormGroup>
        <Button type="submit" className="float-right">
          Update Beer
        </Button>
      </Form>
    );
  }
}

export default EditBeer;

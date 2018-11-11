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

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleEdit(event) {
    event.preventDefault();
    let updatedBeer = {
      id: this.props.beer.id,
      name: this.state.editBeerName.length
        ? this.state.editBeerName
        : this.props.beer.name,
      alcoholContent: this.state.editBeerAlc.length
        ? this.state.editBeerAlc
        : this.props.beer.alcoholContent,
      brewery: this.state.editBeerBrewery.length
        ? this.state.editBeerBrewery
        : this.props.beer.brewery
    };

    this.props.handleEdit(updatedBeer);
  }

  render() {
    return (
      <Form onSubmit={this.handleEdit}>
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
                defaultValue={this.props.beer.name}
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
                defaultValue={this.props.beer.alcoholContent}
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
                defaultValue={this.props.beer.brewery}
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

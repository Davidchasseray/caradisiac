import React, { Component } from 'react';
import {Col, Collapse, Button, Card, CardSubtitle, CardTitle } from 'reactstrap';

class Car extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  
  render() {
    return (
      <div>
        <Button onClick={this.toggle}  style={{ marginBottom: '1rem' }}>{this.props.car.brand}</Button>
        <Collapse isOpen={this.state.collapse} style={{ marginBottom: '1rem' }}>
          <Card style={{ marginBottom: '1rem' }}>
          <CardTitle>{this.props.car.name}</CardTitle>
          <CardSubtitle>{this.props.car.volume} L</CardSubtitle>
          <Col style={{ marginBottom: '5rem' }}>
          <img src={this.props.car.image} alt="Card" /></Col>
          </Card>
        </Collapse >
      </div>
    );
  }
}

export default Car;

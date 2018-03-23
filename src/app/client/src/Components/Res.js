import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button } from 'reactstrap';
import CarsList from './CarsList';



class Res extends Component {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.state = {
            searchRes: null,
            pageCount: 1,
            request: ''
        };
    }

    
    handleSearch() {
        axios.get('/suv')
            .then((res) => {
                this.setState({searchRes: res.data});
            })
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <Container>
                 <Button color="success" onClick={this.handleSearch}  style={{ marginBottom: '3rem' }}>Search</Button>
                <Row>
                    <Col>
                        <CarsList searchRes={this.state.searchRes}  />
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default Res;
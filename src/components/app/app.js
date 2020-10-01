import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import './app.css';


export default class App extends Component {

    constructor(props) {
        super(props);
        this.toggleRandomChar = this.toggleRandomChar.bind(this);
    }

    state = {
        isClosed: false
    }

    toggleRandomChar() {
        this.setState({isClosed: !this.state.isClosed});
    }

    render() {
        const {isClosed} = this.state;
        const randomChar = isClosed ? null : <RandomChar />; 
        return (

            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {randomChar}
                            <div onClick={this.toggleRandomChar} className="btn-toggle">Toggle random Character</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

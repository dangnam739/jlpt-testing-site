import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faMailBulk } from '@fortawesome/free-solid-svg-icons';

class Footer extends Component {
    render() {
        return (
            <div className="footer" >
                <Container >
                    <Row>
                        <Col md = {8}>
                            <img className = "footer__img" height = "10px" src = "/assets/dethijlpt-logo-white.png" alt = "" />
                            <p>
                                <FontAwesomeIcon className="footer__icon" icon={faAddressCard} />
                                <span> HEDSPI, D9 Hanoi University of Science and Technology </span> <br/>
                                <FontAwesomeIcon className="footer__icon" icon={faMailBulk} />
                                <span> jlpttesting @info.com </span>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
    );
}
}

export default Footer;

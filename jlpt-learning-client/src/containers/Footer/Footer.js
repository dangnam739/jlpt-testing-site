import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faMailBulk } from '@fortawesome/free-solid-svg-icons';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <Container>
                    <Row>
                        <Col md={8}>
                            <img className="footer__img" height="50px" src="/assets/dethijlpt-logo-white.png" alt=""/>
                            <p>
                                <FontAwesomeIcon className="footer__icon" icon={faAddressCard} />
                                <span>HaNoi工科大学 - 1 Dai Co Viet, Ha Ba Trung, Ha Noi</span> <br/>
                                <FontAwesomeIcon className="footer__icon" icon={faMailBulk} />
                                <span>dethijlpt@email.com</span>
                            </p>
                        </Col>
                        {/* <Col md={4}>
                            <img className="footer__img" height="50px" src="/assets/app_store_icon.png" alt=""/>
                            <img className="footer__img" height="50px" src="/assets/google_play_store_icon.png" alt=""/>
                        </Col> */}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Footer;
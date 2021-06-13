import React, { Component } from 'react';
import './CardUserTop.scss';

class CardUserTop extends Component {
    render() {
        return (
            <div className="d-flex card-user">
                <img src="https://img.icons8.com/carbon-copy/2x/user.png" height={50} alt=""/>
                <div>
                    <h6> {this.props.user.name} </h6>
                    <p>Result: {this.props.user.point} </p>
                </div>
            </div>
        );
    }
}

export default CardUserTop;
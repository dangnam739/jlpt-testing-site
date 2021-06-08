import React, { Component } from 'react';
import './CardTest.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

class CardTest extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const { infor } = this.props;
        return (
            <div className="card">
                {console.log(infor)}
                <div className="card__level">100</div>
                <h4 className="card__title">{infor.heading}</h4>
                <div className="card__id">{infor.content}</div>
                <a href= {infor.link}><FontAwesomeIcon icon={faAngleDoubleRight} />Register now</a>

            </div>
        );
    }
}

export default CardTest;
import React, { Component } from 'react';
import './Home.scss';
import Select from 'react-select';
import { Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import CardTest from '../../components/CardTest/CardTest';
import Footer from '../Footer/Footer'
import UserProvider from '../../components/UserProvider';
import UserContext from '../../contexts/UserContext';

const options = [
    { value: '1', label: 'N1' },
    { value: '2', label: 'N2' },
    { value: '3', label: 'N3' },
    { value: '4', label: 'N4' },
    { value: '5', label: 'N5' }
];

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null,
        };
    }

    handleChange = selectedOption => {
        this.setState({ selectedOption });
    };

    render() {
        const { selectedOption } = this.state;

        return ( <
            div className = "homepage" >
            <
            div className = "homepage__header" >
            <
            p className = "homepage__header__title" >
            Welcome JLPT Testing <
            /p > <
            div className = "container" >
            <
            Row >
            <
            Col md = { 3 } >
            <
            CardTest id = "1"
            infor = {
                {
                    heading: "Quick Test",
                    content: "Test any time, Multiple tests and Counting the exam time",
                    link: '/register'
                }
            }
            /> < /
            Col > <
            Col md = { 3 } >
            <
            CardTest id = "2"
            infor = {
                {
                    heading: "Visual results",
                    content: "Summarize the results test and reflect on the progress",
                    link: '/register'
                }
            }
            /> < /
            Col > <
            /Row> < /
            div > <
            /div> <
            Footer / >
            <
            /div>
        );
    }
}

export default Home;
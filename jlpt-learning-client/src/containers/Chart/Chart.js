import React, { Component } from 'react';
import './Chart.scss';
import { Row, Col } from 'react-bootstrap';
import CardUserTop from '../../components/CardUserTop/CardUserTop';
import axios from 'axios';


class Chart extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[],
            n5:[],
            n4:[],
            n3:[],
            n2:[],
            n1:[],
            user:JSON.parse(sessionStorage.getItem("user")),
        };
    }
    componentDidMount(){
        let user = sessionStorage.getItem("user")
        user =JSON.parse(user)
        axios.post(`${process.env.PORT}/point/list`,{level:'n5'})
        .then(res=>{
            this.setState({n5:res.data.data})
        })
        axios.post(`${process.env.PORT}/point/list`,{level:'n4'})
        .then(res=>{
            this.setState({n4:res.data.data})
        })
        axios.post(`${process.env.PORT}/point/list`,{level:'n3'})
        .then(res=>{
            this.setState({n3:res.data.data})
        })
        axios.post(`${process.env.PORT}/point/list`,{level:'n2'})
        .then(res=>{
            this.setState({n2:res.data.data})
        })
        axios.post(`${process.env.PORT}/point/list`,{level:'n1'})
        .then(res=>{
            this.setState({n1:res.data.data})
        })

    }
    show = (data,indexN5) =>{
        let result = null
        result = data.map((user,index) => { 
            if (index <3){
                return <Col> {index+1} : <CardUserTop user={user} /> </Col>
            }
            if (index ===3){
                return <Col>  </Col>
            }
        })
        if ( indexN5 === -1 ){
            result = result.concat(   <Col> chua thi </Col>)

        } else {
            result = result.concat(   <Col> {indexN5+1} : <CardUserTop user={data[indexN5]} /> </Col>)

        }
        return result
    }
    render() {
        console.log(this.state);
        let {n1,n2,n3,n4,n5 ,user} =this.state
        let userN5,userN4,userN3,userN2,userN1,indexN5,indexN4,indexN3,indexN2,indexN1
        if (n5.length!==0){
            indexN5 = n5.findIndex(value=>value.id ===user.id)
        }
        return (
            <div className="chart">
                <Row className="chart__row">
                    <Col className="chart__n1__title"><h4>Level N1</h4></Col>
                    { n1.length!==0 ?
                        n1.map(user => {
                            return <Col> <CardUserTop user={user} /> </Col>
                        })
                        : <Col><p> chưa ai thi </p></Col>
                    }
                </Row>

                <Row className="chart__row">
                    <Col className="chart__n2__title"><h4>Level N2</h4></Col>
                    { n2.length!==0 ?
                        n2.map(user => {
                            return <Col> <CardUserTop user={user} /> </Col>
                        })
                        : <Col><p> chưa ai thi </p></Col>
                    }
                </Row>

                <Row className="chart__row">
                    <Col className="chart__n3__title"><h4>Level N3</h4></Col>
                    { n3.length!==0 ?
                        n3.map(user => {
                            return <Col> <CardUserTop user={user} /> </Col>
                        })
                        : <Col><p> chưa ai thi </p></Col>
                    }
                </Row>

                <Row className="chart__row">
                    <Col className="chart__n4__title"><h4>Level N4</h4></Col>
                    { n4.length!==0 ?
                        n4.map(user => {
                            return <Col> <CardUserTop user={user} /> </Col>
                        })
                        : <Col><p> chưa ai thi </p></Col>
                    }
                </Row>

                <Row className="chart__row">
                    <Col className="chart__n5__title"><h4>Level N5</h4></Col>
                    { n5.length!==0 ?
                        this.show(n5,indexN5)
                              
                        : <Col><p> chưa ai thi </p></Col>
                    }
                </Row>
            </div>
        );
    }
}

export default Chart;
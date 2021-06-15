import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom'

export default class ListTest extends Component{
  constructor(props){
    super(props);
    
    this.state = {
      isLoading: true,
      tests: [
       
      ],
      error: null
    }
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    // thay đổi link này thành link mà server trả về nháaaa
    axios.get(`https://bac39dd2d9a0.ngrok.io/practice/getall`)
      .then(
        (response) => 
        {
          console.log(response);
          this.setState({
            isLoading: false,
            tests: response.data
          })
        }
      )
      .catch(error => this.setState(
        {
          error,
          isLoading: false
        }
      ))
  }

  render(){
    const { isLoading, tests, error } = this.state;
    return(
      <div>
        <br/><br/>
        <h3>List Test</h3><br/>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Category</th>
              <th>Label</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
          {tests.map( (test) =>
            <tr>
              <td>{test.id}</td>
              <td>vocabulary</td>
              <td>{test.level}</td>
              <td><Link to={`/admin/test/edit/${test.level}/vocabulary/${test.id}`}><img alt='Edit' title='Edit' src='/assets/edit.png' /></Link></td>
            </tr>
          )}
          </tbody>
        </Table>
      </div>
    )
  }
}
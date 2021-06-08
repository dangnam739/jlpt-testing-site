import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

export default class ListUser extends Component{
  constructor(props){
    super(props);
    
    this.state = {
      isLoading: true,
      users: [

      ],
      error: null
    }
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    // thay đổi link này thành link mà server trả về nháaaa
    axios.get(`http://localhost:8080/users/getall`)
      .then(
        (response) => 
        {
          this.setState({
            isLoading: false,
            users: response.data
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
    const { isLoading, users, error } = this.state;
    return(
      <div>
        <h3>ユーザのリスト</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>名前</th>
              <th>メール</th>
            </tr>
          </thead>
          <tbody>
          {users.map( (user) =>
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          )}
          </tbody>
        </Table>
      </div>
    )
  }
}
import React, { Component } from 'react';
import { Table, Button, Modal } from 'react-bootstrap';
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

    this.deleteUser = this.deleteUser.bind(this);
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    // thay đổi link này thành link mà server trả về nháaaa
    axios.get(`https://bac39dd2d9a0.ngrok.io/users/getall`)
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

  deleteUser(id){
    axios.post(`https://bac39dd2d9a0.ngrok.io/users/delete/${id}`)
    .then((result) => {
      this.fetchData();
    }).catch((err) => {
      
    });
    alert('Deleted user successfully !');
  }

  render(){
    console.log(this.state.users);
    const { isLoading, users, error } = this.state;
    return(
      <div>
        <br/><br/>
        <h3>List Users</h3><br/>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          {users.map( (user) =>
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Button
                  title="Delete"
                  onClick={()=>this.deleteUser(user.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          )}
          </tbody>
        </Table>
      </div>
    )
  }
}
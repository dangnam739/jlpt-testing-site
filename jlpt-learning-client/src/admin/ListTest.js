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
        {
          id: 1,
          name: 'Test Kanji N5',
          level: 'N5',
          category: 'Kanji'
        },
        {
          id: 2,
          name: 'Test Goi N5',
          level: 'N5',
          category: 'Goi'
        },
      ],
      error: null
    }
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    // thay đổi link này thành link mà server trả về nháaaa
    // axios.get(`https://jsonplaceholder.typicode.com/users`)
    //   .then(
    //     (response) => 
    //     {
    //       this.setState({
    //         isLoading: false,
    //         users: response.data
    //       })
    //     }
    //   )
    //   .catch(error => this.setState(
    //     {
    //       error,
    //       isLoading: false
    //     }
    //   ))
  }

  render(){
    const { isLoading, tests, error } = this.state;
    return(
      <div>
        <h3>テストのリスト</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>テスト名前</th>
              <th>カテゴリ</th>
              <th>レベル</th>
              <th>編集</th>
            </tr>
          </thead>
          <tbody>
          {tests.map( (test) =>
            <tr>
              <td>{test.id}</td>
              <td>{test.name}</td>
              <td>{test.category}</td>
              <td>{test.level}</td>
              <td><Link to={`/admin/test/edit/${test.id}`}><img alt='Edit' title='Edit' src='/assets/edit.png' /></Link></td>
            </tr>
          )}
          </tbody>
        </Table>
      </div>
    )
  }
}
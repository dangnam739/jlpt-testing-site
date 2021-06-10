import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './edit.css';
import axios from 'axios';

import Question from './Question';
import AddTest from './AddTest';

class EditTest extends Component{
  constructor(props){
    super(props);
    
    this.state = {
      isLoading: true,
      questions: [],
      error: null
    }

    this.onHandleAddQuestion = this.onHandleAddQuestion.bind(this);
  }

  onHandleAddQuestion(ques){
    const newQues = {
      ...ques,
      idRLG: 2
    }

    axios.post(`http://localhost:8080/practice/add`, newQues)
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    // thay đổi link này thành link mà server trả về nháaaa
    let path1= window.location.pathname
    console.log(path1);
    let listpath=path1.split("/")
    axios.get(`http://localhost:8080/practice/${listpath[listpath.length-3]}/${listpath[listpath.length-2]}/${listpath[listpath.length-1]}`)
      .then(
        (response) => 
        {
          console.log(response)
          this.setState({
            isLoading: false,
            questions:response.data
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
    const { isLoading, questions, error } = this.state;
    return(
      <div>
        {console.log(questions)}
        <h3>テストの編集</h3>
        <AddTest onHandleAddQuestion={this.onHandleAddQuestion}/>
        <div className='test_edit'>
          {questions.map((question,index) => 
            <Question question={question} index={index}/>
          )}
        </div>
      </div>
    )
  }
}

export default EditTest;
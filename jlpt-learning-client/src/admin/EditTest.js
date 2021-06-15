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

  onHandleAddQuestion= (ques)=>{
    const newQues = {
      ...ques,
      idRLG: this.state.idRLG1,type:'vocabulary'
    }
    console.log("object");
    axios.post(`${process.env.REACT_APP_PORT}/practice/add`, newQues)
    .then(res=>{
      console.log(res.data);
      if (res.data.status==="ok"){
        console.log("object");
         this.fetchData();
      }
      alert('Added question successfully !');
    })
    }
    onHandleDelete=(question)=>{
      axios.post(`${process.env.REACT_APP_PORT}/practice/delete`,{id:question.id,type:'vocabulary'})
      .then(res=>{
        this.fetchData();
        alert('Deleted question successfully !');
      })
    }
  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    // thay đổi link này thành link mà server trả về nháaaa
    let path1= window.location.pathname
    let listpath=path1.split("/")
    axios.get(`${process.env.REACT_APP_PORT}/practice/${listpath[listpath.length-3]}/${listpath[listpath.length-2]}/${listpath[listpath.length-1]}`)
      .then(
        (response) => 
        {
          console.log(response)
          this.setState({
            isLoading: false,
            questions:response.data,
            idRLG1:listpath[listpath.length-1]
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
      <div><br/>
        <h3>Edit Test</h3>
        <AddTest onHandleAddQuestion={this.onHandleAddQuestion}/>
        <div className='test_edit'>
          {questions.map((question,index) => 
            <Question question={question} index={index} onHandleDelete={this.onHandleDelete}/>
          )}
        </div>
      </div>
    )
  }
}

export default EditTest;
import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './edit.css';
import axios from 'axios';

class Question extends Component{
  constructor(props){
    super(props);
    this.state = {
      question: this.props.question,
      index: this.props.index
    }

    this.onHandleEdit = this.onHandleEdit.bind(this)
  }

  onHandleEdit(question){
    //them link vao cho tao voi
    axios.post(`${process.env.REACT_APP_PORT}/practice/update`,{id:question.id, question:question.question, answer1:question.answer1, answer2:question.answer2, answer3:question.answer3, answer4:question.answer4, result:question.result,type:'vocabulary'})
    .then(res=>{
      console.log(res.data);
      alert('Saved change successfully !');
    })
    
  }
  onHandleDelete(question){
    axios.post(`${process.env.REACT_APP_PORT}/practice/delete`,{id:question.id,type:'vocabulary'})
    .then(res=>{
      console.log(res.data);
      
    })
    
  }

  render(){
    const { question, index } = this.state;
    return(
      <div>
        <div className='test_edit'>
            <Form className="form">
              <Form.Group className="mb-3 label_input" controlId="formBasicQuestion">
                <Form.Label>Question {index + 1}:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter question"
                  value={question.question}
                  onChange={(e)=>this.setState({
                    ...index,
                    question: {
                      ...question,
                      question: e.target.value
                    }
                  })}
                />
              </Form.Group>

              <Form.Group className="mb-3 label_input" controlId="formBasicAnswer1">
                <Form.Label>Answer 1</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter answer 1"
                  value={question.answer1}
                  onChange={(e)=>this.setState({
                    ...index,
                    question: {
                      ...question,
                      answer1: e.target.value
                    }
                  })}
                />
              </Form.Group>

              <Form.Group className="mb-3 label_input" controlId="formBasicAnswer2">
                <Form.Label>Answer 2</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter answer 2"
                  value={question.answer2}
                  onChange={(e)=>this.setState({
                    ...index,
                    question: {
                      ...question,
                      answer2: e.target.value
                    }
                  })}
                />
              </Form.Group>

              <Form.Group className="mb-3 label_input" controlId="formBasicAnswer3">
                <Form.Label>Answer 3</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter answer 3"
                  value={question.answer3}
                  onChange={(e)=>this.setState({
                    ...index,
                    question: {
                      ...question,
                      answer3: e.target.value
                    }
                  })}
                />
              </Form.Group>

              <Form.Group className="mb-3 label_input" controlId="formBasicAnswer4">
                <Form.Label>Answer 4</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter answer 4"
                  value={question.answer4}
                  onChange={(e)=>this.setState({
                    ...index,
                    question: {
                      ...question,
                      answer4: e.target.value
                    }
                  })}
                />
              </Form.Group>

              <Form.Group className="mb-3 label_input">
                <label>True answer</label>
                <select 
                  aria-label="Default select example" 
                  value={question.result}
                  onChange={(e)=>this.setState({
                    ...index,
                    question: {
                      ...question,
                      result: e.target.value
                    }
                  })}
                >
                  <option value="1">Answer 1</option>
                  <option value="2">Answer 2</option>
                  <option value="3">Answer 3</option>
                  <option value="4">Answer 4</option>
                </select>
              </Form.Group>
              <Button 
                variant="primary"
                onClick={()=>this.onHandleEdit(question)}
              >
                Save change
              </Button>
              <Button
                variant="danger"
                onClick={()=>this.props.onHandleDelete(question)}
              >
                Delete
              </Button>
            </Form>
        </div>
      </div>
    )
  }
}

export default Question;
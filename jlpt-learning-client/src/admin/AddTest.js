import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';


export default class AddTest extends Component{
  constructor(props){
    super(props);

    this.state = {
      show: false,
      newQuestion: {
        question: '',
        answer1: '',
        answer2: '',
        answer3: '',
        answer4: '',
      }
    }

    this.handleClose = this.handleClose.bind(this)
    this.handleShow = this.handleShow.bind(this)
    this.onClickSave = this.onClickSave.bind(this)
  }

  onClickSave(){
    //console.log(this.state.newQuestion)
    let newQuestion=this.state.newQuestion
    if (!newQuestion.question || !newQuestion.answer1 || !newQuestion.answer2 || !newQuestion.answer3|| !newQuestion.answer4 || !newQuestion.result){
      window.alert("chưa đủ dữ liệu")
    } else {
      this.props.onHandleAddQuestion(this.state.newQuestion)
      this.handleClose();
    }
  }  

  handleClose(){
    this.setState({
      show: false,
      newQuestion: {
        ...this.state.newQuestion
      }
    })
  }

  handleShow(){
    this.setState({
      show: true,
      newQuestion: {
        ...this.state.newQuestion
      }
    })
  }
  
  render(){
    const { show, newQuestion } = this.state;
    return(
      <div>
        <Button variant="primary" onClick={this.handleShow}>
          Add new question
        </Button>

        <Modal show={show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add new question</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form className="form">
              <Form.Group className="mb-3 label_input" controlId="formBasicQuestion">
                <Form.Label>Question:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter question"
                  onChange={(e)=> this.setState({
                    show: show,
                    newQuestion: {
                      ...newQuestion,
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
                  onChange={(e)=> this.setState({
                    show: show,
                    newQuestion: {
                      ...newQuestion,
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
                  onChange={(e)=> this.setState({
                    show: show,
                    newQuestion: {
                      ...newQuestion,
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
                  onChange={(e)=> this.setState({
                    show: show,
                    newQuestion: {
                      ...newQuestion,
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
                  onChange={(e)=> this.setState({
                    show: show,
                    newQuestion: {
                      ...newQuestion,
                      answer4: e.target.value
                    }
                  })}
                />
              </Form.Group>

              <Form.Group className="mb-3 label_input">
                <label>True answer</label>
                <select 
                  aria-label="Default select example"
                  onChange={(e)=> this.setState({
                    show: show,
                    newQuestion: {
                      ...newQuestion,
                      result: e.target.value
                    }
                  })}
                >
                  <option>Choose a answer</option>
                  <option value="1">Answer 1</option>
                  <option value="2">Answer 2</option>
                  <option value="3">Answer 3</option>
                  <option value="4">Answer 4</option>
                </select>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.onClickSave}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
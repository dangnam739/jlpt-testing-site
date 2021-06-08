import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

class EditTest extends Component{
  constructor(props){
    super(props);
    
    this.state = {
      isLoading: true,
      questions: [
        {
          id: 1,
          question: 'What is your name',
          answer1: 'name',
          answer1: 'what',
          answer1: 'is',
          answer1: 'your',
          result: 1
        },
        {
          id: 2,
          question: 'How old are you',
          answer1: 'How',
          answer1: 'old',
          answer1: 'are',
          answer1: 'you',
          result: 2
        },
        {
          id: 3,
          question: 'How old are you',
          answer1: 'How',
          answer1: 'old',
          answer1: 'are',
          answer1: 'you',
          result: 2
        }
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
    const { isLoading, questions, error } = this.state;
    return(
      <div>
        <h3>テストの編集</h3>
        {questions.map(question => 
          <Form>
            <Form.Group className="mb-3" controlId="formBasicQuestion">
              <Form.Label>Question</Form.Label>
              <Form.Control type="text" placeholder="Enter question" value={question.question}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Answer 1</Form.Label>
              <Form.Control type="text" placeholder="Answer 1" value={question.answer1} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Answer 2</Form.Label>
              <Form.Control type="text" placeholder="Answer 2" value={question.answer2} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Answer 3</Form.Label>
              <Form.Control type="text" placeholder="Answer 3" value={question.answer3} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Answer 4</Form.Label>
              <Form.Control type="text" placeholder="Answer 4" value={question.answer4} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>True answer</Form.Label>
              <Form.Select aria-label="Default select example" value={question.result}>
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
              </Form.Select>
            </Form.Group>
          </Form>
        )}

            <Button variant="primary" type="submit">
              Submit
            </Button>
      </div>
    )
  }
}

export default EditTest;
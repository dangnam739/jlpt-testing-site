import React, { Component } from 'react';
import { ListGroup, Container } from 'react-bootstrap';
import { Switch, Route, Router, Link ,Redirect } from 'react-router-dom'

import EditTest from './EditTest.js';
import ListUser from './ListUser';
import ListTest from './ListTest';

export default class Admin extends Component{
  constructor(props){
    super(props);
  }

  render(){
    let user = JSON.parse(sessionStorage.getItem("user"));
   
    if (!user || user.admin!==1) {
      return <Redirect to="/"/>
    }
    return(
      <Container>
        <h1>Admin</h1>
        <ListGroup horizontal>
          <ListGroup.Item>
            <Link to='/admin/user'>Users</Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to='/admin/test'>Test</Link>
          </ListGroup.Item>
        </ListGroup>
        <Switch>
          <Route path='/admin/user' exact component={ListUser}>
          </Route>
          <Route path='/admin/test' exact component={ListTest}>
          </Route>
          <Route path='/admin/test/edit/:level/vocabulary/:id' exact component={EditTest}>
          </Route>
          <Route exact path='/admin/'>
            <h3>Welcome to admin page</h3>
          </Route>
        </Switch>
      </Container>
    )
    
  }
}
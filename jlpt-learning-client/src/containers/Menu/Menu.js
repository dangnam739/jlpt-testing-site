import React, { Component } from 'react';
import {Navbar, Nav, Button, Container} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faChartLine, faAngleDoubleRight, faSignInAlt, faKey, faUser} from '@fortawesome/free-solid-svg-icons';

import { BrowserRouter, Route, NavLink, Redirect } from 'react-router-dom';
import './Menu.scss';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Practice from '../Practise/Practice';
import PracticeTest from '../Practise/PracticeTest/PracticeTest';
import EntryPractice from '../Practise/EntryPractice/EntryPractice';
import Admin from '../../admin/Admin';
import Chart from '../Chart/Chart';
//import Exams from '../Exams/Exams';
//import Practice from '../Practise/Practice';
//import PracticeTest from '../Practise/PracticeTest/PracticeTest';
//import EntryPractice from '../Practise/EntryPractice/EntryPractice';

import {isLogin, clearUserToken} from '../../auth/userAuth';
import Profile from '../Profile/Profile';


class Menu extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLogin: isLogin(),
        
      }
    }
    render() {
      console.log(this.state.isLogin)
      let user = JSON.parse(sessionStorage.getItem("user"));
        return (
            <BrowserRouter>
                <Navbar bg="light" expand="lg" className="menupage">
                    <Container>
                        <Navbar.Brand href="/"><img height="50px" src="/assets/dethijlpt-logo.png" alt=""/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                            <NavLink exact={true} to="/" activeClassName="active-link" className="menupage__link"><FontAwesomeIcon icon={faHome} /> Home</NavLink>
                            {user && user.admin!==1 &&<NavLink to="/chart" activeClassName="active-link" className="menupage__link"><FontAwesomeIcon icon={faChartLine} /> Ranking</NavLink>}
                            {user && user.admin===1 && <NavLink to="/admin" activeClassName="active-link" className="menupage__link"><FontAwesomeIcon icon={faChartLine} /> Admin</NavLink>}
                            </Nav>
                            <div className="menupage__group">
                                <NavLink to="/practice" activeClassName="active-link" className="menupage__link">
                                    <Button variant="danger" className="menupage__link__button"><FontAwesomeIcon icon={faAngleDoubleRight} /> Test Now</Button>
                                </NavLink>
                                {
                                  !this.state.isLogin ? <NavLink to="/login" activeClassName="active-link" className="menupage__link"><FontAwesomeIcon icon={faSignInAlt} /> Login</NavLink>
                                    : (
                                        <span>
                                          <NavLink to="/profile" activeClassName="active-link" className="menupage__link"><FontAwesomeIcon icon={faUser} /> Profile</NavLink>
                                          <NavLink to="/" className="menupage__link btn btn-default" onClick={() => clearUserToken(() => {this.setState({isLogin: false,user:{}});sessionStorage.removeItem('user')})}><FontAwesomeIcon icon={faSignInAlt} /> Logout</NavLink>
                                        </span>
                                      )
                                }

                                { !this.state.isLogin && <NavLink to="/register" activeClassName="active-link" className="menupage__link"><FontAwesomeIcon icon={faKey} /> Register</NavLink>}
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Route exact path="/" component={Home} />
                
                <Route path="/admin" component={Admin} />
                
                <Route exact path="/practice" component={Practice} />

                {/* <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} /> */}
                <Route exact path="/chart" >
                     <Chart /> 
                </Route>

                {/* <Route exact path="/practice" component={Practice} /> */}

                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                {/* <Route exact path="/exams/:id" component={Exams} /> */}

                 <Route exact path="/practice/:level/:category" component={PracticeTest} /> 

                 <PrivateRoute exact path="/practice/:level/:category/:id">
                      <EntryPractice />
                </PrivateRoute> 

                <PrivateRoute exact path="/profile">
                  <Profile />
                </PrivateRoute>
            </BrowserRouter>
        );
    }
}

function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          isLogin() ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

export default Menu;
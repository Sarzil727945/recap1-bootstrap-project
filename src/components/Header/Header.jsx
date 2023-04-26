import React from 'react';
import './Header.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
     return (
          <div className='fixed-top'>
               <Navbar bg="light" expand="lg" className='p-4 mb-2'>
                    <Container fluid className='container'>
                         <Navbar.Brand href="#" className='fs-4'>
                              <h2>React Developer</h2>
                         </Navbar.Brand>
                         <Navbar.Toggle aria-controls="navbarScroll" />
                         <Navbar.Collapse id="navbarScroll">
                              <Nav
                                   className="mx-auto my-2 my-lg-0"
                                   style={{ maxHeight: '100px' }}
                                   navbarScroll
                              >
                                   <ActiveLink to="/">Home</ActiveLink>
                                   <ActiveLink to="/register">Register</ActiveLink>
                                   <ActiveLink to="/login">Login</ActiveLink>
                                   <ActiveLink to="/logout">Logout</ActiveLink>
                              </Nav>
                              <Form className="d-flex">
                              <Button variant="info" className='py-2'>Star Applying</Button>
                              </Form>
                         </Navbar.Collapse>
                    </Container>
               </Navbar>
          </div>
     );
};

export default Header;
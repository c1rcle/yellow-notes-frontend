import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useUser from '../../contexts/UserContext';

const Navigation = () => {
  const [{ isUserLoggedIn, email }, dispatch] = useUser();

  const trimEmail = () => {
    return email.split('@')[0];
  };

  return (
    <Navbar variant='light' bg='light' expand='lg'>
      <Container className='justify-content-center'>
        <Navbar.Brand className='w-50 mr-auto'>
          <i className='fas fa-quote-right' />{' '}
          <span className='lead'>{isUserLoggedIn ? `Hello, ${trimEmail()}!` : 'Yellow Notes'}</span>
        </Navbar.Brand>
        {isUserLoggedIn ? (
          <Navbar.Toggle aria-controls='navbar-nav' />
        ) : (
          <Link to='/' className='ml-auto justify-content-end'>
            <Button variant={`outline-primary`} className='w-100'>
              <i className={`fas fa-sign-in-alt mr-1`} />
              Sign in
            </Button>
          </Link>
        )}
        {isUserLoggedIn && (
          <Nav className='w-100 justify-content-center my-2'>
            <Button variant='outline-success'>
              <i className='fas fa-bars mr-1' />
              Text
            </Button>
          </Nav>
        )}
        <Navbar.Collapse id='navbar-nav' className='w-100'>
          <Nav className='w-100 ml-auto justify-content-end'>
            <Button variant={`outline-danger`} onClick={() => dispatch({ type: 'LOGOUT' })}>
              <i className={`fas fa-sign-out-alt mr-1`} />
              Sign out
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

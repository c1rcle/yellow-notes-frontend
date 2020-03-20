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
      <Container className='d-inline-flex container-fluid justify-content-lg-around justify-content-between'>
        <Navbar.Brand>
          <i className='fas fa-quote-right' />{' '}
          <span className='lead'>{isUserLoggedIn ? `Hello, ${trimEmail()}!` : 'Yellow Notes'}</span>
        </Navbar.Brand>
        {isUserLoggedIn ? (
          <>
            <Nav>
              <Button className='w-100' variant='outline-success'>
                <i className='fas fa-bars mr-1' />
                Text
              </Button>
            </Nav>
            <Nav className='d-lg-none'>
              <Navbar.Toggle aria-controls='navbar-nav' />
            </Nav>
            <Nav className=' d-lg-none w-100' />
            <Nav className='flex-fill flex-lg-grow-0'>
              <Navbar.Collapse id='navbar-nav' className='w-100 justify-content-end'>
                <Button
                  className='w-100'
                  variant={`outline-danger`}
                  onClick={() => dispatch({ type: 'LOGOUT' })}>
                  <i className={`fas fa-sign-out-alt mr-1`} />
                  Sign out
                </Button>
              </Navbar.Collapse>
            </Nav>
          </>
        ) : (
          <Link to='/' className=''>
            <Button variant={`outline-primary`} className='w-100'>
              <i className={`fas fa-sign-in-alt mr-1`} />
              Sign in
            </Button>
          </Link>
        )}
      </Container>
    </Navbar>
  );
};

export default Navigation;

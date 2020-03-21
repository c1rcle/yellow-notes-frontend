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

        {isUserLoggedIn && (
          <Button variant='outline-success' className='d-lg-none mr-2'>
            <i className='fas fa-bars mr-1' />
            Text
          </Button>
        )}

        <Navbar.Toggle aria-controls='navbar-nav' />
        <Navbar.Collapse id='navbar-nav' className='w-100'>
          {isUserLoggedIn && (
            <Nav className='w-100 justify-content-center'>
              <Button variant='outline-success' className='d-none d-lg-block'>
                <i className='fas fa-bars mr-1' />
                Text
              </Button>
            </Nav>
          )}

          <Nav className='w-100 ml-auto justify-content-end mt-2 mt-lg-0 flex-lg-row flex-row-reverse'>
            {isUserLoggedIn ? (
              <Button variant={`outline-danger`} onClick={() => dispatch({ type: 'LOGOUT' })}>
                <i className={`fas fa-sign-out-alt mr-1`} />
                Sign out
              </Button>
            ) : (
              <Link to='/' className='btn btn-outline-primary'>
                <i className={`fas fa-sign-in-alt mr-1`} />
                Sign in
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

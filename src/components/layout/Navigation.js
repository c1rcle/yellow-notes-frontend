import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import useUser from '../../contexts/UserContext';

const Navigation = props => {
  const [{ isUserLoggedIn, email }, dispatch] = useUser();

  console.log(props);

  return (
    <Navbar variant='light' bg='light' expand='sm'>
      <Container className='justify-content-center'>
        <Navbar.Brand className='w-50 mr-auto'>
          <i className='fas fa-quote-right' /> Yellow Notes {isUserLoggedIn && ' - Hello, ' + email}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls='navbar-nav' />
        <Navbar.Collapse id='navbar-nav' className='w-100'>
          <Nav className='w-100 justify-content-center'>
            {isUserLoggedIn && (
              <Button variant='outline-success'>
                <i className='fas fa-bars mr-1' />
                Text
              </Button>
            )}
          </Nav>

          <Nav className='w-100 ml-auto justify-content-end'>
            {isUserLoggedIn ? (
              <Button variant={`outline-danger`} onClick={() => dispatch({ type: 'LOGOUT' })}>
                <i className={`fas fa-sign-out-alt mr-1`} />
                {'Sign out'}
              </Button>
            ) : (
              <Link to='/'>
                <Button variant={`outline-primary`}>
                  <i className={`fas fa-sign-in-alt mr-1`} />
                  {'Sign in'}
                </Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default withRouter(Navigation);

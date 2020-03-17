import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';

const Navigation = props => {
  const [state, setState] = useState({
    variant: '',
    icon: '',
    text: '',
    addNoteVisible: false
  });

  const { variant, icon, text, addNoteVisible } = state;

  useEffect(() => {
    if (props.history.location.pathname !== '/notes') {
      setState(state => ({
        ...state,
        variant: 'primary',
        icon: 'sign-in-alt',
        text: 'Sign in',
        addNoteVisible: false
      }));
    } else {
      setState(state => ({
        ...state,
        variant: 'danger',
        icon: 'sign-out-alt',
        text: 'Sign out',
        addNoteVisible: true
      }));
    };
  }, [props.history.location]);

  return (
    <Navbar variant='light' bg='light' expand='sm'>
      <Container className='justify-content-center'>
        <Navbar.Brand className='w-50 mr-auto'>
          <i className='fas fa-quote-right' /> Yellow Notes
        </Navbar.Brand>

        <Navbar.Toggle aria-controls='navbar-nav' />
        <Navbar.Collapse id='navbar-nav' className='w-100'>
          <Nav className='w-100 justify-content-center'>
            {addNoteVisible && (
              <Button variant='outline-success'>
                <i className='fas fa-bars mr-1' />
                Text
              </Button>
            )}
          </Nav>

          <Nav className='w-100 ml-auto justify-content-end'>
            <Link to='/'>
              <Button variant={`outline-${variant}`}>
                <i className={`fas fa-${icon} mr-1`} />
                {text}
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default withRouter(Navigation);

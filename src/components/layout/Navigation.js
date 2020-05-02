import React, { useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useUser from '../../contexts/UserContext';
import useNotes from '../../contexts/NotesContext';

const Navigation = () => {
  const [{ isUserLoggedIn, email }, dispatch] = useUser();

  const [, dispatchNotes, { openDialog }] = useNotes();

  const trimEmail = () => {
    return email.split('@')[0];
  };

  const checkToken = () => {
    if (!isUserLoggedIn && !!localStorage.getItem('token')) dispatch({ type: 'CHECK_TOKEN' });
  };
  useEffect(checkToken, []);

  return (
    <>
      <Navbar variant='light' bg='light' expand='lg'>
        <Container className='justify-content-center lead '>
          <Navbar.Brand className='w-50 mr-auto overflow-ellipsis'>
            <i className='fas fa-quote-right text-primary' />{' '}
            <span className={'lead font-weight-bold'}>
              {isUserLoggedIn ? 'Hello' : 'Yellow Notes'}
            </span>
            {isUserLoggedIn && <span className='lead'>{', ' + trimEmail()}</span>}
          </Navbar.Brand>

          {isUserLoggedIn && (
            <>
              <Button
                variant='outline-success'
                className='d-lg-none mr-2'
                onClick={() => openDialog()}>
                <i className='fas fa-font fa-fw' />
              </Button>
              <Button
                variant='outline-success'
                className='d-lg-none'
                onClick={() => openDialog({ variant: 1 })}>
                <i className='fas fa-tasks fa-fw' />
              </Button>
            </>
          )}

          {isUserLoggedIn && (
            <Nav className='w-25 justify-content-center d-none d-lg-flex'>
              <Button variant='outline-success' className='mr-2' onClick={() => openDialog()}>
                <i className='fas fa-font fa-fw' />
                Text
              </Button>
              <Button variant='outline-success' onClick={() => openDialog({ variant: 1 })}>
                <i className='fas fa-tasks fa-fw' />
                Todo
              </Button>
            </Nav>
          )}
          {isUserLoggedIn ? (
            <>
              <Navbar.Toggle aria-controls='navbar-nav' />
              <Navbar.Collapse id='navbar-nav' className='w-50'>
                <Nav className='ml-auto justify-content-end mt-2 mt-lg-0 flex-row'>
                  {isUserLoggedIn && (
                    <NavLink
                      exact
                      to='/'
                      className='btn btn-outline-danger'
                      onClick={() => {
                        dispatch({ type: 'LOGOUT' });
                        dispatchNotes({ type: 'CLEAR_NOTES' });
                      }}>
                      <i className={`fas fa-sign-out-alt mr-1`} />
                      Sign out
                    </NavLink>
                  )}
                </Nav>
              </Navbar.Collapse>
            </>
          ) : (
            <Nav className='w-50 ml-auto justify-content-end flex-row'>
              <NavLink className='btn btn-outline-primary' exact to='/' activeClassName='d-none'>
                <i className='fas fa-sign-in-alt mr-1' />
                Sign in
              </NavLink>
            </Nav>
          )}
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;

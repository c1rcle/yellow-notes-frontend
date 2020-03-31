import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useUser from '../../contexts/UserContext';
import NoteDialog from '../pages/Notes/NoteDialog';

const Navigation = () => {
  const [{ isUserLoggedIn, email }, dispatch] = useUser();

  const [dialogVisible, setDialogVisible] = useState(false);
  const toggleDialog = e => setDialogVisible(!dialogVisible);

  const trimEmail = () => {
    return email.split('@')[0];
  };

  useEffect(() => {
    if (!isUserLoggedIn && !!localStorage.getItem('token')) dispatch({ type: 'CHECK_TOKEN' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar variant='light' bg='light' expand='lg'>
        <Container className='justify-content-center'>
          <Navbar.Brand className='w-50 mr-auto'>
            <i className='fas fa-quote-right' />{' '}
            <span className='lead'>
              {isUserLoggedIn ? `Hello, ${trimEmail()}!` : 'Yellow Notes'}
            </span>
          </Navbar.Brand>

          {isUserLoggedIn && (
            <Button
              variant='outline-success'
              className='d-lg-none mr-2'
              onClick={e => toggleDialog(e)}
            >
              <i className='fas fa-bars mr-1' />
              Text
            </Button>
          )}

          <Navbar.Toggle aria-controls='navbar-nav' />
          <Navbar.Collapse id='navbar-nav' className='w-100'>
            {isUserLoggedIn && (
              <Nav className='w-100 justify-content-center'>
                <Button
                  variant='outline-success'
                  className='d-none d-lg-block'
                  onClick={e => toggleDialog(e)}
                >
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
      <NoteDialog closeDialog={toggleDialog} dialogVisible={dialogVisible} />
    </>
  );
};

export default Navigation;

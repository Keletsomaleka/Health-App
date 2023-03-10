import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../actions/userActions'

function Header() {

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }


    return (
        <header>
            
            <Navbar bg="light" expand="lg" className='py-3'>
            <Container fluid>
                <LinkContainer to="/">
                    <Navbar.Brand >Dietician Palesa</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav
                    className="ms-auto"
                    navbarScroll
                >

                    {userInfo ? (
                        <NavDropdown title={userInfo.name} id='username'>
                            <LinkContainer to='/profile'>
                                <NavDropdown.Item>Profile</NavDropdown.Item>
                            </LinkContainer>

                            <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>

                        </NavDropdown>
                    ) : (
                        <LinkContainer to="/login">
                            <Nav.Link ><i className="fas fa-user mx-2"></i>Login</Nav.Link>
                        </LinkContainer>

                    )}

                    
                    <LinkContainer to="/about">
                        <Nav.Link><i className="fa fa-info-circle mx-2" aria-hidden="true"></i>About Us</Nav.Link>
                    </LinkContainer>


                    <LinkContainer to="/Testimonials">
                        <Nav.Link  ><i className="fa fa-info-circle mx-2" ></i>Testimonials</Nav.Link>
                    </LinkContainer>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>

        </header>
    )
}

export default Header

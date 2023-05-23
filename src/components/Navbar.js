import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assests/images/diethood-min.svg';
import profilePic from '../assests/images/pp.ddd41597.jpg'
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';


const Navbar = () => {
    return (
        <BootstrapNavbar bg="white" expand="lg" >
            <Container >
                <Link to='/'  className='navbar-brand'><img src={logo} alt="home" /> </Link>
                <BootstrapNavbar.Toggle aria-controls="navbarScroll" />
                <BootstrapNavbar.Collapse id="navbarScroll">
                    <Nav
                        className="m-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >

                        <NavDropdown title="Home" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Home</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Recipe Page" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Recipe Page</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Pages" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Pages</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="buy" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">buy</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex align-items-center">
                        <Link to="/"><FiSearch size={28}   color='#000'/></Link>
                        <Link to="/profile"><img src={profilePic} className='profile-pic ms-4' alt="" /></Link>
                    </Form>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
}

export default Navbar
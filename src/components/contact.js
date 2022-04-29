import React from 'react';
import './css/home.css';
import banner from './images/banner.PNG';
import photo8 from './images/photo8.jpg';
import { Form } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Nav,NavLink,NavMenu} from './NavbarElements';

class Contact extends React.Component {
    render(){
        return(
            <>
                <div>
                <Nav>
                    <NavLink to="/" className="logo">
                        <img src={banner} alt='logo' />
                    </NavLink>
                    <NavMenu>
                        <NavLink to='/' activeStyle>Home</NavLink>
                        <NavLink to='/offer' activeStyle>Offer</NavLink>
                        <NavLink to='/subscription' activeStyle>Subscription</NavLink>
                        <NavLink to='/about' activeStyle>About</NavLink>
                        <NavLink to='/services' activeStyle>Services</NavLink>
                        <NavLink to='/contact' activeStyle>Contact</NavLink>
                        <NavLink to='/login' activeStyle>Login</NavLink>
                        <NavLink to='/register' activeStyle>Register</NavLink>
                        <NavLink to='/admin' activeStyle>Admin</NavLink>
                    </NavMenu>
                </Nav>
                </div>
                <div>
                    <div className="full-box">
                        <img src={photo8} alt="logo" height="100%" width="100%"/>
                    </div>
                </div>
                <br></br>
                <div>
                    <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        Email
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control plaintext readOnly defaultValue="email@example.com" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Contact Number
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="number" placeholder="9999999999" />
                        </Col>
                    </Form.Group>
                    <Button variant="primary" type="submit"><NavLink to="/">Submit</NavLink></Button>
                    </Form>
                    <footer>
                            <h4>Let's Keep in Touch</h4>
                            <p>
                                7th Floor, Tower-B, Diamond District, 150, HAL Airport Road, Kodihalli, Bangalore – 560008
                            </p>
                            <div className="copy-rights">
                                © Copyright 2017 HomeXRental India Private Ltd. All rights reserved.
                            </div>
                    </footer>
                </div>
            </>
        )
    }
}

export default Contact;
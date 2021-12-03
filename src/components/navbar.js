import React from "react";
import { Container, Navbar, Image, Form, FormControl, Button, Row, Col} from "react-bootstrap";
import logo from '../assets/products/logo.svg';

import { BrowserRouter as Router,
  Link
} from "react-router-dom";

import "../css/navbar.css";

const NavBar = ()=> {
  return(
    <>
    <Container className='nav-bar'>
      <Navbar1 />
      <Navbar2 />
    </Container>
    </>
  )
}

const Navbar1 = () => {
  return(
    <Row className='nav-brand'>
      <Col>
        <Navbar.Brand href="#"><Image  src={logo} width='100%' height='100%' /></Navbar.Brand>
      </Col>
      <Col>
        <Form className="d-flex" className='nav-form'>
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Col>
      <Col>
      sdfsd
      </Col>
    </Row>
  );
}

const Navbar2 = () => {
  return(
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        SDFSD
      </Container>
    </Navbar>
  );
}

export default NavBar;

{/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">register</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav> */}
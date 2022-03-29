import React, {useState} from 'react';
import '../bootstrap-5.1.3-dist/css/bootstrap.min.css'
import { Navbar,Container,Nav,Button, Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter } from 'react-bootstrap'
import {Link,NavLink} from 'react-router-dom';
import  './navbar.css'

const NavBar = ()=> {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const submitEvent = () => {
    let email = document.getElementsByClassName('')
  }
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#">Logo</Navbar.Brand>
    <Nav className="ml-auto">
      <NavLink className='nav-link' to="/">Home</NavLink>
      <NavLink className='nav-link' to="/register" >Register</NavLink>
      <NavLink className='nav-link' to="/users">Users</NavLink>
      <NavLink className='nav-link' to="/login">
      <Button variant='dark' onClick={handleShow}>
        Login
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
      >
        <ModalBody>
          <h1>Welcome To Ecommerce</h1><br></br>
        <h5>Log in with email & password</h5>
        
        <form method="POST">
            <div class="form_div">
                <input type="email" name="email" class="form_input" placeholder=" " required></input>
                <label for="" class="form_label">Email</label>
            </div>

            <div class="form_div">
                <input type="password" class="form_input" name="password" placeholder=" " required></input>
                <label for="" class="form_label">Password</label>
            </div>
            
        <Button variant="danger" type='submit' className='login'>Login</Button>
        </form>
    
        <h2>or</h2>
        <Button variant="outline-dark" className='facebook'>Continue with Facebook</Button>
        <Button variant="outline-info" className='google'>Continue with Google</Button>
        <h2>Don't have account? <NavLink className="link" to="/register" onClick={handleClose}>Sign Up</NavLink></h2>
          
        </ModalBody>
        <ModalFooter>
        <h6>Forgot your password? <NavLink className="nav-link" to="/reset" onClick={handleClose} >Reset It</NavLink></h6>
        </ModalFooter>
      </Modal>
      </NavLink>
    </Nav>
    </Container>
  </Navbar>
  )

}

export default NavBar;
import React, {useState, useEffect} from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";


const Navbars = () => {
    const {loginWithRedirect, isAuthenticated, user, logout, getAccessTokenSilently}=useAuth0();
    const [textButton, setTextButton] = useState('Login')
    const [Name, setName] = useState('')

    useEffect(() => {
      if (isAuthenticated){
        setTextButton('Logout')
        setName(user.name)
      }else{
        setTextButton('Login  ')
        setName('')
      }
    }, [isAuthenticated])

    useEffect(() =>{
      const getToken=async ()=>{
        const accesToken = await getAccessTokenSilently();
        localStorage.setItem('token', accesToken)
      }
      if(isAuthenticated){
        getToken();
      }      
    }, [isAuthenticated, getAccessTokenSilently])

    return (
        <Navbar bg="light" expand="lg">
  <Container>
      
    <Navbar.Brand href="Logo"><img className="Logo" src="https://images.vexels.com/media/users/3/129185/isolated/preview/cc468878901621ce6e2ecc143815653e-grafico-circular-de-4-partes-con-iconos.png" alt="Logo" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link><Link to='/'>Home</Link></Nav.Link>
        <Nav.Link><Link to='Features'>Features</Link></Nav.Link>
        {
          isAuthenticated ?
          <NavDropdown title={Name} id="basic-nav-dropdown">
          <NavDropdown.Item ><Link to='/dash'>Dashboard</Link></NavDropdown.Item>
          <NavDropdown.Item ><Link to='/Roles'>Roles</Link></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item ><Link to='/Ventas'>Ventas</Link></NavDropdown.Item>
        </NavDropdown>:
          null
        }
      </Nav>
    </Navbar.Collapse>
  </Container>
  {
    isAuthenticated ?
    <button onClick={() => logout({ returnTo: window.location.origin })}
      className="btn btn-primary"> {textButton} </button>:
    <button onClick={() => loginWithRedirect()}
      className="btn btn-primary"> {textButton} </button>
  }
</Navbar>
    )
}

export default Navbars

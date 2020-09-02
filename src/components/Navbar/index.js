import React from "react";
// import '../App.scss';
 import {Link} from 'react-router-dom';
import {Navbar, Nav} from "react-bootstrap";


function Navigation(){
return (


<Navbar collapseOnSelect expand="lg" style={{boxShadow: "0.5rem 0.5rem 0.5rem 0.5rem #eaeaea"}} variant="dark">
  <Navbar.Brand href="#home"><img className="logo_link" src="./img/Group 4.png" alt =""/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{backgroundColor:" #6A86CF"}} />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    
    </Nav>
    <Nav>
      <Nav.Link className="nav_link"><b>
        <Link style={{textDecoration:"none"}} to="/">
         HOME 
         </Link>
          </b></Nav.Link>
      <Nav.Link className="nav_link"><b>
        <Link style={{textDecoration:"none"}} to="/about">
         ABOUT
         </Link>
          </b></Nav.Link>
      <Nav.Link className="nav_link"><b> 
        <Link style={{textDecoration:"none"}} to="/price">
        PRICE
        </Link>
        </b></Nav.Link>
      <Nav.Link className="nav_link"><b>
        <Link style={{textDecoration:"none"}} to="/order" >
        ORDER 
         </Link>
         </b></Nav.Link>
      <Nav.Link className="nav_link"><b>
        <Link style={{textDecoration:"none"}}  to="/contact">
         CONTACT
        </Link>
        </b></Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>

);


}


export default Navigation;



















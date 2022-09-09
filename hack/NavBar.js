import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import { HashLink } from 'react-router-hash-link';
import { useNavigate } from "react-router-dom";
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {
  const history=
  
  {useNavigate}
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {

    console.log(value)
    //setActiveLink(value);
    if (value==="history"){

      document.location.href = "htpps://localhost:3001/"
    }
    else{
      setActiveLink(value);
    }
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#HOME" className={activeLink === 'HOME' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>HOME</Nav.Link>
              <Nav.Link href="#LOANS" className={activeLink === 'LOAN' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('loans')}>LOANS</Nav.Link>
              <Nav.Link href="#HISTORY" className={activeLink === 'HISTORY' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('history')}>HISTORY</Nav.Link>
              

            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
               
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>LOGIN</span></button>
              </HashLink>
   
              
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}

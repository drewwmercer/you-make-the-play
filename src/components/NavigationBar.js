import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../assets/ymtp-logo-150x150.png';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }

  a,
  .navbar-brand,
  .navbar-nav,
  .nav-link {
    color: #bbb;

    &:hover {
      color: white;
    }
  }
`;

export const NavigationBar = () => (
         <Styles>
           <Navbar expand='lg'>
             <Navbar.Brand href='/'>
               <img
                 src={logo}
                 width='30'
                 height='30'
                 className='d-inline-block align-top'
                 alt='React Bootstrap logo'
               />{`  `}
               {/* <i class='far fa-baseball'></i>  */}
               You Make The Play
             </Navbar.Brand>
             <Navbar.Toggle aria-controls='basic-navbar-nav' />
             <Navbar.Collapse id='basic-navbar-nav'>
               <Nav className='mr-auto'>
                 <Nav.Item>
                   <Nav.Link>
                     <Link to='/'>Game</Link>
                   </Nav.Link>
                 </Nav.Item>
                 <Nav.Item>
                   <Nav.Link>
                     <Link to='/rules'>Rules</Link>
                   </Nav.Link>
                 </Nav.Item>
                 <Nav.Item>
                   <Nav.Link>
                     <Link to='/cards'>Cards</Link>
                   </Nav.Link>
                 </Nav.Item>
                 <NavDropdown.Divider />
                 <Nav.Item>
                   <Nav.Link>
                     <Link to='/contact'>Contact</Link>
                   </Nav.Link>
                 </Nav.Item>
               </Nav>
             </Navbar.Collapse>
           </Navbar>
         </Styles>
       );

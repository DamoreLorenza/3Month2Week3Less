
import {Container, Dropdown, NavDropdown} from 'react-bootstrap';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Section() {
  return (
    <Navbar expand="lg" >
      <Container fluid>
        <Navbar.Brand className='text-white fs-2 fw-bold' href="#">TV Shows</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown
              className='text-light'
              title="Genres"
              menuVariant="dark"
            >

            </NavDropdown>
          </Nav>
          <div className="d-flex">
          <i className="bi bi-grid"></i>
          <i className="bi bi-grid-3x3"></i>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Section;
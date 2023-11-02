import { Container, Nav, Navbar, } from "react-bootstrap"
import logo from './assets/logo.png'
import { Link } from "react-router-dom";

   

const NavBarra = ()=>{
return(
   
        <Navbar expand="lg" className="" >
          <Container fluid>
            <Navbar.Brand ><img src={logo} alt="logo" width={100}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Link className="nav-link text-white fw-bold" to="/" >Home</Link>
                <Link className="nav-link text-secondary fw-bold" to="/tvShows">TV Shows</Link>
                <Nav.Link className="text-secondary fw-bold" href="#action2">Movies</Nav.Link>
                <Nav.Link className="text-secondary fw-bold" href="#action2">Recently Added</Nav.Link>
                <Nav.Link className="text-secondary fw-bold" href="#action2">My List</Nav.Link>
                
                
              </Nav>
              <div className="d-flex"> 
              <i className="bi bi-search text-white me-4"></i>
              <Nav.Link className="text-white fw-bold me-4" href="#action2">KIDS</Nav.Link>
             
              <i className="bi bi-bell text-white me-5"></i>
              <i className="bi bi-person-circle text-white me-4"></i>
                
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }

export default NavBarra


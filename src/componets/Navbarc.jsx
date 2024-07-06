import react from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbarc() {
    return (
        <Navbar expand="lg" className="bg-white py-2 border-bottom fixed-top">
            <Container fluid>
                <Navbar.Brand href="" className="fs-3 ms-5  " ><img src=""  alt="" /><b>Business</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />

                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0  as"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#home" className="text-dark"><b>HOME</b></Nav.Link>
                        <Nav.Link href="#about" className="text-dark"><b>ABOUT</b></Nav.Link>
                        <Nav.Link href="#services" className="text-dark"><b>SERVICES</b></Nav.Link>
                        <Nav.Link href="#porfolio" className="text-dark"><b>PORFOLIO</b></Nav.Link>
                        <Nav.Link href="#team" className="text-dark"><b>TEAM</b></Nav.Link>
                        <Nav.Link href="#pricing" className="text-dark"><b>BLOG</b></Nav.Link>
                        <Nav.Link href="#contact" className="text-dark"><b>CONTACT</b></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Navbarc;

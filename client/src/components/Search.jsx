import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Search = () => {



  return (

    <>
      <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Escoge tu animalito</Navbar.Brand>
    
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        
      </Container>
    </Navbar>



    </>







  );
}

export default Search
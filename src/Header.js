import React from 'react';
import {Navbar, Form, Nav, Button, FormControl} from 'react-bootstrap';

export default () => {
  return (
    <>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Star Wars Movies</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/movies">Movies</Nav.Link>
      {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
    </>
  )
}

import React from "react";
import { Nav, Navbar, Button, Form, FormControl } from "react-bootstrap";

export const NavBar = (props) => {
  return (
    <>
      <Navbar bg="light" variant="light" sticky="top">
        <Navbar.Brand href="/">Kenziegram</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/photos">Photos</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar>
    </>
  );
};
export default NavBar;

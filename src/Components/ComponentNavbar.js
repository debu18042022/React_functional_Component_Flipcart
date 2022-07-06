import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

function ComponentNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
            alt="abc"
            style={{ width: "75px" }}
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <div
              style={{
                display:"table",
                width: "350px",
                backgroundColor: "white",
                textAlign: "center",
                marginRight:"10px"
              }}
            >
              <input
                type="text"
                placeholder="Search for products,brands and mores"
                style={{ width: "310px",border:"none",outline: "none",paddingTop:"5px"}}
              ></input>
              <i
                class="fa-solid fa-magnifying-glass"
                style={{ backgroundColor: "white", color: "blue",paddingTop:"10px" }}
              ></i>
            </div>
            <Button
              className="Log_in_button"
              variant="light"
              style={{ width: "20%" }}
            >
              Log In
            </Button>
          </Nav>
          <Nav>
            <Nav.Link href="#deets" active>
              Become a Seller
            </Nav.Link>

            <NavDropdown title="More" id="collasible-nav-dropdown" active>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#deets" active>
              <i class="fa-solid fa-cart-arrow-down"></i>
              <span>cart</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ComponentNavbar;

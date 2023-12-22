import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form"
import css from "./css/nav.module.css"

export default class NavC extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <Navbar expand="lg" className={css.navBody + (" sticky-top")}>
        <Container fluid>
          <Navbar.Brand as={"header"} href="#home"><img className={css.logo} src="./layout/netflix_logo.png"/></Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#">TV Shows</Nav.Link>
              <Nav.Link href="#">Movies</Nav.Link>
              <Nav.Link href="#">Recently Added</Nav.Link>
              <Nav.Link href="#">My List</Nav.Link>
            </Nav>
          <div>
            {/* <Form onSubmit={this.props.onSearchSubmit}> */}
            <Form>

              <Form.Group>
                <Form.Control type="search" placeholder="Search and press Enter"/>
              </Form.Group>
            </Form>
          </div>
        </Container>
      </Navbar>
    );
  }
}

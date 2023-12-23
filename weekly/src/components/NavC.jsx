import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form"
import css from "./css/nav.module.css"

export default class NavC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {highlighted: 'home'}
  }



  render() {
    return (
      <Navbar expand="lg" className={css.navBody + (" sticky-top")}>
        <Container fluid>
          <Navbar.Brand as={"header"} href="#home"><img className={css.logo} src="./layout/netflix_logo.png"/></Navbar.Brand>
            <Nav className="me-auto" >
              <Nav.Link className={css.highlighted}>Home</Nav.Link>
              <Nav.Link >TV Shows</Nav.Link>
              <Nav.Link >Movies</Nav.Link>
              <Nav.Link >Recently Added</Nav.Link>
              <Nav.Link >My List</Nav.Link>
            </Nav>
          <div>
            <Form onSubmit={(e) => {e.preventDefault(); this.props.onSearchSubmit(e.target[0].value)}}>
            {/* <Form> */}

              <Form.Group>
                <Form.Control type="search" placeholder="Search and press Enter" className={css.searchBar}/>
              </Form.Group>
            </Form>
          </div>
        </Container>
      </Navbar>
    );
  }
}

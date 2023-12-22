import "./App.css";
import React from "react";
import NavC from "./components/NavC.jsx";
import FooterC from "./components/FooterC.jsx";
import SelectC from "./components/SelectC.jsx";
import SliderC from "./components/SliderC.jsx";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchQuery: "" };

  }

  render() {
    return (
      <>
        <NavC />
        <main>
          <Container fluid className="d-flex align-items-center gap-5 py-4">
            <h1>Movie Collections</h1>
            <SelectC />
          </Container>
          <SliderC searchText="harry potter"/>
          <SliderC searchText="star wars"/>
          <SliderC searchText="avengers"/>
        </main>
        <FooterC />
      </>
    );
  }
}


export default App;

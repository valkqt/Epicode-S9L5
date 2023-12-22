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
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(e) {
    this.setState({ ...this.state, searchQuery: e.target.value });
  }

  render() {
    return (
      <>
        <NavC
          searchText={this.state.searchQuery}
          onSearchSubmit={this.handleSearch}
        />
        <main>
          <Container fluid className="d-flex align-items-center gap-5 py-4">
            <h1>Movie Collections</h1>
            <SelectC />
          </Container>
          {this.state.searchQuery === "" &&  (
            <>
              <SliderC searchText="harry potter" />
              <SliderC searchText="star wars" />
              <SliderC searchText="avengers" />
            </>
          )}
          {this.state.searchQuery !== "" && (
            <SliderC searchText={this.state.searchQuery} />
          )}
        </main>
        <FooterC />
      </>
    );
  }
}

export default App;

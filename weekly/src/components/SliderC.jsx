import React from "react";
import CardC from "./CardC.jsx";
import css from "./css/slider.module.css";

import data from "../data/data.json";

export default class SliderC extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: [] }
  }

  
  componentDidMount() {
    const endpoint = `http://www.omdbapi.com/?apikey=1413de3e&s=${encodeURIComponent(this.props.searchText)}`;

    fetch(endpoint, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ ...this.state, movies: data.Search });
      });
  }

  render() {
    return (
      <section className={css.slider}>
        {this.state.movies
        .slice(0, 5)
        .map((movie) => {
          return <CardC key={movie.imdbID} poster={movie.Poster} identifier={movie.imdbID}/>;
        })}
      </section>
    );
  }
}

import React, { Component } from "react";
import "./Form.scss";

export default class Form extends Component {
  state = {
    cities: ["LA", "Bordeux", "Lyon"],
    categories: ["bar", "club", "drink"],
    locations: ["SanJo", "fudge", "SD"],
    showSeason: false,
    season: "Season",
    showCategory: false,
    category: "Category",
    showDestination: false,
    destination: "Destination"
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.destination !== "Destination") {
      this.props.selectDestination(this.state.destination);
      console.log("finished!: ", this.state.destination);
    } else {
      console.log("Fill out rest");
    }
  };

  render() {
    let result = [];
    if (this.state.category !== "Category") {
      result = this.props.locations.filter(
        dest => dest.category === this.state.category
      );
    }

    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit} className="form">
          <div
            className="dropdown-container"
            onClick={() => {
              this.setState(prev => ({
                showSeason: !prev.showSeason,
                showCategory: false,
                showDestination: false
              }));
            }}
          >
            <div className="dropdown-container__placeholder">
              <span>{this.state.season}</span>
            </div>
            <div
              className="dropdown"
              style={{ display: this.state.showSeason ? "block" : "none" }}
            >
              {Object.keys(this.props.seasons).map(season => (
                <div
                  onClick={() =>
                    this.setState({
                      season,
                      category: "Category",
                      destination: "Destination"
                    })
                  }
                  className="dropdown__item"
                  key={season}
                >
                  <span>{season}</span>
                </div>
              ))}
            </div>
          </div>
          <div
            className="dropdown-container"
            onClick={() =>
              this.setState(prev => ({
                showCategory: !prev.showCategory,
                showSeason: false,
                showDestination: false
              }))
            }
          >
            <div className="dropdown-container__placeholder">
              <span>{this.state.category}</span>
            </div>
            <div
              className="dropdown"
              style={{ display: this.state.showCategory ? "block" : "none" }}
            >
              {this.state.season !== "Season"
                ? this.props.seasons[this.state.season].map(cat => (
                    <div
                      onClick={() =>
                        this.setState({
                          category: cat,
                          destination: "Destination"
                        })
                      }
                      className="dropdown__item"
                      key={cat}
                    >
                      <span>{cat}</span>
                    </div>
                  ))
                : ""}
            </div>
          </div>
          <div
            className="dropdown-container"
            onClick={() =>
              this.setState(prev => ({
                showDestination: !prev.showDestination,
                showCategory: false,
                showSeason: false
              }))
            }
          >
            <div className="dropdown-container__placeholder">
              <span>{this.state.destination}</span>
            </div>
            <div
              className="dropdown"
              style={{ display: this.state.showDestination ? "block" : "none" }}
            >
              {result.map(dest => (
                <div
                  onClick={() => this.setState({ destination: dest.name })}
                  className="dropdown__item"
                  key={dest.id}
                >
                  <span>{dest.name}</span>
                </div>
              ))}
            </div>
          </div>

          <button className="form__btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 54">
              <path
                className="form__btn__icon"
                fill="currentColor"
                d="M38.25,35.59l-4.42-4.41a10.14,10.14,0,1,0-3.65,3.65l4.41,4.42a2.59,2.59,0,0,0,3.66-3.66ZM17.53,26.1a7.58,7.58,0,1,1,7.58,7.58A7.59,7.59,0,0,1,17.53,26.1Z"
              ></path>
            </svg>
          </button>
        </form>
      </div>
    );
  }
}

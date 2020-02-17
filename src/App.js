import React from "react";
import Header from "./components/header/Header";
import TourHeader from "./components/tourHeader/TourHeader";
import Form from "./components/form/Form";
import Image from "./components/renderImage/Image";

import data from "./assets/tour-data.json";

import "./App.scss";

class App extends React.Component {
  componentDidMount() {
    this.setState({ locations: data["destinations"] });
    this.setState({ seasons: data["seasonCategories"] });
  }

  state = {
    locations: {},
    seasons: {},
    destination: ""
  };

  selectDestination = destination => {
    this.setState({ destination });
  };

  render() {
    const { locations, seasons, destination } = this.state;

    let imgObj = {};

    if (destination !== "") {
      imgObj = this.state.locations.filter(
        loc => loc.name === this.state.destination
      );
    }

    return (
      <div className="App">
        <Header />
        <div className="content">
          <TourHeader />
          <Form
            locations={locations}
            seasons={seasons}
            selectDestination={this.selectDestination}
          />
          {this.state.destination ? <Image imgObj={imgObj[0]} /> : ""}
        </div>
      </div>
    );
  }
}

export default App;

import { Component } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import LibraryCard from "./components/LibraryCard";
import { libraryCardsData } from "./data";
import SimpleSlider from "./components/Carousel";
import TimelineContainer from "./components/TimelineContainer";
import "./App.css";

class App extends Component {
  state = {
    selectedCountry: "India",
  };

  onChangeSelectOption = (value) => {
    this.setState({ selectedCountry: value });
  };

  render() {
    const { selectedCountry } = this.state;
    return (
      <div className="app">
        <Sidebar />
        <div className="main-container">
          <Header />
        </div>
        <ul className="library-cards-container">
          {libraryCardsData.map((eachItem) => (
            <LibraryCard key={eachItem.id} details={eachItem} />
          ))}
        </ul>
        <div className="second-container">
          <div className="caorusel-and-more-container">
            <SimpleSlider />
            <button type="button" className="view-more-button">
              View More
            </button>
          </div>
          <TimelineContainer
            selectedCountry={selectedCountry}
            className="timeline-container"
            onChangeSelectOption={this.onChangeSelectOption}
          />
        </div>
      </div>
    );
  }
}

export default App;

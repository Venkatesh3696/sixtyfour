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

  render() {
    return (
      <div className="app">
        <Sidebar />
        <div className="main-container">
          <Header />
          <ul className="library-cards-container">
            {libraryCardsData.map((eachItem) => (
              <LibraryCard key={eachItem.id} details={eachItem} />
            ))}
          </ul>
          <div className="second-container">
            <SimpleSlider />
            <TimelineContainer />
          </div>
          <button className="view-more-button">View More</button>
        </div>
      </div>
    );
  }
}

export default App;

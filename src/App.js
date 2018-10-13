import React from "react";
import MenuCourse from "./containers/MenuCourse";
import "./App.css";

class App extends React.Component {
  render() {
    const { currentCourse, onClick } = this.props;

    return (
      <div className="app">
        <MenuCourse />
        <button onClick={() => onClick(currentCourse + 1)}>Next course</button>
      </div>
    );
  }
}

export default App;

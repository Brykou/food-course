import React from "react";
import MenuCourse from "./containers/MenuCourse";
import Breadcrumb from "./containers/Breadcrumb";
import Button from "@material-ui/core/Button";
import "./App.css";

class App extends React.Component {
  render() {
    const { currentCourse, onClick } = this.props;

    return (
      <div className="app">
        <Breadcrumb />
        <MenuCourse />
        <Button
          size="large"
          variant="contained"
          color="primary"
          onClick={() => onClick(currentCourse - 1)}
          disabled={currentCourse === 0}
          className="previousButton"
        >
          Previous
        </Button>
        <Button
          size="large"
          variant="contained"
          color="primary"
          onClick={() => onClick(currentCourse + 1)}
        >
          Next
        </Button>
      </div>
    );
  }
}

export default App;

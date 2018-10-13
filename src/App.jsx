import React from "react";
import PropTypes from "prop-types";
import Breadcrumb from "./containers/Breadcrumb";
import Summary from "./containers/Summary";
import Menu from "./containers/Menu";
import "./App.css";

class App extends React.Component {
  static propTypes = {
    isFinished: PropTypes.bool.isRequired
  };

  render() {
    const { isFinished } = this.props;

    return (
      <div className="app">
        <Breadcrumb />
        {isFinished ? <Summary /> : <Menu />}
      </div>
    );
  }
}

export default App;

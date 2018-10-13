import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import MenuCourse from "../containers/MenuCourse";

class Menu extends React.Component {
  static propTypes = {
    numberOfCourse: PropTypes.number.isRequired,
    currentCourse: PropTypes.number.isRequired,
    updateCourse: PropTypes.func.isRequired,
    validateOrder: PropTypes.func.isRequired
  };

  render() {
    const {
      numberOfCourse,
      currentCourse,
      updateCourse,
      validateOrder
    } = this.props;
    return (
      <div className="menu">
        <MenuCourse />
        <Button
          size="large"
          variant="contained"
          color="primary"
          onClick={() => updateCourse(currentCourse - 1)}
          disabled={currentCourse === 0}
          className="previousButton"
        >
          Previous
        </Button>
        {currentCourse < numberOfCourse - 1 ? (
          <Button
            size="large"
            variant="contained"
            color="primary"
            onClick={() => updateCourse(currentCourse + 1)}
          >
            Next
          </Button>
        ) : (
          <Button
            size="large"
            variant="contained"
            color="primary"
            onClick={validateOrder}
          >
            Validate
          </Button>
        )}
      </div>
    );
  }
}

export default Menu;

import React from "react";
import PropTypes from "prop-types";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import "./Breadcrumb.css";

class Breadcrumb extends React.Component {
  static propTypes = {
    numberOfCourse: PropTypes.number.isRequired,
    currentCourse: PropTypes.number.isRequired,
    selectedDishes: PropTypes.array.isRequired,
    isFinished: PropTypes.bool.isRequired,
    updateCourse: PropTypes.func.isRequired,
    validateOrder: PropTypes.func.isRequired
  };

  shouldComponentUpdate(nextProps) {
    // Abort re render when user select or unselect dishes on the same page
    if (
      nextProps.selectedDishes.length > 0 &&
      this.props.selectedDishes.length > 0 &&
      nextProps.currentCourse === this.props.currentCourse &&
      !nextProps.isFinished
    ) {
      return false;
    }
    return true;
  }

  render() {
    const {
      numberOfCourse,
      currentCourse,
      isFinished,
      selectedDishes,
      updateCourse,
      validateOrder
    } = this.props;
    return (
      <Stepper
        nonLinear
        activeStep={isFinished ? numberOfCourse : currentCourse}
        className="breadcrumb"
      >
        {[...Array(numberOfCourse).keys()].map(key => (
          <Step key={key}>
            <StepButton disabled={isFinished} onClick={() => updateCourse(key)}>
              {`Course ${key + 1}`}
            </StepButton>
          </Step>
        ))}
        <Step>
          <StepButton
            disabled={selectedDishes.length === 0 || isFinished}
            onClick={validateOrder}
          >
            {`Summary`}
          </StepButton>
        </Step>
      </Stepper>
    );
  }
}

export default Breadcrumb;

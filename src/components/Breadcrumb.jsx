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
    isFinished: PropTypes.bool.isRequired,
    updateCourse: PropTypes.func.isRequired,
    validateOrder: PropTypes.func.isRequired
  };

  render() {
    const {
      numberOfCourse,
      currentCourse,
      isFinished,
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
          <StepButton onClick={validateOrder}>{`Summary`}</StepButton>
        </Step>
      </Stepper>
    );
  }
}

export default Breadcrumb;

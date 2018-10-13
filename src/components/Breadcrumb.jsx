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
    onClick: PropTypes.func.isRequired
  };

  render() {
    const { numberOfCourse, currentCourse, onClick } = this.props;
    return (
      <Stepper nonLinear activeStep={currentCourse} className="breadcrumb">
        {[...Array(numberOfCourse).keys()].map(key => (
          <Step key={key}>
            <StepButton onClick={() => onClick(key)}>
              {`Course number ${key + 1}`}
            </StepButton>
          </Step>
        ))}
      </Stepper>
    );
  }
}

export default Breadcrumb;

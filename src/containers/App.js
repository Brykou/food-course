import { connect } from "react-redux";
import App from "../App";

const mapStateToProps = state => ({
  numberOfCourse: state.numberOfCourse,
  currentCourse: state.currentCourse,
  isFinished: state.isFinished
});

export default connect(
  mapStateToProps,
  null
)(App);

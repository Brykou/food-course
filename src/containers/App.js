import { connect } from "react-redux";
import { updateCourse } from "../actions";
import App from "../App";

const mapStateToProps = state => ({
  numberOfCourse: state.numberOfCourse,
  currentCourse: state.currentCourse
});
const mapDispatchToProps = dispatch => ({
  onClick: id => dispatch(updateCourse(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

import { connect } from "react-redux";
import { updateCourse, validateOrder } from "../actions";
import Breadcrumb from "../components/Breadcrumb";

const mapStateToProps = state => ({
  numberOfCourse: state.numberOfCourse,
  currentCourse: state.currentCourse,
  isFinished: state.isFinished,
  selectedDishies: state.selectedDishies
});

const mapDispatchToProps = dispatch => ({
  updateCourse: id => dispatch(updateCourse(id)),
  validateOrder: () => dispatch(validateOrder())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Breadcrumb);

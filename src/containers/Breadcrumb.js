import { connect } from "react-redux";
import { updateCourse } from "../actions";
import Breadcrumb from "../components/Breadcrumb";

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
)(Breadcrumb);

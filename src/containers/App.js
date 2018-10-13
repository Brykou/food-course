import { connect } from "react-redux";
import App from "../App";

const mapStateToProps = state => ({
  isFinished: state.isFinished
});

export default connect(
  mapStateToProps,
  null
)(App);

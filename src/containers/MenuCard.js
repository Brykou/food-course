import { connect } from "react-redux";
import { selectFood } from "../actions";
import MenuCard from "../components/MenuCard";

const mapStateToProps = (state, ownProps) => ({
  isSelected: state.selectedDishes.includes(ownProps.id)
});

const mapDispatchToProps = dispatch => ({
  onSelect: id => dispatch(selectFood(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuCard);

import { connect } from "react-redux";
import Summary from "../components/Summary";

const mapStateToProps = state => ({
  orderList: state.dishes.filter(dish => state.selectedDishes.includes(dish.id))
});

export default connect(
  mapStateToProps,
  null
)(Summary);

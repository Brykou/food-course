import { connect } from "react-redux";
import Summary from "../components/Summary";

const mapStateToProps = state => ({
  orderList: state.dishes.filter(dish =>
    state.selectedDishies.includes(dish.id)
  )
});

export default connect(
  mapStateToProps,
  null
)(Summary);

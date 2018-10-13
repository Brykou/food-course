import { connect } from "react-redux";
import MenuCourse from "../components/MenuCourse";

const mapStateToProps = state => ({
  dishes: state.dishes.filter(dish =>
    dish.courseType.includes(state.currentCourse)
  )
});

export default connect(
  mapStateToProps,
  null
)(MenuCourse);

import { SELECT_FOOD, UPDATE_CURRENT_COURSE, VALIDATE_ORDER } from "../actions";
import getData from "../data";

const initialState = {
  dishes: getData(),
  selectedDishies: [],
  numberOfCourse: 6,
  currentCourse: 0,
  isFinished: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_FOOD:
      return Object.assign({}, state, {
        selectedDishies: state.selectedDishies.includes(action.payload)
          ? state.selectedDishies.filter(id => id !== action.payload)
          : state.selectedDishies.concat(action.payload)
      });
    case UPDATE_CURRENT_COURSE:
      return Object.assign({}, state, {
        currentCourse: action.payload
      });
    case VALIDATE_ORDER:
      return Object.assign({}, state, {
        isFinished: true
      });
    default:
      return state;
  }
};

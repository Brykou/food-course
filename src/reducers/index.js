import { SELECT_FOOD, UPDATE_CURRENT_COURSE } from "../actions";
import getData from "../data";

const initialState = {
  dishes: getData(),
  selectedDishies: [],
  numberOfCourse: 6,
  currentCourse: 0
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
    default:
      return state;
  }
};

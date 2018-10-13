export const SELECT_FOOD = "select_food";
export const UPDATE_CURRENT_COURSE = "update_current_course";
export const VALIDATE_ORDER = "validate_order";

export function selectFood(id) {
  return {
    type: SELECT_FOOD,
    payload: id
  };
}

export function updateCourse(id) {
  return {
    type: UPDATE_CURRENT_COURSE,
    payload: id
  };
}

export function validateOrder() {
  return {
    type: VALIDATE_ORDER,
    payload: null
  };
}

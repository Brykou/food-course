export const SELECT_FOOD = "select_food";
export const UPDATE_CURRENT_COURSE = "update_current_course";

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

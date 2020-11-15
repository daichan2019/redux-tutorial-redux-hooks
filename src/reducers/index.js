import { combineReducers } from "redux";
import todos from "./todos";
import visibilityfilter from "./visibilityFilter";

export default combineReducers({
  todos,
  visibilityfilter,
});

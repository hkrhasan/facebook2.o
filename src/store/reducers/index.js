import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import themReducer from "./them.reducer";

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  user: userReducer,
  theme: themReducer,
});

export default rootReducer;

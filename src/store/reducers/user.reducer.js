const initialState = {
  name: "talib",
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "user/update":
      return action.payload;
    case "user/delete":
      return null;
    default:
      return state;
  }
}

const initialState = "light";


export default function themReducer(state = initialState, action) {
  switch (action.type) {
    case "theme/toggle":
      return state === "light" ? "dark" : "light";
    default:
      return state;
  }
}

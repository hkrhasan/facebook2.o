export const SET_USER = "SET_USER";
export const LOGOUT = "LOGOUT";
export const SET_LOADING = "SET_LOADING";

export const selectUser = (state) => state.user;

const initialState = {
  user: JSON.parse(localStorage.getItem("user")),
  isLoading: true,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return { ...state, user: action.payload };
    case LOGOUT:
      localStorage.removeItem("user");
      return { ...state, user: null };
    case SET_LOADING:
      return { ...state, isLoading: !state.isLoading };
    default:
      return state;
  }
}

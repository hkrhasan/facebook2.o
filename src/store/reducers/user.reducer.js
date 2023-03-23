export const SET_USER = "SET_USER";
export const LOGOUT = "LOGOUT";
export const SET_LOADING = "SET_LOADING";

export const selectUser = (state) => state.user;

const initialState = {
  user: null,
  isLoading: true,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case LOGOUT:
      return { ...state, user: null };
    case SET_LOADING:
      return { ...state, isLoading: !state.isLoading };
    default:
      return state;
  }
}

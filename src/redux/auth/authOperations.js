import axios from "axios";
import authActions from "./authActions";
axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com/";

const token = {
  set(token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common["Authorization"] = "";
  },
};

const register = (credentials) => (dispatch) => {
  dispatch(authActions.registerRequest());
  axios
    .post("/users/signup", credentials)
    .then((res) => {
      token.set(res.data.token);
      dispatch(authActions.registerSuccess(res.data));
    })
    .catch((error) => dispatch(authActions.registerError(error)));
};
const login = (credentials) => (dispatch) => {
  dispatch(authActions.loginRequest());
  axios
    .post("/users/login", credentials)
    .then((res) => {
      token.set(res.data.token);
      dispatch(authActions.loginSuccess(res.data));
    })
    .catch((error) => dispatch(authActions.loginError(error)));
};

const logout = () => (dispatch) => {
  dispatch(authActions.logoutRequest());
  axios
    .post("/users/logout")
    .then(() => {
      token.unset();
      dispatch(authActions.logoutSuccess());
    })
    .catch((error) => dispatch(authActions.logoutError(error)));
};
const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();
  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());
  axios
    .get("/users/current")
    .then((res) => dispatch(authActions.getCurrentUserSuccess(res.data)))
    .catch((error) => dispatch(authActions.getCurrentUserError(error)));
};
export default {
  register,
  login,
  logout,
  getCurrentUser,
};

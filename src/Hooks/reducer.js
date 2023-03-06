let user = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : "";
let email = localStorage.getItem("email")
  ? JSON.parse(localStorage.getItem("email"))
  : "";
let name = localStorage.getItem("name")
  ? JSON.parse(localStorage.getItem("name"))
  : "";
let password = localStorage.getItem("")
  ? JSON.parse(localStorage.getItem(""))
  : "";
let uid = localStorage.getItem("")
  ? JSON.parse(localStorage.getItem(""))
  : "";

export const initialState = {
  loading: false,
  errorMessage: null,

  user: "" || user,
  email: "" || email,
  password: "" || password,
  name: "" || name,
  uid: "" || uid,
};

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return {
        ...initialState,
        loading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...initialState,
        user: action.payload.user,
        loading: true,
      };
    case "LOGOUT":
      return {
        ...initialState,
        user: "",
        password: "",
      };
    case "LOGIN_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };
    case "IS_LOADING":
      return {
        ...initialState,
        loading: action.payload.loading,
      };
    case "REQUEST_SIGNUP":
      return {
        ...initialState,
        loading: true
    };
    case "SIGNUP_SUCCESS":
      return {
        ...initialState,
        user: action.payload.user,
        name: action.payload.name,
        email: action.payload.email,
        uid: action.payload.uid,
        loading: true
    };
    case "SIGNUP_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
    };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};


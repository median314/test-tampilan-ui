let user = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : "";

let cart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : "";
let wishlist = localStorage.getItem("wishlist")
  ? JSON.parse(localStorage.getItem("wishlist"))
  : "";

export const initialState = {
  loading: false,
  errorMessage: null,

  user: "" || user,
  cart: "" || cart,
  wishlist: "" || wishlist
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
        loading: true
    };
    case "SIGNUP_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
    };
    case "REQUEST_ADD_CART":
      return{
        ...initialState,
        loading: true
      };
    case "ADD_CART":
      return{
        ...initialState,
        cart: action.cart
      };
    case "ADD_CART_SUCCESS":
      return{
        ...initialState,
        loading: true
      }
    case "ADD_BUTTON":
      return{
        ...initialState,
        cart: action.payload.quantity
      }
    case "SUBTRACT_BUTTON":
      return{
        ...initialState,
        cart: action.payload.quantity
      }
    case "ADD_WISHLIST":
      return{
        ...initialState,
        wishlist: action
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};


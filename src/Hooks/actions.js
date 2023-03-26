import {
    signOut,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    updateProfile,
    updatePhoneNumber,
  } from "firebase/auth";
import { auth, db } from '../Config/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';


export const LoginUser = async(dispatch, payload) => {
    var store = require("store")
    const userData = {
        email: payload.email, 
        password: payload.password
    };

    try {
       dispatch({type: "REQUEST_LOGIN"});
       store.clearAll()

       let response = await signInWithEmailAndPassword(
        auth, 
        userData.email,
        userData.password)

       let data = response

       const ref = doc(db, "users", data.user.uid)
       const docSnap = await getDoc(ref);

       if(auth.currentUser.photoURL === null) {
        const user = docSnap.data()
        updateProfile(auth.currentUser, {
            displayName: user.name,
            photoURL: user.profileImageUrl
        })
        updatePhoneNumber(auth.currentUser, user.phone)
       }

       if(data.user) {
        dispatch({
            type: "LOGIN_SUCCESS",
            payload: {
                user: data.user
            },
        });
        localStorage.setItem("user", JSON.stringify(data.user));

        const docRef = doc(db, "cart", data.user.uid);
        const docSnap = await getDoc(docRef);

        
        if (docSnap.exists()) {

            const arrCart = {
                cart: docSnap.data().data
            }

        localStorage.setItem("cart", JSON.stringify(arrCart));

        } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        }

        const getWishlist = doc(db, "wishlist", data.user.uid);
        const wishlist = await getDoc(getWishlist);
        
        
        if (wishlist.exists()) {
            const arrWishlist = {
                wishlist: wishlist.data().data
            }
        localStorage.setItem("wishlist", JSON.stringify(arrWishlist));

        } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        }

        return data
       } else {
        return false
       }
    } catch (error) {
        dispatch({type: "LOGIN_ERROR", errorMessage: {error: error}})
    }
}

export async function logout(dispatch) {
    var store = require("store");
  
    dispatch({ type: "LOGOUT" });
    signOut(auth);
    sessionStorage.removeItem("user", "cart", "wishlist", "checkout");
    store.clearAll();
  }

export const addToCart = async (dispatch, payloadCart) => {
    dispatch({
        type: "ADD_CART",
        cart: payloadCart
    })
        localStorage.setItem('cart', JSON.stringify(payloadCart))
   
    console.log(payloadCart, 'ini cart');

    return payloadCart
}

export const addToWishlist = (dispatch, payloadWishlist) => {
    dispatch({
        type: "ADD_WISHLIST",
        wishlist: payloadWishlist
    })

    localStorage.setItem("wishlist", JSON.stringify(payloadWishlist))

    return payloadWishlist
}
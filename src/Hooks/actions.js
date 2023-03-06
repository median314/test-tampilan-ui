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

        return data
       } else {
        return false
       }
    } catch (error) {
        dispatch({type: "LOGIN_ERROR", errorMessage: {error: error}})
    }
}

export const signUp = async (dispatch, signUpPayload) => {
    const userData = {
        name: signUpPayload.name,
        email: signUpPayload.email,
        password: signUpPayload.password
    }

    try {
        dispatch({type: "REQUEST_SIGNUP"})

        await createUserWithEmailAndPassword(auth, userData.email, userData.password, userData.name)
        .then(async (userCredential) => {
            await updateProfile(auth.currentUser, {
              displayName: userData.name,
            });

            const user = userCredential.user;
            await setDoc(doc(db, "users", user.uid), {
              name: userData.name,
              email: user.email,
              uid_user: user.uid,
              createdAt: new Date(),
            });

        dispatch({type: "SIGNUP_SUCCESS"})
        })

    } catch (error) {
      console.log(error, 'ini error');  
    }
}

export async function logout(dispatch) {
    var store = require("store");
  
    dispatch({ type: "LOGOUT" });
    signOut(auth);
    sessionStorage.removeItem("user");
    store.clearAll();
  }
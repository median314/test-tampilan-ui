// import { useToast } from "@chakra-ui/react";
// import {
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
// import {
//   collection,
//   doc,
//   getDoc,
//   getDocs,
//   onSnapshot,
//   query,
// } from "firebase/firestore";
// import React, { useEffect, useState } from "react";
// import { auth, db } from "../Config/firebase";
// import AuthContext from "./authContext";
// import store from "store";
// import { useNavigate } from "react-router-dom";

// const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState();
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState();
//   const [saved, setSaved] = useState();

//   const navigate = useNavigate();
//   const toast = useToast();

//   const signUp = (email, password) => {
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   const login = (email, password) => {
//     return signInWithEmailAndPassword(auth, email, password)
//       .then(async (response) => {
//         try {
//           const docRef = doc(db, "users", response.user.uid);
//           const docSnap = await getDoc(docRef);
//           if (docSnap.exists()) {
//             store.set("user_data", docSnap.data());
//           } else {
//             console.log("No Document");
//           }
//         } catch (error) {
//           console.log(error, "ini error");
//         }

//         toast({
//           position: "top",
//           title: "Success Login",
//           description: `Success Login account ${response.user.displayName} `,
//           status: "success",
//           duration: 10000,
//           isClosable: true,
//           position: "top-right",
//         });

//         return navigate("/");
//       })
//       .catch((error) => {
//         toast({
//           position: "top",
//           title: "Something wrong !",
//           description: error.message,
//           status: "error",
//           duration: 10000,
//           isClosable: true,
//           position: "top-right",
//         });
//       });
//   };

//   const signOut = () => {
//     return auth.signOut();
//   };

//   const getUser = () => {
//     return auth.currentUser;
//   };

//   const getUserStorage = () => {
//     return store.get("user_data");
//   };

//   const getProductsData = async () => {
//     try {
//       const q = query(collection(db, "products"));
//       const querySnapshot = await getDocs(q);
//       const arrProduct = [];

//       querySnapshot.forEach((doc) => {
//         let forData = doc.data();
//         forData.id = doc.id;
//         arrProduct.push(forData);
//       });
//       setProducts(arrProduct);
//     } catch (error) {
//       console.log(error, "ini error");
//     }
//   };

//   useEffect(() => {
//     getCart();
//     getSavedProduct();

//     return () => {};
//   }, [currentUser]);

//   // useEffect(() => {
//   //   onAuthStateChanged(auth, (user) => {
//   //     setCurrentUser(user);
//   //     getProductsData();
//   //     // getCart(user);
//   //   });
//   // }, []);

//   const getCart = async () => {
//     try {
//       onSnapshot(doc(db, "cart", currentUser?.uid), (doc) => {
//         setCart(doc.data());
//       });
//     } catch (error) {
//       console.log(error, "ini error");
//     }

//     return cart;
//   };

//   const getSavedProduct = async () => {
//     try {
//       onSnapshot(doc(db, "wishlist", currentUser?.uid), (doc) => {
//         setSaved(doc.data());
//       });
//     } catch (error) {
//       console.log(error, "ini error");
//     }

//     return cart;
//   };

//   const value = {
//     currentUser,
//     products,
//     cart,
//     saved,
//     signUp,
//     login,
//     signOut,
//     getUser,
//     getProductsData,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// export default AuthProvider;

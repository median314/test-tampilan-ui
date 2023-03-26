import { onAuthStateChanged } from 'firebase/auth'
import { doc, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../Config/firebase';

export const useAuthentication = () => {
    const [currentUser, seCurrentUser] = useState({});

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              seCurrentUser(user);
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              // ...
            } else {
              // User is signed out
              // ...
              // console.log("signed out");
            }
        });

        return unsubscribe;
    },[])

  return currentUser
}

// export default useAuthentication

// export const useCart = () => {
//   const [cart, setCart] = useState([])

//     const getCart = async () => {
//       try {
//           onSnapshot(doc(db, "cart", currentUser?.uid), (doc) => {
//               setCart(doc.data());
//           });
      
//       } catch (error) {
//           console.log(error, "ini error");
//       }
      
//   };
// }
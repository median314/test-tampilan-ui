import { doc, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../Config/firebase';
import { useAuthentication } from './useAuthentication';

const useCart = () => {

    const currentUser = useAuthentication()
    
    const [cart, setCart] = useState({});

    console.log(currentUser, 'ini curser');

    useEffect(() => {
        const getCart = async () => {
            try {
                onSnapshot(doc(db, "cart", currentUser?.uid), (doc) => {
                    setCart(doc.data());
                });
            
            } catch (error) {
                console.log(error, "ini error");
            }
            
        };
        return getCart;
                },[])

                
            return cart
            }

export default useCart
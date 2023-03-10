import React, { createContext, useContext, useReducer, useState } from 'react'
import {AuthReducer, initialState} from './reducer'

const AuthStateContext = createContext()
const AuthDispatchContext = createContext()

const CartStateContext = createContext()
const CartDispatchContext = createContext()

const WishlistStateContext = createContext()
const WishlistDispatchContext = createContext()

export function useAuthState() {
    const context = useContext(AuthStateContext);
    if (context === undefined) {
        throw new Error("useAuthState must be used within a AuthProvider")
    }
    return context
}

export function useAuthDispatch() {
    const context = useContext(AuthDispatchContext)
    if (context === undefined){
        throw new Error("useAuthDispatch must be used within a AuthProvider")
    }
    return context
}

export function useCartState() {
    const context = useContext(CartStateContext);
    if (context === undefined) {
        throw new Error("useCartState must be used within a AuthProvider")
    }
    return context
}

export function useCartDispatch() {
    const context = useContext(CartDispatchContext)
    if (context === undefined){
        throw new Error("useCartDispatch must be used within a AuthProvider")
    }
    return context
}

export function useWishlistState() {
    const context = useContext(WishlistStateContext);
    if (context === undefined) {
        throw new Error("useWishlistState must be used within a AuthProvider")
    }
    return context
}

export function useWishlistDispatch() {
    const context = useContext(WishlistDispatchContext)
    if (context === undefined){
        throw new Error("useCartDispatch must be used within a AuthProvider")
    }
    return context
}

export const AuthProvider = ({children}) => {
    const [user, dispatch] = useReducer(AuthReducer, initialState)

    return(
        <AuthStateContext.Provider value={user}>
            <AuthDispatchContext.Provider value={dispatch}>
                {children}
            </AuthDispatchContext.Provider>
        </AuthStateContext.Provider>
    )
}

export const AuthCartProvider = ({children}) => {
    const [cart, dispatch] = useReducer(AuthReducer, initialState)

    return(
        <CartStateContext.Provider value={cart}>
            <CartDispatchContext.Provider value={dispatch}>
                {children}
            </CartDispatchContext.Provider>
        </CartStateContext.Provider>
    )
}

export const AuthWishlistProvider = ({children}) => {
    const [wishlist, dispatch] = useReducer(AuthReducer, initialState)

    return(
        <WishlistStateContext.Provider value={wishlist}>
            <WishlistDispatchContext.Provider value={dispatch}>
                {children}
            </WishlistDispatchContext.Provider>
        </WishlistStateContext.Provider>
    )
}
import React, { createContext, useState } from 'react'

const store = createContext();

export default function Context({ children }) {
    const [cart, setCart] = useState([]);

    function addtoCart(product) {
        const productExist = cart.find((item) => item.id === product.id);
        console.log(productExist)

        if (productExist) {
            const updateCart = cart.map((item) => {
                return item.id === product.id ? { ...item, qty: item.qty + 1 } : item
            })
            console.log(updateCart)
            setCart(updateCart)
        } else {
            setCart([...cart, product]);
        }
    }

    function increaseQty(id) {
        const productExist = cart.find((item) => item.id === id);
        if (productExist) {
            const updateCart = cart.map((item) => {
                return item.id === id ? { ...item, qty: item.qty + 1 } : item
            })
            setCart(updateCart)
        }

    }

    function decreaseQty(id) {
        const productExist = cart.find((item) => item.id === id);
        if (productExist) {
            const updateCart = cart.map((item) => {
                return item.id === id ? { ...item, qty: item.qty - 1 } : item
            })
            setCart(updateCart)
        }

    }

    function removeHandler(id) {
        const updateCart = cart.filter((item) => item.id != id);
        setCart(updateCart)
    }


    return (
        <store.Provider value={{ cart, addtoCart, decreaseQty, increaseQty,removeHandler }}>
            {children}
        </store.Provider>
    )
}


export { store }
import React, { createContext, useState } from 'react'
const store = createContext();

export default function Context({ children }) {
    const [count, setCount] = useState(20);
    console.log("Hello from Context")


    function updateState(flag) {
        if (flag == 1) {
            setCount(count + 1)
        } else {
            setCount(count - 1)
        }
    }

    return (
        <store.Provider value={{ count, updateState }}>
            {children}
        </store.Provider>
    )
}




export { store }

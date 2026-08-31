import React, { useContext } from 'react'
import { store } from './Context'

export default function Z() {
    const { updateState } = useContext(store);
    console.log("Hello from Z")
    return (
        <div>Z <button onClick={()=>updateState(2)}>+</button></div>
    )
}

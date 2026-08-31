import React, { useContext } from 'react'
import { store } from './Context'

export default function D() {
    const { count } = useContext(store);
   
    return (
        <div>D:{count}</div>
    )
}

import React, { useContext } from 'react'
import D from './D'
import { store } from './Context'

export default function C() {
    const { count } = useContext(store)
    return (
        <div>C {count}
            <D />
        </div>
    )
}

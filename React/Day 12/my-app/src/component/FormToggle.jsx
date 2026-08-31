'use client'

import React,{useState} from 'react'

export default function FormToggle() {
 const [toggle, setToggle] = useState(true);

    return (
        <button onClick={() => setToggle(!toggle)}>Click</button>

    )
}

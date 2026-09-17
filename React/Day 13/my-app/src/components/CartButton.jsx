'use client'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function CartButton() {
    return (

        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold duration-300">
            Add to cart
        </button>
    )
}

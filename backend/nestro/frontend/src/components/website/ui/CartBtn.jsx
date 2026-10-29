'use client'
import { addtoCart } from '@/redux/features/cartSlice'
import React from 'react'
import { useDispatch } from 'react-redux'


export default function CartBtn({ product = {} }) {
    const dispatcher = useDispatch()

    const cartHandler = () => {
        // if(user !==null){
        //     //add-to-cart
        // }

        dispatcher(addtoCart({
            name: product.name,
            salePrice: product.salePrice,
            originalPrice: product.originalPrice,
            thumbnail: product.thumbnail,
            qty: 1,
            id: product._id
        }))
    }


    return (
        <button onClick={cartHandler} className="rounded-lg bg-[#8B5E3C] px-4 py-2 text-xs font-medium text-white transition hover:bg-[#6F472D]">
            Add to Cart
        </button>
    )
}
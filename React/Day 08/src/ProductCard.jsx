import React from 'react'

export default function ProductCard({product}) {
  return (
    <div className='p-4 gap-2 flex flex-col shadow bg-white '>
        <img className='w-full' src={product.image || "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/1474793c-a59c-4ce6-8f32-7b13f8e9ca8c.png"} alt="" />
        <span>8 MINS</span>
        <p>{product.name || "Dummy Card"}</p>
        <p>132 sheets</p>
        <div className='w-full flex justify-between'>
            <span>₹ {product.price}</span>
            <button className='bg-yellow-500 px-4 rounded-2xl font-bold cursor-pointer'>ADD</button>
        </div>
    </div>
  )
}

import React from 'react'

export default function layout({children}) {
  return (
    <div >
        <div className='bg-red-500 p-10'>Search Bar</div>
        {children}
    </div>
  )
}

import React from 'react'

export default function Header() {
  return (
   <header className='w-full z-50 shadow sticky top-0 left-0'>
    {/* Desktop Header */}
    <div className='bg-yellow-400 p-4 h-1.5 hidden md:flex'>

    </div>
    {/* Mobile Header */}
    <div className='bg-red-500 p-4 flex md:hidden'>

    </div>
   </header>
  )
}

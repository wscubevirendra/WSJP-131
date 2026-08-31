import React from 'react'
import Link from 'next/link'

export default function Header() {
    return (
        <div className='w-full py-10 flex shadow justify-between p-4 bg-amber-400 text-black font-bold '>
            <h4>Logo</h4>
            <nav>
                <ul className='flex gap-20'>
                    <Link href="/"><li>Home</li></Link>
                    <Link href="/about"><li>About</li></Link>
                    <Link href="/contact"><li>Contact</li></Link>
                    <Link href="/gallery"><li>Gallery</li></Link>
                   
                </ul>
            </nav>

        </div>
    )
}

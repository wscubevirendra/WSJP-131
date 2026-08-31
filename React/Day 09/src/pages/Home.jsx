import React from 'react'
import Hero from '../components/Hero'

export default function Home() {
    return (
        <>
            <Hero
            className='bg-[#111827] text-white'
                title="Premium Furniture for Modern Living"
                subtitle="Discover beautifully crafted furniture designed for comfort, style, and everyday living. Shop sofas, beds, dining tables, chairs, and home décor at affordable prices..">
                <button className="px-4 py-1 bg-yellow-500 rounded-2xl">Click</button>
                </Hero>
            

        </>
    )
}

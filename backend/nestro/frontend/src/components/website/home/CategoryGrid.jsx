import { fetchCategory } from '@/api/category'
import Link from 'next/link';
import React from 'react'

export default async function CategoryGrid() {
    const response = await fetchCategory({ status: true, limit: 4 });
    return (
        <div className='max-w-7xl mx-auto p-4'>
            <h2>Shop by Category</h2>
            <div className='grid grid-cols-7 gap-4'>
                {
                    response?.category.map((item) => {
                        return (
                            <Link href={`/store?category=${item.slug}`}>
                                <div className='flex flex-col  gap-1'>
                                    <div className='w-[100px] h-[100px]'>
                                        <img className='rounded-full w-full h-full border' src={item.image} alt="" />
                                    </div>
                                    <span>{item.name}</span>
                                </div>
                            </Link>

                        )
                    })
                }

            </div>
        </div>
    )
}

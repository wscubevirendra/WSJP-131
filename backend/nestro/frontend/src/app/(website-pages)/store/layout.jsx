import FilterSidebar from '@/components/website/store/FilterSidebar'
import SortBar from '@/components/website/store/SortBar'
import StoreHero from '@/components/website/store/StoreHero'
import Container from '@/components/website/ui/Container'
import PromoBanner from "@/components/website/store/PromoBanner";
import Pagination from "@/components/website/store/Pagination";


import React from 'react'

export default function Layout({ children }) {
    return (
        <Container>
            <StoreHero />
            <div className='w-full flex my-10 gap-10'>
                <FilterSidebar />
                <div className='flex-1 '>
                    <SortBar />
                    {children}
                    <PromoBanner />

                    <Pagination />

                </div>

            </div>

        </Container>
    )
}
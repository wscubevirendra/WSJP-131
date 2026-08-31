import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import axios from 'axios'
import ProductCard from '../components/ProductCard';
import ProductCardSkeleton from '../components/ProductCardSkeleton';
import { Link, useParams } from 'react-router-dom';

export default function Store() {
    const { slug } = useParams();
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchProducts = async () => {
        try {
            //fetch all product 
            let API = "https://dummyjson.com/products?limit=194"
            setLoading(true)

            //fetch according to category

            if (slug != null) {
                API = `https://dummyjson.com/products/category/${slug}`
            }
            const response = await axios.get(API);
            setProducts(response.data.products)
        } catch (error) {
            setProducts([])
        } finally {
            setLoading(false)
        }
    }


    const fetchCategories = async () => {
        try {
            const response = await axios("https://dummyjson.com/products/categories");
            setCategories(response.data)

        } catch (error) {
            setCategories([])
        }
    }

    useEffect(
        () => {
            fetchProducts();
        },
        [slug]
    )

    useEffect(
        () => {
            fetchCategories();
        },
        []
    )




    return (
        <>
            <Hero
                className='bg-[#111827] text-white'
                title="Premium Furniture for Modern Living"
                subtitle="Discover beautifully crafted furniture designed for comfort, style, and everyday living. Shop sofas, beds, dining tables, chairs, and home décor at affordable prices..">
                <div className='flex gap-4'>
                    <button className="px-4 py-1 bg-yellow-500 rounded-2xl">Click</button>
                    <button className="px-4 py-1 bg-yellow-500 rounded-2xl">Click</button>
                </div>
            </Hero>

            <div className='max-w-7xl grid grid-cols-5 gap-4 p-4 mx-auto'>

                <div className='col-span-1'>
                    <ul>
                        <Link to="/store">
                            <li className={` ${slug == null ? 'bg-[#111827] text-white font-bold scale-105 ' : 'bg-white'} p-2  rounded-lg shadow border text-center my-3 hover:scale-105 duration-100 cursor-pointer`}>All</li>
                        </Link>
                        {
                            categories.map((cat, index) => {
                                return (
                                    <Link to={`/store/${cat.slug}`}>
                                        <li className={` ${slug === cat.slug ? 'bg-[#111827] text-white font-bold scale-105 ' : 'bg-white'} p-2  rounded-lg shadow border text-center my-3 hover:scale-105 duration-100 cursor-pointer`}>{cat.name}</li>
                                    </Link>

                                )
                            })
                        }
                    </ul>

                </div>
                <div className='col-span-4 grid grid-cols-3 gap-4'>
                    {

                        loading ?

                            [1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
                                <ProductCardSkeleton key={index} />
                            ))

                            :
                            products.map((data, index) => {
                                return <ProductCard product={data} />
                            })
                    }
                </div>





            </div>



        </>
    )
}

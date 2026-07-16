import React, { useEffect, useState } from 'react'
import Card from './Card'

export default function App() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json()
    setProducts(data.products);
  }


  useEffect(
    () => {
      getProducts()
    },
    []
  )



  return (
    <div className='container-xl'>
      <div className="row">
        {
          products.map((data, index) => {
            return <Card key={data.id} thumbnail={data.thumbnail} title={data.title} />
          })
        }


      </div>

    </div>
  )
}

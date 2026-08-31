import React from 'react'
import ProductSection from './ProductSection'
import CategoryCard from './CategoryCard'
import Header from './Header'

export default function App() {

  const categories = [
    "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-12/paan-corner_web.png",
    "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-3_9.png"
  ]

  const drinks = [
    {
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1774843894847-448.png",
      name: "Jayanti Banta Jeera Masala Soda",
      qty: "24 pcs",
      price: "23"
    },
    {
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1774843894847-448.png",
      name: "Jayanti Banta Jeera Masala Soda",
      qty: "24 pcs",
      price: "23"
    },
    {
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1774843894847-448.png",
      name: "Jayanti Banta Jeera Masala Soda",
      qty: "24 pcs",
      price: "23"
    },
    {
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1774843894847-448.png",
      name: "Jayanti Banta Jeera Masala Soda",
      qty: "24 pcs",
      price: "23"
    }
    , {
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1774843894847-448.png",
      name: "Jayanti Banta Jeera Masala Soda",
      qty: "24 pcs",
      price: "23"
    }
    , {
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1774843894847-448.png",
      name: "Jayanti Banta Jeera Masala Soda",
      qty: "24 pcs",
      price: "23"
    }
    , {
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1774843894847-448.png",
      name: "Jayanti Banta Jeera Masala Soda",
      qty: "24 pcs",
      price: "23"
    }
    , {
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1774843894847-448.png",
      name: "Jayanti Banta Jeera Masala Soda",
      qty: "24 pcs",
      price: "23"
    }
  ]


  return (
    <>
      <Header />
      <div className="grid grid-cols-7 gap-4">
        {
          categories.map((img, index) => {
            return <CategoryCard image={img} />
          })
        }

      </div>
      <ProductSection title="Rolling paper & tobacco" products={drinks} />
      <ProductSection title="Mouth fresheners" products={drinks} />
      <ProductSection title="Cold Drinks & Juices" products={drinks} />
    </>

  )

}

import express from "express";
const server = express();

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2499,
    category: "Electronics",
    stock: 25,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    description: "High-quality wireless headphones with noise cancellation."
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 3999,
    category: "Electronics",
    stock: 18,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    description: "Modern smartwatch with fitness and health tracking."
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 2999,
    category: "Footwear",
    stock: 32,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    description: "Comfortable running shoes designed for daily workouts."
  },
  {
    id: 4,
    name: "Laptop Backpack",
    price: 1499,
    category: "Bags",
    stock: 40,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    description: "Durable backpack with dedicated laptop compartment."
  },
  {
    id: 5,
    name: "Classic T-Shirt",
    price: 799,
    category: "Clothing",
    stock: 50,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    description: "Comfortable cotton t-shirt suitable for everyday wear."
  },
  {
    id: 6,
    name: "Coffee Mug",
    price: 399,
    category: "Home",
    stock: 75,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d",
    description: "Minimal ceramic coffee mug for home and office."
  },
  {
    id: 7,
    name: "Gaming Keyboard",
    price: 1899,
    category: "Electronics",
    stock: 15,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
    description: "RGB mechanical gaming keyboard with responsive keys."
  },
  {
    id: 8,
    name: "Denim Jacket",
    price: 2499,
    category: "Clothing",
    stock: 20,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5",
    description: "Classic denim jacket with a modern casual fit."
  },
  {
    id: 9,
    name: "Bluetooth Speaker",
    price: 1599,
    category: "Electronics",
    stock: 28,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
    description: "Portable Bluetooth speaker with powerful sound."
  },
  {
    id: 10,
    name: "Leather Wallet",
    price: 999,
    category: "Accessories",
    stock: 35,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93",
    description: "Premium leather wallet with multiple card slots."
  }
];


server.get("/product", (req, res) => {

    res.status(200).json({
        message:"Product Data",
        products
    })
})




server.listen(5000, () => {
    console.log("Server is start.... ")
})


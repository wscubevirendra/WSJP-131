import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Shop() {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [selectedImage, setSelectedImage] = useState("");
  const [loading, setLoading] = useState(true);

  async function fetchProduct() {
    try {
      setLoading(true);

      const response = await axios.get(
        `https://dummyjson.com/products/${id}`
      );

      setProduct(response.data);
      setSelectedImage(response.data.thumbnail);
    } catch (error) {
      console.log(error);
      setProduct({});
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto py-20 text-center text-2xl">
        Loading...
      </div>
    );
  }


  return (
    <section className="max-w-7xl mx-auto px-5 py-10">

      {/* Top Section */}

      <div className="grid lg:grid-cols-2 gap-12">

        {/* Images */}

        <div>

          <div className="border rounded-xl overflow-hidden">
            <img
              src={selectedImage}
              alt={product.title}
              className="w-full h-[550px] object-contain"
            />
          </div>

          <div className="grid grid-cols-4 gap-4 mt-5">

            {product.images?.map((image, index) => (
              <img
                key={index}
                src={image}
                alt=""
                onClick={() => setSelectedImage(image)}
                className={`h-28 w-full object-cover rounded-lg border cursor-pointer ${
                  selectedImage === image
                    ? "border-black"
                    : "border-gray-300"
                }`}
              />
            ))}

          </div>

        </div>

        {/* Product Details */}

        <div className="space-y-6">

          <span className="inline-block bg-gray-100 px-3 py-1 rounded-full text-sm capitalize">
            {product.category}
          </span>

          <h1 className="text-4xl font-bold">
            {product.title}
          </h1>

          <p className="text-gray-600 leading-7">
            {product.description}
          </p>

          <div className="flex items-center gap-5">

            <span className="text-4xl font-bold">
              ${product.price}
            </span>

            <span className="line-through text-gray-500 text-xl">
              ${originalPrice}
            </span>

            <span className="bg-red-100 text-red-600 px-3 py-1 rounded">
              {product.discountPercentage}% OFF
            </span>

          </div>

          <div className="flex items-center gap-10">

            <div>
              ⭐ {product.rating}
            </div>

            <div>
              Stock :
              <span className="font-semibold ml-1">
                {product.stock}
              </span>
            </div>

            <div className="text-green-600 font-semibold">
              {product.availabilityStatus}
            </div>

          </div>

          <div className="grid grid-cols-2 gap-5 border rounded-xl p-5">

            <div>
              <h4 className="font-semibold">Brand</h4>
              <p>{product.brand}</p>
            </div>

            <div>
              <h4 className="font-semibold">SKU</h4>
              <p>{product.sku}</p>
            </div>

            <div>
              <h4 className="font-semibold">Weight</h4>
              <p>{product.weight} kg</p>
            </div>

            <div>
              <h4 className="font-semibold">Minimum Order</h4>
              <p>{product.minimumOrderQuantity}</p>
            </div>

          </div>

          <div>

            <h3 className="font-semibold mb-3">
              Tags
            </h3>

            <div className="flex flex-wrap gap-3">

              {product.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}

            </div>

          </div>

          <div className="flex gap-5 pt-4">

            <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-900">
              Add To Cart
            </button>

            <button className="border px-8 py-3 rounded-lg hover:bg-gray-100">
              Buy Now
            </button>

          </div>

        </div>

      </div>

      {/* Specifications */}

      <div className="grid md:grid-cols-2 gap-8 mt-16">

        <div className="border rounded-xl p-6">

          <h2 className="text-2xl font-bold mb-5">
            Product Specifications
          </h2>

          <table className="w-full">

            <tbody className="divide-y">

              <tr>
                <td className="py-3 font-medium">Brand</td>
                <td>{product.brand}</td>
              </tr>

              <tr>
                <td className="py-3 font-medium">Category</td>
                <td>{product.category}</td>
              </tr>

              <tr>
                <td className="py-3 font-medium">Width</td>
                <td>{product.dimensions?.width} cm</td>
              </tr>

              <tr>
                <td className="py-3 font-medium">Height</td>
                <td>{product.dimensions?.height} cm</td>
              </tr>

              <tr>
                <td className="py-3 font-medium">Depth</td>
                <td>{product.dimensions?.depth} cm</td>
              </tr>

              <tr>
                <td className="py-3 font-medium">Weight</td>
                <td>{product.weight} kg</td>
              </tr>

            </tbody>

          </table>

        </div>

        <div className="border rounded-xl p-6">

          <h2 className="text-2xl font-bold mb-5">
            Shipping & Policy
          </h2>

          <table className="w-full">

            <tbody className="divide-y">

              <tr>
                <td className="py-3 font-medium">Shipping</td>
                <td>{product.shippingInformation}</td>
              </tr>

              <tr>
                <td className="py-3 font-medium">Warranty</td>
                <td>{product.warrantyInformation}</td>
              </tr>

              <tr>
                <td className="py-3 font-medium">Return</td>
                <td>{product.returnPolicy}</td>
              </tr>

              <tr>
                <td className="py-3 font-medium">Barcode</td>
                <td>{product.meta?.barcode}</td>
              </tr>

            </tbody>

          </table>

          <div className="mt-6">

            <h3 className="font-semibold mb-3">
              QR Code
            </h3>

            <img
              src={product.meta?.qrCode}
              alt=""
              className="w-36 h-36 border rounded-lg"
            />

          </div>

        </div>

      </div>

      {/* Reviews */}

      <div className="mt-10">

        <h2 className="text-3xl font-bold mb-8">
          Customer Reviews
        </h2>

        <div className="space-y-2">

          {product.reviews?.map((review, index) => (

            <div
              key={index}
              className="border rounded-xl p-2"
            >

              <div className="flex justify-between items-center">

                <div>

                  <h3 className="font-semibold">
                    {review.reviewerName}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {review.reviewerEmail}
                  </p>

                </div>

                <div className="text-yellow-500 font-semibold">
                  ⭐ {review.rating}/5
                </div>

              </div>

              <p className="my-4 text-gray-700">
                {review.comment}
              </p>

              <p className="text-sm text-gray-500">
                {new Date(review.date).toLocaleDateString()}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
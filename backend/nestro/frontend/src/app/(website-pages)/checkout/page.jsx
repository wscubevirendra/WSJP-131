"use client";

import { useState, useEffect } from "react";
import { MapPin, CreditCard, Banknote, ShoppingBag } from "lucide-react";
import { useSelector } from "react-redux";
import { client } from "@/utils/helper";
import { toast } from 'sonner';
import { useRouter } from "next/navigation";
import { useRazorpay, RazorpayOrderOptions } from "react-razorpay";


export default function CheckoutPage() {
  const { error, isLoading, Razorpay } = useRazorpay();

  const router = useRouter()
  const [selectedAddress, setSelectedAddress] = useState(1);
  const [addresses, setAddresses] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const cart = useSelector((store) => store.cart);
  const cartItems = cart.items || [];
  const finaltotal = cart.final_total
  const originaltotal = cart.original_total
  const shipping = 0;
  const total = finaltotal + shipping;
  const saving = originaltotal - finaltotal;
  const [user, setUser] = useState(null)
  const getProfile = async () => {
    try {
      const response = await client.get("user/get-me");
      if (response.data.success) {
        setAddresses(response?.data?.user?.addresses)
        //user manage by redux
      } else {
        setAddresses([])
      }

    } catch (error) {
      setAddresses([])
    }
  }

  useEffect(() => {
    getProfile()
  }, [])


  const handlePlaceOrder = async () => {
    const address = addresses.find(
      (item) => item.id === selectedAddress
    );

    try {
      const data = {
        shippingAddress: addresses[selectedAddress],
        paymentMethod
      }
      const orderResponse = await client.post("order/place", data);
      if (!orderResponse.data.success) {
        return toast.error(orderResponse.data.message)
      }

      if (paymentMethod === "cod") {
        toast.success(orderResponse.data.message)
        router.push(`/thank_you?orderId=${orderResponse.data.order_id}`)
      } else {
        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
          currency: "INR",
          name: "Nestro",
          description: "Test Transaction",
          order_id: orderResponse.data.razorpay_order_id, // Generate order_id on server
          handler: (response) => {
            client.post("order/payment-verify", response).then((verifyResponse) => {
              console.log(verifyResponse,"veriry repsonse")
            }).catch((err) => {
              console.log(err,"error")
            })
           
          },
          prefill: {
            name: "Dheeraj",
            email: "dheerajbeniwal84@gmail.com",
            contact: "7878534733",
          },
          theme: {
            color: "#F37254",
          },
        };

        const razorpayInstance = new Razorpay(options);
        razorpayInstance.open();
      }

    } catch (error) {
      console.log(error)
      return toast.error("Internal Server Error")
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF9F7] py-10">
      <div className="mx-auto max-w-7xl px-4">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-gray-900">
            Checkout
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Review your order and complete your purchase
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

          {/* LEFT SIDE */}
          <div className="space-y-6 lg:col-span-2">

            {/* Address */}
            <section className="rounded-xl border border-[#E8E0D5] bg-white p-6">
              <div className="mb-5 flex items-center gap-3">
                <MapPin className="text-[#8B5E3C]" size={22} />

                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Delivery Address
                  </h2>

                  <p className="text-sm text-gray-500">
                    Select your delivery address
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {addresses.map((address, index) => (
                  <label
                    key={address._id}
                    className={`block cursor-pointer rounded-lg border p-4 transition ${selectedAddress === index
                      ? "border-[#8B5E3C] bg-[#FAF9F7]"
                      : "border-gray-200"
                      }`}
                  >
                    <div className="flex gap-3">
                      <input
                        type="radio"
                        name="address"
                        checked={selectedAddress === index}
                        onChange={() =>
                          setSelectedAddress(index)
                        }
                        className="mt-1 accent-[#8B5E3C]"
                      />

                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-gray-900">
                            {address.fullName}
                          </h3>

                          <span className="text-sm text-gray-500">
                            {address.mobile}
                          </span>
                        </div>

                        <p className="mt-2 text-sm leading-6 text-gray-600">
                          {address.addressLine}, {address.city},{" "}
                          {address.state}, {address.country} -{" "}
                          {address.pincode}
                        </p>
                      </div>
                    </div>
                  </label>
                ))}
              </div>

              <button className="mt-5 rounded-lg border border-[#8B5E3C] px-5 py-2.5 text-sm font-medium text-[#8B5E3C] hover:bg-[#8B5E3C] hover:text-white">
                + Add New Address
              </button>
            </section>

            {/* Payment Method */}
            <section className="rounded-xl border border-[#E8E0D5] bg-white p-6">
              <div className="mb-5 flex items-center gap-3">
                <CreditCard className="text-[#8B5E3C]" size={22} />

                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Payment Method
                  </h2>

                  <p className="text-sm text-gray-500">
                    Select your preferred payment method
                  </p>
                </div>
              </div>

              <div className="space-y-3">

                {/* COD */}
                <label
                  className={`flex cursor-pointer items-center gap-4 rounded-lg border p-4 ${paymentMethod === "cod"
                    ? "border-[#8B5E3C] bg-[#FAF9F7]"
                    : "border-gray-200"
                    }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={(e) =>
                      setPaymentMethod(e.target.value)
                    }
                    className="accent-[#8B5E3C]"
                  />

                  <Banknote
                    size={22}
                    className="text-[#8B5E3C]"
                  />

                  <div>
                    <h3 className="font-medium text-gray-900">
                      Cash on Delivery
                    </h3>

                    <p className="text-sm text-gray-500">
                      Pay when your order is delivered
                    </p>
                  </div>
                </label>

                {/* Online Payment */}
                <label
                  className={`flex cursor-pointer items-center gap-4 rounded-lg border p-4 ${paymentMethod === "online"
                    ? "border-[#8B5E3C] bg-[#FAF9F7]"
                    : "border-gray-200"
                    }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="online"
                    checked={paymentMethod === "online"}
                    onChange={(e) =>
                      setPaymentMethod(e.target.value)
                    }
                    className="accent-[#8B5E3C]"
                  />

                  <CreditCard
                    size={22}
                    className="text-[#8B5E3C]"
                  />

                  <div>
                    <h3 className="font-medium text-gray-900">
                      Online Payment
                    </h3>

                    <p className="text-sm text-gray-500">
                      Pay securely using Razorpay
                    </p>
                  </div>
                </label>

              </div>
            </section>
          </div>

          {/* RIGHT SIDE */}
          <aside className="h-fit rounded-xl border border-[#E8E0D5] bg-white p-6 lg:sticky lg:top-6">

            <div className="mb-5 flex items-center gap-3">
              <ShoppingBag
                size={22}
                className="text-[#8B5E3C]"
              />

              <h2 className="text-lg font-semibold text-gray-900">
                Order Summary
              </h2>
            </div>

            {/* Cart Items */}
            <div className="space-y-4 border-b border-gray-200 pb-5">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between gap-4"
                >
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-xs text-gray-500">
                      Qty: {item.qty}
                    </p>
                  </div>

                  <p className="text-sm font-medium text-gray-900">
                    ₹{(item.salePrice * item.qty).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>

            {/* Price Details */}
            <div className="space-y-3 border-b border-gray-200 py-5">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">
                  original total
                </span>

                <span className="font-medium">
                  ₹{originaltotal.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">
                  final total
                </span>

                <span className="font-medium">
                  ₹{finaltotal.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">
                  Saving
                </span>

                <span className="font-medium">
                  ₹{saving.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">
                  Shipping
                </span>

                <span className="font-medium">
                  {shipping === 0
                    ? "Free"
                    : `₹${shipping}`}
                </span>
              </div>
            </div>

            {/* Total */}
            <div className="flex justify-between py-5">
              <span className="text-lg font-semibold">
                Total
              </span>

              <span className="text-xl font-bold text-[#8B5E3C]">
                ₹{total.toLocaleString()}
              </span>
            </div>

            {/* Place Order */}
            <button
              onClick={handlePlaceOrder}
              className="w-full rounded-lg bg-[#8B5E3C] py-3.5 font-semibold text-white transition hover:bg-[#70482f]"
            >
              Place Order
            </button>

            <p className="mt-3 text-center text-xs text-gray-500">
              By placing your order, you agree to our terms
              and conditions.
            </p>
          </aside>

        </div>
      </div>
    </main>
  );
}
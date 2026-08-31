import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer className="border-t p-4 bg-[#111827]">
 
        <div className="py-16 grid text-white grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              FurniStore
            </h2>

            <p className="text-white leading-7">
              Premium furniture designed for modern homes.
              Quality craftsmanship, affordable prices, and
              fast delivery.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Shop
            </h3>

            <ul className="space-y-3">
              <li><Link to="/shop">All Products</Link></li>
              <li><Link to="/categories">Categories</Link></li>
              <li><Link to="/new-arrivals">New Arrivals</Link></li>
              <li><Link to="/offers">Offers</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Company
            </h3>

            <ul className="space-y-3">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Contact
            </h3>

            <ul className="space-y-3 text-white">
              <li>Email: support@furnistore.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Mon - Sat: 9:00 AM - 7:00 PM</li>
              <li>Jaipur, Rajasthan, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t py-6 flex justify-between items-center">
          <p className="text-gray-600">
            © 2026 FurniStore. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/privacy-policy">
              Privacy
            </Link>

            <Link href="/terms-and-conditions">
              Terms
            </Link>

            <Link href="/refund-policy">
              Refund Policy
            </Link>
          </div>
        </div>
    
    </footer>
  );
}
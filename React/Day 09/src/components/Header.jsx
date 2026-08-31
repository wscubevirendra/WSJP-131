import { useContext } from "react";
import { Link } from "react-router-dom"
import { store } from "../context/Context";


const navLinks = [
  { name: "Home", href: "/" },
  { name: "Store", href: "/store" },
  { name: "Categories", href: "/categories" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const { cart } = useContext(store);
  console.log(cart)
  return (
    <header className="border-b p-4 bg-[#111827] text-white">
      <div className="h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          FurniStore
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className="text-white hover:text-yellow-500  transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 border rounded-md">
            Login
          </button>
<Link to="/cart">
  <button className="px-5 py-2 bg-black text-white rounded-md">
            Cart ({cart.length || 0})
          </button>
</Link>
        
        </div>
      </div>

    </header>
  );
}
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center sticky top-0 z-50">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold">
        MiniStore
      </Link>

      {/* Navigation links */}
      <div className="flex items-center gap-6">
        <Link to="/">Home</Link>
        <Link to="/cart" className="font-semibold">
          🛒 Cart ({cart.length})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

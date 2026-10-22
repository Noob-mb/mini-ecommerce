import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } =
    useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-white p-4 mb-3 rounded shadow"
            >
              <h3>{item.name}</h3>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, parseInt(e.target.value))
                  }
                  className="border w-16 text-center rounded"
                />
                <p>₹{item.price * item.quantity}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  ✖
                </button>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center mt-4">
            <h3 className="font-bold text-xl">Total: ₹{total}</h3>
            <Link
              to="/checkout"
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

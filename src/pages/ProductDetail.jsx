import { useParams } from "react-router-dom";
import products from "../data/products";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex flex-col md:flex-row gap-6 bg-white p-4 rounded shadow">
        <img
          src={product.image}
          alt={product.name}
          className="w-60 rounded self-center"
        />
        <div>
          <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
          <p className="text-gray-700 mb-2">Category: {product.category}</p>
          <h3 className="text-xl font-semibold mb-4">₹{product.price}</h3>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <h3 className="text-xl font-bold mt-6 mb-3">Similar Products</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products
          .filter(
            (p) => p.category === product.category && p.id !== product.id
          )
          .map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
      </div>
    </div>
  );
};

export default ProductDetail;

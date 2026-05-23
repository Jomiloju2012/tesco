import React from "react";
import { BiCartDownload } from "react-icons/bi";
import { CartContext } from "../../context/context";

function ProductCard({ product }) {
  const clubPrice = product.clubCardAvailable
    ? (product.price - product.clubCardDiscount).toFixed(2)
    : null;

  const { cartItems, setCartItems } = React.useContext(CartContext);

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 hover:-translate-y-1 hover:shadow-2xl transition-transform duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover object-center"
      />

      <div className="p-5 space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">
              {product.name}
            </h3>
            <p className="mt-1 text-sm text-slate-500">{product.description}</p>
          </div>
          {product.clubCardAvailable && (
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
              Club Card
            </span>
          )}
        </div>

        <div className="flex items-baseline justify-between gap-4">
          <div>
            <p className="text-sm text-slate-500">Price</p>
            <p className="text-2xl font-bold text-slate-900">
              ${product.price.toFixed(2)}
            </p>
          </div>
          {clubPrice && (
            <div className="text-right">
              <p className="text-sm text-emerald-600">Club price</p>
              <p className="text-xl font-semibold text-emerald-800">
                ${clubPrice}
              </p>
            </div>
          )}
        </div>

        <button
          className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          onClick={() => {
            const existingItem = cartItems.find((item) => item.id === product.id);
            if (existingItem) {
              setCartItems(
                cartItems.map((item) =>
                  item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                )
              );
            } else {
              setCartItems([...cartItems, { ...product, quantity: 1 }]);
            }
          }}
        >
          <BiCartDownload size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

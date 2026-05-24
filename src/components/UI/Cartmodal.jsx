import React from 'react'
import { CartContext } from '../../context/context';

export default function Cartmodal({ setShowCart }) {
  const { cartItems, clearCart } = React.useContext(CartContext);

  const handleClearCart = () => {
    const approve = window.confirm('Are you sure you want to clear your cart?');
    if (approve) {
      clearCart();
    }
  };

  return (
    <div className="h-screen bg-blue-700/30 flex justify-center items-center fixed top-0 left-0 w-full z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg min-w-[18rem] relative max-w-xl w-full">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={() => setShowCart(false)}
        >
          X
        </button>
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="mb-4">Your cart is empty.</p>
        ) : (
          <div className="space-y-4 mb-4">
            {cartItems.map((item) => (
              <div key={item.id} className="border rounded-md flex gap-3 p-3">
                <img src={item.image} alt={item.name} className="h-16 w-16 object-cover rounded" />
                <div>
                  <p className="font-semibold text-blue-600">{item.name}</p>
                  <p>Quantity: <span className="font-bold text-amber-300">{item.quantity}</span></p>
                  <p className="text-sm text-slate-600">Price: ${item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex gap-3 flex-wrap">
          <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
            Checkout
          </button>
          <button
            onClick={handleClearCart}
            className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
}

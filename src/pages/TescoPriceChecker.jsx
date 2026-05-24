import React, { useState, useEffect, useMemo } from 'react';

// --- SIMULATED EXTERNAL DATABASE / API LAYER ---
const fetchProductsFromAPI = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Tesco British Whole Milk 4 Pint', price: 1.65, clubcardPrice: 1.45, category: 'Groceries', tag: 'Essentials' },
        { id: 2, name: 'Tesco Bananas 5-Pack', price: 0.85, clubcardPrice: null, category: 'Groceries', tag: 'Fresh Produce' },
        { id: 3, name: 'Cathedral City Mature Cheddar 350g', price: 4.20, clubcardPrice: 2.75, category: 'Groceries', tag: 'Clubcard Deal' },
        { id: 4, name: 'Tesco Finest Wood Fired Margherita Pizza', price: 4.75, clubcardPrice: 3.50, category: 'Groceries', tag: 'Finest Range' },
        { id: 5, name: 'Tesco Bakery All Butter Croissants 4-Pack', price: 2.50, clubcardPrice: 2.00, category: 'Bakery', tag: 'Freshly Baked' },
        { id: 6, name: 'F&F Men’s Classic Crew Neck T-Shirt', price: 8.00, clubcardPrice: 6.50, category: 'F&F Clothing', tag: 'New Season' },
        { id: 7, name: 'Tesco Luxury Cotton Bath Towel', price: 12.00, clubcardPrice: 10.00, category: 'Tesco Home', tag: 'Home Value' },
        { id: 8, name: 'Colgate Triple Action Toothpaste 100ml', price: 1.95, clubcardPrice: 1.20, category: 'Health & Beauty', tag: 'Everyday Low Price' },
      ]);
    }, 600);
  });
};

export default function Homepage() {
  // --- STATE MANAGEMENT ---
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [postcode, setPostcode] = useState('');
  const [slotStatus, setSlotStatus] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isMobileCartOpen, setIsMobileCartOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);

  // --- LOCAL STORAGE STATE INITIALISATION ---
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('tesco_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [isClubcardMember, setIsClubcardMember] = useState(() => {
    const savedClubcard = localStorage.getItem('tesco_clubcard_active');
    return savedClubcard ? JSON.parse(savedClubcard) : false;
  });

  // --- DATA FETCHING EFFECTS ---
  useEffect(() => {
    let isMounted = true;
    fetchProductsFromAPI().then((data) => {
      if (isMounted) {
        setProducts(data);
        setIsLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, []);

  // --- LOCAL STORAGE SYNCHRONISATION ---
  useEffect(() => {
    localStorage.setItem('tesco_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('tesco_clubcard_active', JSON.stringify(isClubcardMember));
  }, [isClubcardMember]);

  // --- CATEGORIES DEFINITION ---
  const categories = [
    { name: 'All', icon: '🛒', color: 'bg-gray-100' },
    { name: 'Groceries', icon: '🍎', color: 'bg-green-50 border-green-200' },
    { name: 'Bakery', icon: '🍞', color: 'bg-amber-50 border-amber-200' },
    { name: 'F&F Clothing', icon: '👕', color: 'bg-purple-50 border-purple-200' },
    { name: 'Tesco Home', icon: '🏡', color: 'bg-pink-50 border-pink-200' },
    { name: 'Health & Beauty', icon: '🧼', color: 'bg-teal-50 border-teal-200' },
  ];

  // --- INTERACTIVE ACTIONS ---
  const triggerNotification = (message) => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 3000);
  };

  const handleCheckSlots = (e) => {
    e.preventDefault();
    if (!postcode.trim()) {
      setSlotStatus('❌ Enter postcode.');
      return;
    }
    setSlotStatus(`✨ Slots available near ${postcode.toUpperCase()}!`);
    triggerNotification(`📍 Delivery area updated: ${postcode.toUpperCase()}`);
  };

  const toggleClubcard = () => {
    setIsClubcardMember(!isClubcardMember);
    triggerNotification(!isClubcardMember ? '💳 Clubcard Prices applied live!' : 'Clubcard detached.');
  };

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    triggerNotification(`🛒 Added ${product.name}`);
  };

  const updateQuantity = (id, amount) => {
    setCart(prevCart => prevCart.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + amount;
        return newQty > 0 ? { ...item, quantity: newQty } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const clearCart = () => {
    setCart([]);
    triggerNotification('🗑️ Basket cleared.');
  };

  // --- MEMOISED DATA COMPILATION ---
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  const cartSummary = useMemo(() => {
    let totalItems = 0;
    let totalPrice = 0;
    let savings = 0;

    cart.forEach(item => {
      totalItems += item.quantity;
      const currentPrice = (isClubcardMember && item.clubcardPrice) ? item.clubcardPrice : item.price;
      totalPrice += currentPrice * item.quantity;
      if (isClubcardMember && item.clubcardPrice) {
        savings += (item.price - item.clubcardPrice) * item.quantity;
      }
    });

    return { totalItems, totalPrice: totalPrice.toFixed(2), savings: savings.toFixed(2) };
  }, [cart, isClubcardMember]);

  // --- REUSABLE BASKET MARKUP COMPONENT ---
  const BasketContent = ({ isSidebar = false }) => (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-gray-200">
          <h3 className="text-md font-black text-gray-900 flex items-center gap-2">
            <span>🛒 Shopping Basket</span>
            <span className="bg-[#00539C] text-white text-xs px-2 py-0.5 rounded-full font-bold">{cartSummary.totalItems}</span>
          </h3>
          {!isSidebar && (
            <button onClick={() => setIsMobileCartOpen(false)} className="text-gray-400 hover:text-gray-700 text-lg">✕</button>
          )}
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-16 text-gray-400 space-y-2">
            <div className="text-4xl">📥</div>
            <p className="text-xs font-bold">Your basket is empty</p>
            <p className="text-[11px] max-w-50 mx-auto text-gray-400">Click "Add to Basket" on shelf stock items to update your metrics live.</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100 overflow-y-auto max-h-[50vh] mt-2 custom-scrollbar">
            {cart.map(item => {
              const activePrice = (isClubcardMember && item.clubcardPrice) ? item.clubcardPrice : item.price;
              return (
                <div key={item.id} className="py-2.5 flex items-center justify-between gap-2 text-xs">
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-800 truncate">{item.name}</h4>
                    <p className="text-[11px] text-gray-500">
                      £{activePrice.toFixed(2)} 
                      {isClubcardMember && item.clubcardPrice && <span className="text-emerald-600 ml-1 font-bold">(Clubcard Match)</span>}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button onClick={() => updateQuantity(item.id, -1)} className="w-5 h-5 rounded border border-gray-300 bg-gray-50 hover:bg-gray-100 flex items-center justify-center font-bold text-gray-600">-</button>
                    <span className="font-black w-4 text-center text-gray-800">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} className="w-5 h-5 rounded border border-gray-300 bg-gray-50 hover:bg-gray-100 flex items-center justify-center font-bold text-gray-600">+</button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {cart.length > 0 && (
        <div className="border-t border-gray-200 pt-3 mt-4 space-y-2">
          {parseFloat(cartSummary.savings) > 0 && (
            <div className="flex justify-between text-emerald-700 bg-emerald-50 p-2 rounded text-[11px] font-bold border border-emerald-200">
              <span>Clubcard Savings Statement:</span>
              <span>-£{cartSummary.savings}</span>
            </div>
          )}
          <div className="flex justify-between font-black text-sm text-gray-900 px-1">
            <span>Estimated Total:</span>
            <span className="text-[#00539C]">£{cartSummary.totalPrice}</span>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button onClick={clearCart} className="border border-gray-300 hover:bg-gray-50 text-gray-600 py-2 rounded font-bold text-xs transition">Clear</button>
            <button onClick={() => { triggerNotification('🎉 Checkout Success simulation logged!'); setCart([]); }} className="bg-[#EE1C2E] hover:bg-red-700 text-white py-2 rounded font-bold text-xs transition text-center shadow-sm">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans relative">
      
      {/* GLOBAL TOAST ALERTS */}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {notifications.map(n => (
          <div key={n.id} className="bg-[#00539C] text-white px-4 py-2 rounded shadow-lg text-sm animate-fade-in-up"> 

            {n.message}
          </div>
        ))}
      </div>
      {/* HEADER */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-[#00539C] flex items-center gap-2">
            <span>Tesco Price Checker</span>
            <span className="text-sm font-normal text-gray-400">Live Demo</span>
          </h1>
          <div className="flex items-center gap-4">
            <button onClick={toggleClubcard} className={`px-3 py-1 rounded text-xs font-bold transition ${isClubcardMember ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'border border-gray-300 hover:bg-gray-50 text-gray-600'}`}>
              {isClubcardMember ? 'Clubcard Active' : 'Activate Clubcard'}
            </button>
            <button onClick={() => setIsMobileCartOpen(true)} className="relative text-gray-600 hover:text-gray-900 text-lg">
              
        🛒
              {cartSummary.totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#00539C] text-white text-xs px-1.5 py-0.5 rounded-full font-bold">{cartSummary.totalItems}</span>
              )}  
            </button>
          </div>
        </div>
      </header>
      {/* MAIN CONTENT */}
      <main className="max-w-6xl mx-auto px-4 py-6 flex gap-6">
        {/* LEFT COLUMN */}
        <div className="flex-1">
          {/* POSTCODE CHECKER */}
          <form onSubmit={handleCheckSlots} className="mb-6">
            <div className="flex items-center gap-2">
              <input 
                type="text" 
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                placeholder="Enter your postcode for delivery slots" 
                className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00539C]"
              />
              <button type="submit" className="bg-[#00539C] hover:bg-blue-700 text-white px-4 py-2 rounded text-sm transition">Check Slots</button>
            </div>
            {slotStatus && <p className="mt-2 text-sm font-bold text-gray-700">{slotStatus}</p>}
          </form>   
        {/* CATEGORY FILTERS */}
          <div className="flex items-center gap-3 mb-4 overflow-x-auto custom-scrollbar py-1">
            {categories.map(cat => (  
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold transition whitespace-nowrap ${selectedCategory === cat.name ? `${cat.color} border` : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
          {/* PRODUCT SHELF */}
          {isLoading ? (
            <div className="text-center py-16 text-gray-400">
              <div className="animate-pulse space-y-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-24 bg-gray-200 rounded w-full mx-auto"></div>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => {  
                const activePrice = (isClubcardMember && product.clubcardPrice) ? product.clubcardPrice : product.price;
                return (
                  <div key={product.id} className="bg-white p-4 rounded shadow-sm flex flex-col justify-between">
                    <div> 
                      <h3 className="font-bold text-gray-800 mb-1">{product.name}</h3>
                      <p className="text-sm text-gray-500 mb-2">{product.tag}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-[#00539C]">£{activePrice.toFixed(2)}</span>
                        {isClubcardMember && product.clubcardPrice && (
                          <span className="text-emerald-600 text-xs font-bold">(Clubcard Price)</span>
                        )}
                      </div>
                    </div>
                    <button onClick={() => addToCart(product)} className="mt-4 bg-[#EE1C2E] hover:bg-red-700 text-white py-2 rounded font-bold text-xs transition text-center shadow-sm">
                      Add to Basket
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        {/* RIGHT COLUMN - BASKET SUMMARY */}
        <aside className="w-full md:w-80 bg-white p-4 rounded shadow-sm hidden md:block">
          <BasketContent />
        </aside>
      </main> 
      {/* MOBILE BASKET SLIDE-OVER */}
      {isMobileCartOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsMobileCartOpen(false)}></div>
          <div className="relative bg-white w-full max-w-sm ml-auto p-4 h-full">
            <BasketContent isSidebar />
          </div>
        </div>
      )}
    </div>
  );
}
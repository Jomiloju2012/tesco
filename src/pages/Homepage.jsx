import React from 'react';

const categories = [
  { id: 1, name: 'Fresh Food', icon: '🍎', bgColor: 'bg-green-50' },
  { id: 2, name: 'Bakery', icon: '🍞', bgColor: 'bg-amber-50' },
  { id: 3, name: 'Frozen Food', icon: '🍦', bgColor: 'bg-cyan-50' },
  { id: 4, name: 'Drinks', icon: '🥤', bgColor: 'bg-orange-50' },
  { id: 5, name: 'Baby & Kids', icon: '👶', bgColor: 'bg-purple-50' },
  { id: 6, name: 'Household', icon: '🧽', bgColor: 'bg-blue-50' },
];

const specialOffers = [
  {
    id: 101,
    name: 'Tesco British Whole Milk 4 Pint (2.27L)',
    price: '£1.65',
    clubcardPrice: '£1.45',
    image: '🥛',
  },
  {
    id: 102,
    name: 'Tesco Bananas 5 Pack',
    price: '£0.85',
    clubcardPrice: '£0.70',
    image: '🍌',
  },
  {
    id: 103,
    name: 'Cadbury Dairy Milk Sharing Bar 180g',
    price: '£2.50',
    clubcardPrice: '£1.75',
    image: '🍫',
  },
  {
    id: 104,
    name: 'Heinz Beanz 4 x 415g',
    price: '£4.00',
    clubcardPrice: '£3.25',
    image: '🥫',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      
      {/* 1. BRAND HERO BANNER */}
      <section className="bg-[#00539C] text-white py-12 px-6 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto z-10 relative">
          <span className="bg-[#EE1C25] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            Online Grocery Shopping
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-4 mb-2 tracking-tight">
            Every Little Helps
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-6">
            Get your favourite Tesco essentials delivered straight to your kitchen table.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-[#EE1C25] hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-200">
              Book a Slot
            </button>
            <button className="bg-white hover:bg-gray-100 text-[#00539C] font-bold py-3 px-6 rounded-lg shadow-md transition duration-200">
              Browse Aisles
            </button>
          </div>
        </div>
        {/* Background decorative accent */}
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500 rounded-full opacity-20 pointer-events-none"></div>
      </section>

      {/* 2. CLUBCARD EXCLUSIVE INFORMATION */}
      <section className="max-w-7xl mx-auto my-8 px-4">
        <div className="bg-linear-to-r from-blue-900 to-[#00539C] text-white p-6 rounded-2xl shadow-lg flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-yellow-400 text-blue-900 font-black text-2xl px-4 py-2 rounded-xl transform -rotate-3 shadow-md">
              CLUBCARD
            </div>
            <div>
              <h2 className="text-xl font-bold">Unlock Clubcard Prices</h2>
              <p className="text-sm text-blue-200">Save up to 50% instantly on hundreds of popular household products.</p>
            </div>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <button className="flex-1 md:flex-initial bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-2.5 px-5 rounded-lg text-sm transition">
              Sign In
            </button>
            <button className="flex-1 md:flex-initial bg-transparent border border-white hover:bg-white/10 text-white font-medium py-2.5 px-5 rounded-lg text-sm transition">
              Register Free
            </button>
          </div>
        </div>
      </section>

      {/* 3. INFORMATIVE FEATURE STRIP */}
      <section className="max-w-7xl mx-auto my-8 px-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="text-2xl mb-1">🚚</div>
          <h3 className="font-bold text-sm">Flexible Home Delivery</h3>
          <p className="text-xs text-gray-500">Choose 1-hour windows that fit your daily schedule.</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="text-2xl mb-1">🚗</div>
          <h3 className="font-bold text-sm">Free Click+Collect</h3>
          <p className="text-xs text-gray-500">Pick up your shopping from over 500 select UK stores.</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="text-2xl mb-1">🛡️</div>
          <h3 className="font-bold text-sm">Aldi Price Match</h3>
          <p className="text-xs text-gray-500">We match hundreds of basic prices to keep costs low.</p>
        </div>
      </section>

      {/* 4. SHOP BY CATEGORY */}
      <section className="max-w-7xl mx-auto my-12 px-4">
        <h2 className="text-2xl font-extrabold mb-6 tracking-tight flex items-center gap-2">
          Shop by Category <span className="text-xs font-normal text-gray-500">(View All)</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              className={`${cat.bgColor} hover:scale-105 transition-transform duration-200 cursor-pointer p-6 rounded-xl border border-gray-100 flex flex-col items-center justify-center text-center shadow-sm`}
            >
              <span className="text-4xl mb-3" role="img" aria-label={cat.name}>{cat.icon}</span>
              <span className="font-bold text-sm text-gray-700">{cat.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. ATTRACTIVE SPECIAL OFFERS (PRODUCT GRID) */}
      <section className="max-w-7xl mx-auto my-12 px-4">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
              Top Clubcard Deals
            </h2>
            <p className="text-sm text-gray-500">Don't miss out on these exclusive weekly grocery savings.</p>
          </div>
          <button className="text-[#00539C] hover:underline text-sm font-bold">
            See all offers →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {specialOffers.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex flex-col justify-between relative hover:shadow-md transition">
              
              {/* Product Badge */}
              <div className="absolute top-3 left-3 bg-[#EE1C25] text-white text-[10px] font-extrabold px-2 py-0.5 rounded">
                OFFER
              </div>

              {/* Product Graphic Placeholder */}
              <div className="h-36 bg-gray-50 rounded-lg flex items-center justify-center text-6xl mb-4">
                {product.image}
              </div>

              {/* Product Info */}
              <div>
                <h3 className="font-medium text-sm text-gray-800 line-clamp-2 h-10 mb-2">
                  {product.name}
                </h3>
                
                {/* Pricing block */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-bold text-[#EE1C25]">{product.clubcardPrice}</span>
                    <span className="bg-yellow-300 text-blue-900 font-extrabold text-[10px] px-1.5 py-0.5 rounded">
                      Clubcard Price
                    </span>
                  </div>
                  <div className="text-xs text-gray-400 line-through">
                    Regular Price: {product.price}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full bg-[#00539C] hover:bg-blue-800 text-white font-bold py-2 rounded-lg text-xs transition duration-150">
                Add to Basket
              </button>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

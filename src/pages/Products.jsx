import ProductCard from "../components/UI/ProductCard";

const products = [
  {
    category: "Clubcard Products",
    items: [
      {
        id: 1,
        name: "Tesco Choco",
        description: "Rich milk chocolate bar",
        price: 2.99,
        clubCardAvailable: true,
        clubCardDiscount: 0.94,
        image: "/Dark-Chocolate-Bar.jpg",
      },
      {
        id: 2,
        name: "Basmati Rice",
        description: "Premium long-grain rice",
        price: 5.49,
        clubCardAvailable: true,
        clubCardDiscount: 2.38,
        image: "/basmati.jfif",
      },
      {
        id: 3,
        name: "Grapes",
        description: "Fresh seedless grapes",
        price: 1.59,
        clubCardAvailable: true,
        clubCardDiscount: 0.57,
        image: "/grapes.jfif",
      },
      {
        id: 4,
        name: "Whole Milk",
        description: "Creamy whole milk",
        price: 5.49,
        clubCardAvailable: true,
        clubCardDiscount: 1.40,
        image: "/whole-500ml.jpg",
      },
      {
        id: 5,
        name: "Strawberry Milkshake",
        description: "Sweet strawberry shake",
        price: 2.99,
        clubCardAvailable: true,
        clubCardDiscount: 0.57,
        image: "/srwberry.jfif",
      },
      {
        id: 6,
        name: "Tesco Salad",
        description: "Crisp mixed salad",
        price: 4.07,
        clubCardAvailable: true,
        clubCardDiscount: 0.97,
        image: "/salad.jfif",
      },
    ],
  },
  {
    category: "Home Appliances",
    items: [
      {
        id: 7,
        name: "Blender",
        description: "Easy kitchen blending",
        price: 15.49,
        clubCardAvailable: false,
        clubCardDiscount: 0,
        image: "/blender.jfif",
      },
      {
        id: 8,
        name: "Whisk",
        description: "Durable mixing whisk",
        price: 6.05,
        clubCardAvailable: false,
        clubCardDiscount: 0,
        image: "/whisk.jfif",
      },
      {
        id: 9,
        name: "Toaster",
        description: "Two-slice toaster",
        price: 13.65,
        clubCardAvailable: false,
        clubCardDiscount: 0,
        image: "/toaster.jfif",
      },
    ],
  },
];

const Products = () => {
  return (
    <div className="min-h-screen bg-sky-400 p-6 font-sans">
      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="relative bg-white ">
          <input 
            type="text" 
            placeholder="Search for your product" 
            className="w-full py-3 px-6 rounded-full border-none focus:ring-2 focus:ring-blue-300"
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Product Sections */}
      <div className="max-w-4xl mx-auto space-y-12">
        {products.map((section, idx) => (
          <div key={idx}>
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              {section.category.split(' ')[0]} <span className="text-slate-900">{section.category.split(' ').slice(1).join(' ')}</span>   </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {section.items.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
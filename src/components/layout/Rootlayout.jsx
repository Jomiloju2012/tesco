import { Outlet } from "react-router-dom";
import NavBar from "../Navigation/Navbar";
import { BiCart } from "react-icons/bi";
import { useState } from "react"; 
import Cartmodal from "../UI/Cartmodal";

export default function RootLayout() {

  const [showcart, setShowCart] = useState(false);

  function toggleCart() {
    setShowCart(prev => !prev);
  }
  return (
    <div className="bg-blue-500 text-slate-800 min-h-screen flex flex-col">
      <NavBar />
      <main>
        {showcart && <Cartmodal setShowCart={setShowCart} />}
        <Outlet />
        <h1 className="text-5xl font-bold text-center my-10 text-white">
          Welcome to Tesco
        </h1>
     <button className="fixed bottom-5 right-5 text-blue-600 p-4 rounded-full shadow-lg hover:bg-slate-100 hover:text-blue-700 transition-colors bg-white" onClick={toggleCart}>
        <BiCart size={24} />
      </button>
      </main>
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <p>&copy; 2023 Tesco. All rights reserved.</p>
        </div>
      </footer>
     </div>
  );
}

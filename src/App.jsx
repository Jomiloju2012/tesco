import "./App.css";
import {Routes, Route} from "react-router-dom";
import RootLayout from "./components/layout/Rootlayout";
import About from "./pages/About";
import Products from "./pages/Products";
import Homepage from "./pages/Homepage";
import TescoPriceChecker from "./pages/TescoPriceChecker";
import Contact from "./pages/Contact";

function App() {
  return (
      <>
  
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/about" element={<About/>}/> 
          <Route path="/products" element={<Products/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/TescoPriceChecker" element={<TescoPriceChecker/>}/>
          <Route index element={<Homepage/>}/>
        </Route>
      </Routes>

 
       </>
  );
}

export default App;

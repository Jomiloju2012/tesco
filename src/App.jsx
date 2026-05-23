import "./App.css";
import {Routes, Route} from "react-router-dom";
import RootLayout from "./components/layout/rootlayout";
import Navbar from "./components/Navigation/Navbar";
import About  from "./pages/About"
import Products from "./pages/Products";


function App() {
  return (
      <>
  
      <Routes>
        <Route path="/" element={<RootLayout />}>
         <Route path="/about" element={<About/>}/> 
        <Route path="/products" element={<Products/>}/>
        </Route>
      </Routes>

 
       </>
  );
}

export default App;

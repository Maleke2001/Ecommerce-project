import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Footer from "./Components/Footer";
import adidias_banner from './Components/Assets/adidas1.png';
import nike_banner from './Components/Assets/nike1.png';
import rebook_banner from './Components/Assets/rebook1.png';

import puma_banner from './Components/Assets/puma1.png'; 

import new_balance_banner from './Components/Assets/newbalnce1.png';
function App() {
  return (
    <BrowserRouter>
    <div className="w-full h-full overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/nike' element={<ShopCategory banner={nike_banner}category="nike" />} />
        <Route path='/adidas' element={<ShopCategory banner={adidias_banner}  category="adidas" />} />
        <Route path='/new-balance' element={<ShopCategory banner={new_balance_banner} category="new balance" />} />
        <Route path='/puma' element={<ShopCategory banner={puma_banner} category="puma" />} />
        <Route path='/reebok' element={<ShopCategory banner={rebook_banner} category="reebok" />} />

        <Route path='/product' element={<Product />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;

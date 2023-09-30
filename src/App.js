import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShopProvider } from "./context/ShopContext";
import { NavbarProvider } from "./context/NavbarContext";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MobileNavbar from "./components/MobileNavbar";
import Categories from "./pages/Categories";
import Product from "./pages/Product";
import Cart from "./components/Cart";
import PageOverlay from "./components/PageOverlay";

function App() {
  return (
    <ShopProvider>
      <NavbarProvider>
        <BrowserRouter>
          <Toaster />

          <MobileNavbar />
          <Navbar />
          <PageOverlay />
          <Cart />

          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/categories/:category"
              element={<Categories />}
            ></Route>
            <Route path="/product/:id" element={<Product />}></Route>
          </Routes>
        </BrowserRouter>
      </NavbarProvider>
    </ShopProvider>
  );
}

export default App;

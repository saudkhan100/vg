import Home from "./home/home";
import AboutUs from "./AboutUs/AboutUs";
import DataPage from "./Products/Datapage";
import ProductsPage from "./Products/ProductsPage";
import { Route, Routes } from "react-router-dom";
import Header from "./home/header/header";
import Footer from "./home/footer/footer";

function App() {
  return (
    <div>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} /> {/* Route for Home */}
      <Route path="/about" element={<AboutUs />} /> {/* Route for AboutUs */}
      <Route path="/products" element={<ProductsPage />} />{" "}
      <Route path="/data/:categoryName" element={<DataPage />} />{" "}
    
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;

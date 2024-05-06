import Home from "./home/home";
import AboutUs from "./AboutUs/AboutUs";
import DataPage from "./Products/Datapage";
import { Route, Routes } from "react-router-dom";
import Header from "./home/header/header";
import Footer from "./home/footer/footer";
import TeamAll from './team/teamall'
import locationsData from "./contactus/locations";
import LocationComponent from "./contactus/locationcomponent";
import ProductPage from "./Products/productpage";
import SpecificProduct from "./Products/specificproduct";

function App() {
  return (
    <div>
   <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/products" element={<ProductPage />} />{" "}
      <Route path="/teams" element={<TeamAll />} />{" "}
      <Route
          path="/contact"
          element={<LocationComponent locations={locationsData} />}
        />
      <Route path="/data/:categoryName" element={<DataPage />} />{" "}
      <Route path="/details/:productName" element={<SpecificProduct />} />{" "}
    
    </Routes>
    <Footer/>
    </div>
  );  
}

export default App;

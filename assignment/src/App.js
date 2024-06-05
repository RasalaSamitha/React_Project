import "./style.scss";
import FirstPage from "./Home-page-components/Homepage";
import TodaysDeals from "./other-pages-components/TodaysDealspage";
import { Routes, Route, Router } from "react-router-dom";
import Bestseller from "./other-pages-components/BestSellersPage";
import Electronic from "./other-pages-components/ElectronicsPage";
import Mobiles from "./other-pages-components/Mobilespage";
import Gifts from "./other-pages-components/gift-ideas-page";
import Home from "./other-pages-components/home-kitchen-page";
import Cart from "./Home-page-components/cart";
import Login from "./Home-page-components/login-page";
import Location from "./Home-page-components/location";

function App() {
  const searchText = "";
  return (
    <>
      <div className="App">
        <Routes>
          <Route
            path="/homepage"
            element={<FirstPage searchText={searchText} />}
          />
          <Route path="/Todays-deals" element={<TodaysDeals />} />
          <Route path="/Best-sellers" element={<Bestseller />} />
          <Route path="/Electronics" element={<Electronic />} />
          <Route path="/Mobiles" element={<Mobiles />} />
          <Route path="/gift" element={<Gifts />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart-num" element={<Cart />} />
          <Route path="/" element={<Login />} />
          <Route path='/addresspage' element={<Location/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;

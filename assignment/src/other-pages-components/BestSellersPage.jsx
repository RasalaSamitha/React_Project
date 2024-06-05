import "../style.scss";
import Header from "../Home-page-components/Header";
import Navbar from "../Home-page-components/Navbar";
import { CartItem, PannelItems } from "../constants";
import image from "../images/menu-bar.png";
import image1 from "../images/shop-now.jpg";
import Footer from "../Home-page-components/Footer";
import Sellercomponent from "./sellersComponent";

function Bestseller() {
  return (
    <>
      <div className="page2">
        <Header />
        <div className="nav-bar">
          <img src={image} className="nav-bar-menu"></img>
          <Navbar PannelItems={PannelItems} />
          <img src={image1}></img>
        </div>

        <div className="body-content">
          <Sellercomponent cartItems={CartItem} />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Bestseller;

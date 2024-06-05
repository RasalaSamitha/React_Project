import "../style.scss";
import Header from "../Home-page-components/Header";
import Navbar from "../Home-page-components/Navbar";
import { CartItem, PannelItems } from "../constants";
import image from "../images/menu-bar.png";
import image1 from "../images/shop-now.jpg";
import Footer from "../Home-page-components/Footer";
import MobileDeals from "./MobilesComponent";
import image2 from "../images/mobile-BG2.jpg";
import image3 from "../images/mobile-BG3.gif";
import image4 from "../images/mobiles-BG.jpg";

function Mobiles() {
  return (
    <>
      <div className="page2">
        <Header />
        <div className="nav-bar">
          <img src={image} className="nav-bar-menu"></img>
          <Navbar PannelItems={PannelItems} />
          <img src={image1}></img>
        </div>

        <div className="mobile-background">
          <img src={image2} alt="" />
          <img src={image4} alt="" />
          <img src={image3} alt="" />
        </div>

        <div className="body-content">
          <MobileDeals cartItems={CartItem} />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Mobiles;

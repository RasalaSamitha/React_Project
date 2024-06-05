import image from "../images/amazon-logo.png";
import image1 from "../images/location.png";
import image2 from "../images/search-icon.png";
import image3 from "../images/flag.png";
import image4 from "../images/cart.png";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "./stateProvider";


function Header() {
  const [{ basket }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  return (
    <>
      <div className="header-one" id="head">
        <div className="header-one-logo">
          <img
            src={image}
            alt="amazon-logo"
            onClick={() => navigate("/homepage")}
          />
        </div>

        <div className="header-one-address">
          <div className="header-one-address-img">
            <img src={image1} alt="location" />
          </div>
          <div className="header-one-address-content" onClick={() => navigate('/addresspage')}>
            <div className="header-one-address-content-hello">Deliver to</div>
            <div className="header-one-address-content-address">
              select your address
            </div>
          </div>
        </div>

        <div className="header-one-searchbar">
          <div className="header-one-searchbar-all">All</div>
          <div className="header-one-searchbar-search">
            <input type="text" placeholder="Search Amazon.in" id="searchbar" />
          </div>
          <div className="header-one-searchbar-icon">
            <img src={image2} alt="" />
          </div>
        </div>

        <div className="header-one-language">
          <div className="header-one-language-img">
            <img src={image3} alt="" />
          </div>
          <div className="header-one-language-select">
            <select name="language" id="lang">
              <option value="english">EN</option>
            </select>
          </div>
        </div>

        <div className="header-one-sign">
          <div className="header-one-sign-in">Hello {username}</div>
          <div className="header-one-sign-list">
            <select name="sign" id="sign-in">
              <option value="heading" id="head">
                Accounts & Lists
              </option>
            </select>
          </div>
        </div>

        <div className="header-one-returns">
          <div className="header-one-returns-one">Returns</div>
          <div className="header-one-returns-order">& Orders</div>
        </div>

        <div className="header-one-cart" onClick={() => navigate("/cart-num")}>
          <div className="header-one-cart-img">
            <img src={image4} alt="cart" />
          </div>
          <div className="header-one-cart-title">{basket.length}</div>
        </div>
      </div>
    </>
  );
}

export default Header;

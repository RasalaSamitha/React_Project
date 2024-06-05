import image1 from "../images/copyright.png";
import image2 from "../images/globe.png";
import image3 from "../images/amazon-logo.png";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-back-top">
          <a href="#head">Back to top</a>
        </div>
        <div className="footer-help">
          <div className="footer-help-items">
            <ul>
              <h4>Get to Know Us</h4>
              <li>About Us</li>
              <li>Careers</li>
              <li>Press Releases</li>
              <li>Amazon Science</li>
            </ul>
          </div>
          <div className="footer-help-items">
            <ul>
              <h4>Connect with Us</h4>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
          <div className="footer-help-items">
            <ul>
              <h4>Make Money with Us</h4>
              <li>Sell on Amazon</li>
              <li>Sell under Amazon Accelerator</li>
              <li>Protect and Build Your Brand</li>
              <li>Amazon Global Selling</li>
              <li>Become an Affiliate</li>
              <li>Fulfilment by Amazon</li>
              <li>Advertise Your Products</li>
              <li>Amazon Pay on Merchants</li>
            </ul>
          </div>
          <div className="footer-help-items">
            <ul>
              <h4>Let Us Help You</h4>
              <li>COVID-19 and Amazon</li>
              <li>Your Account</li>
              <li>Returns Centre</li>
              <li>100% Purchase Protection</li>
              <li>Amazon App Download</li>
              <li>Help</li>
            </ul>
          </div>
        </div>
        <div className="footer-countries">
          <div className="footer-countries-head">
            <img src={image3} alt="amazon" />
            <div className="footer-countries-head-content">
              <img src={image2} alt="globe" />
              <div className="footer-countries-head-content-select">
                English
              </div>
            </div>
          </div>
          <div className="footer-countries-list">
            <ul>
              <li>Australia</li>
              <li>Brazil</li>
              <li>Canada</li>
              <li>China</li>
              <li>France</li>
              <li>Germany</li>
              <li>Italy</li>
              <li>Japan</li>
              <li>Mexico</li>
              <li>Netherlands</li>
              <li>Poland</li>
              <li>Singapore</li>
              <li>Spain</li>
              <li>Turkey</li>
              <li>United Arab Emirates</li>
              <li>United Kingdom</li>
              <li>United States</li>
            </ul>
          </div>
        </div>
        <div className="footer-series">
          <div className="footer-series-box">
            <div className="footer-series-content">
              <p>AbeBooks Books,art & Collectibles</p>
            </div>
            <div className="footer-series-content">
              <p>Amazon Web Services Scalable Cloud Computing Services</p>
            </div>
            <div className="footer-series-content">
              <p>Audible Download Audio Books</p>
            </div>
            <div className="footer-series-content">
              <p>IMDb Movies, TV & Celebrities</p>
            </div>
            <div className="footer-series-content">
              <p>Shopbop Design Fashion Brands</p>
            </div>
            <div className="footer-series-content">
              <p>Amazo Busines Everything for Your Business</p>
            </div>
            <div className="footer-series-content">
              <p>Primes Now 2-Hour Delivery on Every items</p>
            </div>
            <div className="footer-series-content">
              <p>
                Amazon Prime Music 100 million songs, ad-free Over 15 million
                podcast episodes
              </p>
            </div>
          </div>
          <div className="footer-series-copy-rights">
            <span>Conditions of Use & Sale </span>
            <span>Privacy Notice</span>
            <span>Interest-Based Ads </span>
            <p>
              <img src={image1} alt="copy-right" />
              1996-2023, Amazon.com,Inc. or its affiliates
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

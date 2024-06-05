import ProductFilter from "./sidebar";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const Sellercomponent = ({ cartItems }) => {
  const totalRepeats = 2;

  const repeatedItems = [];
  for (let i = 0; i < totalRepeats; i++) {
    repeatedItems.push(...cartItems);
  }

  return (
    <>
      <h1>Amazon Best Sellers</h1>
      <div className="container">
        <div className="container-reviews">
          <ProductFilter />
        </div>
        <div className="container-individual">
          {repeatedItems.map((item, index) => {
            const randomDiscount =
              Math.floor(Math.random() * (5000 - 1000 + 1)) + 50;

            return (
              <div key={index} className="container-individual-cart">
                <img
                  src={item.image1}
                  alt={item.title}
                  className="container-individual-cart-img"
                />
                <div className="container-individual-cart-tagline">
                  <h5 className="container-individual-cart-tagline-content">
                    Great Indian Festival
                  </h5>
                </div>
                <p className="container-individual-cart-desc">{item.title}</p>
                <h5 className="container-individual-cart-tagline-text">
                  ₹ {randomDiscount}.00
                </h5>
                <div className="mobile-deals-rating">
                  <Stack spacing={1}>
                    <Rating
                      name="half-rating"
                      defaultValue={2.5}
                      precision={0.5}
                    />
                  </Stack>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sellercomponent;

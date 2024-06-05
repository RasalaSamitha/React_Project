import { useStateValue } from "./stateProvider";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const CartItems = ({ dataObj }) => {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);

  const addToBasket = () => {
    dispatch({
      type: "Add-to-cart",
      item: {
        title: dataObj.title,
        image: dataObj.image1,
        deals: dataObj.deals,
      },
    });
  };

  return (
    <>
      {Object.keys(dataObj).length <= 5 ? (
        <div className="card-items">
          <h4 className="card-items-title">{dataObj.title}</h4>
          <div className="card-items-image">
            <img
              src={dataObj.image1}
              alt="item"
              className="card-item-image-link"
            />
          </div>
          <div className="cart-items-rating">
            {" "}
            <Stack spacing={1}>
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            </Stack>
          </div>
          <div className="card-items-description">
            {dataObj.deals} <button onClick={addToBasket}>Add to cart</button>
          </div>
        </div>
      ) : (
        <div className="card-items">
          <h4 className="card-items-title">{dataObj.title}</h4>
          <div className="card-items-content">
            <div className="card-items-content-box">
              <div className="card-items-content-img">
                <img src={dataObj.image1} alt="" />
              </div>
              <div className="card-items-content-desc">
                {dataObj.description1}
              </div>
            </div>
            <div className="card-items-content-box">
              <div className="card-items-content-img">
                <img src={dataObj.image2} alt="" />
              </div>
              <div className="card-items-content-desc">
                {dataObj.description2}
              </div>
            </div>
            <div className="card-items-content-box">
              <div className="card-items-content-img">
                <img src={dataObj.image3} alt="" />
              </div>
              <div className="card-items-content-desc">
                {dataObj.description3}
              </div>
            </div>
            <div className="card-items-content-box">
              <div className="card-items-content-img">
                <img src={dataObj.image4} alt="" />
              </div>
              <div className="card-items-content-desc">
                {dataObj.description4}
              </div>
            </div>
          </div>
          <div className="cart-items-rating">
            {" "}
            <Stack spacing={1}>
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            </Stack>
          </div>
          <div className="card-items-description">
            {dataObj.deals} <button onClick={addToBasket}>Add to cart</button>
          </div>
        </div>
      )}
    </>
  );
};

export default CartItems;

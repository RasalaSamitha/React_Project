function ProductFilter() {
  return (
    <div>
      <div className="sidebar-head">
        <h3>Price:</h3>
        <span>All</span>
        <span>Under ₹500</span>
        <span>₹500 to ₹1,000</span>
        <span>₹1,000 to ₹2,000</span>
        <span>₹2,000 to ₹5,000</span>
        <span>₹5,000 and Above</span>
      </div>
      <div className="sidebar-head">
        <h3>Discount:</h3>
        <span>All deals</span>
        <span>10% off or more</span>
        <span>25% off or more</span>
        <span>50% off or more</span>
        <span>70% off or more</span>
      </div>
      <div className="sidebar-head">
        <h3>Average Customer Review:</h3>
        <span>5 stars and up</span>
        <span>4 stars and up</span>
        <span>3 stars and up</span>
        <span>2 stars and up</span>
        <span>1 star and up</span>
      </div>
    </div>
  );
}

export default ProductFilter;

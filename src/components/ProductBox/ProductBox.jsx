import { Link } from "react-router-dom";
import { Button } from "reactstrap";

// CSS imports
import "./ProductBox.css";


function ProductBox({ productImage, name, price, productId }) {
  


  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  }

  const truncatedName = truncateText(name, 15);


 
 
  
  return (
    <div className="product-item text-decoration-none">
      <div className="product-img">
        <img src={productImage} alt="" />
      </div>
      <div className="product-name text-center">{truncatedName}</div>
      <div className="product-price text-center">&#8377; {price}</div>
      <div className="button">
        <Link to={`/products/${productId}`}>
          <Button className="btn-buy" color="primary" >Buy Now</Button>
        </Link>
        
      </div>
    </div>
  );
}

export default ProductBox;

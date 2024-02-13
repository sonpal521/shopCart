// CSS import
import "./ProductList.css";

// Component import
import ProductBox from "../../components/ProductBox/ProductBox";
import FilterProducts from "../../components/FilterProducts/FilterProducts";

import useProductList from "../../hooks/useProductList";

function ProductList() {
  const {productList } = useProductList("category");


  return (
    <div className="container">
      <div className="row">
        <h2 className="product-list-title text-center">All Products</h2>
        <div className="product-list-wrapper d-flex">
       <FilterProducts/>
          <div className="product-list-box" id="productList">
          {/* Use displayedProducts for rendering if filter is applied, otherwise use productList */}
          {productList?.length > 0 && productList?.map((product) => (
            <ProductBox
              productId={product.id}
              key={product.id}
              name={product.title}
              price={product.price}
              productImage={product.image}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
   
  );
}

export default ProductList;

// Search.js

import './Search.css';
import { useState } from "react";
import useProductList from "../../hooks/useProductList";
import { useNavigate } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";

function Search() {
  const [isAutoCompleteVisible, setIsAutoCompleteVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { productList } = useProductList();
  const navigate = useNavigate();

  function handleAutoCompleteClick(e, productId) {
    navigate(`/products/${productId}`);
  }

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const debouncedHandleInputChange = useDebounce(handleInputChange, 300);

  // Filter products based on the search term
  const filteredProductList = productList?.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search by name"
        className="form-control"
        id="searchInput"
        onFocus={() => {
          setIsAutoCompleteVisible(true)
        }}
        onBlur={() => {
          setIsAutoCompleteVisible(false);
        }}
        onChange={debouncedHandleInputChange}
      />

      <div id="result-list" style={{ display: isAutoCompleteVisible ? 'block' : 'none' }}>
        <div className="autocomplete-result">Auto complete results....{searchTerm}</div>

        {filteredProductList?.length > 0 && filteredProductList.map(product => (
          <div
            onMouseDown={(e) => handleAutoCompleteClick(e, product.id)}
            key={product.id}
            className="autocomplete-result">
            {product.title}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Search;

// CSS imports
import './FilterProducts.css';

import useCategory from '../../hooks/useCategory';
import { useNavigate } from 'react-router-dom';
import Search from '../Search/Search';

function FilterProducts() {
    const [categories] = useCategory();
    const navigate = useNavigate();
    function handleCategoryNavigate(category) {
        navigate(`/products?category=${category}`);
    }

    return (
        <div className="product-list-sidebar d-flex flex-column">

            <div className="sidebar-title">Search Products</div>
            <Search/>
            <div className="sidebar-category fw-bold">Categories</div>
            <div id="categoryList">
                {/* <!-- will be populated by JS --> */}
                {categories && categories.map((category) => 
                    <a onClick={() => handleCategoryNavigate(category)} key={category} className='d-flex text-decoration-none'> {category} </a>
                )}
            </div>


           
        </div>
    )
}

export default FilterProducts;
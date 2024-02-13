// CSS imports
import "./Home.css";

import CategoryItem from "../../components/CategoryItem/CategoryItem";
import useCategory from "../../hooks/useCategory";
import { useContext, useEffect } from 'react';
import UserContext from '../../context/UserContext';
function Home() {

  const [categories] = useCategory();
 const {user} = useContext(UserContext);

 
 useEffect(() => {
}, [user]);
  return (
    <div className="container welcome-wrapper">
      <div className="row">
        <h2 className="home-title text-center">Welcome to Shop Cart</h2>
        <div
          className="category-list d-flex  justify-content-between align-items-center"
          id="categoryList"
        >
          <CategoryItem itemName="All Products" />

          {categories &&
            categories.map((category) => (
              <CategoryItem
                itemName={category}
                key={category}
                filter={category}
              />
            ))}
        </div>
       
      </div>
      <div className="category-title text-center">
          Select a category to start Shopping
        </div>
    </div>
  );
}

export default Home;

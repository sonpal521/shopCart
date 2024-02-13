import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { getAllProducts, getAllProductsByCategory } from '../apis/fakeStoreProdApis';

function useProductList(searchTerm) {
  const [productList, setProductList] = useState([]);
 
 

  const [query] = useSearchParams();

  const downloadProducts = async (category) => {
    let downloadUrl = category ? getAllProductsByCategory(category) : getAllProducts();

    try {
      const response = await axios.get(downloadUrl);
      setProductList(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  

  useEffect(() => {
    downloadProducts(query.get("category"));
  }, [query.get("category"), searchTerm]);



  return { productList  };
}

export default useProductList;

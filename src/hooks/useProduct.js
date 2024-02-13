import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../apis/fakeStoreProdApis";



function useProduct() {
    const {id} = useParams();
    
    const [product, setProduct] = useState(null);
   
    
    async function downloadProduct(id) {
        const response = await axios.get(getProduct(id));
        setProduct(response.data);
        console.log(response.data);
    }

   
    useEffect(() => {
        downloadProduct(id);
    }, []);
  return {product}
}

export default useProduct;
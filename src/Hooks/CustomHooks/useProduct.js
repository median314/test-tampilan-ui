import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../Config/firebase";


const useProduct = () => {
    const [products, setProducts] = useState()

    useEffect(() => {
        const getProductsData = async () => {
            try {
              const q = query(collection(db, "products"));
              const querySnapshot = await getDocs(q);
              const arrProduct = [];
        
              querySnapshot.forEach((doc) => {
                let forData = doc.data();
                forData.id = doc.id;
                arrProduct.push(forData);
              });
              setProducts(arrProduct);
            } catch (error) {
              console.log(error, "ini error");
            }
          };
    
      return getProductsData
    }, [])

    return products
}

export default useProduct

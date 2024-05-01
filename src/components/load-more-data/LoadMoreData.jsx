import { useEffect, useState } from "react";
import "./style.css";

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      // count ? button is 2 skip 40 data and it goes upward
      // initai state of the count don't skip any data and leave it as 0

      const res = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const result = await res.json();
      if (result && result.products && result.products.length > 0) {
        setLoading(false);
        setProducts(result.products);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();

    if (loading) {
      return <div>Loading data | Please wait</div>
    }
  }, []);

  return (
    <>
      <div className="container">

        
      </div>
    </>
  );
};

export default LoadMoreData;

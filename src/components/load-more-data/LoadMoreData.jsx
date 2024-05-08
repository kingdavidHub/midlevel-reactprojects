import { useEffect, useState } from "react";
import "./style.css";

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableBtn, setDisableBtn] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      // count ? button is 2 skip 40 data and it goes upward
      // initai state of the count don't skip any data and leave it as 0

      const res = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const result = await res.json();
      if (result && result.products && result.products.length) {
        setLoading(false);
        if (count > 0) {
          setProducts((prevData) => {
            return [...prevData, ...result.products];
          });
        } else {
          setProducts(result.products);
        }

        // !ERROR using this creating dubplicate data
        // setProducts((prevData) => [...prevData, ...result.products]);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // Runs on the first render
  useEffect(() => {
    fetchProducts();

    if (loading) {
      return <div>Loading data | Please wait</div>;
    }

    // Anytime this count value is changed we are to run this useEffect
  }, [count]);

  useEffect(() => {
    // limit of 100 products
    if (products && products.length === 100) {
      setDisableBtn(true);
    }
  }, [products]);

  return (
    <>
      <div className="load-more-container">
        <div className="product-container">
          {products && products.length
            ? products.map((item, index) => {
                // console.log(item.id);
                return (
                  <div className="product" key={item.id}>
                    <img src={item.thumbnail} alt={item.title} />
                    <p>{item.title}</p>
                  </div>
                );
              })
            : null}
        </div>
        <div className="btn-container">
          <button
            className={disableBtn ? "disabled" : ""}
            disabled={disableBtn}
            onClick={() => setCount(count + 1)}
          >
            Load More Products
          </button>
          {disableBtn && <p>You have reached to 100 products</p>}
        </div>
      </div>
    </>
  );
};

export default LoadMoreData;

import React, { useEffect, useState } from "react";
import "./style.css";

// reciving url from props parent component
const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const fetchDataUrl = async (getUrl) => {
    try {
      setLoading(true);
      const res = await fetch(getUrl);
      const data = await res.json();

      if (data && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setErrorMsg(error.message);
    }
  };

  const handleScrollPercentage = () => {
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  };

  useEffect(() => {
    fetchDataUrl(url);

    // it runs the hook on the first render and when any changes on the url dependency it will rerun the hook again
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    // on unmount it will remove the event listener
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  if(errorMsg){
    return <div>Error | {errorMsg}</div>
  }

  if(loading){
    return <div>Loading data | please wait</div>
  }

  return (
    <>
      <div>
        <div className="top-container">
          <h1>Custom Scroll Indicator</h1>
          <div className="scroll-progress-tracking-container">
            <div
              className="current-progress-bar"
              style={{ width: `${scrollPercentage}%` }}
            ></div>
          </div>
        </div>

        <div className="data-container">
          {data && data.length > 0
            ? data.map((dataItem) => <p key={dataItem.id}>{dataItem.title}</p>)
            : null}
        </div>
      </div>
    </>
  );
};

export default ScrollIndicator;

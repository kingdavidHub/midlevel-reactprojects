/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./style.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// API data from props containing url and limit
// url is the api endpoint
// limit is how many data we are receiving from the API

const ImageSlider = ({ url, page = 1, limit = 5 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImages = async (getUrl) => {
    try {
      // calling the API
      setLoading(true);

      // https://picsum.photos/v2/list?page=1&limit=10
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
      toast(`🥲 Error occured`);
    }
  };

  // Explain to the interviewer providing a conditional if the URL is empty or not
  useEffect(() => {
    if (url !== "") {
      // call some API
      fetchImages(url);
    }

    if (loading) {
      // return <div>Loading data please wait</div>;
      toast("🚀 Data processed.")
    }

    if (errorMsg !== null) {
      // return <div>Error occured ! {errorMsg}</div>;
       toast(`🦄 ${errorMsg}`);
    }
  }, [url]);

  const handlePrev = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="image-slider">
      <ToastContainer 
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />
      <div className="image-container">
        <BsArrowLeftCircleFill
          onClick={handlePrev}
          className="arrow arrow-left"
        />
        {images && images.length
          ? images.map((imageItem, index) => {
              return (
                <img
                  src={imageItem.download_url}
                  key={imageItem.id}
                  alt={imageItem.download_url}
                  className={
                    currentSlide === index ? "current-image" : "hide-image"
                  }
                />
              );
            })
          : null}
        <BsArrowRightCircleFill
          onClick={handleNext}
          className="arrow arrow-right"
        />
        <span className="circle-indicator">
          {images && images.length
            ? images.map((_, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={
                      currentSlide === index
                        ? "current-indicator"
                        : "current-indicator inactive-indicator"
                    }
                  ></button>
                );
              })
            : null}
        </span>
      </div>
    </div>
  );
};

export default ImageSlider;

import React, { useState, useEffect } from "react";
import "../../static/carousel/carousel.css";
import { useSelector } from "react-redux";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

function Carousel() {
  const [currentId, setCurrentId] = useState(0);
  const products = useSelector((state) => state.allProducts);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentId((b) => {
        let curr = b === 10 ? 0 : b + 1;
        return curr;
      });
    }, 10000);
    return () => clearInterval(interval);
  }, [currentId]);

  const next = () => {
    setCurrentId((b) => {
      let curr = b === 10 ? 0 : b + 1;
      return curr;
    });
  };

  const prevSlide = () => {
    setCurrentId((b) => {
      let curr = b < 1 ? 1 : b - 1;
      return curr;
    });
  };
  return (
    <div className="carousel">
      {products.length ? (
        <img
          src={products[currentId].thumbnail}
          className="carousel_img"
          alt="img"
        />
      ) : null}
      <FaAngleDoubleLeft
        className="left-arrow arrow"
        onClick={prevSlide}
        size={70}
      />
      <FaAngleDoubleRight
        className="right-arrow arrow"
        onClick={next}
        size={70}
      />
    </div>
  );
}

export default Carousel;

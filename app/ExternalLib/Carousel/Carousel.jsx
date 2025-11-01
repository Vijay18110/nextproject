import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useWindowWidth from '../../Hooks/useWindow.js'
const Slider = ({ children, responsive, showDot = true, onSlideChange,partialVisible,autoplay }) => {
  const defaultResponsive = {
    desktop: { breakpoint: { max: 3000, min: 1424 }, items: 1, slidesToSlide: 1 },
    laptop: { breakpoint: { max: 1424, min: 1024 }, items: 1, slidesToSlide: 1 },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 1, slidesToSlide: 1},
    mobile: { breakpoint: { max: 768, min: 0 }, items: 1, slidesToSlide: 1 },
  };

  const childrenArray = React.Children.toArray(children);
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={showDot}
      responsive={responsive || defaultResponsive}
      ssr={true}
    partialVisible={partialVisible}
      infinite={true}
      autoPlay={autoplay} // leave autoplay to video logic
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      afterChange={onSlideChange}
      itemClass="carousel-item-padding-0-px"
    >
      {children}
    </Carousel>
  );
};

export default Slider;

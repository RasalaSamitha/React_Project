import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image from "../images/amazon-BG.jpg";
import image1 from "../images/amazon-BG2.jpg";
import image2 from "../images/amazon-BG3.jpg";
import image3 from "../images/amazon-BG4.jpg";
import image4 from "../images/amazon-BG5.jpg";

const CenterCarousel = () => {
  return (
    <Carousel
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      showIndicators={false}
      // centerMode={true}
      centerSlidePercentage={50}
    >
      <div>
        <img src={image} alt="Image 1" />
      </div>
      <div>
        <img src={image1} alt="Image 2" />
      </div>
      <div>
        <img src={image2} alt="Image 3" />
      </div>
      <div>
        <img src={image3} alt="Image 2" />
      </div>
      <div>
        <img src={image4} alt="Image 3" />
      </div>
      {/* Add more carousel items as needed */}
    </Carousel>
  );
};

export default CenterCarousel;

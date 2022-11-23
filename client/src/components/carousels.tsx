import { useState } from "react";
import { Carousel } from "react-bootstrap";

const Carousels = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  const images = [
    "https://germaine.ng/wp-content/uploads/2019/11/Vero.banner2.jpeg",
    "http://dhanyaautospareparts.dhanyagroup.com/data1/images/banner4.jpg",
    "http://dhanyaautospareparts.dhanyagroup.com/data1/images/banner3.jpg",
  ];
  return (
    <Carousel
      className="container-xl carousel_container"
      activeIndex={index}
      onSelect={handleSelect}
    >
      {images.map((image, index) => (
        <Carousel.Item key={index} className="carsouel__item">
          <img
            // className="d-block w-full"
            src={image}
            alt="First slide"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Carousels;

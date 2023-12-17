import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import UserFeedback1 from "./../../assets/userFeedback1.jpg";
import UserFeedback2 from "./../../assets/userFeedback2.jpg";
import UserFeedback3 from "./../../assets/userFeedback3.jpg";
function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={UserFeedback1} alt="userfeedback1" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={UserFeedback2} alt="userfeedback2" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={UserFeedback3} alt="userfeedback3" />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;

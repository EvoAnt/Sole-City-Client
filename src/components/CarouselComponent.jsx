
import { Carousel } from 'react-bootstrap';

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/0852/0048/files/LHJordan1RedToeIG-1-1_1024x1024.jpg?v=1519078683"
          alt="Image 1"
          style={{width: '400px', height: '800px'}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://sneakernews.com/wp-content/uploads/2023/10/travis-scott-jordan-1-golf-release-date.jpg"
          alt="Image 2"
          style={{width: '400px', height: '800px'}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://sneakerbardetroit.com/wp-content/uploads/2020/10/Nike-SB-Dunk-low-freddy-kruger-sneaker-talk.jpg"
          alt="Image 3"
          style={{width: '400px', height: '800px'}}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;

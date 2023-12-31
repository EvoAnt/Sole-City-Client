import { Carousel } from "react-bootstrap";

const CarouselComponent = () => {
  return (
    <Carousel fade={true}>
      <Carousel.Item>
        <a href="https://solecity.netlify.app/products/653ac8976da9a86a43bb9619">
          <img
            className="d-block w-100"
            src="https://cdn.shopify.com/s/files/1/0852/0048/files/LHJordan1RedToeIG-1-1_1024x1024.jpg?v=1519078683"
            alt="Image 1"
            style={{ width: "400px", height: "800px" }}
          />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="http://solecity.netlify.app/products/653ac8976da9a86a43bb9615">
          <img
            className="d-block w-100"
            src="https://sneakernews.com/wp-content/uploads/2023/10/travis-scott-jordan-1-golf-release-date.jpg"
            alt="Image 2"
            style={{ width: "400px", height: "800px" }}
          />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="http://solecity.netlify.app/products/653ac8976da9a86a43bb961d">
          <img
            className="d-block w-100"
            src="https://sneakerbardetroit.com/wp-content/uploads/2020/10/Nike-SB-Dunk-low-freddy-kruger-sneaker-talk.jpg"
            alt="Image 3"
            style={{ width: "400px", height: "800px" }}
          />
        </a>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;

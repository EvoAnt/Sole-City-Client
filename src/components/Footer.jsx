import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#333",
    color: "white",
    paddingTop: "20px",
    paddingBottom: "20px",
  };

  const socialIconStyle = {
    color: "red",
    marginRight: "10px",
  };

  return (
    <footer style={footerStyle}>
      <Container>
        <Row>
          <Col md={6}>
            <h4>Contact Us</h4>
            <p>Email: example@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </Col>
          <Col md={6}>
            <h4>Follow Us</h4>
            <p>Connect with us on social media:</p>
            <a
              href="https://twitter.com/your-twitter-account"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                size="2x"
                style={socialIconStyle}
              />
            </a>
            <a
              href="https://www.facebook.com/your-facebook-account"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                size="2x"
                style={socialIconStyle}
              />
            </a>
            <a
              href="https://www.instagram.com/your-instagram-account"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                style={socialIconStyle}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/your-linkedin-account"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                style={socialIconStyle}
              />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

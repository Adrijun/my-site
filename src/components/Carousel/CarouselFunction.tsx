import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import postitbajen from '../../assets/images/postitbajen.jpg';
import anonymPortfolio from '../../assets/images/anonymPortfoliojpg2.jpg';
import majojo from '../../assets/images/Majojo.jpg';
import portfolioImage from '../../assets/images/marten-bjork-6dW3xyQvcYE-unsplash.jpg';
import weatherImage from '../../assets/images/weather-images.jpg';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function CarouselFunction() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
      setIsDesktop(window.innerWidth >= 992);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Row>
      <Col>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <Link to={'/portfolio#digiplanner'}>
              <div className="card-image-wrapper">
                <Card.Img
                  variant="top"
                  src={postitbajen}
                  alt="Digiplanner project"
                  className="img-fluid mb-3 custom-img cardImage"
                  width={'100%'}
                  style={{ height: '70vh' }}
                />
                <div className="overlay" style={{ height: '70vh' }}>
                  {isDesktop && <h3 className="cardsText">DigiPlanner</h3>}
                  {isMobile && (
                    <div className="overlay" style={{ height: '70vh' }}>
                      <h3 className="cardsText">Read more</h3>{' '}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link to={'/portfolio#anonymous'}>
              <div className="card-image-wrapper">
                <Card.Img
                  variant="top"
                  src={anonymPortfolio}
                  alt="Anonymous project"
                  className="img-fluid mb-3 custom-img cardImage"
                  width={'100%'}
                  style={{ height: '70vh' }}
                />
                <div className="overlay" style={{ height: '70vh' }}>
                  {isDesktop && <h3 className="cardsText">Anonymous</h3>}
                  {isMobile && (
                    <div className="overlay" style={{ height: '70vh' }}>
                      <h3 className="cardsText">Read more</h3>{' '}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          </Carousel.Item>
          <Carousel.Item style={{ color: '#18d26e ' }}>
            <div className="card-image-wrapper">
              <Link to="/portfolio#restaurant">
                <Card.Img
                  variant="top"
                  src={majojo}
                  alt="Restaurant project"
                  className="img-fluid mb-3 custom-img cardImage"
                  style={{ height: '70vh' }}
                />
                <div className="overlay" style={{ height: '70vh' }}>
                  {isDesktop && <h3 className="cardsText">The Restaurant</h3>}
                  {isMobile && (
                    <div className="overlay" style={{ height: '70vh' }}>
                      <h3 className="cardsText">Read more</h3>{' '}
                    </div>
                  )}
                </div>
              </Link>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="card-image-wrapper">
              <Link to="/portfolio#weatherforecast">
                <Card.Img
                  variant="top"
                  src={weatherImage}
                  alt="weather forecast project"
                  className="img-fluid mb-3 custom-img cardImage"
                  style={{ height: '70vh' }}
                />
                <div className="overlay" style={{ height: '70vh' }}>
                  {isDesktop && <h3 className="cardsText">Weather Forecast</h3>}
                  {isMobile && (
                    <div className="overlay" style={{ height: '70vh' }}>
                      <h3 className="cardsText">Read more</h3>{' '}
                    </div>
                  )}
                </div>
              </Link>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <Link to="/portfolio#portfolio">
              <div className="card-image-wrapper">
                <Card.Img
                  variant="top"
                  src={portfolioImage}
                  alt="portfolio project"
                  className="img-fluid mb-3 custom-img cardImage"
                  style={{ height: '70vh' }}
                />
                <div className="overlay" style={{ height: '70vh' }}>
                  {isDesktop && <h3 className="cardsText">My Portfolio</h3>}
                  {isMobile && (
                    <div className="overlay" style={{ height: '70vh' }}>
                      <h3 className="cardsText">Read more</h3>{' '}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  );
}

export default CarouselFunction;

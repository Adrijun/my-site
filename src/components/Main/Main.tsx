import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import '../../scss/Main.scss';
import anonymPortfolio from '../../assets/images/anonymPortfoliojpg.jpg';
import majojo from '../../assets/images/Majojo.jpg';
import portfolioImage from '../../assets/images/marten-bjork-6dW3xyQvcYE-unsplash.jpg';
import { Link } from 'react-router-dom';
import Video from '../../assets/videos/production_id_3978416 (1080p).mp4';
function Main() {
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
    <>
      <Row>
        <Col md={12} lg={12}>
          <section className="full-height d-flex justify-content-center align-items-center mt-5">
            <article className="showcase">
              <video
                src={'../../assets/videos/production_id_3978416 (1080p).mp4'}
                loop
                muted
                autoPlay
                playsInline
                typeof="video/mp4"
              ></video>
              <article className="title d-flex flex-column align-items-center">
                <h1>
                  Hi, <br />
                  I´m Jonas
                </h1>
                <p>Frontend Web Developer</p>
              </article>
            </article>
          </section>
        </Col>
      </Row>

      <Container>
        <Row>
          <Col md={6} lg={4}>
            <div className="card-image-wrapper">
              <Link to="/portfolio#anonymous">
                <Card.Img
                  variant="top"
                  src={anonymPortfolio}
                  alt="Anonymous project"
                  className="img-fluid mb-3 custom-img cardImage"
                  width={300}
                  style={{ height: '50vh' }}
                />
                <div className="overlay" style={{ height: '50vh' }}>
                  {isDesktop && <h3 className="cardsText">Anonymous</h3>}
                  {isMobile && (
                    <div className="overlay" style={{ height: '50vh' }}>
                      <h3 className="cardsText">Read more</h3>{' '}
                    </div>
                  )}
                </div>
              </Link>
            </div>
          </Col>
          <Col md={6} lg={4}>
            <div className="card-image-wrapper">
              <Link to="/portfolio#restaurant">
                <Card.Img
                  variant="top"
                  src={majojo}
                  alt="Anonymous project"
                  className="img-fluid mb-3 custom-img cardImage"
                  width={300}
                  style={{ height: '50vh' }}
                />
                <div className="overlay" style={{ height: '50vh' }}>
                  {isDesktop && <h3 className="cardsText">The Restaurant</h3>}
                  {isMobile && (
                    <div className="overlay" style={{ height: '50vh' }}>
                      <h3 className="cardsText">Read more</h3>{' '}
                    </div>
                  )}
                </div>
              </Link>
            </div>
          </Col>
          <Col md={6} lg={4}>
            <div className="card-image-wrapper">
              <Link to="/portfolio#portfolio">
                <Card.Img
                  variant="top"
                  src={portfolioImage}
                  alt="Anonymous project"
                  className="img-fluid mb-3 custom-img cardImage"
                  width={300}
                  style={{ height: '50vh' }}
                />
                <div className="overlay" style={{ height: '50vh' }}>
                  {isDesktop && <h3 className="cardsText">My Portfolio</h3>}
                  {isMobile && (
                    <div className="overlay" style={{ height: '50vh' }}>
                      <h3 className="cardsText">Read more</h3>{' '}
                    </div>
                  )}
                </div>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Main;

import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import '../../scss/Main.scss';
import anonymPortfolio from '../../assets/images/anonymPortfoliojpg.jpg';
import majojo from '../../assets/images/Majojo.jpg';
import portfolioImage from '../../assets/images/marten-bjork-6dW3xyQvcYE-unsplash.jpg';
import { Link } from 'react-router-dom';

function Main() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const redValue = Math.max(255 - scrollY, 5);
  const greenValue = Math.max(255 - scrollY, 210);
  const blueValue = Math.max(255 - scrollY, 110);
  const colorValue = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

  return (
    <>
      <section className="full-height d-flex justify-content-center mt-5">
        <article className="d-flex flex-column align-items-start">
          <h1
            className="mainWelcome"
            style={{ color: colorValue, fontWeight: 'bolder' }}
          >
            Hi, <br />
            I´m Jonas
          </h1>
          <h2
            className="mainWelcome2"
            style={{ color: colorValue, fontWeight: 'bold' }}
          >
            Frontend Web Developer
          </h2>
        </article>
        <section className="left-box">
          <article></article>
        </section>
        <section className="right-box">
          <article></article>
        </section>
        <div className="transparent-overlay"></div>
      </section>

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
                  <h3 className="cardsText">Anonymous</h3>
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
                  <h3 className="cardsText">The Restaurant</h3>
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
                  <h3 className="cardsText">My Portfolio</h3>
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

import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../scss/Main.scss';
import anonymPortfolio from '../../assets/images/anonymPortfoliojpg.jpg';
import majojo from '../../assets/images/Majojo.jpg';
import portfolioImage from '../../assets/images/marten-bjork-6dW3xyQvcYE-unsplash.jpg';

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

  const redValue = Math.max(255 - scrollY, 24);
  const greenValue = Math.max(255 - scrollY, 107);
  const blueValue = Math.max(255 - scrollY, 102);
  const colorValue = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

  return (
    <main className="bg-white">
      <section className="full-height d-flex align-items-center justify-content-center">
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
      </section>

      <section className="box-wrapper">
        <Container>
          <Row>
            <Col md={6} lg={4}>
              <Card className="bg-white shadow rounded p-1 mb-4">
                <Card.Img
                  variant="top"
                  src={anonymPortfolio}
                  alt="Anonymous project"
                  className="img-fluid mb-3 custom-img"
                  width={300}
                  height={200}
                />
                <Card.Body>
                  <Card.Title>Anonymous</Card.Title>
                  <Card.Text>
                    This is my thesis. With coordinates retrieved from an API,
                    they are drawn on a canvas stage.
                  </Card.Text>
                  <Button href="/portfolio#anonymous" variant="outline-dark">
                    Read more
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="bg-white shadow rounded p-1 mb-4">
                <Card.Img
                  variant="top"
                  src={majojo}
                  alt="The restaurant project"
                  className="img-fluid mb-3 custom-img"
                />
                <Card.Body>
                  <Card.Title>The restaurant</Card.Title>
                  <Card.Text>
                    My first group work in React where we had to make a website
                    for a restaurant and where it was possible to book a table.
                    <br />
                    <em>Bon Appétit</em>
                  </Card.Text>
                  <Button href="/portfolio#restaurant" variant="outline-dark">
                    Read more
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="bg-white shadow rounded p-1 mb-4">
                <Card.Img
                  variant="top"
                  src={portfolioImage}
                  alt="The restaurant project"
                  className="img-fluid mb-3 custom-img"
                />
                <Card.Body>
                  <Card.Title>My Portfolio</Card.Title>
                  <Card.Text>This is my portfolio.</Card.Text>
                  <Button href="/portfolio#portfolio" variant="outline-dark">
                    Read more
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default Main;

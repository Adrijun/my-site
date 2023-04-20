import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../scss/Main.scss';

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
    <div className="bg-white">
      <div className="full-height d-flex align-items-center justify-content-center">
        <div className="d-flex flex-column align-items-start">
          <h1
            className="mainWelcome"
            style={{ color: colorValue, fontWeight: 'bolder' }}
          >
            Hi! <br />
            I´m Jonas
          </h1>
          <h2
            className="mainWelcome2"
            style={{ color: colorValue, fontWeight: 'bold' }}
          >
            Frontend Web Developer
          </h2>
        </div>

        <div className="left-box">
          <div className="box bg-white shadow rounded p-3"></div>
        </div>

        <div className="right-box">
          <div className="box bg-white shadow rounded p-3"></div>
        </div>
      </div>
      <div className="box-wrapper">
        <Container>
          <Row>
            <Col md={6} lg={4}>
              <div className="box bg-white shadow rounded p-3">
                <img
                  src="https://via.placeholder.com/300x200"
                  alt="Placeholder"
                  className="img-fluid mb-3"
                />
                <h2>Anonymous</h2>
                <p>
                  This is my thesis. With coordinates retrieved from an API,
                  they are drawn on a canvas stage.
                </p>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="box bg-white shadow rounded p-3">
                <img
                  src="https://via.placeholder.com/300x200"
                  alt="Placeholder"
                  className="img-fluid mb-3"
                />
                <h2>The restaurant</h2>
                <p>
                  My first group work in React where we had to make a website
                  for a restaurant and where it was possible to book a table.{' '}
                  <br />
                  Bon Appétit
                </p>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="box bg-white shadow rounded p-3">
                <img
                  src="https://via.placeholder.com/300x200"
                  alt="Placeholder"
                  className="img-fluid mb-3"
                />
                <h2>Box Heading</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  at nisi ac eros dignissim tincidunt id a eros. Donec
                  ullamcorper n nunc enim, et efficitur velit imperdiet id.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Main;

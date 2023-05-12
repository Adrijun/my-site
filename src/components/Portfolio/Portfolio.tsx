import React, { useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../../scss/Portfolio.scss';
import anonymPortfolio from '../../assets/images/anonymPortfoliojpg.jpg';
import majojo from '../../assets/images/Majojo.jpg';
import portfolioImage from '../../assets/images/marten-bjork-6dW3xyQvcYE-unsplash.jpg';
function Portfolio() {
  const projectRef = useRef(null);
  return (
    <main>
      <Container>
        <h1 id="projects-header-one">Projects</h1>
      </Container>
      <section className="box-wwrapper">
        <Container>
          <Row>
            <Col md={12} lg={12}>
              <article className="box bg-white shadow rounded p-1">
                <h2 ref={projectRef} id="anonymous">
                  Anonymous
                </h2>

                <img
                  src={anonymPortfolio}
                  alt="Placeholder"
                  className="img-fluid mb-3"
                />
                <p>
                  The idea of this project was to build a function that
                  retrieves data containing coordinates of people, boundaries
                  and danger zones. According to a predefined mapping scheme
                  with key points and using the coordinates, lines are drawn
                  between each key point to plot one or more people. Around each
                  person discovery there is a bounding box with a label. In this
                  function there is also a tool that uses the bounding box to
                  cut out that particular section of the image and create a
                  blurred filter that is placed on top of the background image.
                  With this feature, it will now render an image completely
                  anonymously and GDPR compliant. In this project I use
                  React,Typescript and React-Konva.
                </p>
                <Button
                  href="https://anonymous-pi.vercel.app/"
                  variant="outline-dark"
                >
                  Anonymous deployed
                </Button>
                <Button
                  href="https://github.com/Adrijun/React-Konva"
                  variant="outline-dark"
                >
                  Anonymous Github
                </Button>
              </article>
            </Col>
            <Col md={12} lg={12}>
              <article className="box bg-white shadow rounded p-1">
                <h2 ref={projectRef} id="restaurant">
                  The restaurant
                </h2>
                <img
                  src={majojo}
                  alt="Placeholder"
                  className="img-fluid mb-3"
                />
                <p>
                  This is my first group project in school. We had to find a
                  restaurant and create their website. There is a booking
                  function where guests can book a table. You can log in as an
                  admin to manage all the bookings. We have used React and Sass.
                </p>
                <Button
                  href="https://idyllic-cucurucho-f4089c.netlify.app/"
                  variant="outline-dark"
                >
                  The restaurant deployed
                </Button>
                <Button
                  href="https://github.com/Adrijun/Restaurangen"
                  variant="outline-dark"
                >
                  The restaurant Github
                </Button>
              </article>
            </Col>
            <Col md={12} lg={12}>
              <article
                className="box bg-white shadow rounded p-1"
                ref={projectRef}
                id="portfolio"
              >
                <h2>My portfolio</h2>
                <img
                  src={portfolioImage}
                  alt="Placeholder"
                  className="img-fluid mb-3"
                />
                <p>
                  This is my portfolio I will continuously post new projects in
                  my portfolio so that visitors can always see what I have been
                  working on lately. In this project I use React, Typescript and
                  Bootstrap to build and design the page. My portfolio is not
                  only a place for me to showcase my projects and skills. It is
                  also a place for me to learn new things. By working with new
                  techniques and design patterns in my portfolio, I can develop
                  my skills and strengthen my weaknesses.
                </p>
              </article>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default Portfolio;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import profileImage from '../../assets/images/profil1.bw1.jpg';
import '../../scss/About.scss';
import TechStack from '../../utils/techStack';

function About() {
  return (
    <>
      <Container className="mt-2 mb-3 ">
        <Row>
          <Col md={12} lg={12} className="anonymous-portfolio ">
            <Container className="box shadow rounded p-2 mb-1 project-wrapper ">
              <h2>About me</h2>
              <Row>
                <Col md={6} lg={4}>
                  <div className="image-portfolios">
                    <img
                      src={profileImage}
                      alt="Placeholder"
                      className="img-fluid mb-3 image-portfolio"
                    />
                  </div>
                </Col>
                <Col md={6} lg={8} className="">
                  <article>
                    <p>
                      My name is Jonas and I live in Stockholm, Sweden with my
                      family. Although I am new to Front-end, I have a passion
                      for development and like the small details, both design
                      and semantically written code is something I value highly.
                    </p>
                  </article>
                  <article>
                    <h2>Education</h2>
                    <p>
                      I graduated in Frontend development in June 2023 at the
                      Mediainstitutet in Stockholm where I have learned mostly
                      how to work in React but also some in Angular. I also got
                      to try how it is to work backend with Node.js. During
                      school I had an internship at a startup company called
                      Buddywise. Their idea is to prevent workplace accidents
                      using AI and cameras. In the first part of my internship I
                      got to help finalise some parts of their user interface.
                      Here I learnt how to work with agile working methods and
                      work with Bootstrap. In addition to my everyday tasks, I
                      also participated in Tele2 Iot talks to promote Buddywise.
                      During my second internship, I further developed my thesis
                      work that I had done. It was a function that was developed
                      for Buddywise. An anonymisation feature to create a
                      Gaussian blur effect when a notification is sent to the
                      client. With this feature, every image that the client
                      receives remains anonymous and GDPR safe. <br />
                      <i>You can find more info under projects </i>
                    </p>
                  </article>
                  <article className="work mb-4">
                    <h2>Work</h2>
                    <h3>
                      Internship as Front-end developer at Buddywise 2022-2023
                    </h3>
                    <p>
                      Finalised the user interface and developed the anonymous
                      feature.
                    </p>
                    <h3 className="mt-3 ">
                      Store manager at Färgscalan 2010-2021
                    </h3>
                    <p>
                      Responsible for the store's operation and onboarding for
                      new employees.
                    </p>
                  </article>
                </Col>
                <Col>
                  <TechStack />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;

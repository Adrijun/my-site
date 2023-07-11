import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import '../../scss/About.scss';
import profileImage from '../../assets/images/profil1.bw.jpg';
function About() {
  return (
    <>
      {/* <Container className="d-flex justify-content-center align-items-center">
        <div>
          <h2 id="aboutHeader"> About me </h2>

          <article className="box shadow rounded p-3 m-2 mb-1 aboutArticle">
            <Image src={profileImage} fluid className="imageAbout" />

            <p className="pt-3">
              You can download my CV for more detailed information about my
              experiences and skills. If you have any questions or if you'd like
              to discuss how I can support your organization, I'd be more than
              happy to hear from you.
            </p>
            <a
              href="/assets/documents/CV.pdf"
              download="CV.pdf"
              className="btn btn-outline-light"
            >
              Download CV (Swe)
            </a>
            <a
              href="/assets/documents/CV.pdf"
              download="CV.pdf"
              className="btn btn-outline-light"
            >
              Download CV (Eng)
            </a>
          </article>
        </div>
      </Container> */}
      {/* Stop!!!!!!!!!!!! */}
      <section className="box-wrapper">
        <Container className="mb-5">
          <h1 className="projects-header-one"> About me </h1>
          <Row>
            <Col md={12} lg={12} className="mb-5">
              <article className="box shadow rounded p-2 mb-1 projectsArticle">
                <Image src={profileImage} fluid className="image-portfolio" />
                <Row className="projectsContent">
                  <p className="pt-3">
                    You can download my CV for more detailed information about
                    my experiences and skills. If you have any questions or if
                    you'd like to discuss how I can support your organization,
                    I'd be more than happy to hear from you.
                  </p>
                  <Col
                    xs={6}
                    md={6}
                    className="d-flex flex-column justify-content-end"
                  >
                    <a
                      href="/assets/documents/CV.pdf"
                      download="CV.pdf"
                      className="btn btn-outline-light mt-3"
                    >
                      Download CV (Swe)
                    </a>
                    <a
                      href="/assets/documents/CV.pdf"
                      download="CV.pdf"
                      className="btn btn-outline-light mt-3"
                    >
                      Download CV (Eng)
                    </a>
                  </Col>
                </Row>
              </article>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default About;

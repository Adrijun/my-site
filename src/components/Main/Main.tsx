import { Container, Row, Col } from 'react-bootstrap';
import '../../scss/Main.scss';
import Video from '../../assets/videos/production_id_3978416(1080p).mp4';
import CarouselFunction from '../Carousel/CarouselFunction';
function Main() {
  return (
    <>
      <Row>
        <Col md={12} lg={12}>
          <section className="full-height d-flex justify-content-center align-items-center mt-5">
            <article className="showcase">
              <video
                src={Video}
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
                <p>Frontend Developer</p>
              </article>
            </article>
          </section>
        </Col>
      </Row>
      <Container>
        <Row className="d-flex justify-content-center">
          <Col md={8} lg={8}>
            <CarouselFunction />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Main;

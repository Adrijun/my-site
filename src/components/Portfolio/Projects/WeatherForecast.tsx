import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import weatherImage from '../../../assets/images/weather-images2.jpg';
import OpenInNewWindow from '../../../utils/OpenInNewWindow';
function WeatherForecast() {
  return (
    <Container className="box shadow rounded p-2 mb-1 project-wrapper">
      <h2 id="weatherforecast">Weather Forecast</h2>
      <Row>
        <Col md={6} lg={4}>
          <div className="image-portfolios">
            <img
              src={weatherImage}
              alt="Placeholder"
              className="img-fluid mb-3 image-portfolio"
            />
          </div>
        </Col>
        <Col md={6} lg={8}>
          <article className="projectsContent">
            <p>
              My weather application fetches real-time weather data from
              OpenWeatherMap to provide users with up-to-date weather forecast
              information. By using this API, I can create an engaging
              experience where the background changes based on the current
              weather conditions. This provides users with a visual
              representation of the current weather, creating a more interactive
              and dynamic application. <br />
              <OpenInNewWindow
                link="https://openweathermap.org/api"
                buttonText="OpenWeatherMap"
              />
            </p>
            <div className="button-group">
              <OpenInNewWindow
                link="https://weather-app-adrijun.vercel.app/"
                buttonText="Live Demo"
              />
              <OpenInNewWindow
                link="https://github.com/Adrijun/Weather-app"
                buttonText="Github Repo"
              />
            </div>
          </article>
        </Col>
      </Row>
    </Container>
  );
}

export default WeatherForecast;

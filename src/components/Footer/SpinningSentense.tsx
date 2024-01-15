import React, { useState, useEffect, useMemo } from 'react';
import '../../scss/SpinningSentense.scss';
import { Container, Row, Col } from 'react-bootstrap';
const SpinningSentence: React.FC = () => {
  const words = useMemo(
    () => [' special', ' amazing', ' great', ' together'],
    []
  );
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        const newIndex = (currentWordIndex + 1) % words.length;
        setCurrentWordIndex(newIndex);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [currentWordIndex, words]);

  return (
    <Container className="spinnerContainer">
      <Row className="centered">
        <Col xs={12} lg={8} className="spinnerText ">
          <p>Let's create something </p>
          <p className="slidingVertical">
            {words.map((word, index) => (
              <p
                key={index}
                style={{ animationDelay: `${index * 2.5}s` }}
                className={currentWordIndex === index ? 'visible' : ''}
              >
                {word}
              </p>
            ))}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default SpinningSentence;

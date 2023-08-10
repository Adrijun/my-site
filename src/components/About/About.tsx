import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import profileImage from '../../assets/images/profil1.bw1.jpg';
import downLoadIcon from '../../assets/icons/download.svg';
import { useState } from 'react';
import { Document, Page } from 'react-pdf';
// import CV from '../../../public/CV.pdf';
function About() {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }
  return (
    <>
      <Container className="mt-2 mb-3">
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
                <Col md={6} lg={8}>
                  <div className="projectsContent">
                    <p>
                      You can download my CV for more detailed information about
                      my experiences and skills. If you have any questions or if
                      you'd like to discuss how I can support your organization,
                      I'd be more than happy to hear from you.
                    </p>
                    <div className="button-group">
                      <a
                        href="/public/CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        type="application/pdf"
                        download="CV.pdf"
                        className="btn btn-outline-light m-1 mt-3"
                      >
                        <Image
                          src={downLoadIcon}
                          style={{ marginRight: '10px' }}
                        />
                        CV (Swe)
                      </a>
                      <a
                        href="/assets/documents/CV(eng).pdf"
                        download="CV(eng).pdf"
                        className="btn btn-outline-light m-1 mt-3"
                      >
                        <Image
                          src={downLoadIcon}
                          style={{ marginRight: '10px' }}
                        />
                        CV (Eng)
                      </a>
                    </div>
                  </div>
                  {/* <div>
                    <Document
                      file="CV.pdf"
                      onLoadSuccess={onDocumentLoadSuccess}
                    >
                      <Page pageNumber={pageNumber} />
                    </Document>
                    <p>
                      Page {pageNumber} of {numPages}
                    </p>
                  </div> */}
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

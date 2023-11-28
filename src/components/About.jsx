import FsLightbox from 'fslightbox-react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import './CSS/About.css';


function About() {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Marouane SA - About</title>
        </Helmet>
      </HelmetProvider>
      <FsLightbox
        toggler={lightboxController.toggler}
        
        slide={lightboxController.slide}
      />
      <Container fluid className="about-wrapper">
        <div className="about-left animate__animated animate__zoomIn">
          <h3>About</h3>
          <h4>
            ───&nbsp;&nbsp;Page <strong>02</strong>
          </h4>
        </div>
        <div className="about-right animate__animated animate__fadeIn animate__slower py-3">
          <p>
            Hello there! I'm Marouane Sid Ali Zenina,
            a passionate computer science student and a web developer.
            My journey in the world of technology is fueled by
            a relentless curiosity and a desire to create innovative solutions that make a positive impact.
            As a computer science enthusiast, I thrive on the challenges that come with exploring the intricate world of algorithms, 
            data structures, and cutting-edge technologies
            I find joy in unraveling complex problems and turning them into elegant, efficient solutions.
          </p>
        </div>
      </Container>
    </>
  );
}

export default About;

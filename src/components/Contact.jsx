import {
  AiOutlineMail,
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Container } from "react-bootstrap";
import { FiCopy } from "react-icons/fi";
import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import "./CSS/Contact.css";

function Contact() {
  const [alreadyCopy, setAlreadyCopy] = useState("Copy");

  function actionCopy() {
    setAlreadyCopy("Copied");

    setTimeout(function () {
      setAlreadyCopy("Copy");
    }, 1000);
  }

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Marouane SA - Contact</title>
        </Helmet>
      </HelmetProvider>
      <Container fluid className="contact-wrapper">
        <div className="contact-left animate__animated animate__zoomIn">
          <h3>Contact</h3>
          <h4>
            ───&nbsp;&nbsp;Page <strong>05</strong>
          </h4>
        </div>
        <div className="contact-right">
          <div className="contact-container">
            <div className="row">
              <div className="col contact-col animate__animated animate__slideInLeft">
                <div className="email-wrapper">
                  <h3>
                    <AiOutlineMail />
                    &nbsp;&nbsp;Email
                  </h3>
                  <p>marouane.sa.zenina@gmail.com</p>
                  <CopyToClipboard text="marouane.sa.zenina@gmail.com">
                    <button className="btn-copy" onClick={actionCopy}>
                      {alreadyCopy}&nbsp;&nbsp;
                      <FiCopy />
                    </button>
                  </CopyToClipboard>
                </div>
              </div>
              <div className="col contact-col animate__animated animate__slideInRight">
                <div className="linkedin-wrapper">
                  <h3>
                    <AiFillLinkedin />
                    &nbsp;&nbsp;Linkedin
                  </h3>
                  <p>Marouane sid ali Zenina</p>
                  <a
                    href="https://www.linkedin.com/in/marouane-sid-ali/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-direct"
                  >
                    Visit&nbsp;&nbsp;
                    <AiOutlineArrowRight />
                  </a>
                </div>
              </div>
              <div className="col contact-col animate__animated animate__slideInLeft">
                <div className="github-wrapper">
                  <h3>
                    <AiFillGithub />
                    &nbsp;&nbsp;GitHub
                  </h3>
                  <p>MarouaneSA</p>
                  <a
                    href="https://github.com/MarouanSidali"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-direct"
                  >
                    Visit&nbsp;&nbsp;
                    <AiOutlineArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Contact;

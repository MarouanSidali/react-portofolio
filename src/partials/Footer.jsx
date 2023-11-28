import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import "./CSS/Footer.css";

function Footer() {
  return (
    <>
      <footer className="px-4">
        <div className="foot-left d-flex">
          <p>Marouane Sid Ali Zenina &copy; 2023</p>
        </div>
        <div className="foot-right d-flex">
          <a
            href="https://github.com/MarouanSidali"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub className="foot-icon" />
            &nbsp;&nbsp;GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/marouane-sid-ali/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className="foot-icon" />
            &nbsp;&nbsp;Linkedin
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;

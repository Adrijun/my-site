import React, { forwardRef } from 'react';
import '../../scss/Footer.scss';
import eMailIcon from '../../assets/icons/mail(1).svg';
import githubIcon from '../../assets/icons/github(1).svg';
import linkedInIcon from '../../assets/icons/linkedin.svg';
const Footer = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <footer className="footerContainer" ref={ref}>
      <article>
        <h3 className="footer-header">
          Connect <br /> with me.
        </h3>
      </article>
      <article className="logos">
        <a
          className="linkhover"
          href="https://www.linkedin.com/in/jonaseriksson90/"
        >
          <img src={linkedInIcon} alt="LinkedIn logo" width="50" height="50" />
        </a>
        <a className="linkhover" href="mailto:jonasericsson90@hotmail.com">
          <img src={eMailIcon} alt="Email" width="50" height="50" />
        </a>
        <a href="https://github.com/Adrijun">
          <img
            className="linkhover"
            // id="gitHub"
            src={githubIcon}
            alt="Github logo with black cat"
            width="50"
            height="50"
          />
        </a>
      </article>
    </footer>
  );
});

export default Footer;

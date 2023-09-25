import JavaScript from '../assets/icons/icons8-javascript.svg';
import Angular from '../assets/icons/icons8-angular-48(1).png';
import Bootstrap from '../assets/icons/icons8-bootstrap.svg';
import CSS from '../assets/icons/icons8-css-48.png';
import Figma from '../assets/icons/icons8-figma-64.png';
import Git from '../assets/icons/icons8-git-50.png';
import Github from '../assets/icons/icons8-github-48.png';
import HTML from '../assets/icons/icons8-html-5-48.png';
import MongoDB from '../assets/icons/icons8-mongo-db-64.png';
import MySQL from '../assets/icons/icons8-my-sql-64.svg';
import NodeJS from '../assets/icons/icons8-node-js(1).svg';
import React from '../assets/icons/icons8-react-80.svg';
import Sass from '../assets/icons/icons8-sass(1).svg';
import TypeScript from '../assets/icons/icons8-typescript(1).svg';
import WebAccessiblity from '../assets/icons/icons8-web-accessibility-50.png';
import { Col } from 'react-bootstrap';
function TechStack() {
  return (
    <Col md={6} lg={6} className=" offset-md-6 offset-lg-4 ">
      <article>
        <h2>Skills</h2>
        <img
          className="iconHover"
          src={HTML}
          alt="Html Icon"
          width="50"
          height="50"
          title="Html"
        />
        <img
          className="iconHover"
          src={CSS}
          alt="CSS Icon"
          width="50"
          height="50"
          title="CSS"
        />
        <img
          className="iconHover"
          src={Sass}
          alt="Sass Icon"
          width="50"
          height="50"
          title="Sass"
        />
        <img
          className="iconHover"
          src={Bootstrap}
          alt="Bootstrap Icon"
          width="50"
          height="50"
          title="Bootstrap"
        />
        <img
          className="iconHover"
          src={JavaScript}
          alt="JavaScript Icon"
          width="50"
          height="50"
          title="JavaScript"
        />
        <img
          className="iconHover"
          src={React}
          alt="React Icon"
          width="50"
          height="50"
          title="React"
        />
        <img
          className="iconHover"
          src={Angular}
          alt="Angular Icon"
          width="50"
          height="50"
          title="Angular"
        />
        <img
          className="iconHover"
          src={TypeScript}
          alt="TypeScript Icon"
          width="50"
          height="50"
          title="TypeScript"
        />
        <img
          className="iconHover"
          src={Git}
          alt="Git Icon"
          width="50"
          height="50"
          title="Git"
        />
        <img
          className="iconHover"
          src={Github}
          alt="Github Icon"
          width="50"
          height="50"
          title="Github"
        />
        <img
          className="iconHover"
          src={MongoDB}
          alt="MongoDB Icon"
          width="50"
          height="50"
          title="MongoDB"
        />
        <img
          className="iconHover"
          src={MySQL}
          alt="MySQL Icon"
          width="50"
          height="50"
          title="MySQL"
        />
        <img
          className="iconHover"
          src={NodeJS}
          alt="NodeJS Icon"
          width="50"
          height="50"
          title="NodeJS"
        />
        <img
          className="iconHover"
          src={Figma}
          alt="Figma Icon"
          width="50"
          height="50"
          title="Figma"
        />
        <img
          className="iconHover"
          src={WebAccessiblity}
          alt="WebbAccessibility Icon"
          width="50"
          height="50"
          title="Web Accessibility"
        />
      </article>
    </Col>
  );
}
export default TechStack;

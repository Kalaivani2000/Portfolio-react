import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Project1 from "../../Assets/Projects/Presento-template.jpg";
import Project2 from "../../Assets/Projects/Arsha-bootstrap.jpg";
import Project3 from "../../Assets/Projects/linkedin-login.png";
import Project4 from "../../Assets/Projects/TodoApp.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
             imgPath={Project1}
              title="Presento-template"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
               ghLink="https://github.com/Kalaivani2000/fabevy-website-1"
               demoLink="https://kalaivani2000.github.io/fabevy-website-1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Project2}
              title="Arsha-template"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/Kalaivani2000/website-2-fabevy"
              demoLink="https://kalaivani2000.github.io/website-2-fabevy/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Project3}
              title="linkdin"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/Kalaivani2000/task-3-js"   
              demoLink="https://kalaivani2000.github.io/task-3-js/"           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Project4}
              title="Todo-list"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/Kalaivani2000/Todo-list-js"
              demoLink="https://kalaivani2000.github.io/Todo-list-js/"
             
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

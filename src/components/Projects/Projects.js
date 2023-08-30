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
        <h1 className="project-heading" style={{textAlign:"center" }}>
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" ,textAlign:"center"}}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
             imgPath={Project1}
              title="Presento-template"
              description="Presento is a modern, creative and clean HTML corporate Bootstrap template. It can be used for building elegant and modern corporate websites, small business homepages, app landing pages, startup website, software & SaaS company websites. Comes with all the necessary pages and elements to build a stunning website with no time."
               ghLink="https://github.com/Kalaivani2000/fabevy-website-1"
               demoLink="https://kalaivani2000.github.io/fabevy-website-1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Project2}
              title="Arsha-template"
              description="Arsha is a clean and modern business Bootstrap template designed specifically for startup, apps and IT services.You will be able to showcase your content on mobile devices such as smartphones, tablets and all types of devices. Arsha's design is driven by minimalist and unique sections."
              ghLink="https://github.com/Kalaivani2000/website-2-fabevy"
              demoLink="https://kalaivani2000.github.io/website-2-fabevy/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Project3}
              title="LinkdIn"
              description="LinkdIn project is done in Html,CSS,Bootstrap and Javascript.The project has login page,signup page and linkdin page.Looking to utilize my technology and leadership skills in an esteemed organization. Well versed with research-oriented marketing abilities and product analysis."
              ghLink="https://github.com/Kalaivani2000/task-3-js"   
              demoLink="https://kalaivani2000.github.io/task-3-js/"           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Project4}
              title="Todo-list"
              description="To-Do List project is an application specially built to keep track of errands or tasks that need to be done. This application will be like a task keeper where the user would be able to enter the tasks that they need to do."
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

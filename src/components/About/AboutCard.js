import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kalaivani </span>
            from <span className="purple">Chennai, India.</span>
            <br /> I am a Fresher.I have completed my Bachelor's in the stream of 
            Electronice and Communication Engineering.
            <br />
            Additionally,I have completed a intership in FrontEnd Developer
            <br />
            <br />
          </p>
          {/* <p style={{ color: "rgb(155 126 172)" }}>
          “You've got to learn to leave the table when love's no longer being served.”{" "}
          </p> */}
          {/* <footer className="blockquote-footer">Kalaivani</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

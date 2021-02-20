import "./styles.css";

import { ResumeBody } from "./components/Resume";
import { Card, Container } from "react-bootstrap";

export default function App() {
  return (
    <div style={{ backgroundColor: "#BEA69F" }} className="App">
      <Container
        className="shadow py-2 px-2"
        style={{ backgroundColor: "#56423D" }}
      >
        <Card
          style={{ backgroundColor: "#E67455" }}
          className="shadow animate fade-in"
        >
          <Card.Body style={{ backgroundColor: "#E67455" }}>
            <ResumeBody></ResumeBody>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

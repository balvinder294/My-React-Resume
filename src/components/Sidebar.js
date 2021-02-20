import { Blogs } from "./Blog";
import { Links } from "./Links";
import { Row, Col, Card } from "react-bootstrap";

export function Sidebar() {
  return (
    <>
      <Row>
        <Col xs={12} sm={6} md={12} style={{ backgroundColor: "#F27F5F" }}>
          <Links></Links>
        </Col>
        <Col xs={12} sm={6} md={12} style={{ backgroundColor: "#F27F5F" }}>
          <Blogs></Blogs>
        </Col>
        <Col style={{ backgroundColor: "#F27F5F" }}>
          <OtherData></OtherData>
        </Col>
      </Row>
    </>
  );
}

export function OtherData() {
  return (
    <>
      <Card className="shadow mt-2 mb-2">
        <Card.Body style={{ backgroundColor: "#EDE9D0" }}>
          <b>Hobbies</b>
          <br />
          <span>Blogging, Writing, Gaming</span>
          <br />
          <b>Programming IDEs</b>
          <br />
          <span>Visual Studio Code, Intellij Idea, Android Studio, ATOM</span>
          <br />
          <b>Languages</b>
          <br />
          <span>English, Hindi, Punjabi</span>
        </Card.Body>
      </Card>
    </>
  );
}

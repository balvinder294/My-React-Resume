import { Card, Row, Col, Container } from "react-bootstrap";
import { resumeData } from "../data";

export function CareerSummaryList() {
  return (
    <div>
      <Card className="shadow">
        <Card.Body style={{ backgroundColor: "#EDE9D0" }}>
          <Card.Title className="text-secondary">Career Summary</Card.Title>
          <hr />
          <CareerSummary></CareerSummary>
        </Card.Body>
      </Card>
    </div>
  );
}

export function CareerSummary() {
  return (
    <Container>
      <Row>
        {resumeData.careerSummary.map((value, index) => {
          return (
            <Col sm={12} md={12} key={index}>
              <b>{value.title}</b>
              <br />
              <span className="text-emphasized">{value.company}</span>
              <br />
              <span>{value.date}</span>
              <br />
              <ul className="pl-3">
                {value.description.map((val, ind) => {
                  return (
                    <li key={ind} className="pt-2 pl-0 ml-0 text-muted">
                      {val}
                    </li>
                  );
                })}
              </ul>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

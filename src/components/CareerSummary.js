import { Card, Row, Col, Container } from "react-bootstrap";

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
        {CareerSummaries.map((value, index) => {
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

export const CareerSummaries = [
  {
    title: "Senior Software Engineer",
    company: "Dehaze Labs(Formerly dehaze)",
    date: "March 2019 to present",
    description: [
      "Manage the development of application and deployment including front end, back end and servers",
      "Apis and Frontend design"
    ]
  },
  {
    title: "Junior Software Engineer",
    company: "Dehaze Labs",
    date: "May 2018 to Feb 2019",
    description: [
      "Building Application with Spring and Angular",
      "Design of Apis And Screens"
    ]
  },
  {
    title: "Senior Engineer",
    company: "Simba Labs",
    date: "Nov 2017 to March 2019",
    description: [
      "Enterprise Applications and Infrastructure Design",
      "R&D on applications and Generators"
    ]
  },
  {
    title: "Product Engineer",
    company: "Hartron",
    date: "June 2017 to August 2017",
    description: ["Web Application Development and Designing"]
  },
  {
    title: "Student Coordinator and Developer",
    company: "Guru Jambheshwar University",
    date: "Dec 2016 to May 2017",
    description: [
      `Training and Placement
      Website Development With
      Wordpress and PHP`,
      `Managing Placement
      Information and Student
      Records
      `
    ]
  }
];

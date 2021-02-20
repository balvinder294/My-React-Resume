import { Card, Container, Row, Col } from "react-bootstrap";

export function PersonalApps() {
  return (
    <>
      <Card className="shadow">
        <Card.Body style={{ backgroundColor: "#EDE9D0" }}>
          <Card.Title>Personal Apps</Card.Title>
          <Container>
            <Row>
              <Col>
                <ul className="pl-2">
                  {personalApps.map((value, index) => {
                    return (
                      <li key={index}>
                        <a
                          href={value.url}
                          rel="noopener noreferrer external"
                          target="_blank"
                        >
                          {value.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
}

export const personalApps = [
  {
    title: "Tekraze Blog",
    url:
      "https://play.google.com/store/apps/details?id=com.tekraze.blog&hl=en_IN"
  },
  {
    title: "Techeconomy Blog",
    url: "https://play.google.com/store/apps/details?id=in.techeconomy.blog"
  }
];

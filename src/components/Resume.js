import { Card, Container, Row, Col, Image } from "react-bootstrap";

import { CareerSummaryList } from "./CareerSummary";
import { EducationList } from "./Education";
import { PersonalProfile } from "./PersonalProfile";
import { ProfessionalSkillsList } from "./ProfessionalSkills";
import { PersonalApps } from "./PersonalApps";
import { Sidebar } from "./Sidebar";

export function ResumeBody() {
  return (
    <Card className="shadow border mx-auto text-sm-center">
      <Card.Body style={{ backgroundColor: "#F27F5F" }}>
        <Container style={{ backgroundColor: "#b5ac86" }}>
          <Row style={{ backgroundColor: "#b5ac86" }}>
            <Col sm="12" md="4" style={{ backgroundColor: "#F27F5F" }}>
              <ResumeHeader></ResumeHeader>
              <Sidebar></Sidebar>
            </Col>
            <Col sm="12" md="4" style={{ backgroundColor: "#F27F5F" }}>
              <br />
              <br />
              <PersonalProfile></PersonalProfile>
              <EducationList></EducationList>
              <ProfessionalSkillsList></ProfessionalSkillsList>
              <PersonalApps></PersonalApps>
            </Col>
            <Col sm="12" md="4" style={{ backgroundColor: "#F27F5F" }}>
              <br />
              <br />
              <CareerSummaryList></CareerSummaryList>
            </Col>
          </Row>
          <Row>
            <Col style={{ backgroundColor: "#F27F5F" }}>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col style={{ backgroundColor: "#F27F5F" }}>
              <hr
                style={{
                  border: "dashed",
                  color: "#C44F6B",
                  width: "50%",
                  lineHeight: "2px"
                }}
              />
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

export function ResumeHeader() {
  return (
    <>
      <div className="text-center justify-content-center">
        <Image
          style={{ width: "160px", alignItems: "center" }}
          roundedCircle
          className="img-fluid roundedCircle pb-2"
          src="profile-pic.png"
        />
      </div>
      <Card className="shadow mt-2">
        <Card.Body
          style={{
            radius: "5em black",
            shadow: "inherit",
            backgroundColor: "#EDE9D0"
          }}
          className="text-center"
        >
          <Card.Title className="text-secondary">
            Balvinder Singhs Resume
          </Card.Title>
          <hr />
          <Card.Subtitle className="text-muted">
            Full Stack Developer And DevOps
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </>
  );
}

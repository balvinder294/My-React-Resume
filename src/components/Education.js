import { Card } from "react-bootstrap";
import { resumeData } from "../data";

export function EducationList() {
  return (
    <>
      <Card className="shadow mb-2">
        <Card.Body style={{ backgroundColor: "#EDE9D0" }}>
          <Card.Title className="text-secondary">Education</Card.Title>
          <hr />
          <Education></Education>
        </Card.Body>
      </Card>
    </>
  );
}

export function Education() {
  return (
    <>
      {resumeData.educations.map((value, index) => {
        return (
          <div className="my-2" key={index}>
            <b>{value.title}</b>
            <br />
            <span>{value.detail}</span>
            <br />
          </div>
        );
      })}
    </>
  );
}

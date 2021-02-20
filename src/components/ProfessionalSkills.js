import { Card } from "react-bootstrap";
import { resumeData } from "../data";

export function ProfessionalSkillsList() {
  return (
    <>
      <Card className="mb-2 shadow">
        <Card.Body style={{ backgroundColor: "#EDE9D0" }}>
          <Card.Title className="text-secondary">
            Professional Skills
          </Card.Title>
          <hr />
          <ProfessionalSkill></ProfessionalSkill>
        </Card.Body>
      </Card>
    </>
  );
}

export function ProfessionalSkill() {
  return (
    <>
      {resumeData.professionalSkills.map((value, index) => {
        return (
          <div className="my-2" key={index}>
            <b>{value.title}</b>
            <br />
            <span>{value.description}</span>
            <br />
          </div>
        );
      })}
    </>
  );
}

import { Card } from "react-bootstrap";

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
      {Educations.map((value, index) => {
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

export const Educations = [
  {
    title: `Guru Jambheshwar
    University of Science and
    Technology`,
    detail: ["Information Technology 2013-17"]
  },
  {
    title: `New Lahoria Vidya Mandir`,
    detail: ["12th CBSE 2013", "10th CBSE 2011"]
  }
];

import { Card } from "react-bootstrap";

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
      {ProfessionalSkills.map((value, index) => {
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

export const ProfessionalSkills = [
  {
    title: "Coding Languages",
    description: "Java, Angular2+, JavaScript, HTML/CSS, Python, Nodejs, React"
  },
  {
    title: "Frameworks/Systems",
    description:
      "MVC, JHipster, Spring Boot, bootstrap, Django, ExpressJS, Wordpress, NPM, Yarn, Yeoman, Ionic, Android"
  },
  {
    title: "Database",
    description: "Cassandra, MongoDb, MySql, Redis"
  }
];

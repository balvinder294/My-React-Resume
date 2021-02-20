import { Card } from "react-bootstrap";

export function PersonalProfile() {
  return (
    <div>
      <Card className="shadow mb-2">
        <Card.Body style={{ backgroundColor: "#EDE9D0" }}>
          <Card.Title className="text-secondary">Personal Profile</Card.Title>
          <hr />
          <p className="pl-1">
            I am a full stack software developer with robust problem-solving
            skills and proven experience in creating and designing software in a
            test-driven environment always looking to work with new things
          </p>
        </Card.Body>
      </Card>
    </div>
  );
}

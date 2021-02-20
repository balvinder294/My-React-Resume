import { Card } from "react-bootstrap";
import { resumeData } from "../data";

export function PersonalProfile() {
  return (
    <div>
      <Card className="shadow mb-2">
        <Card.Body style={{ backgroundColor: "#EDE9D0" }}>
          <Card.Title className="text-secondary">Personal Profile</Card.Title>
          <hr />
          <p className="pl-1 text-muted">{resumeData.profileSummary}</p>
        </Card.Body>
      </Card>
    </div>
  );
}

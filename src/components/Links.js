import { Card } from "react-bootstrap";
import { resumeData } from "../data";

export function Links() {
  return (
    <>
      <Card className="shadow my-2">
        <Card.Body style={{ backgroundColor: "#EDE9D0" }}>
          <Card.Title className="text-secondary text-center">
            How To reach me
          </Card.Title>
          <hr />
          <div className="pl-3 ml-2">
            <b>Mobile:</b>
            <br />
            <span>8950517959</span>
            <br />
            <span>8708986557</span>
            <br />
            {resumeData.links.map((value, index) => {
              return (
                <div key={index}>
                  <b>{value.title}</b>
                  <br />
                  {value.link ? (
                    <a href={value.link}>{value.value}</a>
                  ) : (
                    <span>{value.value}</span>
                  )}
                  <br />
                </div>
              );
            })}
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

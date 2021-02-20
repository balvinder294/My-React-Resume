import { Card } from "react-bootstrap";
import { resumeData } from "../data";

export function Blogs() {
  return (
    <>
      <Card className="shadow mt-2">
        <Card.Body style={{ backgroundColor: "#EDE9D0" }}>
          <Card.Title className="text-center text-secondary">Blogs</Card.Title>
          <hr />
          <div className="pl-3 ml-2">
            {resumeData.blogs.map((value, index) => {
              return (
                <div key={index}>
                  <b>
                    <a href={value.url}>{value.title}</a>
                  </b>
                  <br />
                  <span>{value.description}</span>
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

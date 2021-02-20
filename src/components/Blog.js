import { Card } from "react-bootstrap";

export function Blogs() {
  return (
    <>
      <Card className="shadow mt-2">
        <Card.Body style={{ backgroundColor: "#EDE9D0" }}>
          <Card.Title className="text-center text-secondary">Blogs</Card.Title>
          <hr />
          <div className="pl-3 ml-2">
            {blogs.map((value, index) => {
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

export const blogs = [
  {
    title: "Tekraze.com",
    url: "https://tekraze.com",
    description: "Founder and Blogger"
  },
  {
    title: "Techeconomy.in",
    url: "https://techeconomy.in",
    description: "Founder and Blogger"
  },
  {
    title: "Medium.com",
    url: "https://medium.com/@erbalvindersingh",
    description: "Blogger"
  },
  {
    title: "Dev.to",
    url: "https://dev.to/balvinder294",
    description: "Blogger"
  }
];

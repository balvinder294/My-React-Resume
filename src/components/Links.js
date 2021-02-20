import { Card } from "react-bootstrap";

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
            {links.map((value, index) => {
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

export const links = [
  {
    title: "Email",
    value: "balvinder294@gmail.com",
    link: "mailto:balvinder294@gmail.com"
  },
  {
    title: "LinkedIn",
    value: "@balvinder-singh-667a908b",
    link: "https://www.linkedin.com/in/balvinder-singh-667a908b/"
  },
  {
    title: "Address",
    value: "111, Gali No1, Dhani Sham Lal, Hisar, Haryana. 125001"
  },
  {
    title: "Skype",
    value: "@balvinder294"
  },
  {
    title: "Github",
    link: "https://github.com/balvinder294",
    value: "@balvinder294"
  }
];

import { Card, Button, Form } from "react-bootstrap";

export const BCard = (props) => {
  const name = props.src.split("/");
  const realName = name[name.length - 1].replace(".jpg", "");
  return (
    <Card
      bg={"primary"}
      style={{ width: "18rem" }}
      className="mb-2"
      border="success"
    >
      <Card.Header as="h6">Enjoy The Beautiful Image</Card.Header>
      <Card.Img
        width={"100px"}
        height={"200px"}
        variant="top"
        src={props.src}
        rounded
      />
      <Card.Body>
        <Card.Title>{realName}</Card.Title>
        <Card.Text>
          Size: {props.imgSize}bytes/{props.imgSize / 1000}kb/
          {props.imgSize / 1000000}mb
        </Card.Text>
      </Card.Body>

      <Card.Footer>
        <Form inline>
          <Form.Control
            size="sm"
            type="text"
            placeholder="Add a comment"
            className=" mr-sm-2"
          />
          <Button size="sm" variant="light" type="submit">
            Post
          </Button>
        </Form>
      </Card.Footer>
    </Card>
  );
};
export default BCard;

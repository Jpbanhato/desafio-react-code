import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function CardComponent({key, nome, email, departamentos, cargo, aniversario}) {
  return (
    <Card
      style={
        {
          width: "18rem",
        }
      }
    >
      <CardBody>
        <CardTitle tag="h5">{ nome }</CardTitle>
      </CardBody>
      <ListGroup flush>
        <ListGroupItem>{ email }</ListGroupItem>
        <ListGroupItem>{ departamentos }</ListGroupItem>
        <ListGroupItem>{ cargo }</ListGroupItem>
        <ListGroupItem>{ aniversario }</ListGroupItem>
      </ListGroup>
    </Card>
  );
}

export default CardComponent;

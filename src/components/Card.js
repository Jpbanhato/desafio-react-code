import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";

function CardComponent({ nome, email, departamentos, cargo, aniversario }) {
  return (
    <Card
      style={{
        width: "18rem",
      }}
    >
      <CardBody>
        <CardTitle tag="h5">{nome}</CardTitle>
      </CardBody>
      <ListGroup flush>
        <ListGroupItem>Email: {email}</ListGroupItem>
        <ListGroupItem>
          Depatamento(s):
          {departamentos.map((departamento) => (
            <span>{departamento}</span>
          ))}
        </ListGroupItem>
        <ListGroupItem>Cargo: {cargo}</ListGroupItem>
        <ListGroupItem>Aniversario: {aniversario}</ListGroupItem>
      </ListGroup>
    </Card>
  );
}

// CardComponent.propTypes = {
//   nome: PropTypes.string.isRequired,
//   email: React.PropTypes.string.isRequired,
//   departamentos: React.PropTypes.array.isRequired,
//   cargo: React.PropTypes.string.isRequired,
//   aniversario: React.PropTypes.string.isRequired,
// };

export default CardComponent;

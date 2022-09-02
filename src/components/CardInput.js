import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CardInput.css";
import Button from "../components/Button";

function CardComponent({
  nome,
  email,
  departamentos,
  cargo,
  aniversario,
  onSubmit,
}) {
  return (
    <Card
      style={{
        width: "30rem",
      }}
    >
      <form type="submit" onSubmit={onSubmit}>
        <CardBody>
          <CardTitle tag="h5">
            Nome:{" "}
            <input
              type="text"
              style={{ color: "white" }}
              className="input-card mt-1"
              placeholder={nome}
            />
          </CardTitle>
        </CardBody>
        <ListGroup flush>
          <ListGroupItem>
            Email:
            <input
              type="email"
              className="input-card mt-1"
              placeholder={email}
            />
          </ListGroupItem>
          <ListGroupItem>
            Depatamento(s):
            {departamentos.map((departamento) => (
              <span>
                <input
                  type="text"
                  className="input-card mt-1"
                  placeholder={departamento}
                />
              </span>
            ))}
          </ListGroupItem>
          <ListGroupItem>
            Cargo:{" "}
            <input
              type="text"
              className="input-card mt-1"
              placeholder={cargo}
            />
          </ListGroupItem>
          <ListGroupItem>
            Aniversario:{" "}
            <input
              type="text"
              className="input-card mt-1"
              placeholder={aniversario}
            />
          </ListGroupItem>
        </ListGroup>
        <Button name="Salvar" color="rgb(20, 81, 49)" />
      </form>
    </Card>
  );
}

export default CardComponent;

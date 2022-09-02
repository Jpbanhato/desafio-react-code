import * as React from "react";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "../components/Button";
import "./Admin.css";
import CardInput from "../components/CardInput";

function Admin() {
  useEffect(() => {
    document.title = "Admin";
  }, []);

  const [members, setMembers] = useState([]);
  const [item, setItem] = useState([]);
  const [exibirModal, setExibirModal] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/members")
      .then((response) => response.json())
      .then((data) => {
        setMembers(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // fetch("http://localhost:3001/members/1", {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         name: "Teste",
  //         email: "
  //         phone: "123456789",

  //       }),
  //       })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setMembers(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  const rows = members.map((member) => {
    return {
      ...member,
    };
  });

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Nome",
      width: 150,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
      editable: true,
    },
    {
      field: "departamentos",
      headerName: "Departamento(s)",
      description: "Departamentos do membro",
      width: 150,
      editable: true,
    },
    {
      field: "cargo",
      headerName: "Cargo",
      width: 150,
    },
    {
      field: "aniversario",
      headerName: "Aniversário",
      width: 150,
      editable: true,
    },
  ];

  return (
    <>
      <div className="admin-content">
        <div className="data-grid" style={{ height: 300, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            onSelectionModelChange={(newSelection) => {
              setItem(newSelection);
              console.log(item);
            }}
            selectionModel={item}
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        </div>
        <Button
          name="Adicionar Novo"
          color="rgb(26, 90, 153)"
          onClick={() => {
            setExibirModal(!exibirModal);
          }}
        />
      </div>
      <div className="card-div">
        {exibirModal && (
          <>
            <CardInput
              key={0}
              nome={"Nome"}
              email={"emailaaa"}
              departamentos={["a", "b"]}
              cargo={"cargou"}
              aniversario={"niver<3"}
              style={{ position: "absolute" }}
            />
          </>
        )}
      </div>
    </>
  );
}

export default Admin;

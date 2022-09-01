import * as React from "react";
import { useEffect, useState } from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import "./Admin.css";

function Admin() {
  useEffect(() => {
    document.title = "Admin";
  }, []);

  const [members, setMembers] = useState([]);

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
    //   valueGetter: (params) =>
    //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "aniversario",
      headerName: "Aniversário",
      width: 150,
      editable: true,
    },
  ];

//   const rows = [
//     // members.map ((member) => (
//     //     { id: member.id, nome: member.name, email: member.email, departamentos: member.departamentos, cargo: member.cargo, aniversario: member.aniversario }
//     // ))
//     // ];
//     { id: 1, nome: "Nome", email: "email@gmail.com", departamentos: "depto", cargo: "cargo", aniversario: "01/01/2021" },
//     { id: 2, nome: "Nome", email: "email@gmail.com", departamentos: "depto", cargo: "cargo", aniversario: "01/01/2021" },
//     { id: 3, nome: "Nome", email: "email@gmail.com", departamentos: "depto", cargo: "cargo", aniversario: "01/01/2021" },
//     { id: 4, nome: "Nome", email: "email@gmail.com", departamentos: "depto", cargo: "cargo", aniversario: "01/01/2021" },
//     { id: 5, nome: "Nome", email: "email@gmail.com", departamentos: "depto", cargo: "cargo", aniversario: "01/01/2021" },
//     { id: 6, nome: "Nome", email: "email@gmail.com", departamentos: "depto", cargo: "cargo", aniversario: "01/01/2021" },
//   ];

  return (
    <div className="admin-content">
      <div className="data-grid" style={{ height: 300, width: "100%" }}>
        <DataGrid
          rows={members}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </div>
    </div>
  );
}

export default Admin;

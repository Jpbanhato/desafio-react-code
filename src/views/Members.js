import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import "./Members.css";

function Members() {
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

  return (
    <>
      <div className="content">
        <h1 className="section-title">Membros:</h1>
        <div className="container-card">
          {members.map((member) => (
            <Card
              key={member.id}
              nome={member.name}
              email={member.email}
              departamentos={member.departamentos}
              cargo={member.cargo}
              aniversario={member.aniversario}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Members;

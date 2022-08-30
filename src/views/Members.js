import "./Members.css";
import React, { useState } from "react";
import Card from "../components/Card";
import { members } from "../members.json";

export function Members() {
  return (
    <>
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
    </>
  );
}

import "./Members.css";
import React, { useState } from "react";
import Card from "../components/Card";
import { members } from "../members.json";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export function Members() {
  return (
    <>
      <Navbar />
      <div className="content">
        <h1 className="section-title">Membros:</h1>
        <div className="container-card">
          {members.map((member) => (
            <Card
              nome={member.name}
              email={member.email}
              departamentos={member.departamentos}
              cargo={member.cargo}
              aniversario={member.aniversario}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

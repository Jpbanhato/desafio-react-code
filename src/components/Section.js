import React, { useState } from "react";
import "./Section.css";

function Section(props) {
  return (
    <section
      className={props.name + " main"}
      style={
        ({ backgroundImage: "url(" + props.url + ")" },
        { flexDirection: props.reverse ? "row-reverse" : "row" })
      }
    >
      <div
        className={props.name + "-left" + " main-left"}
        style={{ backgroundColor: props.color }}
      >
        <h1 className={props.name + "-title" + " main-title"}>{props.title}</h1>
        <p className={props.name + "-text" + " main-text"}>{props.text}</p>
      </div>
      <div className={props.name + "-right" + " main-right"}>
        <img
          src={props.img}
          alt="section-img"
          className={props.name + "-logo" + " main-logo"}
        />
      </div>
    </section>
  );
}

export default Section;

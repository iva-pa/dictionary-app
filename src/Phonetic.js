import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a
        href={props.phonetic.audio}
        target="_blank"
        rel="noreferrer"
        className="btn btn-light mb-2"
      >
        Listen
      </a>
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}

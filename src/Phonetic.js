import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <span className="text">{props.phonetic.text}</span>
      <a
        href={props.phonetic.audio}
        target="_blank"
        rel="noreferrer"
        className="btn mb-2"
      >
        ▶
      </a>
    </div>
  );
}

import React from "react";
import Audio from "./Audio";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <div className="row">
        <div className="col-1">
          <Audio audio={props.phonetic.audio} />
        </div>
        <div className=" col text">{props.phonetic.text}</div>
      </div>
    </div>
  );
}

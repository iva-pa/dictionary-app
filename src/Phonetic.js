import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <div className="row">
        <div className="col">
          <ReactAudioPlayer src={props.phonetic.audio} controls />
        </div>
        <div className=" col text">{props.phonetic.text}</div>
      </div>
    </div>
  );
}

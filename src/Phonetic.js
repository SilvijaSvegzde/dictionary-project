import React from "react";
import "./Phonetic.css";
import ReactAudioPlayer from "react-player";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <div className="text">[{props.phonetic.text}]</div>
      <span className="player">
        <ReactAudioPlayer
          url={props.phonetic.audio}
          controls={true}
          width="210px"
          height="40px"
        />
      </span>
    </div>
  );
}

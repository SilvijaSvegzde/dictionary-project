import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-md-4 col-6" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    alt="resultImage"
                    src={photo.src.landscape}
                    className="img-fluid"
                  />
                </a>
              </div>
            );
          })}
        </div>

        <small>
          <a
            href="https://github.com/SilvijaSvegzde/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            Open-sourced on GitHub
          </a>{" "}
          by Silvija Svegzde
        </small>
      </section>
    );
  } else {
    return null;
  }
}

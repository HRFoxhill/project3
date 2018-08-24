import React from "react";

const DevCard = props => {
  return (
    <div className="tile is-3 is-parent card-container">
      <figure className="media-left">
        <p className="image is-64x64">
          <img className="is-rounded" src={props.img} />
        </p>
      </figure>
      <div className="media-content  tile is-child">
        <div className="content">
          <p>
            <strong className="name">{props.name}</strong>{" "}
            <small>
              <i>{props.role}</i>
            </small>
            <br />
            {props.bio}
          </p>
        </div>
        <nav className="level is-mobile  tile is-child">
          <div className="level-left">
            <a target="blank" className="level-item" href={props.github}>
              <span className="icon footer-icon">
                <i className="fab fa-github-square" />
              </span>
            </a>
            <a target="blank" className="level-item" href={props.linkedIn}>
              <span className="icon footer-icon">
                <i className="fab fa-linkedin" />
              </span>
            </a>
            <a target="blank" className="level-item" href={props.portfolio}>
              <span className="icon footer-icon">
                <i className="fas fa-portrait" />
              </span>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default DevCard;

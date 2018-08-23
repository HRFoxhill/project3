import React from "react";

const DevCard = props => {
  return (
    <div class="tile is-3 is-parent card-container">
      <figure class="media-left">
        <p class="image is-64x64">
          <img class="is-rounded" src={props.img} />
        </p>
      </figure>
      <div class="media-content  tile is-child">
        <div class="content">
          <p>
            <strong class="name">{props.name}</strong>{" "}
            <small>
              <i>{props.role}</i>
            </small>
            <br />
            {props.bio}
          </p>
        </div>
        <nav class="level is-mobile  tile is-child">
          <div class="level-left">
            <a target="blank" class="level-item" href={props.github}>
              <span class="icon footer-icon">
                <i class="fab fa-github-square" />
              </span>
            </a>
            <a target="blank" class="level-item" href={props.linkedIn}>
              <span class="icon footer-icon">
                <i class="fab fa-linkedin" />
              </span>
            </a>
            <a target="blank" class="level-item" href={props.portfolio}>
              <span class="icon footer-icon">
                <i class="fas fa-portrait" />
              </span>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default DevCard;

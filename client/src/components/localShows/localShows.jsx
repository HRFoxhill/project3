import React from "react";
import Row from "./row";
const Shows = props => {
  return (
    <div>
      <h1 className="title is-1 tile-title">Local Exhibitions</h1>
      <table className="table is-fullwidth is-narrow is-hoverable is-striped has-margins has-border">
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Time</th>
            <th>Venue</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
            <Row/>
        </tbody>
      </table>
      </div>
  );
};
export default Shows;

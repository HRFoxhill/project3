import React, { Component } from "react";
import { Link } from "react-router-dom";
import Category from "./category";

class Tiles extends Component {

  componentDidMount() {
  };

  render() {
    return (
      <div className="medium-tiles">
        <div className="tile is-ancestor">
          <Link className="tile is-parent" to={"/medium=" + this.props.cat1}>
            <Category
              name={this.props.cat1}
              background={this.props.bg1}
              description={this.props.desc1}
            />
          </Link>
          <Link className="tile is-parent" to={"/medium=" + this.props.cat2}>
            <Category
              name={this.props.cat2}
              background={this.props.bg2}
              description={this.props.desc2}
            />
          </Link>
          <Link className="tile is-parent" to={"/medium=" + this.props.cat3}>
            <Category
              name={this.props.cat3}
              background={this.props.bg3}
              description={this.props.desc3}
            />
          </Link>
        </div>
        <div className="tile is-ancestor">
          <div className="tile is-vertical is-8">
            <div className="tile">
              {/* vertical two tiles */}
              <div className="tile is-parent is-vertical">
                {/* <Link className="tile" to={"/medium=" + this.props.cat4}> */}
                <Category
                  name={this.props.cat4}
                  background={this.props.bg4}
                  description={this.props.desc4}
                />
                {/* </Link>
                <Link className="tile" to={"/medium=" + this.props.cat5}> */}
                <Category
                  name={this.props.cat5}
                  background={this.props.bg5}
                  description={this.props.desc5}
                />
                {/* </Link> */}
              </div>

              <Link className="tile is-parent" to={"/medium=" + this.props.cat6}>
                <Category
                  name={this.props.cat6}
                  background={this.props.bg6}
                  description={this.props.desc6}
                />
              </Link>
            </div>
            <Link className="tile is-parent" to={"/medium=" + this.props.cat7}>
              <Category
                name={this.props.cat7}
                background={this.props.bg7}
                description={this.props.desc7}
              />
            </Link>
          </div>
          <Link className="tile is-parent" to={"/medium=" + this.props.cat8}>
            <Category
              name={this.props.cat8}
              background={this.props.bg8}
              description={this.props.desc8}
              height={825}
            />
          </Link>
        </div>
        <div className="tile is-ancestor">
          <Link className="tile is-parent" to={"/medium=" + this.props.cat9}>
            <Category
              name={this.props.cat9}
              background={this.props.bg9}
              description={this.props.desc9}
            />
          </Link>
          <Link className="tile is-parent is-8" to={"/medium=" + this.props.cat10}>
            <Category
              name={this.props.cat10}
              background={this.props.bg10}
              description={this.props.desc1}
            />
          </Link>
        </div>
      </div >
    );
  }
}

export default Tiles;

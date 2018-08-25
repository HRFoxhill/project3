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
          <div className="tile is-parent">
            <Category
              linkTo={"/medium=" + this.props.cat1}
              name={this.props.cat1}
              background={this.props.bg1}
              description={this.props.desc1}
            />
          </div>
          <div className="tile is-parent">
            <Category
              linkTo={"/medium=" + this.props.cat2}
              name={this.props.cat2}
              background={this.props.bg2}
              description={this.props.desc2}
            />
          </div>
          <div className="tile is-parent">
            <Category
              linkTo={"/medium=" + this.props.cat3}
              name={this.props.cat3}
              background={this.props.bg3}
              description={this.props.desc3}
            />
          </div>
        </div>
        <div className="tile is-ancestor">
          <div className="tile is-vertical is-8">
            <div className="tile">
              {/* vertical two tiles */}
              <div className="tile is-parent is-vertical">
                <Category
                  linkTo={"/medium=" + this.props.cat4}
                  name={this.props.cat4}
                  background={this.props.bg4}
                  description={this.props.desc4}
                />
                <Category
                  linkTo={"/medium=" + this.props.cat5}
                  name={this.props.cat5}
                  background={this.props.bg5}
                  description={this.props.desc5}
                />
              </div>

              <div className="tile is-parent">
                <Category
                  linkTo={"/medium=" + this.props.cat6}
                  name={this.props.cat6}
                  background={this.props.bg6}
                  description={this.props.desc6}
                />
              </div>
            </div>
            <div className="tile is-parent">
              <Category
                linkTo={"/medium=" + this.props.cat7}
                name={this.props.cat7}
                background={this.props.bg7}
                description={this.props.desc7}
              />
            </div>
          </div>
          <div className="tile is-parent">
            <Category
              linkTo={"/medium=" + this.props.cat8}
              name={this.props.cat8}
              background={this.props.bg8}
              description={this.props.desc8}
              height={825}
            />
          </div>
        </div>
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <Category
              linkTo={"/medium=" + this.props.cat9}
              name={this.props.cat9}
              background={this.props.bg9}
              description={this.props.desc9}
            />
          </div>
          <div className="tile is-parent is-8">
            <Category
              linkTo={"/medium=" + this.props.cat10}
              name={this.props.cat10}
              background={this.props.bg10}
              description={this.props.desc1}
            />
          </div>
        </div>
      </div >
    );
  }
}

export default Tiles;

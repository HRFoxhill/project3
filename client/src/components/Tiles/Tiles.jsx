import React, { Component } from "react";
import Category from "./category";

class Tiles extends Component {
  render() {
    return (
      <div>
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <Category
              name={this.props.cat1}
              background={this.props.bg1}
            />
          </div>
          <div class="tile is-parent">
            <Category
              name={this.props.cat2}
              background={this.props.bg2}
            />
          </div>
          <div class="tile is-parent">
            <Category
              name={this.props.cat3}
              background={this.props.bg3}
            />
          </div>
        </div>
        <div class="tile is-ancestor">
          <div class="tile is-vertical is-8">
            <div class="tile">
              <div class="tile is-parent is-vertical">
                <Category
                  name={this.props.cat4}
                  background={this.props.bg4}
                />
                <Category
                  name={this.props.cat5}
                  background={this.props.bg5}
                />
              </div>
              <div class="tile is-parent">
                <Category
                  name={this.props.cat6}
                  background={this.props.bg6}
                />
              </div>
            </div>
            <div class="tile is-parent">
              <Category
                name={this.props.cat7}
                background={this.props.bg7}
              />
            </div>
          </div>
          <div class="tile is-parent">
            <Category
              name={this.props.cat8}
              background={this.props.bg8}
              height={825}
            />
          </div>
        </div>
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <Category
              name={this.props.cat9}
              background={this.props.bg9}
            />
          </div>
          <div class="tile is-parent is-8">
            <Category
              name={this.props.cat10}
              background={this.props.bg10}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Tiles;

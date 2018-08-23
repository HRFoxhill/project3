import React, { Component } from "react";
import Description from "./description";


class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  hoverIn() {
    this.setState({
      show: true
    });
  }

  hoverOut() {
    this.setState({
      show: false
    });
  }

  render() {
    return (
      <article
        style={{
          backgroundImage: `url(${this.props.background})`,
          height: this.props.height,
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
        onMouseEnter={this.hoverIn.bind(this)}
        onMouseLeave={this.hoverOut.bind(this)}
        class="tile is-child box"
      >
        <div class="box tile-box">
          {this.props.name}
          <Description
            show={this.state.show}
            input={this.props.description}
          />
        </div>
      </article>
    );
  }
}

Category.defaultProps = {
  height: 400
};

export default Category;

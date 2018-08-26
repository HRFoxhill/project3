import React, { Component } from "react";
import Description from "./description";
import { Link } from "react-router-dom";


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
        <Link to ={this.props.linkTo}
          style={{
            backgroundImage: `url(${this.props.background})`,
            height: this.props.height,
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
          onMouseEnter={this.hoverIn.bind(this)}
          onMouseLeave={this.hoverOut.bind(this)}
          className="tile is-child box"
        >
          <div className="box tile-box">
            {this.props.name}
            <Description
              show={this.state.show}
              input={this.props.description}
            />
          </div>
        </Link>
    );
  }
}

Category.defaultProps = {
  height: 400
};

export default Category;

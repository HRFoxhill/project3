import React, { Component } from "react";

// function description(props) {
//   const tileState = props.tileState;
//   if (tileState) {
//     return "HELLO WORLD";
//   }
// }



class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tileState: false
    };
  }

  showDescription() {
    this.setState({
      tileState: true
    });
  }

  hideDescription() {
    this.setState({
      tileState: false
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
        onMouseEnter={this.showDescription.bind(this)}
        onMouseLeave={this.hideDescription.bind(this)}
        class="tile is-child box"
      >
        
        <div class="box tile-box">{this.props.name}</div>
      </article>
    );
  }
}

Category.defaultProps = {
  height: 400
};

export default Category;

import React, { Component } from "react";
import { CSSTransitionGroup } from "react-transition-group";

function Description(props) {
  const tileState = props.tileState;
  if (tileState) {
    return <p class="description">{props.input}</p>;
  }
  return null;
}

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
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={1}
          transitionLeaveTimeout={1}
        >
          <div class="box tile-box" key={this.state.tileState}>
            {this.props.name}
            <Description
              tileState={this.state.tileState}
              input={this.props.description}
            />
          </div>
        </CSSTransitionGroup>
      </article>
    );
  }
}

Category.defaultProps = {
  height: 400
};

export default Category;

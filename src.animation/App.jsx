import React, { Component, Fragment } from "react";
import "./index.css";
import { CSSTransition } from "react-transition-group";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  render() {
    return (
      <Fragment>
        <div in={this.state.show} timeout={300} classNames="fade">
          hello
        </div>
        <button onClick={this.handleToggle}>toggle</button>
      </Fragment>
    );
  }

  handleToggle() {
    this.setState(() => {
      return { show: this.state.show ? false : true };
    });
  }
}

export default App;

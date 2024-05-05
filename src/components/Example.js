import React, { Component } from "react";
import InputEmoji from "react-input-emoji";

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleOnEnter = (text) => {
    console.log("enter", text);
  };

  handleChange = (text) => {
    this.setState({ text });
  };

  render() {
    const { text } = this.state;
    return (
      <InputEmoji
        value={text}
        onChange={this.handleChange}
        cleanOnEnter
        onEnter={this.handleOnEnter}
        placeholder="Type a message"
      />
    );
  }
}

export default Example;

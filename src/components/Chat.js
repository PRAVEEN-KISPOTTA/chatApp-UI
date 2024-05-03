import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      messages: [],
    };
    this.messageThreadRef = React.createRef(); // Create a ref for the message thread
  }

  componentDidMount() {
    this.scrollToBottom(); // Scroll to the bottom when the component mounts
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.messages.length !== this.state.messages.length) {
      this.scrollToBottom(); // Scroll to the bottom when new messages are added
    }
  }

  scrollToBottom = () => {
    if (this.messageThreadRef.current) {
      this.messageThreadRef.current.scrollTop = this.messageThreadRef.current.scrollHeight;
    }
  };

  handleSendMessage = (message) => {
    if (message.trim() === "") return;
    const randomUser =
      user_list[Math.floor(Math.random() * user_list.length)];
    const newMessage = {
      text: message,
      user: randomUser,
      likes: 0,
    };
    this.setState((prevState) => ({
      messages: [...prevState.messages, newMessage],
      message: "",
    }));
  };

  handleLike = (index) => {
    this.setState((prevState) => {
      const updatedMessages = [...prevState.messages];
      updatedMessages[index].likes += 1;
      return { messages: updatedMessages };
    });
  };

  render() {
    const { message, messages } = this.state;
    return (
      <div className="chat-app">
        <Header />
        <div
          className="message-thread px-8 py-4 mt-16 overflow-y-auto"
          ref={this.messageThreadRef} // Attach the ref to the message thread
        >
          {messages.map((msg, index) => (
            <div key={index} className="message flex">
              <div className="message-info">
                <div className="user font-cursive">{msg.user}</div>

                <div className="flex border border-transparent rounded-2xl rounded-es-none px-4 py-2 bg-green-600 text-white font-cursive">
                  <p className="message-text">{msg.text}</p>
                  <button
                    className="like-button"
                    onClick={() => this.handleLike(index)}
                  >
                    👍
                  </button>
                </div>
                <span className="like-count">{msg.likes}</span>
              </div>
            </div>
          ))}
        </div>

        <Footer handleSendMessage={this.handleSendMessage} />
      </div>
    );
  }
}

export default Chat;

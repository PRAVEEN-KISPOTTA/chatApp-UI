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
    this.messageThreadRef = React.createRef();
  }


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
    const { messages } = this.state;
    return (
      <div className="chat-app">
        <Header />
        <div
          className="message-thread px-8 py-4 mt-16"
          ref={this.messageThreadRef} // Attach the ref to the message thread
        >
          {messages.map((msg, index) => (
            <div key={index} className="message flex mb-6">
              <div className="message-info">
                <div className="user font-cursive font-bold opacity-80">{msg.user}</div>

                <div className="flex border border-transparent rounded-2xl rounded-es-none px-4 py-2 bg-green-600 text-white font-cursive">
                  <p className="message-text overflow-wrap-break">{msg.text}</p>
                  
                </div>
              </div>
              <div className="flex items-end -ml-8 -mb-4">
                <button
                    className="like-button"
                    onClick={() => this.handleLike(index)}
                  >
                    <span className="text-xl">👍</span>
                  </button>
                <span className="like-count py-0.5 rounded-lg font-bold font-cursive opacity-80">{(msg.likes > 0) ? msg.likes : null}</span>
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

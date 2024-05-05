import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";

// Define a list of users
const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

class Chat extends Component {
  constructor(props) {
    super(props);
    // Initialize state with message and messages array
    this.state = {
      message: "",
      messages: [],
    };
    // Step 1: Create a ref for the message thread
    this.messageThreadRef = React.createRef();
  }

  // Function to handle sending a message
  handleSendMessage = (message) => {
    // Check if the message is empty
    if (message.trim() === "") return;
    // Select a random user from the user list
    const randomUser =
      user_list[Math.floor(Math.random() * user_list.length)];
    // Create a new message object
    const newMessage = {
      text: message,
      user: randomUser,
      likes: 0,
    };
    // Update state to add the new message to the messages array
    this.setState((prevState) => ({
      messages: [...prevState.messages, newMessage],
      message: "",
    }));
  };

  // Function to handle liking a message
  handleLike = (index) => {
    // Update the likes count for the selected message
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
        {/* Render the header component */}
        <Header />
        {/* Render the message thread */}
        <div
          className="message-thread px-8 py-4 mt-16 mb-16"
          ref={this.messageThreadRef} // Step 2: Attach the ref to the message thread
        >
          {/* Map over the messages array and render each message */}
          {messages.map((msg, index) => (
            <div key={index} className="message flex mb-6">
              <div className="message-info">
                {/* Display the user's name */}
                <div className="user font-cursive font-bold opacity-80">{msg.user}</div>
                {/* Display the message text */}
                <div className="flex border border-transparent rounded-2xl rounded-es-none px-4 py-2 bg-green-600 text-white font-cursive">
                  <p className="message-text overflow-wrap-break">{msg.text}</p>
                </div>
              </div>
              {/* Render the like button and count */}
              <div className="flex items-end -ml-8 -mb-4">
                <button
                    className="like-button"
                    onClick={() => this.handleLike(index)}
                  >
                    {/* Render the thumbs up emoji */}
                    <span className="text-xl">👍</span>
                  </button>
                {/* Display the number of likes */}
                <span className="like-count py-0.5 rounded-lg font-bold font-cursive opacity-80">{(msg.likes > 0) ? msg.likes : null}</span>
                </div>
            </div>
          ))}
        </div>
        {/* Render the footer component */}
        <Footer handleSendMessage={this.handleSendMessage} />
      </div>
    );
  }
}

export default Chat;

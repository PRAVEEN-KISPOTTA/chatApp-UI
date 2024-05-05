import React, { Component } from "react";
import InputEmoji from "react-input-emoji";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
        };
    }

    handleChange = (text) => {
        this.setState({ message: text });
    };

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent default form submission behavior
            this.handleSendMessage(); // Trigger the send message function
        }
    };

    handleSendMessage = () => {
        const { message } = this.state;
        if (message.trim() === "") return;
        this.props.handleSendMessage(message);
        this.setState({ message: "" }); // Clear the input field after sending the message
    };

    render() {
        const { message } = this.state;
        return (
            <div className="flex items-center fixed bottom-0 w-full bg-gray-200 px-6 py-2 gap-4 border-t border-gray-300">
                <i className="fa-solid fa-camera text-lg opacity-50 hover:opacity-90 cursor-pointer"></i>
                <i className="fa-solid fa-link opacity-50 text-lg hover:opacity-90 cursor-pointer"></i>

                <InputEmoji
                    type="text" 
                    className="container bg-gray-200 py-2 outline-none" 
                    placeholder="Type something..." 
                    value={message}
                    onChange={this.handleChange}
                    cleanOnEnter
                    onKeyDown={this.handleKeyPress} // Add keydown event listener
                />

                <button onClick={this.handleSendMessage}>
                    <i className="fa-solid fa-paper-plane text-lg opacity-50 hover:opacity-90"></i>
                </button>

                <i className="fa-solid fa-microphone text-lg opacity-50 hover:opacity-90 cursor-pointer"></i>
            </div>
        );
    }
}

export default Footer;

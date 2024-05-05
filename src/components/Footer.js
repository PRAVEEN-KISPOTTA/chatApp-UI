import React, { Component } from "react";
import InputEmoji from "react-input-emoji";

// Step 5: Define the Footer component
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
        };
    }

    // Step 6: Define a function to handle input change
    handleChange = (text) => {
        this.setState({ message: text });
    };

    // Step 7: Define a function to handle key press event
    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent default form submission behavior
            this.handleSendMessage(); // Trigger the send message function
        }
    };

    // Step 8: Define a function to handle sending message
    handleSendMessage = () => {
        const { message } = this.state;
        if (message.trim() === "") return;
        this.props.handleSendMessage(message);
        this.setState({ message: "" }); // Clear the input field after sending the message
    };

    render() {
        const { message } = this.state;
        return (
            // Step 9: Render the footer UI
            <div className="flex items-center fixed bottom-0 w-full bg-gray-200 px-6 py-2 gap-4 border-t border-gray-300">
                {/* Render camera icon */}
                <i className="fa-solid fa-camera text-lg opacity-50 hover:opacity-90 cursor-pointer"></i>
                {/* Render link icon */}
                <i className="fa-solid fa-link opacity-50 text-lg hover:opacity-90 cursor-pointer"></i>

                {/* Render the input field */}
                <InputEmoji
                    type="text" 
                    className="container bg-gray-200 py-2 outline-none" 
                    placeholder="Type something..." 
                    value={message}
                    onChange={this.handleChange}
                    cleanOnEnter
                    onKeyDown={this.handleKeyPress} // Add keydown event listener
                />

                {/* Render send button */}
                <button onClick={this.handleSendMessage}>
                    <i className="fa-solid fa-paper-plane text-lg opacity-50 hover:opacity-90"></i>
                </button>

                {/* Render microphone icon */}
                <i className="fa-solid fa-microphone text-lg opacity-50 hover:opacity-90 cursor-pointer"></i>
            </div>
        );
    }
}

// Export the Footer component
export default Footer;

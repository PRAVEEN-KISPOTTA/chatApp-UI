import React, { Component } from "react";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
        };
    }

    handleChange = (e) => {
        this.setState({ message: e.target.value });
    };

    render() {
        const { message } = this.state;
        return (
            <div className="flex items-center fixed bottom-0 w-full bg-gray-200 px-6 py-2 gap-4 border-t border-gray-300">
                <i className="fa-regular fa-face-smile text-lg opacity-50 hover:opacity-90 cursor-pointer"></i>
                <i className="fa-solid fa-link opacity-50 text-lg hover:opacity-90 cursor-pointer"></i>

                <input 
                    type="text" 
                    className="container bg-gray-200 py-2 outline-none" 
                    placeholder="Type something..." 
                    value={message}
                    onChange={this.handleChange}
                />

                <button onClick={() => this.props.handleSendMessage(message)}>
                    <i className="fa-solid fa-paper-plane text-lg opacity-50 hover:opacity-90"></i>
                </button>

                <i className="fa-solid fa-microphone text-lg opacity-50 hover:opacity-90 cursor-pointer"></i>
            </div>
        );
    }
}

export default Footer;

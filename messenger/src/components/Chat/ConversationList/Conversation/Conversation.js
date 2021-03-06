import React, { Component } from 'react';
import TimeAgo from 'react-timeago'
import './Conversation.css'


class Conversation extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        if (this.props.activeChatName != this.props.chatName) {
            this.props.selectConversation(this.props.chatName);
        }
    }

    render() {
        var chatListClassName = "chat-list";
        if (this.props.activeChatName == this.props.chatName) {
            chatListClassName = "chat-list active-chat";
        }
        /*this.props.text - это последнее сообщение в обсуждении */
        return (
            <div className={chatListClassName} onClick={this.handleClick}>
                <div className="chat-people">
                    <div className="chat-img"> 
                        <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> 
                    </div>
                    <div className="chat-ib">
                        <h5>
                            {this.props.showName(this.props.chatName)} 
                            <span className="chat-date">
                                <TimeAgo date={this.props.date} />
                            </span>
                        </h5>
                        <p>{this.props.text}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Conversation
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { fetchMessages } from "../actions";
import Message from "../components/message";
import MessageForm from "../containers/message_form";

class MessageList extends Component {

  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentWillMount() {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  componentDidMount() {
    this.refresher = setInterval(this.props.fetchMessages, 3000);
  }

  componentDidUpdate() {
    this.scrollTop = this.scrollHeight;
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  render() {
    return (
      <div className="message-container">
        {this.props.messages.map((message, index) => {
          return <Message key={message.created_at} message={message} />;
        })}
        <MessageForm ref={this.textInput} />
      </div>  
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages },
    dispatch
    ); 
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
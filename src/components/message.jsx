import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Message extends Component {

  render() {
    return (
      <div>
        <p>{this.props.message.author} {this.props.message.created_at}</p>
        <p>{this.props.message.content}</p>
      </div>
    );
  }
}

export default Message;
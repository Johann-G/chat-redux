import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { selectChannel } from "../actions";

class ChannelList extends Component {

  handleClick = () => {
    this.props.selectChannel(this.props.selectedChannel)
  }

  render() {
    return (
      <div className="channels-container" onClick={this.handleClick}>
        {this.props.channels.map((channel) => {
          return channel;
        })}
      </div>  
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectChannel },
    dispatch
    ); 
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
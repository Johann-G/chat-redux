import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { selectChannel } from "../actions";

class ChannelList extends Component {

  handleClick = (channel) => {
    this.props.selectChannel(channel)
  }

  renderChannel = (channel) => {
    return(
      <li onClick={() => this.handleClick(channel)} key={channel}>
        {channel}
      </li>
    );
  }

  render() {
    return (
      <div className="channels-container" >
          <ul>
            {this.props.channels.map(this.renderChannel)}
          </ul>
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
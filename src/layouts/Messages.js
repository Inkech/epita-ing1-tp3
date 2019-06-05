import React from "react";
import { connect } from "react-redux";
import { add as addMessage } from "../actions/messages";
import MessageLayout from "./MessagesLayout";
import MessageList from "../components/MessageList"
import InputMessage from "../components/InputMessage"
import HOC from "./HOC"

const mapStateToProps = ({ messages }, ownProps) => ({
  messages,
  ...ownProps
});

class Messages extends React.Component {
  handleSubmitMessage(message) {
    this.props.dispatch(addMessage(message));
  }

  render() {
    return <MessageLayout
              mess={() => <MessageList messages={this.props.messages} />}
              submit={() => <InputMessage onSubmit={(m) => this.handleSubmitMessage(m)} />}
            />;
  }
}

export default connect(mapStateToProps)(HOC(Messages));

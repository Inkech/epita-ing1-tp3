import React from "react";
import { Timeline } from "antd";
import TimelineItem from "antd/lib/timeline/TimelineItem";

const MessageList = ({ messages }) => (
  <Timeline>{messages.map((m) => <Timeline.Item>{m.text}</Timeline.Item>)}</Timeline>
);

export default MessageList;

import styled from "styled-components";
import React from "react";

export default function StoryUserIdCaption(props: Prop) {
  let { userId } = props;
  if (userId.length > 12) {
    userId = userId.slice(0, 9) + "...";
  }
  return <Wrapper>{userId}</Wrapper>;
}

interface Prop {
  userId: string;
}

const Wrapper = styled.div`
  height: 10px;
  font-size: 9px;
  text-align: center;
  font-family: sans-serif;
  overflow: hidden;
`;

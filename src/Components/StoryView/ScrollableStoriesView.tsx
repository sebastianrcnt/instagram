import styled from "styled-components";
import React from "react";
import StoryContainer from "./StoryContainer";

export default function ScrollableStoriesView() {
  return <Wrapper>
		<StoryContainer story={{
			userId: "SebastianRcnt"
		}}/>
	</Wrapper>;
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	height: 75px;
	width: 100%;
	overflow: scroll;
	align-items: center;
`;

import styled from "styled-components";
import React from 'react'
import AppBar from "./AppBar";
import ScrollableStoriesView from "./StoryView/ScrollableStoriesView";
export default function Home() {
	return (
		<Wrapper>
			<AppBar />
			<ScrollableStoriesView />
		</Wrapper>
	)
}

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
`
import styled from "styled-components";
import React from 'react'
import StoryProfilePicture from "./StoryProfilePicture";
import StoryUserIdCaption from "./StoryUserIdCaption";
import SizedBox from "../Utils/SizedBox";

export default function StoryContainer(_: Prop) {
	return (
		<Wrapper>		
			<StoryProfilePicture />
			<SizedBox height={3} width={0} />
			<StoryUserIdCaption userId="sebastianrcnt1234"/>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	padding-left: 15px;
	display: flex;
	flex-direction: column;
	align-items: center;
`

interface Prop {
	story: Story;
}

export interface Story {
	userId: string;
	profilePictureUrl?: string;
	hasBeenViewed?: boolean;
}
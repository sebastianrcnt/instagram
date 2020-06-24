import React from "react";
import styled from "styled-components";
import {BodySection, BarSection} from "./SectionStyles";
import {AiOutlineCamera} from "react-icons/ai";
import {FiSend} from "react-icons/fi";
import ScrollableStoriesView from "../StoryView/ScrollableStoriesView";
import PostView from "../PostView/PostView";

function Layout() {
  return (
    <Wrapper>
      <AppBar>
        <AiOutlineCamera/>
        <AppBarTitle>Instagram</AppBarTitle>
        <FiSend/>
      </AppBar>
      <BodySection>
        <ScrollableStoriesView />
        <PostView />
      </BodySection>
      <BottomAppBar>
        <AiOutlineCamera />
        <AiOutlineCamera />
        <AiOutlineCamera />
        <AiOutlineCamera />
        <AiOutlineCamera />
      </BottomAppBar>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const AppBar = styled(BarSection)`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  font-size: 25px;
`

export const AppBarTitle = styled.div`
  font-size: 25px;
  font-family: 'Grand Hotel', cursive;
`

export const BottomAppBar = styled(BarSection)`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  
  font-size: 25px;
`

export default Layout;

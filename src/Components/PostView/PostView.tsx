import React from "react";
import styled from "styled-components";
import {FiMoreHorizontal} from "react-icons/fi";
import SizedBox from "../Utils/SizedBox";

const sampleImageUrl = "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/87655927_900072773808412_1048621792941309952_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=cPE1ZyZx_igAX-1UrSf&oh=5f8b1b1bd168a3f7d1adc6fd8e191e56&oe=5F1D1B0D"

export default function PostView() {
  return <Wrapper>
    <PostTopBar>
      <ProfilePicture src={sampleImageUrl}/>
      <SizedBox height={0} width={7}/>
      <UploaderName>sebastianrcnt</UploaderName>
      <MoreIcon/>
    </PostTopBar>
    <PostImageViewer>
    
    </PostImageViewer>
  </Wrapper>
}


const Wrapper = styled.div`

`

const PostTopBar = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
`

const ProfilePicture = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 12.5px;
`

const UploaderName = styled.div`
  flex: 1;
  font-size: 12px;
  font-weight: 500;
  font-family: sans-serif;
`

const MoreIcon = styled(FiMoreHorizontal)`
  //margin-left: auto;
`

const PostImageViewer = styled.div`
  width: 100%;
`

// const PostImage = styled.img`
//   width: 100%
// `
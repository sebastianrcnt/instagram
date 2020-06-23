import React from "react";
import styled from "styled-components";
import { AiFillHome, AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { RiAddCircleLine } from "react-icons/ri";

export default function BottomAppBar() {
  return (
    <Wrapper>
      <AiFillHome />
      <AiOutlineSearch />
			<RiAddCircleLine />
      <AiOutlineHeart />
      <ProfileIcon />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* positioning */
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  background-color: #f2f2f2;
	

  /* flex */
  display: flex;
	flex-direction: row;
	align-items: center;
  justify-content: space-around;

  /* fonts */
  font-size: 30px;
`;

const ProfileIcon = styled.div`
  width: 30px;
  height: 30px;
  background-color: purple;
  border-radius: 15px;
`;

import styled from "styled-components";
import React from "react";
import { AiOutlineCamera } from "react-icons/ai";
import { FiSend } from "react-icons/fi";

export default function AppBar() {
  return (
    <Wrapper>
      <AiOutlineCamera />
      <Title>Instagram</Title>
      <FiSend />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
	height: 50px;
	
	padding: 7px 15px;

  display: flex;
  flex-direction: row;
  align-items: center;
	justify-content: space-between;
	
	background-color: #f2f2f2;

	font-size: 30px;
`;

const Title = styled.div`
	font-family: 'Grand Hotel', cursive;
	font-size: 22px;
`
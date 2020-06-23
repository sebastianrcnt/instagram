import React from "react";
import styled from "styled-components";
import BottomAppBar from "./Components/Layout/BottomAppBar";
import Home from "./Components/HomePage/Home";

function App() {
  return (
    <Wrapper className="App">
      <Content>
        <Home />
      </Content>
      <BottomAppBar />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
`;

const Content = styled.div`
  height: calc(100% - 50px);
`;

export default App;

import React from "react";
import styled from "styled-components";


export const BodySection = styled.div`
  flex: 1;
  overflow: scroll;
`

export const BarSection = styled.div`
  /* positioning */
  width: 100%;
  height: 50px;
  background-color: #f2f2f2;
`

export const HorizontalDivider = (props: DividerProps) => {
  return <div style={{
    height: props.thickness,
    width: "100%",
    backgroundColor: props.color,
  }}/>
}

export const VerticalDivider = (props: DividerProps) => {
  return <div style={{
    height: "100%",
    width: props.thickness,
    backgroundColor: props.color,
  }}/>
}


export interface DividerProps {
  thickness: number;
  color: string;
}
import React from "react";

function SizedBox(props: Prop) {
  let { width, height } = props;
  return <div style={{ width, height }} />;
}

export interface Prop {
  width: number;
  height: number;
}

export default SizedBox;

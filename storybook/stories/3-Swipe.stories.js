import React, { useState } from "react";

import { defineSlots, useLayout, useSlots } from "./src";
import { layoutGrid, leftBox, rightBox } from "./Mirrored.module.scss";

const First = () => {
  const { Left, Right } = useSlots("Left", "Right");

  return (
    <div className={layoutGrid}>
      <div className={rightBox}>{Right}</div>
      <div className={leftBox}>{Left}</div>
    </div>
  );
};

const Second = () => {
  const { Left, Right } = useSlots("Left", "Right");

  return (
    <div className={layoutGrid}>
      <div className={leftBox}>{Left}</div>
      <div className={rightBox}>{Right}</div>
    </div>
  );
};

export const SwipeStory = () => {
  const [isSwipped, setSwipped] = useState(false);

  const Layout = useLayout(isSwipped ? First : Second);
  const { Left, Right } = defineSlots("Left", "Right");

  return (
    <>
      <Layout>
        <Left>1</Left>
        <Right>2</Right>
      </Layout>
      <button onClick={() => setSwipped(!isSwipped)}>Swipe layouts</button>
    </>
  );
};

SwipeStory.story = {
  name: "Swipe layouts"
};

export default {
  title: "Layouts"
};

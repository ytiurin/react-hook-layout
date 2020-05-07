import React from "react";

import { defineSlots, useLayout, useSlots } from "./src";
import { innerBox, outerBox } from "./Nested.module.scss";

const Inner = () => {
  const { Content } = useSlots("Content");

  return (
    <div className={innerBox}>
      Inner box
      <br />
      {Content}
    </div>
  );
};

const Outer = () => {
  const { Content } = useSlots("Content");

  return (
    <div className={outerBox}>
      Outer box
      <br />
      {Content}
    </div>
  );
};

export const NestedStory = () => {
  const OuterLayout = useLayout(Outer);
  const InnerLayout = useLayout(Inner);

  const { Content } = defineSlots("Content");

  return (
    <OuterLayout>
      <Content>
        <InnerLayout>
          <Content>Hello</Content>
        </InnerLayout>
      </Content>
    </OuterLayout>
  );
};

NestedStory.story = {
  name: "Nested layouts"
};

export default {
  title: "react-hook-layout/Examples"
};

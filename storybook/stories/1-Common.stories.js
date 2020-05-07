import React from "react";

import { defineSlots, useLayout, useSlots } from "./src";
import {
  contentBox,
  footerBox,
  headerBox,
  layoutGrid,
  sidebarLeftBox,
  sidebarRightBox
} from "./Common.module.scss";

const Common = () => {
  const { Content, Footer, Header, SidebarLeft, SidebarRight } = useSlots(
    "Content",
    "Footer",
    "Header",
    "SidebarLeft",
    "SidebarRight"
  );

  return (
    <div className={layoutGrid}>
      <div className={headerBox}>{Header}</div>
      <div className={sidebarLeftBox}>{SidebarLeft}</div>
      <div className={contentBox}>{Content}</div>
      <div className={sidebarRightBox}>{SidebarRight}</div>
      <div className={footerBox}>{Footer}</div>
    </div>
  );
};

export const CommonStory = () => {
  const Layout = useLayout(Common);

  const { Content, Footer, Header, SidebarLeft, SidebarRight } = defineSlots(
    "Content",
    "Footer",
    "Header",
    "SidebarLeft",
    "SidebarRight"
  );

  return (
    <Layout>
      <Content>Content</Content>
      <Footer>Footer</Footer>
      <Header>Header</Header>
      <SidebarLeft>Left</SidebarLeft>
      <SidebarRight>Right</SidebarRight>
    </Layout>
  );
};

CommonStory.story = {
  name: "Common layout"
};

export default {
  title: "react-hook-layout/Examples"
};

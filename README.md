# react-hook-layout

This hook is a variation of layout component concept, described on [this page](https://reactjs.org/docs/composition-vs-inheritance.html "Composition vs Inheritance"). It makes more easy to decouple layout structure from the page content.

## Usage

Create page component, define slots and use blank layout.

```javascript
import { defineSlots, useLayout } from "react-hook-layout";

const Page = () => {
  const { Content, Footer, Header, SidebarLeft, SidebarRight } = defineSlots(
    "Content",
    "Footer",
    "Header",
    "SidebarLeft",
    "SidebarRight"
  );

  const Layout = useLayout();

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
```

Create layout component and use slots.

```javascript
import { useSlots } from "react-hook-layout";

export const CommonLayout = () => {
  const { Content, Footer, Header, SidebarLeft, SidebarRight } = useSlots(
    "Content",
    "Footer",
    "Header",
    "SidebarLeft",
    "SidebarRight"
  );

  return (
    <div className="common-layout">
      <div className="header">{Header}</div>
      <div className="sidebar-left">{SidebarLeft}</div>
      <div className="content">{Content}</div>
      <div className="sidebar-right">{SidebarRight}</div>
      <div className="footer">{Footer}</div>
    </div>
  );
};
```

Use layout component on the page.

```javascript
const Page = () => {
  // ...
  const Layout = useLayout(CommonLayout);
  // ...
};
```

## Install

```
npm install react-hook-layout
```

or

```
yarn add react-hook-layout
```

## Examples

Check more examples in Storybook

```
git clone https://github.com/ytiurin/react-hook-layout.git
cd react-hook-layout/storybook
npm run storybook
```
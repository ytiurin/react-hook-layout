# react-hook-layout

Use this hook to decouple layout from the page content. It is an extension of the layout component with slots, described on [this page](https://reactjs.org/docs/composition-vs-inheritance.html "Composition vs Inheritance"). This hook introduce an interface, that allows to use layout **before** the layout component is created.

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

# react-hook-layout

This hook is a variation of the Layout component pattern, described on the [React patterns](https://reactpatterns.com/#layout-component "React patterns from beginners to advanced developers. Simple examples, short descriptions, and quality advice.") website, and mentioned in the React documentation as part of the [Composition vs Inheritance](https://reactjs.org/docs/composition-vs-inheritance.html "Composition vs Inheritance") section.

It adds a layer of abstraction between the page and layout components, and allows to develop a page without the need to create a layout component beforehand. It also becomes easy to switch between multiple layouts in the runtime.

## Usage

1. Create a page component and define slots with the according content.

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
      <Content>Center</Content>
      <Footer>Bottom</Footer>
      <Header>Top</Header>
      <SidebarLeft>Left</SidebarLeft>
      <SidebarRight>Right</SidebarRight>
    </Layout>
  );
};
```

This component will render to:

```html
CenterBottomTopLeftRight
```

2. Create a layout component and fill it with slots, defining the structure of the layout.

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

3. Apply the layout component on the page.

```javascript
const Page = () => {
  // ...
  const Layout = useLayout(CommonLayout);
  // ...
};
```

Now page will render to:

```html
<div className="common-layout">
  <div className="header">Top</div>
  <div className="sidebar-left">Left</div>
  <div className="content">Center</div>
  <div className="sidebar-right">Right</div>
  <div className="footer">Bottom</div>
</div>
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

Run storybook with examples:

```
git clone https://github.com/ytiurin/react-hook-layout.git
cd react-hook-layout/storybook
npm run storybook
```

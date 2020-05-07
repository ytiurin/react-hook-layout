(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(module,__webpack_exports__,__webpack_require__){"use strict";function argsAsNames(args){return args[0]&&(args[0].splice&&args[0]||args)||[]}__webpack_require__.d(__webpack_exports__,"a",(function(){return defineSlots})),__webpack_require__.d(__webpack_exports__,"b",(function(){return useLayout})),__webpack_require__.d(__webpack_exports__,"c",(function(){return useSlots}));const slotComponents={};function defineSlots(){return Array.prototype.reduce.call(argsAsNames(arguments),(function(result,name){if(result[name]=slotComponents[name]||(slotComponents[name]=function(props){return props.children||null}),!Object.defineProperty(result[name],"name",{configurable:!0,enamerable:!1,value:name,writable:!1}))throw new Error("Could not define name of the slot function");return result}),{})}var react=__webpack_require__(1),slots=[];function getSlot(name){return slots[name]||null}const layoutComponents=[],renderFunctions=[];function createLayoutRender(LayoutComponent){return props=>(function distributeChildrenToSlots(children){slots=[].concat(children||[]).reduce((nextSlots,child)=>(child.type&&(nextSlots[child.type.name]=child),nextSlots),{})}(props&&props.children),Object(react.createElement)(LayoutComponent||react.Fragment,props))}function useLayout(LayoutComponent){let wmIndex=layoutComponents.indexOf(LayoutComponent);return-1===wmIndex&&(layoutComponents.push(LayoutComponent),wmIndex=renderFunctions.push(createLayoutRender(LayoutComponent))-1),renderFunctions[wmIndex]}function useSlots(){return Array.prototype.reduce.call(argsAsNames(arguments),(nextSlots,slotName)=>(nextSlots[slotName]=getSlot(slotName),nextSlots),{})}},169:function(module,exports,__webpack_require__){var api=__webpack_require__(166),content=__webpack_require__(615);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1},exported=(api(content,options),content.locals?content.locals:{});module.exports=exported},271:function(module,exports,__webpack_require__){__webpack_require__(272),__webpack_require__(418),module.exports=__webpack_require__(419)},336:function(module,exports){},419:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(270);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(609)],module)}.call(this,__webpack_require__(420)(module))},58:function(module,exports,__webpack_require__){var api=__webpack_require__(166),content=__webpack_require__(613);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1},exported=(api(content,options),content.locals?content.locals:{});module.exports=exported},59:function(module,exports,__webpack_require__){var api=__webpack_require__(166),content=__webpack_require__(617);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1},exported=(api(content,options),content.locals?content.locals:{});module.exports=exported},609:function(module,exports,__webpack_require__){var map={"./1-Common.stories.js":610,"./2-Nested.stories.js":614,"./3-Swipe.stories.js":616};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=609},610:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"CommonStory",(function(){return CommonStory}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(15),_Common_module_scss__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(58),addSourceDecorator=(__webpack_require__(68).withSource,__webpack_require__(68).addSource),Common=function(){var _useSlots=Object(_src__WEBPACK_IMPORTED_MODULE_1__.c)("Content","Footer","Header","SidebarLeft","SidebarRight"),Content=_useSlots.Content,Footer=_useSlots.Footer,Header=_useSlots.Header,SidebarLeft=_useSlots.SidebarLeft,SidebarRight=_useSlots.SidebarRight;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Common_module_scss__WEBPACK_IMPORTED_MODULE_2__.layoutGrid},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Common_module_scss__WEBPACK_IMPORTED_MODULE_2__.headerBox},Header),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Common_module_scss__WEBPACK_IMPORTED_MODULE_2__.sidebarLeftBox},SidebarLeft),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Common_module_scss__WEBPACK_IMPORTED_MODULE_2__.contentBox},Content),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Common_module_scss__WEBPACK_IMPORTED_MODULE_2__.sidebarRightBox},SidebarRight),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Common_module_scss__WEBPACK_IMPORTED_MODULE_2__.footerBox},Footer))};Common.displayName="Common";var CommonStory=addSourceDecorator((function(){var Layout=Object(_src__WEBPACK_IMPORTED_MODULE_1__.b)(Common),_defineSlots=Object(_src__WEBPACK_IMPORTED_MODULE_1__.a)("Content","Footer","Header","SidebarLeft","SidebarRight"),Content=_defineSlots.Content,Footer=_defineSlots.Footer,Header=_defineSlots.Header,SidebarLeft=_defineSlots.SidebarLeft,SidebarRight=_defineSlots.SidebarRight;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Layout,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content,null,"Content"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Footer,null,"Footer"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header,null,"Header"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SidebarLeft,null,"Left"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SidebarRight,null,"Right"))}),{__STORY__:'import React from "react";\n\nimport { defineSlots, useLayout, useSlots } from "./src";\nimport {\n  contentBox,\n  footerBox,\n  headerBox,\n  layoutGrid,\n  sidebarLeftBox,\n  sidebarRightBox\n} from "./Common.module.scss";\n\nconst Common = () => {\n  const { Content, Footer, Header, SidebarLeft, SidebarRight } = useSlots(\n    "Content",\n    "Footer",\n    "Header",\n    "SidebarLeft",\n    "SidebarRight"\n  );\n\n  return (\n    <div className={layoutGrid}>\n      <div className={headerBox}>{Header}</div>\n      <div className={sidebarLeftBox}>{SidebarLeft}</div>\n      <div className={contentBox}>{Content}</div>\n      <div className={sidebarRightBox}>{SidebarRight}</div>\n      <div className={footerBox}>{Footer}</div>\n    </div>\n  );\n};\n\nexport const CommonStory = () => {\n  const Layout = useLayout(Common);\n\n  const { Content, Footer, Header, SidebarLeft, SidebarRight } = defineSlots(\n    "Content",\n    "Footer",\n    "Header",\n    "SidebarLeft",\n    "SidebarRight"\n  );\n\n  return (\n    <Layout>\n      <Content>Content</Content>\n      <Footer>Footer</Footer>\n      <Header>Header</Header>\n      <SidebarLeft>Left</SidebarLeft>\n      <SidebarRight>Right</SidebarRight>\n    </Layout>\n  );\n};\n\nCommonStory.story = {\n  name: "Common layout"\n};\n\nexport default {\n  title: "react-hook-layout"\n};\n',__ADDS_MAP__:{"react-hook-layout--common-story":{startLoc:{col:27,line:33},endLoc:{col:1,line:53},startBody:{col:27,line:33},endBody:{col:1,line:53}}},__MAIN_FILE_LOCATION__:"/1-Common.stories.js",__MODULE_DEPENDENCIES__:[],__LOCAL_DEPENDENCIES__:{},__SOURCE_PREFIX__:"/home/ytiurin/repo/react-hook-layout/storybook/stories",__IDS_TO_FRAMEWORKS__:{}});CommonStory.story={name:"Common layout"},__webpack_exports__.default={parameters:{storySource:{source:'import React from "react";\n\nimport { defineSlots, useLayout, useSlots } from "./src";\nimport {\n  contentBox,\n  footerBox,\n  headerBox,\n  layoutGrid,\n  sidebarLeftBox,\n  sidebarRightBox\n} from "./Common.module.scss";\n\nconst Common = () => {\n  const { Content, Footer, Header, SidebarLeft, SidebarRight } = useSlots(\n    "Content",\n    "Footer",\n    "Header",\n    "SidebarLeft",\n    "SidebarRight"\n  );\n\n  return (\n    <div className={layoutGrid}>\n      <div className={headerBox}>{Header}</div>\n      <div className={sidebarLeftBox}>{SidebarLeft}</div>\n      <div className={contentBox}>{Content}</div>\n      <div className={sidebarRightBox}>{SidebarRight}</div>\n      <div className={footerBox}>{Footer}</div>\n    </div>\n  );\n};\n\nexport const CommonStory = () => {\n  const Layout = useLayout(Common);\n\n  const { Content, Footer, Header, SidebarLeft, SidebarRight } = defineSlots(\n    "Content",\n    "Footer",\n    "Header",\n    "SidebarLeft",\n    "SidebarRight"\n  );\n\n  return (\n    <Layout>\n      <Content>Content</Content>\n      <Footer>Footer</Footer>\n      <Header>Header</Header>\n      <SidebarLeft>Left</SidebarLeft>\n      <SidebarRight>Right</SidebarRight>\n    </Layout>\n  );\n};\n\nCommonStory.story = {\n  name: "Common layout"\n};\n\nexport default {\n  title: "react-hook-layout"\n};\n',locationsMap:{"react-hook-layout--common-story":{startLoc:{col:27,line:33},endLoc:{col:1,line:53},startBody:{col:27,line:33},endBody:{col:1,line:53}}}}},title:"react-hook-layout"}},613:function(module,exports,__webpack_require__){(exports=__webpack_require__(167)(!1)).push([module.i,".Common-module--box{display:flex;margin:4px;align-items:center;justify-content:center}.Common-module--contentBox{background:rgba(0,0,255,0.35);flex-grow:4;height:400px}.Common-module--footerBox{background:rgba(255,0,255,0.35);height:80px;width:100%}.Common-module--headerBox{background:rgba(255,255,0,0.35);height:80px;width:100%}.Common-module--layoutGrid{display:flex;flex-wrap:wrap;width:500px}.Common-module--sidebarLeftBox{background:rgba(0,255,0,0.35);flex-grow:1}.Common-module--sidebarRightBox{background:rgba(0,255,255,0.35);flex-grow:1}\n",""]),exports.locals={box:"Common-module--box",contentBox:"Common-module--contentBox Common-module--box",footerBox:"Common-module--footerBox Common-module--box",headerBox:"Common-module--headerBox Common-module--box",layoutGrid:"Common-module--layoutGrid",sidebarLeftBox:"Common-module--sidebarLeftBox Common-module--box",sidebarRightBox:"Common-module--sidebarRightBox Common-module--box"},module.exports=exports},614:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"NestedStory",(function(){return NestedStory}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(15),_Nested_module_scss__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(169),addSourceDecorator=(__webpack_require__(68).withSource,__webpack_require__(68).addSource),_ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),Inner=function(){var Content=Object(_src__WEBPACK_IMPORTED_MODULE_1__.c)("Content").Content;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Nested_module_scss__WEBPACK_IMPORTED_MODULE_2__.innerBox},"Inner box",_ref,Content)};Inner.displayName="Inner";var _ref2=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),Outer=function(){var Content=Object(_src__WEBPACK_IMPORTED_MODULE_1__.c)("Content").Content;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Nested_module_scss__WEBPACK_IMPORTED_MODULE_2__.outerBox},"Outer box",_ref2,Content)};Outer.displayName="Outer";var NestedStory=addSourceDecorator((function(){var OuterLayout=Object(_src__WEBPACK_IMPORTED_MODULE_1__.b)(Outer),InnerLayout=Object(_src__WEBPACK_IMPORTED_MODULE_1__.b)(Inner),Content=Object(_src__WEBPACK_IMPORTED_MODULE_1__.a)("Content").Content;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OuterLayout,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerLayout,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content,null,"Hello"))))}),{__STORY__:'import React from "react";\n\nimport { defineSlots, useLayout, useSlots } from "./src";\nimport { innerBox, outerBox } from "./Nested.module.scss";\n\nconst Inner = () => {\n  const { Content } = useSlots("Content");\n\n  return (\n    <div className={innerBox}>\n      Inner box\n      <br />\n      {Content}\n    </div>\n  );\n};\n\nconst Outer = () => {\n  const { Content } = useSlots("Content");\n\n  return (\n    <div className={outerBox}>\n      Outer box\n      <br />\n      {Content}\n    </div>\n  );\n};\n\nexport const NestedStory = () => {\n  const OuterLayout = useLayout(Outer);\n  const InnerLayout = useLayout(Inner);\n\n  const { Content } = defineSlots("Content");\n\n  return (\n    <OuterLayout>\n      <Content>\n        <InnerLayout>\n          <Content>Hello</Content>\n        </InnerLayout>\n      </Content>\n    </OuterLayout>\n  );\n};\n\nNestedStory.story = {\n  name: "Nested layouts"\n};\n\nexport default {\n  title: "react-hook-layout"\n};\n',__ADDS_MAP__:{"react-hook-layout--nested-story":{startLoc:{col:27,line:30},endLoc:{col:1,line:45},startBody:{col:27,line:30},endBody:{col:1,line:45}}},__MAIN_FILE_LOCATION__:"/2-Nested.stories.js",__MODULE_DEPENDENCIES__:[],__LOCAL_DEPENDENCIES__:{},__SOURCE_PREFIX__:"/home/ytiurin/repo/react-hook-layout/storybook/stories",__IDS_TO_FRAMEWORKS__:{}});NestedStory.story={name:"Nested layouts"},__webpack_exports__.default={parameters:{storySource:{source:'import React from "react";\n\nimport { defineSlots, useLayout, useSlots } from "./src";\nimport { innerBox, outerBox } from "./Nested.module.scss";\n\nconst Inner = () => {\n  const { Content } = useSlots("Content");\n\n  return (\n    <div className={innerBox}>\n      Inner box\n      <br />\n      {Content}\n    </div>\n  );\n};\n\nconst Outer = () => {\n  const { Content } = useSlots("Content");\n\n  return (\n    <div className={outerBox}>\n      Outer box\n      <br />\n      {Content}\n    </div>\n  );\n};\n\nexport const NestedStory = () => {\n  const OuterLayout = useLayout(Outer);\n  const InnerLayout = useLayout(Inner);\n\n  const { Content } = defineSlots("Content");\n\n  return (\n    <OuterLayout>\n      <Content>\n        <InnerLayout>\n          <Content>Hello</Content>\n        </InnerLayout>\n      </Content>\n    </OuterLayout>\n  );\n};\n\nNestedStory.story = {\n  name: "Nested layouts"\n};\n\nexport default {\n  title: "react-hook-layout"\n};\n',locationsMap:{"react-hook-layout--nested-story":{startLoc:{col:27,line:30},endLoc:{col:1,line:45},startBody:{col:27,line:30},endBody:{col:1,line:45}}}}},title:"react-hook-layout"}},615:function(module,exports,__webpack_require__){(exports=__webpack_require__(167)(!1)).push([module.i,".Nested-module--box{display:inline-block}.Nested-module--innerBox{background:rgba(255,0,255,0.35);height:380px;margin:24px;width:240px}.Nested-module--outerBox{background:rgba(0,255,0,0.35)}\n",""]),exports.locals={box:"Nested-module--box",innerBox:"Nested-module--innerBox Nested-module--box",outerBox:"Nested-module--outerBox Nested-module--box"},module.exports=exports},616:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"SwipeStory",(function(){return SwipeStory}));__webpack_require__(26),__webpack_require__(33),__webpack_require__(34),__webpack_require__(63),__webpack_require__(51),__webpack_require__(28),__webpack_require__(155),__webpack_require__(52),__webpack_require__(83),__webpack_require__(19),__webpack_require__(53),__webpack_require__(36),__webpack_require__(37);var react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__),_src__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(15),_Mirrored_module_scss__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(59);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__(68).withSource;var addSourceDecorator=__webpack_require__(68).addSource,First=function(){var _useSlots=Object(_src__WEBPACK_IMPORTED_MODULE_14__.c)("Left","Right"),Left=_useSlots.Left,Right=_useSlots.Right;return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div",{className:_Mirrored_module_scss__WEBPACK_IMPORTED_MODULE_15__.layoutGrid},react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div",{className:_Mirrored_module_scss__WEBPACK_IMPORTED_MODULE_15__.rightBox},Right),react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div",{className:_Mirrored_module_scss__WEBPACK_IMPORTED_MODULE_15__.leftBox},Left))};First.displayName="First";var Second=function(){var _useSlots2=Object(_src__WEBPACK_IMPORTED_MODULE_14__.c)("Left","Right"),Left=_useSlots2.Left,Right=_useSlots2.Right;return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div",{className:_Mirrored_module_scss__WEBPACK_IMPORTED_MODULE_15__.layoutGrid},react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div",{className:_Mirrored_module_scss__WEBPACK_IMPORTED_MODULE_15__.leftBox},Left),react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div",{className:_Mirrored_module_scss__WEBPACK_IMPORTED_MODULE_15__.rightBox},Right))};Second.displayName="Second";var SwipeStory=addSourceDecorator((function(){var _useState2=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_13__.useState)(!1),2),isSwipped=_useState2[0],setSwipped=_useState2[1],Layout=Object(_src__WEBPACK_IMPORTED_MODULE_14__.b)(isSwipped?First:Second),_defineSlots=Object(_src__WEBPACK_IMPORTED_MODULE_14__.a)("Left","Right"),Left=_defineSlots.Left,Right=_defineSlots.Right;return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_13___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(Layout,null,react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(Left,null,"1"),react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(Right,null,"2")),react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("button",{onClick:function onClick(){return setSwipped(!isSwipped)}},"Swipe layouts"))}),{__STORY__:'import React, { useState } from "react";\n\nimport { defineSlots, useLayout, useSlots } from "./src";\nimport { layoutGrid, leftBox, rightBox } from "./Mirrored.module.scss";\n\nconst First = () => {\n  const { Left, Right } = useSlots("Left", "Right");\n\n  return (\n    <div className={layoutGrid}>\n      <div className={rightBox}>{Right}</div>\n      <div className={leftBox}>{Left}</div>\n    </div>\n  );\n};\n\nconst Second = () => {\n  const { Left, Right } = useSlots("Left", "Right");\n\n  return (\n    <div className={layoutGrid}>\n      <div className={leftBox}>{Left}</div>\n      <div className={rightBox}>{Right}</div>\n    </div>\n  );\n};\n\nexport const SwipeStory = () => {\n  const [isSwipped, setSwipped] = useState(false);\n\n  const Layout = useLayout(isSwipped ? First : Second);\n  const { Left, Right } = defineSlots("Left", "Right");\n\n  return (\n    <>\n      <Layout>\n        <Left>1</Left>\n        <Right>2</Right>\n      </Layout>\n      <button onClick={() => setSwipped(!isSwipped)}>Swipe layouts</button>\n    </>\n  );\n};\n\nSwipeStory.story = {\n  name: "Swipe layouts"\n};\n\nexport default {\n  title: "react-hook-layout"\n};\n',__ADDS_MAP__:{"react-hook-layout--swipe-story":{startLoc:{col:26,line:28},endLoc:{col:1,line:43},startBody:{col:26,line:28},endBody:{col:1,line:43}}},__MAIN_FILE_LOCATION__:"/3-Swipe.stories.js",__MODULE_DEPENDENCIES__:[],__LOCAL_DEPENDENCIES__:{},__SOURCE_PREFIX__:"/home/ytiurin/repo/react-hook-layout/storybook/stories",__IDS_TO_FRAMEWORKS__:{}});SwipeStory.story={name:"Swipe layouts"},__webpack_exports__.default={parameters:{storySource:{source:'import React, { useState } from "react";\n\nimport { defineSlots, useLayout, useSlots } from "./src";\nimport { layoutGrid, leftBox, rightBox } from "./Mirrored.module.scss";\n\nconst First = () => {\n  const { Left, Right } = useSlots("Left", "Right");\n\n  return (\n    <div className={layoutGrid}>\n      <div className={rightBox}>{Right}</div>\n      <div className={leftBox}>{Left}</div>\n    </div>\n  );\n};\n\nconst Second = () => {\n  const { Left, Right } = useSlots("Left", "Right");\n\n  return (\n    <div className={layoutGrid}>\n      <div className={leftBox}>{Left}</div>\n      <div className={rightBox}>{Right}</div>\n    </div>\n  );\n};\n\nexport const SwipeStory = () => {\n  const [isSwipped, setSwipped] = useState(false);\n\n  const Layout = useLayout(isSwipped ? First : Second);\n  const { Left, Right } = defineSlots("Left", "Right");\n\n  return (\n    <>\n      <Layout>\n        <Left>1</Left>\n        <Right>2</Right>\n      </Layout>\n      <button onClick={() => setSwipped(!isSwipped)}>Swipe layouts</button>\n    </>\n  );\n};\n\nSwipeStory.story = {\n  name: "Swipe layouts"\n};\n\nexport default {\n  title: "react-hook-layout"\n};\n',locationsMap:{"react-hook-layout--swipe-story":{startLoc:{col:26,line:28},endLoc:{col:1,line:43},startBody:{col:26,line:28},endBody:{col:1,line:43}}}}},title:"react-hook-layout"}},617:function(module,exports,__webpack_require__){(exports=__webpack_require__(167)(!1)).push([module.i,".Mirrored-module--box{border-radius:50%;display:flex;height:80px;margin:8px;width:80px;align-items:center;justify-content:center}.Mirrored-module--layoutGrid{display:flex}.Mirrored-module--leftBox{background:rgba(0,255,0,0.35)}.Mirrored-module--rightBox{background:rgba(0,0,255,0.35)}\n",""]),exports.locals={box:"Mirrored-module--box",layoutGrid:"Mirrored-module--layoutGrid",leftBox:"Mirrored-module--leftBox Mirrored-module--box",rightBox:"Mirrored-module--rightBox Mirrored-module--box"},module.exports=exports}},[[271,1,2]]]);
//# sourceMappingURL=main.723e5d9589cdceb1014b.bundle.js.map
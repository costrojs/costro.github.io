"use strict";(self.webpackChunkcostro_docs=self.webpackChunkcostro_docs||[]).push([[496],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),i=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=i(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(n),d=r,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return n?o.createElement(h,s(s({ref:t},p),{},{components:n})):o.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,s[1]=l;for(var i=2;i<a;i++)s[i]=n[i];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(7294),r=n(6010);const a={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return o.createElement("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var o=n(7462),r=n(7294),a=n(6010),s=n(2466),l=n(6550),c=n(1980),i=n(7392),p=n(12);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:r}}=e;return{value:t,label:n,attributes:o,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const o=(0,l.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(o.location.search);t.set(a,e),o.replace({...o.location,search:t.toString()})}),[a,o])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,a=m(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:a}))),[c,i]=h({queryString:n,groupId:o}),[u,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,a]=(0,p.Nk)(n);return[o,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:o}),k=(()=>{const e=c??u;return d({value:e,tabValues:a})?e:null})();(0,r.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),i(e),f(e)}),[i,f,a]),tabValues:a}}var k=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:l,selectValue:c,tabValues:i}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),m=e=>{const t=e.currentTarget,n=p.indexOf(t),o=i[n].value;o!==l&&(u(t),c(o))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,o.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:m},s,{className:(0,a.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":l===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:o}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o}))))}function y(e){const t=f(e);return r.createElement("div",{className:(0,a.Z)("tabs-container",b.tabList)},r.createElement(g,(0,o.Z)({},e,t)),r.createElement(v,(0,o.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return r.createElement(y,(0,o.Z)({key:String(t)},e))}},1007:(e,t,n)=>{n.d(t,{Z:()=>m});var o=n(7294);const r="browserWindow_my1Q",a="browserWindowHeader_jXSR",s="buttons_uHc7",l="browserWindowAddressBar_Pd8y",c="dot_giz1",i="browserWindowMenuIcon_Vhuh",p="bar_rrRL",u="browserWindowBody_Idgs";const m=function(e){let{children:t,minHeight:n,url:m}=e;return o.createElement("div",{className:r,style:{minHeight:n}},o.createElement("div",{className:a},o.createElement("div",{className:s},o.createElement("span",{className:c,style:{background:"#f25f58"}}),o.createElement("span",{className:c,style:{background:"#fbbe3c"}}),o.createElement("span",{className:c,style:{background:"#58cb42"}})),o.createElement("div",{className:l},m),o.createElement("div",{className:i},o.createElement("div",null,o.createElement("span",{className:p}),o.createElement("span",{className:p}),o.createElement("span",{className:p})))),o.createElement("div",{className:u},t))}},5679:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>p,toc:()=>m});var o=n(7462),r=(n(7294),n(3905)),a=n(4866),s=n(5162),l=n(1007);const c={id:"component",title:"Component"},i=void 0,p={unversionedId:"component",id:"component",title:"Component",description:"Function and Class Components",source:"@site/docs/component.md",sourceDirName:".",slug:"/component",permalink:"/docs/component",draft:!1,editUrl:"https://github.com/costrojs/costrojs.github.io/edit/main/docs/component.md",tags:[],version:"current",frontMatter:{id:"component",title:"Component"},sidebar:"docs",previous:{title:"Template syntax",permalink:"/docs/template-syntax"},next:{title:"Router",permalink:"/docs/router"}},u={},m=[{value:"Function and Class Components",id:"function-and-class-components",level:2},{value:"Transform a Function to a Class",id:"transform-a-function-to-a-class",level:2},{value:"Lifecycle hooks",id:"lifecycle-hooks",level:2},{value:"Before render",id:"before-render",level:3},{value:"After render",id:"after-render",level:3},{value:"Before destroy",id:"before-destroy",level:3},{value:"After destroy",id:"after-destroy",level:3},{value:"Props",id:"props",level:2},{value:"Nested components",id:"nested-components",level:2},{value:"State changes",id:"state-changes",level:2},{value:"Route data",id:"route-data",level:2}],d={toc:m},h="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"function-and-class-components"},"Function and Class Components"),(0,r.kt)("p",null,"The easiest way to define a component is to write a JavaScript function. The component can also be written as an ES6 class and extends the class ",(0,r.kt)("inlineCode",{parentName:"p"},"Component")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"Costro"),". This offers more features which you will discover below. These can be imported from other files."),(0,r.kt)(a.Z,{groupId:"function-class-component",defaultValue:"function-component",values:[{label:"Function Component",value:"function-component"},{label:"Class Component",value:"class-component"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"function-component",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/components/home.js"',title:'"src/components/home.js"'},"function Home(props) {\n  return <h2>Hello, {props.name}</h2>;\n}\n"))),(0,r.kt)(s.Z,{value:"class-component",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/components/home.js"',title:'"src/components/home.js"'},"import { Component } from 'costro';\n\nclass Home extends Component {\n  render() {\n    return <h2>Hello, {this.props.name}</h2>;\n  }\n}\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Import `Component` with CDN links"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Component")," is exposed in the global variable ",(0,r.kt)("inlineCode",{parentName:"p"},"window.Costro"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/components/home.js"',title:'"src/components/home.js"'},"class Home extends Costro.Component {}\n"))))),(0,r.kt)("h2",{id:"transform-a-function-to-a-class"},"Transform a Function to a Class"),(0,r.kt)("p",null,"You can transform a function component to a class component with the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create an ES6 class with the same name, that extends ",(0,r.kt)("inlineCode",{parentName:"li"},"Component"),"."),(0,r.kt)("li",{parentName:"ol"},"Add a single method ",(0,r.kt)("inlineCode",{parentName:"li"},"render()"),"."),(0,r.kt)("li",{parentName:"ol"},"Move the content of the function into the ",(0,r.kt)("inlineCode",{parentName:"li"},"render()")," method."),(0,r.kt)("li",{parentName:"ol"},"Replace ",(0,r.kt)("inlineCode",{parentName:"li"},"props")," with ",(0,r.kt)("inlineCode",{parentName:"li"},"this.props")," in the ",(0,r.kt)("inlineCode",{parentName:"li"},"render()")," content.")),(0,r.kt)("h2",{id:"lifecycle-hooks"},"Lifecycle hooks"),(0,r.kt)("p",null,"Lifecycle hooks are available on ",(0,r.kt)("strong",{parentName:"p"},"Class Components")," only."),(0,r.kt)("p",null,"We can declare special methods on the component class to run some code when a component is rendered or destroyed."),(0,r.kt)("p",null,"Try it on ",(0,r.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/costro-lifecycle-5v9d8"},"CodeSandbox"),"."),(0,r.kt)("h3",{id:"before-render"},"Before render"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeRender()")," method runs before the component output has been rendered to the DOM."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/components/home.js" {2,3,4}',title:'"src/components/home.js"',"{2,3,4}":!0},"class Home extends Component {\n  beforeRender() {\n    // The component is not yet rendered to the DOM\n  }\n\n  render() {\n    return <h2>Home</h2>;\n  }\n}\n")),(0,r.kt)("h3",{id:"after-render"},"After render"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"afterRender()")," method runs after the component output has been rendered to the DOM."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/components/home.js" {6,7,8}',title:'"src/components/home.js"',"{6,7,8}":!0},"class Home extends Component {\n  render() {\n    return <h2>Home</h2>;\n  }\n\n  afterRender() {\n    // The component is rendered to the DOM\n  }\n}\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Access to the component's DOM must be done during the ",(0,r.kt)("inlineCode",{parentName:"p"},"afterRender")," hook.")),(0,r.kt)("h3",{id:"before-destroy"},"Before destroy"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeDestroy()")," method runs before the component has been removed to the DOM."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/components/home.js" {2,3,4}',title:'"src/components/home.js"',"{2,3,4}":!0},"class Home extends Component {\n  beforeDestroy() {\n    // The component is not yet removed from the DOM\n  }\n\n  render() {\n    return <h2>Home</h2>;\n  }\n}\n")),(0,r.kt)("h3",{id:"after-destroy"},"After destroy"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"afterDestroy()")," method runs after the component has been removed to the DOM."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/components/home.js" {6,7,8}',title:'"src/components/home.js"',"{6,7,8}":!0},"class Home extends Component {\n  render() {\n    return <h2>Home</h2>;\n  }\n\n  afterDestroy() {\n    // The component is removed from the DOM\n  }\n}\n")),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("p",null,"Props are inputs accepted by components and ",(0,r.kt)("a",{parentName:"p",href:"router#route-props"},"injected from the route"),"."),(0,r.kt)("p",null,"The function component accepts a single ",(0,r.kt)("inlineCode",{parentName:"p"},"props")," object argument with data as a parameter. The class component has the same principle except that the ",(0,r.kt)("inlineCode",{parentName:"p"},"props")," are exposed in the context of the class with ",(0,r.kt)("inlineCode",{parentName:"p"},"this.props"),"."),(0,r.kt)(a.Z,{groupId:"function-class-component",defaultValue:"function-component",values:[{label:"Function Component",value:"function-component"},{label:"Class Component",value:"class-component"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"function-component",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/components/home.js"',title:'"src/components/home.js"'},"function Home(props) {\n  return `<h2>Hello, ${props.name}</h2>`;\n}\n"))),(0,r.kt)(s.Z,{value:"class-component",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/components/home.js"',title:'"src/components/home.js"'},"class Home extends Component {\n  render() {\n    return `<h2>Hello, ${this.props.name}</h2>`;\n  }\n}\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"constructor()")," function on the class component, you should call ",(0,r.kt)("inlineCode",{parentName:"p"},"super(props)")," before any other statement. Otherwise, props will not be available.")))),(0,r.kt)(l.Z,{url:"http://localhost:3000",mdxType:"BrowserWindow"},(0,r.kt)("h2",null,"Hello, John Doe")),(0,r.kt)("br",null),(0,r.kt)("p",null,"Try it on ",(0,r.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/costro-props-9noop"},"CodeSandbox"),"."),(0,r.kt)("h2",{id:"nested-components"},"Nested components"),(0,r.kt)("p",null,"Components can be nested and their props are automatically injected into the child component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'class Person extends Component {\n  render() {\n    return <h2>Hello, {this.props.name}</h2>;\n  }\n}\n\nclass Home extends Component {\n  render() {\n    return <Person name="John Doe" />;\n  }\n}\n')),(0,r.kt)(l.Z,{url:"http://localhost:3000",mdxType:"BrowserWindow"},(0,r.kt)("h2",null,"Hello, John Doe")),(0,r.kt)("h2",{id:"state-changes"},"State changes"),(0,r.kt)("p",null,"You should manually update the DOM on state changes. Making carefully crafted manual updates is much faster than using a virtual DOM with diff algorithms (and also less magic). Lifecycle hooks can be useful in making these updates at the right time."),(0,r.kt)("p",null,"The following examples show how to update the DOM when the state changes."),(0,r.kt)(a.Z,{groupId:"state-changes",defaultValue:"event-handling",values:[{label:"Event handling",value:"event-handling"},{label:"Nested component",value:"nested-component"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"event-handling",mdxType:"TabItem"},(0,r.kt)("p",null,"Updates the ",(0,r.kt)("inlineCode",{parentName:"p"},"#counter")," element after each click."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/components/counter.js"',title:'"src/components/counter.js"'},"class Counter extends Component {\n  constructor(props) {\n    super(props);\n    this.counter = 0;\n    this.handleClick = this.handleClick.bind(this);\n  }\n\n  render() {\n    return (\n      <button onClick={this.handleClick}>\n        Clicks: <span id=\"counter\">{this.counter}</span>\n      </button>\n    );\n  }\n\n  handleClick() {\n    this.counter++;\n    document.getElementById('counter').textContent = this.counter;\n  }\n}\n")),(0,r.kt)("p",null,"Try it on ",(0,r.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/costro-counter-4tilh"},"CodeSandbox"),".")),(0,r.kt)(s.Z,{value:"nested-component",mdxType:"TabItem"},(0,r.kt)("p",null,"Updates the nested ",(0,r.kt)("inlineCode",{parentName:"p"},"Clock")," component with new props every second."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/components/counter.js"',title:'"src/components/counter.js"'},"function Clock(props) {\n  return <span id=\"time\">{props.time.toLocaleTimeString()}</span>;\n}\n\nclass Counter extends Component {\n  render() {\n    return (\n      <>\n        It is, <Clock time={new Date()} />.\n      </>\n    );\n  }\n\n  afterRender() {\n    this.timer = setInterval(() => this.updateTime(), 1000);\n  }\n\n  updateTime() {\n    document.getElementById('time').replaceWith(<Clock time={new Date()} />);\n  }\n\n  beforeDestroy() {\n    clearInterval(this.timer);\n  }\n}\n")),(0,r.kt)("p",null,"Try it on ",(0,r.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/costro-clock-er4hr"},"CodeSandbox"),"."))),(0,r.kt)("h2",{id:"route-data"},"Route data"),(0,r.kt)("p",null,"The component class exposes the ",(0,r.kt)("inlineCode",{parentName:"p"},"route")," data as a class property."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Signature")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type route = {\n  path: string\n  params: {\n    [key: string]: string\n  };\n};\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("p",null,"Current path in URL and list of dynamic segments with their values."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/components/person.js"',title:'"src/components/person.js"'},"class Person extends Component {\n  render() {\n    return <h2>Person ID: {this.route.params.id}</h2>;\n  }\n}\n")),(0,r.kt)("p",null,"The above example with the route path ",(0,r.kt)("inlineCode",{parentName:"p"},"/person/:id")," will expose the following data in the ",(0,r.kt)("inlineCode",{parentName:"p"},"this.route")," object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "path": "/person/42",\n  "params": {\n    "id": 42\n  }\n}\n')),(0,r.kt)("p",null,"Try it on ",(0,r.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/costro-dynamic-segments-3q8up"},"CodeSandbox"),"."))}f.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkcostro_docs=self.webpackChunkcostro_docs||[]).push([[343],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),i=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=i(n),m=r,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7563:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),l=n(5162);const s={id:"index",title:"Tutorial"},u=void 0,i={unversionedId:"index",id:"index",title:"Tutorial",description:"Welcome to the Costro tutorial. You'll learn a quick start guide and the most important concepts to easily start building quick web apps. You can also view the Docs and the Playground.",source:"@site/tutorial/index.md",sourceDirName:".",slug:"/",permalink:"/tutorial/",draft:!1,tags:[],version:"current",frontMatter:{id:"index",title:"Tutorial"},sidebar:"tutorial",next:{title:"Playground",permalink:"/tutorial/playground"}},c={},p=[{value:"Downloading Costro",id:"downloading-costro",level:2},{value:"Choose the template syntax",id:"choose-the-template-syntax",level:2},{value:"Fundamentals",id:"fundamentals",level:2},{value:"Create components",id:"create-components",level:3},{value:"Defines routes",id:"defines-routes",level:3},{value:"Create the application instance",id:"create-the-application-instance",level:3},{value:"Use store",id:"use-store",level:2}],d={toc:p},m="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Welcome to the Costro tutorial. You'll learn a quick start guide and the most important concepts to easily start building quick web apps. You can also view the ",(0,r.kt)("a",{parentName:"p",href:"/docs/installation"},"Docs")," and the ",(0,r.kt)("a",{parentName:"p",href:"/tutorial/playground"},"Playground"),"."),(0,r.kt)("h2",{id:"downloading-costro"},"Downloading Costro"),(0,r.kt)("p",null,"First, make sure you've installed ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download"},"Node.js"),". When you're ready, in a terminal, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install costro\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Other installation methods are available: ",(0,r.kt)("a",{parentName:"p",href:"/docs/installation#cdn"},"CDN"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/installation#download-and-self-host"},"self host"))),(0,r.kt)("h2",{id:"choose-the-template-syntax"},"Choose the template syntax"),(0,r.kt)("p",null,"Costro's component templates can be written in native Template String or with JSX."),(0,r.kt)(o.Z,{groupId:"template-syntax",defaultValue:"template-string",values:[{label:"Template String",value:"template-string"},{label:"JSX",value:"template-jsx"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"template-string",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/components/home.js"',title:'"src/components/home.js"'},"class Home extends Component {\n  render() {\n    return `<h2>Home</h2>`;\n  }\n}\n"))),(0,r.kt)(l.Z,{value:"template-jsx",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/components/home.js"',title:'"src/components/home.js"'},"import { h } from 'costro/jsx';\n\nclass Home extends Component {\n  render() {\n    return <h2>Home</h2>;\n  }\n}\n")))),(0,r.kt)("p",null,"Read the ",(0,r.kt)("a",{parentName:"p",href:"/docs/template-syntax"},"Template syntax")," guide for more details."),(0,r.kt)("h2",{id:"fundamentals"},"Fundamentals"),(0,r.kt)("h3",{id:"create-components"},"Create components"),(0,r.kt)("p",null,"Create components so that we can later associate them with routes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/components/home.js"',title:'"src/components/home.js"'},"import { Component } from 'costro';\nimport { h } from 'costro/jsx';\n\n// Shared component\nfunction Navigation() {\n  return (\n    <div>\n      <Link to=\"/\">Home</Link>\n      <Link to=\"/about\">About</Link>\n    </div>\n  );\n}\n\nclass Home extends Component {\n  render() {\n    return (\n      <div>\n        <Navigation />\n        <h2>Home</h2>\n      </div>\n    );\n  }\n}\n\nclass About extends Component {\n  render() {\n    return (\n      <div>\n        <Navigation />\n        <h2>About</h2>\n      </div>\n    );\n  }\n}\n")),(0,r.kt)("p",null,"Read the ",(0,r.kt)("a",{parentName:"p",href:"/docs/component"},"Component")," guide for more details."),(0,r.kt)("h3",{id:"defines-routes"},"Defines routes"),(0,r.kt)("p",null,"Define routes and associate them with your components."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const routes = [\n  {\n    path: '/',\n    component: Home\n  },\n  {\n    path: '/about',\n    component: About\n  }\n];\n")),(0,r.kt)("p",null,"Read the ",(0,r.kt)("a",{parentName:"p",href:"/docs/router"},"Router")," guide for more details."),(0,r.kt)("h3",{id:"create-the-application-instance"},"Create the application instance"),(0,r.kt)("p",null,"Create the application instance and pass the routes configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const app = new App({\n  target: document.querySelector('#app'),\n  routes\n});\n")),(0,r.kt)("p",null,"Read the ",(0,r.kt)("a",{parentName:"p",href:"/docs/application"},"Application")," guide for more details."),(0,r.kt)("h2",{id:"use-store"},"Use store"),(0,r.kt)("p",null,"Read the ",(0,r.kt)("a",{parentName:"p",href:"/docs/store"},"Store")," guide for more details."))}f.isMDXComponent=!0},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),o=n(6010),l=n(2466),s=n(6550),u=n(1980),i=n(7392),c=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,i]=f({queryString:n,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=u??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),h(e)}),[i,h,o]),tabValues:o}}var b=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:s,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=i[n].value;a!==s&&(p(t),u(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":s===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}}}]);
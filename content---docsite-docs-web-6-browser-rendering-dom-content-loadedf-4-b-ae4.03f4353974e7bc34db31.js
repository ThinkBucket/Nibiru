(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{216:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));n(0);var r=n(257);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c={id:"DOMContentLoaded",title:"DOMContentLoaded和load",sidebar_label:"DOMContentLoaded和load"},l=[],p={rightToc:l},i="wrapper";function u(e){var t=e.components,n=a(e,["components"]);return Object(r.b)(i,o({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"当初始的 HTML 文档被完全加载和解析完成之后，DOMContentLoaded 事件被触发，而无需等待样式表、图像和子框架的完成加载。"),Object(r.b)("p",null,"load整个页面加载后会触发该事件，包括所有相关资源，如样式表、图像。 "),Object(r.b)("p",null,"关于DOMContentLoaded 事件，事件的执行发生在其所在script脚本的执行过程中，而JS的执行需要等待script标签之前的样式表的加载。换句话说JS中DOMContentLoaded 事件的执行需要等待script标签之前的CSSOM的构建。"),Object(r.b)("p",null,"在下图中，在控制台中展示了DOMContentLoaded、load的执行时间，其中蓝色线代表的是DOMContentLoaded，红色的线代表load的时间。"),Object(r.b)("p",null,"通过这个",Object(r.b)("a",o({parentName:"p"},{href:"https://testdrive-archive.azurewebsites.net/HTML5/DOMContentLoaded/Default.html"}),"链接"),"，可以直观感受下两者的不同。"),Object(r.b)("p",null,Object(r.b)("img",o({parentName:"p"},{src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/BpF56S.png",alt:null}))))}u.isMDXComponent=!0},257:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return s}));var r=n(0),o=n.n(r),a=o.a.createContext({}),c=function(e){var t=o.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=c(e.components);return o.a.createElement(a.Provider,{value:t},e.children)};var p="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),u=c(n),s=r,d=u[l+"."+s]||u[s]||i[s]||a;return n?o.a.createElement(d,Object.assign({},{ref:t},p,{components:n})):o.a.createElement(d,Object.assign({},{ref:t},p))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:r,c[1]=l;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);
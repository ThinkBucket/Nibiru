(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{257:function(e,n,r){"use strict";r.d(n,"a",(function(){return l})),r.d(n,"b",(function(){return b}));var t=r(0),o=r.n(t),a=o.a.createContext({}),c=function(e){var n=o.a.useContext(a),r=n;return e&&(r="function"==typeof e?e(n):Object.assign({},n,e)),r},l=function(e){var n=c(e.components);return o.a.createElement(a.Provider,{value:n},e.children)};var i="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},p=Object(t.forwardRef)((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,l=e.parentName,i=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&-1===n.indexOf(t)&&(r[t]=e[t]);return r}(e,["components","mdxType","originalType","parentName"]),p=c(r),b=t,d=p[l+"."+b]||p[b]||u[b]||a;return r?o.a.createElement(d,Object.assign({},{ref:n},i,{components:r})):o.a.createElement(d,Object.assign({},{ref:n},i))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,c=new Array(a);c[0]=p;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[i]="string"==typeof e?e:t,c[1]=l;for(var b=2;b<a;b++)c[b]=r[b];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},74:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"rightToc",(function(){return l})),r.d(n,"default",(function(){return p}));r(0);var t=r(257);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c={id:"mirror-tree",title:"二叉树的镜像",sidebar_label:"二叉树的镜像"},l=[{value:"题目",id:"题目",children:[]},{value:"思路",id:"思路",children:[]},{value:"代码实现",id:"代码实现",children:[]},{value:"拓展",id:"拓展",children:[]}],i={rightToc:l},u="wrapper";function p(e){var n=e.components,r=a(e,["components"]);return Object(t.b)(u,o({},i,r,{components:n,mdxType:"MDXLayout"}),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},"题源：《剑指Offer: 面试题 27》P157"),Object(t.b)("li",{parentName:"ul"},"在线：",Object(t.b)("a",o({parentName:"li"},{href:"https://www.nowcoder.com/practice/564f4c26aa584921bc75623e48ca3011"}),"牛客网"))),Object(t.b)("h2",{id:"题目"},"题目"),Object(t.b)("p",null,"请完成一个函数，输入一颗二叉树，该函数输出它的镜像。二叉树的节点定义如下："),Object(t.b)("pre",null,Object(t.b)("code",o({parentName:"pre"},{className:"language-js"}),"function TreeNode(val) {\n    this.val = val;\n    this.left = this.right = null;\n}\n")),Object(t.b)("div",{align:"center"},Object(t.b)("img",{width:"350",src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/SVRHY5.jpg"}),Object(t.b)("p",null,"图：两棵互为镜像的二叉树")),Object(t.b)("h2",{id:"思路"},"思路"),Object(t.b)("ol",null,Object(t.b)("li",{parentName:"ol"},"前序遍历"),Object(t.b)("li",{parentName:"ol"},"节点存在则交换其左右子树")),Object(t.b)("h2",{id:"代码实现"},"代码实现"),Object(t.b)("pre",null,Object(t.b)("code",o({parentName:"pre"},{className:"language-js"}),"/**\n * @param {TreeNode} root\n * @return {TreeNode}\n */\nfunction mirror(root) {\n    if (!root) return null;\n    function preorder (node) {\n        if (node) {\n            let temp = node.left;\n            node.left = node.right;\n            node.right = temp;\n            preorder(node.left);\n            preorder(node.right);\n        }\n    }\n    preorder(root);\n    return root;\n}\n")),Object(t.b)("h2",{id:"拓展"},"拓展"),Object(t.b)("p",null,"如果不用递归实现，而是循环，则该如何实现？"))}p.isMDXComponent=!0}}]);
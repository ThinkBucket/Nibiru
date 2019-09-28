(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{257:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a),l=r.a.createContext({}),i=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},b=function(e){var n=i(e.components);return r.a.createElement(l.Provider,{value:n},e.children)};var c="mdxType",o={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,c=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===n.indexOf(a)&&(t[a]=e[a]);return t}(e,["components","mdxType","originalType","parentName"]),p=i(t),m=a,O=p[b+"."+m]||p[m]||o[m]||l;return t?r.a.createElement(O,Object.assign({},{ref:n},c,{components:t})):r.a.createElement(O,Object.assign({},{ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=p;var b={};for(var o in n)hasOwnProperty.call(n,o)&&(b[o]=n[o]);b.originalType=e,b[c]="string"==typeof e?e:a,i[1]=b;for(var m=2;m<l;m++)i[m]=t[m];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},78:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"rightToc",(function(){return b})),t.d(n,"default",(function(){return p}));t(0);var a=t(257);function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i={id:"powx-n",title:"数值的整数次方",sidebar_label:"数值的整数次方"},b=[{value:"题目",id:"题目",children:[]},{value:"思路",id:"思路",children:[]},{value:"代码实现",id:"代码实现",children:[]},{value:"复杂度",id:"复杂度",children:[]},{value:"拓展",id:"拓展",children:[]}],c={rightToc:b},o="wrapper";function p(e){var n=e.components,t=l(e,["components"]);return Object(a.b)(o,r({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"题源：《剑指Offer: 面试题 16》P110"),Object(a.b)("li",{parentName:"ul"},"在线：",Object(a.b)("a",r({parentName:"li"},{href:"https://leetcode-cn.com/problems/powx-n/"}),"LeetCode: 50"))),Object(a.b)("h2",{id:"题目"},"题目"),Object(a.b)("p",null,"实现 pow(x, n) ，即计算 x 的 n 次幂函数。不得使用库函数，同时不需要考虑大数问题。"),Object(a.b)("p",null,"示例 1:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-text"}),"输入: 2.00000, 10\n输出: 1024.00000\n")),Object(a.b)("p",null,"示例 2:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-text"}),"输入: 2.10000, 3\n输出: 9.26100\n")),Object(a.b)("p",null,"示例 3:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-text"}),"输入: 2.00000, -2\n输出: 0.25000\n解释: 2-2 = 1/22 = 1/4 = 0.25\n")),Object(a.b)("p",null,"说明:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"-100.0 < x < 100.0"),Object(a.b)("li",{parentName:"ul"},"n 是 32 位有符号整数，其数值范围是 ","[",Object(a.b)("inlineCode",{parentName:"li"},"−2**31"),", ",Object(a.b)("inlineCode",{parentName:"li"},"2**31 − 1"),"]"," 。")),Object(a.b)("h2",{id:"思路"},"思路"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"如果直接用循环乘的话，对于 n 为正数没有问题，n 为 0 的话要返回 1"),Object(a.b)("li",{parentName:"ol"},"如果 n 为负数的话，需要取倒数，这个地方也可利用递归去做"),Object(a.b)("li",{parentName:"ol"},"利用递归将时间复杂度降低到 ",Object(a.b)("inlineCode",{parentName:"li"},"O(logn)")," 级别")),Object(a.b)("div",{align:"center"},Object(a.b)("img",{width:"260",src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/Y7ohZD.png"}),Object(a.b)("p",null,"图：a 的 n 次方的递推公式")),Object(a.b)("h2",{id:"代码实现"},"代码实现"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),"/**\n * @param {number} x\n * @param {number} n\n * @return {number}\n */\nfunction myPow (x, n) {\n    if (n === 0) return 1;\n    if (n < 0) return 1 / myPow(x, -n);\n    if (n & 1) return myPow(x * x, n >>> 1) * x;\n    return myPow(x * x, n >>> 1);\n}\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"关于 JS 位运算注意事项"),":"),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},">>")," 是有符号右移，高位补符号位，尤其注意 ",Object(a.b)("inlineCode",{parentName:"li"},"2**31")," 这个正数，高位会补1，导致其变成负数 ",Object(a.b)("inlineCode",{parentName:"li"},"-1073741824"),"，故",Object(a.b)("strong",{parentName:"li"},"负数右移肯定是负数，但正数右移不一定是正数"),"。"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},">>>")," 是无符号右移，高位始终补0，",Object(a.b)("inlineCode",{parentName:"li"},"2**31>>>1"),"结果是 ",Object(a.b)("inlineCode",{parentName:"li"},"1073741824"),"，",Object(a.b)("strong",{parentName:"li"},"无论是正数还是负数，右移的结果都是正数"),"。"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"-3>>>0")," 会将最高位的1当成是值而不是符号，故其结果是 ",Object(a.b)("inlineCode",{parentName:"li"},"4294967293"),", 尤其注意的是这并不能转成绝对值。"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"JS 的位运算只支持 32 位有符号整数"),"，即 ",Object(a.b)("inlineCode",{parentName:"li"},"2**31"),": ",Object(a.b)("inlineCode",{parentName:"li"},"[-2147483648, 2147483648]"),"，无论是使用 ",Object(a.b)("inlineCode",{parentName:"li"},">>")," 还是 ",Object(a.b)("inlineCode",{parentName:"li"},">>>")," 有效位运算最大正数都只支持到 ",Object(a.b)("inlineCode",{parentName:"li"},"2**31"),"，即 ",Object(a.b)("inlineCode",{parentName:"li"},"2147483648"),", 故 ",Object(a.b)("inlineCode",{parentName:"li"},"4294967296 >>> 1")," 为 ",Object(a.b)("inlineCode",{parentName:"li"},"0"),"。"),Object(a.b)("li",{parentName:"ul"},"不能直接写成 ",Object(a.b)("inlineCode",{parentName:"li"},"1<<32"),", ",Object(a.b)("inlineCode",{parentName:"li"},"1>>32"),", 他们的结果都是 ",Object(a.b)("inlineCode",{parentName:"li"},"1"),", 要写成 ",Object(a.b)("inlineCode",{parentName:"li"},"1>>31>>1"),", ",Object(a.b)("inlineCode",{parentName:"li"},"1<<31<<1"),", 或者用循环逐次移动 1 位，这样结果才会是 ",Object(a.b)("inlineCode",{parentName:"li"},"0"),"。"),Object(a.b)("li",{parentName:"ul"},"优先级高低： ",Object(a.b)("inlineCode",{parentName:"li"},"-")," ",Object(a.b)("inlineCode",{parentName:"li"},"**")," ",Object(a.b)("inlineCode",{parentName:"li"},">>")," ",Object(a.b)("inlineCode",{parentName:"li"},">>>")," ",Object(a.b)("inlineCode",{parentName:"li"},"===")," ",Object(a.b)("inlineCode",{parentName:"li"},"&"),", 判断奇偶时候不能写成 ",Object(a.b)("inlineCode",{parentName:"li"},"n & 1 === 1")," , 要么左边加 ",Object(a.b)("inlineCode",{parentName:"li"},"()"),", 要么不要写 ",Object(a.b)("inlineCode",{parentName:"li"},"=== 1"),"。"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"-23**2")," 会语法报错，因为在语法分析的时候运算符优先级会有歧义，",Object(a.b)("inlineCode",{parentName:"li"},"(-23)**2")," 还是 ",Object(a.b)("inlineCode",{parentName:"li"},"-(23**2)"),"，要加上括号明确意图。"))),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-text"}),"Uncaught SyntaxError: Unary operator used immediately before exponentiation expression. Parenthesis must be used to disambiguate operator precedence\n")),Object(a.b)("h2",{id:"复杂度"},"复杂度"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"时间复杂度：O(logn)，对每一个 n 的二进制位表示，我们都至多需要累乘 1 次。"),Object(a.b)("li",{parentName:"ul"},"空间复杂度：O(logn)，使用了递归函数，也并非尾递归。")),Object(a.b)("h2",{id:"拓展"},"拓展"),Object(a.b)("p",null,"如果想让空间复杂度要降到 O(1)，该如何实现呢？"))}p.isMDXComponent=!0}}]);
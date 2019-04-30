(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{43:function(e,a,t){"use strict";t.r(a),t.d(a,"rightToc",function(){return o}),t.d(a,"default",function(){return p});t(0);var n=t(56);t(57);function r(){return(r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function c(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Credits",id:"credits",children:[]}],s={rightToc:o},l="wrapper";function p(e){var a=e.components,t=c(e,["components"]);return Object(n.a)(l,r({},s,t,{components:a,mdxType:"MDXLayout"}),Object(n.a)("p",null,"A way to submit your solution file to Codeforces through terminal."),Object(n.a)("p",null,Object(n.a)("img",r({parentName:"p"},{src:"https://github.com/endiliey/idne/blob/master/preview.gif?raw=true",alt:"preview GIF"}))),Object(n.a)("h2",null,Object(n.a)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"installation"})),Object(n.a)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#installation"}),"#"),"Installation"),Object(n.a)("p",null,"Clone the repositories"),Object(n.a)("pre",null,Object(n.a)("code",r({parentName:"pre"},{}),"git clone https://github.com/endiliey/idne.git\n")),Object(n.a)("p",null,"Install all required dependencies in an isolated environment"),Object(n.a)("pre",{className:"language-bash"},Object(n.a)("code",r({parentName:"pre"},{className:"language-bash"}),Object(n.a)("span",r({parentName:"code"},{className:"token function"}),"cd")," idne\npython3 -m venv ",Object(n.a)("span",r({parentName:"code"},{className:"token function"}),"env"),"\n",Object(n.a)("span",r({parentName:"code"},{className:"token function"}),"source")," env/bin/activate\npip ",Object(n.a)("span",r({parentName:"code"},{className:"token function"}),"install")," --editable ",Object(n.a)("span",r({parentName:"code"},{className:"token keyword"}),"."),"\n")),Object(n.a)("p",null,"Go to ",Object(n.a)("inlineCode",{parentName:"p"},"utils/config.py"),", then insert your username and password"),Object(n.a)("pre",{className:"language-python"},Object(n.a)("code",r({parentName:"pre"},{className:"language-python"}),"username ",Object(n.a)("span",r({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.a)("span",r({parentName:"code"},{className:"token string"}),'"ababcba"')," ",Object(n.a)("span",r({parentName:"code"},{className:"token comment"}),"# your codeforces username"),"\npassword ",Object(n.a)("span",r({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.a)("span",r({parentName:"code"},{className:"token string"}),'"asdadas"')," ",Object(n.a)("span",r({parentName:"code"},{className:"token comment"}),"# your password"),"\n")),Object(n.a)("p",null,"Make sure to edit ",Object(n.a)("inlineCode",{parentName:"p"},"template.cpp")," as you wish"),Object(n.a)("pre",null,Object(n.a)("code",r({parentName:"pre"},{}),"vim template.cpp\n")),Object(n.a)("h2",null,Object(n.a)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"usage"})),Object(n.a)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#usage"}),"#"),"Usage"),Object(n.a)("p",null,"Example: Solving ",Object(n.a)("a",r({parentName:"p"},{href:"http://codeforces.com/contest/454"}),"Codeforces Round #259 (Div. 2)")),Object(n.a)("p",null,"First, ensure that you have activated the virtualenv\nActivate virtualenv"),Object(n.a)("pre",null,Object(n.a)("code",r({parentName:"pre"},{}),"source env/bin/activate\n")),Object(n.a)("p",null,"Secondly, parse the problem"),Object(n.a)("pre",null,Object(n.a)("code",r({parentName:"pre"},{}),"parse 454\n")),Object(n.a)("p",null,"And there will be a folder named 454-c++11, with a subfolder (e.g: A, B, C, D) inside. Assume you are solving problem A"),Object(n.a)("pre",null,Object(n.a)("code",r({parentName:"pre"},{}),"cd 454-c++11/A\n")),Object(n.a)("p",null,"Use your favourite text editor and edit A.cpp. I use vim for this example"),Object(n.a)("pre",null,Object(n.a)("code",r({parentName:"pre"},{}),"vim A.cpp\n")),Object(n.a)("p",null,"After confident with your solution, you can use ./test.sh to check if your solution passes the sample test"),Object(n.a)("pre",null,Object(n.a)("code",r({parentName:"pre"},{}),"./test.sh\n")),Object(n.a)("p",null,"If it passes, you can submit with idne. The format is: idne ","[problem id][filename]"),Object(n.a)("pre",null,Object(n.a)("code",r({parentName:"pre"},{}),"idne 454A A.cpp\n")),Object(n.a)("h2",null,Object(n.a)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"credits"})),Object(n.a)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#credits"}),"#"),"Credits"),Object(n.a)("ul",null,Object(n.a)("li",{parentName:"ul"},Object(n.a)("a",r({parentName:"li"},{href:"https://github.com/johnathan79717/codeforces-parser"}),"Codeforces Parser"))))}p.isMDXComponent=!0}}]);
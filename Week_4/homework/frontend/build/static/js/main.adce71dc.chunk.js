(this["webpackJsonpto-do-complete"]=this["webpackJsonpto-do-complete"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var c=n(8),i=n(12),o=n.n(i),r=(n(20),n(0)),s=n(2),a=(n(21),n(1));function d(){return Object(a.jsx)("div",{className:"header-container",children:Object(a.jsx)("h1",{className:"title-text",children:"Tyler's Todo App"})})}var l=n(15);n(23);function u(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],i=function(e){e.preventDefault(),alert("Why won't this work?")};return Object(a.jsxs)(r.Fragment,{children:[Object(a.jsx)("h1",{children:"You have 3 tasks left to do"}),Object(a.jsx)("div",{id:"search-container",children:Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),alert("The task you created was: ".concat(n));var t=document.createElement("li"),c=document.createElement("form");c.setAttribute("onSubmit",{todoSubmit:i}),c.innerHTML=n;var o=document.createElement("input");o.setAttribute("type","submit"),o.setAttribute("value","\u2713"),o.setAttribute("id","todo-symbol"),c.appendChild(o),t.appendChild(c),document.getElementById("todoList").appendChild(t)},children:[Object(a.jsx)("label",{children:Object(a.jsx)("input",{type:"text",onChange:function(e){return c(e.target.value)},id:"input-box"})}),Object(a.jsx)("input",{type:"submit",value:"Done",id:"done-button"})]})}),Object(a.jsx)("h1",{children:"To Do"}),Object(a.jsx)("ul",{id:"todoList"}),Object(a.jsx)("h1",{children:"Done"})]})}function j(){return Object(a.jsxs)("div",{className:"global-container",children:[Object(a.jsx)(d,{}),Object(a.jsx)("div",{className:"content-container",children:Object(a.jsx)(s.c,{children:Object(a.jsx)(s.a,{exact:!0,path:"/",children:Object(a.jsx)(u,{})})})})]})}o.a.render(Object(a.jsxs)(c.a,{children:[Object(a.jsx)(j,{})," "]}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.adce71dc.chunk.js.map
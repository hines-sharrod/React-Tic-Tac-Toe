(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),i=n(6),l=n.n(i),u=(n(12),n.p,n(13),n(7)),o=n(3);function a(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var r=Object(o.a)(t[n],3),c=r[0],i=r[1],l=r[2];if(e[c]&&e[c]===e[i]&&e[c]===e[l])return e[c]}return null}console.log(a([null,null,null,"X","X","O",null,null,null]));var s=n(0),b={background:"lightblue",border:"2px solid darkblue",fontSize:"30px",fontWeight:"800",cursor:"pointer",outline:"none"},d=function(e){var t=e.onClick,n=e.value;return Object(s.jsx)("button",{style:b,onClick:t,children:n})},j={border:"4px solid darkblue",borderRadius:"10px",width:"245px",height:"245px",display:"grid",gridTemplate:"repeat(3, 1fr) / repeat(3, 1fr)"},f=function(e){var t=e.squares,n=e.onClick;return Object(s.jsx)("div",{style:j,children:t.map((function(e,t){return Object(s.jsx)(d,{value:e,onClick:function(){return n(t)}},t)}))})},h=function(){var e=Object(r.useState)(Array(9).fill(null)),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)(!0),l=Object(o.a)(i,2),b=l[0],d=l[1],j=a(n);return Object(s.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100vh"},children:[Object(s.jsx)(f,{squares:n,onClick:function(e){var t=Object(u.a)(n);j||t[e]||(t[e]=b?"X":"O",c(t),d(!b))}}),Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{children:j?"Winner: "+j:"Next Player: "+(b?"X":"O")}),Object(s.jsx)("button",{onClick:function(){return c(Array(9).fill(null))},children:"Start Game"})]})]})},p=function(){return Object(s.jsx)(h,{})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,l=t.getTTFB;n(e),r(e),c(e),i(e),l(e)}))};l.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(p,{})}),document.getElementById("root")),x()}},[[15,1,2]]]);
//# sourceMappingURL=main.2ba82e2e.chunk.js.map
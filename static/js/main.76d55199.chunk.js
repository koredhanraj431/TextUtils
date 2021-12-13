(this["webpackJsonpfirst-app"]=this["webpackJsonpfirst-app"]||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(4),l=a.n(c),o=(a(9),a(2)),r=(a(10),a(0));function i(e){return Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("nav",{id:"nav",className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)("a",{className:"navbar-brand text-primary",href:"#",children:e.title}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(r.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(r.jsx)("li",{className:"nav-item px-3",children:Object(r.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(r.jsx)("li",{className:"nav-item px-3",children:Object(r.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:e.about})})]}),Object(r.jsxs)("form",{className:"d-flex",children:[Object(r.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(r.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"}),Object(r.jsx)("span",{className:"btn text mx-3",id:"toggle-switch",onClick:e.toggleMode,title:"Enable Dark props.mode",children:Object(r.jsx)("i",{className:"fas fa-moon",id:"toggle-switch"})})]})]})]})})})}function b(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),s=a[0],c=a[1];return Object(r.jsxs)("div",{style:{backgroundColor:"light"===e.mode?"#f8f9fa":"#212529",color:"dark"===e.mode?"#f8f9fa":"#212529"},children:[Object(r.jsxs)("div",{className:"form-group mt-4",children:[Object(r.jsx)("h3",{className:"text-primary",children:e.heading}),Object(r.jsx)("textarea",{className:"form-control",id:"InputText",value:s,rows:"8",onChange:function(e){console.log("On change"),document.getElementById("previewText").style.display="block",c(e.target.value)}}),Object(r.jsx)("button",{type:"button",className:"btn btn-primary m-3",onClick:function(){console.log("Uppercase"),c(s.toUpperCase()),e.showAlert("Text has been converted to Uppercase","success")},children:"Convert to Uppercase"}),Object(r.jsx)("button",{type:"button",className:"btn btn-primary m-3",onClick:function(){console.log("Lowercase"),c(s.toLowerCase()),e.showAlert("Text has been converted to lowercase","success")},children:"Convert to Lowercase"}),Object(r.jsx)("button",{type:"button",className:"btn btn-primary m-3",onClick:function(){console.log("RemoveExtraSpaces");var t=s.split(/[ ]+/);c(t.join(" ")),e.showAlert("Extra spaces has been removed","success")},children:"Remove Extra Spaces"}),Object(r.jsx)("button",{type:"button",className:"btn btn-primary m-3",onClick:function(){console.log("CopyToClipboard");var t=document.getElementById("InputText");t.select(),t.setSelectionRange(0,9999),navigator.clipboard.writeText(t.value),e.showAlert("Text has been copied to clipboard","success")},children:"Copy to Clipboard"}),Object(r.jsx)("button",{type:"button",className:"btn btn-danger m-3",onClick:function(){console.log("Reset"),document.getElementById("previewText").style.display="none",c(""),e.showAlert("Text has been reset","success")},children:"Reset"})]}),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h4",{children:"Your text summary "}),Object(r.jsxs)("p",{children:["Total"," ",s.split(" ").filter((function(e){return 0!==e.length})).length," ","words, ",s.length," characters,"," ",s.length>0?s.split("\n").length:0," lines"]}),Object(r.jsxs)("p",{children:["Article is approximately"," ",.008*s.split(" ").filter((function(e){return 0!==e.length})).length," ","Minutes to read"]}),Object(r.jsx)("h4",{children:"Preview here "}),Object(r.jsx)("textarea",{className:"form-control",id:"previewText",value:s,rows:"8",readOnly:!0})]})]})}i.defaultProps={title:"TextUtils",about:"About"};var d=function(e){return Object(r.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(r.jsxs)("div",{className:"container mx-auto alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(r.jsx)("strong",{children:"Success "})," \xa0",e.alert.message]})})};var u=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(null),l=Object(o.a)(c,2),u=l[0],m=l[1],h=function(e,t){m({message:e,type:t}),setTimeout((function(){m(null)}),1500)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i,{title:"TextUtils",about:"About",mode:a,toggleMode:function(){"light"===a?(s("dark"),document.getElementById("toggle-switch").innerHTML='<i class="fas fa-moon text-light"></i>',document.getElementById("toggle-switch").title="Enable Light mode",document.body.style.backgroundColor="#212529",h("Dark mode has been Enabled","success")):(s("light"),document.getElementById("toggle-switch").innerHTML='<i class="fas fa-sun text-dark"></i>',document.getElementById("toggle-switch").title="Enable Dark mode",document.body.style.backgroundColor="#f8f9fa",h("Light mode has been Enabled","success"))}}),Object(r.jsx)(d,{alert:u}),Object(r.jsx)("div",{className:"container textarea",children:Object(r.jsx)(b,{heading:"Enter text to Analyze : ",mode:a,showAlert:h})})]})},m=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,l=t.getTTFB;a(e),n(e),s(e),c(e),l(e)}))};l.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(u,{})}),document.getElementById("root")),m()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.76d55199.chunk.js.map
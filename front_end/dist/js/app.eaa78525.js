(function(e){function t(t){for(var n,a,o=t[0],u=t[1],s=t[2],l=0,p=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);d&&d(t);while(p.length)p.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,a=1;a<r.length;a++){var o=r[a];0!==i[o]&&(n=!1)}n&&(c.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},a={app:0},i={app:0},c=[];function o(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-61e15a34":"286b0699"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={"chunk-61e15a34":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-61e15a34":"00af4692"}[e]+".css",i=u.p+n,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var s=c[o],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===n||l===i))return t()}var p=document.getElementsByTagName("style");for(o=0;o<p.length;o++){s=p[o],l=s.getAttribute("data-href");if(l===n||l===i)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||i,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete a[e],d.parentNode.removeChild(d),r(c)},d.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){a[e]=0})));var n=i[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,r){n=i[e]=[t,r]}));t.push(n[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=o(e);var p=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var r=i[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",p.name="ChunkLoadError",p.type=n,p.request=a,r[1](p)}i[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var d=l;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),a=(r("5363"),r("98c5"),r("afc9")),i=r("81c6"),c=r("0047"),o=Object(a["a"])({components:i,directives:c}),u={id:"nav"},s=Object(n["j"])("Home"),l=Object(n["j"])(" | "),p=Object(n["j"])("Change Users");function d(e,t,r,a,i,c){var o=Object(n["C"])("router-link"),d=Object(n["C"])("router-view"),h=Object(n["C"])("v-app");return Object(n["y"])(),Object(n["h"])(h,null,{default:Object(n["K"])((function(){return[Object(n["k"])("div",u,[Object(n["k"])(o,{to:"/"},{default:Object(n["K"])((function(){return[s]})),_:1}),l,Object(n["k"])(o,{to:"/handle"},{default:Object(n["K"])((function(){return[p]})),_:1})]),Object(n["k"])(d)]})),_:1})}var h={};r("d8c9");h.render=d;var b=h,f=r("1da1"),m=(r("96cf"),r("5502")),v=r("bc3a"),j=r.n(v),O=Object(m["a"])({state:{users:[]},actions:{createUser:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,j.a.post("https://test-bot-listener.herokuapp.com/api/handle-user",r);case 2:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}(),getAllUsers:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://test-bot-listener.herokuapp.com/api/handle-user");case 2:r=e.sent,t.commit("updateUsers",r.data);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),deleteUser:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,j.a.post("https://test-bot-listener.herokuapp.com/api/delete-user",r);case 2:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}(),updateUser:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,j.a.put("https://test-bot-listener.herokuapp.com/api/handle-user",r);case 2:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}()},mutations:{updateUsers:function(e,t){e.users=t}},getters:{users:function(e){return e.users}}}),g=(r("d3b7"),r("3ca3"),r("ddb0"),r("6c02")),k={class:"home"};function y(e,t,r,a,i,c){var o=Object(n["C"])("Main");return Object(n["y"])(),Object(n["h"])("div",k,[Object(n["k"])(o)])}var w={key:0,class:"error"},_=Object(n["k"])("h4",null,"you entered not right value",-1),E={class:"row inputs-wrapper"},x={class:"col s12"},C={class:"row"},M={class:"input-field col s12"},N=Object(n["k"])("label",{for:"first_name"},"user name",-1),P={class:"row"},S={class:"input-field col s12"},U=Object(n["k"])("label",{for:"email"},"email",-1),A={class:"row"},R={class:"input-field col s12"},T=Object(n["k"])("label",{for:"birth"},"date of birth",-1),B={class:"row"},z={class:"input-field col s12"},K=Object(n["k"])("label",{for:"phone"},"phone number",-1),I=Object(n["j"])(" create user ");function L(e,t,r,a,i,c){var o=Object(n["C"])("v-btn"),u=Object(n["C"])("v-container");return Object(n["y"])(),Object(n["h"])(u,null,{default:Object(n["K"])((function(){return[i.isError?(Object(n["y"])(),Object(n["h"])("div",w,[_])):Object(n["i"])("",!0),Object(n["k"])("div",E,[Object(n["k"])("form",x,[Object(n["k"])("div",C,[Object(n["k"])("div",M,[Object(n["k"])("input",{id:"first_name",placeholder:i.nameMessage,required:"",type:"text",class:"validate",onInput:t[1]||(t[1]=function(e){return c.validate(e,"name")})},null,40,["placeholder"]),N])]),Object(n["k"])("div",P,[Object(n["k"])("div",S,[Object(n["k"])("input",{id:"email",type:"email",class:"validate",onInput:t[2]||(t[2]=function(e){return c.validate(e,"email")})},null,32),U])]),Object(n["k"])("div",A,[Object(n["k"])("div",R,[Object(n["k"])("input",{id:"birth",type:"text",class:"validate",onInput:t[3]||(t[3]=function(e){return c.validate(e,"birth")})},null,32),T])]),Object(n["k"])("div",B,[Object(n["k"])("div",z,[Object(n["k"])("input",{id:"phone",type:"text",class:"validate",onInput:t[4]||(t[4]=function(e){return c.validate(e,"phone")})},null,32),K])])])]),Object(n["k"])(o,{flat:"",color:"secondary",disabled:i.disableBtn,onClick:t[5]||(t[5]=Object(n["M"])((function(e){return c.submit()}),["prevent"]))},{default:Object(n["K"])((function(){return[I]})),_:1},8,["disabled"])]})),_:1})}r("b0c0"),r("466d"),r("ac1f");var $={name:"Main",data:function(){return{name:"",email:"",birth:"",phoneNumber:"",isError:!1,disableBtn:!0,nameMessage:"",emptyString:""}},methods:{submit:function(){this.$store.dispatch("createUser",{name:this.name,email:this.email,birth:this.birth,phoneNumber:this.phoneNumber})},validate:function(e,t){switch(t){case"name":this.name=e.target.value.match(/^[-a-zA-Z]+$/)?e.target.value:"error","error"===this.name&&(this.nameMessage="user name is required"),this.clearError(this.name);break;case"email":this.email=e.target.value.match(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/)?e.target.value:"error",this.clearError(this.email);break;case"birth":this.birth=e.target.value.match(/^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/)?e.target.value:"error",this.clearError(this.birth);break;case"phone":this.phoneNumber=e.target.value.match(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/)?e.target.value:"error",this.clearError(this.phoneNumber);break}},clearError:function(e){var t=this;"error"===e||"error"===this.name?(this.isError=!0,setTimeout((function(){t.isError=!1}),2e3),this.disableBtn=!0):(this.disableBtn=!1,this.isError=!1)}}};r("8711");$.render=L;var q=$,H={name:"MainView",components:{Main:q}};H.render=y;var V=H,D=[{path:"/",name:"MainView",component:V},{path:"/handle",name:"HandleView",component:function(){return r.e("chunk-61e15a34").then(r.bind(null,"cbcc"))}}],J=Object(g["a"])({history:Object(g["b"])(),routes:D}),F=J,Z=Object(n["g"])(b);Z.use(o),Z.use(O),Z.use(F),Z.mount("#app")},"62ae":function(e,t,r){},8711:function(e,t,r){"use strict";r("ad91")},ad91:function(e,t,r){},d8c9:function(e,t,r){"use strict";r("62ae")}});
//# sourceMappingURL=app.eaa78525.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{558:function(e,t,n){e.exports={}},583:function(e,t,n){"use strict";n(558)},616:function(e,t,n){"use strict";n.r(t);var r=n(112),o=n(102),c=n(82),l=n(356),d=n(249),m=n(355),f=n(250),h=n(164),w=n(29),v=(n(91),{name:"LoginAuth",data:function(){return{loading:!1,username:"",password:"",showpass:!1,dialog:!0}},methods:{login:function(){var e=this;return Object(w.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.username.length<1||e.password.length<1)){t.next=3;break}return e.$store.commit("showSnack",{message:"Please fill in all fields",type:"warning",timeout:5e3}),t.abrupt("return");case 3:return e.loading=!0,n={username:e.username,password:e.password},t.prev=5,t.next=8,e.$axios.post("/app/accounts/login",n);case 8:if((r=t.sent).data.error){t.next=15;break}return localStorage.setItem("token",r.data.access_token),e.$auth.setUser(r.data.details),t.next=14,e.$auth.setUserToken(r.data.access_token,r.data.refresh_token);case 14:e.$router.push("/");case 15:t.next=21;break;case 17:t.prev=17,t.t0=t.catch(5),console.error(t.t0),e.$store.commit("showSnack",{message:"Login failed. Please check your credentials.",type:"error",timeout:5e3});case 21:e.loading=!1;case 22:case"end":return t.stop()}}),t,null,[[5,17]])})))()}}}),x=(n(583),n(162)),component=Object(x.a)(v,(function(){var e=this,t=e._self._c;return t("div",[t(d.a,{attrs:{width:"400",persistent:""},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t("form",{on:{submit:function(t){return t.preventDefault(),e.login.apply(null,arguments)}}},[t(o.a,{attrs:{loading:e.loading}},[t(c.d),e._v(" "),t(c.a,[t(m.a,{staticClass:"px-0 mx-0"},[t(l.a,{staticClass:"text-center d-flex justify-center py-0 px-0",attrs:{cols:"12"}},[t("img",{staticClass:"align-self-center",attrs:{src:"/logo.svg",width:"50",height:"50"}})]),e._v(" "),t(l.a,{staticClass:"text-center py-0 px-0",attrs:{cols:"12"}},[t("p",{staticClass:"text-caption",staticStyle:{"font-family":"Monospace !important"}},[e._v("$ logname ")])])],1)],1),e._v(" "),t(c.c,[t(h.a,{staticClass:"py-0",attrs:{placeholder:"Username","prepend-inner-icon":"mdi-account-circle",outlined:""},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),e._v(" "),t(h.a,{staticClass:"py-0",attrs:{placeholder:"Password","append-icon":e.showpass?"mdi-eye":"mdi-eye-off",type:e.showpass?"text":"password","prepend-inner-icon":"mdi-lock",outlined:"","hide-details":""},on:{"click:append":function(t){e.showpass=!e.showpass}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),e._v(" "),t(c.a,[t(f.a),e._v(" "),t(r.a,{attrs:{color:"primary",disabled:e.loading,type:"submit"}},[e._v("Login")]),e._v(" "),t(f.a)],1),e._v(" "),t(c.a,[t("p",{staticClass:"text-caption"},[t("NuxtLink",{staticClass:"ml-1 text-inherit",attrs:{to:"/register"}},[e._v("Register")])],1),e._v(" "),t(f.a),e._v(" "),t("p",{staticClass:"text-caption"},[t("NuxtLink",{staticClass:"ml-1 text-inherit",attrs:{to:"/forgot-password"}},[e._v("Forgot Password")])],1)],1)],1)],1)])],1)}),[],!1,null,"36e25bbd",null);t.default=component.exports}}]);
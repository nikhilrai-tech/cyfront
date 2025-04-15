(window.webpackJsonp=window.webpackJsonp||[]).push([[62,32],{554:function(t,e,n){t.exports={}},579:function(t,e,n){"use strict";n(554)},612:function(t,e,n){"use strict";n.r(e);var r=n(111),o=n(101),c=n(81),l=n(353),d=n(246),m=n(352),f=n(247),h=n(164),v=n(29),w=(n(91),{name:"LoginAuth",data:function(){return{loading:!1,username:"",password:"",showpass:!1,dialog:!0}},methods:{login:function(){var t=this;return Object(v.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.username.length<1||t.password.length<1)){e.next=3;break}return t.$store.commit("showSnack",{message:"Please fill in all fields",type:"warning",timeout:5e3}),e.abrupt("return");case 3:return t.loading=!0,n={username:t.username,password:t.password},e.prev=5,e.next=8,t.$axios.post("/app/accounts/login",n);case 8:if((r=e.sent).data.error){e.next=15;break}return localStorage.setItem("token",r.data.access_token),t.$auth.setUser(r.data.details),e.next=14,t.$auth.setUserToken(r.data.access_token,r.data.refresh_token);case 14:t.$router.push("/");case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(5),console.error(e.t0),t.$store.commit("showSnack",{message:"Login failed. Please check your credentials.",type:"error",timeout:5e3});case 21:t.loading=!1;case 22:case"end":return e.stop()}}),e,null,[[5,17]])})))()}}}),x=(n(579),n(162)),component=Object(x.a)(w,(function(){var t=this,e=t._self._c;return e("div",[e(d.a,{attrs:{width:"400",persistent:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e("form",{on:{submit:function(e){return e.preventDefault(),t.login.apply(null,arguments)}}},[e(o.a,{attrs:{loading:t.loading}},[e(c.d),t._v(" "),e(c.a,[e(m.a,{staticClass:"px-0 mx-0"},[e(l.a,{staticClass:"text-center d-flex justify-center py-0 px-0",attrs:{cols:"12"}},[e("img",{staticClass:"align-self-center",attrs:{src:"/logo.svg",width:"50",height:"50"}})]),t._v(" "),e(l.a,{staticClass:"text-center py-0 px-0",attrs:{cols:"12"}},[e("p",{staticClass:"text-caption",staticStyle:{"font-family":"Monospace !important"}},[t._v("$ logname ")])])],1)],1),t._v(" "),e(c.c,[e(h.a,{staticClass:"py-0",attrs:{placeholder:"Username","prepend-inner-icon":"mdi-account-circle",outlined:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),e(h.a,{staticClass:"py-0",attrs:{placeholder:"Password","append-icon":t.showpass?"mdi-eye":"mdi-eye-off",type:t.showpass?"text":"password","prepend-inner-icon":"mdi-lock",outlined:"","hide-details":""},on:{"click:append":function(e){t.showpass=!t.showpass}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),e(c.a,[e(f.a),t._v(" "),e(r.a,{attrs:{color:"primary",disabled:t.loading,type:"submit"}},[t._v("Login")]),t._v(" "),e(f.a)],1),t._v(" "),e(c.a,[e("p",{staticClass:"text-caption"},[e("NuxtLink",{staticClass:"ml-1 text-inherit",attrs:{to:"/register"}},[t._v("Register")])],1),t._v(" "),e(f.a),t._v(" "),e("p",{staticClass:"text-caption"},[e("NuxtLink",{staticClass:"ml-1 text-inherit",attrs:{to:"/forgot-password"}},[t._v("Forgot Password")])],1)],1)],1)],1)])],1)}),[],!1,null,"36e25bbd",null);e.default=component.exports},684:function(t,e,n){"use strict";n.r(e);var r=n(353),o=n(352),c={name:"LoginPage",components:{Login:n(612).default},layout:"auth",head:function(){return{title:"Login"}}},l=n(162),component=Object(l.a)(c,(function(){var t=this._self._c;return t(o.a,{staticClass:"my-4",attrs:{justify:"center",align:"center"}},[t(r.a,{attrs:{cols:"12",sm:"6",md:"3"}},[t("Login")],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);
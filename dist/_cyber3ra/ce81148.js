(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{712:function(e,t,n){"use strict";n.r(t);var r=n(112),o=n(102),l=n(82),c=n(357),d=n(356),v=n(249),m=n(355),f=n(250),h=n(164),w=(n(32),n(29)),x=(n(91),{name:"MainAuth",props:{mode:{type:String,default:"signup"},setlogin:{type:Function,default:function(){return console.log("no function provided")}},setsignup:{type:Function,default:function(){return console.log("no function provided")}},close:{type:Function,default:function(){return console.log("no function provided")}}},data:function(){return{loading:!1,dsignup:"signup"===this.mode,dlogin:"login"===this.mode,signupvars:{submitted:!1,username:"",name:"",email:"",password:"",referred:!1,refcode:""},loginvars:{username:"",password:"",loading:!1,showpass:!1}}},watch:{dsignup:function(e,t){e||this.close()},dlogin:function(e,t){e||this.close()},mode:function(e,t){this.dsignup="signup"===e,this.dlogin="login"===e}},methods:{signup:function(){var e=this;return Object(w.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.signupvars.username.length<1||e.signupvars.email.length<1||e.signupvars.name.length<1||e.signupvars.password.length<1)){t.next=3;break}return e.$store.commit("showSnack",{message:"Please add everything peoperly",type:"warning",timeout:5e3}),t.abrupt("return",0);case 3:return e.loading=!0,n={username:e.signupvars.username,name:e.signupvars.name,email:e.signupvars.email,password:e.signupvars.password},e.signupvars.referred&&(n.refcode=e.signupvars.refcode),t.prev=6,t.next=9,e.$axios.post("/app/accounts/signup",n);case 9:t.sent.data.error||(e.signupvars.submitted=!0),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(6),console.log("Error : ",t.t0);case 16:e.loading=!1;case 17:case"end":return t.stop()}}),t,null,[[6,13]])})))()},login:function(){var e=this;return Object(w.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.loginvars.username.length<1||e.loginvars.password.length<1)){t.next=3;break}return e.$store.commit("showSnack",{message:"Please add everything peoperly",type:"warning",timeout:5e3}),t.abrupt("return",0);case 3:return e.loginvars.loading=!0,n={username:e.loginvars.username,password:e.loginvars.password},t.prev=5,t.next=8,e.$axios.post("/app/accounts/login",n);case 8:if((r=t.sent).data.error){t.next=14;break}return e.$auth.setUser(r.data.details),t.next=13,e.$auth.setUserToken(r.data.access_token,r.data.refresh_token);case 13:e.close();case 14:t.next=19;break;case 16:t.prev=16,t.t0=t.catch(5),console.log(t.t0);case 19:e.loginvars.loading=!1;case 20:case"end":return t.stop()}}),t,null,[[5,16]])})))()}}}),_=n(162),component=Object(_.a)(x,(function(){var e=this,t=e._self._c;return t("div",[t(v.a,{attrs:{width:"400"},model:{value:e.dsignup,callback:function(t){e.dsignup=t},expression:"dsignup"}},[t("form",{on:{submit:function(t){return t.preventDefault(),e.signup.apply(null,arguments)}}},[t(o.a,{attrs:{loading:e.loading}},[t(l.d),e._v(" "),e.signupvars.submitted?e._e():t(l.a,[t(m.a,{staticClass:"px-0c mx-0"},[t(d.a,{staticClass:"text-center d-flex justify-center py-0 px-0c",attrs:{cols:"12"}},[t("img",{staticClass:"align-self-center",attrs:{src:"/logo.svg",width:"50",height:"50"}})]),e._v(" "),t(d.a,{staticClass:"text-center py-0 px-0c",attrs:{cols:"12"}},[t("p",{staticClass:"text-caption",staticStyle:{"font-family":"Monospace !important"}},[e._v("$ whoami ")])])],1)],1),e._v(" "),e.signupvars.submitted?t(l.c,[t("p",{staticClass:"text-body1"},[e._v("Account Signup Successful. An Email for activation has been sent to your registered Email. Follow the steps provided there.")])]):t(l.c,[t(h.a,{staticClass:"py-0",attrs:{placeholder:"Username","prepend-inner-icon":"mdi-account-circle",outlined:""},model:{value:e.signupvars.username,callback:function(t){e.$set(e.signupvars,"username",t)},expression:"signupvars.username"}}),e._v(" "),t(h.a,{staticClass:"py-0",attrs:{placeholder:"Email","prepend-inner-icon":"mdi-email",outlined:""},model:{value:e.signupvars.email,callback:function(t){e.$set(e.signupvars,"email",t)},expression:"signupvars.email"}}),e._v(" "),t(h.a,{staticClass:"py-0",attrs:{placeholder:"Full Name","prepend-inner-icon":"mdi-account",outlined:""},model:{value:e.signupvars.name,callback:function(t){e.$set(e.signupvars,"name",t)},expression:"signupvars.name"}}),e._v(" "),t(h.a,{staticClass:"py-0",attrs:{placeholder:"Password",type:"password","prepend-inner-icon":"mdi-lock",outlined:"","hide-details":""},model:{value:e.signupvars.password,callback:function(t){e.$set(e.signupvars,"password",t)},expression:"signupvars.password"}}),e._v(" "),t(c.a,{attrs:{label:"Have a Ref Code?"},model:{value:e.signupvars.referred,callback:function(t){e.$set(e.signupvars,"referred",t)},expression:"signupvars.referred"}}),e._v(" "),e.signupvars.referred?t(h.a,{staticClass:"py-0",attrs:{placeholder:"Reference Code",type:"password","prepend-inner-icon":"mdi-key",outlined:"","hide-details":""},model:{value:e.signupvars.refcode,callback:function(t){e.$set(e.signupvars,"refcode",t)},expression:"signupvars.refcode"}}):e._e()],1),e._v(" "),e.signupvars.submitted?e._e():t(l.a,[t(f.a),e._v(" "),t(r.a,{attrs:{color:"primary",disabled:e.loading,type:"submit"}},[e._v(" Signup ")]),e._v(" "),t(f.a)],1),e._v(" "),e.signupvars.submitted?t(l.a,[t(f.a),e._v(" "),t(r.a,{attrs:{color:"primary",to:"/login"}},[e._v(" Login ")]),e._v(" "),t(f.a)],1):e._e(),e._v(" "),e.signupvars.submitted?e._e():t(l.a,[t("small",{staticClass:"ml-1 point",staticStyle:{"font-size":"0.75rem",color:"#58a6ff"},on:{click:function(t){return e.setlogin()}}},[e._v("Login")]),e._v(" "),t(f.a),e._v(" "),t("p",{staticClass:"text-caption"},[t("NuxtLink",{staticClass:"ml-1 text-inherit",attrs:{router:"",to:"/forgot-password"}},[e._v("Forgot Password")])],1)],1)],1)],1)]),e._v(" "),t(v.a,{attrs:{width:"400"},model:{value:e.dlogin,callback:function(t){e.dlogin=t},expression:"dlogin"}},[t("form",{on:{submit:function(t){return t.preventDefault(),e.login.apply(null,arguments)}}},[t(o.a,{attrs:{loading:e.loginvars.loading}},[t(l.d),e._v(" "),t(l.a,[t(m.a,{staticClass:"px-0c mx-0"},[t(d.a,{staticClass:"text-center d-flex justify-center py-0 px-0c",attrs:{cols:"12"}},[t("img",{staticClass:"align-self-center",attrs:{src:"/logo.svg",width:"50",height:"50"}})]),e._v(" "),t(d.a,{staticClass:"text-center py-0 px-0c",attrs:{cols:"12"}},[t("p",{staticClass:"text-caption",staticStyle:{"font-family":"Monospace !important"}},[e._v("$ logname ")])])],1)],1),e._v(" "),t(l.c,[t(h.a,{staticClass:"py-0",attrs:{placeholder:"Username","prepend-inner-icon":"mdi-account-circle",outlined:""},model:{value:e.loginvars.username,callback:function(t){e.$set(e.loginvars,"username",t)},expression:"loginvars.username"}}),e._v(" "),t(h.a,{staticClass:"py-0",attrs:{placeholder:"Password","append-icon":e.loginvars.showpass?"mdi-eye":"mdi-eye-off",type:e.loginvars.showpass?"text":"password","prepend-inner-icon":"mdi-lock",outlined:"","hide-details":""},on:{"click:append":function(t){e.loginvars.showpass=!e.loginvars.showpass}},model:{value:e.loginvars.password,callback:function(t){e.$set(e.loginvars,"password",t)},expression:"loginvars.password"}})],1),e._v(" "),t(l.a,[t(f.a),e._v(" "),t(r.a,{attrs:{color:"primary",disabled:e.loginvars.loading,type:"submit"}},[e._v(" Login ")]),e._v(" "),t(f.a)],1),e._v(" "),t(l.a,[t("small",{staticClass:"ml-1 point",staticStyle:{"font-size":"0.75rem",color:"#58a6ff"},on:{click:function(t){return e.setsignup()}}},[e._v("Register")]),e._v(" "),t(f.a),e._v(" "),t("p",{staticClass:"text-caption"},[t("NuxtLink",{staticClass:"ml-1 text-inherit",attrs:{router:"",to:"/forgot-password"}},[e._v("Forgot Password")])],1)],1)],1)],1)])],1)}),[],!1,null,null,null);t.default=component.exports}}]);
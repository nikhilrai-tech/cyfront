(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{552:function(t,e,r){"use strict";r.r(e);var l=r(112),c=r(102),o=r(82),n=r(526),_=r(111),v=r(575),d=r(594),m=r(502),f=r(534),C=r(250),h=(r(32),{name:"UserProfile",props:{user:{type:Object,default:function(){return{name:"",photo:null,username:"",bio:""}}}},data:function(){return{loading:!0,bio:null,reputation:null}}}),x=r(162),component=Object(x.a)(h,(function(){var t=this,e=t._self._c;return e(f.a,{attrs:{"open-on-hover":"","close-on-content-click":!1,"nudge-width":200,"offset-xc":"","offset-y":"",top:"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(r){var l=r.on,c=r.attrs;return[e("span",t._g(t._b({staticClass:"menu-target"},"span",c,!1),l),[t._t("default")],2)]}}],null,!0)},[t._v(" "),e(c.a,{attrs:{width:"350"}},[e(v.a,{attrs:{"three-line":""}},[e(d.a,{attrs:{size:"45"}},[t.user.photo?e("img",{attrs:{src:t.$axios.defaults.baseURL+t.user.photo,alt:t.user.name?t.user.name:t.user.username}}):e(_.a,{attrs:{"x-large":""}},[t._v(" mdi-account-circle ")])],1),t._v(" "),e(m.b,[e(m.d,{staticClass:"pb-1c"},[t._v(t._s(t.user.name?t.user.name:t.user.username))]),t._v(" "),e(m.c,{staticClass:"mt-n1"},[t._v("@"+t._s(t.user.username))])],1)],1),t._v(" "),e(n.a),t._v(" "),e(o.c,[t.user.bio?t._e():e("em",[t._v(t._s(t.user.bio?t.user.bio:"No Bio"))])]),t._v(" "),e(o.a,[e(C.a),t._v(" "),e(l.a,{attrs:{color:"primary",text:"",router:"",to:"/u/?".concat(t.user.username),small:""}},[t._v(" View Profile ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},601:function(t,e,r){t.exports={}},649:function(t,e,r){"use strict";r(601)},686:function(t,e,r){"use strict";r.r(e);var l=r(578),c=r(112),o=r(102),n=r(82),_=r(544),v=r(356),d=r(526),m=r(111),f=r(575),C=r(594),h=r(502),x=r(577),y=r(236),w=r(355),k=r(595),R=r(250),U=r(713),S=(r(32),r(29)),z=(r(91),{name:"LeaderBoardsPage",components:{User:r(552).default},asyncData:function(t){return Object(S.a)(regeneratorRuntime.mark((function e(){var r,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.store,r=t.$axios,l=t.app,e.prev=1,e.next=4,r.get("/app/accounts/repusers",{headers:{Authorization:l.$auth.strategy.token.get()}});case 4:return c=e.sent,e.abrupt("return",{users:c.data});case 8:return e.prev=8,e.t0=e.catch(1),console.log(e.t0),e.abrupt("return",{users:[]});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))()},data:function(){return{awards:{completion:35,earned:6},names:[{name:"vivek",rep:"13"},{name:"yash",rep:"12"},{name:"vighnesh",rep:"9"},{name:"ashish",rep:"6"},{name:"adarsh",rep:"5"}],users:this.users}},head:function(){return{title:"Leaderboards"}}}),$=(r(649),r(162)),component=Object($.a)(z,(function(){var t=this,e=t._self._c;return e("div",[e(w.a,[e(v.a,{staticClass:"text-centerc",attrs:{cols:"12",sm:"3"}},[e(o.a,{staticStyle:{border:"1px solid #4c98ef"}},[e(n.d,{staticClass:"pb-0",staticStyle:{color:"#4c98ef"}},[t._v("#2")]),t._v(" "),e(f.a,{attrs:{"three-line":""}},[e(C.a,{attrs:{size:"45"}},[t.users.total[1].photo?e("img",{attrs:{src:t.$axios.defaults.baseURL+t.users.total[1].photo,alt:t.users.total[1].name}}):e(m.a,{attrs:{color:"#4c98ef","x-large":"",dark:""}},[t._v(" mdi-account-circle ")])],1),t._v(" "),e(h.b,[e(h.d,{staticClass:"mb-4c",staticStyle:{color:"#4c98ef"}},[t._v(t._s(t.users.total[1].name?t.users.total[1].name:t.users.total[1].username))]),t._v(" "),e(h.c,{staticClass:"mb-4c",staticStyle:{color:"#4c98ef"}},[t._v("@"+t._s(t.users.total[1].username))])],1),t._v(" "),e(x.a,{staticClass:"d-flex align-center",staticStyle:{"font-size":"25px",color:"#4c98ef"}},[t._v(t._s(t.users.total[1].totalreputation))])],1),t._v(" "),e(d.a),t._v(" "),e(f.a,{staticClass:"py-2",attrs:{"three-line":""}},[e(R.a),t._v(" "),e(_.a,{attrs:{color:"#4c98ef"}},[t._v("Elite")])],1)],1)],1),t._v(" "),e(v.a,{staticClass:"text-centerc",attrs:{cols:"12",sm:"3"}},[e(o.a,{style:"border: 2px solid ".concat(t.$vuetify.theme.dark?"#4c98ef":"rgb(151 188 231"),attrs:{color:t.$vuetify.theme.dark?"#4c98ef":"rgb(192 221 255)"}},[e(n.d,{staticClass:"pb-0"},[t._v("#1")]),t._v(" "),e(f.a,{attrs:{"three-line":""}},[e(C.a,{attrs:{size:"45"}},[t.users.total[0].photo?e("img",{attrs:{src:t.$axios.defaults.baseURL+t.users.total[0].photo,alt:t.users.total[0].name}}):e(m.a,{attrs:{"x-large":"",dark:""}},[t._v(" mdi-account-circle ")])],1),t._v(" "),e(h.b,[e(h.d,{staticClass:"mb-4c"},[t._v(t._s(t.users.total[0].name?t.users.total[0].name:t.users.total[0].username))]),t._v(" "),e(h.c,{staticClass:"mb-4c"},[t._v("@"+t._s(t.users.total[0].username))])],1),t._v(" "),e(x.a,{staticClass:"d-flex align-center",staticStyle:{"font-size":"25px"}},[t._v(t._s(t.users.total[0].totalreputation))])],1),t._v(" "),e(d.a),t._v(" "),e(f.a,{staticClass:"py-2",attrs:{"three-line":""}},[e(R.a),t._v(" "),e(_.a,{attrs:{outlined:"",color:"white"}},[t._v("Master")])],1)],1)],1),t._v(" "),e(v.a,{staticClass:"text-centerc",attrs:{cols:"12",sm:"3"}},[e(o.a,{staticStyle:{border:"1px solid #8361da"}},[e(n.d,{staticClass:"pb-0",staticStyle:{color:"#8361da"}},[t._v("#3")]),t._v(" "),e(f.a,{attrs:{"three-line":""}},[e(C.a,{attrs:{size:"45"}},[t.users.total[2].photo?e("img",{attrs:{src:t.$axios.defaults.baseURL+t.users.total[2].photo,alt:t.users.total[2].name}}):e(m.a,{attrs:{color:"#8361da","x-large":"",dark:""}},[t._v(" mdi-account-circle ")])],1),t._v(" "),e(h.b,[e(h.d,{staticClass:"mb-4c",staticStyle:{color:"#8361da"}},[t._v(t._s(t.users.total[2].name?t.users.total[2].name:t.users.total[2].username))]),t._v(" "),e(h.c,{staticClass:"mb-4c",staticStyle:{color:"#8361da"}},[t._v("@"+t._s(t.users.total[2].username))])],1),t._v(" "),e(x.a,{staticClass:"d-flex align-center",staticStyle:{"font-size":"25px",color:"#8361da"}},[t._v(t._s(t.users.total[2].totalreputation))])],1),t._v(" "),e(d.a),t._v(" "),e(f.a,{staticClass:"py-2",attrs:{"three-line":""}},[e(R.a),t._v(" "),e(_.a,{attrs:{color:"#8361da"}},[t._v("Master")])],1)],1)],1),t._v(" "),e(v.a,{staticClass:"text-right",attrs:{cols:"12",sm:"3"}},[e(o.a,{staticClass:"pb-4",attrs:{flat:""}},[e(n.b,{staticClass:"pb-1"},[t._v("Total Competitors")]),t._v(" "),e(n.d,{staticClass:"mb-3c justify-end",staticStyle:{"font-size":"55px"}},[t._v(t._s(t.users.comps))]),t._v(" "),e(n.c,[e("small",{staticStyle:{color:"red"}},[t._v("You can only compete in leaderboards if you verified your email")])])],1)],1),t._v(" "),e(v.a,{staticClass:"text-centerc",attrs:{cols:"12",sm:"6"}},[e(o.a,[e(n.d,{staticClass:"mb-3c justify-space-between"},[e("p",{staticClass:"mb-0"},[t._v("Highest Reputation")]),t._v(" "),e(c.a,{staticClass:"align-self-end",attrs:{text:""}},[t._v("View All")])],1),t._v(" "),e(k.a,{staticClass:"hovertrans"},[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[t._v("Rank")]),t._v(" "),e("th",{staticClass:"text-left"},[t._v("User")]),t._v(" "),e("th",{staticClass:"text-left"},[t._v("Reputation")]),t._v(" "),e("th",{staticClass:"text-left"},[t._v("Profile")])])]),t._v(" "),e("tbody",t._l(t.users.total,(function(r,i){return e("tr",{key:r.username},[e("td",[t._v(t._s(i+1))]),t._v(" "),e("td",[e("User",{attrs:{user:r}},[e("div",[e("nuxt-link",{staticStyle:{color:"inherit"},attrs:{to:"/u/?".concat(r.username)}},[e("div",{staticClass:"d-inline-flex align-center point hover-trans"},[e(l.a,{staticClass:"mr-2 mt-n2c",attrs:{size:"25"}},[r.photo?e("img",{attrs:{alt:r.name,src:t.$axios.defaults.baseURL+r.photo}}):e(m.a,[t._v(" mdi-account-circle ")])],1),t._v(" "),e(h.b,{staticClass:"d-inline-block"},[t._v("\n                                        "+t._s(r.name?r.name:r.username)+"\n                                    ")])],1)])],1)])],1),t._v(" "),e("td",[t._v(t._s(r.totalreputation))]),t._v(" "),e("td",[e(c.a,{attrs:{small:"",text:"",color:"secondary",router:"",to:"/u/?".concat(r.username)}},[t._v("View")])],1)])})),0)])],1)],1),t._v(" "),e(v.a,{staticClass:"text-centerc",attrs:{cols:"12",sm:"3"}},[e(w.a,[e(v.a,{staticClass:"text-centerc",attrs:{cols:"12"}},[e(o.a,[e(f.a,{attrs:{"three-line":""}},[e(h.b,{staticClass:"pb-5"},[e(h.d,{staticClass:"mb-4"},[t._v("Your Rank")]),t._v(" "),e(y.a,{attrs:{value:(t.users.comps-t.users.rank+1)/t.users.comps*100,color:"primary"}})],1),t._v(" "),e(x.a,[t._v(t._s(t.users.rank))])],1),t._v(" "),e(d.a),t._v(" "),e(n.a,[e(c.a,{attrs:{rounded:"",text:"",small:"",color:"primary",router:"",to:"/jobs"}},[t._v("View Inbox")]),t._v(" "),e(R.a),t._v(" "),e(c.a,{attrs:{rounded:"",text:"",small:"",color:"primary",router:"",to:"/jobs"}},[t._v("View Programs")])],1)],1)],1),t._v(" "),e(v.a,{staticClass:"text-centerc",attrs:{cols:"12"}},[e(o.a,[e(f.a,{attrs:{"three-line":""}},[e(h.b,{staticClass:"pb-5"},[e(h.d,{staticClass:"mb-4"},[t._v("Your Reputation")]),t._v(" "),e(y.a,{attrs:{value:10*t.awards.earned,color:"warning"}})],1),t._v(" "),e(x.a,[t._v(t._s(t.users.reputation))])],1)],1)],1),t._v(" "),e(v.a,{staticClass:"text-centerc",attrs:{cols:"12"}},[e(o.a,[e(f.a,{attrs:{"three-line":""}},[e(h.b,{staticClass:"pb-5"},[e(h.c,{staticClass:"mb-2"},[t._v("Current Badge")]),t._v(" "),e(h.d,{staticClass:"mb-5"},[t._v("Novice")]),t._v(" "),e(y.a,{attrs:{value:10*t.awards.earned,color:"info"}})],1),t._v(" "),e(x.a,[e(m.a,{attrs:{"x-large":""}},[t._v("mdi-seal-variant")])],1)],1)],1)],1),t._v(" "),e(v.a,{staticClass:"text-centerc",attrs:{cols:"12"}},[e(o.a,[e(f.a,{attrs:{"three-line":""}},[e(h.b,{staticClass:"pb-5"},[e(h.c,{staticClass:"mb-2"},[t._v("Overview")]),t._v(" "),e(h.d,{staticClass:"mb-5"},[t._v("Novice")])],1)],1),t._v(" "),e(U.a,{attrs:{"line-width":.6,padding:13,value:[0,2,5,9,5,10,3,5,0,0,1,8,2,9,0],"auto-draw":""}})],1)],1)],1)],1),t._v(" "),e(v.a,{staticClass:"text-centerc",attrs:{cols:"12",sm:"3"}},[e(o.a,{staticClass:"d-flexc"},[e(n.d,{staticClass:"mb-3c justify-space-between"},[e("p",{staticClass:"mb-0"},[t._v("Top Programs")]),t._v(" "),e(c.a,{staticClass:"align-self-end",attrs:{text:""}},[t._v("View All")])],1),t._v(" "),e(k.a,{staticClass:"hovertrans"},[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[t._v("Company")]),t._v(" "),e("th",{staticClass:"text-left"},[t._v("Type")]),t._v(" "),e("th",{staticClass:"text-left"},[t._v("Details")])])]),t._v(" "),e("tbody",t._l(t.users.programs,(function(r){return e("tr",{key:r.title},[e("td",[e("User",{attrs:{user:r.posted_by}},[e("div",[e("nuxt-link",{staticStyle:{color:"inherit"},attrs:{to:"/u/?".concat(r.posted_by.username)}},[e("div",{staticClass:"d-inline-flex align-center point hover-trans"},[e(l.a,{staticClass:"mr-2 mt-n2c",attrs:{size:"25"}},[r.posted_by.photo?e("img",{attrs:{alt:r.posted_by.name,src:t.$axios.defaults.baseURL+r.posted_by.photo}}):e(m.a,[t._v(" mdi-account-circle ")])],1),t._v(" "),e(h.b,{staticClass:"d-inline-block"},[t._v("\n                                        "+t._s(r.posted_by.name?r.posted_by.name:r.posted_by.username)+"\n                                    ")])],1)])],1)])],1),t._v(" "),e("td",[t._v(t._s(r.type))]),t._v(" "),e("td",[e(c.a,{attrs:{small:"",depressed:"",color:"primary",to:"/p/?"+r.title}},[t._v("View")])],1)])})),0)])],1)],1),t._v(" "),e(v.a,{staticClass:"text-centerc",attrs:{cols:"12",sm:"3"}},[e(o.a,{staticClass:"d-flexc"},[e(n.d,{staticClass:"mb-3c justify-space-between"},[e("p",{staticClass:"mb-0"},[t._v("Referral Based")]),t._v(" "),e(c.a,{staticClass:"align-self-end",attrs:{text:""}},[t._v("View All")])],1),t._v(" "),e(k.a,{staticClass:"hovertrans"},[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[t._v("Rank")]),t._v(" "),e("th",{staticClass:"text-left"},[t._v("User")]),t._v(" "),e("th",{staticClass:"text-left"},[t._v("Referred")])])]),t._v(" "),e("tbody",t._l(t.users.referral,(function(r,i){return e("tr",{key:r.username},[e("td",[t._v(t._s(i+1))]),t._v(" "),e("td",[e(l.a,{staticClass:"mr-2",attrs:{size:"25"}},[r.photo?e("img",{attrs:{alt:r.name,src:t.$axios.defaults.baseURL+r.photo}}):e(m.a,[t._v(" mdi-account-circle ")])],1),t._v("\n                          "+t._s(r.name?r.name:r.username)+"\n                      ")],1),t._v(" "),e("td",[t._v(t._s(r.refreputation))])])})),0)])],1)],1),t._v(" "),e(v.a,{staticClass:"text-centerc",attrs:{cols:"12",sm:"3"}},[e(o.a,{staticClass:"d-flexc"},[e(n.d,{staticClass:"mb-3c justify-space-between"},[e("p",{staticClass:"mb-0"},[t._v("Upvotes")]),t._v(" "),e(c.a,{staticClass:"align-self-end",attrs:{text:""}},[t._v("View All")])],1),t._v(" "),e(k.a,{staticClass:"hovertrans"},[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[t._v("Rank")]),t._v(" "),e("th",{staticClass:"text-left"},[t._v("User")]),t._v(" "),e("th",{staticClass:"text-left"},[t._v("Upvotes")])])]),t._v(" "),e("tbody",t._l(t.users.upvotes,(function(r,i){return e("tr",{key:r.username},[e("td",[t._v(t._s(i+1))]),t._v(" "),e("td",[e(l.a,{staticClass:"mr-2",attrs:{size:"25"}},[r.photo?e("img",{attrs:{alt:r.name,src:t.$axios.defaults.baseURL+r.photo}}):e(m.a,[t._v(" mdi-account-circle ")])],1),t._v("\n                          "+t._s(r.name?r.name:r.username)+"\n                      ")],1),t._v(" "),e("td",[t._v(t._s(r.upvotereputation))])])})),0)])],1)],1)],1)],1)}),[],!1,null,"87e94cc2",null);e.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[8,23,35],{514:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var o=r(113),n=r(9);function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(n.a)(Object(o.b)(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var i=0,t=e.length;i<t;i++)this.$watch(e[i],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){(arguments.length>0&&void 0!==arguments[0]&&arguments[0]||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},526:function(t,e,r){t.exports={}},532:function(t,e,r){t.exports={}},542:function(t,e,r){"use strict";r(526)},544:function(t,e,r){"use strict";r.r(e);var o=r(111),n=r(101),l=r(81),c=r(353),d=r(110),h=r(589),v=r(571),f=r(590),m=r(499),_=r(573),S=r(530),w=r(352),y=r(247),x=r(563),O=r(564),C=r(73),j=(r(36),{name:"FavouriteComponent",props:{type:{type:String,default:function(){return"P"}},awards:{type:Array,default:function(){return[]}}},data:function(){return{loading:!1,awardobj:[{index:0,title:"Initiator I",mission:"Signup to Cyber3ra",shine:!0,color:"cyan"},{index:1,title:"Initiator II",mission:"Verify your Email",shine:!0,color:"cyan"},{index:2,title:"Initiator III",mission:"Participate in Cyber3ra Leaderboards",shine:!0,color:"info"},{index:3,title:"Dutiful",mission:"Complete your Profile",shine:!0,color:"cyan"},{index:4,title:"Artuist",mission:"Like 5 People",shine:!0,color:"cyan"},{index:5,title:"Generous",mission:"Earn 2 Upvotes",shine:!0,color:"#1056d9"},{index:6,title:"Duteous",mission:"Add a Report",shine:!0,color:"cyan"},{index:7,title:"People Person",mission:"Refer 1 User",shine:!0,color:"cyan"},{index:8,title:"Charming",mission:"Earn 5 Likes",shine:!0,color:"cyan"},{index:9,title:"Wise",mission:"Earn 5 Upvotes",shine:!0,color:"cyan"},{index:10,title:"Grateful",mission:"Earn 1 Thanks",shine:!0,color:"cyan"},{index:11,title:"Successful",mission:"Add a Successful Report",shine:!0,color:"cyan"},{index:12,title:"Socializer",mission:"Refer 5 Friends",shine:!0,color:"cyan"},{index:13,title:"Obliged",mission:"Earn 5 Thanks",shine:!0,color:"cyan"},{index:14,title:"Charismatic",mission:"Earn 25 Likes",shine:!0,color:"cyan"},{index:15,title:"Adventurer",mission:"Participate in Private Bug Bounty Platform",shine:!0,color:"cyan"},{index:16,title:"Victorious",mission:"Add a Successful Report 5 Times",shine:!0,color:"cyan"},{index:17,title:"Elite Hack",mission:"Earn 100 Likes",shine:!0,color:"cyan"},{index:18,title:"Crackerjack",mission:"Earn 200 Likes",shine:!0,color:"cyan"},{index:19,title:"Technocrat",mission:"Earn 250 Likes",shine:!0,color:"cyan"}]}},methods:{share:function(i,t){window&&(0===t?window.open(window.innerWidth>560?"https://web.whatsapp.com/send?text=I+won+a+new+award":"https://api.whatsapp.com/send?text=I won a new award"):1===t?window.open("https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=&su=New Award&body=I won an Award&ui=2&tf=1&pli=1","sharer","toolbar=0,status=0,width=648,height=395"):2===t?window.open("https://twitter.com/intent/tweet?text=I won a new Award&url=https://cyber3ra.com&hashtags=cyber3ra,bugbounty,bountyhunters"):window.open("https://www.facebook.com/sharer/sharer.php?u=https://cyber3ra.com&quote=I won a new Award","facebook-share-dialog","width=626,height=436"))}}}),k=(r(542),r(162)),component=Object(k.a)(j,(function(){var t=this,e=t._self._c;return e(w.a,["P"==t.type?e("div",t._l(t.awards,(function(r,i){return e(v.a,{key:i},[e(f.a,[e(d.a,[t._v(" mdi-trophy ")])],1),t._v(" "),e(m.b,[e(m.d,[t._v(t._s(t.awardobj[r].title))]),t._v(" "),e(m.c,[t._v(t._s(t.awardobj[r].mission))])],1)],1)})),1):"T"==t.type?e(c.a,{attrs:{cols:"12"}},[e("div",{staticClass:"font-weight-bold ml-8 mb-2"},[t._v("Active")]),t._v(" "),e(x.a,{attrs:{"align-top":"",dense:""}},[e(O.a,{attrs:{color:"success",disabled:"",small:""}},[e("div",[e("div",{staticClass:"font-weight-normal"},[e("strong",[t._v(t._s(t.awardobj[Math.max.apply(Math,Object(C.a)(t.awards))].title))])]),t._v(" "),e("div",[t._v("Completed")])])]),t._v(" "),e(O.a,{attrs:{color:"warning",small:""}},[e("div",[e("div",{staticClass:"font-weight-normal"},[e("strong",[t._v(t._s(t.awardobj[Math.max.apply(Math,Object(C.a)(t.awards))+1].title))])]),t._v(" "),e("div",[t._v("In Progress")])])]),t._v(" "),e(O.a,{attrs:{color:"error",small:""}},[e("div",[e("div",{staticClass:"font-weight-normal"},[e("strong",[t._v(t._s(t.awardobj[Math.max.apply(Math,Object(C.a)(t.awards))+2].title))])]),t._v(" "),e("div",[t._v("Yet To Complete")])])])],1)],1):"D"==t.type?t._l(t.awards,(function(r,i){return e(c.a,{key:i,staticClass:"text-centerc",attrs:{cols:"12",sm:"4"}},[e("div",{staticClass:"overflow-hidden"},[e(n.a,{class:"".concat(t.awardobj[r].shine?"shine":""),attrs:{color:"".concat(t.awardobj[r].color||"#6A1B9A")}},[e(v.a,{attrs:{"three-line":""}},[e(f.a,[t.$auth.user.profile?e("img",{attrs:{src:t.$auth.user.profile,alt:t.$auth.user.name}}):e(d.a,{attrs:{dark:""}},[t._v(" mdi-account-circle ")])],1),t._v(" "),e(m.b,[e(m.d,{staticClass:"mb-4c"},[t._v(t._s(t.$auth.user.name))])],1)],1),t._v(" "),e(v.a,{attrs:{"three-line":""}},[e(m.b,[e(m.d,{staticClass:"mb-4c"},[t._v(t._s(t.awardobj[r].title))]),t._v(" "),e(m.c,[t._v(t._s(t.awardobj[r].mission))])],1)],1),t._v(" "),e(l.a,[e(y.a),t._v(" "),e(S.a,{attrs:{bottom:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(r){var n=r.on,l=r.attrs;return[e(o.a,t._g(t._b({staticStyle:{"z-index":"4"},attrs:{rounded:"",icon:""}},"v-btn",l,!1),n),[e(d.a,[t._v("mdi-share-variant")])],1)]}}],null,!0)},[t._v(" "),e(h.a,[e(v.a,{key:1,attrs:{dense:""},on:{click:function(e){return t.share(r,0)}}},[e(_.a,{staticStyle:{"min-width":"0px"}},[e(d.a,{attrs:{small:""}},[t._v("mdi-whatsapp")])],1),t._v(" "),e(m.d,[t._v("Whatsapp")])],1),t._v(" "),e(v.a,{key:2,attrs:{dense:""},on:{click:function(e){return t.share(r,1)}}},[e(_.a,{staticStyle:{"min-width":"0px"}},[e(d.a,{attrs:{small:""}},[t._v("mdi-gmail")])],1),t._v(" "),e(m.d,[t._v("Gmail")])],1),t._v(" "),e(v.a,{key:3,attrs:{dense:""},on:{click:function(e){return t.share(r,2)}}},[e(_.a,{staticStyle:{"min-width":"0px"}},[e(d.a,{attrs:{small:""}},[t._v("mdi-twitter")])],1),t._v(" "),e(m.d,[t._v("Twitter")])],1),t._v(" "),e(v.a,{key:4,attrs:{dense:""},on:{click:function(e){return t.share(r,3)}}},[e(_.a,{staticStyle:{"min-width":"0px"}},[e(d.a,{attrs:{small:""}},[t._v("mdi-facebook")])],1),t._v(" "),e(m.d,[t._v("Facebook")])],1)],1)],1)],1)],1)],1)])})):e("div")],2)}),[],!1,null,"e7930d0c",null);e.default=component.exports},545:function(t,e,r){"use strict";r.r(e);var o={extends:r(535).b,props:{chartdata:{type:Object,default:function(){return{labels:["Aug","Sep","Oct"],datasets:[]}}}},mounted:function(){this.renderChart(this.chartdata,{global:{defaultFont:"Rajdhani"},responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{display:0,gridLines:{zeroLineColor:"transparent",drawTicks:!1,display:!1,drawBorder:!1}}],xAxes:[{ticks:{fontFamily:"Rajdhani"},gridLines:{zeroLineColor:"transparent",drawTicks:!1,display:!1,drawBorder:!1}}]},layout:{padding:15},plugins:{title:{display:!0,text:"Reports"},legend:{}}})}},n=r(162),component=Object(n.a)(o,undefined,undefined,!1,null,null,null);e.default=component.exports},547:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var o=r(355),n=r(2),l=Object(n.i)("v-toolbar__title"),c=Object(n.i)("v-toolbar__items");o.a},567:function(t,e,r){"use strict";r(14),r(18),r(20),r(21),r(16),r(7),r(15);var o=r(4),n=(r(25),r(251),r(532),r(355)),l=r(19);var c={inserted:function(t,e,r){var o=(e.modifiers||{}).self,n=void 0!==o&&o,c=e.value,d="object"===Object(l.a)(c)&&c.options||{passive:!0},h="function"==typeof c||"handleEvent"in c?c:c.handler,v=n?t:e.arg?document.querySelector(e.arg):window;v&&(v.addEventListener("scroll",h,d),t._onScroll=Object(t._onScroll),t._onScroll[r.context._uid]={handler:h,options:d,target:n?void 0:v})},unbind:function(t,e,r){var o;if(null===(o=t._onScroll)||void 0===o?void 0:o[r.context._uid]){var n=t._onScroll[r.context._uid],l=n.handler,c=n.options,d=n.target;(void 0===d?t:d).removeEventListener("scroll",l,c),delete t._onScroll[r.context._uid]}}},d=c,h=r(514),v=r(12),f=r(3).a.extend({name:"scrollable",directives:{Scroll:c},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:function(){return{currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}},computed:{canScroll:function(){return"undefined"!=typeof window},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp:function(){this.savedScroll=this.savedScroll||this.currentScroll},isActive:function(){this.savedScroll=0}},mounted:function(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(v.c)("Unable to locate element with identifier ".concat(this.scrollTarget),this))},methods:{onScroll:function(){var t=this;this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((function(){Math.abs(t.currentScroll-t.savedScroll)>t.computedScrollThreshold&&t.thresholdMet()})))},thresholdMet:function(){}}}),m=r(250),_=r(112),S=r(2),w=r(9);function y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function x(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?y(Object(r),!0).forEach((function(e){Object(o.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var O=Object(w.a)(n.a,f,m.a,_.a,Object(h.a)("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));e.a=O.extend({name:"v-app-bar",directives:{Scroll:d},provide:function(){return{VAppBar:this}},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data:function(){return{isActive:this.value}},computed:{applicationProperty:function(){return this.bottom?"bottom":"top"},canScroll:function(){return f.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes:function(){return x(x({},n.a.options.computed.classes.call(this)),{},{"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll})},scrollRatio:function(){var t=this.computedScrollThreshold;return Math.max((t-this.currentScroll)/t,0)},computedContentHeight:function(){if(!this.shrinkOnScroll)return n.a.options.computed.computedContentHeight.call(this);var t=this.dense?48:56;return t+(this.computedOriginalHeight-t)*this.scrollRatio},computedFontSize:function(){if(this.isProminent){return 1.25+.25*this.scrollRatio}},computedLeft:function(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop:function(){return this.app?this.$vuetify.application.bar:0},computedOpacity:function(){if(this.fadeImgOnScroll)return this.scrollRatio},computedOriginalHeight:function(){var t=n.a.options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight:function(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform:function(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;var t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow:function(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed:function(){return this.collapseOnScroll?this.currentScroll>0:n.a.options.computed.isCollapsed.call(this)},isProminent:function(){return n.a.options.computed.isProminent.call(this)||this.shrinkOnScroll},styles:function(){return x(x({},n.a.options.computed.styles.call(this)),{},{fontSize:Object(S.h)(this.computedFontSize,"rem"),marginTop:Object(S.h)(this.computedMarginTop),transform:"translateY(".concat(Object(S.h)(this.computedTransform),")"),left:Object(S.h)(this.computedLeft),right:Object(S.h)(this.computedRight)})}},watch:{canScroll:"onScroll",computedTransform:function(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll:function(t){this.isActive=!t||0!==this.currentScroll},hideOnScroll:function(t){this.isActive=!t||this.currentScroll<this.computedScrollThreshold}},created:function(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground:function(){var t=n.a.options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication:function(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet:function(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render:function(t){var e=n.a.options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}})},664:function(t,e,r){"use strict";r.r(e);var o=r(567),n=r(574),l=r(111),c=r(101),d=r(81),h=r(353),v=r(110),f=r(234),m=r(499),_=r(352),S=r(247),w=r(547),y=(r(36),r(72),r(544)),x={name:"UserCharts",components:{LineChart:r(545).default,Awards:y.default},props:{count:{type:Object,default:function(){return{referred:0,visits:0,reputation:0,likes:0}}},awards:{type:Object,default:function(){return{completion:0,earned:0,indexes:[]}}},overview:{type:Array,default:function(){return[]}}},data:function(){var t=this;return{datacollection:{labels:this.overview.map((function(e){return t.getMonthName(e)})),datasets:[{label:"Reports",backgroundColor:"#0040b932",borderColor:"#0040b9",data:this.overview.map((function(t){return t.y}))}],max:Math.max.apply(Math,this.overview.map((function(t){return t.y})))+3}}},methods:{getMonthName:function(t){return this.$moment(t.date).format("MMM YY")}}},O=r(162),component=Object(O.a)(x,(function(){var t=this,e=t._self._c;return e(_.a,[e(h.a,{staticClass:"text-centerc",attrs:{cols:"12",sm:"3"}},[e(c.a,{staticClass:"overview"},[e(f.a,{staticStyle:{"background-color":"#000"},attrs:{height:"180px",src:"https://source.unsplash.com/random/440x200/?dark,scenery\n      "}},[e(o.a,{attrs:{flat:"",color:"rgba(0, 0, 0, 0)"}},[e(w.a,{staticClass:"text-h6c white--text pl-0"},[t._v("Profile Overview")]),t._v(" "),e(S.a)],1),t._v(" "),e(d.d,{staticClass:"white--text mt-4"},[e(n.a,{attrs:{size:"60"}},[t.$auth.user.profile?e("img",{attrs:{src:t.$auth.user.profile,alt:t.$auth.user.name}}):e(v.a,{attrs:{dark:""}},[t._v(" mdi-account-circle ")])],1),t._v(" "),e("p",{staticClass:"ml-3 mb-0"},[t._v(t._s(t.$auth.user.name))])],1)],1),t._v(" "),e(d.c,[e("div",{staticClass:"font-weight-bold ml-4 mb-0"},[t._v("Hacker Account ")]),t._v(" "),e(d.b,{staticClass:"pb-0"},[t._v(t._s(t.$auth.user.email))]),t._v(" "),t.$auth.user.is_staff&&t.$auth.user.refuser?e(d.b,{staticClass:"pb-0"},[t._v("Attached to "+t._s(t.$auth.user.refuser.username))]):t._e(),t._v(" "),!t.$auth.user.is_staff&&t.$auth.user.refuser?e(d.b,{staticClass:"pb-0"},[t._v("Referred "+t._s(t.$auth.user.refuser.username))]):t._e(),t._v(" "),t.$auth.user.is_staff?t._e():e(d.b,{staticClass:"pb-0"},[t._v("Reputation: "+t._s(t.$auth.user.totalreputation))]),t._v(" "),t.$auth.user.is_staff?t._e():e(d.b,{staticClass:"pb-0"},[t._v("Bounties Earned: ₹"+t._s(t.count.bounties))])],1),t._v(" "),e(o.a,{staticClass:"pt-0",attrs:{flat:"",color:"transparent"}},[e(S.a),t._v(" "),e(l.a,{attrs:{text:"",small:"",color:"warning",to:"/profile"}},[t._v("Go to Profile")])],1)],1)],1),t._v(" "),e(h.a,{staticClass:"text-centerc",attrs:{cols:"12",sm:"6"}},[e(c.a,[e(d.c,[e(m.c,{staticClass:"mb-2"},[t._v("Overview")]),t._v(" "),e(m.d,{staticClass:"mb-4c",staticStyle:{"font-size":"22px"}},[t._v("Reports")])],1),t._v(" "),e(d.c,{staticClass:"d-flex justify-center"},[e("div",{staticClass:"small px-6c",staticStyle:{width:"100%"}},[e("line-chart",{attrs:{chartdata:t.datacollection}})],1)])],1)],1),t._v(" "),e(h.a,{staticClass:"text-centerc",attrs:{cols:"12",sm:"3"}},[e(c.a,{staticClass:"d-flexc"},[e(d.c,[e(m.c,{staticClass:"mb-2"},[t._v("Overview")]),t._v(" "),e(m.d,{staticClass:"mb-4c",staticStyle:{"font-size":"22px"}},[t._v("Awards")])],1),t._v(" "),e(d.c,[e("awards",{attrs:{awards:t.awards.indexes,type:"T"}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[20,19,23],{514:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var o=r(113),n=r(9);function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(n.a)(Object(o.b)(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var i=0,t=e.length;i<t;i++)this.$watch(e[i],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){(arguments.length>0&&void 0!==arguments[0]&&arguments[0]||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},532:function(t,e,r){t.exports={}},545:function(t,e,r){"use strict";r.r(e);var o={extends:r(535).b,props:{chartdata:{type:Object,default:function(){return{labels:["Aug","Sep","Oct"],datasets:[]}}}},mounted:function(){this.renderChart(this.chartdata,{global:{defaultFont:"Rajdhani"},responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{display:0,gridLines:{zeroLineColor:"transparent",drawTicks:!1,display:!1,drawBorder:!1}}],xAxes:[{ticks:{fontFamily:"Rajdhani"},gridLines:{zeroLineColor:"transparent",drawTicks:!1,display:!1,drawBorder:!1}}]},layout:{padding:15},plugins:{title:{display:!0,text:"Reports"},legend:{}}})}},n=r(162),component=Object(n.a)(o,undefined,undefined,!1,null,null,null);e.default=component.exports},547:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var o=r(355),n=r(2),c=Object(n.i)("v-toolbar__title"),l=Object(n.i)("v-toolbar__items");o.a},550:function(t,e,r){"use strict";r.r(e);var o={extends:r(535).a,props:{chartdata:{type:Object,default:function(){return{labels:["Aug","Sep","Oct"],datasets:[],max:9}}}},mounted:function(){this.renderChart(this.chartdata,{global:{defaultFont:"Rajdhani"},responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{gridLines:{zeroLineColor:"transparent",drawTicks:!1,display:!1,drawBorder:!1},ticks:{suggestedMin:0,suggestedMax:this.chartdata.max}}],xAxes:[{ticks:{fontFamily:"Rajdhani"},barPercentage:.1,gridLines:{zeroLineColor:"transparent",drawTicks:!1}}]},layout:{padding:15},plugins:{title:{display:!0,text:"Reports"},legend:{}}})}},n=r(162),component=Object(n.a)(o,undefined,undefined,!1,null,null,null);e.default=component.exports},567:function(t,e,r){"use strict";r(14),r(18),r(20),r(21),r(16),r(7),r(15);var o=r(4),n=(r(25),r(251),r(532),r(355)),c=r(19);var l={inserted:function(t,e,r){var o=(e.modifiers||{}).self,n=void 0!==o&&o,l=e.value,d="object"===Object(c.a)(l)&&l.options||{passive:!0},h="function"==typeof l||"handleEvent"in l?l:l.handler,v=n?t:e.arg?document.querySelector(e.arg):window;v&&(v.addEventListener("scroll",h,d),t._onScroll=Object(t._onScroll),t._onScroll[r.context._uid]={handler:h,options:d,target:n?void 0:v})},unbind:function(t,e,r){var o;if(null===(o=t._onScroll)||void 0===o?void 0:o[r.context._uid]){var n=t._onScroll[r.context._uid],c=n.handler,l=n.options,d=n.target;(void 0===d?t:d).removeEventListener("scroll",c,l),delete t._onScroll[r.context._uid]}}},d=l,h=r(514),v=r(12),f=r(3).a.extend({name:"scrollable",directives:{Scroll:l},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:function(){return{currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}},computed:{canScroll:function(){return"undefined"!=typeof window},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp:function(){this.savedScroll=this.savedScroll||this.currentScroll},isActive:function(){this.savedScroll=0}},mounted:function(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(v.c)("Unable to locate element with identifier ".concat(this.scrollTarget),this))},methods:{onScroll:function(){var t=this;this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((function(){Math.abs(t.currentScroll-t.savedScroll)>t.computedScrollThreshold&&t.thresholdMet()})))},thresholdMet:function(){}}}),m=r(250),_=r(112),S=r(2),y=r(9);function x(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function O(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?x(Object(r),!0).forEach((function(e){Object(o.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var C=Object(y.a)(n.a,f,m.a,_.a,Object(h.a)("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));e.a=C.extend({name:"v-app-bar",directives:{Scroll:d},provide:function(){return{VAppBar:this}},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data:function(){return{isActive:this.value}},computed:{applicationProperty:function(){return this.bottom?"bottom":"top"},canScroll:function(){return f.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes:function(){return O(O({},n.a.options.computed.classes.call(this)),{},{"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll})},scrollRatio:function(){var t=this.computedScrollThreshold;return Math.max((t-this.currentScroll)/t,0)},computedContentHeight:function(){if(!this.shrinkOnScroll)return n.a.options.computed.computedContentHeight.call(this);var t=this.dense?48:56;return t+(this.computedOriginalHeight-t)*this.scrollRatio},computedFontSize:function(){if(this.isProminent){return 1.25+.25*this.scrollRatio}},computedLeft:function(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop:function(){return this.app?this.$vuetify.application.bar:0},computedOpacity:function(){if(this.fadeImgOnScroll)return this.scrollRatio},computedOriginalHeight:function(){var t=n.a.options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight:function(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform:function(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;var t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow:function(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed:function(){return this.collapseOnScroll?this.currentScroll>0:n.a.options.computed.isCollapsed.call(this)},isProminent:function(){return n.a.options.computed.isProminent.call(this)||this.shrinkOnScroll},styles:function(){return O(O({},n.a.options.computed.styles.call(this)),{},{fontSize:Object(S.h)(this.computedFontSize,"rem"),marginTop:Object(S.h)(this.computedMarginTop),transform:"translateY(".concat(Object(S.h)(this.computedTransform),")"),left:Object(S.h)(this.computedLeft),right:Object(S.h)(this.computedRight)})}},watch:{canScroll:"onScroll",computedTransform:function(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll:function(t){this.isActive=!t||0!==this.currentScroll},hideOnScroll:function(t){this.isActive=!t||this.currentScroll<this.computedScrollThreshold}},created:function(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground:function(){var t=n.a.options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication:function(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet:function(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render:function(t){var e=n.a.options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}})},609:function(t,e,r){"use strict";r.r(e);var o=r(567),n=r(574),c=r(111),l=r(101),d=r(81),h=r(353),v=r(110),f=r(234),m=r(571),_=r(588),S=r(499),y=r(590),x=r(352),O=r(247),C=r(547),w=(r(36),r(72),r(545)),j=r(550),T={name:"CompanyCharts",components:{LineChart:w.default,BarChart:j.default},props:{count:{type:Object,default:function(){return{referred:0,visits:0,reports:0,programs:0,inscope:0,outscope:0,resolved:0,bounty:5e3,closed:0,pending:0}}},overview:{type:Object,default:function(){return{programs:[],reports:[]}}},staff:{type:Array,default:function(){return[]}},programs:{type:Array,default:function(){return[]}}},data:function(){var t=this;return{datacollection:{labels:this.overview.programs.map((function(e){return t.getMonthName(e)})),datasets:[{label:"Programs",backgroundColor:"#0040b932",borderColor:"#0040b9",data:this.overview.programs.map((function(t){return t.y}))}],max:Math.max.apply(Math,this.overview.programs.map((function(t){return t.y})))+3},datacollection2:{labels:this.overview.reports.map((function(e){return t.getMonthName(e)})),datasets:[{label:"Reports",backgroundColor:"#BA1366",borderColor:"#BA1366",data:this.overview.reports.map((function(t){return t.y}))}],max:Math.max.apply(Math,this.overview.reports.map((function(t){return t.y})))+3}}},methods:{getRandomInt:function(){return Math.floor(46*Math.random())+5},getMonthName:function(t){return this.$moment(t.date).format("MMM YY")}}},A=r(162),component=Object(A.a)(T,(function(){var t=this,e=t._self._c;return e(x.a,[e(h.a,{staticClass:"text-centerc",attrs:{cols:"12",sm:"3"}},[e(l.a,[e(d.c,[e(S.d,{staticClass:"mb-4c",staticStyle:{"font-size":"22px"}},[t._v("Overview")])],1),t._v(" "),e(d.c,{staticClass:"d-flexc justify-centerc"},[e(m.a,[e(S.b,[e(S.c,[t._v("Programs Posted")]),t._v(" "),e(S.d,{staticClass:"info--text",staticStyle:{"font-size":"40px"}},[t._v(t._s(t.count.programs))])],1),t._v(" "),e(S.b,[e(S.c,[t._v("Assets In-Scope")]),t._v(" "),e(S.d,{staticClass:"warning--text",staticStyle:{"font-size":"40px"}},[t._v(t._s(t.count.inscope))])],1),t._v(" "),e(S.b,[e(S.c,[t._v("Assets Out of Scope")]),t._v(" "),e(S.d,{staticClass:"error--text",staticStyle:{"font-size":"40px"}},[t._v(t._s(t.count.outscope))])],1)],1),t._v(" "),e(m.a,{staticClass:"my-5"},[e(S.b,[e(S.c,[t._v("Resolved Reports")]),t._v(" "),e("h3",{staticClass:"success--text",staticStyle:{"font-size":"50px"}},[t._v(t._s(t.count.resolved))])],1),t._v(" "),e(S.b,[e(S.c,[t._v("Bounties Paid")]),t._v(" "),e("h3",{staticClass:"success--text",staticStyle:{"font-size":"50px"}},[t._v("₹"+t._s(t.count.bounty))])],1)],1),t._v(" "),e(m.a,[e(S.b,[e(S.c,[t._v("Reports Received")]),t._v(" "),e(S.d,{staticClass:"info--text",staticStyle:{"font-size":"40px"}},[t._v(t._s(t.count.reports))])],1),t._v(" "),e(S.b,[e(S.c,[t._v("Closed")]),t._v(" "),e(S.d,{staticClass:"warning--text",staticStyle:{"font-size":"40px"}},[t._v(t._s(t.count.closed))])],1),t._v(" "),e(S.b,[e(S.c,[t._v("Pending")]),t._v(" "),e(S.d,{staticClass:"error--text",staticStyle:{"font-size":"40px"}},[t._v(t._s(t.count.pending))])],1)],1)],1)],1)],1),t._v(" "),e(h.a,{staticClass:"text-centerc",attrs:{cols:"12",sm:"6"}},[e(l.a,[e(d.c,[e(S.c,{staticClass:"mb-2"},[t._v("Programs Overview")])],1),t._v(" "),e(d.c,{staticClass:"d-flex justify-center py-0"},[e("div",{staticClass:"small px-6c",staticStyle:{width:"100%"}},[e("line-chart",{attrs:{chartdata:t.datacollection}})],1)])],1)],1),t._v(" "),e(h.a,{staticClass:"text-centerc",attrs:{cols:"12",sm:"3"}},[e(l.a,{staticClass:"d-flexc"},[e(d.c,[e(S.c,{staticClass:"mb-2"},[t._v("Recent Logs")])],1),t._v(" "),e(d.c,{staticClass:"px-0 py-4"},[e("div",{staticClass:"small px-6c",staticStyle:{width:"100%"}},[e("bar-chart",{attrs:{chartdata:t.datacollection2}})],1)])],1)],1),t._v(" "),e(h.a,{staticClass:"text-centerc",attrs:{cols:"12",sm:"4"}},[e(l.a,[e(d.c,[e(S.d,{staticClass:"mb-4c",staticStyle:{"font-size":"22px"}},[t._v("Programs")])],1),t._v(" "),e(d.c,t._l(t.programs,(function(r,o){return e(m.a,{key:o},[e(y.a,[e(v.a,{attrs:{color:"accent"}},[t._v(" mdi-note-outline ")])],1),t._v(" "),e(S.b,[e(S.d,[t._v(t._s(r.title))]),t._v(" "),e(S.c,[t._v("#"+t._s(r.type))])],1),t._v(" "),e(y.a,[e("a",{attrs:{target:"_blank",href:"/p?"+r.title}},[e(v.a,{attrs:{color:"accent",small:""}},[t._v(" mdi-open-in-new ")])],1)])],1)})),1)],1)],1),t._v(" "),e(h.a,{staticClass:"text-centerc",attrs:{cols:"12",sm:"4"}},[e(l.a,{staticClass:"overview"},[e(f.a,{attrs:{height:"220px",src:"https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"}},[e(o.a,{attrs:{flat:"",color:"rgba(0, 0, 0, 0)"}},[e(C.a,{staticClass:"text-h6c white--text pl-0"},[t._v("Profile Overview")]),t._v(" "),e(O.a)],1),t._v(" "),e(d.d,{staticClass:"white--text mt-12"},[e(n.a,{attrs:{size:"60"}},[t.$auth.user.profile?e("img",{attrs:{src:t.$auth.user.profile,alt:t.$auth.user.name}}):e(v.a,{attrs:{dark:""}},[t._v(" mdi-account-circle ")])],1),t._v(" "),e("p",{staticClass:"ml-3 mb-0"},[t._v(t._s(t.$auth.user.name))])],1)],1),t._v(" "),e(d.c,{staticClass:"mt-3"},[e("div",{staticClass:"font-weight-bold ml-4 mb-0"},[t._v("Company Account ")]),t._v(" "),e(d.b,{staticClass:"pb-0"},[t._v(t._s(t.$auth.user.email))]),t._v(" "),t.$auth.user.is_staff&&t.$auth.user.refuser?e(d.b,{staticClass:"pb-0"},[t._v("Attached to "+t._s(t.$auth.user.refuser.username))]):t._e(),t._v(" "),!t.$auth.user.is_staff&&t.$auth.user.refuser?e(d.b,{staticClass:"pb-0"},[t._v("Referred "+t._s(t.$auth.user.refuser.username))]):t._e(),t._v(" "),e(d.b,{staticClass:"pb-0"},[t._v("Programs: "+t._s(t.count.programs))])],1),t._v(" "),e(o.a,{staticClass:"pt-0",attrs:{flat:"",color:"transparent"}},[e(O.a),t._v(" "),e(c.a,{attrs:{text:"",small:"",color:"warning",to:"/profile"}},[t._v("Go to Profile")])],1)],1)],1),t._v(" "),e(h.a,{staticClass:"text-centerc",attrs:{cols:"12",sm:"4"}},[e(l.a,{staticClass:"d-flexc"},[e(d.c,[e(S.c,{staticClass:"mb-2"},[t._v("Recent")]),t._v(" "),e(S.d,{staticClass:"mb-4c",staticStyle:{"font-size":"22px"}},[t._v("Staff")])],1),t._v(" "),e(d.c,{staticClass:"px-0 py-4"},t._l(t.staff,(function(r,o){return e(m.a,{key:o},[e(y.a,[e(n.a,{attrs:{size:"75"}},[r.profile?e("img",{attrs:{src:r.profile,alt:r.name}}):e(v.a,{attrs:{dark:"",large:""}},[t._v(" mdi-account-circle ")])],1)],1),t._v(" "),e(S.b,[e(S.d,[e("nuxt-link",{attrs:{to:"/u/?"+r.username}},[t._v(" "+t._s(r.name))])],1),t._v(" "),e(S.c,[t._v("@"+t._s(r.username)+" ")])],1),t._v(" "),e(_.a,[e(S.a,[t._v(t._s(r.joined))])],1)],1)})),1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);
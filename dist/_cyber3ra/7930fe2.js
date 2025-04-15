(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{505:function(t,e,n){"use strict";n.d(e,"a",(function(){return _}));var r=n(2),o=n(518),c=(n(25),n(7),n(43),n(90)),l=n(37),h=n(163),d=n(116),v=n(9),m=Object(v.a)(l.a,Object(h.a)("stepper","v-stepper-step","v-stepper")).extend().extend({name:"v-stepper-step",directives:{ripple:d.a},inject:["stepClick"],props:{color:{type:String,default:"primary"},complete:Boolean,completeIcon:{type:String,default:"$complete"},editable:Boolean,editIcon:{type:String,default:"$edit"},errorIcon:{type:String,default:"$error"},rules:{type:Array,default:function(){return[]}},step:[Number,String]},data:function(){return{isActive:!1,isInactive:!0}},computed:{classes:function(){return{"v-stepper__step--active":this.isActive,"v-stepper__step--editable":this.editable,"v-stepper__step--inactive":this.isInactive,"v-stepper__step--error error--text":this.hasError,"v-stepper__step--complete":this.complete}},hasError:function(){return this.rules.some((function(t){return!0!==t()}))}},mounted:function(){this.stepper&&this.stepper.register(this)},beforeDestroy:function(){this.stepper&&this.stepper.unregister(this)},methods:{click:function(t){t.stopPropagation(),this.$emit("click",t),this.editable&&this.stepClick(this.step)},genIcon:function(t){return this.$createElement(c.a,t)},genLabel:function(){return this.$createElement("div",{staticClass:"v-stepper__label"},this.$slots.default)},genStep:function(){var t=!(this.hasError||!this.complete&&!this.isActive)&&this.color;return this.$createElement("span",this.setBackgroundColor(t,{staticClass:"v-stepper__step__step"}),this.genStepContent())},genStepContent:function(){var t=[];return this.hasError?t.push(this.genIcon(this.errorIcon)):this.complete?this.editable?t.push(this.genIcon(this.editIcon)):t.push(this.genIcon(this.completeIcon)):t.push(String(this.step)),t},keyboardClick:function(t){t.keyCode===r.w.space&&this.click(t)},toggle:function(t){this.isActive=t.toString()===this.step.toString(),this.isInactive=Number(t)<Number(this.step)}},render:function(t){return t("div",{attrs:{tabindex:this.editable?0:-1},staticClass:"v-stepper__step",class:this.classes,directives:[{name:"ripple",value:this.editable}],on:{click:this.click,keydown:this.keyboardClick}},[this.genStep(),this.genLabel()])}}),f=n(519),y=Object(r.i)("v-stepper__header"),_=Object(r.i)("v-stepper__items");o.a,f.a},518:function(t,e,n){"use strict";n(14),n(20),n(21),n(16),n(15);var r=n(4),o=(n(18),n(204),n(205),n(36),n(25),n(7),n(533),n(115)),c=n(163),l=n(122),h=n(9),d=n(12);function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var f=Object(h.a)(o.a,Object(c.b)("stepper"),l.a);e.a=f.extend({name:"v-stepper",provide:function(){return{stepClick:this.stepClick,isVertical:this.vertical}},props:{altLabels:Boolean,nonLinear:Boolean,flat:Boolean,vertical:Boolean},data:function(){var data={isBooted:!1,steps:[],content:[],isReverse:!1};return data.internalLazyValue=null!=this.value?this.value:(data[0]||{}).step||1,data},computed:{classes:function(){return m({"v-stepper--flat":this.flat,"v-stepper--is-booted":this.isBooted,"v-stepper--vertical":this.vertical,"v-stepper--alt-labels":this.altLabels,"v-stepper--non-linear":this.nonLinear},o.a.options.computed.classes.call(this))},styles:function(){return m({},o.a.options.computed.styles.call(this))}},watch:{internalValue:function(t,e){this.isReverse=Number(t)<Number(e),e&&(this.isBooted=!0),this.updateView()}},created:function(){this.$listeners.input&&Object(d.a)("@input","@change",this)},mounted:function(){this.updateView()},methods:{register:function(t){"v-stepper-step"===t.$options.name?this.steps.push(t):"v-stepper-content"===t.$options.name&&(t.isVertical=this.vertical,this.content.push(t))},unregister:function(t){"v-stepper-step"===t.$options.name?this.steps=this.steps.filter((function(i){return i!==t})):"v-stepper-content"===t.$options.name&&(t.isVertical=this.vertical,this.content=this.content.filter((function(i){return i!==t})))},stepClick:function(t){var e=this;this.$nextTick((function(){return e.internalValue=t}))},updateView:function(){for(var t=this.steps.length;--t>=0;)this.steps[t].toggle(this.internalValue);for(var e=this.content.length;--e>=0;)this.content[e].toggle(this.internalValue,this.isReverse)}},render:function(t){return t(this.tag,{staticClass:"v-stepper",class:this.classes,style:this.styles},this.$slots.default)}})},519:function(t,e,n){"use strict";n(25),n(7),n(43),n(54);var r=n(139),o=n(163),c=n(2),l=n(9),h=Object(l.a)(Object(o.a)("stepper","v-stepper-content","v-stepper"));e.a=h.extend().extend({name:"v-stepper-content",inject:{isVerticalProvided:{from:"isVertical"}},props:{step:{type:[Number,String],required:!0}},data:function(){return{height:0,isActive:null,isReverse:!1,isVertical:this.isVerticalProvided}},computed:{computedTransition:function(){return(this.$vuetify.rtl?!this.isReverse:this.isReverse)?r.g:r.h},styles:function(){return this.isVertical?{height:Object(c.h)(this.height)}:{}}},watch:{isActive:function(t,e){t&&null==e?this.height="auto":this.isVertical&&(this.isActive?this.enter():this.leave())}},mounted:function(){this.$refs.wrapper.addEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.register(this)},beforeDestroy:function(){this.$refs.wrapper.removeEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.unregister(this)},methods:{onTransition:function(t){this.isActive&&"height"===t.propertyName&&(this.height="auto")},enter:function(){var t=this,e=0;requestAnimationFrame((function(){e=t.$refs.wrapper.scrollHeight})),this.height=0,setTimeout((function(){return t.isActive&&(t.height=e||"auto")}),450)},leave:function(){var t=this;this.height=this.$refs.wrapper.clientHeight,setTimeout((function(){return t.height=0}),10)},toggle:function(t,e){this.isActive=t.toString()===this.step.toString(),this.isReverse=e}},render:function(t){var e={staticClass:"v-stepper__content"},n={staticClass:"v-stepper__wrapper",style:this.styles,ref:"wrapper"};this.isVertical||(e.directives=[{name:"show",value:this.isActive}]);var r=t("div",n,[this.$slots.default]),content=t("div",e,[r]);return t(this.computedTransition,{on:this.$listeners},[content])}})},533:function(t,e,n){t.exports={}},700:function(t,e,n){"use strict";n.r(e);var r=n(111),o=n(101),c=n(81),l=n(353),h=n(246),d=n(522),v=n(110),m=n(530),f=n(352),y=n(528),_=n(247),w=n(518),k=n(519),C=n(505),x=n(164),S=(n(36),n(29)),O=(n(91),n(30),{name:"CompanySignupPage",layout:"auth",data:function(){return{e1:1,dialog:!0,name:"",email:"",username:"",password:"",contact:"",loading:!1,submitted:!1,type:{label:"Startup",value:"S"},types:[{label:"Startup",value:"S"},{label:"Enterprise",value:"E"},{label:"Managed",value:"M"}],reason:"-",reasons:["-","I would like to talk to sales","I would like a product demo","I would like to partner with Cyber3ra","I just want to Signup"]}},head:function(){return{title:"Sign Up"}},methods:{handleEnter:function(t){t.preventDefault(),console.log(t.keyCode),13===t.keyCode&&this.next()},next:function(){return this.name.length<1||this.email.length<1||this.username.length<1?(this.$store.commit("showSnack",{message:"Please add everything peoperly",type:"warning",timeout:5e3}),0):/\S+@\S+\.\S+/.test(this.email)?void(this.e1=2):(this.$store.commit("showSnack",{message:"Please enter a valid Email",type:"warning",timeout:5e3}),0)},newcontact:function(){var t=this;return Object(S.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,n={username:t.username,name:t.name,email:t.email,password:t.password,reason:t.reason,type:t.type,contact:t.contact},t.referred&&(n.refcode=t.refcode),e.prev=3,e.next=6,t.$axios.post("/app/accounts/companysignup",n);case 6:e.sent.data.error||(t.submitted=!0),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.log("Error : ",e.t0);case 13:t.loading=!1;case 14:case"end":return e.stop()}}),e,null,[[3,10]])})))()}}}),j=n(162),component=Object(j.a)(O,(function(){var t=this,e=t._self._c;return e(f.a,{staticClass:"my-4",attrs:{justify:"center",align:"center"}},[e(l.a,{attrs:{cols:"12",sm:"6",md:"3"}},[e(h.a,{attrs:{width:"400",persistent:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e("form",{on:{submit:function(e){return e.preventDefault(),t.newcontact.apply(null,arguments)}}},[e(o.a,{attrs:{loading:t.loading}},[e(c.d),t._v(" "),e(c.a,[e(f.a,{staticClass:"px-0c mx-0"},[e(l.a,{staticClass:"text-center d-flex justify-center py-0 px-0c",attrs:{cols:"12"}},[e("img",{staticClass:"align-self-center",attrs:{src:"/logo.svg",width:"50",height:"50"}})]),t._v(" "),e(l.a,{staticClass:"text-center py-0 px-0c",attrs:{cols:"12"}},[e("p",{staticClass:"text-caption",staticStyle:{"font-family":"Monospace !important"}},[t._v("$ whoami ")])])],1)],1),t._v(" "),t.submitted?t._e():e(w.a,{staticStyle:{background:"transparent !important"},attrs:{color:"transparent"},model:{value:t.e1,callback:function(e){t.e1=e},expression:"e1"}},[e(C.a,[e(k.a,{staticClass:"pt-2",attrs:{step:"1"}},[e(o.a,{staticClass:"mb-12 pt-2",attrs:{color:"transparent",flat:""}},[e(x.a,{staticClass:"pb-0",attrs:{required:"",outlined:"",placeholder:"Company Name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),e(x.a,{staticClass:"pb-0",attrs:{required:"",outlined:"",placeholder:"Official Email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),e(x.a,{staticClass:"pb-0",attrs:{required:"",outlined:"",placeholder:"Preferred Username"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),e(x.a,{staticClass:"pb-0",attrs:{type:"password",required:"",outlined:"",placeholder:"Set Password","hide-details":""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleEnter.apply(null,arguments)}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),e(r.a,{attrs:{color:"primary"},on:{click:t.next}},[t._v("Continue")])],1),t._v(" "),e(k.a,{staticClass:"pt-2",attrs:{step:"2"}},[e(o.a,{staticClass:"mb-12 pt-2",attrs:{color:"transparent",flat:""}},[e(c.b,{staticClass:"pl-0"},[t._v("Choose Plan\n                      "),e(m.a,{attrs:{"open-on-hover":"","close-on-content-click":!1,"nudge-width":200,"offset-x":""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e(v.a,t._g(t._b({attrs:{small:""}},"v-icon",o,!1),r),[t._v("mdi-help-circle")])]}}],null,!1,196443365)},[t._v(" "),e(o.a,{attrs:{width:"300"}},[e(c.c,[t._v("About Cyber3ra Plans")]),t._v(" "),e(d.a),t._v(" "),e(c.c,[e("strong",[t._v("Startup")]),t._v(" This is the basic Startup plan with benefits etc.\n                              ")]),t._v(" "),e(c.c,[e("strong",[t._v("Enterprise")]),t._v(" This is the Enterprise level.\n                              ")]),t._v(" "),e(c.c,[e("strong",[t._v("Managed")]),t._v(" It would be signed up and managed.\n                              ")]),t._v(" "),e(c.a,[e(_.a),t._v(" "),e(r.a,{attrs:{color:"primary",text:"",router:"",to:"/awards",small:""}},[t._v(" Learn More ")])],1)],1)],1)],1),t._v(" "),e(y.a,{attrs:{"item-text":"label","item-value":"value",items:t.types,outlined:""},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}}),t._v(" "),e(x.a,{staticClass:"pb-0",attrs:{required:"",outlined:"",placeholder:"Contact Number"},model:{value:t.contact,callback:function(e){t.contact=e},expression:"contact"}})],1),t._v(" "),e(r.a,{attrs:{color:"primary",type:"submit"}},[t._v("Send")]),t._v(" "),e(r.a,{attrs:{text:""},on:{click:function(e){t.e1=1}}},[t._v("Go Back")])],1)],1)],1),t._v(" "),t.submitted?e(o.a,[e(c.d,[t._v("Successful")]),t._v(" "),e(c.b,[t._v("An Email has been sent to you. Please follow the instructions accordingly.")])],1):t._e()],1)],1)])],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);
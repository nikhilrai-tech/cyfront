(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{602:function(e,t,o){"use strict";var n=o(165),c=o(113),d=o(9),l=o(12);t.a=Object(d.a)(n.a,c.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(l.c)("v-hover should only contain a single element",this),element)):(Object(l.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},603:function(e,t,o){e.exports={}},658:function(e,t,o){"use strict";o(603)},697:function(e,t,o){"use strict";o.r(t);var n=o(112),c=o(102),d=o(82),l=o(356),r=o(249),v=o(602),f=o(111),h=o(593),m=o(575),_=o(592),y=o(594),A=o(502),k=o(355),w={name:"JobAddPage",components:{AddJob:o(669).default},data:function(){return{tab:"mark"}},head:function(){return{title:"Add Job"}}},x=(o(658),o(162)),component=Object(x.a)(w,(function(){var e=this,t=e._self._c;return t("div",[t(k.a,[t(l.a,{staticClass:"text-centerc",attrs:{cols:"12",sm:"6"}},[t("AddJob",{attrs:{scs:e.scopes}})],1)],1),e._v(" "),t(r.a,{attrs:{width:"400"},model:{value:e.scopemodal,callback:function(t){e.scopemodal=t},expression:"scopemodal"}},[t(c.a,[t(d.d,{staticClass:"d-flex justify-space-between"},[e._v("\n        Your Scopes\n        "),t(n.a,{attrs:{icon:""},on:{click:function(t){e.scopemodal=!1}}},[t(f.a,[e._v("mdi-close")])],1)],1),e._v(" "),t(h.a,e._l(e.scopes,(function(o,i){return t("div",{key:i},[t(v.a,{scopedSlots:e._u([{key:"default",fn:function(c){var d=c.hover;return[t(m.a,{attrs:{disabled:!1}},[t(y.a,[t(f.a,{attrs:{dark:"",color:o.bounty?"success":"error"}},[e._v(" "+e._s(o.bounty?"mdi-currency-usd":"mdi-currency-usd-off")+" ")])],1),e._v(" "),t(A.b,[t(A.d,[e._v(e._s(o.type))]),e._v(" "),t(A.c,[e._v(e._s(o.domain))])],1),e._v(" "),t(y.a,{class:{"hide-btns":d}},[e._v("\n                "+e._s(o.severity)+"\n            ")]),e._v(" "),t(_.a,{class:{"show-btns":d},staticStyle:{display:"none"}},[t(n.a,{attrs:{icon:"",color:"info"}},[t(f.a,[e._v("mdi-pencil")])],1),e._v(" "),t(n.a,{attrs:{icon:"",color:"info"}},[t(f.a,[e._v("mdi-delete")])],1)],1)],1)]}}],null,!0)})],1)})),0),e._v(" "),t(d.a,{staticClass:"text-center"},[t(n.a,{attrs:{outlined:"",color:"info"},on:{click:function(t){e.addscopemodal=!0}}},[e._v("Add")])],1)],1)],1),e._v(" "),t(r.a,{attrs:{width:"400"},model:{value:e.addscopemodal,callback:function(t){e.addscopemodal=t},expression:"addscopemodal"}},[t("AddScope",{attrs:{close:e.closemodal,update:e.updatescopes}})],1)],1)}),[],!1,null,"ff04a074",null);t.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[67,16],{503:function(e,t,n){e.exports={}},508:function(e,t,n){"use strict";n(503)},509:function(e,t,n){"use strict";n.r(t);var r=n(522),o=(n(30),n(203),n(61),n(248),{name:"MarkdownComponent",props:{text:{type:String,default:""}},data:function(){return{descouts:this.text.split(/\r?\n/)}},watch:{text:function(e){this.descouts=e.split(/\r?\n/)}},methods:{getlink:function(e){}}}),l=(n(508),n(162)),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"py-3"},e._l(e.descouts,(function(n,o){return t("div",{key:o,class:"string string-".concat(o)},["#"==n.charAt(0)?t("div",[t("h1",{staticClass:"mb-3"},[n.match(/\[/)?t("div",e._l(n.split(/(?=\[)|\]/g),(function(n,r){return t("span",{key:r},["["===n.charAt(0)?t("a",{attrs:{target:"_blank",href:n.replace("[","").split(",")[0]}},[e._v("\n                            "+e._s(n.replace("[","").split(",")[1])+"\n                        ")]):t("span",[e._v(e._s(n.replace(/\r?#/g,"")))])])})),0):t("div",[e._v("\n                    "+e._s(n.replace(/\r?#/g,""))+"\n                ")])])]):"_"==n.charAt(0)||"-"==n.charAt(0)?t("div",[t(r.a)],1):"("===n.charAt(0)?t("img",{attrs:{src:n.replace("(","").replace(")","").split("^")[0],alt:n.replace("(","").replace(")","").split("^")[1]||"Image",width:"150"}}):t("div",[n.match(/\[/)?t("div",e._l(n.split(/(?=\[)|\]/g),(function(n,r){return t("span",{key:r},["["===n.charAt(0)?t("a",{attrs:{target:"_blank",href:n.replace("[","").split(",")[0]}},[e._v("\n                        "+e._s(n.replace("[","").split(",")[1])+"\n                    ")]):t("span",[e._v(e._s(n))])])})),0):t("div",[e._v("\n                "+e._s(n)+"\n            ")])])])})),0)}),[],!1,null,null,null);t.default=component.exports},598:function(e,t,n){"use strict";var r=n(165),o=n(112),l=n(9),c=n(12);t.a=Object(l.a)(r.a,o.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(c.c)("v-hover should only contain a single element",this),element)):(Object(c.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},600:function(e,t,n){"use strict";var r=n(19),o=n(4),l=(n(14),n(18),n(103),n(249),n(47),n(50),n(254),n(36),n(7),n(20),n(21),n(16),n(43),n(262),n(15),n(67),n(517),n(528)),c=n(538),d=n(2);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=c.a.extend({name:"v-combobox",props:{delimiters:{type:Array,default:function(){return[]}},returnObject:{type:Boolean,default:!0}},data:function(){return{editingIndex:-1}},computed:{computedCounterValue:function(){return this.multiple?this.selectedItems.length:(this.internalSearch||"").toString().length},hasSlot:function(){return l.a.options.computed.hasSlot.call(this)||this.multiple},isAnyValueAllowed:function(){return!0},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!!this.$slots["no-data"]&&!this.hideNoData)},searchIsDirty:function(){return null!=this.internalSearch}},methods:{onInternalSearchChanged:function(e){if(e&&this.multiple&&this.delimiters.length){var t=this.delimiters.find((function(t){return e.endsWith(t)}));null!=t&&(this.internalSearch=e.slice(0,e.length-t.length),this.updateTags())}this.updateMenuDimensions()},genInput:function(){var input=c.a.options.methods.genInput.call(this);return delete input.data.attrs.name,input.data.on.paste=this.onPaste,input},genChipSelection:function(e,t){var n=this,r=l.a.options.methods.genChipSelection.call(this,e,t);return this.multiple&&(r.componentOptions.listeners=h(h({},r.componentOptions.listeners),{},{dblclick:function(){n.editingIndex=t,n.internalSearch=n.getText(e),n.selectedIndex=-1}})),r},onChipInput:function(e){l.a.options.methods.onChipInput.call(this,e),this.editingIndex=-1},onEnterDown:function(e){e.preventDefault(),this.getMenuIndex()>-1||this.$nextTick(this.updateSelf)},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[d.w.home,d.w.end].includes(t)||l.a.options.methods.onKeyDown.call(this,e),this.multiple&&t===d.w.left&&0===this.$refs.input.selectionStart?this.updateSelf():t===d.w.enter&&this.onEnterDown(e),this.changeSelectedIndex(t)},onTabDown:function(e){if(this.multiple&&this.internalSearch&&-1===this.getMenuIndex())return e.preventDefault(),e.stopPropagation(),this.updateTags();c.a.options.methods.onTabDown.call(this,e)},selectItem:function(e){this.editingIndex>-1?this.updateEditing():(c.a.options.methods.selectItem.call(this,e),this.internalSearch&&this.multiple&&this.getText(e).toLocaleLowerCase().includes(this.internalSearch.toLocaleLowerCase())&&(this.internalSearch=null))},setSelectedItems:function(){null==this.internalValue||""===this.internalValue?this.selectedItems=[]:this.selectedItems=this.multiple?this.internalValue:[this.internalValue]},setValue:function(e){l.a.options.methods.setValue.call(this,void 0===e?this.internalSearch:e)},updateEditing:function(){var e=this,t=this.internalValue.slice(),n=this.selectedItems.findIndex((function(t){return e.getText(t)===e.internalSearch}));if(n>-1){var o="object"===Object(r.a)(t[n])?Object.assign({},t[n]):t[n];t.splice(n,1),t.push(o)}else t[this.editingIndex]=this.internalSearch;this.setValue(t),this.editingIndex=-1,this.internalSearch=null},updateCombobox:function(){this.searchIsDirty&&(this.internalSearch!==this.getText(this.internalValue)&&this.setValue(),(Boolean(this.$scopedSlots.selection)||this.hasChips)&&(this.internalSearch=null))},updateSelf:function(){this.multiple?this.updateTags():this.updateCombobox()},updateTags:function(){var e=this,t=this.getMenuIndex();if(!(t<0&&!this.searchIsDirty||!this.internalSearch)){if(this.editingIndex>-1)return this.updateEditing();var n=this.selectedItems.findIndex((function(t){return e.internalSearch===e.getText(t)})),o=n>-1&&"object"===Object(r.a)(this.selectedItems[n])?Object.assign({},this.selectedItems[n]):this.internalSearch;if(n>-1){var l=this.internalValue.slice();l.splice(n,1),this.setValue(l)}if(t>-1)return this.internalSearch=null;this.selectItem(o),this.internalSearch=null}},onPaste:function(e){var t;if(this.$emit("paste",e),this.multiple&&!this.searchIsDirty){var n=null===(t=e.clipboardData)||void 0===t?void 0:t.getData("text/vnd.vuetify.autocomplete.item+plain");n&&-1===this.findExistingIndex(n)&&(e.preventDefault(),l.a.options.methods.selectItem.call(this,n))}},clearableCallback:function(){this.editingIndex=-1,c.a.options.methods.clearableCallback.call(this)}}})},615:function(e,t,n){"use strict";n.r(t);var r=n(538),o=n(111),l=n(101),c=n(81),d=n(353),m=n(246),h=n(110),v=n(234),f=n(352),_=n(528),y=n(118),x=n(247),k=n(518),w=n(519),S=n(505),C=n(555),O=n(164),I=n(537),$=(n(14),n(68),n(29)),j=(n(36),n(7),n(48),n(49),n(536),n(356),n(91),{name:"AddProgramComponent",components:{Markdown:n(509).default},props:{scs:{type:Array,default:function(){return[]}},users:{type:Array,default:function(){return[]}}},data:function(){return{loading:!1,program:{type:"",title:"",description:"",low:100,mid:500,high:1e3,critic:2e3,splitting:!1,managed:!1,scopes:[],users:[],present:!1,external:null},bg:{name:"",file:null,url:null},markdown:!1,e1:1}},methods:{addprogram:function(){var e=this;return Object($.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,console.log(e.program);case 3:if(!(e.program.scopes.length<1)){t.next=6;break}return e.$store.commit("showSnack",{message:"Please add atleast one Scope",type:"error",timeout:6e3}),t.abrupt("return",0);case 6:if("PRI"!==e.program.type){t.next=10;break}if(!(e.program.users.length<1)){t.next=10;break}return e.$store.commit("showSnack",{message:"Please invite atleast one User",type:"error",timeout:6e3}),t.abrupt("return",0);case 10:return t.prev=10,t.next=13,e.$axios.post("/app/main/programs",e.program);case 13:t.sent.data.error||(e.e1=2),t.next=21;break;case 17:t.prev=17,t.t0=t.catch(10),console.log(t.t0),e.loading=!1;case 21:case"end":return t.stop()}}),t,null,[[10,17]])})))()},inputChange:function(e){this.bg={name:e.target.files[0].name,file:e.target.files[0],url:URL.createObjectURL(e.target.files[0])}},addbg:function(){var e=this;return Object($.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,(n=new FormData).append("photo",e.bg.file,e.bg.name),t.prev=3,t.next=6,e.$axios.post("/app/main/setbackground/"+e.program.title,n);case 6:t.sent.data.error||e.$router.push("/p/?"+e.program.title),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(3),console.log(t.t0),e.loading=!1;case 14:case"end":return t.stop()}}),t,null,[[3,10]])})))()}}}),A=n(162),component=Object(A.a)(j,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"add-program"},[t(k.a,{staticStyle:{background:"transparent !important"},attrs:{color:"transparent"},model:{value:e.e1,callback:function(t){e.e1=t},expression:"e1"}},[t(S.a,[t(w.a,{staticClass:"pt-2",attrs:{step:"1"}},[t("form",{on:{submit:function(t){return t.preventDefault(),e.addprogram.apply(null,arguments)}}},[t(l.a,[t(c.d,[e._v("\n          Add Program\n        ")]),e._v(" "),t(c.c,[t(f.a,[t(d.a,{attrs:{cols:"12",sm:"4"}},[t(O.a,{attrs:{placeholder:"Program Title",outlined:""},model:{value:e.program.title,callback:function(t){e.$set(e.program,"title",t)},expression:"program.title"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"4"}},[t(_.a,{attrs:{outlined:"","item-text":"name","item-value":"val",placeholder:"Program Type",items:[{name:"Vulnerability Disclosure Program",val:"VDP"},{name:"Bug Bounty Program",val:"BBP"},{name:"Private Program",val:"PRI"}]},model:{value:e.program.type,callback:function(t){e.$set(e.program,"type",t)},expression:"program.type"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"4"}},[t(r.a,{attrs:{items:e.scs,"item-text":"type","item-value":"id",outlined:"",chips:"","small-chips":"",placeholder:"Scopes",multiple:""},model:{value:e.program.scopes,callback:function(t){e.$set(e.program,"scopes",t)},expression:"program.scopes"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"12"}},[t(o.a,{attrs:{text:""},on:{click:function(t){e.markdown=!0}}},[e._v("Preview")]),e._v(" "),t(I.a,{attrs:{placeholder:"Enter Markdown","auto-grow":"",outlined:"",hint:"Cyber3ra Markdown"},model:{value:e.program.description,callback:function(t){e.$set(e.program,"description",t)},expression:"program.description"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12"}},[t(c.b,{staticClass:"px-0"},[e._v("Rewards")])],1),e._v(" "),t(d.a,{staticClass:"px-6",attrs:{cols:"12",sm:"6"}},[t(O.a,{attrs:{placeholder:"Low Reward",type:"number",label:"Low",outlined:"","append-outer-icon":"mdi-plus","prepend-icon":"mdi-minus"},on:{"click:append-outer":function(t){e.program.low+=100},"click:prepend":function(t){e.program.low-=100}},scopedSlots:e._u([{key:"append-outer",fn:function(n){var r=n.on,l=n.attrs;return[t(o.a,e._g(e._b({attrs:{icon:""},on:{click:function(t){e.program.low+=100}}},"v-btn",l,!1),r),[t(h.a,[e._v("mdi-plus")])],1)]}},{key:"prepend",fn:function(n){var r=n.on,l=n.attrs;return[t(o.a,e._g(e._b({attrs:{disabled:e.program.low<=100,icon:""},on:{click:function(t){e.program.low-=100}}},"v-btn",l,!1),r),[t(h.a,[e._v("mdi-minus")])],1)]}}]),model:{value:e.program.low,callback:function(t){e.$set(e.program,"low",e._n(t))},expression:"program.low"}})],1),e._v(" "),t(d.a,{staticClass:"px-6",attrs:{cols:"12",sm:"6"}},[t(O.a,{attrs:{placeholder:"Mid Reward",type:"number",label:"Mid",outlined:"","append-outer-icon":"mdi-plus","prepend-icon":"mdi-minus"},on:{"click:append-outer":function(t){e.program.mid+=100},"click:prepend":function(t){e.program.mid-=100}},scopedSlots:e._u([{key:"append-outer",fn:function(n){var r=n.on,l=n.attrs;return[t(o.a,e._g(e._b({attrs:{icon:""},on:{click:function(t){e.program.mid+=100}}},"v-btn",l,!1),r),[t(h.a,[e._v("mdi-plus")])],1)]}},{key:"prepend",fn:function(n){var r=n.on,l=n.attrs;return[t(o.a,e._g(e._b({attrs:{disabled:e.program.mid<=500,icon:""},on:{click:function(t){e.program.mid-=100}}},"v-btn",l,!1),r),[t(h.a,[e._v("mdi-minus")])],1)]}}]),model:{value:e.program.mid,callback:function(t){e.$set(e.program,"mid",t)},expression:"program.mid"}})],1),e._v(" "),t(d.a,{staticClass:"px-6",attrs:{cols:"12",sm:"6"}},[t(O.a,{attrs:{placeholder:"High Reward",type:"number",label:"High",outlined:"","append-outer-icon":"mdi-plus","prepend-icon":"mdi-minus","disabled:prepend":e.program.high<=1e3},on:{"click:append-outer":function(t){e.program.high+=100},"click:prepend":function(t){e.program.high-=100}},scopedSlots:e._u([{key:"append-outer",fn:function(n){var r=n.on,l=n.attrs;return[t(o.a,e._g(e._b({attrs:{icon:""},on:{click:function(t){e.program.high+=100}}},"v-btn",l,!1),r),[t(h.a,[e._v("mdi-plus")])],1)]}},{key:"prepend",fn:function(n){var r=n.on,l=n.attrs;return[t(o.a,e._g(e._b({attrs:{disabled:e.program.high<=1e3,icon:""},on:{click:function(t){e.program.high-=100}}},"v-btn",l,!1),r),[t(h.a,[e._v("mdi-minus")])],1)]}}]),model:{value:e.program.high,callback:function(t){e.$set(e.program,"high",t)},expression:"program.high"}})],1),e._v(" "),t(d.a,{staticClass:"px-6",attrs:{cols:"12",sm:"6"}},[t(O.a,{attrs:{placeholder:"Critical Reward",type:"number",label:"Critical",outlined:"","append-outer-icon":"mdi-plus","prepend-icon":"mdi-minus"},on:{"click:append-outer":function(t){e.program.critic+=100},"click:prepend":function(t){e.program.critic-=100}},scopedSlots:e._u([{key:"append-outer",fn:function(n){var r=n.on,l=n.attrs;return[t(o.a,e._g(e._b({attrs:{icon:""},on:{click:function(t){e.program.critic+=100}}},"v-btn",l,!1),r),[t(h.a,[e._v("mdi-plus")])],1)]}},{key:"prepend",fn:function(n){var r=n.on,l=n.attrs;return[t(o.a,e._g(e._b({attrs:{disabled:e.program.critic<=2e3,icon:""},on:{click:function(t){e.program.critic-=100}}},"v-btn",l,!1),r),[t(h.a,[e._v("mdi-minus")])],1)]}}]),model:{value:e.program.critic,callback:function(t){e.$set(e.program,"critic",t)},expression:"program.critic"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"3"}},[t(C.a,{staticStyle:{display:"inline-block"},attrs:{label:"Managed By Cyber3ra"},model:{value:e.program.managed,callback:function(t){e.$set(e.program,"managed",t)},expression:"program.managed"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"3"}},[t(C.a,{staticStyle:{display:"inline-block"},attrs:{label:"Bounty Splitting Eligible"},model:{value:e.program.splitting,callback:function(t){e.$set(e.program,"splitting",t)},expression:"program.splitting"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"3"}},[t(C.a,{staticStyle:{display:"inline-block"},attrs:{label:"External Link"},model:{value:e.program.present,callback:function(t){e.$set(e.program,"present",t)},expression:"program.present"}})],1),e._v(" "),"PRI"==e.program.type?t(d.a,{staticClass:"text-center",attrs:{cols:"12"}},[t(r.a,{attrs:{items:e.users,"item-text":"name","item-value":"username",outlined:"",chips:"","small-chips":"",placeholder:"Users",multiple:""},model:{value:e.program.users,callback:function(t){e.$set(e.program,"users",t)},expression:"program.users"}})],1):e._e(),e._v(" "),e.program.present?t(d.a,{attrs:{cols:"12",sm:"12"}},[t(d.a,{attrs:{cols:"12",sm:"12"}},[t(o.a,{attrs:{text:""},on:{click:function(t){e.markdown=!0}}},[e._v("External Link")]),e._v(" "),t(I.a,{attrs:{placeholder:"Enter External Link","auto-grow":"",outlined:"",hint:"Cyber3ra Markdown",height:"30px"},model:{value:e.program.external,callback:function(t){e.$set(e.program,"external",t)},expression:"program.external"}})],1)],1):e._e(),e._v(" "),t(d.a,{staticClass:"text-center",attrs:{cols:"12"}},[t(o.a,{attrs:{color:"primary",type:"submit"}},[e._v("Add")])],1)],1)],1)],1),e._v(" "),t(m.a,{attrs:{width:"300"},model:{value:e.markdown,callback:function(t){e.markdown=t},expression:"markdown"}},[t(l.a,[t(c.d,{staticClass:"d-flex justify-space-between"},[e._v("\n                    Preview\n                    "),t(o.a,{attrs:{icon:""},on:{click:function(t){e.markdown=!1}}},[t(h.a,[e._v("mdi-close")])],1)],1),e._v(" "),t(c.c,[t("Markdown",{attrs:{text:e.program.description}})],1)],1)],1)],1)]),e._v(" "),t(w.a,{staticClass:"pt-2",attrs:{step:"2"}},[t("form",{on:{submit:function(t){return t.preventDefault(),e.addbg.apply(null,arguments)}}},[t(l.a,[t(c.d,[e._v("\n          Add Background\n        ")]),e._v(" "),t(c.c,[t(f.a,[e.bg.url?t(d.a,{staticClass:"d-flex justify-center",attrs:{cols:"12"}},[t(x.a),e._v(" "),t(v.a,{attrs:{src:e.bg.url?e.bg.url:"",height:"200",width:"200"}}),e._v(" "),t(x.a)],1):t(d.a,{staticClass:"d-flex justify-center",attrs:{cols:"12"}},[t(y.a,{attrs:{width:"200",height:"200",color:"grey"}})],1),e._v(" "),t(d.a,{staticClass:"text-center",attrs:{cols:"12"}},[t(o.a,{attrs:{color:"secondary"},on:{click:function(t){return e.$refs.bg.click()}}},[t(h.a,{staticClass:"mr-2",attrs:{small:""}},[e._v("mdi-camera")]),e._v(" "+e._s(e.bg.url?"Change":"Select"))],1),e._v(" "),t("input",{ref:"bg",attrs:{id:"bg",type:"file",name:"bg",hidden:"",required:""},on:{change:e.inputChange}})],1),e._v(" "),e.bg.url?t(d.a,{staticClass:"text-center",attrs:{cols:"12"}},[t(o.a,{attrs:{color:"primary",outlined:"",type:"submit"}},[e._v("Submit")])],1):e._e()],1)],1)],1),e._v(" "),t(m.a,{attrs:{width:"300"},model:{value:e.markdown,callback:function(t){e.markdown=t},expression:"markdown"}},[t(l.a,[t(c.d,{staticClass:"d-flex justify-space-between"},[e._v("\n                    Preview\n                    "),t(o.a,{attrs:{icon:""},on:{click:function(t){e.markdown=!1}}},[t(h.a,[e._v("mdi-close")])],1)],1),e._v(" "),t(c.c,[t("Markdown",{attrs:{text:e.program.description}})],1)],1)],1)],1)])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},616:function(e,t,n){"use strict";n.r(t);var r=n(111),o=n(101),l=n(81),c=n(354),d=n(541),m=n(353),h=n(600),v=n(110),f=n(571),_=n(352),y=n(528),x=n(247),k=n(164),w=(n(18),n(7),n(30),n(258),n(29)),S=(n(47),n(43),n(67),n(91),{name:"AddScopeComponent",props:{close:{type:Function,default:function(){return console.log("")}},update:{type:Function,default:function(){return console.log("")}}},data:function(){return{loading:!1,mainscope:{tags:[],type:"",severity:"",bounty:!1,out:!1,domain:""},scopetypes:[{val:"1",name:"CIDR"},{val:"2",name:"Domain"},{val:"3",name:"iOS: App Store"},{val:"4",name:"iOS: Testflight"},{val:"5",name:"iOS: .ipa"},{val:"6",name:"Android: Play Store"},{val:"7",name:"Android: .apk"},{val:"8",name:"Windows: Microsoft Store"},{val:"9",name:"Source Code"},{val:"10",name:"Executable"},{val:"11",name:"Hardware/IoT"},{val:"12",name:"Other"}],severities:[{val:"C",name:"Critical"},{val:"H",name:"High"},{val:"M",name:"Medium"},{val:"L",name:"Low"},{val:"N",name:"None"}],existingtags:[],search:null}},methods:{addscope:function(){var e=this;return Object(w.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,e.$axios.post("/app/main/scopes",e.mainscope);case 4:(n=t.sent).data.error||(e.update(n.data.scopes),e.mainscope={tags:[],type:"",severity:"",bounty:!1,out:!1,domain:""},e.close()),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),e.loading=!1;case 12:case"end":return t.stop()}}),t,null,[[1,8]])})))()},filter:function(e,t,n){if(e.label)return!1;var q=t.toString().toLowerCase();return n.toString().toLowerCase().includes(q)}}}),C=n(162),component=Object(C.a)(S,(function(){var e=this,t=e._self._c;return t("div",[t("form",{on:{submit:function(t){return t.preventDefault(),e.addscope.apply(null,arguments)}}},[t(o.a,{attrs:{loading:e.mainscope.loading}},[t(l.d,{staticClass:"d-flex justify-space-between"},[e._v("\n        Add Scope\n        "),t(r.a,{attrs:{icon:""},on:{click:e.close}},[t(v.a,[e._v("mdi-close")])],1)],1),e._v(" "),t(l.c,[t(_.a,{staticClass:"mt-2"},[t(m.a,{attrs:{cols:"12"}},[t(y.a,{attrs:{items:e.scopetypes,"item-text":"name","item-value":"val",outlined:"",placeholder:"Scope Type","hide-details":"",required:""},model:{value:e.mainscope.type,callback:function(t){e.$set(e.mainscope,"type",t)},expression:"mainscope.type"}})],1),e._v(" "),t(m.a,{attrs:{cols:"12"}},[t(k.a,{attrs:{outlined:"",placeholder:"Domain/Environment","hide-details":"",required:""},model:{value:e.mainscope.domain,callback:function(t){e.$set(e.mainscope,"domain",t)},expression:"mainscope.domain"}})],1),e._v(" "),t(m.a,{attrs:{cols:"6"}},[t(c.a,{staticClass:"mt-0",attrs:{label:"Bounty Eligible","hide-details":""},model:{value:e.mainscope.bounty,callback:function(t){e.$set(e.mainscope,"bounty",t)},expression:"mainscope.bounty"}})],1),e._v(" "),t(m.a,{attrs:{cols:"6"}},[t(c.a,{staticClass:"mt-0",attrs:{label:"Out of Scope","hide-details":""},model:{value:e.mainscope.out,callback:function(t){e.$set(e.mainscope,"out",t)},expression:"mainscope.out"}})],1),e._v(" "),t(m.a,{attrs:{cols:"12"}},[t(y.a,{attrs:{items:e.severities,"item-text":"name","item-value":"val",outlined:"",placeholder:"Severity","hide-details":"",required:""},model:{value:e.mainscope.severity,callback:function(t){e.$set(e.mainscope,"severity",t)},expression:"mainscope.severity"}})],1),e._v(" "),t(m.a,{attrs:{cols:"12"}},[t(h.a,{attrs:{filter:e.filter,"hide-no-data":!e.search,items:e.existingtags,"search-input":e.search,"hide-selected":"",label:"Add Tags",multiple:"","small-chips":"",outlined:""},on:{"update:searchInput":function(t){e.search=t},"update:search-input":function(t){e.search=t}},scopedSlots:e._u([{key:"no-data",fn:function(){return[t(f.a,[t("small",{staticClass:"mr-2"},[e._v("Create")]),t(d.a,{attrs:{color:"info",label:"",outlined:"",small:""}},[e._v(" "+e._s(e.search)+" ")])],1)]},proxy:!0},{key:"selection",fn:function(n){var r=n.attrs,o=n.item,l=n.parent,c=n.selected;return[o.label?e._e():t(d.a,e._b({attrs:{color:"".concat(o.color," lighten-3"),"input-value":c,label:"",small:""}},"v-chip",r,!1),[t("span",{staticClass:"pr-2"},[e._v(" "+e._s(o)+" ")]),t(v.a,{attrs:{small:""},on:{click:function(e){return l.selectItem(o)}}},[e._v("$delete")])],1)]}},{key:"item",fn:function(n){var r=n.index,o=n.item;return[t(d.a,{key:r,attrs:{color:"".concat(o.color," lighten-3"),dark:"",label:"",small:""}},[e._v(" "+e._s(o)+" ")]),e._v(" "),t(x.a)]}}]),model:{value:e.mainscope.tags,callback:function(t){e.$set(e.mainscope,"tags",t)},expression:"mainscope.tags"}})],1)],1)],1),e._v(" "),t(l.a,{staticClass:"justify-center pb-4"},[t(r.a,{attrs:{outlined:"",color:"secondary",type:"submit",disabled:e.mainscope.loading}},[e._v("Add")])],1)],1)],1)])}),[],!1,null,null,null);t.default=component.exports},617:function(e,t,n){"use strict";n.r(t);var r=n(111),o=n(101),l=n(81),c=n(354),d=n(541),m=n(353),h=n(600),v=n(246),f=n(598),_=n(110),y=n(571),x=n(588),k=n(590),w=n(499),S=n(352),C=n(528),O=n(247),I=n(164),$=(n(18),n(7),n(30),n(258),n(29)),j=(n(91),n(47),n(36),n(43),n(67),{name:"EditScopeComponent",props:{close:{type:Function,default:function(){return console.log("")}},update:{type:Function,default:function(){return console.log("")}},scope:{type:Object,default:function(){return{tags:[],type:"",severity:"",bounty:!1,out:!1,domain:""}}}},data:function(){return{loading:!1,mainscope:this.scope,post:{},scopetypes:[{val:"1",name:"CIDR"},{val:"2",name:"Domain"},{val:"3",name:"iOS: App Store"},{val:"4",name:"iOS: Testflight"},{val:"5",name:"iOS: .ipa"},{val:"6",name:"Android: Play Store"},{val:"7",name:"Android: .apk"},{val:"8",name:"Windows: Microsoft Store"},{val:"9",name:"Source Code"},{val:"10",name:"Executable"},{val:"11",name:"Hardware/IoT"},{val:"12",name:"Other"}],severities:[{val:"C",name:"Critical"},{val:"H",name:"High"},{val:"M",name:"Medium"},{val:"L",name:"Low"},{val:"N",name:"None"}],existingtags:[],search:null,editscopemodal:!1}},methods:{editscope:function(){var e=this;return Object($.a)(regeneratorRuntime.mark((function t(){var i,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(e.loading=!0,e.post=e.mainscope,i=0;i<e.scopetypes.length;i++)e.mainscope.type===e.scopetypes[i].name&&(e.post.type=e.scopetypes[i].val);return t.prev=3,t.next=6,e.$axios.post("/app/main/scope/"+e.mainscope.id,e.post);case 6:(n=t.sent).data.error||(e.$nuxt.$emit("refresh"),e.mainscope=n.data.scope,e.editscopemodal=!1,e.loading=!1),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(3),console.log(t.t0),e.loading=!1;case 14:case"end":return t.stop()}}),t,null,[[3,10]])})))()},deletescope:function(){var e=this;return Object($.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,e.$axios.get("/app/main/scope/"+e.mainscope.id);case 4:t.sent.data.error||e.$nuxt.$emit("refresh"),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),e.loading=!1;case 12:case"end":return t.stop()}}),t,null,[[1,8]])})))()},filter:function(e,t,n){if(e.label)return!1;var q=t.toString().toLowerCase();return n.toString().toLowerCase().includes(q)}}}),A=n(162),component=Object(A.a)(j,(function(){var e=this,t=e._self._c;return t("div",[t(f.a,{scopedSlots:e._u([{key:"default",fn:function(n){var o=n.hover;return[t(y.a,{attrs:{disabled:e.loading}},[t(k.a,[t(_.a,{attrs:{dark:"",color:e.scope.bounty?"success":"error"}},[e._v(" "+e._s(e.scope.bounty?"mdi-currency-usd":"mdi-currency-usd-off")+" ")])],1),e._v(" "),t(w.b,[t(w.d,[e._v(e._s(e.scope.type))]),e._v(" "),t(w.c,[e._v(e._s(e.scope.domain))])],1),e._v(" "),t(k.a,{class:{"hide-btns":o}},[e._v("\n          "+e._s(e.scope.severity)+"\n      ")]),e._v(" "),t(x.a,{class:{"show-btns":o},staticStyle:{display:"none"}},[t(r.a,{attrs:{icon:"",color:"info"},on:{click:function(t){e.editscopemodal=!0}}},[t(_.a,[e._v("mdi-pencil")])],1),e._v(" "),t(r.a,{attrs:{icon:"",color:"info"},on:{click:e.deletescope}},[t(_.a,[e._v("mdi-delete")])],1)],1)],1)]}}])}),e._v(" "),t(v.a,{attrs:{width:"400"},model:{value:e.editscopemodal,callback:function(t){e.editscopemodal=t},expression:"editscopemodal"}},[t("form",{on:{submit:function(t){return t.preventDefault(),e.editscope.apply(null,arguments)}}},[t(o.a,{attrs:{loading:e.mainscope.loading}},[t(l.d,{staticClass:"d-flex justify-space-between"},[e._v("\n          Edit Scope\n          "),t(r.a,{attrs:{icon:""},on:{click:function(t){e.editscopemodal=!1}}},[t(_.a,[e._v("mdi-close")])],1)],1),e._v(" "),t(l.c,[t(S.a,{staticClass:"mt-2"},[t(m.a,{attrs:{cols:"12"}},[t(C.a,{attrs:{items:e.scopetypes,"item-text":"name","item-value":"name",outlined:"",placeholder:"Scope Type","hide-details":"",required:""},model:{value:e.mainscope.type,callback:function(t){e.$set(e.mainscope,"type",t)},expression:"mainscope.type"}})],1),e._v(" "),t(m.a,{attrs:{cols:"12"}},[t(I.a,{attrs:{outlined:"",placeholder:"Domain/Environment","hide-details":"",required:""},model:{value:e.mainscope.domain,callback:function(t){e.$set(e.mainscope,"domain",t)},expression:"mainscope.domain"}})],1),e._v(" "),t(m.a,{attrs:{cols:"6"}},[t(c.a,{staticClass:"mt-0",attrs:{label:"Bounty Eligible","hide-details":""},model:{value:e.mainscope.bounty,callback:function(t){e.$set(e.mainscope,"bounty",t)},expression:"mainscope.bounty"}})],1),e._v(" "),t(m.a,{attrs:{cols:"6"}},[t(c.a,{staticClass:"mt-0",attrs:{label:"Out of Scope","hide-details":""},model:{value:e.mainscope.out,callback:function(t){e.$set(e.mainscope,"out",t)},expression:"mainscope.out"}})],1),e._v(" "),t(m.a,{attrs:{cols:"12"}},[t(C.a,{attrs:{items:e.severities,"item-text":"name","item-value":"val",outlined:"",placeholder:"Severity","hide-details":"",required:""},model:{value:e.mainscope.severity,callback:function(t){e.$set(e.mainscope,"severity",t)},expression:"mainscope.severity"}})],1),e._v(" "),t(m.a,{attrs:{cols:"12"}},[t(h.a,{attrs:{filter:e.filter,"hide-no-data":!e.search,items:e.existingtags,"search-input":e.search,"hide-selected":"",label:"Add Tags",multiple:"","small-chips":"",outlined:""},on:{"update:searchInput":function(t){e.search=t},"update:search-input":function(t){e.search=t}},scopedSlots:e._u([{key:"no-data",fn:function(){return[t(y.a,[t("small",{staticClass:"mr-2"},[e._v("Create")]),t(d.a,{attrs:{color:"info",label:"",outlined:"",small:""}},[e._v(" "+e._s(e.search)+" ")])],1)]},proxy:!0},{key:"selection",fn:function(n){var r=n.attrs,o=n.item,l=n.parent,c=n.selected;return[o.label?e._e():t(d.a,e._b({attrs:{color:"".concat(o.color," lighten-3"),"input-value":c,label:"",small:""}},"v-chip",r,!1),[t("span",{staticClass:"pr-2"},[e._v(" "+e._s(o)+" ")]),t(_.a,{attrs:{small:""},on:{click:function(e){return l.selectItem(o)}}},[e._v("$delete")])],1)]}},{key:"item",fn:function(n){var r=n.index,o=n.item;return[t(d.a,{key:r,attrs:{color:"".concat(o.color," lighten-3"),dark:"",label:"",small:""}},[e._v(" "+e._s(o)+" ")]),e._v(" "),t(O.a)]}}]),model:{value:e.mainscope.tags,callback:function(t){e.$set(e.mainscope,"tags",t)},expression:"mainscope.tags"}})],1)],1)],1),e._v(" "),t(l.a,{staticClass:"justify-center pb-4"},[t(r.a,{attrs:{outlined:"",color:"secondary",type:"submit",disabled:e.mainscope.loading}},[e._v("Save")])],1)],1)],1)])],1)}),[],!1,null,"520cb274",null);t.default=component.exports},697:function(e,t,n){"use strict";n.r(t);var r=n(111),o=n(101),l=n(81),c=n(353),d=n(246),m=n(110),h=n(589),v=n(352),f=n(29),_=(n(91),n(615)),y=n(616),x=n(617),k={name:"ProgramAddPage",components:{AddProgram:_.default,AddScope:y.default,Scope:x.default},asyncData:function(e){return Object(f.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$axios,t.prev=1,t.next=4,n.get("/app/main/scopes");case 4:return r=t.sent,t.abrupt("return",{scopes:r.data.scopes,users:r.data.users});case 8:return t.prev=8,t.t0=t.catch(1),console.log(t.t0),t.abrupt("return",{scopes:[],users:[]});case 12:case"end":return t.stop()}}),t,null,[[1,8]])})))()},data:function(){return{scopes:this.scopes,scopemodal:!1,addscopemodal:!1,loading:!1,editscopemodal:!1,mainscope:{},users:this.users}},head:function(){return{title:"Add Program"}},methods:{closeaddmodal:function(){this.addscopemodal=!1},closeeditmodal:function(){this.editscopemodal=!1},updatescopes:function(e){this.scopes=e}}},w=n(162),component=Object(w.a)(k,(function(){var e=this,t=e._self._c;return t("div",[t(v.a,[t(c.a,{attrs:{cols:"12",align:"right"}},[t(r.a,{attrs:{outlined:"",color:"success"},on:{click:function(t){e.scopemodal=!0}}},[t(m.a,{staticClass:"mr-2",attrs:{small:""}},[e._v("mdi-eye")]),e._v("View Scopes")],1)],1)],1),e._v(" "),t(v.a,[t(c.a,{staticClass:"text-centerc",attrs:{cols:"12",sm:"12"}},[t("AddProgram",{attrs:{scs:e.scopes,users:e.users}})],1)],1),e._v(" "),t(d.a,{attrs:{width:"400"},model:{value:e.scopemodal,callback:function(t){e.scopemodal=t},expression:"scopemodal"}},[t(o.a,[t(l.d,{staticClass:"d-flex justify-space-between"},[e._v("\n        Your Scopes\n        "),t(r.a,{attrs:{icon:""},on:{click:function(t){e.scopemodal=!1}}},[t(m.a,[e._v("mdi-close")])],1)],1),e._v(" "),t(h.a,e._l(e.scopes,(function(e,i){return t("div",{key:i},[t("Scope",{attrs:{scope:e}})],1)})),0),e._v(" "),t(l.a,{staticClass:"text-center"},[t(r.a,{attrs:{outlined:"",color:"info"},on:{click:function(t){e.addscopemodal=!0}}},[e._v("Add")])],1)],1)],1),e._v(" "),t(d.a,{attrs:{width:"400"},model:{value:e.addscopemodal,callback:function(t){e.addscopemodal=t},expression:"addscopemodal"}},[t("AddScope",{attrs:{close:e.closeaddmodal,update:e.updatescopes}})],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);
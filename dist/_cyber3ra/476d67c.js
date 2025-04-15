(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{517:function(e,t,n){e.exports={}},538:function(e,t,n){"use strict";n(14),n(20),n(21),n(16),n(15);var l=n(4),o=(n(18),n(103),n(249),n(47),n(72),n(7),n(67),n(102),n(517),n(528)),r=n(164),c=n(63),h=n(2);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=m(m({},o.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});t.a=o.a.extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,n){return n.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:o.a.options.props.menuProps.type,default:function(){return f}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return m(m({},o.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var n=Object(h.q)(t,e.itemText),text=null!=n?String(n):"";return e.filter(t,String(e.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=o.a.options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),m(m({},f),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(i){return e.valueComparator(e.getValue(i),e.getValue(e.internalValue))}))},listData:function(){var data=o.a.options.computed.listData.call(this);return data.props=m(m({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=null)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var n=this;if(e!==t){if(!this.autoSelectFirst){var l=t[this.$refs.menu.listIndex];l?this.setMenuIndex(e.findIndex((function(i){return i===l}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===e.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&e.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===h.w.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===h.w.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==h.w.backspace&&e!==h.w.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var l=e!==this.selectedItems.length-1?e:e-1;this.selectedItems[l]?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=l}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,o.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=r.a.options.methods.genInput.call(this);return input.data=Object(c.a)(input.data,{attrs:{"aria-activedescendant":Object(h.o)(this.$refs.menu,"activeTile.id"),autocomplete:Object(h.o)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=o.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?o.a.options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,n=t.value;t.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[h.w.home,h.w.end].includes(t)||o.a.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){o.a.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){o.a.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){o.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var t,n;if(-1!==this.selectedIndex){var l=this.selectedItems[this.selectedIndex],o=this.getText(l);null===(t=e.clipboardData)||void 0===t||t.setData("text/plain",o),null===(n=e.clipboardData)||void 0===n||n.setData("text/vnd.vuetify.autocomplete.item+plain",o),e.preventDefault()}}}})},600:function(e,t,n){"use strict";var l=n(19),o=n(4),r=(n(14),n(18),n(103),n(249),n(47),n(50),n(254),n(36),n(7),n(20),n(21),n(16),n(43),n(262),n(15),n(67),n(517),n(528)),c=n(538),h=n(2);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=c.a.extend({name:"v-combobox",props:{delimiters:{type:Array,default:function(){return[]}},returnObject:{type:Boolean,default:!0}},data:function(){return{editingIndex:-1}},computed:{computedCounterValue:function(){return this.multiple?this.selectedItems.length:(this.internalSearch||"").toString().length},hasSlot:function(){return r.a.options.computed.hasSlot.call(this)||this.multiple},isAnyValueAllowed:function(){return!0},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!!this.$slots["no-data"]&&!this.hideNoData)},searchIsDirty:function(){return null!=this.internalSearch}},methods:{onInternalSearchChanged:function(e){if(e&&this.multiple&&this.delimiters.length){var t=this.delimiters.find((function(t){return e.endsWith(t)}));null!=t&&(this.internalSearch=e.slice(0,e.length-t.length),this.updateTags())}this.updateMenuDimensions()},genInput:function(){var input=c.a.options.methods.genInput.call(this);return delete input.data.attrs.name,input.data.on.paste=this.onPaste,input},genChipSelection:function(e,t){var n=this,l=r.a.options.methods.genChipSelection.call(this,e,t);return this.multiple&&(l.componentOptions.listeners=m(m({},l.componentOptions.listeners),{},{dblclick:function(){n.editingIndex=t,n.internalSearch=n.getText(e),n.selectedIndex=-1}})),l},onChipInput:function(e){r.a.options.methods.onChipInput.call(this,e),this.editingIndex=-1},onEnterDown:function(e){e.preventDefault(),this.getMenuIndex()>-1||this.$nextTick(this.updateSelf)},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[h.w.home,h.w.end].includes(t)||r.a.options.methods.onKeyDown.call(this,e),this.multiple&&t===h.w.left&&0===this.$refs.input.selectionStart?this.updateSelf():t===h.w.enter&&this.onEnterDown(e),this.changeSelectedIndex(t)},onTabDown:function(e){if(this.multiple&&this.internalSearch&&-1===this.getMenuIndex())return e.preventDefault(),e.stopPropagation(),this.updateTags();c.a.options.methods.onTabDown.call(this,e)},selectItem:function(e){this.editingIndex>-1?this.updateEditing():(c.a.options.methods.selectItem.call(this,e),this.internalSearch&&this.multiple&&this.getText(e).toLocaleLowerCase().includes(this.internalSearch.toLocaleLowerCase())&&(this.internalSearch=null))},setSelectedItems:function(){null==this.internalValue||""===this.internalValue?this.selectedItems=[]:this.selectedItems=this.multiple?this.internalValue:[this.internalValue]},setValue:function(e){r.a.options.methods.setValue.call(this,void 0===e?this.internalSearch:e)},updateEditing:function(){var e=this,t=this.internalValue.slice(),n=this.selectedItems.findIndex((function(t){return e.getText(t)===e.internalSearch}));if(n>-1){var o="object"===Object(l.a)(t[n])?Object.assign({},t[n]):t[n];t.splice(n,1),t.push(o)}else t[this.editingIndex]=this.internalSearch;this.setValue(t),this.editingIndex=-1,this.internalSearch=null},updateCombobox:function(){this.searchIsDirty&&(this.internalSearch!==this.getText(this.internalValue)&&this.setValue(),(Boolean(this.$scopedSlots.selection)||this.hasChips)&&(this.internalSearch=null))},updateSelf:function(){this.multiple?this.updateTags():this.updateCombobox()},updateTags:function(){var e=this,t=this.getMenuIndex();if(!(t<0&&!this.searchIsDirty||!this.internalSearch)){if(this.editingIndex>-1)return this.updateEditing();var n=this.selectedItems.findIndex((function(t){return e.internalSearch===e.getText(t)})),o=n>-1&&"object"===Object(l.a)(this.selectedItems[n])?Object.assign({},this.selectedItems[n]):this.internalSearch;if(n>-1){var r=this.internalValue.slice();r.splice(n,1),this.setValue(r)}if(t>-1)return this.internalSearch=null;this.selectItem(o),this.internalSearch=null}},onPaste:function(e){var t;if(this.$emit("paste",e),this.multiple&&!this.searchIsDirty){var n=null===(t=e.clipboardData)||void 0===t?void 0:t.getData("text/vnd.vuetify.autocomplete.item+plain");n&&-1===this.findExistingIndex(n)&&(e.preventDefault(),r.a.options.methods.selectItem.call(this,n))}},clearableCallback:function(){this.editingIndex=-1,c.a.options.methods.clearableCallback.call(this)}}})},616:function(e,t,n){"use strict";n.r(t);var l=n(111),o=n(101),r=n(81),c=n(354),h=n(541),d=n(353),m=n(600),f=n(110),v=n(571),I=n(352),S=n(528),y=n(247),x=n(164),D=(n(18),n(7),n(30),n(258),n(29)),w=(n(47),n(43),n(67),n(91),{name:"AddScopeComponent",props:{close:{type:Function,default:function(){return console.log("")}},update:{type:Function,default:function(){return console.log("")}}},data:function(){return{loading:!1,mainscope:{tags:[],type:"",severity:"",bounty:!1,out:!1,domain:""},scopetypes:[{val:"1",name:"CIDR"},{val:"2",name:"Domain"},{val:"3",name:"iOS: App Store"},{val:"4",name:"iOS: Testflight"},{val:"5",name:"iOS: .ipa"},{val:"6",name:"Android: Play Store"},{val:"7",name:"Android: .apk"},{val:"8",name:"Windows: Microsoft Store"},{val:"9",name:"Source Code"},{val:"10",name:"Executable"},{val:"11",name:"Hardware/IoT"},{val:"12",name:"Other"}],severities:[{val:"C",name:"Critical"},{val:"H",name:"High"},{val:"M",name:"Medium"},{val:"L",name:"Low"},{val:"N",name:"None"}],existingtags:[],search:null}},methods:{addscope:function(){var e=this;return Object(D.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,e.$axios.post("/app/main/scopes",e.mainscope);case 4:(n=t.sent).data.error||(e.update(n.data.scopes),e.mainscope={tags:[],type:"",severity:"",bounty:!1,out:!1,domain:""},e.close()),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),e.loading=!1;case 12:case"end":return t.stop()}}),t,null,[[1,8]])})))()},filter:function(e,t,n){if(e.label)return!1;var q=t.toString().toLowerCase();return n.toString().toLowerCase().includes(q)}}}),O=n(162),component=Object(O.a)(w,(function(){var e=this,t=e._self._c;return t("div",[t("form",{on:{submit:function(t){return t.preventDefault(),e.addscope.apply(null,arguments)}}},[t(o.a,{attrs:{loading:e.mainscope.loading}},[t(r.d,{staticClass:"d-flex justify-space-between"},[e._v("\n        Add Scope\n        "),t(l.a,{attrs:{icon:""},on:{click:e.close}},[t(f.a,[e._v("mdi-close")])],1)],1),e._v(" "),t(r.c,[t(I.a,{staticClass:"mt-2"},[t(d.a,{attrs:{cols:"12"}},[t(S.a,{attrs:{items:e.scopetypes,"item-text":"name","item-value":"val",outlined:"",placeholder:"Scope Type","hide-details":"",required:""},model:{value:e.mainscope.type,callback:function(t){e.$set(e.mainscope,"type",t)},expression:"mainscope.type"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12"}},[t(x.a,{attrs:{outlined:"",placeholder:"Domain/Environment","hide-details":"",required:""},model:{value:e.mainscope.domain,callback:function(t){e.$set(e.mainscope,"domain",t)},expression:"mainscope.domain"}})],1),e._v(" "),t(d.a,{attrs:{cols:"6"}},[t(c.a,{staticClass:"mt-0",attrs:{label:"Bounty Eligible","hide-details":""},model:{value:e.mainscope.bounty,callback:function(t){e.$set(e.mainscope,"bounty",t)},expression:"mainscope.bounty"}})],1),e._v(" "),t(d.a,{attrs:{cols:"6"}},[t(c.a,{staticClass:"mt-0",attrs:{label:"Out of Scope","hide-details":""},model:{value:e.mainscope.out,callback:function(t){e.$set(e.mainscope,"out",t)},expression:"mainscope.out"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12"}},[t(S.a,{attrs:{items:e.severities,"item-text":"name","item-value":"val",outlined:"",placeholder:"Severity","hide-details":"",required:""},model:{value:e.mainscope.severity,callback:function(t){e.$set(e.mainscope,"severity",t)},expression:"mainscope.severity"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12"}},[t(m.a,{attrs:{filter:e.filter,"hide-no-data":!e.search,items:e.existingtags,"search-input":e.search,"hide-selected":"",label:"Add Tags",multiple:"","small-chips":"",outlined:""},on:{"update:searchInput":function(t){e.search=t},"update:search-input":function(t){e.search=t}},scopedSlots:e._u([{key:"no-data",fn:function(){return[t(v.a,[t("small",{staticClass:"mr-2"},[e._v("Create")]),t(h.a,{attrs:{color:"info",label:"",outlined:"",small:""}},[e._v(" "+e._s(e.search)+" ")])],1)]},proxy:!0},{key:"selection",fn:function(n){var l=n.attrs,o=n.item,r=n.parent,c=n.selected;return[o.label?e._e():t(h.a,e._b({attrs:{color:"".concat(o.color," lighten-3"),"input-value":c,label:"",small:""}},"v-chip",l,!1),[t("span",{staticClass:"pr-2"},[e._v(" "+e._s(o)+" ")]),t(f.a,{attrs:{small:""},on:{click:function(e){return r.selectItem(o)}}},[e._v("$delete")])],1)]}},{key:"item",fn:function(n){var l=n.index,o=n.item;return[t(h.a,{key:l,attrs:{color:"".concat(o.color," lighten-3"),dark:"",label:"",small:""}},[e._v(" "+e._s(o)+" ")]),e._v(" "),t(y.a)]}}]),model:{value:e.mainscope.tags,callback:function(t){e.$set(e.mainscope,"tags",t)},expression:"mainscope.tags"}})],1)],1)],1),e._v(" "),t(r.a,{staticClass:"justify-center pb-4"},[t(l.a,{attrs:{outlined:"",color:"secondary",type:"submit",disabled:e.mainscope.loading}},[e._v("Add")])],1)],1)],1)])}),[],!1,null,null,null);t.default=component.exports}}]);
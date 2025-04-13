(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{564:function(t,e,r){"use strict";r(35),r(18),r(16),r(7),r(92),r(360),r(262),r(117),r(103);var n=r(3);var c,o=r(66);e.a=(c="container",n.a.extend({name:"v-".concat(c),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var r=e.props,data=e.data,n=e.children;data.staticClass="".concat(c," ").concat(data.staticClass||"").trim();var o=data.attrs;if(o){data.attrs={};var l=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,data,n)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,n=e.props,data=e.data,c=e.children,l=data.attrs;return l&&(data.attrs={},r=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,Object(o.a)(data,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(r||[])}),c)}})},591:function(t,e,r){t.exports={}},632:function(t,e,r){"use strict";r(591)},678:function(t,e,r){"use strict";r.r(e);var n=r(112),c=r(102),o=r(82),l=r(356),d=r(564),f=r(111),h=r(355),m=r(164),v=(r(14),r(69),r(32),r(27)),w=r(29),k=(r(73),r(366),r(91),r(155)),_=r.n(k),y={name:"ChallengeQuestions",data:function(){return{challenge:{},questions:[],userAnswers:{}}},created:function(){this.fetchChallengeQuestions()},methods:{fetchChallengeQuestions:function(){var t=this;return Object(w.a)(regeneratorRuntime.mark((function e(){var r,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$route.params.challengeId,n=localStorage.getItem("token"),e.prev=2,e.next=5,_.a.get("https://cyback.onrender.com/api/challenges/".concat(r,"/questions/"),{headers:{Authorization:"Bearer ".concat(n)}});case 5:c=e.sent,t.challenge=c.data.challenge,t.questions=c.data.questions,e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),console.error("Error fetching challenge questions:",e.t0),alert("Failed to fetch questions. Please check your authentication.");case 14:case"end":return e.stop()}}),e,null,[[2,10]])})))()},submitAnswers:function(){var t=this;return Object(w.a)(regeneratorRuntime.mark((function e(){var r,n,c,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$route.params.challengeId,n=Object.entries(t.userAnswers).map((function(t){var e=Object(v.a)(t,2);return{questionId:e[0],answer:e[1]}})),c=localStorage.getItem("token"),e.prev=3,e.next=6,_.a.post("https://cyback.onrender.com/api/challenges/".concat(r,"/submit-answers/"),{answers:n},{headers:{Authorization:"Bearer ".concat(c)}});case 6:o=e.sent,alert(o.data.message),t.$router.push("/ctf"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),console.error("Error submitting answers:",e.t0),alert("Failed to submit answers. Please try again.");case 15:case"end":return e.stop()}}),e,null,[[3,11]])})))()}}},C=(r(632),r(162)),component=Object(C.a)(y,(function(){var t=this,e=t._self._c;return e(d.a,{staticClass:"ctf-container",attrs:{fluid:""}},[e(h.a,{staticClass:"mb-4",attrs:{align:"center"}},[e(l.a,{attrs:{cols:"8"}},[e("h1",{staticClass:"d-flex align-center"},[e(f.a,{staticClass:"mr-2",attrs:{large:""}},[t._v("mdi-flag-checkered")]),t._v("\n        Questions for Challenge: "+t._s(t.challenge.name)+"\n      ")],1)])],1),t._v(" "),e(h.a,[e(l.a,{attrs:{cols:"12"}},[t._l(t.questions,(function(r){return e(c.a,{key:r.id,staticClass:"mb-3"},[e(o.d,[t._v(t._s(r.title))]),t._v(" "),e(o.c,[e("p",[t._v(t._s(r.description))]),t._v(" "),e(m.a,{attrs:{label:"Your Answer",outlined:""},model:{value:t.userAnswers[r.id],callback:function(e){t.$set(t.userAnswers,r.id,e)},expression:"userAnswers[question.id]"}})],1)],1)})),t._v(" "),e(n.a,{attrs:{color:"success"},on:{click:t.submitAnswers}},[t._v("Submit Answers")])],2)],1)],1)}),[],!1,null,"c2abb456",null);e.default=component.exports}}]);
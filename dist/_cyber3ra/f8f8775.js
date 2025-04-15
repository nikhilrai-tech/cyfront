(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{592:function(e,t,r){e.exports={}},642:function(e,t,r){"use strict";r(592)},677:function(e,t,r){"use strict";r.r(t);var n=r(111),o=r(101),c=r(81),l=r(541),d=r(353),h=r(560),v=r(672),f=r(110),_=r(236),m=r(352),w=(r(14),r(68),r(36),r(29)),k=(r(91),r(18),r(72),r(7),r(48),r(49),r(536),r(356),r(155)),C=r.n(k),x={name:"CTF",data:function(){return{activeChallenges:[],upcomingChallenges:[],leaderboardHeaders:[{text:"Rank",value:"rank"},{text:"Name",value:"name"},{text:"Points",value:"points"},{text:"Challenges Solved",value:"challenges_solved"}],leaderboard:[],userStats:{username:"",points:0,challenges_solved:0},certificates:[]}},mounted:function(){var e=this;this.fetchChallenges(),this.fetchLeaderboard(),this.fetchUserStats(),this.fetchCertificates().then((function(){console.log("Certificates:",e.certificates)}))},methods:{fetchChallenges:function(){var e=this;return Object(w.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C.a.get("https://cyback.onrender.com/api/challenges/");case 3:r=t.sent,n=new Date,e.activeChallenges=r.data.filter((function(e){return e.active&&new Date(e.end_date)>n})),e.upcomingChallenges=r.data.filter((function(e){return new Date(e.start_date)>n})),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.error("Error fetching challenges:",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},fetchLeaderboard:function(){var e=this;return Object(w.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C.a.get("https://cyback.onrender.com/api/leaderboard/");case 3:r=t.sent,e.leaderboard=r.data.map((function(e,t){return{rank:t+1,name:e.username,points:e.points,challenges_solved:e.challenges_solved}})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Error fetching leaderboard:",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},fetchUserStats:function(){var e=this;return Object(w.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=localStorage.getItem("token")){t.next=6;break}return alert("You need to log in to view your stats."),e.$router.push("/login"),t.abrupt("return");case 6:return t.prev=6,t.next=9,C.a.get("https://cyback.onrender.com/api/user/stats/",{headers:{Authorization:"Bearer ".concat(r)}});case 9:n=t.sent,e.userStats=n.data,t.next=16;break;case 13:t.prev=13,t.t0=t.catch(6),console.error("Error fetching user stats:",t.t0);case 16:case"end":return t.stop()}}),t,null,[[6,13]])})))()},fetchCertificates:function(){var e=this;return Object(w.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=localStorage.getItem("token")){t.next=5;break}return alert("You need to log in to view your certificates."),e.$router.push("/login"),t.abrupt("return");case 5:return t.prev=5,t.next=8,C.a.get("https://cyback.onrender.com/generate-certificate/",{headers:{Authorization:"Bearer ".concat(r)}});case 8:n=t.sent,e.certificates=n.data,t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),console.error("Error fetching certificates:",t.t0);case 15:case"end":return t.stop()}}),t,null,[[5,12]])})))()},joinChallenge:function(e){var t=this;return Object(w.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=localStorage.getItem("token")){r.next=5;break}return alert("You need to log in to join a challenge."),t.$router.push("/login"),r.abrupt("return");case 5:return r.prev=5,r.next=8,C.a.post("https://cyback.onrender.com/api/challenge/".concat(e,"/join/"),{},{headers:{Authorization:"Bearer ".concat(n)}});case 8:o=r.sent,alert(o.data.message),t.$router.push({name:"ChallengeQuestions",params:{challengeId:e}}),r.next=17;break;case 13:r.prev=13,r.t0=r.catch(5),console.error("Error joining challenge:",r.t0),alert("Failed to join challenge. Please check your authentication.");case 17:case"end":return r.stop()}}),r,null,[[5,13]])})))()},downloadCertificate:function(e){return Object(w.a)(regeneratorRuntime.mark((function t(){var r,n,link;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Downloading:",e),t.prev=1,t.next=4,fetch("https://cyback.onrender.com".concat(e));case 4:if(r=t.sent,console.log("Response status:",r.status),r.ok){t.next=8;break}throw new Error("Network response was not ok");case 8:return t.next=10,r.blob();case 10:n=t.sent,(link=document.createElement("a")).href=window.URL.createObjectURL(n),link.download=e.split("/").pop(),document.body.appendChild(link),link.click(),document.body.removeChild(link),window.URL.revokeObjectURL(link.href),t.next=23;break;case 20:t.prev=20,t.t0=t.catch(1),console.error("Error downloading the certificate:",t.t0);case 23:case"end":return t.stop()}}),t,null,[[1,20]])})))()}}},y=(r(642),r(162)),component=Object(y.a)(x,(function(){var e=this,t=e._self._c;return t(h.a,{staticClass:"ctf-container",attrs:{fluid:""}},[t(m.a,{staticClass:"mb-4",attrs:{align:"center"}},[t(d.a,{attrs:{cols:"8"}},[t("h1",{staticClass:"d-flex align-center"},[t(f.a,{staticClass:"mr-2",attrs:{large:""}},[e._v("mdi-flag-checkered")]),e._v("\n        Capture The Flag\n      ")],1)])],1),e._v(" "),t(m.a,[t(d.a,{attrs:{cols:"12"}},[t(o.a,[t(c.d,[e._v("How to Participate in CTF Challenges")]),e._v(" "),t(c.c,[t("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/_KlNzxXBoB0?si=uYwCbKnFfriFIZbM",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:""}})])],1)],1)],1),e._v(" "),t(m.a,[t(d.a,{attrs:{cols:"12"}},[t("h2",[e._v("Your Certificates")]),e._v(" "),e.certificates.length>0?t("div",[t(m.a,e._l(e.certificates,(function(r){return t(d.a,{key:r.id,attrs:{cols:"3"}},[t(o.a,{staticClass:"certificate-card"},[t(c.d,[e._v("Your Certificate for "+e._s(r.challenge_name))]),e._v(" "),t(c.c,[t("img",{staticClass:"certificate-image",attrs:{src:r.url,alt:"Certificate"}}),e._v(" "),t(n.a,{attrs:{color:"primary"},on:{click:function(t){return e.downloadCertificate(r.url)}}},[e._v("Download Certificate")])],1)],1)],1)})),1)],1):t(o.a,[t(c.d,[e._v("No Certificates Available")]),e._v(" "),t(c.c,[e._v("\n          You have not earned any certificates yet.\n        ")])],1)],1)],1),e._v(" "),t(m.a,[t(d.a,{attrs:{md:"6",cols:"12"}},[t("h2",[e._v("Active Challenges")]),e._v(" "),e._l(e.activeChallenges,(function(r){return t(o.a,{key:r.id,staticClass:"mb-3 success-border",attrs:{hover:""}},[t(c.d,[e._v(e._s(r.name))]),e._v(" "),t(c.c,[t("p",[e._v(e._s(r.description))]),e._v(" "),t("h3",{staticClass:"subtitle-1"},[e._v("Rules:")]),e._v(" "),t("p",[e._v(e._s(r.rules))])]),e._v(" "),t(c.a,[t(n.a,{attrs:{color:"success"},on:{click:function(t){return e.joinChallenge(r.id)}}},[e._v("Join Challenge")])],1)],1)}))],2),e._v(" "),t(d.a,{attrs:{md:"6",cols:"12"}},[t("h2",[e._v("Upcoming Challenges")]),e._v(" "),e._l(e.upcomingChallenges,(function(r){return t(o.a,{key:r.id,staticClass:"mb-3 grey-border",attrs:{hover:""}},[t(c.d,[e._v(e._s(r.name))]),e._v(" "),t(c.c,[t("p",[e._v(e._s(r.description))]),e._v(" "),t(l.a,{attrs:{color:"info",small:""}},[e._v("Upcoming")])],1)],1)}))],2)],1),e._v(" "),t(m.a,[t(d.a,{attrs:{md:"6",cols:"12"}},[t(o.a,[t(c.d,[e._v("Leaderboard")]),e._v(" "),t(v.a,{staticClass:"elevation-0",attrs:{headers:e.leaderboardHeaders,items:e.leaderboard,"hide-default-footer":""}})],1)],1),e._v(" "),t(d.a,{attrs:{md:"6",cols:"12"}},[t(o.a,[t(c.d,[e._v("Your Stats")]),e._v(" "),t(c.c,[t("p",[t("strong",[e._v("Username:")]),e._v(" "+e._s(e.userStats.username))]),e._v(" "),t("p",[t("strong",[e._v("Challenges Solved:")]),e._v(" "+e._s(e.userStats.challenges_solved))]),e._v(" "),t("p",[t("strong",[e._v("Total Points:")]),e._v(" "+e._s(e.userStats.points))]),e._v(" "),t(_.a,{attrs:{value:Math.min(e.userStats.challenges_solved/10*100,100),color:"success",height:"20",rounded:""},scopedSlots:e._u([{key:"default",fn:function(){return[e._v("\n              "+e._s(e.userStats.challenges_solved)+"/10\n            ")]},proxy:!0}])})],1)],1)],1)],1)],1)}),[],!1,null,"b459b718",null);t.default=component.exports}}]);
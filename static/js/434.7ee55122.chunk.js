"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[434],{9434:function(n,t,e){e.r(t),e.d(t,{default:function(){return k}});var r,a,i,u,c,o=e(9439),s=e(3623),p=e(1087),f=e(7689),d=e(2791),l=e(8354),h=e(168),x=e(6444),m=x.ZP.div(r||(r=(0,h.Z)(["\npadding: 40px;\ndisplay: flex;\nflex-direction: column;\ngap: 20px;\nmargin-bottom: 25px"]))),v=x.ZP.div(a||(a=(0,h.Z)(["\nwidth: 50%;\ndisplay: flex;\nflex-direction: column;\npadding: 15px;"]))),g=x.ZP.p(i||(i=(0,h.Z)(["\nfont-size: 18px;\nfont-weight: 400;\nline-height: 1.25;\nmargin-bottom: 15px;"]))),w=x.ZP.button(u||(u=(0,h.Z)(["\nflex-shrink: 0;\n  border-radius: 20%;\n  width: 80px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  \n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 700;\n  background-color: #8FBC8F;\n  border: 1px solid #2F4F4F;\n  cursor: pointer;\n  &:hover,\n  &:focus {\n\n    color: #2F4F4F;\n    background-color: #ecf5f0;\n  }\n"]))),b=x.ZP.img(c||(c=(0,h.Z)(["\n  width: 300px;\n  object-fit: cover;\n  object-position: center;\n  margin-bottom: 5px;\n"]))),Z=e(184),k=function(){var n=(0,d.useState)(null),t=(0,o.Z)(n,2),e=t[0],r=t[1],a=(0,f.s0)(),i=(0,f.TH)(),u=(0,f.UO)().id;if((0,d.useEffect)((function(){(0,s.TP)(u).then(r)}),[u]),!e)return null;var c=e.title,h=e.poster_path,x=e.overview,k=e.runtime;return(0,Z.jsxs)(m,{children:[(0,Z.jsx)(b,{src:l.Y+h,alt:c}),(0,Z.jsxs)(v,{children:[" ",(0,Z.jsx)("h2",{children:c}),(0,Z.jsx)(w,{type:"button",onClick:function(){a(i.state.from)},children:"Go back"}),(0,Z.jsx)("h2",{children:"Overview:"}),(0,Z.jsx)(g,{children:x}),(0,Z.jsxs)(g,{children:["RunTime: ",k," minutes "]})]}),(0,Z.jsx)(p.OL,{to:"cast",state:{from:i.state.from},children:"Cast"}),(0,Z.jsx)(p.OL,{to:"reviews",state:{from:i.state.from},children:"Reviews"}),(0,Z.jsx)(f.j3,{})]})}},3623:function(n,t,e){e.d(t,{Df:function(){return o},M1:function(){return f},TP:function(){return p},Wf:function(){return s},tx:function(){return d}});var r=e(5861),a=e(7757),i=e.n(a),u=e(1912);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="d9a0cc661b661e7359674d300e5af663",o=function(){var n=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/movie/day?",{params:{api_key:c,page:1}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie?&language=en-US&query=".concat(t,"&page=1&include_adult=false"),{params:{api_key:c,page:1}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"?&language=en-US"),{params:{api_key:c}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/credits?&language=en-US"),{params:{api_key:c}});case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/reviews?&language=en-US"),{params:{api_key:c}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},8354:function(n,t,e){e.d(t,{Y:function(){return r}});var r="https://image.tmdb.org/t/p/w400"}}]);
//# sourceMappingURL=434.7ee55122.chunk.js.map
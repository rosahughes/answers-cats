webpackJsonp([1],{NHnr:function(t,e,n){"use strict";function s(t){n("Q3g8")}function r(t){n("SER+")}function a(t){n("pKTf")}Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),o={name:"app"},u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("Answers and Cats")]),t._v(" "),n("router-view")],1)},c=[],l={render:u,staticRenderFns:c},p=l,f=n("VU/8"),_=s,v=f(o,p,!1,_,null,null),m=v.exports,d=n("/ocq"),h=n("mtWM"),C=n.n(h),b={name:"AskQuestion",data:function(){return{prediction:null,errors:[]}},methods:{AskQuestion:function(){var t=this;C.a.get("https://yesno.wtf/api",{params:{}}).then(function(e){t.prediction=e.data}).catch(function(e){t.errors.push(e)})}}},k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ask-question"},[n("p",[n("router-link",{attrs:{to:{name:"AskQuestion"}}},[t._v("Ask Question")]),t._v("\n      •\n      "),n("router-link",{attrs:{to:{name:"Cats"}}},[t._v("Cats")])],1),t._v(" "),n("form",{on:{submit:function(e){e.preventDefault(),t.AskQuestion(e)}}},[t._m(0)]),t._v(" "),t.prediction?n("ul",{staticClass:"prediction"},t._l(t.prediction,function(e){return n("li",{staticClass:"item"},[n("p",[n("strong",[t._v(t._s(e.word))])])])})):t.errors.length>0?n("ul",{staticClass:"errors"},t._l(t.errors,function(e){return n("li",[t._v("\n        "+t._s(e.message)+"\n      ")])})):t._e(),t._v(" "),n("div",{staticClass:"see-cat"},[n("p"),n("form",{on:{submit:function(e){e.preventDefault(),t.Cats(e)}}},[t._m(1)]),t._v(" "),n("p")])])},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Ask a question, any question! "),n("input",{attrs:{type:"text"}}),n("button",{attrs:{type:"submit"}},[t._v("Submit for Answer")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Now, do you want to see a cat? "),n("button",{attrs:{type:"submit"}},[t._v("Yes")]),t._v(" "),n("button",{attrs:{type:"submit"}},[t._v("No")])])}],A={render:k,staticRenderFns:w},g=A,Q=n("VU/8"),y=r,E=Q(b,g,!1,y,"data-v-4ff450db",null),$=E.exports,R={name:"findCats",data:function(){return{results:null,errors:[]}},methods:{findCats:function(){var t=this;C.a.get("https://www.flickr.com/services/api/",{params:{APPID:"fde5ff5837b1a0218a974201d0272c29"}}).then(function(e){t.results=e.data}).catch(function(e){t.errors.push(e)})}}},q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cats"},[n("p",[n("router-link",{attrs:{to:{name:"AskQuestion"}}},[t._v("Ask Question")]),t._v("\n    •\n    "),n("router-link",{attrs:{to:{name:"Cats"}}},[t._v("Cats")])],1),t._v(" "),n("form",{on:{submit:function(e){e.preventDefault(),t.findCats(e)}}},[n("p",[t._v("Click submit to find pictures of cats")]),t._v(" "),t._m(0)]),t._v(" "),t.results&&t.results.length>0?n("ul",{staticClass:"results"},t._l(t.results,function(e){return n("li",{staticClass:"item"},[n("p",[n("strong",[t._v(t._s(e.word))])]),t._v(" "),n("p",[t._v(t._s(e.score))])])})):t.errors.length>0?n("ul",{staticClass:"errors"},t._l(t.errors,function(e){return n("li",[t._v("\n      "+t._s(e.message)+"\n    ")])})):t._e()])},x=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("button",{attrs:{type:"submit"}},[t._v("Submit")])])}],D={render:q,staticRenderFns:x},N=D,S=n("VU/8"),F=a,P=S(R,N,!1,F,"data-v-75276546",null),T=P.exports;i.a.use(d.a);var U=new d.a({routes:[{path:"/",name:"AskQuestion",component:$},{path:"/Cats",name:"Cats",component:T}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:U,template:"<App/>",components:{App:m}})},Q3g8:function(t,e){},"SER+":function(t,e){},pKTf:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.c1dd58e80eb37bcbd84a.js.map
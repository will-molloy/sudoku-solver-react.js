(this["webpackJsonpsudoku-solver-react.js"]=this["webpackJsonpsudoku-solver-react.js"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(3),i=n.n(o),s=(n(14),n(1)),c=n.n(s),u=n(4),l=n(5),f=n(6),b=n(8),v=n(7),d=(n(16),function(e){Object(b.a)(n,e);var t=Object(v.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).state={board:n.initialBoard()},r}return Object(f.a)(n,[{key:"render",value:function(){var e=this,t=this.state.board;return a.a.createElement("div",null,a.a.createElement("table",{border:"1"},a.a.createElement("tbody",null,t.map((function(e,t){return a.a.createElement("tr",{key:t},e.map((function(e){return a.a.createElement("td",null,0===e?"":e)})))})))),a.a.createElement("button",{onClick:function(){console.log("Solving..."),e.solve().then((function(e){return e?console.log("Solved."):null}))}},"Solve"),a.a.createElement("button",{onClick:function(){console.log("Resetting..."),e.reset(),console.log("Reset.")}},"Reset"))}},{key:"reset",value:function(){this.setState({board:n.initialBoard()})}},{key:"solve",value:function(){var e=Object(u.a)(c.a.mark((function e(){var t,r,a,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.sleep(0);case 2:t=this.state.board,r=0;case 4:if(!(r<9)){e.next=32;break}a=0;case 6:if(!(a<9)){e.next=29;break}if(0===t[r][a]){e.next=9;break}return e.abrupt("continue",26);case 9:o=1;case 10:if(!(o<=9)){e.next=25;break}if(!n.isValidMove(t,r,a,o)){e.next=22;break}return t[r][a]=o,this.setState({board:t}),e.next=16,this.solve();case 16:if(!e.sent){e.next=20;break}return e.abrupt("return",!0);case 20:t[r][a]=0,this.setState({board:t});case 22:o++,e.next=10;break;case 25:return e.abrupt("return",!1);case 26:a++,e.next=6;break;case 29:r++,e.next=4;break;case 32:return e.abrupt("return",!0);case 33:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"sleep",value:function(e){return new Promise((function(t){return setTimeout(t,e)}))}}],[{key:"initialBoard",value:function(){return[[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]]}},{key:"isValidMove",value:function(e,t,n,r){for(var a=0;a<9;a++){if(e[a][n]===r)return!1;if(e[t][a]===r)return!1;if(e[3*Math.floor(t/3)+Math.floor(a/3)][3*Math.floor(n/3)+a%3]===r)return!1}return!0}}]),n}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.6d583d08.chunk.js.map
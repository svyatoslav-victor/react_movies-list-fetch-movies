(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{20:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var s=c(8),n=c.n(s),a=(c(19),c(13)),i=c(9),r=c(10),o=c(14),l=c(12),j=c(1),d=(c(20),c(21),c(22),c(0)),u=function(e){var t=e.movie;return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("div",{className:"card-image",children:Object(d.jsx)("figure",{className:"image is-4by3",children:Object(d.jsx)("img",{src:t.Poster,alt:"Film logo"})})}),Object(d.jsxs)("div",{className:"card-content",children:[Object(d.jsxs)("div",{className:"media",children:[Object(d.jsx)("div",{className:"media-left",children:Object(d.jsx)("figure",{className:"image is-48x48",children:Object(d.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(d.jsx)("div",{className:"media-content",children:Object(d.jsx)("p",{className:"title is-8",children:t.Title})})]}),Object(d.jsxs)("div",{className:"content",children:[t.Plot,Object(d.jsx)("br",{})]})]})]})},m=function(e){var t=e.movies;return Object(d.jsx)("div",{className:"movies",children:t.map((function(e){return Object(d.jsx)(u,{movie:e},e.imdbID)}))})},b=c(2),v=c.n(b),h=c(5),O=c(7),x=(c(25),c(11)),p=c.n(x),f=function(){var e=Object(h.a)(v.a.mark((function e(t){var c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.omdbapi.com/?apikey=42caae26&t=".concat(t));case 2:if((c=e.sent).ok){e.next=5;break}throw new Error("ERROR - ".concat(c.statusText));case 5:return e.abrupt("return",c.json());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(e){var t=e.onAdd,c=Object(j.useState)(""),s=Object(O.a)(c,2),n=s[0],a=s[1],i=Object(j.useState)({}),r=Object(O.a)(i,2),o=r[0],l=r[1],m=function(){var e=Object(h.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f(n);case 3:t=e.sent,l(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),Error("".concat(o.Error));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("form",{className:"find-movie",children:[Object(d.jsxs)("div",{className:"field",children:["Movie title",Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("input",{type:"text",name:"title",value:n,placeholder:"Enter a title to search",className:p()("input",{"is-danger":"False"===o.Response}),onChange:function(e){a(e.target.value)}})}),"False"===o.Response&&Object(d.jsx)("p",{className:"help is-danger",children:"Can't find a movie with such a title"})]}),Object(d.jsxs)("div",{className:"field is-grouped",children:[Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("button",{type:"button",className:"button is-light",onClick:function(){m()},children:"Find a movie"})}),Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("button",{type:"button",className:"button is-primary",onClick:function(){"True"===o.Response&&(t(o),a(""))},children:"Add to the list"})})]})]}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h2",{className:"title",children:"Preview"}),"True"===o.Response&&Object(d.jsx)(u,{movie:o})]})]})},g=function(e){Object(o.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(i.a)(this,c);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={movies:[]},e.addMovie=function(t){var c=e.state.movies.find((function(e){return e.imdbID===t.imdbID}));t&&!c&&e.setState((function(e){return{movies:[].concat(Object(a.a)(e.movies),[t])}}))},e}return Object(r.a)(c,[{key:"render",value:function(){var e=this.state.movies;return Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)("div",{className:"page-content",children:Object(d.jsx)(m,{movies:e})}),Object(d.jsx)("div",{className:"sidebar",children:Object(d.jsx)(N,{onAdd:this.addMovie})})]})}}]),c}(j.Component);n.a.render(Object(d.jsx)(g,{}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.0594350f.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){},163:function(e,t,a){},199:function(e,t,a){e.exports=a(367)},204:function(e,t,a){},326:function(e,t,a){},366:function(e,t,a){},367:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(20),l=a.n(i),o=a(25),c=a(26),s=a(28),m=a(27),u=a(29),v=a(379),d=a(381),p=a(382),h=a(378),b=a(377),f=a(375),E=a(380),g=a(190),y=(a(204),function(e){var t=e.movie,a=e.movies;return r.a.createElement(f.a,{to:{pathname:"/movie-Flix/detail",state:{movies:a,curId:t.id}}},r.a.createElement(E.a,{id:"result-row"},r.a.createElement(E.a.Column,{mobile:10,tablet:4,computer:5},r.a.createElement(g.a,{id:"result-image",src:"http://image.tmdb.org/t/p/original"+t.poster_path})),r.a.createElement(E.a.Column,{id:"info",mobile:6,tablet:12,computer:11},r.a.createElement("b",null," ",t.title," "),r.a.createElement("br",null)," Vote Average: ",t.vote_average,r.a.createElement("br",null)," Release Date: ",t.release_date)))}),j=function(e){var t=e.movies,a=t,n=t.map(function(e,t){return r.a.createElement(y,{movie:e,movies:a,key:t})});return r.a.createElement("div",{className:"movie-list"}," ",n," ")},O=a(174),k=a.n(O).a.create({baseURL:"https://api.themoviedb.org/3/",headers:{"Content-Type":"application/json"}}),N=(a(326),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).updateInputValue=function(t,a){var n=a.value;e.setState({inputVal:n}),k.get("search/movie",{params:{api_key:"d2e837497270b113fdd2b34bbd1d124c",query:n}}).then(function(e){return e.data}).then(function(t){return e.setState({movies:t.results})})},e.sort=function(t,a){var n=a.value;"Title"===n&&e.setState({movies:e.state.movies.sort(function(e,t){return e.title>t.title?1:-1})}),"VoteAverage"===n&&e.setState({movies:e.state.movies.sort(function(e,t){return e.vote_average<t.vote_average?1:-1})})},e.accessToken="",e.state={movies:[],inputVal:"",selected:null},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement("h1",null," MovieFlix"),r.a.createElement("div",{className:"options"},r.a.createElement("a",{className:"option-button",href:"/gallery"},"Gallery View"))),r.a.createElement("div",{className:"main"},r.a.createElement(h.a,{className:"search",placeholder:"Search...",onChange:this.updateInputValue,label:r.a.createElement(b.a,{options:[{key:"Vote-Average",text:"Vote Average",value:"VoteAverage"},{key:"Title",text:"Title",value:"Title"}],placeholder:"Sort By",onChange:this.sort}),labelPosition:"right"}),r.a.createElement(j,{className:"movie-list",movies:this.state.movies})))}}]),t}(r.a.Component)),w=a(189),x=(a(163),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.movies.map(function(e,t){return r.a.createElement("div",{className:"detail"},r.a.createElement(g.a,{className:"cardImg",src:"http://image.tmdb.org/t/p/original"+e.poster_path}),r.a.createElement("div",{className:"info"},r.a.createElement("b",null," ",e.title," "),r.a.createElement("br",null)," Vote Average: ",e.vote_average,r.a.createElement("br",null)," Release Date: ",e.release_date,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null," ",e.overview," ")))});return r.a.createElement(w.a,{slideIndex:this.props.index},e)}}]),t}(r.a.Component)),V=(a(104),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={index:0,movies:[]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"detailPage"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",null," MovieFlix "),r.a.createElement("div",{className:"options"},r.a.createElement("a",{className:"option-button",href:"/"},"Search View"),r.a.createElement("a",{className:"option-button",href:"gallery"},"Gallery View"))),r.a.createElement("div",{className:"detail"},r.a.createElement(x,{movies:this.state.movies,index:this.state.index})))}}],[{key:"getDerivedStateFromProps",value:function(e){var t=e.location.state,a=t.movies,n=t.curId;return{index:a.findIndex(function(e){return e.id===n}),movies:a}}}]),t}(r.a.Component)),C=function(e){var t=e.movies,a=t.map(function(e,a){return r.a.createElement(E.a.Column,{key:a,id:"grid-item",mobile:8,tablet:4,computer:2},r.a.createElement(f.a,{to:{pathname:"/detail",state:{movies:t,curId:e.id}}},r.a.createElement("div",{id:"movie"},r.a.createElement(g.a,{id:"movie-image",src:"http://image.tmdb.org/t/p/original"+e.poster_path}))))});return r.a.createElement(E.a,{id:"grid"},a)},I=a(376),S=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={genres:[],filteredMovies:[],activeItem:"Action"},a.filterMovies=function(e,t){k.get("/discover/movie",{params:{api_key:"d2e837497270b113fdd2b34bbd1d124c",with_genres:e}}).then(function(e){return e.data}).then(function(e){return a.setState({filteredMovies:e.results,activeItem:t})})},a.handleItemClick=function(e){a.filterMovies(e)},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;k.get("/genre/movie/list",{params:{api_key:"d2e837497270b113fdd2b34bbd1d124c"}}).then(function(e){return e.data}).then(function(t){return e.setState({genres:t.genres})})}},{key:"render",value:function(){var e=this,t=this.state,a=t.genres,n=t.filteredMovies;return r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement("h1",null," MovieFlix"),r.a.createElement("div",{className:"options"},r.a.createElement("a",{className:"option-button",to:"/movie-Flix/"},"Search View"),r.a.createElement(I.a,{className:"option-button",title:"Genres",id:"basic-nav-dropdown"},a.map(function(t,a){return r.a.createElement(I.a.Item,{color:"white",id:"menubar-item",key:a,name:t.name,eventKey:t.id,onSelect:e.handleItemClick},t.name)})))),r.a.createElement("div",{id:"gallery-view"},r.a.createElement(C,{movies:n})))}}]),t}(n.Component),_=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(v.a,null,r.a.createElement(d.a,null,r.a.createElement(p.a,{path:"/movie-Flix/",component:N}),r.a.createElement(p.a,{path:"/movie-Flix/detail",component:V}),r.a.createElement(p.a,{path:"/movie-Flix/gallery",component:S})))}}]),t}(r.a.Component);a(366);console.log(_),l.a.render(r.a.createElement(_,null),document.querySelector("#root"))}},[[199,1,2]]]);
//# sourceMappingURL=main.4d30b5b6.chunk.js.map
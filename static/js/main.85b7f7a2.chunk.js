(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Beholder","image":"https://5e.tools/img/MM/Beholder.png?v=1.97.1"},{"id":2,"name":"Red Dragon","image":"https://5e.tools/img/MM/Adult%20Red%20Dragon.png?v=1.97.1"},{"id":3,"name":"Dryad","image":"https://5e.tools/img/MM/Dryad.png?v=1.97.1"},{"id":4,"name":"Goblin","image":"https://5e.tools/img/MM/Goblin.png?v=1.97.1"},{"id":5,"name":"Hag","image":"https://5e.tools/img/VGM/Annis%20Hag.png?v=1.97.1"},{"id":6,"name":"Kraken","image":"https://5e.tools/img/MM/Kraken.png?v=1.97.1"},{"id":7,"name":"Lich","image":"https://5e.tools/img/MM/Lich.png?v=1.97.1"},{"id":8,"name":"Mind Flayer","image":"https://5e.tools/img/MM/Mind%20Flayer.png?v=1.97.1"},{"id":9,"name":"Myconid Sovereign","image":"https://5e.tools/img/MM/Myconid%20Sovereign.png?v=1.97.1"},{"id":10,"name":"Orc","image":"https://5e.tools/img/MM/Orc.png?v=1.97.1"},{"id":11,"name":"OwlBear","image":"https://5e.tools/img/MM/Owlbear.png?v=1.97.1"},{"id":12,"name":"Satyr","image":"https://5e.tools/img/MM/Satyr.png?v=1.97.1"}]')},,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(2),o=a.n(i),s=(a(15),a(8)),c=a(3),l=a(4),m=a(7),p=a(5),g=a(9);a(16);var h=function(e){return r.a.createElement("div",{className:"title-container"},r.a.createElement("h1",{className:"title"},e.children),r.a.createElement("h2",{className:"title-text"},"Click an Image to Begin"),r.a.createElement("h2",{className:"title-text"},"Score: ",e.currentScore," | Top Score: ",e.topScore))};a(17);var u=function(e){return r.a.createElement("button",{className:"beast-card",onClick:e.handleClick},r.a.createElement("img",{alt:e.name,src:e.image}))};a(18);var d=function(e){return r.a.createElement("div",{className:"wrapper"},e.children)},f=a(6),v=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={beasts:f,pickedBeasts:[],topScore:0,currentScore:0},a.handleClick=function(e){var t=e.target.attributes.getNamedItem("alt").value;a.shuffleCharacters(),a.checkGuess(t,a.updateTopScore)},a.shuffleCharacters=function(){a.setState(a.state.beasts=a.shuffleArray(a.state.beasts))},a.shuffleArray=function(e){var t,a,n;for(n=e.length-1;n>0;n--)t=Math.floor(Math.random()*(n+1)),a=e[n],e[n]=e[t],e[t]=a;return e},a.checkGuess=function(e,t){var n=Object(s.a)({},a.state);n.pickedBeasts.includes(e)?(n.currentScore=0,n.pickedBeasts=[],a.setState(a.state=n)):(n.pickedBeasts.push(e),n.currentScore++,a.setState(a.state=n)),t(n,a.alertWinner)},a.updateTopScore=function(e,t){e.pickedBeasts.length>e.topScore&&(e.topScore++,a.setState(a.state=e)),t(e)},a.alertWinner=function(e){12===e.pickedBeasts.length&&(e.pickedBeasts=[],a.setState(a.state=e))},a}return Object(g.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(d,null,r.a.createElement(h,{currentScore:this.state.currentScore,topScore:this.state.topScore},"Memory Game"),this.state.beasts.map((function(t){return r.a.createElement(u,{id:t.id,key:t.id,name:t.name,image:t.image,handleClick:e.handleClick})})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.85b7f7a2.chunk.js.map
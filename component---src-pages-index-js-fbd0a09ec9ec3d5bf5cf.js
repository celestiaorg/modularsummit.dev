(self.webpackChunkcelestia_modular_summit=self.webpackChunkcelestia_modular_summit||[]).push([[678],{2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var s,l,c,m;if(Array.isArray(e)){if((s=e.length)!=o.length)return!1;for(l=s;0!=l--;)if(!i(e[l],o[l]))return!1;return!0}if(r&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(m=e.entries();!(l=m.next()).done;)if(!o.has(l.value[0]))return!1;for(m=e.entries();!(l=m.next()).done;)if(!i(l.value[1],o.get(l.value[0])))return!1;return!0}if(n&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(m=e.entries();!(l=m.next()).done;)if(!o.has(l.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((s=e.length)!=o.length)return!1;for(l=s;0!=l--;)if(e[l]!==o[l])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((s=(c=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(l=s;0!=l--;)if(!Object.prototype.hasOwnProperty.call(o,c[l]))return!1;if(t&&e instanceof Element)return!1;for(l=s;0!=l--;)if(("_owner"!==c[l]&&"__v"!==c[l]&&"__o"!==c[l]||!e.$$typeof)&&!i(e[c[l]],o[c[l]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,a=r(7294),i=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var l,c=[];function m(){l=e(c.map((function(e){return e.props}))),u.canUseDOM?t(l):r&&(l=r(l))}var u=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,c=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){c.push(this),m()},o.componentDidUpdate=function(){m()},o.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),m()},o.render=function(){return i.createElement(n,this.props)},a}(a.PureComponent);return o(u,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),o(u,"canUseDOM",s),u}}},5856:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return je}});var n,a,i,o,s=r(7294),l=r(396),c=r(1721),m=r(1597),u=function(e){return s.createElement(m.StaticQuery,{query:"1803319986",render:function(t){var r=e.filename.match(/[^\\]*\.(\w+)$/)[1],n=t.images.edges.find((function(t){return t.node.relativePath.includes(e.filename)}));return n?"svg"===r||"gif"===r?s.createElement("img",{src:n.node.publicURL,alt:e.alt}):s.createElement(l.G,{alt:e.alt,image:n.node.childImageSharp.gatsbyImageData,imgStyle:{}}):null}})},p=function(e){function t(){return e.apply(this,arguments)||this}return(0,c.Z)(t,e),t.prototype.render=function(){return s.createElement("div",{className:"member"},s.createElement("div",{className:"image mx-auto"},s.createElement("div",{className:"overlay"}),s.createElement(u,{alt:this.props.member.name,filename:this.props.member.image})),s.createElement("div",{className:"name"},this.props.member.name),s.createElement("div",{className:"company"},this.props.member.org),s.createElement("div",{className:"title"},this.props.member.title))},t}(s.Component),d=[{name:"Mustafa Al-Bassam",org:"Celestia Labs",title:"Co-founder, CEO",image:"members/MustafaAl-Bassam.png"},{name:"Uri Kolodny",org:"StarkWare",title:"Co-founder, CEO",image:"members/UriKolodny.png"},{name:"Zaki Manian",org:"Sommelier",title:"Co-founder",image:"members/ZakiManian.png"},{name:"Tarun Chitra",org:"Gauntlet",title:"Founder, CEO",image:"members/TarunChitra.png"},{name:"Anatoly Yakovenko",org:"Solana",title:"Co-founder",image:"members/AnatolyYakovenko.png"},{name:"Anurag Arjun",org:"Polygon Technology",title:"Co-founder",image:"members/AnuragAryun.png"},{name:"Alex Gluchowski",org:"Matter Labs",title:"Co-founder, CEO",image:"members/AlexGluchowski.png"},{name:"John Adler",org:"Celestia Labs",title:"Co-founder, CRO",image:"members/JohnAdler.png"},{name:"James Prestwich",org:"Nomad",title:"Founder, CTO",image:"members/JamesPrestwich.png"},{name:"Morgan Beller",org:"NfX",title:"General Partner, Event Emcee",image:"members/MorganBeller.png"},{name:"Alex Evans",org:"Bain Capital Crypto",title:"Partner",image:"members/AlexEvans.png"},{name:"protolambda",org:"Optimism",title:"Researcher",image:"members/Proto.png"},{name:"Balder Bomans",org:"Maven 11",title:"Partner, CIO",image:"members/BalderBomans.png"},{name:"Sreeram Kannan",org:"University of Washington",title:"Associate Professor",image:"members/SreeramKannan.png"},{name:"Matt Garnett",org:"ConsenSys",title:"Researcher",image:"members/MattGarnett.png"},{name:"Ismail Khoffi",org:"Celestia Labs",title:"Co-founder, CTO",image:"members/IsmailKhoffi.png"},{name:"Bo Du",org:"Polymer",title:"Co-Founder",image:"members/BoDu.png"},{name:"Toghrul Maharramov",org:"Scroll Tech",title:"Senior Researcher",image:"members/ToghrulMaharramov.png"},{name:"Eli Krenzke",org:"Polychain Capital",title:"Partner",image:"members/EliKrenzke.png"},{name:"Alex Obadia",org:"Flashbots",title:"Researcher, Steward",image:"members/AlexObadia.png"},{name:"Can Gurel",org:"Delphi Digital",title:"Research Analyst",image:"members/CanGurel.png"},{name:"Guillermo Angeris",org:"Bain Capital Crypto",title:"Research Partner",image:"members/Guille.png"},{name:"Eric Wall",org:"EricaDAO",title:"Blogger",image:"members/EricWall.png"},{name:"Louis Guthman",org:"StarkWare",title:"Ecosystem Lead",image:"members/LouisGuthman.png"},{name:"Aleks Larsen",org:"Blockchain Capital",title:"General Partner",image:"members/AleksLarsen.png"},{name:"Will Nuelle",org:"Galaxy Digital",title:"Principle Investments",image:"members/WillNuelle.png"},{name:"Alex North",org:"Protocol Labs",title:"Software Engineer",image:"members/AlexNorth.png"},{name:"Marko Baricevic",org:"Interchain GmbH",title:"Product Owner of Cosmos SDK",image:"members/MarkoBaricevic.png"},{name:"Aditi Sriram",org:"Celestia Labs",title:"Strategy Lead, Event Emcee",image:"members/AditiSriram.png"},{name:"Emily Herbert",org:"Fuel Labs",title:"Software Engineer",image:"members/EmilyHerbert.png"},{name:"Sean Braithwaite",org:"Metakek",title:"Co-Founder, CEO",image:"members/SeanBraithwaite.png"},{name:"Mathijs van Esch",org:"Maven 11",title:"Associate Partner",image:"members/Mathjis.png"}],f=[{name:"Delphi Digital",image:"projects/delphi-digital.svg"},{name:"Maven 11 Capital",image:"projects/maven11.svg"},{name:"Solana",image:"projects/solana.svg"},{name:"Scroll Tech",image:"projects/scroll.svg"},{name:"Starkware",image:"projects/starkware.svg"},{name:"Polygon",image:"projects/polygon.svg"},{name:"Polychain Capital",image:"projects/polychain-capital.svg"},{name:"Optimism",image:"projects/optimism.svg"},{name:"Nomad",image:"projects/nomad.svg"},{name:"NFX",image:"projects/nfx.svg"},{name:"Protocol Labs",image:"projects/protocol-labs.svg"},{name:"Galaxy Digital",image:"projects/galaxy-digital.svg"},{name:"Fuel",image:"projects/fuel.svg"},{name:"G",image:"projects/g.svg"},{name:"Interchain Foundation",image:"projects/interchain-foundation.svg"},{name:"Flashbots",image:"projects/flashbots.svg"},{name:"zkSync",image:"projects/zkSync.svg"},{name:"Celestia",image:"projects/celestia.svg"},{name:"Blockchain Capital",image:"projects/blockchain-capital.svg"}],g=[{name:"Celestia",image:"projects/celestia.svg"},{name:"Maven 11",image:"projects/maven11.svg"},{name:"Blockchain Capital",image:"projects/blockchain-capital.svg"},{name:"Galaxy Digital",image:"projects/galaxy-digital.svg"},{name:"Delphi Digital",image:"projects/delphi-digital.svg"},{name:"Bain Capital",image:"projects/bain-capital.svg"},{name:"Starkware",image:"projects/starkware.svg"},{name:"Polychain Capital",image:"projects/polychain-capital.svg"}],h=[{title:"Intro to Modular Summit",time:"9:30 AM - 9:40 PM",speakers:"Balder Bomans"},{title:"Defining Modular Layers",time:"9:40 AM - 10:10 AM",speakers:"Mustafa Al-Bassam"},{title:"Small Pieces Loosely Joined: The Modular Thesis",time:"10:10 AM - 10:40 AM",speakers:"Alex Evans"},{title:"Cosmos: The Modular Past and Future",time:"10:40 AM - 11:10 AM",speakers:"Zaki Manian"},{title:"L1s, L2s, L3s",time:"11:25 AM - 11:55 AM",speakers:"Uri Kolodny"},{title:"Scaling Execution: Zero Knowledge",time:"11:55 AM – 12:25pm",speakers:"Zaki Manian (moderator), Alex Gluchowski, Toghrul Maharramov, Louis Guthman"},{title:"MEV on Modular Blockchains",time:"12:25 PM – 1:00pm",speakers:"Sean Braithwaite (moderator), Tarun Chitra, Guillermo Angeris, Alex Obadia"},{type:"Break",title:"Lunch",time:"1 PM - 2 PM",speakers:""},{title:"Understanding Modularity: Rollup Security Paradigms",time:"2:10 PM - 2:40 PM",speakers:"Eric Wall"},{title:"Modular Design across the Blockchain Ecosystem",time:"2:40 PM - 3:10 PM",speakers:"Ismail Khoffi (moderator), Alex North , Marko Baricevic, James Prestwich, Bo Du"},{title:"Scaling Execution: Optimistic",time:"3:10 PM - 3:40 PM",speakers:"Can Gurel (moderator), Proto, John Adler, Emily Herbert"},{title:"Investing in the Modular Stack",time:"3:55 PM - 4:25 PM",speakers:"Morgan Beller (moderator), Aleks Larsen, Will Nuelle, Eli Krenzke, Mathijs van Esch"},{title:"The Data Availability Landscape",time:"4:25 PM - 4:55 PM",speakers:"Sreeram Kannan (moderator), John Adler, Anurag Arjun, Matt Garnett"},{title:"The Counter Thesis - Monolithic vs. Modular",time:"4:55 PM - 5:30 PM",speakers:" Tarun Chitra (moderator), Mustafa Al-Bassam, Anatoly Yakovenko"},{type:"Break",title:"Networking Drinks",time:"5:30 PM",speakers:""}],b=function(e){return s.createElement(m.StaticQuery,{query:"1803319986",render:function(t){var r=e.filename.match(/[^\\]*\.(\w+)$/)[1],n=t.images.edges.find((function(t){return t.node.relativePath.includes(e.filename)}));return n?"svg"===r||"gif"===r?s.createElement("img",{src:n.node.publicURL,alt:e.alt}):s.createElement(l.G,{alt:e.alt,image:n.node.childImageSharp.gatsbyImageData,imgStyle:{}}):null}})},v=function(e){function t(){return e.apply(this,arguments)||this}return(0,c.Z)(t,e),t.prototype.render=function(){return s.createElement("div",{className:"Break"===this.props.presentation.type?"presentation schedule-pause":0===this.props.index?"presentation first":"presentation"},s.createElement("div",{className:"inner"},s.createElement("div",{className:"row justify-content-between align-items-center"},s.createElement("div",{className:"col-auto"},s.createElement("div",{className:"title"},this.props.presentation.title),s.createElement("div",{className:"time"},this.props.presentation.time),s.createElement("div",{className:"speakers"},s.createElement("span",null,"Speakers: ")," ",this.props.presentation.speakers)))))},t}(s.Component),y=function(e){function t(){return e.apply(this,arguments)||this}return(0,c.Z)(t,e),t.prototype.render=function(){return s.createElement("footer",{id:"footer"},s.createElement("div",{className:"container"},s.createElement("div",{className:"row justify-content-center"},s.createElement("div",{className:"col col-12 col-md-6"},s.createElement("p",null,s.createElement("a",{href:"https://github.com/celestiaorg/modularsummit.dev",target:"_blank"},"Suggest edits to this website on GitHub🡕.")))),s.createElement("div",{className:"row justify-content-center copyright"},s.createElement("div",{className:"col col-12 col-md-6 text-center"},s.createElement("p",null,"Website designed with ",s.createElement("i",{className:"icon-heart"})," by ",s.createElement("a",{href:"https://designatives.com"},"Designatives"))))))},t}(s.Component),E=y,A=r(5697),w=r.n(A),T=r(4839),C=r.n(T),S=r(2993),k=r.n(S),N=r(6494),M=r.n(N),j="bodyAttributes",O="htmlAttributes",P="titleAttributes",x={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},L=(Object.keys(x).map((function(e){return x[e]})),"charset"),B="cssText",I="href",D="http-equiv",R="innerHTML",G="itemprop",H="name",F="property",U="rel",K="src",J="target",W={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},z="defaultTitle",Y="defer",q="encodeSpecialCharacters",Q="onChangeClientState",V="titleTemplate",_=Object.keys(W).reduce((function(e,t){return e[W[t]]=t,e}),{}),X=[x.NOSCRIPT,x.SCRIPT,x.STYLE],Z="data-react-helmet",$="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ee=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},te=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ne=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},ae=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},ie=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},oe=function(e){var t=ue(e,x.TITLE),r=ue(e,V);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=ue(e,z);return t||n||void 0},se=function(e){return ue(e,Q)||function(){}},le=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return re({},e,t)}),{})},ce=function(e,t){return t.filter((function(e){return void 0!==e[x.BASE]})).map((function(e){return e[x.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var i=n[a].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},me=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&he("Helmet: "+e+' should be of type "Array". Instead found type "'+$(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),o=0;o<i.length;o++){var s=i[o],l=s.toLowerCase();-1===t.indexOf(l)||r===U&&"canonical"===e[r].toLowerCase()||l===U&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(s)||s!==R&&s!==B&&s!==G||(r=s)}if(!r||!e[r])return!1;var c=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][c]&&(a[r][c]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var s=i[o],l=M()({},n[s],a[s]);n[s]=l}return e}),[]).reverse()},ue=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},pe=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){pe(e)}),0)}),de=function(e){return clearTimeout(e)},fe="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||pe:r.g.requestAnimationFrame||pe,ge="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||de:r.g.cancelAnimationFrame||de,he=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},be=null,ve=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,l=e.onChangeClientState,c=e.scriptTags,m=e.styleTags,u=e.title,p=e.titleAttributes;Ae(x.BODY,n),Ae(x.HTML,a),Ee(u,p);var d={baseTag:we(x.BASE,r),linkTags:we(x.LINK,i),metaTags:we(x.META,o),noscriptTags:we(x.NOSCRIPT,s),scriptTags:we(x.SCRIPT,c),styleTags:we(x.STYLE,m)},f={},g={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(f[e]=r),n.length&&(g[e]=d[e].oldTags)})),t&&t(),l(e,f,g)},ye=function(e){return Array.isArray(e)?e.join(""):e},Ee=function(e,t){void 0!==e&&document.title!==e&&(document.title=ye(e)),Ae(x.TITLE,t)},Ae=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(Z),a=n?n.split(","):[],i=[].concat(a),o=Object.keys(t),s=0;s<o.length;s++){var l=o[s],c=t[l]||"";r.getAttribute(l)!==c&&r.setAttribute(l,c),-1===a.indexOf(l)&&a.push(l);var m=i.indexOf(l);-1!==m&&i.splice(m,1)}for(var u=i.length-1;u>=0;u--)r.removeAttribute(i[u]);a.length===i.length?r.removeAttribute(Z):r.getAttribute(Z)!==o.join(",")&&r.setAttribute(Z,o.join(","))}},we=function(e,t){var r=document.head||document.querySelector(x.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(n),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===R)r.innerHTML=t.innerHTML;else if(n===B)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[n]?"":t[n];r.setAttribute(n,s)}r.setAttribute(Z,"true"),a.some((function(e,t){return o=t,r.isEqualNode(e)}))?a.splice(o,1):i.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:i}},Te=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},Ce=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[W[r]||r]=e[r],t}),t)},Se=function(e,t,r){switch(e){case x.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[Z]=!0,a=Ce(r,n),[s.createElement(x.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=Te(r),i=ye(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+ie(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+ie(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case j:case O:return{toComponent:function(){return Ce(t)},toString:function(){return Te(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[Z]=!0,n);return Object.keys(t).forEach((function(e){var r=W[e]||e;if(r===R||r===B){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),s.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===R||e===B)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+ie(n[t],r)+'"';return e?e+" "+a:a}),""),i=n.innerHTML||n.cssText||"",o=-1===X.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},ke=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,l=e.scriptTags,c=e.styleTags,m=e.title,u=void 0===m?"":m,p=e.titleAttributes;return{base:Se(x.BASE,t,n),bodyAttributes:Se(j,r,n),htmlAttributes:Se(O,a,n),link:Se(x.LINK,i,n),meta:Se(x.META,o,n),noscript:Se(x.NOSCRIPT,s,n),script:Se(x.SCRIPT,l,n),style:Se(x.STYLE,c,n),title:Se(x.TITLE,{title:u,titleAttributes:p},n)}},Ne=C()((function(e){return{baseTag:ce([I,J],e),bodyAttributes:le(j,e),defer:ue(e,Y),encode:ue(e,q),htmlAttributes:le(O,e),linkTags:me(x.LINK,[U,I],e),metaTags:me(x.META,[H,L,D,F,G],e),noscriptTags:me(x.NOSCRIPT,[R],e),onChangeClientState:se(e),scriptTags:me(x.SCRIPT,[K,R],e),styleTags:me(x.STYLE,[B],e),title:oe(e),titleAttributes:le(P,e)}}),(function(e){be&&ge(be),e.defer?be=fe((function(){ve(e,(function(){be=null}))})):(ve(e),be=null)}),ke)((function(){return null})),Me=(a=Ne,o=i=function(e){function t(){return ee(this,t),ae(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!k()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case x.SCRIPT:case x.NOSCRIPT:return{innerHTML:t};case x.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return re({},n,((t={})[r.type]=[].concat(n[r.type]||[],[re({},a,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(n.type){case x.TITLE:return re({},a,((t={})[n.type]=o,t.titleAttributes=re({},i),t));case x.BODY:return re({},a,{bodyAttributes:re({},i)});case x.HTML:return re({},a,{htmlAttributes:re({},i)})}return re({},a,((r={})[n.type]=re({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=re({},t);return Object.keys(e).forEach((function(t){var n;r=re({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return s.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[_[r]||r]=e[r],t}),t)}(ne(a,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case x.LINK:case x.META:case x.NOSCRIPT:case x.SCRIPT:case x.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:o,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=ne(e,["children"]),n=re({},r);return t&&(n=this.mapChildrenToProps(t,n)),s.createElement(a,n)},te(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(s.Component),i.propTypes={base:w().object,bodyAttributes:w().object,children:w().oneOfType([w().arrayOf(w().node),w().node]),defaultTitle:w().string,defer:w().bool,encodeSpecialCharacters:w().bool,htmlAttributes:w().object,link:w().arrayOf(w().object),meta:w().arrayOf(w().object),noscript:w().arrayOf(w().object),onChangeClientState:w().func,script:w().arrayOf(w().object),style:w().arrayOf(w().object),title:w().string,titleAttributes:w().object,titleTemplate:w().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=ke({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);Me.renderStatic=Me.rewind;var je=function(){return s.createElement("main",null,s.createElement(Me,null,s.createElement("title",null,"The Modular Summit")),s.createElement("section",{className:"header-section"},s.createElement("div",{className:"container"},s.createElement("div",{className:"row justify-content-end"},s.createElement("div",{className:"col-auto"},s.createElement("div",{className:"row justify-content-end"},s.createElement("div",{className:"col-auto pe-2 pe-md-5"},s.createElement("a",{href:"/#schedule"},"Schedule")),s.createElement("div",{className:"col-auto"},s.createElement("a",{href:"/#speakers"},"Speakers"))))))),s.createElement("section",{className:"hero-section mt-5 pb-5"},s.createElement("div",{className:"container"},s.createElement("div",{className:"row"},s.createElement("div",{className:"col-12 col-lg-8 col-xl-6 hero-text"},s.createElement("h1",null,"The Modular Summit"),s.createElement("div",{className:"subtitle"},"Envision the modular future with us."),s.createElement("div",{className:"hosted"},"Hosted by Maven 11 and Celestia"),s.createElement("div",{className:"row"},s.createElement("div",{className:"col-12"},s.createElement("div",{className:"time-box"},s.createElement("div",{className:"row"},s.createElement("div",{className:"col-12 time"},"Thu, April 21, 2022  ",s.createElement("span",null,"•"),"  9:00 AM – 7:00 PM CEST")),s.createElement("div",{className:"row justify-content-between align-items-center"},s.createElement("div",{className:"col-12 col-md-auto"},"Het Sieraad BV., Amsterdam",s.createElement("br",null),"1 Postjesweg",s.createElement("br",null),"1057 DT Amsterdam",s.createElement("br",null),"Netherlands"),s.createElement("div",{className:"col-12 col-md-auto pt-4 pt-md-0"},s.createElement("div",{className:"row justify-content-center justify-content-md-end"},s.createElement("div",{className:"col-auto"},s.createElement("a",{href:"https://www.eventbrite.com/e/modular-summit-tickets-301616973487",target:"_blank",rel:"noreferrer"},s.createElement("button",{className:"button-simple"},"Register"))),s.createElement("div",{className:"col-auto px-0"},s.createElement("a",{href:"https://goo.gl/maps/ivRUyv2ctvrHtUbq6",target:"_blank",rel:"noreferrer"},s.createElement("button",{className:"map-button","aria-label":"Map"})))))))))),s.createElement("div",{className:"col-12 col-lg-4 col-xl-6"},s.createElement("div",{className:"hero-image"},s.createElement(l.S,{src:"../images/modular-summit.svg",alt:"The Modular Summit",width:616,height:584,placeholder:"blurred",quality:90,__imageData:r(2482)})))))),s.createElement("section",{className:"sponsors-section pt-5 pb-5"},s.createElement("div",{className:"container"},s.createElement("div",{className:"row"},s.createElement("div",{className:"col-12"},s.createElement("h4",{className:"text-center text-sm-start"},"Sponsors"))),s.createElement("div",{className:"row align-items-center"},g.map((function(e,t){return s.createElement("div",{className:"col col-12 col-sm-6 col-md-3 text-center py-4 px-md-4",key:t},s.createElement(b,{alt:e.name,filename:e.image}))}))))),s.createElement("section",{className:"speakers-section pt-5",id:"speakers"},s.createElement("div",{className:"container"},s.createElement("h2",{className:"with-decor"},"Speakers"),s.createElement("div",{className:"row team-members justify-content-center"},d.map((function(e,t){return s.createElement("div",{className:"col col-6 col-md-4 col-lg-3 col-xl-2 text-center",key:t},s.createElement(p,{member:e}))})),s.createElement("div",{className:"clear"})))),s.createElement("section",{className:"schedule-section pb-5",id:"schedule"},s.createElement("div",{className:"container"},s.createElement("div",{className:"row justify-content-between align-items-center"},s.createElement("div",{className:"col-auto"},s.createElement("h2",{className:"with-decor"},"Schedule")),s.createElement("div",{className:"col-12 col-sm-auto pt-4 pt-sm-0"},s.createElement("a",{href:"https://youtu.be/35_rr8Vf-4k",target:"_blank"},s.createElement("button",{className:"button-simple w-100"},"Watch Livestream")))),s.createElement("div",{className:"row mt-5"},h.map((function(e,t){return s.createElement("div",{className:"col-12",key:t},s.createElement(v,{index:t,presentation:e}))}))))),s.createElement("section",{className:"projects-section py-5"},s.createElement("div",{className:"container"},s.createElement("div",{className:"row"},s.createElement("div",{className:"col-12"},s.createElement("h4",null,"Featured projects"))),s.createElement("div",{className:"row mt-2 align-items-center"},f.map((function(e,t){return s.createElement("div",{className:"col-6 col-sm-4 col-md-3 col-lg-2 text-center p-4",key:t},s.createElement(b,{alt:e.name,filename:e.image}))}))))),s.createElement(E,null))}},2482:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAAsTAAALEwEAmpwYAAAC+ElEQVQ4y7WUW2zLURzHS+bFPZ4mDSGEuEV4k0WWIF4kXjwgkSBbGgnivjdi7CLr2mFdp7aWXvSyqW2hI51oK7YhOpdN17G7WlrWdrr+7+f0K5sREbWY+Cbfp3N+n/P7/c7vHJnsFwGY1Us4xQgRFQRQ+PnEKtm/yMVFLz4TEhggPBJECuqYoTceIGNKMACLjEyEcfNxtIsMWvgvrzzCCPoId2hKwJPJ/tPFox+8dibifSqMNAYlBhEigiUkOOUMCxODjIuPIUwEsJS8okgBwOEp97BJiBd8JAIm1AmgHcCMv4IIFlMBV6INcEXlAVGn9yf5RB4AxYTX/Dam1rqBK60McMWa8TjyyLp/fIGpqZHzKi0VLmvBl1RAslcDHQ7jpElUVfcIKi3GzF+tBG2zRdBXN18mNZhfkAdG0McWkIabIA03QFstKXTfzkoLu2fdJ9XdAPVZQB6aINXoQb1mIOgolZEnji+pt7WgTSaIlmpItQbQ1ltAb+3ZdEDRaW4UTQbwl7TgizQQjVWgj8xAV027DBFXPgbqgP47wGsbSJMR6HSEMdw4Nx0w6TQvZE6UUSZXiTELWh1SfhvQ79zxbVxG3Z8w7BqH0mdWINJwYLIe8gaD4TuQPV4G2l3v+Wn+fAshPs5GzJ1NwsFcdt+7nnsbhnvOzBO7xAuhU9/3cTq9i83XMOx5DcPr9J9J0HVScjt3jhkv78p/e3JrVtjn3xyBYVkSajnj7d0eEgJbQyu4XOVSobwSYvV1CBXXQPtdAHwtAKalLeO5HXuKMwVcX8JCncnHmrdFow82RuFcG68XdTonbbYg1WZDKnBnDDZhz960wIGiyP7Q7vfxxJ738SdZn3qt65LJisUsLmUKnuQxVT17RBXn8q5AsJt+AvoO/ektT7+2PPH81spRqOUcjs8hnnMLRHJiJtYnDipXJ3NKxPGLUChBB+8D8HYAnozJPojNefOk2LHZUmzXdAypNtHCH+OSoyxjcpQx5qg6xZVXiYBvi+x/6ysQxFw9bNyIbQAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/static/78d7c6de81a4936f3fd323461ce1ab9c/2253f/modular-summit.svg","srcSet":"/static/78d7c6de81a4936f3fd323461ce1ab9c/3e9eb/modular-summit.svg 154w,\\n/static/78d7c6de81a4936f3fd323461ce1ab9c/17c99/modular-summit.svg 308w,\\n/static/78d7c6de81a4936f3fd323461ce1ab9c/2253f/modular-summit.svg 616w","sizes":"(min-width: 616px) 616px, 100vw"},"sources":[{"srcSet":"/static/78d7c6de81a4936f3fd323461ce1ab9c/907bd/modular-summit.webp 154w,\\n/static/78d7c6de81a4936f3fd323461ce1ab9c/9c69e/modular-summit.webp 308w,\\n/static/78d7c6de81a4936f3fd323461ce1ab9c/759af/modular-summit.webp 616w","type":"image/webp","sizes":"(min-width: 616px) 616px, 100vw"}]},"width":616,"height":584}')}}]);
//# sourceMappingURL=component---src-pages-index-js-fbd0a09ec9ec3d5bf5cf.js.map
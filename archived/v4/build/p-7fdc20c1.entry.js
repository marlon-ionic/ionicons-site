import{r as t,c as e,h as i,g as r,e as s}from"./p-ed5fd7e6.js";import{A as o}from"./p-0b5c9a68.js";const n=class{constructor(i){t(this,i),this.toggleHeaderSearch=e(this,"toggleHeaderSearch",7),this.isSticky=!1,this.query="",this.isSearchVisible=!1}handleScroll(){requestAnimationFrame(this.checkScroll.bind(this))}handleResize(){requestAnimationFrame(()=>{window.innerWidth>768&&(this.el.querySelector("nav").style.display="",this.el.classList.remove("show-mobile-menu"),document.body.classList.remove("no-scroll"),this.isMobileMenuShown=!1)})}checkScroll(){const t=document.documentElement.scrollTop||document.body.scrollTop;this.isSticky=t>30}showNav(){if(this.isMobileMenuShown)return;this.isMobileMenuShown=!0;const t=this.el.querySelector("nav");t.style.display="flex",setTimeout(()=>{t.classList.add("show-mobile-menu"),document.body.classList.add("no-scroll")},1)}hideNav(){if(!this.isMobileMenuShown)return;this.isMobileMenuShown=!1;const t=this.el.querySelector("nav");t.classList.remove("show-mobile-menu"),setTimeout(()=>{t.style.display="none",document.body.classList.remove("no-scroll")},300)}render(){return i("header",{class:`${this.isSearchVisible?"visible-search":""} ${this.isSticky?"overlay":""}`},i("div",{class:"container"},i("div",{class:"logo"},i("stencil-route-link",{url:"/ionicons/v4",exact:!0},i("svg",{width:"32px",height:"32px",viewBox:"0 0 32 32"},i("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},i("g",{id:"icon","fill-rule":"nonzero"},i("circle",{id:"circle",fill:"#EAEEF5",cx:"16",cy:"16",r:"16"}),i("circle",{id:"circle_copy",fill:"#B4C1D8",cx:"16",cy:"16",r:"11"}),i("circle",{id:"circle_copy_2",fill:"#647AA1",cx:"16",cy:"16",r:"6"}),i("circle",{id:"circle_copy_3",fill:"#647AA1",cx:"23.5",cy:"8.5",r:"2"})))),"Ionicons"),i("span",{class:"version"},this.version)),i("icon-search",{query:this.query,size:"small"}),i("nav",null,i("stencil-route-link",{class:"nav__item",url:"/ionicons/v4",onClick:this.hideNav.bind(this)},"Icons"),i("stencil-route-link",{class:"nav__item",url:"/ionicons/v4/usage",onClick:()=>{this.toggleHeaderSearch.emit("hide"),this.hideNav()}},"Usage"),i("a",{class:"nav__item",href:"https://github.com/ionic-team/ionicons"},"GitHub",i("svg",{width:"12px",height:"12px",viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},i("g",{transform:"translate(0,1)"},i("rect",{id:"bg",fill:"#e3e8f1",x:"0",y:"2",width:"9",height:"9",rx:"1.5"}),i("path",{d:"M9.18198052,1 L6.5,1 L6.5,0 L11,0 L11,1 L11,4.5 L10,4.5 L10,1.59619408 L4.02512627,7.57106781 L3.31801948,6.86396103 L9.18198052,1 Z",id:"arrow",fill:"#A4AEC3"})))),i("span",{class:"close",onClick:this.hideNav.bind(this)},i("i",{class:"ion ion-md-close"}))),i("a",{class:"btn sm-hide",href:"/ionicons/v4/ionicons.designerpack.zip",download:!0},i("svg",{width:"9px",height:"11px",viewBox:"0 0 9 11",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},i("g",null,i("rect",{id:"bg",fill:"#BAC3D1",x:"0",y:"9",width:"9",height:"2",rx:"1"}),i("path",{d:"M5,6.26776695 L7.26776695,4 L7.97487373,4.70710678 L4.70710678,7.97487373 L4.48743687,7.75520382 L4.26776695,7.97487373 L1,4.70710678 L1.70710678,4 L4,6.29289322 L4,0 L5,0 L5,6.26776695 Z",id:"arrow",fill:"#94A0B8"}))),"Designer pack"),i("span",{class:"more",onClick:this.showNav.bind(this)},i("i",{class:"ion ion-md-more"}))))}get el(){return r(this)}};n.style="header-bar header{-webkit-transition:border 0.6s;transition:border 0.6s;position:fixed;width:100%;top:0;left:0;right:0;background:#fff;z-index:999;border-bottom:1px solid transparent;height:64px}header-bar header.overlay{border-bottom:1px solid rgba(0, 0, 0, 0.05)}header-bar .container,header-bar .logo,header-bar .logo a,header-bar nav{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}header-bar .logo,header-bar nav{-ms-flex:0 0 auto;flex:0 0 auto}header-bar nav{-ms-flex-align:baseline;align-items:baseline}header-bar icon-search{-webkit-transition:opacity 0.5s;transition:opacity 0.5s;-ms-flex:1;flex:1;padding-left:60px;padding-right:60px;opacity:0;pointer-events:none}header-bar .visible-search icon-search{opacity:1;pointer-events:auto}header-bar .container{-ms-flex-pack:justify;justify-content:space-between;padding-top:12px;padding-bottom:12px}header-bar .logo a{font-weight:700;font-size:16px;color:var(--color-shark)}header-bar .logo svg{margin-right:10px}header-bar .logo .version{margin-left:10px;font-size:10px;font-weight:600;color:var(--color-oslo-gray);background-color:var(--color-catskill-white);border-radius:4px;padding:1px 5px;position:relative;top:-2px}header-bar a{text-decoration:none}header-bar nav+.btn,header-bar .nav__item+.nav__item{margin-left:30px}header-bar .nav__item{font-size:13px;font-weight:600}header-bar .nav__item,header-bar .nav__item a{-webkit-transition:color 0.3s;transition:color 0.3s;color:var(--color-pale-sky)}header-bar .nav__item:hover,header-bar .nav__item a:not(.link-active):hover{color:var(--color-shark)}header-bar .nav__item .link-active{color:var(--color-heather);cursor:default}header-bar .nav__item svg{margin-left:6px}header-bar .nav__item:hover svg #arrow{-webkit-transform:translate(1px, -1px);transform:translate(1px, -1px)}header-bar .btn svg{margin-right:6px}header-bar .btn:hover svg #arrow{-webkit-transform:translate(0, 1px);transform:translate(0, 1px)}header-bar .more{padding:0 8px;font-size:28px;line-height:28px;color:var(--color-dodger-blue);cursor:pointer;display:none}header-bar nav span.close{display:none;font-size:28px}@media screen and (max-width: 992px){header-bar nav>*+*{margin-left:18px}header-bar icon-search{padding-left:30px;padding-right:30px}}@media screen and (max-width: 768px){header-bar .btn.sm-hide{display:none}header-bar .more,header-bar .close{cursor:pointer}header-bar .more{display:block}header-bar nav+.btn,header-bar .nav__item+.nav__item{margin-left:0;margin-top:30px}header-bar nav{-webkit-transition:opacity 0.3s;transition:opacity 0.3s;position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100%;z-index:99999;background-image:linear-gradient(-223deg, #363E49 0%, #1C1E21 100%);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;opacity:0;display:none}header-bar nav .close{margin:0;position:absolute;top:14px;right:18px;color:#fff;cursor:pointer}header-bar .nav__item{-webkit-transition:-webkit-transform 0.4s;transition:-webkit-transform 0.4s;transition:transform 0.4s;transition:transform 0.4s, -webkit-transform 0.4s;-webkit-transform:translateY(8px);transform:translateY(8px)}header-bar .nav__item,header-bar .nav__item a{font-size:28px;color:rgba(255, 255, 255, 0.9)}header-bar .nav__item .link-active{color:rgba(255, 255, 255, 0.3)}header-bar .nav__item:hover,header-bar .nav__item a:not(.link-active):hover{color:rgba(255, 255, 255, 0.9)}header-bar .nav__item svg #bg{opacity:0.2}header-bar nav.show-mobile-menu{opacity:1}header-bar nav.show-mobile-menu .nav__item{-webkit-transform:translateY(0);transform:translateY(0)}header-bar nav.show-mobile-menu .close{display:block}header-bar icon-search{padding-left:20px;padding-right:15px}}@media screen and (max-width: 520px){header-bar .version{display:none}}";const a=class{constructor(i){t(this,i),this.hasSearched=e(this,"hasSearched",7),this.query="",this.size="small",this.automaticfocus="none",this.showClearCtrl=!1}watchQuery(){this.showClearCtrl=this.query.length>0}searchListener(t){27!==t.keyCode?this.hasSearched.emit(t.target.value):this.handleClear()}handleClear(){this.hasSearched.emit("")}componentWillLoad(){this.watchQuery()}render(){return i("div",{class:"search-input search-input--"+this.size},i("input",{type:"text",placeholder:"Search icons...",value:this.query,autofocus:"autofocus"===this.automaticfocus?"autofocus":""}),i("i",{class:{"search-input__clear":!0,"search-input__clear--active":this.showClearCtrl,ion:!0,"ion-md-close":!0},onClick:this.handleClear.bind(this)}))}static get watchers(){return{query:["watchQuery"]}}};a.style='@charset "UTF-8";icon-search .search-input{position:relative}icon-search .search-input input{width:100%;font-weight:400;font-family:"Eina";font-size:16px;border:0;outline:0;border-radius:6px;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;-webkit-appearance:none;vertical-align:middle}icon-search .search-input__clear{-webkit-transition:background 0.3s, opacity 0.3s;transition:background 0.3s, opacity 0.3s;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);right:16px;font-size:14px;width:22px;height:22px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;cursor:pointer;color:var(--color-pale-sky);opacity:0;background-color:var(--color-catskill-white);border-radius:100px}icon-search .search-input__clear--active{opacity:0.8}icon-search .search-input__clear--active:hover{opacity:1;background-color:#e3e9f3}icon-search .search-input--small .search-input__clear{font-size:12px;width:18px;height:18px;background-color:#e3e9f3;right:12px}icon-search .search-input--small .search-input__clear--active:hover{background-color:#dce3f0}icon-search .search-input:before{font-family:"Ionicons";content:"";color:var(--color-heather);position:absolute;height:24px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}icon-search .search-input--small input{font-size:13px;line-height:18px;padding:10px;padding-left:30px;padding-right:30px;background-color:#f6f7f9;height:39px;text-indent:0}icon-search .search-input--small:before{font-size:18px;left:10px}icon-search .search-input--large input{-webkit-transition:-webkit-box-shadow 0.3s;transition:-webkit-box-shadow 0.3s;transition:box-shadow 0.3s;transition:box-shadow 0.3s, -webkit-box-shadow 0.3s;font-size:16px;line-height:22px;padding:20px;padding-left:50px;padding-right:50px;background-color:white;-webkit-box-shadow:0px 3px 6px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.08);box-shadow:0px 3px 6px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.08)}icon-search .search-input--large input:focus{-webkit-box-shadow:0px 6px 12px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.08);box-shadow:0px 6px 12px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.08)}icon-search .search-input--large:before{font-size:22px;left:20px}icon-search .search-input input::-webkit-input-placeholder{color:var(--color-heather)}icon-search .search-input input::-moz-placeholder{color:var(--color-heather)}icon-search .search-input input:-ms-input-placeholder{color:var(--color-heather)}icon-search .search-input input::-ms-input-placeholder{color:var(--color-heather)}icon-search .search-input input::placeholder{color:var(--color-heather)}';const h=class{constructor(e){t(this,e),this.data={version:void 0,icons:[]},this.query="",this.isHeaderSearchVisible=!1}handleScroll(){requestAnimationFrame(this.checkScroll.bind(this))}searchHandler(t){this.query=t.detail}toggleHandler(t){this.isHeaderSearchVisible="show"===t.detail}componentWillLoad(){return this.loadData()}async loadData(){const t=await fetch("/ionicons/v4/data.json"),e=await t.json();this.data=e,this.data.icons=e.icons.map(t=>(t.icons=t.icons.reverse(),t.name=t.icons[0].split("-").slice(1).join("-"),t))}checkScroll(){const t=document.querySelector("header .search-input"),e=document.querySelector("icon-list .search-input");if(!e||!t)return;const i=t.querySelector("input"),r=e.querySelector("input");if(e.getBoundingClientRect().top<e.scrollHeight/2){if(this.isHeaderSearchVisible)return;this.isHeaderSearchVisible=!0,r===document.activeElement&&i.focus()}else{if(!this.isHeaderSearchVisible)return;this.isHeaderSearchVisible=!1,i===document.activeElement&&r.focus()}}render(){return[i("header-bar",{version:this.data.version,query:this.query,isSearchVisible:this.isHeaderSearchVisible}),i("stencil-router",null,i("stencil-router-scroll-top",null,i("stencil-route-switch",{scrollTopOffset:0},i("stencil-route",{url:"/ionicons/v4/usage",component:"usage-page",componentProps:{data:this.data}}),i("stencil-route",{url:"/ionicons/v4",component:"landing-page",componentProps:{query:this.query,data:this.data}}),i("stencil-route",{component:"notfound-page"}))))]}};h.style="stencil-router>div{height:100%}";const c=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g"),l=t=>t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),p=t=>t.replace(/([=!:$/()])/g,"\\$1"),d=t=>t&&t.sensitive?"":"i",u=(t,e,i)=>{for(var r=(i=i||{}).strict,s=!1!==i.end,o=l(i.delimiter||"/"),n=i.delimiters||"./",a=[].concat(i.endsWith||[]).map(l).concat("$").join("|"),h="",c=!1,p=0;p<t.length;p++){var u=t[p];if("string"==typeof u)h+=l(u),c=p===t.length-1&&n.indexOf(u[u.length-1])>-1;else{var f=l(u.prefix||""),b=u.repeat?"(?:"+u.pattern+")(?:"+f+"(?:"+u.pattern+"))*":u.pattern;e&&e.push(u),h+=u.optional?u.partial?f+"("+b+")?":"(?:"+f+"("+b+"))?":f+"("+b+")"}}return s?(r||(h+="(?:"+o+")?"),h+="$"===a?"$":"(?="+a+")"):(r||(h+="(?:"+o+"(?="+a+"))?"),c||(h+="(?="+o+"|"+a+")")),new RegExp("^"+h,d(i))},f=(t,e,i)=>t instanceof RegExp?((t,e)=>{if(!e)return t;var i=t.source.match(/\((?!\?)/g);if(i)for(var r=0;r<i.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return t})(t,e):Array.isArray(t)?((t,e,i)=>{for(var r=[],s=0;s<t.length;s++)r.push(f(t[s],e,i).source);return new RegExp("(?:"+r.join("|")+")",d(i))})(t,e,i):((t,e,i)=>u(((t,e)=>{for(var i,r=[],s=0,o=0,n="",a=e&&e.delimiter||"/",h=e&&e.delimiters||"./",d=!1;null!==(i=c.exec(t));){var u=i[0],f=i[1],b=i.index;if(n+=t.slice(o,b),o=b+u.length,f)n+=f[1],d=!0;else{var g="",m=t[o],x=i[2],v=i[3],w=i[4],y=i[5];if(!d&&n.length){var k=n.length-1;h.indexOf(n[k])>-1&&(g=n[k],n=n.slice(0,k))}n&&(r.push(n),n="",d=!1);var _=g||a,L=v||w;r.push({name:x||s++,prefix:g,delimiter:_,optional:"?"===y||"*"===y,repeat:"+"===y||"*"===y,partial:""!==g&&void 0!==m&&m!==g,pattern:L?p(L):"[^"+l(_)+"]+?"})}}return(n||o<t.length)&&r.push(n+t.substr(o)),r})(t,i),e,i))(t,e,i),b=(t,e)=>new RegExp("^"+e+"(\\/|\\?|#|$)","i").test(t),g=(t,e)=>b(t,e)?t.substr(e.length):t,m=t=>"/"===t.charAt(t.length-1)?t.slice(0,-1):t,x=t=>"/"===t.charAt(0)?t:"/"+t,v=t=>"/"===t.charAt(0)?t.substr(1):t,w=t=>{const{pathname:e,search:i,hash:r}=t;let s=e||"/";return i&&"?"!==i&&(s+="?"===i.charAt(0)?i:"?"+i),r&&"#"!==r&&(s+="#"===r.charAt(0)?r:"#"+r),s},y=t=>"/"===t.charAt(0),k=t=>Math.random().toString(36).substr(2,t),_=(t,e)=>{for(let i=e,r=i+1,s=t.length;r<s;i+=1,r+=1)t[i]=t[r];t.pop()},L=(t,e)=>{if(t===e)return!0;if(null==t||null==e)return!1;if(Array.isArray(t))return Array.isArray(e)&&t.length===e.length&&t.every((t,i)=>L(t,e[i]));const i=typeof t;if(i!==typeof e)return!1;if("object"===i){const i=t.valueOf(),r=e.valueOf();if(i!==t||r!==e)return L(i,r);const s=Object.keys(t),o=Object.keys(e);return s.length===o.length&&s.every(i=>L(t[i],e[i]))}return!1},P=(t,e,i,r)=>{let s;"string"==typeof t?(s=(t=>{let e=t||"/",i="",r="";const s=e.indexOf("#");-1!==s&&(r=e.substr(s),e=e.substr(0,s));const o=e.indexOf("?");return-1!==o&&(i=e.substr(o),e=e.substr(0,o)),{pathname:e,search:"?"===i?"":i,hash:"#"===r?"":r,query:{},key:""}})(t),void 0!==e&&(s.state=e)):(s=Object.assign({pathname:""},t),s.search&&"?"!==s.search.charAt(0)&&(s.search="?"+s.search),s.hash&&"#"!==s.hash.charAt(0)&&(s.hash="#"+s.hash),void 0!==e&&void 0===s.state&&(s.state=e));try{s.pathname=decodeURI(s.pathname)}catch(n){throw n instanceof URIError?new URIError('Pathname "'+s.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):n}var o;return s.key=i,r?s.pathname?"/"!==s.pathname.charAt(0)&&(s.pathname=((t,e="")=>{let i,r=e&&e.split("/")||[],s=0;const o=t&&t.split("/")||[],n=t&&y(t),a=e&&y(e),h=n||a;if(t&&y(t)?r=o:o.length&&(r.pop(),r=r.concat(o)),!r.length)return"/";if(r.length){const t=r[r.length-1];i="."===t||".."===t||""===t}else i=!1;for(let l=r.length;l>=0;l--){const t=r[l];"."===t?_(r,l):".."===t?(_(r,l),s++):s&&(_(r,l),s--)}if(!h)for(;s--;s)r.unshift("..");!h||""===r[0]||r[0]&&y(r[0])||r.unshift("");let c=r.join("/");return i&&"/"!==c.substr(-1)&&(c+="/"),c})(s.pathname,r.pathname)):s.pathname=r.pathname:s.pathname||(s.pathname="/"),s.query=(o=s.search||"")?(/^[?#]/.test(o)?o.slice(1):o).split("&").reduce((t,e)=>{let[i,r]=e.split("=");return t[i]=r?decodeURIComponent(r.replace(/\+/g," ")):"",t},{}):{},s};let E=0;const A={},O=(t,e={})=>{"string"==typeof e&&(e={path:e});const{path:i="/",exact:r=!1,strict:s=!1}=e,{re:o,keys:n}=((t,e)=>{const i=`${e.end}${e.strict}`,r=A[i]||(A[i]={}),s=JSON.stringify(t);if(r[s])return r[s];const o=[],n={re:f(t,o,e),keys:o};return E<1e4&&(r[s]=n,E+=1),n})(i,{end:r,strict:s}),a=o.exec(t);if(!a)return null;const[h,...c]=a,l=t===h;return r&&!l?null:{path:i,url:"/"===i&&""===h?"/":h,isExact:l,params:n.reduce((t,e,i)=>(t[e.name]=c[i],t),{})}},S=class{constructor(e){t(this,e),this.group=null,this.match=null,this.componentProps={},this.exact=!1,this.scrollOnNextRender=!1,this.previousMatch=null}computeMatch(t){const e=null!=this.group||null!=this.el.parentElement&&"stencil-route-switch"===this.el.parentElement.tagName.toLowerCase();if(t&&!e)return this.previousMatch=this.match,this.match=O(t.pathname,{path:this.url,exact:this.exact,strict:!0})}async loadCompleted(){let t={};var e,i;this.history&&this.history.location.hash?t={scrollToId:this.history.location.hash.substr(1)}:this.scrollTopOffset&&(t={scrollTopOffset:this.scrollTopOffset}),"function"==typeof this.componentUpdated?this.componentUpdated(t):!this.match||(i=this.previousMatch,null==(e=this.match)&&null==i||null!=i&&e&&i&&e.path===i.path&&e.url===i.url&&L(e.params,i.params))||!this.routeViewsUpdated||this.routeViewsUpdated(t)}async componentDidUpdate(){await this.loadCompleted()}async componentDidLoad(){await this.loadCompleted()}render(){if(!this.match||!this.history)return null;const t=Object.assign({},this.componentProps,{history:this.history,match:this.match});return this.routeRender?this.routeRender(Object.assign({},t,{component:this.component})):this.component?i(this.component,Object.assign({},t)):void 0}get el(){return r(this)}static get watchers(){return{location:["computeMatch"]}}};o.injectProps(S,["location","history","historyType","routeViewsUpdated"]),S.style="stencil-route.inactive{display:none}";const j=(t,e,i)=>i(t.confirm(e)),C=(t,e)=>{const i=t[e],r="__storage_test__";try{return i.setItem(r,r),i.removeItem(r),!0}catch(s){return s instanceof DOMException&&(22===s.code||1014===s.code||"QuotaExceededError"===s.name||"NS_ERROR_DOM_QUOTA_REACHED"===s.name)&&0!==i.length}},z=class{constructor(e){t(this,e),this.unsubscribe=()=>{},this.activeClass="link-active",this.exact=!1,this.strict=!0,this.custom="a",this.match=null}componentWillLoad(){this.computeMatch()}computeMatch(){this.location&&(this.match=O(this.location.pathname,{path:this.urlMatch||this.url,exact:this.exact,strict:this.strict}))}handleClick(t){var e,i,r;if(!((e=t).metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&this.history&&this.url&&this.root)return t.preventDefault(),this.history.push((r=this.root,"/"==(i=this.url).charAt(0)&&"/"==r.charAt(r.length-1)?r.slice(0,r.length-1)+i:r+i))}render(){let t={class:{[this.activeClass]:null!==this.match},onClick:this.handleClick.bind(this)};return this.anchorClass&&(t.class[this.anchorClass]=!0),"a"===this.custom&&(t=Object.assign({},t,{href:this.url,title:this.anchorTitle,role:this.anchorRole,tabindex:this.anchorTabIndex,"aria-haspopup":this.ariaHaspopup,id:this.anchorId,"aria-posinset":this.ariaPosinset,"aria-setsize":this.ariaSetsize,"aria-label":this.ariaLabel})),i(this.custom,Object.assign({},t),i("slot",null))}get el(){return r(this)}static get watchers(){return{location:["computeMatch"]}}};o.injectProps(z,["history","location","root"]);const R=t=>"STENCIL-ROUTE"===t.tagName,U=class{constructor(e){t(this,e),this.group=((1e17*Math.random()).toString().match(/.{4}/g)||[]).join("-"),this.subscribers=[],this.queue=s(this,"queue")}componentWillLoad(){null!=this.location&&this.regenerateSubscribers(this.location)}async regenerateSubscribers(t){if(null==t)return;let e=-1;if(this.subscribers=Array.prototype.slice.call(this.el.children).filter(R).map((i,r)=>{const s=O(t.pathname,{path:i.url,exact:i.exact,strict:!0});return s&&-1===e&&(e=r),{el:i,match:s}}),-1===e)return;if(this.activeIndex===e)return void(this.subscribers[e].el.match=this.subscribers[e].match);this.activeIndex=e;const i=this.subscribers[this.activeIndex];this.scrollTopOffset&&(i.el.scrollTopOffset=this.scrollTopOffset),i.el.group=this.group,i.el.match=i.match,i.el.componentUpdated=t=>{this.queue.write(()=>{this.subscribers.forEach((t,e)=>{if(t.el.componentUpdated=void 0,e===this.activeIndex)return t.el.style.display="";this.scrollTopOffset&&(t.el.scrollTopOffset=this.scrollTopOffset),t.el.group=this.group,t.el.match=null,t.el.style.display="none"})}),this.routeViewsUpdated&&this.routeViewsUpdated(Object.assign({scrollTopOffset:this.scrollTopOffset},t))}}render(){return i("slot",null)}get el(){return r(this)}static get watchers(){return{location:["regenerateSubscribers"]}}};o.injectProps(U,["location","routeViewsUpdated"]);const T=(t,...e)=>{t||console.warn(...e)},H=()=>{let t,e=[];return{setPrompt:e=>(T(null==t,"A history supports only one prompt at a time"),t=e,()=>{t===e&&(t=null)}),confirmTransitionTo:(e,i,r,s)=>{if(null!=t){const o="function"==typeof t?t(e,i):t;"string"==typeof o?"function"==typeof r?r(o,s):(T(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),s(!0)):s(!1!==o)}else s(!0)},appendListener:t=>{let i=!0;const r=(...e)=>{i&&t(...e)};return e.push(r),()=>{i=!1,e=e.filter(t=>t!==r)}},notifyListeners:(...t)=>{e.forEach(e=>e(...t))}}},M=(t,e="scrollPositions")=>{let i=new Map;const r=(e,r)=>{if(i.set(e,r),C(t,"sessionStorage")){const e=[];i.forEach((t,i)=>{e.push([i,t])}),t.sessionStorage.setItem("scrollPositions",JSON.stringify(e))}};if(C(t,"sessionStorage")){const r=t.sessionStorage.getItem(e);i=r?new Map(JSON.parse(r)):i}return"scrollRestoration"in t.history&&(history.scrollRestoration="manual"),{set:r,get:t=>i.get(t),has:t=>i.has(t),capture:e=>{r(e,[t.scrollX,t.scrollY])}}},Y={hashbang:{encodePath:t=>"!"===t.charAt(0)?t:"!/"+v(t),decodePath:t=>"!"===t.charAt(0)?t.substr(1):t},noslash:{encodePath:v,decodePath:x},slash:{encodePath:x,decodePath:x}},$=(t,e)=>{const i=0==t.pathname.indexOf(e)?"/"+t.pathname.slice(e.length):t.pathname;return Object.assign({},t,{pathname:i})},q={browser:(t,e={})=>{let i=!1;const r=t.history,s=t.location,o=t.navigator,n=(t=>{const e=t.navigator.userAgent;return(-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&t.history&&"pushState"in t.history})(t),a=!(-1===o.userAgent.indexOf("Trident")),h=M(t),c=null!=e.forceRefresh&&e.forceRefresh,l=null!=e.getUserConfirmation?e.getUserConfirmation:j,p=null!=e.keyLength?e.keyLength:6,d=e.basename?m(x(e.basename)):"",u=()=>{try{return t.history.state||{}}catch(e){return{}}},f=t=>{t=t||{};const{key:e,state:i}=t,{pathname:r,search:o,hash:n}=s;let a=r+o+n;return T(!d||b(a,d),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+a+'" to begin with "'+d+'".'),d&&(a=g(a,d)),P(a,i,e||k(p))},v=H(),y=t=>{h.capture($.location.key),Object.assign($,t),$.location.scrollPosition=h.get($.location.key),$.length=r.length,v.notifyListeners($.location,$.action)},_=t=>{((t,e)=>void 0===e.state&&-1===t.userAgent.indexOf("CriOS"))(o,t)||E(f(t.state))},L=()=>{E(f(u()))},E=t=>{if(i)i=!1,y();else{const e="POP";v.confirmTransitionTo(t,e,l,i=>{i?y({action:e,location:t}):A(t)})}},A=t=>{let e=S.indexOf($.location.key),r=S.indexOf(t.key);-1===e&&(e=0),-1===r&&(r=0);const s=e-r;s&&(i=!0,U(s))},O=f(u());let S=[O.key],C=0,z=!1;const R=t=>d+w(t),U=t=>{r.go(t)},Y=e=>{C+=e,1===C?(t.addEventListener("popstate",_),a&&t.addEventListener("hashchange",L)):0===C&&(t.removeEventListener("popstate",_),a&&t.removeEventListener("hashchange",L))},$={length:r.length,action:"POP",location:O,createHref:R,push:(t,e)=>{T(!("object"==typeof t&&void 0!==t.state&&void 0!==e),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");const i=P(t,e,k(p),$.location);v.confirmTransitionTo(i,"PUSH",l,t=>{if(!t)return;const e=R(i),{key:o,state:a}=i;if(n)if(r.pushState({key:o,state:a},"",e),c)s.href=e;else{const t=S.indexOf($.location.key),e=S.slice(0,-1===t?0:t+1);e.push(i.key),S=e,y({action:"PUSH",location:i})}else T(void 0===a,"Browser history cannot push state in browsers that do not support HTML5 history"),s.href=e})},replace:(t,e)=>{T(!("object"==typeof t&&void 0!==t.state&&void 0!==e),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");const i=P(t,e,k(p),$.location);v.confirmTransitionTo(i,"REPLACE",l,t=>{if(!t)return;const e=R(i),{key:o,state:a}=i;if(n)if(r.replaceState({key:o,state:a},"",e),c)s.replace(e);else{const t=S.indexOf($.location.key);-1!==t&&(S[t]=i.key),y({action:"REPLACE",location:i})}else T(void 0===a,"Browser history cannot replace state in browsers that do not support HTML5 history"),s.replace(e)})},go:U,goBack:()=>U(-1),goForward:()=>U(1),block:(t="")=>{const e=v.setPrompt(t);return z||(Y(1),z=!0),()=>(z&&(z=!1,Y(-1)),e())},listen:t=>{const e=v.appendListener(t);return Y(1),()=>{Y(-1),e()}},win:t};return $},hash:(t,e={})=>{let i=!1,r=null,s=0,o=!1;const n=t.location,a=t.history,h=-1===t.navigator.userAgent.indexOf("Firefox"),c=null!=e.keyLength?e.keyLength:6,{getUserConfirmation:l=j,hashType:p="slash"}=e,d=e.basename?m(x(e.basename)):"",{encodePath:u,decodePath:f}=Y[p],v=()=>{const t=n.href,e=t.indexOf("#");return-1===e?"":t.substring(e+1)},y=t=>{const e=n.href.indexOf("#");n.replace(n.href.slice(0,e>=0?e:0)+"#"+t)},_=()=>{let t=f(v());return T(!d||b(t,d),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+t+'" to begin with "'+d+'".'),d&&(t=g(t,d)),P(t,void 0,k(c))},E=H(),A=t=>{Object.assign(B,t),B.length=a.length,E.notifyListeners(B.location,B.action)},O=()=>{const t=v(),e=u(t);if(t!==e)y(e);else{const t=_(),e=B.location;if(!i&&(s=e).pathname===(o=t).pathname&&s.search===o.search&&s.hash===o.hash&&s.key===o.key&&L(s.state,o.state))return;if(r===w(t))return;r=null,S(t)}var s,o},S=t=>{if(i)i=!1,A();else{const e="POP";E.confirmTransitionTo(t,e,l,i=>{i?A({action:e,location:t}):C(t)})}},C=t=>{let e=M.lastIndexOf(w(B.location)),r=M.lastIndexOf(w(t));-1===e&&(e=0),-1===r&&(r=0);const s=e-r;s&&(i=!0,$(s))},z=v(),R=u(z);z!==R&&y(R);const U=_();let M=[w(U)];const $=t=>{T(h,"Hash history go(n) causes a full page reload in this browser"),a.go(t)},q=(t,e)=>{s+=e,1===s?t.addEventListener("hashchange",O):0===s&&t.removeEventListener("hashchange",O)},B={length:a.length,action:"POP",location:U,createHref:t=>"#"+u(d+w(t)),push:(t,e)=>{T(void 0===e,"Hash history cannot push state; it is ignored");const i=P(t,void 0,k(c),B.location);E.confirmTransitionTo(i,"PUSH",l,t=>{if(!t)return;const e=w(i),s=u(d+e);if(v()!==s){r=e,(t=>{n.hash=t})(s);const t=M.lastIndexOf(w(B.location)),o=M.slice(0,-1===t?0:t+1);o.push(e),M=o,A({action:"PUSH",location:i})}else T(!1,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack"),A()})},replace:(t,e)=>{T(void 0===e,"Hash history cannot replace state; it is ignored");const i=P(t,void 0,k(c),B.location);E.confirmTransitionTo(i,"REPLACE",l,t=>{if(!t)return;const e=w(i),s=u(d+e);v()!==s&&(r=e,y(s));const o=M.indexOf(w(B.location));-1!==o&&(M[o]=e),A({action:"REPLACE",location:i})})},go:$,goBack:()=>$(-1),goForward:()=>$(1),block:(e="")=>{const i=E.setPrompt(e);return o||(q(t,1),o=!0),()=>(o&&(o=!1,q(t,-1)),i())},listen:e=>{const i=E.appendListener(e);return q(t,1),()=>{q(t,-1),i()}},win:t};return B}},B=class{constructor(e){t(this,e),this.root="/",this.historyType="browser",this.titleSuffix="",this.routeViewsUpdated=(t={})=>{if(this.history&&t.scrollToId&&"browser"===this.historyType){const e=this.history.win.document.getElementById(t.scrollToId);if(e)return e.scrollIntoView()}this.scrollTo(t.scrollTopOffset||this.scrollTopOffset)},this.isServer=s(this,"isServer"),this.queue=s(this,"queue")}componentWillLoad(){this.history=q[this.historyType](this.el.ownerDocument.defaultView),this.history.listen(t=>{t=$(t,this.root),this.location=t}),this.location=$(this.history.location,this.root)}scrollTo(t){const e=this.history;if(null!=t&&!this.isServer&&e)return"POP"===e.action&&Array.isArray(e.location.scrollPosition)?this.queue.write(()=>{e&&e.location&&Array.isArray(e.location.scrollPosition)&&e.win.scrollTo(e.location.scrollPosition[0],e.location.scrollPosition[1])}):this.queue.write(()=>{e.win.scrollTo(0,t)})}render(){if(this.location&&this.history)return i(o.Provider,{state:{historyType:this.historyType,location:this.location,titleSuffix:this.titleSuffix,root:this.root,history:this.history,routeViewsUpdated:this.routeViewsUpdated}},i("slot",null))}get el(){return r(this)}};export{n as header_bar,a as icon_search,h as ionicons_site,S as stencil_route,z as stencil_route_link,U as stencil_route_switch,B as stencil_router}
System.register(["./p-a41addb1.system.js","./p-4ffbfde7.system.js","./p-e8899b57.system.js"],(function(o){"use strict";var t,i,e,a,n;return{setters:[function(o){t=o.r;i=o.c;e=o.h;a=o.H},function(){},function(o){n=o.B}],execute:function(){var r=":root{--modal-z-index:1100;--modal-backdrop-z-index:1090;--modal-width:768px;--modal-padding:48px;--modal-border-radius:24px}site-modal{display:block;pointer-events:none;position:fixed;top:0;left:0;bottom:0;right:0;z-index:var(--modal-z-index)}.modal__backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:var(--modal-backdrop-z-index);-webkit-transition:opacity 300ms ease-in-out;transition:opacity 300ms ease-in-out;background-color:#000;opacity:0}.modal__backdrop.in{opacity:0.5}.modal__backdrop.out{opacity:0}.modal__wrap{-webkit-transition:-webkit-transform 300ms cubic-bezier(0.32, 0.72, 0, 1);transition:-webkit-transform 300ms cubic-bezier(0.32, 0.72, 0, 1);transition:transform 300ms cubic-bezier(0.32, 0.72, 0, 1);transition:transform 300ms cubic-bezier(0.32, 0.72, 0, 1), -webkit-transform 300ms cubic-bezier(0.32, 0.72, 0, 1);-webkit-transform:translateY(-120%);transform:translateY(-120%)}.modal__wrap.in{-webkit-transform:translate(0%);transform:translate(0%)}.modal__content{pointer-events:auto;max-width:var(--modal-width);margin:76px auto;background:white;position:relative;border-radius:var(--modal-border-radius)}.modal__content .modal__close-button{position:absolute;top:-10px;right:-10px;background:#fff;color:var(--c-carbon-90);padding:0;text-align:center;border:0;border-radius:100%;height:30px;width:30px;-webkit-box-shadow:var(--elevation-2);box-shadow:var(--elevation-2);outline:0}.modal__content .modal__close-button ion-icon{vertical-align:middle;margin-top:-3px}.modal__body{padding:var(--modal-padding);max-height:calc(100vh - 76px);overflow:auto}.modal__body h1,.modal__body h2,.modal__body h3,.modal__body h4,.modal__body h5{margin-top:0}";var d=o("site_modal",function(){function o(o){var e=this;t(this,o);this.open=false;this.visible=false;this.OPEN_DELAY=500;this.CLOSE_DELAY=500;this.close=function(){e.visible=false;e.hideBackdrop();setTimeout((function(){e.open=false}),e.CLOSE_DELAY)};this.openBackdrop=function(){var o=document.createElement("div");o.className="modal__backdrop";document.body.appendChild(o);e.initBackdrop(o);e.backdropEl=o;requestAnimationFrame((function(){o.classList.add("in")}))};this.hideBackdrop=function(){if(!e.backdropEl){return}e.backdropEl.classList.add("out");setTimeout((function(){var o;document.body.removeChild(e.backdropEl);e.backdropEl=null;e.modalClose&&e.modalClose();(o=e.onModalClose)===null||o===void 0?void 0:o.emit()}),e.CLOSE_DELAY)};this.checkBackdrop=function(){};this.initBackdrop=function(o){o.addEventListener("click",(function(o){e.close()}))};this.onModalClose=i(this,"modalClose",7)}o.prototype.componentDidLoad=function(){this.checkBackdrop()};o.prototype.handleKeyUp=function(o){if(this.open&&o.key==="Escape"){this.close()}};o.prototype.openChanged=function(){var o=this;if(this.open&&!this.backdropEl){this.openBackdrop()}else if(!this.open&&this.backdropEl){this.hideBackdrop()}requestAnimationFrame((function(){o.visible=o.open}))};o.prototype.render=function(){return e(a,{style:{display:this.open?"block":"none"}},e("div",{class:"modal__wrap"+(this.visible?" in":"")},e("div",{class:"modal__content"},e(n,{class:"modal__close-button",onClick:this.close},e("ion-icon",{name:"close"})),e("div",{class:"modal__body"},e("slot",null)))))};Object.defineProperty(o,"watchers",{get:function(){return{open:["openChanged"]}},enumerable:false,configurable:true});return o}());d.style=r}}}));
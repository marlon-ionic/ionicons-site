import{r as t,g as s}from"./p-5f00bf62.js";const e=class{constructor(s){t(this,s),this.context={},this.renderer=()=>null}connectedCallback(){null!=this.subscribe&&(this.unsubscribe=this.subscribe(this.el,"context"))}disconnectedCallback(){null!=this.unsubscribe&&this.unsubscribe()}render(){return this.renderer(Object.assign({},this.context))}get el(){return s(this)}};export{e as context_consumer};
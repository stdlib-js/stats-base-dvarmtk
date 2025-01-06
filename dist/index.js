"use strict";var q=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var d=q(function(B,m){
function R(r,e,i,t,a,l){var v,u,n,s,o;if(s=r-i,r<=0||s<=0)return NaN;if(r===1||a===0)return 0;for(v=l,u=0,o=0;o<r;o++)n=t[v]-e,u+=n*n,v+=a;return u/s}m.exports=R
});var p=q(function(C,c){
var _=require('@stdlib/strided-base-stride2offset/dist'),E=d();function M(r,e,i,t,a){return E(r,e,i,t,a,_(r,a))}c.exports=M
});var k=q(function(D,y){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=p(),b=d();O(x,"ndarray",b);y.exports=x
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=k(),f,j=h(g(__dirname,"./native.js"));w(j)?f=z:f=j;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

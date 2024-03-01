"use strict";var q=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var d=q(function(z,c){
function M(r,e,s,o,a){var u,i,t,v,n;if(v=r-s,r<=0||v<=0)return NaN;if(r===1||a===0)return 0;for(a<0?u=(1-r)*a:u=0,i=0,n=0;n<r;n++)t=o[u]-e,i+=t*t,u+=a;return i/v}c.exports=M
});var p=q(function(A,x){
function R(r,e,s,o,a,u){var i,t,v,n,f;if(n=r-s,r<=0||n<=0)return NaN;if(r===1||a===0)return 0;for(i=u,t=0,f=0;f<r;f++)v=o[i]-e,t+=v*v,i+=a;return t/n}x.exports=R
});var j=q(function(B,y){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=d(),E=p();_(k,"ndarray",E);y.exports=k
});var O=require("path").join,b=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=j(),m,l=b(O(__dirname,"./native.js"));g(l)?m=h:m=l;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";function t(r,e,t,n,s,d){var i,a,o,f,m;if(f=r-t,r<=0||f<=0)return NaN;if(1===r||0===s)return 0;for(i=d,a=0,m=0;m<r;m++)a+=(o=n[i]-e)*o,i+=s;return a/f}function n(r,n,s,d,i){return t(r,n,s,d,i,e(r,i))}r(n,"ndarray",t);export{n as default,t as ndarray};
//# sourceMappingURL=index.mjs.map

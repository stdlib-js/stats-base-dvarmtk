// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";function n(r,n,e,t,a){var i,f,u,o,d;if(o=r-e,r<=0||o<=0)return NaN;if(1===r||0===a)return 0;for(i=a<0?(1-r)*a:0,f=0,d=0;d<r;d++)f+=(u=t[i]-n)*u,i+=a;return f/o}function e(r,n,e,t,a,i){var f,u,o,d,s;if(d=r-e,r<=0||d<=0)return NaN;if(1===r||0===a)return 0;for(f=i,u=0,s=0;s<r;s++)u+=(o=t[f]-n)*o,f+=a;return u/d}r(n,"ndarray",e);export{n as default,e as ndarray};
//# sourceMappingURL=index.mjs.map

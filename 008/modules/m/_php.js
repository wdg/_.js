//# sourceMappingURL=_php.js.map
//# sourceMappingURL=_php.js.map
//# sourceMappingURL=_php.js.map
window._?(window.PHPjs="http://www.phpjs.org",window._.fn.base64_decode=function(a){var b,g,f,c,n,h=0,d=0;c="";var r=[];if(!a)return a;a+="";do b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(h++)),g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(h++)),c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(h++)),n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(h++)),
f=b<<18|g<<12|c<<6|n,b=f>>16&255,g=f>>8&255,f&=255,64===c?r[d++]=String.fromCharCode(b):64===n?r[d++]=String.fromCharCode(b,g):r[d++]=String.fromCharCode(b,g,f);while(h<a.length);c=r.join("");return c.replace(/\0+$/,"")},window._.fn.base64_encode=function(a){var b,g,f,c,n=0,h=0,d="",d=[];if(!a)return a;do b=a.charCodeAt(n++),g=a.charCodeAt(n++),f=a.charCodeAt(n++),c=b<<16|g<<8|f,b=c>>18&63,g=c>>12&63,f=c>>6&63,c&=63,d[h++]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(b)+
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(g)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(f)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c);while(n<a.length);d=d.join("");a=a.length%3;return(a?d.slice(0,a-3):d)+"===".slice(a||3)},window._.fn.implode=function(a,b){var g="",f="",c="";1===arguments.length&&(b=a,a="");if("object"===typeof b){if("[object Array]"===Object.prototype.toString.call(b))return b.join(a);
for(g in b)f+=c+b[g],c=a;return f}return b},window._.fn.chr=function(a){return 65535<a?(a-=65536,String.fromCharCode(55296+(a>>10),56320+(a&1023))):String.fromCharCode(a)},window._.fn.ord=function(a){var b=a+"";a=b.charCodeAt(0);if(55296<=a&&56319>=a){if(1===b.length)return a;b=b.charCodeAt(1);return 1024*(a-55296)+(b-56320)+65536}return a},window._.fn.bin2hex=function(a){var b,g,f="",c;a+="";b=0;for(g=a.length;b<g;b++)c=a.charCodeAt(b).toString(16),f+=2>c.length?"0"+c:c;return f},window._.fn.sprintf=
function(){var a=arguments,b=0,g=function(a,d,b,e){b||(b=" ");d=a.length>=d?"":Array(1+d-a.length>>>0).join(b);return e?a+d:d+a},f=function(a,b,c,e,f,m){var l=e-a.length;0<l&&(a=c||!f?g(a,e,m,c):a.slice(0,b.length)+g("",l,"0",!0)+a.slice(b.length));return a},c=function(a,b,c,e,k,m,l){a>>>=0;c=c&&a&&{2:"0b",8:"0",16:"0x"}[b]||"";a=c+g(a.toString(b),m||0,"0",!1);return f(a,c,e,k,l)},n=function(a,b,c,e,g,m){null!==e&&void 0!==e&&(a=a.slice(0,e));return f(a,"",b,c,g,m)};return a[b++].replace(/%%|%(\d+\$)?([\-+\'#0 ]*)(\*\d+\$|\*|\d+)?(?:\.(\*\d+\$|\*|\d+))?([scboxXuideEfFgG])/g,
function(h,d,r,e,k,m){var l,t;if("%%"===h)return"%";var p=!1;l="";var q=!1;t=!1;var v=" ",w=r.length,u;for(u=0;r&&u<w;u++)switch(r.charAt(u)){case " ":l=" ";break;case "+":l="+";break;case "-":p=!0;break;case "'":v=r.charAt(u+1);break;case "0":q=!0;v="0";break;case "#":t=!0}e=e?"*"===e?+a[b++]:"*"===e.charAt(0)?+a[e.slice(1,-1)]:+e:0;0>e&&(e=-e,p=!0);if(!isFinite(e))throw Error("sprintf: (minimum-)width must be finite");k=k?"*"===k?+a[b++]:"*"===k.charAt(0)?+a[k.slice(1,-1)]:+k:-1<"fFeE".indexOf(m)?
6:"d"===m?0:void 0;d=d?a[d.slice(0,-1)]:a[b++];switch(m){case "s":return n(String(d),p,e,k,q,v);case "c":return n(String.fromCharCode(+d),p,e,k,q);case "b":return c(d,2,t,p,e,k,q);case "o":return c(d,8,t,p,e,k,q);case "x":return c(d,16,t,p,e,k,q);case "X":return c(d,16,t,p,e,k,q).toUpperCase();case "u":return c(d,10,t,p,e,k,q);case "i":case "d":return h=+d||0,h=Math.round(h-h%1),l=0>h?"-":l,d=l+g(String(Math.abs(h)),k,"0",!1),f(d,l,p,e,q);case "e":case "E":case "f":case "F":case "g":case "G":return h=
+d,l=0>h?"-":l,t=["toExponential","toFixed","toPrecision"]["efg".indexOf(m.toLowerCase())],m=["toString","toUpperCase"]["eEfFgG".indexOf(m)%2],d=l+Math.abs(h)[t](k),f(d,l,p,e,q)[m]();default:return h}})},window._.fn.nl2br=function(a){return a.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,"$1<br>$2")},window._.fn.strlen=function(a){return a.length},window._.fn.strtolower=function(a){return a.toLowerCase()},window._.fn.strtoupper=function(a){return a.toUpperCase()},window._.fn.explode=function(a,b){return a.split(b)},
window._.fn.join=function(a,b){return this.implode(a,b)}):window.alert("Please make sure _.js is loaded!");

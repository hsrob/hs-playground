/*
 AngularJS v1.0.7
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(P,T,q){'use strict';function m(b,a,c){var d;if(b)if(H(b))for(d in b)d!="prototype"&&d!="length"&&d!="name"&&b.hasOwnProperty(d)&&a.call(c,b[d],d);else if(b.forEach&&b.forEach!==m)b.forEach(a,c);else if(!b||typeof b.length!=="number"?0:typeof b.hasOwnProperty!="function"&&typeof b.constructor!="function"||b instanceof K||ca&&b instanceof ca||wa.call(b)!=="[object Object]"||typeof b.callee==="function")for(d=0;d<b.length;d++)a.call(c,b[d],d);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],
d);return b}function mb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function fc(b,a,c){for(var d=mb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function nb(b){return function(a,c){b(c,a)}}function xa(){for(var b=aa.length,a;b;){b--;a=aa[b].charCodeAt(0);if(a==57)return aa[b]="A",aa.join("");if(a==90)aa[b]="0";else return aa[b]=String.fromCharCode(a+1),aa.join("")}aa.unshift("0");return aa.join("")}function ob(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function v(b){var a=
b.$$hashKey;m(arguments,function(a){a!==b&&m(a,function(a,c){b[c]=a})});ob(b,a);return b}function G(b){return parseInt(b,10)}function ya(b,a){return v(new (v(function(){},{prototype:b})),a)}function C(){}function ma(b){return b}function I(b){return function(){return b}}function w(b){return typeof b=="undefined"}function y(b){return typeof b!="undefined"}function L(b){return b!=null&&typeof b=="object"}function B(b){return typeof b=="string"}function Qa(b){return typeof b=="number"}function na(b){return wa.apply(b)==
"[object Date]"}function E(b){return wa.apply(b)=="[object Array]"}function H(b){return typeof b=="function"}function oa(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function Q(b){return B(b)?b.replace(/^\s*/,"").replace(/\s*$/,""):b}function gc(b){return b&&(b.nodeName||b.bind&&b.find)}function Ra(b,a,c){var d=[];m(b,function(b,g,h){d.push(a.call(c,b,g,h))});return d}function za(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function Sa(b,
a){var c=za(b,a);c>=0&&b.splice(c,1);return a}function U(b,a){if(oa(b)||b&&b.$evalAsync&&b.$watch)throw Error("Can't copy Window or Scope");if(a){if(b===a)throw Error("Can't copy equivalent objects or arrays");if(E(b))for(var c=a.length=0;c<b.length;c++)a.push(U(b[c]));else{c=a.$$hashKey;m(a,function(b,c){delete a[c]});for(var d in b)a[d]=U(b[d]);ob(a,c)}}else(a=b)&&(E(b)?a=U(b,[]):na(b)?a=new Date(b.getTime()):L(b)&&(a=U(b,{})));return a}function hc(b,a){var a=a||{},c;for(c in b)b.hasOwnProperty(c)&&
c.substr(0,2)!=="$$"&&(a[c]=b[c]);return a}function fa(b,a){if(b===a)return!0;if(b===null||a===null)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&c=="object")if(E(b)){if((c=b.length)==a.length){for(d=0;d<c;d++)if(!fa(b[d],a[d]))return!1;return!0}}else if(na(b))return na(a)&&b.getTime()==a.getTime();else{if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||oa(b)||oa(a))return!1;c={};for(d in b)if(!(d.charAt(0)==="$"||H(b[d]))){if(!fa(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c[d]&&
d.charAt(0)!=="$"&&a[d]!==q&&!H(a[d]))return!1;return!0}return!1}function Ta(b,a){var c=arguments.length>2?ha.call(arguments,2):[];return H(a)&&!(a instanceof RegExp)?c.length?function(){return arguments.length?a.apply(b,c.concat(ha.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}:a}function ic(b,a){var c=a;/^\$+/.test(b)?c=q:oa(a)?c="$WINDOW":a&&T===a?c="$DOCUMENT":a&&a.$evalAsync&&a.$watch&&(c="$SCOPE");return c}function da(b,a){return JSON.stringify(b,
ic,a?"  ":null)}function pb(b){return B(b)?JSON.parse(b):b}function Ua(b){b&&b.length!==0?(b=z(""+b),b=!(b=="f"||b=="0"||b=="false"||b=="no"||b=="n"||b=="[]")):b=!1;return b}function pa(b){b=u(b).clone();try{b.html("")}catch(a){}var c=u("<div>").append(b).html();try{return b[0].nodeType===3?z(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+z(b)})}catch(d){return z(c)}}function Va(b){var a={},c,d;m((b||"").split("&"),function(b){b&&(c=b.split("="),d=decodeURIComponent(c[0]),
a[d]=y(c[1])?decodeURIComponent(c[1]):!0)});return a}function qb(b){var a=[];m(b,function(b,d){a.push(Wa(d,!0)+(b===!0?"":"="+Wa(b,!0)))});return a.length?a.join("&"):""}function Xa(b){return Wa(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Wa(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function jc(b,a){function c(a){a&&d.push(a)}var d=[b],e,g,h=["ng:app","ng-app","x-ng-app",
"data-ng-app"],f=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;m(h,function(a){h[a]=!0;c(T.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(m(b.querySelectorAll("."+a),c),m(b.querySelectorAll("."+a+"\\:"),c),m(b.querySelectorAll("["+a+"]"),c))});m(d,function(a){if(!e){var b=f.exec(" "+a.className+" ");b?(e=a,g=(b[2]||"").replace(/\s+/g,",")):m(a.attributes,function(b){if(!e&&h[b.name])e=a,g=b.value})}});e&&a(e,g?[g]:[])}function rb(b,a){var c=function(){b=u(b);a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",
b)}]);a.unshift("ng");var c=sb(a);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},d=/^NG_DEFER_BOOTSTRAP!/;if(P&&!d.test(P.name))return c();P.name=P.name.replace(d,"");Ya.resumeBootstrap=function(b){m(b,function(b){a.push(b)});c()}}function Za(b,a){a=a||"_";return b.replace(kc,function(b,d){return(d?a:"")+b.toLowerCase()})}function $a(b,a,c){if(!b)throw Error("Argument '"+(a||"?")+"' is "+(c||"required"));
return b}function qa(b,a,c){c&&E(b)&&(b=b[b.length-1]);$a(H(b),a,"not a function, got "+(b&&typeof b=="object"?b.constructor.name||"Object":typeof b));return b}function lc(b){function a(a,b,e){return a[b]||(a[b]=e())}return a(a(b,"angular",Object),"module",function(){var b={};return function(d,e,g){e&&b.hasOwnProperty(d)&&(b[d]=null);return a(b,d,function(){function a(c,d,e){return function(){b[e||"push"]([c,d,arguments]);return k}}if(!e)throw Error("No module: "+d);var b=[],c=[],j=a("$injector",
"invoke"),k={_invokeQueue:b,_runBlocks:c,requires:e,name:d,provider:a("$provide","provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:j,run:function(a){c.push(a);return this}};g&&j(g);return k})}})}function tb(b){return b.replace(mc,function(a,b,d,e){return e?d.toUpperCase():
d}).replace(nc,"Moz$1")}function ab(b,a){function c(){var e;for(var b=[this],c=a,h,f,i,j,k,l;b.length;){h=b.shift();f=0;for(i=h.length;f<i;f++){j=u(h[f]);c?j.triggerHandler("$destroy"):c=!c;k=0;for(e=(l=j.children()).length,j=e;k<j;k++)b.push(ca(l[k]))}}return d.apply(this,arguments)}var d=ca.fn[b],d=d.$original||d;c.$original=d;ca.fn[b]=c}function K(b){if(b instanceof K)return b;if(!(this instanceof K)){if(B(b)&&b.charAt(0)!="<")throw Error("selectors not implemented");return new K(b)}if(B(b)){var a=
T.createElement("div");a.innerHTML="<div>&#160;</div>"+b;a.removeChild(a.firstChild);bb(this,a.childNodes);this.remove()}else bb(this,b)}function cb(b){return b.cloneNode(!0)}function ra(b){ub(b);for(var a=0,b=b.childNodes||[];a<b.length;a++)ra(b[a])}function vb(b,a,c){var d=ba(b,"events");ba(b,"handle")&&(w(a)?m(d,function(a,c){db(b,c,a);delete d[c]}):w(c)?(db(b,a,d[a]),delete d[a]):Sa(d[a],c))}function ub(b){var a=b[Aa],c=Ba[a];c&&(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),vb(b)),delete Ba[a],
b[Aa]=q)}function ba(b,a,c){var d=b[Aa],d=Ba[d||-1];if(y(c))d||(b[Aa]=d=++oc,d=Ba[d]={}),d[a]=c;else return d&&d[a]}function wb(b,a,c){var d=ba(b,"data"),e=y(c),g=!e&&y(a),h=g&&!L(a);!d&&!h&&ba(b,"data",d={});if(e)d[a]=c;else if(g)if(h)return d&&d[a];else v(d,a);else return d}function Ca(b,a){return(" "+b.className+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" ")>-1}function xb(b,a){a&&m(a.split(" "),function(a){b.className=Q((" "+b.className+" ").replace(/[\n\t]/g," ").replace(" "+Q(a)+" "," "))})}
function yb(b,a){a&&m(a.split(" "),function(a){if(!Ca(b,a))b.className=Q(b.className+" "+Q(a))})}function bb(b,a){if(a)for(var a=!a.nodeName&&y(a.length)&&!oa(a)?a:[a],c=0;c<a.length;c++)b.push(a[c])}function zb(b,a){return Da(b,"$"+(a||"ngController")+"Controller")}function Da(b,a,c){b=u(b);for(b[0].nodeType==9&&(b=b.find("html"));b.length;){if(c=b.data(a))return c;b=b.parent()}}function Ab(b,a){var c=Ea[a.toLowerCase()];return c&&Bb[b.nodeName]&&c}function pc(b,a){var c=function(c,e){if(!c.preventDefault)c.preventDefault=
function(){c.returnValue=!1};if(!c.stopPropagation)c.stopPropagation=function(){c.cancelBubble=!0};if(!c.target)c.target=c.srcElement||T;if(w(c.defaultPrevented)){var g=c.preventDefault;c.preventDefault=function(){c.defaultPrevented=!0;g.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented};m(a[e||c.type],function(a){a.call(b,c)});Z<=8?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};
c.elem=b;return c}function ga(b){var a=typeof b,c;if(a=="object"&&b!==null)if(typeof(c=b.$$hashKey)=="function")c=b.$$hashKey();else{if(c===q)c=b.$$hashKey=xa()}else c=b;return a+":"+c}function Fa(b){m(b,this.put,this)}function eb(){}function Cb(b){var a,c;if(typeof b=="function"){if(!(a=b.$inject))a=[],c=b.toString().replace(qc,""),c=c.match(rc),m(c[1].split(sc),function(b){b.replace(tc,function(b,c,d){a.push(d)})}),b.$inject=a}else E(b)?(c=b.length-1,qa(b[c],"fn"),a=b.slice(0,c)):qa(b,"fn",!0);
return a}function sb(b){function a(a){return function(b,c){if(L(b))m(b,nb(a));else return a(b,c)}}function c(a,b){if(H(b)||E(b))b=l.instantiate(b);if(!b.$get)throw Error("Provider "+a+" must define $get factory method.");return k[a+f]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[];m(a,function(a){if(!j.get(a))if(j.put(a,!0),B(a)){var c=sa(a);b=b.concat(e(c.requires)).concat(c._runBlocks);try{for(var d=c._invokeQueue,c=0,f=d.length;c<f;c++){var g=d[c],h=g[0]=="$injector"?l:l.get(g[0]);
h[g[1]].apply(h,g[2])}}catch(p){throw p.message&&(p.message+=" from "+a),p;}}else if(H(a))try{b.push(l.invoke(a))}catch(i){throw i.message&&(i.message+=" from "+a),i;}else if(E(a))try{b.push(l.invoke(a))}catch(o){throw o.message&&(o.message+=" from "+String(a[a.length-1])),o;}else qa(a,"module")});return b}function g(a,b){function c(d){if(typeof d!=="string")throw Error("Service name expected");if(a.hasOwnProperty(d)){if(a[d]===h)throw Error("Circular dependency: "+i.join(" <- "));return a[d]}else try{return i.unshift(d),
a[d]=h,a[d]=b(d)}finally{i.shift()}}function d(a,b,e){var f=[],j=Cb(a),g,h,i;h=0;for(g=j.length;h<g;h++)i=j[h],f.push(e&&e.hasOwnProperty(i)?e[i]:c(i));a.$inject||(a=a[g]);switch(b?-1:f.length){case 0:return a();case 1:return a(f[0]);case 2:return a(f[0],f[1]);case 3:return a(f[0],f[1],f[2]);case 4:return a(f[0],f[1],f[2],f[3]);case 5:return a(f[0],f[1],f[2],f[3],f[4]);case 6:return a(f[0],f[1],f[2],f[3],f[4],f[5]);case 7:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6]);case 8:return a(f[0],f[1],f[2],
f[3],f[4],f[5],f[6],f[7]);case 9:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7],f[8]);case 10:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7],f[8],f[9]);default:return a.apply(b,f)}}return{invoke:d,instantiate:function(a,b){var c=function(){},e;c.prototype=(E(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return L(e)?e:c},get:c,annotate:Cb}}var h={},f="Provider",i=[],j=new Fa,k={$provide:{provider:a(c),factory:a(d),service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),
value:a(function(a,b){return d(a,I(b))}),constant:a(function(a,b){k[a]=b;n[a]=b}),decorator:function(a,b){var c=l.get(a+f),d=c.$get;c.$get=function(){var a=o.invoke(d,c);return o.invoke(b,null,{$delegate:a})}}}},l=g(k,function(){throw Error("Unknown provider: "+i.join(" <- "));}),n={},o=n.$injector=g(n,function(a){a=l.get(a+f);return o.invoke(a.$get,a)});m(e(b),function(a){o.invoke(a||C)});return o}function uc(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location",
"$rootScope",function(a,c,d){function e(a){var b=null;m(a,function(a){!b&&z(a.nodeName)==="a"&&(b=a)});return b}function g(){var b=c.hash(),d;b?(d=h.getElementById(b))?d.scrollIntoView():(d=e(h.getElementsByName(b)))?d.scrollIntoView():b==="top"&&a.scrollTo(0,0):a.scrollTo(0,0)}var h=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(g)});return g}]}function vc(b,a,c,d){function e(a){try{a.apply(null,ha.call(arguments,1))}finally{if(p--,p===0)for(;s.length;)try{s.pop()()}catch(b){c.error(b)}}}
function g(a,b){(function V(){m(t,function(a){a()});x=b(V,a)})()}function h(){M!=f.url()&&(M=f.url(),m(N,function(a){a(f.url())}))}var f=this,i=a[0],j=b.location,k=b.history,l=b.setTimeout,n=b.clearTimeout,o={};f.isMock=!1;var p=0,s=[];f.$$completeOutstandingRequest=e;f.$$incOutstandingRequestCount=function(){p++};f.notifyWhenNoOutstandingRequests=function(a){m(t,function(a){a()});p===0?a():s.push(a)};var t=[],x;f.addPollFn=function(a){w(x)&&g(100,l);t.push(a);return a};var M=j.href,A=a.find("base");
f.url=function(a,b){if(a){if(M!=a)return M=a,d.history?b?k.replaceState(null,"",a):(k.pushState(null,"",a),A.attr("href",A.attr("href"))):b?j.replace(a):j.href=a,f}else return j.href.replace(/%27/g,"'")};var N=[],J=!1;f.onUrlChange=function(a){J||(d.history&&u(b).bind("popstate",h),d.hashchange?u(b).bind("hashchange",h):f.addPollFn(h),J=!0);N.push(a);return a};f.baseHref=function(){var a=A.attr("href");return a?a.replace(/^https?\:\/\/[^\/]*/,""):""};var r={},$="",R=f.baseHref();f.cookies=function(a,
b){var d,e,f,j;if(a)if(b===q)i.cookie=escape(a)+"=;path="+R+";expires=Thu, 01 Jan 1970 00:00:00 GMT";else{if(B(b))d=(i.cookie=escape(a)+"="+escape(b)+";path="+R).length+1,d>4096&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!")}else{if(i.cookie!==$){$=i.cookie;d=$.split("; ");r={};for(f=0;f<d.length;f++)e=d[f],j=e.indexOf("="),j>0&&(a=unescape(e.substring(0,j)),r[a]===q&&(r[a]=unescape(e.substring(j+1))))}return r}};f.defer=function(a,b){var c;
p++;c=l(function(){delete o[c];e(a)},b||0);o[c]=!0;return c};f.defer.cancel=function(a){return o[a]?(delete o[a],n(a),e(C),!0):!1}}function wc(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new vc(b,d,a,c)}]}function xc(){this.$get=function(){function b(b,d){function e(a){if(a!=l){if(n){if(n==a)n=a.n}else n=a;g(a.n,a.p);g(a,l);l=a;l.n=null}}function g(a,b){if(a!=b){if(a)a.p=b;if(b)b.n=a}}if(b in a)throw Error("cacheId "+b+" taken");var h=0,f=v({},d,{id:b}),i={},j=d&&
d.capacity||Number.MAX_VALUE,k={},l=null,n=null;return a[b]={put:function(a,b){var c=k[a]||(k[a]={key:a});e(c);w(b)||(a in i||h++,i[a]=b,h>j&&this.remove(n.key))},get:function(a){var b=k[a];if(b)return e(b),i[a]},remove:function(a){var b=k[a];if(b){if(b==l)l=b.p;if(b==n)n=b.n;g(b.n,b.p);delete k[a];delete i[a];h--}},removeAll:function(){i={};h=0;k={};l=n=null},destroy:function(){k=f=i=null;delete a[b]},info:function(){return v({},f,{size:h})}}}var a={};b.info=function(){var b={};m(a,function(a,e){b[e]=
a.info()});return b};b.get=function(b){return a[b]};return b}}function yc(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function Db(b){var a={},c="Directive",d=/^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,e=/(([\d\w\-_]+)(?:\:([^;]+))?;?)/,g="Template must have exactly one root element. was: ",h=/^\s*(https?|ftp|mailto|file):/;this.directive=function i(d,e){B(d)?($a(e,"directive"),a.hasOwnProperty(d)||(a[d]=[],b.factory(d+c,["$injector","$exceptionHandler",function(b,c){var e=[];m(a[d],
function(a){try{var g=b.invoke(a);if(H(g))g={compile:I(g)};else if(!g.compile&&g.link)g.compile=I(g.link);g.priority=g.priority||0;g.name=g.name||d;g.require=g.require||g.controller&&g.name;g.restrict=g.restrict||"A";e.push(g)}catch(h){c(h)}});return e}])),a[d].push(e)):m(d,nb(i));return this};this.urlSanitizationWhitelist=function(a){return y(a)?(h=a,this):h};this.$get=["$injector","$interpolate","$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document",function(b,
j,k,l,n,o,p,s,t){function x(a,b,c){a instanceof u||(a=u(a));m(a,function(b,c){b.nodeType==3&&b.nodeValue.match(/\S+/)&&(a[c]=u(b).wrap("<span></span>").parent()[0])});var d=A(a,b,a,c);return function(b,c){$a(b,"scope");for(var e=c?ua.clone.call(a):a,j=0,g=e.length;j<g;j++){var h=e[j];(h.nodeType==1||h.nodeType==9)&&e.eq(j).data("$scope",b)}M(e,"ng-scope");c&&c(e,b);d&&d(b,e,e);return e}}function M(a,b){try{a.addClass(b)}catch(c){}}function A(a,b,c,d){function e(a,c,d,g){var h,i,k,p,o,l,n,t=[];o=0;
for(l=c.length;o<l;o++)t.push(c[o]);n=o=0;for(l=j.length;o<l;n++)i=t[n],c=j[o++],h=j[o++],c?(c.scope?(k=a.$new(L(c.scope)),u(i).data("$scope",k)):k=a,(p=c.transclude)||!g&&b?c(h,k,i,d,function(b){return function(c){var d=a.$new();d.$$transcluded=!0;return b(d,c).bind("$destroy",Ta(d,d.$destroy))}}(p||b)):c(h,k,i,q,g)):h&&h(a,i.childNodes,q,g)}for(var j=[],g,h,i,k=0;k<a.length;k++)h=new ia,g=N(a[k],[],h,d),h=(g=g.length?J(g,a[k],h,b,c):null)&&g.terminal||!a[k].childNodes||!a[k].childNodes.length?null:
A(a[k].childNodes,g?g.transclude:b),j.push(g),j.push(h),i=i||g||h;return i?e:null}function N(a,b,c,g){var j=c.$attr,h;switch(a.nodeType){case 1:r(b,ea(fb(a).toLowerCase()),"E",g);var i,k,o;h=a.attributes;for(var p=0,l=h&&h.length;p<l;p++)if(i=h[p],i.specified)k=i.name,o=ea(k.toLowerCase()),j[o]=k,c[o]=i=Q(Z&&k=="href"?decodeURIComponent(a.getAttribute(k,2)):i.value),Ab(a,o)&&(c[o]=!0),V(a,b,i,o),r(b,o,"A",g);a=a.className;if(B(a)&&a!=="")for(;h=e.exec(a);)o=ea(h[2]),r(b,o,"C",g)&&(c[o]=Q(h[3])),a=
a.substr(h.index+h[0].length);break;case 3:y(b,a.nodeValue);break;case 8:try{if(h=d.exec(a.nodeValue))o=ea(h[1]),r(b,o,"M",g)&&(c[o]=Q(h[2]))}catch(n){}}b.sort(F);return b}function J(a,b,c,d,e){function j(a,b){if(a)a.require=r.require,n.push(a);if(b)b.require=r.require,t.push(b)}function h(a,b){var c,d="data",e=!1;if(B(a)){for(;(c=a.charAt(0))=="^"||c=="?";)a=a.substr(1),c=="^"&&(d="inheritedData"),e=e||c=="?";c=b[d]("$"+a+"Controller");if(!c&&!e)throw Error("No controller: "+a);}else E(a)&&(c=[],
m(a,function(a){c.push(h(a,b))}));return c}function i(a,d,e,g,j){var l,s,r,D,M;l=b===e?c:hc(c,new ia(u(e),c.$attr));s=l.$$element;if(J){var zc=/^\s*([@=&])\s*(\w*)\s*$/,x=d.$parent||d;m(J.scope,function(a,b){var c=a.match(zc)||[],e=c[2]||b,c=c[1],g,j,h;d.$$isolateBindings[b]=c+e;switch(c){case "@":l.$observe(e,function(a){d[b]=a});l.$$observers[e].$$scope=x;break;case "=":j=o(l[e]);h=j.assign||function(){g=d[b]=j(x);throw Error(Eb+l[e]+" (directive: "+J.name+")");};g=d[b]=j(x);d.$watch(function(){var a=
j(x);a!==d[b]&&(a!==g?g=d[b]=a:h(x,a=g=d[b]));return a});break;case "&":j=o(l[e]);d[b]=function(a){return j(x,a)};break;default:throw Error("Invalid isolate scope definition for directive "+J.name+": "+a);}})}y&&m(y,function(a){var b={$scope:d,$element:s,$attrs:l,$transclude:j};M=a.controller;M=="@"&&(M=l[a.name]);s.data("$"+a.name+"Controller",p(M,b))});g=0;for(r=n.length;g<r;g++)try{D=n[g],D(d,s,l,D.require&&h(D.require,s))}catch(A){k(A,pa(s))}a&&a(d,e.childNodes,q,j);g=0;for(r=t.length;g<r;g++)try{D=
t[g],D(d,s,l,D.require&&h(D.require,s))}catch(Ac){k(Ac,pa(s))}}for(var l=-Number.MAX_VALUE,n=[],t=[],s=null,J=null,A=null,D=c.$$element=u(b),r,F,W,ja,V=d,y,w,Y,v=0,z=a.length;v<z;v++){r=a[v];W=q;if(l>r.priority)break;if(Y=r.scope)ta("isolated scope",J,r,D),L(Y)&&(M(D,"ng-isolate-scope"),J=r),M(D,"ng-scope"),s=s||r;F=r.name;if(Y=r.controller)y=y||{},ta("'"+F+"' controller",y[F],r,D),y[F]=r;if(Y=r.transclude)ta("transclusion",ja,r,D),ja=r,l=r.priority,Y=="element"?(W=u(b),D=c.$$element=u(T.createComment(" "+
F+": "+c[F]+" ")),b=D[0],C(e,u(W[0]),b),V=x(W,d,l)):(W=u(cb(b)).contents(),D.html(""),V=x(W,d));if(Y=r.template)if(ta("template",A,r,D),A=r,Y=Fb(Y),r.replace){W=u("<div>"+Q(Y)+"</div>").contents();b=W[0];if(W.length!=1||b.nodeType!==1)throw Error(g+Y);C(e,D,b);F={$attr:{}};a=a.concat(N(b,a.splice(v+1,a.length-(v+1)),F));$(c,F);z=a.length}else D.html(Y);if(r.templateUrl)ta("template",A,r,D),A=r,i=R(a.splice(v,a.length-v),i,D,c,e,r.replace,V),z=a.length;else if(r.compile)try{w=r.compile(D,c,V),H(w)?
j(null,w):w&&j(w.pre,w.post)}catch(G){k(G,pa(D))}if(r.terminal)i.terminal=!0,l=Math.max(l,r.priority)}i.scope=s&&s.scope;i.transclude=ja&&V;return i}function r(d,e,g,j){var h=!1;if(a.hasOwnProperty(e))for(var o,e=b.get(e+c),l=0,p=e.length;l<p;l++)try{if(o=e[l],(j===q||j>o.priority)&&o.restrict.indexOf(g)!=-1)d.push(o),h=!0}catch(n){k(n)}return h}function $(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;m(a,function(d,e){e.charAt(0)!="$"&&(b[e]&&(d+=(e==="style"?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});m(b,
function(b,g){g=="class"?(M(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):g=="style"?e.attr("style",e.attr("style")+";"+b):g.charAt(0)!="$"&&!a.hasOwnProperty(g)&&(a[g]=b,d[g]=c[g])})}function R(a,b,c,d,e,j,h){var i=[],k,o,p=c[0],t=a.shift(),s=v({},t,{controller:null,templateUrl:null,transclude:null,scope:null});c.html("");l.get(t.templateUrl,{cache:n}).success(function(l){var n,t,l=Fb(l);if(j){t=u("<div>"+Q(l)+"</div>").contents();n=t[0];if(t.length!=1||n.nodeType!==1)throw Error(g+l);l={$attr:{}};
C(e,c,n);N(n,a,l);$(d,l)}else n=p,c.html(l);a.unshift(s);k=J(a,n,d,h);for(o=A(c[0].childNodes,h);i.length;){var r=i.pop(),l=i.pop();t=i.pop();var ia=i.pop(),D=n;t!==p&&(D=cb(n),C(l,u(t),D));k(function(){b(o,ia,D,e,r)},ia,D,e,r)}i=null}).error(function(a,b,c,d){throw Error("Failed to load template: "+d.url);});return function(a,c,d,e,g){i?(i.push(c),i.push(d),i.push(e),i.push(g)):k(function(){b(o,c,d,e,g)},c,d,e,g)}}function F(a,b){return b.priority-a.priority}function ta(a,b,c,d){if(b)throw Error("Multiple directives ["+
b.name+", "+c.name+"] asking for "+a+" on: "+pa(d));}function y(a,b){var c=j(b,!0);c&&a.push({priority:0,compile:I(function(a,b){var d=b.parent(),e=d.data("$binding")||[];e.push(c);M(d.data("$binding",e),"ng-binding");a.$watch(c,function(a){b[0].nodeValue=a})})})}function V(a,b,c,d){var e=j(c,!0);e&&b.push({priority:100,compile:I(function(a,b,c){b=c.$$observers||(c.$$observers={});d==="class"&&(e=j(c[d],!0));c[d]=q;(b[d]||(b[d]=[])).$$inter=!0;(c.$$observers&&c.$$observers[d].$$scope||a).$watch(e,
function(a){c.$set(d,a)})})})}function C(a,b,c){var d=b[0],e=d.parentNode,g,j;if(a){g=0;for(j=a.length;g<j;g++)if(a[g]==d){a[g]=c;break}}e&&e.replaceChild(c,d);c[u.expando]=d[u.expando];b[0]=c}var ia=function(a,b){this.$$element=a;this.$attr=b||{}};ia.prototype={$normalize:ea,$set:function(a,b,c,d){var e=Ab(this.$$element[0],a),g=this.$$observers;e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=Za(a,"-"));if(fb(this.$$element[0])==="A"&&a==="href")D.setAttribute("href",
b),e=D.href,e.match(h)||(this[a]=b="unsafe:"+e);c!==!1&&(b===null||b===q?this.$$element.removeAttr(d):this.$$element.attr(d,b));g&&m(g[a],function(a){try{a(b)}catch(c){k(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);s.$evalAsync(function(){e.$$inter||b(c[a])});return b}};var D=t[0].createElement("a"),W=j.startSymbol(),ja=j.endSymbol(),Fb=W=="{{"||ja=="}}"?ma:function(a){return a.replace(/\{\{/g,W).replace(/}}/g,ja)};return x}]}function ea(b){return tb(b.replace(Bc,
""))}function Cc(){var b={};this.register=function(a,c){L(a)?v(b,a):b[a]=c};this.$get=["$injector","$window",function(a,c){return function(d,e){if(B(d)){var g=d,d=b.hasOwnProperty(g)?b[g]:gb(e.$scope,g,!0)||gb(c,g,!0);qa(d,g,!0)}return a.instantiate(d,e)}}]}function Dc(){this.$get=["$window",function(b){return u(b.document)}]}function Ec(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Fc(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):
b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse",function(c){function d(d,f){for(var i,j,k=0,l=[],n=d.length,o=!1,p=[];k<n;)(i=d.indexOf(b,k))!=-1&&(j=d.indexOf(a,i+e))!=-1?(k!=i&&l.push(d.substring(k,i)),l.push(k=c(o=d.substring(i+e,j))),k.exp=o,k=j+g,o=!0):(k!=n&&l.push(d.substring(k)),k=n);if(!(n=l.length))l.push(""),n=1;if(!f||o)return p.length=n,k=function(a){for(var b=0,c=n,d;b<c;b++){if(typeof(d=l[b])=="function")d=d(a),d==null||d==q?d="":typeof d!="string"&&(d=da(d));
p[b]=d}return p.join("")},k.exp=d,k.parts=l,k}var e=b.length,g=a.length;d.startSymbol=function(){return b};d.endSymbol=function(){return a};return d}]}function Gb(b){for(var b=b.split("/"),a=b.length;a--;)b[a]=Xa(b[a]);return b.join("/")}function va(b,a){var c=Hb.exec(b),c={protocol:c[1],host:c[3],port:G(c[5])||Ib[c[1]]||null,path:c[6]||"/",search:c[8],hash:c[10]};if(a)a.$$protocol=c.protocol,a.$$host=c.host,a.$$port=c.port;return c}function ka(b,a,c){return b+"://"+a+(c==Ib[b]?"":":"+c)}function Gc(b,
a,c){var d=va(b);return decodeURIComponent(d.path)!=a||w(d.hash)||d.hash.indexOf(c)!==0?b:ka(d.protocol,d.host,d.port)+a.substr(0,a.lastIndexOf("/"))+d.hash.substr(c.length)}function Hc(b,a,c){var d=va(b);if(decodeURIComponent(d.path)==a&&!w(d.hash)&&d.hash.indexOf(c)===0)return b;else{var e=d.search&&"?"+d.search||"",g=d.hash&&"#"+d.hash||"",h=a.substr(0,a.lastIndexOf("/")),f=d.path.substr(h.length);if(d.path.indexOf(h)!==0)throw Error('Invalid url "'+b+'", missing path prefix "'+h+'" !');return ka(d.protocol,
d.host,d.port)+a+"#"+c+f+e+g}}function hb(b,a,c){a=a||"";this.$$parse=function(b){var c=va(b,this);if(c.path.indexOf(a)!==0)throw Error('Invalid url "'+b+'", missing path prefix "'+a+'" !');this.$$path=decodeURIComponent(c.path.substr(a.length));this.$$search=Va(c.search);this.$$hash=c.hash&&decodeURIComponent(c.hash)||"";this.$$compose()};this.$$compose=function(){var b=qb(this.$$search),c=this.$$hash?"#"+Xa(this.$$hash):"";this.$$url=Gb(this.$$path)+(b?"?"+b:"")+c;this.$$absUrl=ka(this.$$protocol,
this.$$host,this.$$port)+a+this.$$url};this.$$rewriteAppUrl=function(a){if(a.indexOf(c)==0)return a};this.$$parse(b)}function Ga(b,a,c){var d;this.$$parse=function(b){var c=va(b,this);if(c.hash&&c.hash.indexOf(a)!==0)throw Error('Invalid url "'+b+'", missing hash prefix "'+a+'" !');d=c.path+(c.search?"?"+c.search:"");c=Ic.exec((c.hash||"").substr(a.length));this.$$path=c[1]?(c[1].charAt(0)=="/"?"":"/")+decodeURIComponent(c[1]):"";this.$$search=Va(c[3]);this.$$hash=c[5]&&decodeURIComponent(c[5])||
"";this.$$compose()};this.$$compose=function(){var b=qb(this.$$search),c=this.$$hash?"#"+Xa(this.$$hash):"";this.$$url=Gb(this.$$path)+(b?"?"+b:"")+c;this.$$absUrl=ka(this.$$protocol,this.$$host,this.$$port)+d+(this.$$url?"#"+a+this.$$url:"")};this.$$rewriteAppUrl=function(a){if(a.indexOf(c)==0)return a};this.$$parse(b)}function Jb(b,a,c,d){Ga.apply(this,arguments);this.$$rewriteAppUrl=function(b){if(b.indexOf(c)==0)return c+d+"#"+a+b.substr(c.length)}}function Ha(b){return function(){return this[b]}}
function Kb(b,a){return function(c){if(w(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Jc(){var b="",a=!1;this.hashPrefix=function(a){return y(a)?(b=a,this):b};this.html5Mode=function(b){return y(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,g){function h(a){c.$broadcast("$locationChangeSuccess",f.absUrl(),a)}var f,i,j,k=d.url(),l=va(k);a?(i=d.baseHref()||"/",j=i.substr(0,i.lastIndexOf("/")),l=ka(l.protocol,l.host,l.port)+j+"/",
f=e.history?new hb(Gc(k,i,b),j,l):new Jb(Hc(k,i,b),b,l,i.substr(j.length+1))):(l=ka(l.protocol,l.host,l.port)+(l.path||"")+(l.search?"?"+l.search:"")+"#"+b+"/",f=new Ga(k,b,l));g.bind("click",function(a){if(!a.ctrlKey&&!(a.metaKey||a.which==2)){for(var b=u(a.target);z(b[0].nodeName)!=="a";)if(b[0]===g[0]||!(b=b.parent())[0])return;var d=b.prop("href"),e=f.$$rewriteAppUrl(d);d&&!b.attr("target")&&e&&(f.$$parse(e),c.$apply(),a.preventDefault(),P.angular["ff-684208-preventDefault"]=!0)}});f.absUrl()!=
k&&d.url(f.absUrl(),!0);d.onUrlChange(function(a){f.absUrl()!=a&&(c.$broadcast("$locationChangeStart",a,f.absUrl()).defaultPrevented?d.url(f.absUrl()):(c.$evalAsync(function(){var b=f.absUrl();f.$$parse(a);h(b)}),c.$$phase||c.$digest()))});var n=0;c.$watch(function(){var a=d.url(),b=f.$$replace;if(!n||a!=f.absUrl())n++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",f.absUrl(),a).defaultPrevented?f.$$parse(a):(d.url(f.absUrl(),b),h(a))});f.$$replace=!1;return n});return f}]}function Kc(){this.$get=
["$window",function(b){function a(a){a instanceof Error&&(a.stack?a=a.message&&a.stack.indexOf(a.message)===-1?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function c(c){var e=b.console||{},g=e[c]||e.log||C;return g.apply?function(){var b=[];m(arguments,function(c){b.push(a(c))});return g.apply(e,b)}:function(a,b){g(a,b)}}return{log:c("log"),warn:c("warn"),info:c("info"),error:c("error")}}]}function Lc(b,a){function c(a){return a.indexOf(t)!=
-1}function d(){return p+1<b.length?b.charAt(p+1):!1}function e(a){return"0"<=a&&a<="9"}function g(a){return a==" "||a=="\r"||a=="\t"||a=="\n"||a=="\u000b"||a=="\u00a0"}function h(a){return"a"<=a&&a<="z"||"A"<=a&&a<="Z"||"_"==a||a=="$"}function f(a){return a=="-"||a=="+"||e(a)}function i(a,c,d){d=d||p;throw Error("Lexer Error: "+a+" at column"+(y(c)?"s "+c+"-"+p+" ["+b.substring(c,d)+"]":" "+d)+" in expression ["+b+"].");}function j(){for(var a="",c=p;p<b.length;){var g=z(b.charAt(p));if(g=="."||
e(g))a+=g;else{var j=d();if(g=="e"&&f(j))a+=g;else if(f(g)&&j&&e(j)&&a.charAt(a.length-1)=="e")a+=g;else if(f(g)&&(!j||!e(j))&&a.charAt(a.length-1)=="e")i("Invalid exponent");else break}p++}a*=1;n.push({index:c,text:a,json:!0,fn:function(){return a}})}function k(){for(var c="",d=p,f,j,i,k;p<b.length;){k=b.charAt(p);if(k=="."||h(k)||e(k))k=="."&&(f=p),c+=k;else break;p++}if(f)for(j=p;j<b.length;){k=b.charAt(j);if(k=="("){i=c.substr(f-d+1);c=c.substr(0,f-d);p=j;break}if(g(k))j++;else break}d={index:d,
text:c};if(Ia.hasOwnProperty(c))d.fn=d.json=Ia[c];else{var l=Lb(c,a);d.fn=v(function(a,b){return l(a,b)},{assign:function(a,b){return Mb(a,c,b)}})}n.push(d);i&&(n.push({index:f,text:".",json:!1}),n.push({index:f+1,text:i,json:!1}))}function l(a){var c=p;p++;for(var d="",e=a,f=!1;p<b.length;){var g=b.charAt(p);e+=g;if(f)g=="u"?(g=b.substring(p+1,p+5),g.match(/[\da-f]{4}/i)||i("Invalid unicode escape [\\u"+g+"]"),p+=4,d+=String.fromCharCode(parseInt(g,16))):(f=Mc[g],d+=f?f:g),f=!1;else if(g=="\\")f=
!0;else if(g==a){p++;n.push({index:c,text:e,string:d,json:!0,fn:function(){return d}});return}else d+=g;p++}i("Unterminated quote",c)}for(var n=[],o,p=0,s=[],t,x=":";p<b.length;){t=b.charAt(p);if(c("\"'"))l(t);else if(e(t)||c(".")&&e(d()))j();else if(h(t)){if(k(),"{,".indexOf(x)!=-1&&s[0]=="{"&&(o=n[n.length-1]))o.json=o.text.indexOf(".")==-1}else if(c("(){}[].,;:"))n.push({index:p,text:t,json:":[,".indexOf(x)!=-1&&c("{[")||c("}]:,")}),c("{[")&&s.unshift(t),c("}]")&&s.shift(),p++;else if(g(t)){p++;
continue}else{var m=t+d(),A=Ia[t],N=Ia[m];N?(n.push({index:p,text:m,fn:N}),p+=2):A?(n.push({index:p,text:t,fn:A,json:"[,:".indexOf(x)!=-1&&c("+-")}),p+=1):i("Unexpected next character ",p,p+1)}x=t}return n}function Nc(b,a,c,d){function e(a,c){throw Error("Syntax Error: Token '"+c.text+"' "+a+" at column "+(c.index+1)+" of the expression ["+b+"] starting at ["+b.substring(c.index)+"].");}function g(){if(R.length===0)throw Error("Unexpected end of expression: "+b);return R[0]}function h(a,b,c,d){if(R.length>
0){var e=R[0],f=e.text;if(f==a||f==b||f==c||f==d||!a&&!b&&!c&&!d)return e}return!1}function f(b,c,d,f){return(b=h(b,c,d,f))?(a&&!b.json&&e("is not valid json",b),R.shift(),b):!1}function i(a){f(a)||e("is unexpected, expecting ["+a+"]",h())}function j(a,b){return function(c,d){return a(c,d,b)}}function k(a,b,c){return function(d,e){return b(d,e,a,c)}}function l(){for(var a=[];;)if(R.length>0&&!h("}",")",";","]")&&a.push(w()),!f(";"))return a.length==1?a[0]:function(b,c){for(var d,e=0;e<a.length;e++){var f=
a[e];f&&(d=f(b,c))}return d}}function n(){for(var a=f(),b=c(a.text),d=[];;)if(a=f(":"))d.push(F());else{var e=function(a,c,e){for(var e=[e],f=0;f<d.length;f++)e.push(d[f](a,c));return b.apply(a,e)};return function(){return e}}}function o(){for(var a=p(),b;;)if(b=f("||"))a=k(a,b.fn,p());else return a}function p(){var a=s(),b;if(b=f("&&"))a=k(a,b.fn,p());return a}function s(){var a=t(),b;if(b=f("==","!="))a=k(a,b.fn,s());return a}function t(){var a;a=x();for(var b;b=f("+","-");)a=k(a,b.fn,x());if(b=
f("<",">","<=",">="))a=k(a,b.fn,t());return a}function x(){for(var a=m(),b;b=f("*","/","%");)a=k(a,b.fn,m());return a}function m(){var a;return f("+")?A():(a=f("-"))?k(r,a.fn,m()):(a=f("!"))?j(a.fn,m()):A()}function A(){var a;if(f("("))a=w(),i(")");else if(f("["))a=N();else if(f("{"))a=J();else{var b=f();(a=b.fn)||e("not a primary expression",b)}for(var c;b=f("(","[",".");)b.text==="("?(a=y(a,c),c=null):b.text==="["?(c=a,a=V(a)):b.text==="."?(c=a,a=u(a)):e("IMPOSSIBLE");return a}function N(){var a=
[];if(g().text!="]"){do a.push(F());while(f(","))}i("]");return function(b,c){for(var d=[],e=0;e<a.length;e++)d.push(a[e](b,c));return d}}function J(){var a=[];if(g().text!="}"){do{var b=f(),b=b.string||b.text;i(":");var c=F();a.push({key:b,value:c})}while(f(","))}i("}");return function(b,c){for(var d={},e=0;e<a.length;e++){var f=a[e];d[f.key]=f.value(b,c)}return d}}var r=I(0),$,R=Lc(b,d),F=function(){var a=o(),c,d;return(d=f("="))?(a.assign||e("implies assignment but ["+b.substring(0,d.index)+"] can not be assigned to",
d),c=o(),function(b,d){return a.assign(b,c(b,d),d)}):a},y=function(a,b){var c=[];if(g().text!=")"){do c.push(F());while(f(","))}i(")");return function(d,e){for(var f=[],g=b?b(d,e):d,j=0;j<c.length;j++)f.push(c[j](d,e));j=a(d,e,g)||C;return j.apply?j.apply(g,f):j(f[0],f[1],f[2],f[3],f[4])}},u=function(a){var b=f().text,c=Lb(b,d);return v(function(b,d,e){return c(e||a(b,d),d)},{assign:function(c,d,e){return Mb(a(c,e),b,d)}})},V=function(a){var b=F();i("]");return v(function(c,d){var e=a(c,d),f=b(c,
d),g;if(!e)return q;if((e=e[f])&&e.then){g=e;if(!("$$v"in e))g.$$v=q,g.then(function(a){g.$$v=a});e=e.$$v}return e},{assign:function(c,d,e){return a(c,e)[b(c,e)]=d}})},w=function(){for(var a=F(),b;;)if(b=f("|"))a=k(a,b.fn,n());else return a};a?(F=o,y=u=V=w=function(){e("is not valid json",{text:b,index:0})},$=A()):$=l();R.length!==0&&e("is an unexpected token",R[0]);return $}function Mb(b,a,c){for(var a=a.split("."),d=0;a.length>1;d++){var e=a.shift(),g=b[e];g||(g={},b[e]=g);b=g}return b[a.shift()]=
c}function gb(b,a,c){if(!a)return b;for(var a=a.split("."),d,e=b,g=a.length,h=0;h<g;h++)d=a[h],b&&(b=(e=b)[d]);return!c&&H(b)?Ta(e,b):b}function Nb(b,a,c,d,e){return function(g,h){var f=h&&h.hasOwnProperty(b)?h:g,i;if(f===null||f===q)return f;if((f=f[b])&&f.then){if(!("$$v"in f))i=f,i.$$v=q,i.then(function(a){i.$$v=a});f=f.$$v}if(!a||f===null||f===q)return f;if((f=f[a])&&f.then){if(!("$$v"in f))i=f,i.$$v=q,i.then(function(a){i.$$v=a});f=f.$$v}if(!c||f===null||f===q)return f;if((f=f[c])&&f.then){if(!("$$v"in
f))i=f,i.$$v=q,i.then(function(a){i.$$v=a});f=f.$$v}if(!d||f===null||f===q)return f;if((f=f[d])&&f.then){if(!("$$v"in f))i=f,i.$$v=q,i.then(function(a){i.$$v=a});f=f.$$v}if(!e||f===null||f===q)return f;if((f=f[e])&&f.then){if(!("$$v"in f))i=f,i.$$v=q,i.then(function(a){i.$$v=a});f=f.$$v}return f}}function Lb(b,a){if(ib.hasOwnProperty(b))return ib[b];var c=b.split("."),d=c.length,e;if(a)e=d<6?Nb(c[0],c[1],c[2],c[3],c[4]):function(a,b){var e=0,g;do g=Nb(c[e++],c[e++],c[e++],c[e++],c[e++])(a,b),b=q,
a=g;while(e<d);return g};else{var g="var l, fn, p;\n";m(c,function(a,b){g+="if(s === null || s === undefined) return s;\nl=s;\ns="+(b?"s":'((k&&k.hasOwnProperty("'+a+'"))?k:s)')+'["'+a+'"];\nif (s && s.then) {\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n'});g+="return s;";e=Function("s","k",g);e.toString=function(){return g}}return ib[b]=e}function Oc(){var b={};this.$get=["$filter","$sniffer",function(a,c){return function(d){switch(typeof d){case "string":return b.hasOwnProperty(d)?
b[d]:b[d]=Nc(d,!1,a,c.csp);case "function":return d;default:return C}}}]}function Pc(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return Qc(function(a){b.$evalAsync(a)},a)}]}function Qc(b,a){function c(a){return a}function d(a){return h(a)}var e=function(){var f=[],i,j;return j={resolve:function(a){if(f){var c=f;f=q;i=g(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<d;b++)a=c[b],i.then(a[0],a[1])})}},reject:function(a){j.resolve(h(a))},promise:{then:function(b,g){var j=e(),h=
function(d){try{j.resolve((b||c)(d))}catch(e){a(e),j.reject(e)}},p=function(b){try{j.resolve((g||d)(b))}catch(c){a(c),j.reject(c)}};f?f.push([h,p]):i.then(h,p);return j.promise}}}},g=function(a){return a&&a.then?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},h=function(a){return{then:function(c,g){var h=e();b(function(){h.resolve((g||d)(a))});return h.promise}}};return{defer:e,reject:h,when:function(f,i,j){var k=e(),l,n=function(b){try{return(i||c)(b)}catch(d){return a(d),
h(d)}},o=function(b){try{return(j||d)(b)}catch(c){return a(c),h(c)}};b(function(){g(f).then(function(a){l||(l=!0,k.resolve(g(a).then(n,o)))},function(a){l||(l=!0,k.resolve(o(a)))})});return k.promise},all:function(a){var b=e(),c=a.length,d=[];c?m(a,function(a,e){g(a).then(function(a){e in d||(d[e]=a,--c||b.resolve(d))},function(a){e in d||b.reject(a)})}):b.resolve(d);return b.promise}}}function Rc(){var b={};this.when=function(a,c){b[a]=v({reloadOnSearch:!0},c);if(a){var d=a[a.length-1]=="/"?a.substr(0,
a.length-1):a+"/";b[d]={redirectTo:a}}return this};this.otherwise=function(a){this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$http","$templateCache",function(a,c,d,e,g,h,f){function i(a,b){for(var b="^"+b.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")+"$",c="",d=[],e={},f=/:(\w+)/g,g,j=0;(g=f.exec(b))!==null;)c+=b.slice(j,g.index),c+="([^\\/]*)",d.push(g[1]),j=f.lastIndex;c+=b.substr(j);var h=a.match(RegExp(c));h&&m(d,function(a,b){e[a]=h[b+1]});return h?
e:null}function j(){var b=k(),j=o.current;if(b&&j&&b.$$route===j.$$route&&fa(b.pathParams,j.pathParams)&&!b.reloadOnSearch&&!n)j.params=b.params,U(j.params,d),a.$broadcast("$routeUpdate",j);else if(b||j)n=!1,a.$broadcast("$routeChangeStart",b,j),(o.current=b)&&b.redirectTo&&(B(b.redirectTo)?c.path(l(b.redirectTo,b.params)).search(b.params).replace():c.url(b.redirectTo(b.pathParams,c.path(),c.search())).replace()),e.when(b).then(function(){if(b){var a=[],c=[],d;m(b.resolve||{},function(b,d){a.push(d);
c.push(B(b)?g.get(b):g.invoke(b))});if(!y(d=b.template))if(y(d=b.templateUrl))d=h.get(d,{cache:f}).then(function(a){return a.data});y(d)&&(a.push("$template"),c.push(d));return e.all(c).then(function(b){var c={};m(b,function(b,d){c[a[d]]=b});return c})}}).then(function(c){if(b==o.current){if(b)b.locals=c,U(b.params,d);a.$broadcast("$routeChangeSuccess",b,j)}},function(c){b==o.current&&a.$broadcast("$routeChangeError",b,j,c)})}function k(){var a,d;m(b,function(b,e){if(!d&&(a=i(c.path(),e)))d=ya(b,
{params:v({},c.search(),a),pathParams:a}),d.$$route=b});return d||b[null]&&ya(b[null],{params:{},pathParams:{}})}function l(a,b){var c=[];m((a||"").split(":"),function(a,d){if(d==0)c.push(a);else{var e=a.match(/(\w+)(.*)/),f=e[1];c.push(b[f]);c.push(e[2]||"");delete b[f]}});return c.join("")}var n=!1,o={routes:b,reload:function(){n=!0;a.$evalAsync(j)}};a.$on("$locationChangeSuccess",j);return o}]}function Sc(){this.$get=I({})}function Tc(){var b=10;this.digestTtl=function(a){arguments.length&&(b=
a);return b};this.$get=["$injector","$exceptionHandler","$parse",function(a,c,d){function e(){this.$id=xa();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$listeners={};this.$$isolateBindings={}}function g(a){if(i.$$phase)throw Error(i.$$phase+" already in progress");i.$$phase=a}function h(a,b){var c=d(a);qa(c,b);return c}function f(){}e.prototype={$new:function(a){if(H(a))throw Error("API-CHANGE: Use $controller to instantiate controllers.");
a?(a=new e,a.$root=this.$root):(a=function(){},a.prototype=this,a=new a,a.$id=xa());a["this"]=a;a.$$listeners={};a.$parent=this;a.$$asyncQueue=[];a.$$watchers=a.$$nextSibling=a.$$childHead=a.$$childTail=null;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,c){var d=h(a,"watch"),e=this.$$watchers,g={fn:b,last:f,get:d,exp:a,eq:!!c};if(!H(b)){var i=h(b||C,"listener");g.fn=function(a,b,
c){i(c)}}if(!e)e=this.$$watchers=[];e.unshift(g);return function(){Sa(e,g)}},$digest:function(){var a,d,e,h,o,p,m,t=b,x,q=[],A,N;g("$digest");do{m=!1;x=this;do{for(o=x.$$asyncQueue;o.length;)try{x.$eval(o.shift())}catch(J){c(J)}if(h=x.$$watchers)for(p=h.length;p--;)try{if(a=h[p],(d=a.get(x))!==(e=a.last)&&!(a.eq?fa(d,e):typeof d=="number"&&typeof e=="number"&&isNaN(d)&&isNaN(e)))m=!0,a.last=a.eq?U(d):d,a.fn(d,e===f?d:e,x),t<5&&(A=4-t,q[A]||(q[A]=[]),N=H(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):
a.exp,N+="; newVal: "+da(d)+"; oldVal: "+da(e),q[A].push(N))}catch(r){c(r)}if(!(h=x.$$childHead||x!==this&&x.$$nextSibling))for(;x!==this&&!(h=x.$$nextSibling);)x=x.$parent}while(x=h);if(m&&!t--)throw i.$$phase=null,Error(b+" $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: "+da(q));}while(m||o.length);i.$$phase=null},$destroy:function(){if(!(i==this||this.$$destroyed)){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;if(a.$$childHead==this)a.$$childHead=
this.$$nextSibling;if(a.$$childTail==this)a.$$childTail=this.$$prevSibling;if(this.$$prevSibling)this.$$prevSibling.$$nextSibling=this.$$nextSibling;if(this.$$nextSibling)this.$$nextSibling.$$prevSibling=this.$$prevSibling;this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null}},$eval:function(a,b){return d(a)(this,b)},$evalAsync:function(a){this.$$asyncQueue.push(a)},$apply:function(a){try{return g("$apply"),this.$eval(a)}catch(b){c(b)}finally{i.$$phase=null;try{i.$digest()}catch(d){throw c(d),
d;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);return function(){c[za(c,b)]=null}},$emit:function(a,b){var d=[],e,f=this,g=!1,h={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},i=[h].concat(ha.call(arguments,1)),m,q;do{e=f.$$listeners[a]||d;h.currentScope=f;m=0;for(q=e.length;m<q;m++)if(e[m])try{if(e[m].apply(null,i),g)return h}catch(A){c(A)}else e.splice(m,1),m--,q--;f=f.$parent}while(f);
return h},$broadcast:function(a,b){var d=this,e=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},g=[f].concat(ha.call(arguments,1)),h,i;do{d=e;f.currentScope=d;e=d.$$listeners[a]||[];h=0;for(i=e.length;h<i;h++)if(e[h])try{e[h].apply(null,g)}catch(m){c(m)}else e.splice(h,1),h--,i--;if(!(e=d.$$childHead||d!==this&&d.$$nextSibling))for(;d!==this&&!(e=d.$$nextSibling);)d=d.$parent}while(d=e);return f}};var i=new e;return i}]}function Uc(){this.$get=
["$window",function(b){var a={},c=G((/android (\d+)/.exec(z(b.navigator.userAgent))||[])[1]);return{history:!(!b.history||!b.history.pushState||c<4),hashchange:"onhashchange"in b&&(!b.document.documentMode||b.document.documentMode>7),hasEvent:function(c){if(c=="input"&&Z==9)return!1;if(w(a[c])){var e=b.document.createElement("div");a[c]="on"+c in e}return a[c]},csp:!1}}]}function Vc(){this.$get=I(P)}function Ob(b){var a={},c,d,e;if(!b)return a;m(b.split("\n"),function(b){e=b.indexOf(":");c=z(Q(b.substr(0,
e)));d=Q(b.substr(e+1));c&&(a[c]?a[c]+=", "+d:a[c]=d)});return a}function Pb(b){var a=L(b)?b:q;return function(c){a||(a=Ob(b));return c?a[z(c)]||null:a}}function Qb(b,a,c){if(H(c))return c(b,a);m(c,function(c){b=c(b,a)});return b}function Wc(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d=this.defaults={transformResponse:[function(d){B(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=pb(d,!0)));return d}],transformRequest:[function(a){return L(a)&&wa.apply(a)!=="[object File]"?da(a):a}],
headers:{common:{Accept:"application/json, text/plain, */*","X-Requested-With":"XMLHttpRequest"},post:{"Content-Type":"application/json;charset=utf-8"},put:{"Content-Type":"application/json;charset=utf-8"}}},e=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,i,j,k){function l(a){function c(a){var b=v({},a,{data:Qb(a.data,a.headers,f)});return 200<=a.status&&a.status<300?b:j.reject(b)}a.method=la(a.method);var e=a.transformRequest||
d.transformRequest,f=a.transformResponse||d.transformResponse,g=d.headers,g=v({"X-XSRF-TOKEN":b.cookies()["XSRF-TOKEN"]},g.common,g[z(a.method)],a.headers),e=Qb(a.data,Pb(g),e),i;w(a.data)&&delete g["Content-Type"];i=n(a,e,g);i=i.then(c,c);m(s,function(a){i=a(i)});i.success=function(b){i.then(function(c){b(c.data,c.status,c.headers,a)});return i};i.error=function(b){i.then(null,function(c){b(c.data,c.status,c.headers,a)});return i};return i}function n(b,c,d){function e(a,b,c){m&&(200<=a&&a<300?m.put(q,
[a,b,Ob(c)]):m.remove(q));f(b,a,c);i.$apply()}function f(a,c,d){c=Math.max(c,0);(200<=c&&c<300?k.resolve:k.reject)({data:a,status:c,headers:Pb(d),config:b})}function h(){var a=za(l.pendingRequests,b);a!==-1&&l.pendingRequests.splice(a,1)}var k=j.defer(),n=k.promise,m,s,q=o(b.url,b.params);l.pendingRequests.push(b);n.then(h,h);b.cache&&b.method=="GET"&&(m=L(b.cache)?b.cache:p);if(m)if(s=m.get(q))if(s.then)return s.then(h,h),s;else E(s)?f(s[1],s[0],U(s[2])):f(s,200,{});else m.put(q,n);s||a(b.method,
q,c,e,d,b.timeout,b.withCredentials);return n}function o(a,b){if(!b)return a;var c=[];fc(b,function(a,b){a==null||a==q||(L(a)&&(a=da(a)),c.push(encodeURIComponent(b)+"="+encodeURIComponent(a)))});return a+(a.indexOf("?")==-1?"?":"&")+c.join("&")}var p=c("$http"),s=[];m(e,function(a){s.push(B(a)?k.get(a):k.invoke(a))});l.pendingRequests=[];(function(a){m(arguments,function(a){l[a]=function(b,c){return l(v(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){m(arguments,function(a){l[a]=
function(b,c,d){return l(v(d||{},{method:a,url:b,data:c}))}})})("post","put");l.defaults=d;return l}]}function Xc(){this.$get=["$browser","$window","$document",function(b,a,c){return Yc(b,Zc,b.defer,a.angular.callbacks,c[0],a.location.protocol.replace(":",""))}]}function Yc(b,a,c,d,e,g){function h(a,b){var c=e.createElement("script"),d=function(){e.body.removeChild(c);b&&b()};c.type="text/javascript";c.src=a;Z?c.onreadystatechange=function(){/loaded|complete/.test(c.readyState)&&d()}:c.onload=c.onerror=
d;e.body.appendChild(c)}return function(e,i,j,k,l,n,o){function p(a,c,d,e){c=(i.match(Hb)||["",g])[1]=="file"?d?200:404:c;a(c==1223?204:c,d,e);b.$$completeOutstandingRequest(C)}b.$$incOutstandingRequestCount();i=i||b.url();if(z(e)=="jsonp"){var s="_"+(d.counter++).toString(36);d[s]=function(a){d[s].data=a};h(i.replace("JSON_CALLBACK","angular.callbacks."+s),function(){d[s].data?p(k,200,d[s].data):p(k,-2);delete d[s]})}else{var t=new a;t.open(e,i,!0);m(l,function(a,b){a&&t.setRequestHeader(b,a)});
var q;t.onreadystatechange=function(){if(t.readyState==4){var a=t.getAllResponseHeaders(),b=["Cache-Control","Content-Language","Content-Type","Expires","Last-Modified","Pragma"];a||(a="",m(b,function(b){var c=t.getResponseHeader(b);c&&(a+=b+": "+c+"\n")}));p(k,q||t.status,t.responseText,a)}};if(o)t.withCredentials=!0;t.send(j||"");n>0&&c(function(){q=-1;t.abort()},n)}}}function $c(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,
maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January,February,March,April,May,June,July,August,September,October,November,December".split(","),SHORTMONTH:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),DAY:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),SHORTDAY:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return b===1?"one":"other"}}}}function ad(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,f,i){var j=c.defer(),k=j.promise,l=y(i)&&!i,f=a.defer(function(){try{j.resolve(e())}catch(a){j.reject(a),d(a)}l||b.$apply()},f),i=function(){delete g[k.$$timeoutId]};
k.$$timeoutId=f;g[f]=j;k.then(i,i);return k}var g={};e.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),a.defer.cancel(b.$$timeoutId)):!1};return e}]}function Rb(b){function a(a,e){return b.factory(a+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",Sb);a("date",Tb);a("filter",bd);a("json",cd);a("limitTo",dd);a("lowercase",ed);a("number",Ub);a("orderBy",Vb);a("uppercase",fd)}function bd(){return function(b,
a){if(!E(b))return b;var c=[];c.check=function(a){for(var b=0;b<c.length;b++)if(!c[b](a))return!1;return!0};var d=function(a,b){if(b.charAt(0)==="!")return!d(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return(""+a).toLowerCase().indexOf(b)>-1;case "object":for(var c in a)if(c.charAt(0)!=="$"&&d(a[c],b))return!0;return!1;case "array":for(c=0;c<a.length;c++)if(d(a[c],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a=
{$:a};case "object":for(var e in a)e=="$"?function(){var b=(""+a[e]).toLowerCase();b&&c.push(function(a){return d(a,b)})}():function(){var b=e,f=(""+a[e]).toLowerCase();f&&c.push(function(a){return d(gb(a,b),f)})}();break;case "function":c.push(a);break;default:return b}for(var g=[],h=0;h<b.length;h++){var f=b[h];c.check(f)&&g.push(f)}return g}}function Sb(b){var a=b.NUMBER_FORMATS;return function(b,d){if(w(d))d=a.CURRENCY_SYM;return Wb(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,
d)}}function Ub(b){var a=b.NUMBER_FORMATS;return function(b,d){return Wb(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Wb(b,a,c,d,e){if(isNaN(b)||!isFinite(b))return"";var g=b<0,b=Math.abs(b),h=b+"",f="",i=[],j=!1;if(h.indexOf("e")!==-1){var k=h.match(/([\d\.]+)e(-?)(\d+)/);k&&k[2]=="-"&&k[3]>e+1?h="0":(f=h,j=!0)}if(!j){h=(h.split(Xb)[1]||"").length;w(e)&&(e=Math.min(Math.max(a.minFrac,h),a.maxFrac));var h=Math.pow(10,e),b=Math.round(b*h)/h,b=(""+b).split(Xb),h=b[0],b=b[1]||"",j=0,k=a.lgSize,
l=a.gSize;if(h.length>=k+l)for(var j=h.length-k,n=0;n<j;n++)(j-n)%l===0&&n!==0&&(f+=c),f+=h.charAt(n);for(n=j;n<h.length;n++)(h.length-n)%k===0&&n!==0&&(f+=c),f+=h.charAt(n);for(;b.length<e;)b+="0";e&&e!=="0"&&(f+=d+b.substr(0,e))}i.push(g?a.negPre:a.posPre);i.push(f);i.push(g?a.negSuf:a.posSuf);return i.join("")}function jb(b,a,c){var d="";b<0&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function O(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(c>0||e>
-c)e+=c;e===0&&c==-12&&(e=12);return jb(e,a,d)}}function Ja(b,a){return function(c,d){var e=c["get"+b](),g=la(a?"SHORT"+b:b);return d[g][e]}}function Tb(b){function a(a){var b;if(b=a.match(c)){var a=new Date(0),g=0,h=0;b[9]&&(g=G(b[9]+b[10]),h=G(b[9]+b[11]));a.setUTCFullYear(G(b[1]),G(b[2])-1,G(b[3]));a.setUTCHours(G(b[4]||0)-g,G(b[5]||0)-h,G(b[6]||0),G(b[7]||0))}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,
e){var g="",h=[],f,i,e=e||"mediumDate",e=b.DATETIME_FORMATS[e]||e;B(c)&&(c=gd.test(c)?G(c):a(c));Qa(c)&&(c=new Date(c));if(!na(c))return c;for(;e;)(i=hd.exec(e))?(h=h.concat(ha.call(i,1)),e=h.pop()):(h.push(e),e=null);m(h,function(a){f=id[a];g+=f?f(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function cd(){return function(b){return da(b,!0)}}function dd(){return function(b,a){if(!(b instanceof Array))return b;var a=G(a),c=[],d,e;if(!b||!(b instanceof Array))return c;
a>b.length?a=b.length:a<-b.length&&(a=-b.length);a>0?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Vb(b){return function(a,c,d){function e(a,b){return Ua(b)?function(b,c){return a(c,b)}:a}if(!E(a))return a;if(!c)return a;for(var c=E(c)?c:[c],c=Ra(c,function(a){var c=!1,d=a||ma;if(B(a)){if(a.charAt(0)=="+"||a.charAt(0)=="-")c=a.charAt(0)=="-",a=a.substring(1);d=b(a)}return e(function(a,b){var c;c=d(a);var e=d(b),f=typeof c,g=typeof e;f==g?(f=="string"&&(c=c.toLowerCase()),
f=="string"&&(e=e.toLowerCase()),c=c===e?0:c<e?-1:1):c=f<g?-1:1;return c},c)}),g=[],h=0;h<a.length;h++)g.push(a[h]);return g.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(e!==0)return e}return 0},d))}}function S(b){H(b)&&(b={link:b});b.restrict=b.restrict||"AC";return I(b)}function Yb(b,a){function c(a,c){c=c?"-"+Za(c,"-"):"";b.removeClass((a?Ka:La)+c).addClass((a?La:Ka)+c)}var d=this,e=b.parent().controller("form")||Ma,g=0,h=d.$error={};d.$name=a.name;d.$dirty=!1;d.$pristine=
!0;d.$valid=!0;d.$invalid=!1;e.$addControl(d);b.addClass(Na);c(!0);d.$addControl=function(a){a.$name&&!d.hasOwnProperty(a.$name)&&(d[a.$name]=a)};d.$removeControl=function(a){a.$name&&d[a.$name]===a&&delete d[a.$name];m(h,function(b,c){d.$setValidity(c,!0,a)})};d.$setValidity=function(a,b,j){var k=h[a];if(b){if(k&&(Sa(k,j),!k.length)){g--;if(!g)c(b),d.$valid=!0,d.$invalid=!1;h[a]=!1;c(!0,a);e.$setValidity(a,!0,d)}}else{g||c(b);if(k){if(za(k,j)!=-1)return}else h[a]=k=[],g++,c(!1,a),e.$setValidity(a,
!1,d);k.push(j);d.$valid=!1;d.$invalid=!0}};d.$setDirty=function(){b.removeClass(Na).addClass(Zb);d.$dirty=!0;d.$pristine=!1;e.$setDirty()}}function X(b){return w(b)||b===""||b===null||b!==b}function Oa(b,a,c,d,e,g){var h=function(){var c=Q(a.val());d.$viewValue!==c&&b.$apply(function(){d.$setViewValue(c)})};if(e.hasEvent("input"))a.bind("input",h);else{var f,i=function(){f||(f=g.defer(function(){h();f=null}))};a.bind("keydown",function(a){a=a.keyCode;a===91||15<a&&a<19||37<=a&&a<=40||i()});a.bind("change",
h);e.hasEvent("paste")&&a.bind("paste cut",i)}d.$render=function(){a.val(X(d.$viewValue)?"":d.$viewValue)};var j=c.ngPattern,k=function(a,b){return X(b)||a.test(b)?(d.$setValidity("pattern",!0),b):(d.$setValidity("pattern",!1),q)};j&&(j.match(/^\/(.*)\/$/)?(j=RegExp(j.substr(1,j.length-2)),e=function(a){return k(j,a)}):e=function(a){var c=b.$eval(j);if(!c||!c.test)throw Error("Expected "+j+" to be a RegExp but was "+c);return k(c,a)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var l=
G(c.ngMinlength),e=function(a){return!X(a)&&a.length<l?(d.$setValidity("minlength",!1),q):(d.$setValidity("minlength",!0),a)};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var n=G(c.ngMaxlength),c=function(a){return!X(a)&&a.length>n?(d.$setValidity("maxlength",!1),q):(d.$setValidity("maxlength",!0),a)};d.$parsers.push(c);d.$formatters.push(c)}}function kb(b,a){b="ngClass"+b;return S(function(c,d,e){function g(b){if(a===!0||c.$index%2===a)i&&!fa(b,i)&&h(i),f(b);i=U(b)}function h(a){L(a)&&
!E(a)&&(a=Ra(a,function(a,b){if(a)return b}));d.removeClass(E(a)?a.join(" "):a)}function f(a){L(a)&&!E(a)&&(a=Ra(a,function(a,b){if(a)return b}));a&&d.addClass(E(a)?a.join(" "):a)}var i=q;c.$watch(e[b],g,!0);e.$observe("class",function(){var a=c.$eval(e[b]);g(a,a)});b!=="ngClass"&&c.$watch("$index",function(d,g){var i=d&1;i!==g&1&&(i===a?f(c.$eval(e[b])):h(c.$eval(e[b])))})})}var z=function(b){return B(b)?b.toLowerCase():b},la=function(b){return B(b)?b.toUpperCase():b},Z=G((/msie (\d+)/.exec(z(navigator.userAgent))||
[])[1]),u,ca,ha=[].slice,Pa=[].push,wa=Object.prototype.toString,Ya=P.angular||(P.angular={}),sa,fb,aa=["0","0","0"];C.$inject=[];ma.$inject=[];fb=Z<9?function(b){b=b.nodeName?b:b[0];return b.scopeName&&b.scopeName!="HTML"?la(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var kc=/[A-Z]/g,jd={full:"1.0.7",major:1,minor:0,dot:7,codeName:"monochromatic-rainbow"},Ba=K.cache={},Aa=K.expando="ng-"+(new Date).getTime(),oc=1,$b=P.document.addEventListener?
function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},db=P.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)},mc=/([\:\-\_]+(.))/g,nc=/^moz([A-Z])/,ua=K.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;this.bind("DOMContentLoaded",a);K(P).bind("load",a)},toString:function(){var b=[];m(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return b>=0?u(this[b]):u(this[this.length+
b])},length:0,push:Pa,sort:[].sort,splice:[].splice},Ea={};m("multiple,selected,checked,disabled,readOnly,required".split(","),function(b){Ea[z(b)]=b});var Bb={};m("input,select,option,textarea,button,form".split(","),function(b){Bb[la(b)]=!0});m({data:wb,inheritedData:Da,scope:function(b){return Da(b,"$scope")},controller:zb,injector:function(b){return Da(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Ca,css:function(b,a,c){a=tb(a);if(y(c))b.style[a]=c;else{var d;Z<=8&&(d=
b.currentStyle&&b.currentStyle[a],d===""&&(d="auto"));d=d||b.style[a];Z<=8&&(d=d===""?q:d);return d}},attr:function(b,a,c){var d=z(a);if(Ea[d])if(y(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||C).specified?d:q;else if(y(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),b===null?q:b},prop:function(b,a,c){if(y(c))b[a]=c;else return b[a]},text:v(Z<9?function(b,a){if(b.nodeType==1){if(w(a))return b.innerText;
b.innerText=a}else{if(w(a))return b.nodeValue;b.nodeValue=a}}:function(b,a){if(w(a))return b.textContent;b.textContent=a},{$dv:""}),val:function(b,a){if(w(a))return b.value;b.value=a},html:function(b,a){if(w(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)ra(d[c]);b.innerHTML=a}},function(b,a){K.prototype[a]=function(a,d){var e,g;if((b.length==2&&b!==Ca&&b!==zb?a:d)===q)if(L(a)){for(e=0;e<this.length;e++)if(b===wb)b(this[e],a);else for(g in a)b(this[e],g,a[g]);return this}else{if(this.length)return b(this[0],
a,d)}else{for(e=0;e<this.length;e++)b(this[e],a,d);return this}return b.$dv}});m({removeData:ub,dealoc:ra,bind:function a(c,d,e){var g=ba(c,"events"),h=ba(c,"handle");g||ba(c,"events",g={});h||ba(c,"handle",h=pc(c,g));m(d.split(" "),function(d){var i=g[d];if(!i){if(d=="mouseenter"||d=="mouseleave"){var j=T.body.contains||T.body.compareDocumentPosition?function(a,c){var d=a.nodeType===9?a.documentElement:a,e=c&&c.parentNode;return a===e||!(!e||!(e.nodeType===1&&(d.contains?d.contains(e):a.compareDocumentPosition&&
a.compareDocumentPosition(e)&16)))}:function(a,c){if(c)for(;c=c.parentNode;)if(c===a)return!0;return!1};g[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],function(a){var c=a.relatedTarget;(!c||c!==this&&!j(this,c))&&h(a,d)})}else $b(c,d,h),g[d]=[];i=g[d]}i.push(e)})},unbind:vb,replaceWith:function(a,c){var d,e=a.parentNode;ra(a);m(new K(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];m(a.childNodes,function(a){a.nodeType===1&&c.push(a)});
return c},contents:function(a){return a.childNodes||[]},append:function(a,c){m(new K(c),function(c){a.nodeType===1&&a.appendChild(c)})},prepend:function(a,c){if(a.nodeType===1){var d=a.firstChild;m(new K(c),function(c){d?a.insertBefore(c,d):(a.appendChild(c),d=c)})}},wrap:function(a,c){var c=u(c)[0],d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){ra(a);var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;m(new K(c),function(a){e.insertBefore(a,
d.nextSibling);d=a})},addClass:yb,removeClass:xb,toggleClass:function(a,c,d){w(d)&&(d=!Ca(a,c));(d?yb:xb)(a,c)},parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;for(a=a.nextSibling;a!=null&&a.nodeType!==1;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName(c)},clone:cb,triggerHandler:function(a,c){var d=(ba(a,"events")||{})[c];m(d,function(c){c.call(a,null)})}},function(a,c){K.prototype[c]=
function(c,e){for(var g,h=0;h<this.length;h++)g==q?(g=a(this[h],c,e),g!==q&&(g=u(g))):bb(g,a(this[h],c,e));return g==q?this:g}});Fa.prototype={put:function(a,c){this[ga(a)]=c},get:function(a){return this[ga(a)]},remove:function(a){var c=this[a=ga(a)];delete this[a];return c}};eb.prototype={push:function(a,c){var d=this[a=ga(a)];d?d.push(c):this[a]=[c]},shift:function(a){var c=this[a=ga(a)];if(c)return c.length==1?(delete this[a],c[0]):c.shift()},peek:function(a){if(a=this[ga(a)])return a[0]}};var rc=
/^function\s*[^\(]*\(\s*([^\)]*)\)/m,sc=/,/,tc=/^\s*(_?)(\S+?)\1\s*$/,qc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Eb="Non-assignable model expression: ";Db.$inject=["$provide"];var Bc=/^(x[\:\-_]|data[\:\-_])/i,Hb=/^([^:]+):\/\/(\w+:{0,1}\w*@)?(\{?[\w\.-]*\}?)(:([0-9]+))?(\/[^\?#]*)?(\?([^#]*))?(#(.*))?$/,ac=/^([^\?#]*)?(\?([^#]*))?(#(.*))?$/,Ic=ac,Ib={http:80,https:443,ftp:21};hb.prototype={$$replace:!1,absUrl:Ha("$$absUrl"),url:function(a,c){if(w(a))return this.$$url;var d=ac.exec(a);d[1]&&this.path(decodeURIComponent(d[1]));
if(d[2]||d[1])this.search(d[3]||"");this.hash(d[5]||"",c);return this},protocol:Ha("$$protocol"),host:Ha("$$host"),port:Ha("$$port"),path:Kb("$$path",function(a){return a.charAt(0)=="/"?a:"/"+a}),search:function(a,c){if(w(a))return this.$$search;y(c)?c===null?delete this.$$search[a]:this.$$search[a]=c:this.$$search=B(a)?Va(a):a;this.$$compose();return this},hash:Kb("$$hash",ma),replace:function(){this.$$replace=!0;return this}};Ga.prototype=ya(hb.prototype);Jb.prototype=ya(Ga.prototype);var Ia={"null":function(){return null},
"true":function(){return!0},"false":function(){return!1},undefined:C,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return y(d)?y(e)?d+e:d:y(e)?e:q},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(y(d)?d:0)-(y(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":C,"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,
d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Mc={n:"\n",f:"\u000c",r:"\r",t:"\t",v:"\u000b","'":"'",'"':'"'},ib={},Zc=P.XMLHttpRequest||function(){try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(a){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(c){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(d){}throw Error("This browser does not support XMLHttpRequest.");
};Rb.$inject=["$provide"];Sb.$inject=["$locale"];Ub.$inject=["$locale"];var Xb=".",id={yyyy:O("FullYear",4),yy:O("FullYear",2,0,!0),y:O("FullYear",1),MMMM:Ja("Month"),MMM:Ja("Month",!0),MM:O("Month",2,1),M:O("Month",1,1),dd:O("Date",2),d:O("Date",1),HH:O("Hours",2),H:O("Hours",1),hh:O("Hours",2,-12),h:O("Hours",1,-12),mm:O("Minutes",2),m:O("Minutes",1),ss:O("Seconds",2),s:O("Seconds",1),EEEE:Ja("Day"),EEE:Ja("Day",!0),a:function(a,c){return a.getHours()<12?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){var a=
-1*a.getTimezoneOffset(),c=a>=0?"+":"";c+=jb(Math[a>0?"floor":"ceil"](a/60),2)+jb(Math.abs(a%60),2);return c}},hd=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,gd=/^\d+$/;Tb.$inject=["$locale"];var ed=I(z),fd=I(la);Vb.$inject=["$parse"];var kd=I({restrict:"E",compile:function(a,c){Z<=8&&(!c.href&&!c.name&&c.$set("href",""),a.append(T.createComment("IE fix")));return function(a,c){c.bind("click",function(a){c.attr("href")||a.preventDefault()})}}}),lb={};m(Ea,function(a,
c){var d=ea("ng-"+c);lb[d]=function(){return{priority:100,compile:function(){return function(a,g,h){a.$watch(h[d],function(a){h.$set(c,!!a)})}}}}});m(["src","href"],function(a){var c=ea("ng-"+a);lb[c]=function(){return{priority:99,link:function(d,e,g){g.$observe(c,function(c){c&&(g.$set(a,c),Z&&e.prop(a,g[a]))})}}}});var Ma={$addControl:C,$removeControl:C,$setValidity:C,$setDirty:C};Yb.$inject=["$element","$attrs","$scope"];var Pa=function(a){return["$timeout",function(c){var d={name:"form",restrict:"E",
controller:Yb,compile:function(){return{pre:function(a,d,h,f){if(!h.action){var i=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};$b(d[0],"submit",i);d.bind("$destroy",function(){c(function(){db(d[0],"submit",i)},0,!1)})}var j=d.parent().controller("form"),k=h.name||h.ngForm;k&&(a[k]=f);j&&d.bind("$destroy",function(){j.$removeControl(f);k&&(a[k]=q);v(f,Ma)})}}}};return a?v(U(d),{restrict:"EAC"}):d}]},ld=Pa(),md=Pa(!0),nd=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
od=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,pd=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,bc={text:Oa,number:function(a,c,d,e,g,h){Oa(a,c,d,e,g,h);e.$parsers.push(function(a){var c=X(a);return c||pd.test(a)?(e.$setValidity("number",!0),a===""?null:c?a:parseFloat(a)):(e.$setValidity("number",!1),q)});e.$formatters.push(function(a){return X(a)?"":""+a});if(d.min){var f=parseFloat(d.min),a=function(a){return!X(a)&&a<f?(e.$setValidity("min",!1),q):(e.$setValidity("min",!0),a)};e.$parsers.push(a);
e.$formatters.push(a)}if(d.max){var i=parseFloat(d.max),d=function(a){return!X(a)&&a>i?(e.$setValidity("max",!1),q):(e.$setValidity("max",!0),a)};e.$parsers.push(d);e.$formatters.push(d)}e.$formatters.push(function(a){return X(a)||Qa(a)?(e.$setValidity("number",!0),a):(e.$setValidity("number",!1),q)})},url:function(a,c,d,e,g,h){Oa(a,c,d,e,g,h);a=function(a){return X(a)||nd.test(a)?(e.$setValidity("url",!0),a):(e.$setValidity("url",!1),q)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,
c,d,e,g,h){Oa(a,c,d,e,g,h);a=function(a){return X(a)||od.test(a)?(e.$setValidity("email",!0),a):(e.$setValidity("email",!1),q)};e.$formatters.push(a);e.$parsers.push(a)},radio:function(a,c,d,e){w(d.name)&&c.attr("name",xa());c.bind("click",function(){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var g=d.ngTrueValue,h=d.ngFalseValue;B(g)||(g=!0);B(h)||(h=!1);c.bind("click",
function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$formatters.push(function(a){return a===g});e.$parsers.push(function(a){return a?g:h})},hidden:C,button:C,submit:C,reset:C},cc=["$browser","$sniffer",function(a,c){return{restrict:"E",require:"?ngModel",link:function(d,e,g,h){h&&(bc[z(g.type)]||bc.text)(d,e,g,h,c,a)}}}],La="ng-valid",Ka="ng-invalid",Na="ng-pristine",Zb="ng-dirty",qd=["$scope","$exceptionHandler","$attrs","$element","$parse",
function(a,c,d,e,g){function h(a,c){c=c?"-"+Za(c,"-"):"";e.removeClass((a?Ka:La)+c).addClass((a?La:Ka)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=d.name;var f=g(d.ngModel),i=f.assign;if(!i)throw Error(Eb+d.ngModel+" ("+pa(e)+")");this.$render=C;var j=e.inheritedData("$formController")||Ma,k=0,l=this.$error={};e.addClass(Na);h(!0);this.$setValidity=function(a,
c){if(l[a]!==!c){if(c){if(l[a]&&k--,!k)h(!0),this.$valid=!0,this.$invalid=!1}else h(!1),this.$invalid=!0,this.$valid=!1,k++;l[a]=!c;h(c,a);j.$setValidity(a,c,this)}};this.$setViewValue=function(d){this.$viewValue=d;if(this.$pristine)this.$dirty=!0,this.$pristine=!1,e.removeClass(Na).addClass(Zb),j.$setDirty();m(this.$parsers,function(a){d=a(d)});if(this.$modelValue!==d)this.$modelValue=d,i(a,d),m(this.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};var n=this;a.$watch(function(){var c=
f(a);if(n.$modelValue!==c){var d=n.$formatters,e=d.length;for(n.$modelValue=c;e--;)c=d[e](c);if(n.$viewValue!==c)n.$viewValue=c,n.$render()}})}],rd=function(){return{require:["ngModel","^?form"],controller:qd,link:function(a,c,d,e){var g=e[0],h=e[1]||Ma;h.$addControl(g);c.bind("$destroy",function(){h.$removeControl(g)})}}},sd=I({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),dc=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=
!0;var g=function(a){if(d.required&&(X(a)||a===!1))e.$setValidity("required",!1);else return e.$setValidity("required",!0),a};e.$formatters.push(g);e.$parsers.unshift(g);d.$observe("required",function(){g(e.$viewValue)})}}}},td=function(){return{require:"ngModel",link:function(a,c,d,e){var g=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){var c=[];a&&m(a.split(g),function(a){a&&c.push(Q(a))});return c});e.$formatters.push(function(a){return E(a)?a.join(", "):
q})}}},ud=/^(true|false|\d+)$/,vd=function(){return{priority:100,compile:function(a,c){return ud.test(c.ngValue)?function(a,c,g){g.$set("value",a.$eval(g.ngValue))}:function(a,c,g){a.$watch(g.ngValue,function(a){g.$set("value",a,!1)})}}}},wd=S(function(a,c,d){c.addClass("ng-binding").data("$binding",d.ngBind);a.$watch(d.ngBind,function(a){c.text(a==q?"":a)})}),xd=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",
function(a){d.text(a)})}}],yd=[function(){return function(a,c,d){c.addClass("ng-binding").data("$binding",d.ngBindHtmlUnsafe);a.$watch(d.ngBindHtmlUnsafe,function(a){c.html(a||"")})}}],zd=kb("",!0),Ad=kb("Odd",0),Bd=kb("Even",1),Cd=S({compile:function(a,c){c.$set("ngCloak",q);a.removeClass("ng-cloak")}}),Dd=[function(){return{scope:!0,controller:"@"}}],Ed=["$sniffer",function(a){return{priority:1E3,compile:function(){a.csp=!0}}}],ec={};m("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave".split(" "),
function(a){var c=ea("ng-"+a);ec[c]=["$parse",function(d){return function(e,g,h){var f=d(h[c]);g.bind(z(a),function(a){e.$apply(function(){f(e,{$event:a})})})}}]});var Fd=S(function(a,c,d){c.bind("submit",function(){a.$apply(d.ngSubmit)})}),Gd=["$http","$templateCache","$anchorScroll","$compile",function(a,c,d,e){return{restrict:"ECA",terminal:!0,compile:function(g,h){var f=h.ngInclude||h.src,i=h.onload||"",j=h.autoscroll;return function(g,h){var n=0,o,p=function(){o&&(o.$destroy(),o=null);h.html("")};
g.$watch(f,function(f){var m=++n;f?a.get(f,{cache:c}).success(function(a){m===n&&(o&&o.$destroy(),o=g.$new(),h.html(a),e(h.contents())(o),y(j)&&(!j||g.$eval(j))&&d(),o.$emit("$includeContentLoaded"),g.$eval(i))}).error(function(){m===n&&p()}):p()})}}}}],Hd=S({compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),Id=S({terminal:!0,priority:1E3}),Jd=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,g,h){var f=h.count,i=g.attr(h.$attr.when),j=h.offset||
0,k=e.$eval(i),l={},n=c.startSymbol(),o=c.endSymbol();m(k,function(a,e){l[e]=c(a.replace(d,n+f+"-"+j+o))});e.$watch(function(){var c=parseFloat(e.$eval(f));return isNaN(c)?"":(c in k||(c=a.pluralCat(c-j)),l[c](e,g,!0))},function(a){g.text(a)})}}}],Kd=S({transclude:"element",priority:1E3,terminal:!0,compile:function(a,c,d){return function(a,c,h){var f=h.ngRepeat,h=f.match(/^\s*(.+)\s+in\s+(.*)\s*$/),i,j,k;if(!h)throw Error("Expected ngRepeat in form of '_item_ in _collection_' but got '"+f+"'.");f=
h[1];i=h[2];h=f.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!h)throw Error("'item' in 'item in collection' should be identifier or (key, value) but got '"+f+"'.");j=h[3]||h[1];k=h[2];var l=new eb;a.$watch(function(a){var e,f,h=a.$eval(i),m=c,q=new eb,y,A,u,w,r,v;if(E(h))r=h||[];else{r=[];for(u in h)h.hasOwnProperty(u)&&u.charAt(0)!="$"&&r.push(u);r.sort()}y=r.length-1;e=0;for(f=r.length;e<f;e++){u=h===r?e:r[e];w=h[u];if(v=l.shift(w)){A=v.scope;q.push(w,v);if(e!==v.index)v.index=e,m.after(v.element);
m=v.element}else A=a.$new();A[j]=w;k&&(A[k]=u);A.$index=e;A.$first=e===0;A.$last=e===y;A.$middle=!(A.$first||A.$last);v||d(A,function(a){m.after(a);v={scope:A,element:m=a,index:e};q.push(w,v)})}for(u in l)if(l.hasOwnProperty(u))for(r=l[u];r.length;)w=r.pop(),w.element.remove(),w.scope.$destroy();l=q})}}}),Ld=S(function(a,c,d){a.$watch(d.ngShow,function(a){c.css("display",Ua(a)?"":"none")})}),Md=S(function(a,c,d){a.$watch(d.ngHide,function(a){c.css("display",Ua(a)?"none":"")})}),Nd=S(function(a,c,
d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&m(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Od=I({restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(a,c,d,e){var g,h,f;a.$watch(d.ngSwitch||d.on,function(i){h&&(f.$destroy(),h.remove(),h=f=null);if(g=e.cases["!"+i]||e.cases["?"])a.$eval(d.change),f=a.$new(),g(f,function(a){h=a;c.append(a)})})}}),Pd=S({transclude:"element",priority:500,require:"^ngSwitch",compile:function(a,c,d){return function(a,g,h,
f){f.cases["!"+c.ngSwitchWhen]=d}}}),Qd=S({transclude:"element",priority:500,require:"^ngSwitch",compile:function(a,c,d){return function(a,c,h,f){f.cases["?"]=d}}}),Rd=S({controller:["$transclude","$element",function(a,c){a(function(a){c.append(a)})}]}),Sd=["$http","$templateCache","$route","$anchorScroll","$compile","$controller",function(a,c,d,e,g,h){return{restrict:"ECA",terminal:!0,link:function(a,c,j){function k(){var j=d.current&&d.current.locals,k=j&&j.$template;if(k){c.html(k);l&&(l.$destroy(),
l=null);var k=g(c.contents()),m=d.current;l=m.scope=a.$new();if(m.controller)j.$scope=l,j=h(m.controller,j),c.children().data("$ngControllerController",j);k(l);l.$emit("$viewContentLoaded");l.$eval(n);e()}else c.html(""),l&&(l.$destroy(),l=null)}var l,n=j.onload||"";a.$on("$routeChangeSuccess",k);k()}}}],Td=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){d.type=="text/ng-template"&&a.put(d.id,c[0].text)}}}],Ud=I({terminal:!0}),Vd=["$compile","$parse",function(a,
c){var d=/^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w\d]*)|(?:\(\s*([\$\w][\$\w\d]*)\s*,\s*([\$\w][\$\w\d]*)\s*\)))\s+in\s+(.*)$/,e={$setViewValue:C};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var i=this,j={},k=e,l;i.databound=d.ngModel;i.init=function(a,c,d){k=a;l=d};i.addOption=function(c){j[c]=!0;k.$viewValue==c&&(a.val(c),l.parent()&&l.remove())};i.removeOption=function(a){this.hasOption(a)&&(delete j[a],
k.$viewValue==a&&this.renderUnknownOption(a))};i.renderUnknownOption=function(c){c="? "+ga(c)+" ?";l.val(c);a.prepend(l);a.val(c);l.prop("selected",!0)};i.hasOption=function(a){return j.hasOwnProperty(a)};c.$on("$destroy",function(){i.renderUnknownOption=C})}],link:function(e,h,f,i){function j(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(z.parent()&&z.remove(),c.val(a),a===""&&v.prop("selected",!0)):w(a)&&v?c.val(""):e.renderUnknownOption(a)};c.bind("change",function(){a.$apply(function(){z.parent()&&
z.remove();d.$setViewValue(c.val())})})}function k(a,c,d){var e;d.$render=function(){var a=new Fa(d.$viewValue);m(c.find("option"),function(c){c.selected=y(a.get(c.value))})};a.$watch(function(){fa(e,d.$viewValue)||(e=U(d.$viewValue),d.$render())});c.bind("change",function(){a.$apply(function(){var a=[];m(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function l(e,f,g){function h(){var a={"":[]},c=[""],d,i,s,u,v;s=g.$modelValue;u=o(e)||[];var w=l?mb(u):u,y,x,z;x=
{};v=!1;var B,E;p&&(v=new Fa(s));for(z=0;y=w.length,z<y;z++){x[k]=u[l?x[l]=w[z]:z];d=m(e,x)||"";if(!(i=a[d]))i=a[d]=[],c.push(d);p?d=v.remove(n(e,x))!=q:(d=s===n(e,x),v=v||d);B=j(e,x);B=B===q?"":B;i.push({id:l?w[z]:z,label:B,selected:d})}p||(t||s===null?a[""].unshift({id:"",label:"",selected:!v}):v||a[""].unshift({id:"?",label:"",selected:!0}));x=0;for(w=c.length;x<w;x++){d=c[x];i=a[d];if(r.length<=x)s={element:A.clone().attr("label",d),label:i.label},u=[s],r.push(u),f.append(s.element);else if(u=
r[x],s=u[0],s.label!=d)s.element.attr("label",s.label=d);B=null;z=0;for(y=i.length;z<y;z++)if(d=i[z],v=u[z+1]){B=v.element;if(v.label!==d.label)B.text(v.label=d.label);if(v.id!==d.id)B.val(v.id=d.id);if(B[0].selected!==d.selected)B.prop("selected",v.selected=d.selected)}else d.id===""&&t?E=t:(E=C.clone()).val(d.id).attr("selected",d.selected).text(d.label),u.push({element:E,label:d.label,id:d.id,selected:d.selected}),B?B.after(E):s.element.append(E),B=E;for(z++;u.length>z;)u.pop().element.remove()}for(;r.length>
x;)r.pop()[0].element.remove()}var i;if(!(i=s.match(d)))throw Error("Expected ngOptions in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '"+s+"'.");var j=c(i[2]||i[1]),k=i[4]||i[6],l=i[5],m=c(i[3]||""),n=c(i[2]?i[1]:k),o=c(i[7]),r=[[{element:f,label:""}]];t&&(a(t)(e),t.removeClass("ng-scope"),t.remove());f.html("");f.bind("change",function(){e.$apply(function(){var a,c=o(e)||[],d={},h,i,j,m,s,t;if(p){i=[];m=0;for(t=r.length;m<t;m++){a=r[m];j=1;for(s=a.length;j<s;j++)if((h=
a[j].element)[0].selected)h=h.val(),l&&(d[l]=h),d[k]=c[h],i.push(n(e,d))}}else h=f.val(),h=="?"?i=q:h==""?i=null:(d[k]=c[h],l&&(d[l]=h),i=n(e,d));g.$setViewValue(i)})});g.$render=h;e.$watch(h)}if(i[1]){for(var n=i[0],o=i[1],p=f.multiple,s=f.ngOptions,t=!1,v,C=u(T.createElement("option")),A=u(T.createElement("optgroup")),z=C.clone(),i=0,B=h.children(),r=B.length;i<r;i++)if(B[i].value==""){v=t=B.eq(i);break}n.init(o,t,z);if(p&&(f.required||f.ngRequired)){var E=function(a){o.$setValidity("required",
!f.required||a&&a.length);return a};o.$parsers.push(E);o.$formatters.unshift(E);f.$observe("required",function(){E(o.$viewValue)})}s?l(e,h,o):p?k(e,h,o):j(e,h,o,n)}}}}],Wd=["$interpolate",function(a){var c={addOption:C,removeOption:C};return{restrict:"E",priority:100,compile:function(d,e){if(w(e.value)){var g=a(d.text(),!0);g||e.$set("value",d.text())}return function(a,d,e){var j=d.parent(),k=j.data("$selectController")||j.parent().data("$selectController");k&&k.databound?d.prop("selected",!1):k=
c;g?a.$watch(g,function(a,c){e.$set("value",a);a!==c&&k.removeOption(c);k.addOption(a)}):k.addOption(e.value);d.bind("$destroy",function(){k.removeOption(e.value)})}}}}],Xd=I({restrict:"E",terminal:!0});(ca=P.jQuery)?(u=ca,v(ca.fn,{scope:ua.scope,controller:ua.controller,injector:ua.injector,inheritedData:ua.inheritedData}),ab("remove",!0),ab("empty"),ab("html")):u=K;Ya.element=u;(function(a){v(a,{bootstrap:rb,copy:U,extend:v,equals:fa,element:u,forEach:m,injector:sb,noop:C,bind:Ta,toJson:da,fromJson:pb,
identity:ma,isUndefined:w,isDefined:y,isString:B,isFunction:H,isObject:L,isNumber:Qa,isElement:gc,isArray:E,version:jd,isDate:na,lowercase:z,uppercase:la,callbacks:{counter:0}});sa=lc(P);try{sa("ngLocale")}catch(c){sa("ngLocale",[]).provider("$locale",$c)}sa("ng",["ngLocale"],["$provide",function(a){a.provider("$compile",Db).directive({a:kd,input:cc,textarea:cc,form:ld,script:Td,select:Vd,style:Xd,option:Wd,ngBind:wd,ngBindHtmlUnsafe:yd,ngBindTemplate:xd,ngClass:zd,ngClassEven:Bd,ngClassOdd:Ad,ngCsp:Ed,
ngCloak:Cd,ngController:Dd,ngForm:md,ngHide:Md,ngInclude:Gd,ngInit:Hd,ngNonBindable:Id,ngPluralize:Jd,ngRepeat:Kd,ngShow:Ld,ngSubmit:Fd,ngStyle:Nd,ngSwitch:Od,ngSwitchWhen:Pd,ngSwitchDefault:Qd,ngOptions:Ud,ngView:Sd,ngTransclude:Rd,ngModel:rd,ngList:td,ngChange:sd,required:dc,ngRequired:dc,ngValue:vd}).directive(lb).directive(ec);a.provider({$anchorScroll:uc,$browser:wc,$cacheFactory:xc,$controller:Cc,$document:Dc,$exceptionHandler:Ec,$filter:Rb,$interpolate:Fc,$http:Wc,$httpBackend:Xc,$location:Jc,
$log:Kc,$parse:Oc,$route:Rc,$routeParams:Sc,$rootScope:Tc,$q:Pc,$sniffer:Uc,$templateCache:yc,$timeout:ad,$window:Vc})}])})(Ya);u(T).ready(function(){jc(T,rb)})})(window,document);angular.element(document).find("head").append('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak{display:none;}ng\\:form{display:block;}</style>');

/**
 * @license
 * Lo-Dash 1.3.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modern -o ./dist/lodash.js`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.4.4 <http://underscorejs.org/>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud Inc.
 * Available under MIT license <http://lodash.com/license>
 */
; (function (window) {

    /** Used as a safe reference for `undefined` in pre ES5 environments */
    var undefined;

    /** Used to pool arrays and objects used internally */
    var arrayPool = [],
        objectPool = [];

    /** Used to generate unique IDs */
    var idCounter = 0;

    /** Used internally to indicate various things */
    var indicatorObject = {};

    /** Used to prefix keys to avoid issues with `__proto__` and properties on `Object.prototype` */
    var keyPrefix = +new Date + '';

    /** Used as the size when optimizations are enabled for large arrays */
    var largeArraySize = 75;

    /** Used as the max size of the `arrayPool` and `objectPool` */
    var maxPoolSize = 40;

    /** Used to match empty string literals in compiled template source */
    var reEmptyStringLeading = /\b__p \+= '';/g,
        reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
        reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

    /** Used to match HTML entities */
    var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g;

    /**
     * Used to match ES6 template delimiters
     * http://people.mozilla.org/~jorendorff/es6-draft.html#sec-7.8.6
     */
    var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

    /** Used to match regexp flags from their coerced string values */
    var reFlags = /\w*$/;

    /** Used to match "interpolate" template delimiters */
    var reInterpolate = /<%=([\s\S]+?)%>/g;

    /** Used to detect functions containing a `this` reference */
    var reThis = (reThis = /\bthis\b/) && reThis.test(runInContext) && reThis;

    /** Used to detect and test whitespace */
    var whitespace = (
      // whitespace
      ' \t\x0B\f\xA0\ufeff' +

      // line terminators
      '\n\r\u2028\u2029' +

      // unicode category "Zs" space separators
      '\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000'
    );

    /** Used to match leading whitespace and zeros to be removed */
    var reLeadingSpacesAndZeros = RegExp('^[' + whitespace + ']*0+(?=.$)');

    /** Used to ensure capturing order of template delimiters */
    var reNoMatch = /($^)/;

    /** Used to match HTML characters */
    var reUnescapedHtml = /[&<>"']/g;

    /** Used to match unescaped characters in compiled string literals */
    var reUnescapedString = /['\n\r\t\u2028\u2029\\]/g;

    /** Used to assign default `context` object properties */
    var contextProps = [
      'Array', 'Boolean', 'Date', 'Function', 'Math', 'Number', 'Object',
      'RegExp', 'String', '_', 'attachEvent', 'clearTimeout', 'isFinite', 'isNaN',
      'parseInt', 'setImmediate', 'setTimeout'
    ];

    /** Used to make template sourceURLs easier to identify */
    var templateCounter = 0;

    /** `Object#toString` result shortcuts */
    var argsClass = '[object Arguments]',
        arrayClass = '[object Array]',
        boolClass = '[object Boolean]',
        dateClass = '[object Date]',
        errorClass = '[object Error]',
        funcClass = '[object Function]',
        numberClass = '[object Number]',
        objectClass = '[object Object]',
        regexpClass = '[object RegExp]',
        stringClass = '[object String]';

    /** Used to identify object classifications that `_.clone` supports */
    var cloneableClasses = {};
    cloneableClasses[funcClass] = false;
    cloneableClasses[argsClass] = cloneableClasses[arrayClass] =
    cloneableClasses[boolClass] = cloneableClasses[dateClass] =
    cloneableClasses[numberClass] = cloneableClasses[objectClass] =
    cloneableClasses[regexpClass] = cloneableClasses[stringClass] = true;

    /** Used to determine if values are of the language type Object */
    var objectTypes = {
        'boolean': false,
        'function': true,
        'object': true,
        'number': false,
        'string': false,
        'undefined': false
    };

    /** Used to escape characters for inclusion in compiled string literals */
    var stringEscapes = {
        '\\': '\\',
        "'": "'",
        '\n': 'n',
        '\r': 'r',
        '\t': 't',
        '\u2028': 'u2028',
        '\u2029': 'u2029'
    };

    /** Detect free variable `exports` */
    var freeExports = objectTypes[typeof exports] && exports;

    /** Detect free variable `module` */
    var freeModule = objectTypes[typeof module] && module && module.exports == freeExports && module;

    /** Detect free variable `global`, from Node.js or Browserified code, and use it as `window` */
    var freeGlobal = objectTypes[typeof global] && global;
    if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
        window = freeGlobal;
    }

    /*--------------------------------------------------------------------------*/

    /**
     * A basic implementation of `_.indexOf` without support for binary searches
     * or `fromIndex` constraints.
     *
     * @private
     * @param {Array} array The array to search.
     * @param {Mixed} value The value to search for.
     * @param {Number} [fromIndex=0] The index to search from.
     * @returns {Number} Returns the index of the matched value or `-1`.
     */
    function basicIndexOf(array, value, fromIndex) {
        var index = (fromIndex || 0) - 1,
            length = array.length;

        while (++index < length) {
            if (array[index] === value) {
                return index;
            }
        }
        return -1;
    }

    /**
     * An implementation of `_.contains` for cache objects that mimics the return
     * signature of `_.indexOf` by returning `0` if the value is found, else `-1`.
     *
     * @private
     * @param {Object} cache The cache object to inspect.
     * @param {Mixed} value The value to search for.
     * @returns {Number} Returns `0` if `value` is found, else `-1`.
     */
    function cacheIndexOf(cache, value) {
        var type = typeof value;
        cache = cache.cache;

        if (type == 'boolean' || value == null) {
            return cache[value];
        }
        if (type != 'number' && type != 'string') {
            type = 'object';
        }
        var key = type == 'number' ? value : keyPrefix + value;
        cache = cache[type] || (cache[type] = {});

        return type == 'object'
          ? (cache[key] && basicIndexOf(cache[key], value) > -1 ? 0 : -1)
          : (cache[key] ? 0 : -1);
    }

    /**
     * Adds a given `value` to the corresponding cache object.
     *
     * @private
     * @param {Mixed} value The value to add to the cache.
     */
    function cachePush(value) {
        var cache = this.cache,
            type = typeof value;

        if (type == 'boolean' || value == null) {
            cache[value] = true;
        } else {
            if (type != 'number' && type != 'string') {
                type = 'object';
            }
            var key = type == 'number' ? value : keyPrefix + value,
                typeCache = cache[type] || (cache[type] = {});

            if (type == 'object') {
                if ((typeCache[key] || (typeCache[key] = [])).push(value) == this.array.length) {
                    cache[type] = false;
                }
            } else {
                typeCache[key] = true;
            }
        }
    }

    /**
     * Used by `_.max` and `_.min` as the default `callback` when a given
     * `collection` is a string value.
     *
     * @private
     * @param {String} value The character to inspect.
     * @returns {Number} Returns the code unit of given character.
     */
    function charAtCallback(value) {
        return value.charCodeAt(0);
    }

    /**
     * Used by `sortBy` to compare transformed `collection` values, stable sorting
     * them in ascending order.
     *
     * @private
     * @param {Object} a The object to compare to `b`.
     * @param {Object} b The object to compare to `a`.
     * @returns {Number} Returns the sort order indicator of `1` or `-1`.
     */
    function compareAscending(a, b) {
        var ai = a.index,
            bi = b.index;

        a = a.criteria;
        b = b.criteria;

        // ensure a stable sort in V8 and other engines
        // http://code.google.com/p/v8/issues/detail?id=90
        if (a !== b) {
            if (a > b || typeof a == 'undefined') {
                return 1;
            }
            if (a < b || typeof b == 'undefined') {
                return -1;
            }
        }
        return ai < bi ? -1 : 1;
    }

    /**
     * Creates a cache object to optimize linear searches of large arrays.
     *
     * @private
     * @param {Array} [array=[]] The array to search.
     * @returns {Null|Object} Returns the cache object or `null` if caching should not be used.
     */
    function createCache(array) {
        var index = -1,
            length = array.length;

        var cache = getObject();
        cache['false'] = cache['null'] = cache['true'] = cache['undefined'] = false;

        var result = getObject();
        result.array = array;
        result.cache = cache;
        result.push = cachePush;

        while (++index < length) {
            result.push(array[index]);
        }
        return cache.object === false
          ? (releaseObject(result), null)
          : result;
    }

    /**
     * Used by `template` to escape characters for inclusion in compiled
     * string literals.
     *
     * @private
     * @param {String} match The matched character to escape.
     * @returns {String} Returns the escaped character.
     */
    function escapeStringChar(match) {
        return '\\' + stringEscapes[match];
    }

    /**
     * Gets an array from the array pool or creates a new one if the pool is empty.
     *
     * @private
     * @returns {Array} The array from the pool.
     */
    function getArray() {
        return arrayPool.pop() || [];
    }

    /**
     * Gets an object from the object pool or creates a new one if the pool is empty.
     *
     * @private
     * @returns {Object} The object from the pool.
     */
    function getObject() {
        return objectPool.pop() || {
            'array': null,
            'cache': null,
            'criteria': null,
            'false': false,
            'index': 0,
            'leading': false,
            'maxWait': 0,
            'null': false,
            'number': null,
            'object': null,
            'push': null,
            'string': null,
            'trailing': false,
            'true': false,
            'undefined': false,
            'value': null
        };
    }

    /**
     * A no-operation function.
     *
     * @private
     */
    function noop() {
        // no operation performed
    }

    /**
     * Releases the given `array` back to the array pool.
     *
     * @private
     * @param {Array} [array] The array to release.
     */
    function releaseArray(array) {
        array.length = 0;
        if (arrayPool.length < maxPoolSize) {
            arrayPool.push(array);
        }
    }

    /**
     * Releases the given `object` back to the object pool.
     *
     * @private
     * @param {Object} [object] The object to release.
     */
    function releaseObject(object) {
        var cache = object.cache;
        if (cache) {
            releaseObject(cache);
        }
        object.array = object.cache = object.criteria = object.object = object.number = object.string = object.value = null;
        if (objectPool.length < maxPoolSize) {
            objectPool.push(object);
        }
    }

    /**
     * Slices the `collection` from the `start` index up to, but not including,
     * the `end` index.
     *
     * Note: This function is used, instead of `Array#slice`, to support node lists
     * in IE < 9 and to ensure dense arrays are returned.
     *
     * @private
     * @param {Array|Object|String} collection The collection to slice.
     * @param {Number} start The start index.
     * @param {Number} end The end index.
     * @returns {Array} Returns the new array.
     */
    function slice(array, start, end) {
        start || (start = 0);
        if (typeof end == 'undefined') {
            end = array ? array.length : 0;
        }
        var index = -1,
            length = end - start || 0,
            result = Array(length < 0 ? 0 : length);

        while (++index < length) {
            result[index] = array[start + index];
        }
        return result;
    }

    /*--------------------------------------------------------------------------*/

    /**
     * Create a new `lodash` function using the given `context` object.
     *
     * @static
     * @memberOf _
     * @category Utilities
     * @param {Object} [context=window] The context object.
     * @returns {Function} Returns the `lodash` function.
     */
    function runInContext(context) {
        // Avoid issues with some ES3 environments that attempt to use values, named
        // after built-in constructors like `Object`, for the creation of literals.
        // ES5 clears this up by stating that literals must use built-in constructors.
        // See http://es5.github.com/#x11.1.5.
        context = context ? _.defaults(window.Object(), context, _.pick(window, contextProps)) : window;

        /** Native constructor references */
        var Array = context.Array,
            Boolean = context.Boolean,
            Date = context.Date,
            Function = context.Function,
            Math = context.Math,
            Number = context.Number,
            Object = context.Object,
            RegExp = context.RegExp,
            String = context.String,
            TypeError = context.TypeError;

        /**
         * Used for `Array` method references.
         *
         * Normally `Array.prototype` would suffice, however, using an array literal
         * avoids issues in Narwhal.
         */
        var arrayRef = [];

        /** Used for native method references */
        var objectProto = Object.prototype,
            stringProto = String.prototype;

        /** Used to restore the original `_` reference in `noConflict` */
        var oldDash = context._;

        /** Used to detect if a method is native */
        var reNative = RegExp('^' +
          String(objectProto.valueOf)
            .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
            .replace(/valueOf|for [^\]]+/g, '.+?') + '$'
        );

        /** Native method shortcuts */
        var ceil = Math.ceil,
            clearTimeout = context.clearTimeout,
            concat = arrayRef.concat,
            floor = Math.floor,
            fnToString = Function.prototype.toString,
            getPrototypeOf = reNative.test(getPrototypeOf = Object.getPrototypeOf) && getPrototypeOf,
            hasOwnProperty = objectProto.hasOwnProperty,
            push = arrayRef.push,
            propertyIsEnumerable = objectProto.propertyIsEnumerable,
            setImmediate = context.setImmediate,
            setTimeout = context.setTimeout,
            toString = objectProto.toString;

        /* Native method shortcuts for methods with the same name as other `lodash` methods */
        var nativeBind = reNative.test(nativeBind = toString.bind) && nativeBind,
            nativeCreate = reNative.test(nativeCreate = Object.create) && nativeCreate,
            nativeIsArray = reNative.test(nativeIsArray = Array.isArray) && nativeIsArray,
            nativeIsFinite = context.isFinite,
            nativeIsNaN = context.isNaN,
            nativeKeys = reNative.test(nativeKeys = Object.keys) && nativeKeys,
            nativeMax = Math.max,
            nativeMin = Math.min,
            nativeParseInt = context.parseInt,
            nativeRandom = Math.random,
            nativeSlice = arrayRef.slice;

        /** Detect various environments */
        var isIeOpera = reNative.test(context.attachEvent),
            isV8 = nativeBind && !/\n|true/.test(nativeBind + isIeOpera);

        /** Used to lookup a built-in constructor by [[Class]] */
        var ctorByClass = {};
        ctorByClass[arrayClass] = Array;
        ctorByClass[boolClass] = Boolean;
        ctorByClass[dateClass] = Date;
        ctorByClass[funcClass] = Function;
        ctorByClass[objectClass] = Object;
        ctorByClass[numberClass] = Number;
        ctorByClass[regexpClass] = RegExp;
        ctorByClass[stringClass] = String;

        /*--------------------------------------------------------------------------*/

        /**
         * Creates a `lodash` object, which wraps the given `value`, to enable method
         * chaining.
         *
         * In addition to Lo-Dash methods, wrappers also have the following `Array` methods:
         * `concat`, `join`, `pop`, `push`, `reverse`, `shift`, `slice`, `sort`, `splice`,
         * and `unshift`
         *
         * Chaining is supported in custom builds as long as the `value` method is
         * implicitly or explicitly included in the build.
         *
         * The chainable wrapper functions are:
         * `after`, `assign`, `bind`, `bindAll`, `bindKey`, `chain`, `compact`,
         * `compose`, `concat`, `countBy`, `createCallback`, `debounce`, `defaults`,
         * `defer`, `delay`, `difference`, `filter`, `flatten`, `forEach`, `forIn`,
         * `forOwn`, `functions`, `groupBy`, `initial`, `intersection`, `invert`,
         * `invoke`, `keys`, `map`, `max`, `memoize`, `merge`, `min`, `object`, `omit`,
         * `once`, `pairs`, `partial`, `partialRight`, `pick`, `pluck`, `push`, `range`,
         * `reject`, `rest`, `reverse`, `shuffle`, `slice`, `sort`, `sortBy`, `splice`,
         * `tap`, `throttle`, `times`, `toArray`, `transform`, `union`, `uniq`, `unshift`,
         * `unzip`, `values`, `where`, `without`, `wrap`, and `zip`
         *
         * The non-chainable wrapper functions are:
         * `clone`, `cloneDeep`, `contains`, `escape`, `every`, `find`, `has`,
         * `identity`, `indexOf`, `isArguments`, `isArray`, `isBoolean`, `isDate`,
         * `isElement`, `isEmpty`, `isEqual`, `isFinite`, `isFunction`, `isNaN`,
         * `isNull`, `isNumber`, `isObject`, `isPlainObject`, `isRegExp`, `isString`,
         * `isUndefined`, `join`, `lastIndexOf`, `mixin`, `noConflict`, `parseInt`,
         * `pop`, `random`, `reduce`, `reduceRight`, `result`, `shift`, `size`, `some`,
         * `sortedIndex`, `runInContext`, `template`, `unescape`, `uniqueId`, and `value`
         *
         * The wrapper functions `first` and `last` return wrapped values when `n` is
         * passed, otherwise they return unwrapped values.
         *
         * @name _
         * @constructor
         * @alias chain
         * @category Chaining
         * @param {Mixed} value The value to wrap in a `lodash` instance.
         * @returns {Object} Returns a `lodash` instance.
         * @example
         *
         * var wrapped = _([1, 2, 3]);
         *
         * // returns an unwrapped value
         * wrapped.reduce(function(sum, num) {
         *   return sum + num;
         * });
         * // => 6
         *
         * // returns a wrapped value
         * var squares = wrapped.map(function(num) {
         *   return num * num;
         * });
         *
         * _.isArray(squares);
         * // => false
         *
         * _.isArray(squares.value());
         * // => true
         */
        function lodash(value) {
            // don't wrap if already wrapped, even if wrapped by a different `lodash` constructor
            return (value && typeof value == 'object' && !isArray(value) && hasOwnProperty.call(value, '__wrapped__'))
             ? value
             : new lodashWrapper(value);
        }

        /**
         * A fast path for creating `lodash` wrapper objects.
         *
         * @private
         * @param {Mixed} value The value to wrap in a `lodash` instance.
         * @returns {Object} Returns a `lodash` instance.
         */
        function lodashWrapper(value) {
            this.__wrapped__ = value;
        }
        // ensure `new lodashWrapper` is an instance of `lodash`
        lodashWrapper.prototype = lodash.prototype;

        /**
         * An object used to flag environments features.
         *
         * @static
         * @memberOf _
         * @type Object
         */
        var support = lodash.support = {};

        /**
         * Detect if `Function#bind` exists and is inferred to be fast (all but V8).
         *
         * @memberOf _.support
         * @type Boolean
         */
        support.fastBind = nativeBind && !isV8;

        /**
         * By default, the template delimiters used by Lo-Dash are similar to those in
         * embedded Ruby (ERB). Change the following template settings to use alternative
         * delimiters.
         *
         * @static
         * @memberOf _
         * @type Object
         */
        lodash.templateSettings = {

            /**
             * Used to detect `data` property values to be HTML-escaped.
             *
             * @memberOf _.templateSettings
             * @type RegExp
             */
            'escape': /<%-([\s\S]+?)%>/g,

            /**
             * Used to detect code to be evaluated.
             *
             * @memberOf _.templateSettings
             * @type RegExp
             */
            'evaluate': /<%([\s\S]+?)%>/g,

            /**
             * Used to detect `data` property values to inject.
             *
             * @memberOf _.templateSettings
             * @type RegExp
             */
            'interpolate': reInterpolate,

            /**
             * Used to reference the data object in the template text.
             *
             * @memberOf _.templateSettings
             * @type String
             */
            'variable': '',

            /**
             * Used to import variables into the compiled template.
             *
             * @memberOf _.templateSettings
             * @type Object
             */
            'imports': {

                /**
                 * A reference to the `lodash` function.
                 *
                 * @memberOf _.templateSettings.imports
                 * @type Function
                 */
                '_': lodash
            }
        };

        /*--------------------------------------------------------------------------*/

        /**
         * Creates a function that, when called, invokes `func` with the `this` binding
         * of `thisArg` and prepends any `partialArgs` to the arguments passed to the
         * bound function.
         *
         * @private
         * @param {Function|String} func The function to bind or the method name.
         * @param {Mixed} [thisArg] The `this` binding of `func`.
         * @param {Array} partialArgs An array of arguments to be partially applied.
         * @param {Object} [idicator] Used to indicate binding by key or partially
         *  applying arguments from the right.
         * @returns {Function} Returns the new bound function.
         */
        function createBound(func, thisArg, partialArgs, indicator) {
            var isFunc = isFunction(func),
                isPartial = !partialArgs,
                key = thisArg;

            // juggle arguments
            if (isPartial) {
                var rightIndicator = indicator;
                partialArgs = thisArg;
            }
            else if (!isFunc) {
                if (!indicator) {
                    throw new TypeError;
                }
                thisArg = func;
            }

            function bound() {
                // `Function#bind` spec
                // http://es5.github.com/#x15.3.4.5
                var args = arguments,
                    thisBinding = isPartial ? this : thisArg;

                if (!isFunc) {
                    func = thisArg[key];
                }
                if (partialArgs.length) {
                    args = args.length
                      ? (args = nativeSlice.call(args), rightIndicator ? args.concat(partialArgs) : partialArgs.concat(args))
                      : partialArgs;
                }
                if (this instanceof bound) {
                    // ensure `new bound` is an instance of `func`
                    thisBinding = createObject(func.prototype);

                    // mimic the constructor's `return` behavior
                    // http://es5.github.com/#x13.2.2
                    var result = func.apply(thisBinding, args);
                    return isObject(result) ? result : thisBinding;
                }
                return func.apply(thisBinding, args);
            }
            return bound;
        }

        /**
         * Creates a new object with the specified `prototype`.
         *
         * @private
         * @param {Object} prototype The prototype object.
         * @returns {Object} Returns the new object.
         */
        function createObject(prototype) {
            return isObject(prototype) ? nativeCreate(prototype) : {};
        }

        /**
         * Used by `escape` to convert characters to HTML entities.
         *
         * @private
         * @param {String} match The matched character to escape.
         * @returns {String} Returns the escaped character.
         */
        function escapeHtmlChar(match) {
            return htmlEscapes[match];
        }

        /**
         * Gets the appropriate "indexOf" function. If the `_.indexOf` method is
         * customized, this method returns the custom method, otherwise it returns
         * the `basicIndexOf` function.
         *
         * @private
         * @returns {Function} Returns the "indexOf" function.
         */
        function getIndexOf(array, value, fromIndex) {
            var result = (result = lodash.indexOf) === indexOf ? basicIndexOf : result;
            return result;
        }

        /**
         * Creates a function that juggles arguments, allowing argument overloading
         * for `_.flatten` and `_.uniq`, before passing them to the given `func`.
         *
         * @private
         * @param {Function} func The function to wrap.
         * @returns {Function} Returns the new function.
         */
        function overloadWrapper(func) {
            return function (array, flag, callback, thisArg) {
                // juggle arguments
                if (typeof flag != 'boolean' && flag != null) {
                    thisArg = callback;
                    callback = !(thisArg && thisArg[flag] === array) ? flag : undefined;
                    flag = false;
                }
                if (callback != null) {
                    callback = lodash.createCallback(callback, thisArg);
                }
                return func(array, flag, callback, thisArg);
            };
        }

        /**
         * A fallback implementation of `isPlainObject` which checks if a given `value`
         * is an object created by the `Object` constructor, assuming objects created
         * by the `Object` constructor have no inherited enumerable properties and that
         * there are no `Object.prototype` extensions.
         *
         * @private
         * @param {Mixed} value The value to check.
         * @returns {Boolean} Returns `true`, if `value` is a plain object, else `false`.
         */
        function shimIsPlainObject(value) {
            var ctor,
                result;

            // avoid non Object objects, `arguments` objects, and DOM elements
            if (!(value && toString.call(value) == objectClass) ||
                (ctor = value.constructor, isFunction(ctor) && !(ctor instanceof ctor))) {
                return false;
            }
            // In most environments an object's own properties are iterated before
            // its inherited properties. If the last iterated property is an object's
            // own property then there are no inherited enumerable properties.
            forIn(value, function (value, key) {
                result = key;
            });
            return result === undefined || hasOwnProperty.call(value, result);
        }

        /**
         * Used by `unescape` to convert HTML entities to characters.
         *
         * @private
         * @param {String} match The matched character to unescape.
         * @returns {String} Returns the unescaped character.
         */
        function unescapeHtmlChar(match) {
            return htmlUnescapes[match];
        }

        /*--------------------------------------------------------------------------*/

        /**
         * Checks if `value` is an `arguments` object.
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {Mixed} value The value to check.
         * @returns {Boolean} Returns `true`, if the `value` is an `arguments` object, else `false`.
         * @example
         *
         * (function() { return _.isArguments(arguments); })(1, 2, 3);
         * // => true
         *
         * _.isArguments([1, 2, 3]);
         * // => false
         */
        function isArguments(value) {
            return toString.call(value) == argsClass;
        }

        /**
         * Checks if `value` is an array.
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {Mixed} value The value to check.
         * @returns {Boolean} Returns `true`, if the `value` is an array, else `false`.
         * @example
         *
         * (function() { return _.isArray(arguments); })();
         * // => false
         *
         * _.isArray([1, 2, 3]);
         * // => true
         */
        var isArray = nativeIsArray;

        /**
         * A fallback implementation of `Object.keys` which produces an array of the
         * given object's own enumerable property names.
         *
         * @private
         * @type Function
         * @param {Object} object The object to inspect.
         * @returns {Array} Returns a new array of property names.
         */
        var shimKeys = function (object) {
            var index, iterable = object, result = [];
            if (!iterable) return result;
            if (!(objectTypes[typeof object])) return result;
            for (index in iterable) {
                if (hasOwnProperty.call(iterable, index)) {
                    result.push(index);
                }
            }
            return result
        };

        /**
         * Creates an array composed of the own enumerable property names of `object`.
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {Object} object The object to inspect.
         * @returns {Array} Returns a new array of property names.
         * @example
         *
         * _.keys({ 'one': 1, 'two': 2, 'three': 3 });
         * // => ['one', 'two', 'three'] (order is not guaranteed)
         */
        var keys = !nativeKeys ? shimKeys : function (object) {
            if (!isObject(object)) {
                return [];
            }
            return nativeKeys(object);
        };

        /**
         * Used to convert characters to HTML entities:
         *
         * Though the `>` character is escaped for symmetry, characters like `>` and `/`
         * don't require escaping in HTML and have no special meaning unless they're part
         * of a tag or an unquoted attribute value.
         * http://mathiasbynens.be/notes/ambiguous-ampersands (under "semi-related fun fact")
         */
        var htmlEscapes = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        };

        /** Used to convert HTML entities to characters */
        var htmlUnescapes = invert(htmlEscapes);

        /*--------------------------------------------------------------------------*/

        /**
         * Assigns own enumerable properties of source object(s) to the destination
         * object. Subsequent sources will overwrite property assignments of previous
         * sources. If a `callback` function is passed, it will be executed to produce
         * the assigned values. The `callback` is bound to `thisArg` and invoked with
         * two arguments; (objectValue, sourceValue).
         *
         * @static
         * @memberOf _
         * @type Function
         * @alias extend
         * @category Objects
         * @param {Object} object The destination object.
         * @param {Object} [source1, source2, ...] The source objects.
         * @param {Function} [callback] The function to customize assigning values.
         * @param {Mixed} [thisArg] The `this` binding of `callback`.
         * @returns {Object} Returns the destination object.
         * @example
         *
         * _.assign({ 'name': 'moe' }, { 'age': 40 });
         * // => { 'name': 'moe', 'age': 40 }
         *
         * var defaults = _.partialRight(_.assign, function(a, b) {
         *   return typeof a == 'undefined' ? b : a;
         * });
         *
         * var food = { 'name': 'apple' };
         * defaults(food, { 'name': 'banana', 'type': 'fruit' });
         * // => { 'name': 'apple', 'type': 'fruit' }
         */
        var assign = function (object, source, guard) {
            var index, iterable = object, result = iterable;
            if (!iterable) return result;
            var args = arguments,
                argsIndex = 0,
                argsLength = typeof guard == 'number' ? 2 : args.length;
            if (argsLength > 3 && typeof args[argsLength - 2] == 'function') {
                var callback = lodash.createCallback(args[--argsLength - 1], args[argsLength--], 2);
            } else if (argsLength > 2 && typeof args[argsLength - 1] == 'function') {
                callback = args[--argsLength];
            }
            while (++argsIndex < argsLength) {
                iterable = args[argsIndex];
                if (iterable && objectTypes[typeof iterable]) {
                    var ownIndex = -1,
                        ownProps = objectTypes[typeof iterable] && keys(iterable),
                        length = ownProps ? ownProps.length : 0;

                    while (++ownIndex < length) {
                        index = ownProps[ownIndex];
                        result[index] = callback ? callback(result[index], iterable[index]) : iterable[index];
                    }
                }
            }
            return result
        };

        /**
         * Creates a clone of `value`. If `deep` is `true`, nested objects will also
         * be cloned, otherwise they will be assigned by reference. If a `callback`
         * function is passed, it will be executed to produce the cloned values. If
         * `callback` returns `undefined`, cloning will be handled by the method instead.
         * The `callback` is bound to `thisArg` and invoked with one argument; (value).
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {Mixed} value The value to clone.
         * @param {Boolean} [deep=false] A flag to indicate a deep clone.
         * @param {Function} [callback] The function to customize cloning values.
         * @param {Mixed} [thisArg] The `this` binding of `callback`.
         * @param- {Array} [stackA=[]] Tracks traversed source objects.
         * @param- {Array} [stackB=[]] Associates clones with source counterparts.
         * @returns {Mixed} Returns the cloned `value`.
         * @example
         *
         * var stooges = [
         *   { 'name': 'moe', 'age': 40 },
         *   { 'name': 'larry', 'age': 50 }
         * ];
         *
         * var shallow = _.clone(stooges);
         * shallow[0] === stooges[0];
         * // => true
         *
         * var deep = _.clone(stooges, true);
         * deep[0] === stooges[0];
         * // => false
         *
         * _.mixin({
         *   'clone': _.partialRight(_.clone, function(value) {
         *     return _.isElement(value) ? value.cloneNode(false) : undefined;
         *   })
         * });
         *
         * var clone = _.clone(document.body);
         * clone.childNodes.length;
         * // => 0
         */
        function clone(value, deep, callback, thisArg, stackA, stackB) {
            var result = value;

            // allows working with "Collections" methods without using their `callback`
            // argument, `index|key`, for this method's `callback`
            if (typeof deep != 'boolean' && deep != null) {
                thisArg = callback;
                callback = deep;
                deep = false;
            }
            if (typeof callback == 'function') {
                callback = (typeof thisArg == 'undefined')
                  ? callback
                  : lodash.createCallback(callback, thisArg, 1);

                result = callback(result);
                if (typeof result != 'undefined') {
                    return result;
                }
                result = value;
            }
            // inspect [[Class]]
            var isObj = isObject(result);
            if (isObj) {
                var className = toString.call(result);
                if (!cloneableClasses[className]) {
                    return result;
                }
                var isArr = isArray(result);
            }
            // shallow clone
            if (!isObj || !deep) {
                return isObj
                  ? (isArr ? slice(result) : assign({}, result))
                  : result;
            }
            var ctor = ctorByClass[className];
            switch (className) {
                case boolClass:
                case dateClass:
                    return new ctor(+result);

                case numberClass:
                case stringClass:
                    return new ctor(result);

                case regexpClass:
                    return ctor(result.source, reFlags.exec(result));
            }
            // check for circular references and return corresponding clone
            var initedStack = !stackA;
            stackA || (stackA = getArray());
            stackB || (stackB = getArray());

            var length = stackA.length;
            while (length--) {
                if (stackA[length] == value) {
                    return stackB[length];
                }
            }
            // init cloned object
            result = isArr ? ctor(result.length) : {};

            // add array properties assigned by `RegExp#exec`
            if (isArr) {
                if (hasOwnProperty.call(value, 'index')) {
                    result.index = value.index;
                }
                if (hasOwnProperty.call(value, 'input')) {
                    result.input = value.input;
                }
            }
            // add the source value to the stack of traversed objects
            // and associate it with its clone
            stackA.push(value);
            stackB.push(result);

            // recursively populate clone (susceptible to call stack limits)
            (isArr ? forEach : forOwn)(value, function (objValue, key) {
                result[key] = clone(objValue, deep, callback, undefined, stackA, stackB);
            });

            if (initedStack) {
                releaseArray(stackA);
                releaseArray(stackB);
            }
            return result;
        }

        /**
         * Creates a deep clone of `value`. If a `callback` function is passed,
         * it will be executed to produce the cloned values. If `callback` returns
         * `undefined`, cloning will be handled by the method instead. The `callback`
         * is bound to `thisArg` and invoked with one argument; (value).
         *
         * Note: This method is loosely based on the structured clone algorithm. Functions
         * and DOM nodes are **not** cloned. The enumerable properties of `arguments` objects and
         * objects created by constructors other than `Object` are cloned to plain `Object` objects.
         * See http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm.
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {Mixed} value The value to deep clone.
         * @param {Function} [callback] The function to customize cloning values.
         * @param {Mixed} [thisArg] The `this` binding of `callback`.
         * @returns {Mixed} Returns the deep cloned `value`.
         * @example
         *
         * var stooges = [
         *   { 'name': 'moe', 'age': 40 },
         *   { 'name': 'larry', 'age': 50 }
         * ];
         *
         * var deep = _.cloneDeep(stooges);
         * deep[0] === stooges[0];
         * // => false
         *
         * var view = {
         *   'label': 'docs',
         *   'node': element
         * };
         *
         * var clone = _.cloneDeep(view, function(value) {
         *   return _.isElement(value) ? value.cloneNode(true) : undefined;
         * });
         *
         * clone.node == view.node;
         * // => false
         */
        function cloneDeep(value, callback, thisArg) {
            return clone(value, true, callback, thisArg);
        }

        /**
         * Assigns own enumerable properties of source object(s) to the destination
         * object for all destination properties that resolve to `undefined`. Once a
         * property is set, additional defaults of the same property will be ignored.
         *
         * @static
         * @memberOf _
         * @type Function
         * @category Objects
         * @param {Object} object The destination object.
         * @param {Object} [source1, source2, ...] The source objects.
         * @param- {Object} [guard] Allows working with `_.reduce` without using its
         *  callback's `key` and `object` arguments as sources.
         * @returns {Object} Returns the destination object.
         * @example
         *
         * var food = { 'name': 'apple' };
         * _.defaults(food, { 'name': 'banana', 'type': 'fruit' });
         * // => { 'name': 'apple', 'type': 'fruit' }
         */
        var defaults = function (object, source, guard) {
            var index, iterable = object, result = iterable;
            if (!iterable) return result;
            var args = arguments,
                argsIndex = 0,
                argsLength = typeof guard == 'number' ? 2 : args.length;
            while (++argsIndex < argsLength) {
                iterable = args[argsIndex];
                if (iterable && objectTypes[typeof iterable]) {
                    var ownIndex = -1,
                        ownProps = objectTypes[typeof iterable] && keys(iterable),
                        length = ownProps ? ownProps.length : 0;

                    while (++ownIndex < length) {
                        index = ownProps[ownIndex];
                        if (typeof result[index] == 'undefined') result[index] = iterable[index];
                    }
                }
            }
            return result
        };

        /**
         * This method is similar to `_.find`, except that it returns the key of the
         * element that passes the callback check, instead of the element itself.
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {Object} object The object to search.
         * @param {Function|Object|String} [callback=identity] The function called per
         *  iteration. If a property name or object is passed, it will be used to create
         *  a "_.pluck" or "_.where" style callback, respectively.
         * @param {Mixed} [thisArg] The `this` binding of `callback`.
         * @returns {Mixed} Returns the key of the found element, else `undefined`.
         * @example
         *
         * _.findKey({ 'a': 1, 'b': 2, 'c': 3, 'd': 4 }, function(num) {
         *   return num % 2 == 0;
         * });
         * // => 'b'
         */
        function findKey(object, callback, thisArg) {
            var result;
            callback = lodash.createCallback(callback, thisArg);
            forOwn(object, function (value, key, object) {
                if (callback(value, key, object)) {
                    result = key;
                    return false;
                }
            });
            return result;
        }

        /**
         * Iterates over `object`'s own and inherited enumerable properties, executing
         * the `callback` for each property. The `callback` is bound to `thisArg` and
         * invoked with three arguments; (value, key, object). Callbacks may exit iteration
         * early by explicitly returning `false`.
         *
         * @static
         * @memberOf _
         * @type Function
         * @category Objects
         * @param {Object} object The object to iterate over.
         * @param {Function} [callback=identity] The function called per iteration.
         * @param {Mixed} [thisArg] The `this` binding of `callback`.
         * @returns {Object} Returns `object`.
         * @example
         *
         * function Dog(name) {
         *   this.name = name;
         * }
         *
         * Dog.prototype.bark = function() {
         *   alert('Woof, woof!');
         * };
         *
         * _.forIn(new Dog('Dagny'), function(value, key) {
         *   alert(key);
         * });
         * // => alerts 'name' and 'bark' (order is not guaranteed)
         */
        var forIn = function (collection, callback, thisArg) {
            var index, iterable = collection, result = iterable;
            if (!iterable) return result;
            if (!objectTypes[typeof iterable]) return result;
            callback = callback && typeof thisArg == 'undefined' ? callback : lodash.createCallback(callback, thisArg);
            for (index in iterable) {
                if (callback(iterable[index], index, collection) === false) return result;
            }
            return result
        };

        /**
         * Iterates over an object's own enumerable properties, executing the `callback`
         * for each property. The `callback` is bound to `thisArg` and invoked with three
         * arguments; (value, key, object). Callbacks may exit iteration early by explicitly
         * returning `false`.
         *
         * @static
         * @memberOf _
         * @type Function
         * @category Objects
         * @param {Object} object The object to iterate over.
         * @param {Function} [callback=identity] The function called per iteration.
         * @param {Mixed} [thisArg] The `this` binding of `callback`.
         * @returns {Object} Returns `object`.
         * @example
         *
         * _.forOwn({ '0': 'zero', '1': 'one', 'length': 2 }, function(num, key) {
         *   alert(key);
         * });
         * // => alerts '0', '1', and 'length' (order is not guaranteed)
         */
        var forOwn = function (collection, callback, thisArg) {
            var index, iterable = collection, result = iterable;
            if (!iterable) return result;
            if (!objectTypes[typeof iterable]) return result;
            callback = callback && typeof thisArg == 'undefined' ? callback : lodash.createCallback(callback, thisArg);
            var ownIndex = -1,
                ownProps = objectTypes[typeof iterable] && keys(iterable),
                length = ownProps ? ownProps.length : 0;

            while (++ownIndex < length) {
                index = ownProps[ownIndex];
                if (callback(iterable[index], index, collection) === false) return result;
            }
            return result
        };

        /**
         * Creates a sorted array of all enumerable properties, own and inherited,
         * of `object` that have function values.
         *
         * @static
         * @memberOf _
         * @alias methods
         * @category Objects
         * @param {Object} object The object to inspect.
         * @returns {Array} Returns a new array of property names that have function values.
         * @example
         *
         * _.functions(_);
         * // => ['all', 'any', 'bind', 'bindAll', 'clone', 'compact', 'compose', ...]
         */
        function functions(object) {
            var result = [];
            forIn(object, function (value, key) {
                if (isFunction(value)) {
                    result.push(key);
                }
            });
            return result.sort();
        }

        /**
         * Checks if the specified object `property` exists and is a direct property,
         * instead of an inherited property.
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {Object} object The object to check.
         * @param {String} property The property to check for.
         * @returns {Boolean} Returns `true` if key is a direct property, else `false`.
         * @example
         *
         * _.has({ 'a': 1, 'b': 2, 'c': 3 }, 'b');
         * // => true
         */
        function has(object, property) {
            return object ? hasOwnProperty.call(object, property) : false;
        }

        /**
         * Creates an object composed of the inverted keys and values of the given `object`.
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {Object} object The object to invert.
         * @returns {Object} Returns the created inverted object.
         * @example
         *
         *  _.invert({ 'first': 'moe', 'second': 'larry' });
         * // => { 'moe': 'first', 'larry': 'second' }
         */
        function invert(object) {
            var index = -1,
                props = keys(object),
                length = props.length,
                result = {};

            while (++index < length) {
                var key = props[index];
                result[object[key]] = key;
            }
            return result;
        }

        /**
         * Checks if `value` is a boolean value.
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {Mixed} value The value to check.
         * @returns {Boolean} Returns `true`, if the `value` is a boolean value, else `false`.
         * @example
         *
         * _.isBoolean(null);
         * // => false
         */
        function isBoolean(value) {
            return value === true || value === false || toString.call(value) == boolClass;
        }

        /**
         * Checks if `value` is a date.
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {Mixed} value The value to check.
         * @returns {Boolean} Returns `true`, if the `value` is a date, else `false`.
         * @example
         *
         * _.isDate(new Date);
         * // => true
         */
        function isDate(value) {
            return value ? (typeof value == 'object' && toString.call(value) == dateClass) : false;
        }

        /**
         * Checks if `value` is a DOM element.
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {Mixed} value The value to check.
         * @returns {Boolean} Returns `true`, if the `value` is a DOM element, else `false`.
         * @example
         *
         * _.isElement(document.body);
         * // => true
         */
        function isElement(value) {
            return value ? value.nodeType === 1 : false;
        }

        /**
         * Checks if `value` is empty. Arrays, strings, or `arguments` objects with a
         * length of `0` and objects with no own enumerable properties are considered
         * "empty".
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {Array|Object|String} value The value to inspect.
         * @returns {Boolean} Returns `true`, if the `value` is empty, else `false`.
         * @example
         *
         * _.isEmpty([1, 2, 3]);
         * // => false
         *
         * _.isEmpty({});
         * // => true
         *
         * _.isEmpty('');
         * // => true
         */
        function isEmpty(value) {
            var result = true;
            if (!value) {
                return result;
            }
            var className = toString.call(value),
                length = value.length;

            if ((className == arrayClass || className == stringClass || className == argsClass) ||
                (className == objectClass && typeof length == 'number' && isFunction(value.splice))) {
                return !length;
            }
            forOwn(value, function () {
                return (result = false);
            });
            return result;
        }

        /**
         * Performs a deep comparison between two values to determine if they are
         * equivalent to each other. If `callback` is passed, it will be executed to
         * compare values. If `callback` returns `undefined`, comparisons will be handled
         * by the method instead. The `callback` is bound to `thisArg` and invoked with
         * two arguments; (a, b).
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {Mixed} a The value to compare.
         * @param {Mixed} b The other value to compare.
         * @param {Function} [callback] The function to customize comparing values.
         * @param {Mixed} [thisArg] The `this` binding of `callback`.
         * @param- {Array} [stackA=[]] Tracks traversed `a` objects.
         * @param- {Array} [stackB=[]] Tracks traversed `b` objects.
         * @returns {Boolean} Returns `true`, if the values are equivalent, else `false`.
         * @example
         *
         * var moe = { 'name': 'moe', 'age': 40 };
         * var copy = { 'name': 'moe', 'age': 40 };
         *
         * moe == copy;
         * // => false
         *
         * _.isEqual(moe, copy);
         * // => true
         *
         * var words = ['hello', 'goodbye'];
         * var otherWords = ['hi', 'goodbye'];
         *
         * _.isEqual(words, otherWords, function(a, b) {
         *   var reGreet = /^(?:hello|hi)$/i,
         *       aGreet = _.isString(a) && reGreet.test(a),
         *       bGreet = _.isString(b) && reGreet.test(b);
         *
         *   return (aGreet || bGreet) ? (aGreet == bGreet) : undefined;
         * });
         * // => true
         */
        function isEqual(a, b, callback, thisArg, stackA, stackB) {
            // used to indicate that when comparing objects, `a` has at least the properties of `b`
            var whereIndicator = callback === indicatorObject;
            if (typeof callback == 'function' && !whereIndicator) {
                callback = lodash.createCallback(callback, thisArg, 2);
                var result = callback(a, b);
                if (typeof result != 'undefined') {
                    return !!result;
                }
            }
            // exit early for identical values
            if (a === b) {
                // treat `+0` vs. `-0` as not equal
                return a !== 0 || (1 / a == 1 / b);
            }
            var type = typeof a,
                otherType = typeof b;

            // exit early for unlike primitive values
            if (a === a &&
                (!a || (type != 'function' && type != 'object')) &&
                (!b || (otherType != 'function' && otherType != 'object'))) {
                return false;
            }
            // exit early for `null` and `undefined`, avoiding ES3's Function#call behavior
            // http://es5.github.com/#x15.3.4.4
            if (a == null || b == null) {
                return a === b;
            }
            // compare [[Class]] names
            var className = toString.call(a),
                otherClass = toString.call(b);

            if (className == argsClass) {
                className = objectClass;
            }
            if (otherClass == argsClass) {
                otherClass = objectClass;
            }
            if (className != otherClass) {
                return false;
            }
            switch (className) {
                case boolClass:
                case dateClass:
                    // coerce dates and booleans to numbers, dates to milliseconds and booleans
                    // to `1` or `0`, treating invalid dates coerced to `NaN` as not equal
                    return +a == +b;

                case numberClass:
                    // treat `NaN` vs. `NaN` as equal
                    return (a != +a)
                      ? b != +b
                      // but treat `+0` vs. `-0` as not equal
                      : (a == 0 ? (1 / a == 1 / b) : a == +b);

                case regexpClass:
                case stringClass:
                    // coerce regexes to strings (http://es5.github.com/#x15.10.6.4)
                    // treat string primitives and their corresponding object instances as equal
                    return a == String(b);
            }
            var isArr = className == arrayClass;
            if (!isArr) {
                // unwrap any `lodash` wrapped values
                if (hasOwnProperty.call(a, '__wrapped__ ') || hasOwnProperty.call(b, '__wrapped__')) {
                    return isEqual(a.__wrapped__ || a, b.__wrapped__ || b, callback, thisArg, stackA, stackB);
                }
                // exit for functions and DOM nodes
                if (className != objectClass) {
                    return false;
                }
                // in older versions of Opera, `arguments` objects have `Array` constructors
                var ctorA = a.constructor,
                    ctorB = b.constructor;

                // non `Object` object instances with different constructors are not equal
                if (ctorA != ctorB && !(
                      isFunction(ctorA) && ctorA instanceof ctorA &&
                      isFunction(ctorB) && ctorB instanceof ctorB
                    )) {
                    return false;
                }
            }
            // assume cyclic structures are equal
            // the algorithm for detecting cyclic structures is adapted from ES 5.1
            // section 15.12.3, abstract operation `JO` (http://es5.github.com/#x15.12.3)
            var initedStack = !stackA;
            stackA || (stackA = getArray());
            stackB || (stackB = getArray());

            var length = stackA.length;
            while (length--) {
                if (stackA[length] == a) {
                    return stackB[length] == b;
                }
            }
            var size = 0;
            result = true;

            // add `a` and `b` to the stack of traversed objects
            stackA.push(a);
            stackB.push(b);

            // recursively compare objects and arrays (susceptible to call stack limits)
            if (isArr) {
                length = a.length;
                size = b.length;

                // compare lengths to determine if a deep comparison is necessary
                result = size == a.length;
                if (!result && !whereIndicator) {
                    return result;
                }
                // deep compare the contents, ignoring non-numeric properties
                while (size--) {
                    var index = length,
                        value = b[size];

                    if (whereIndicator) {
                        while (index--) {
                            if ((result = isEqual(a[index], value, callback, thisArg, stackA, stackB))) {
                                break;
                            }
                        }
                    } else if (!(result = isEqual(a[size], value, callback, thisArg, stackA, stackB))) {
                        break;
                    }
                }
                return result;
            }
            // deep compare objects using `forIn`, instead of `forOwn`, to avoid `Object.keys`
            // which, in this case, is more costly
            forIn(b, function (value, key, b) {
                if (hasOwnProperty.call(b, key)) {
                    // count the number of properties.
                    size++;
                    // deep compare each property value.
                    return (result = hasOwnProperty.call(a, key) && isEqual(a[key], value, callback, thisArg, stackA, stackB));
                }
            });

            if (result && !whereIndicator) {
                // ensure both objects have the same number of properties
                forIn(a, function (value, key, a) {
                    if (hasOwnProperty.call(a, key)) {
                        // `size` will be `-1` if `a` has more properties than `b`
                        return (result = --size > -1);
                    }
                });
            }
            if (initedStack) {
                releaseArray(stackA);
                releaseArray(stackB);
            }
            return result;
        }

        /**
         * Checks if `value` is, or can be coerced to, a finite number.
         *
         * Note: This is not the same as native `isFinite`, which will return true for
         * booleans and empty strings. See http://es5.github.com/#x15.1.2.5.
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {Mixed} value The value to check.
         * @returns {Boolean} Returns `true`, if the `value` is finite, else `false`.
         * @example
         *
         * _.isFinite(-101);
         * // => true
         *
         * _.isFinite('10');
         * // => true
         *
         * _.isFinite(true);
         * // => false
         *
         * _.isFinite('');
         * // => false
         *
         * _.isFinite(Infinity);
         * // => false
         */
        function isFinite(value) {
            return nativeIsFinite(value) && !nativeIsNaN(parseFloat(value));
        }

        /**
         * Checks if `value` is a function.
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {Mixed} value The value to check.
         * @returns {Boolean} Returns `true`, if the `value` is a function, else `false`.
         * @example
         *
         * _.isFunction(_);
         * // => true
         */
        function isFunction(value) {
            return typeof value == 'function';
        }

        /**
         * Checks if `value` is the language type of Object.
         * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {Mixed} value The value to check.
         * @returns {Boolean} Returns `true`, if the `value` is an object, else `false`.
         * @example
         *
         * _.isObject({});
         * // => true
         *
         * _.isObject([1, 2, 3]);
         * // => true
         *
         * _.isObject(1);
         * // => false
         */
        function isObject(value) {
            // check if the value is the ECMAScript language type of Object
            // http://es5.github.com/#x8
            // and avoid a V8 bug
            // http://code.google.com/p/v8/issues/detail?id=2291
            return !!(value && objectTypes[typeof value]);
        }

        /**
         * Checks if `value` is `NaN`.
         *
         * Note: This is not the same as native `isNaN`, which will return `true` for
         * `undefined` and other values. See http://es5.github.com/#x15.1.2.4.
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {Mixed} value The value to check.
         * @returns {Boolean} Returns `true`, if the `value` is `NaN`, else `false`.
         * @example
         *
         * _.isNaN(NaN);
         * // => true
         *
         * _.isNaN(new Number(NaN));
         * // => true
         *
         * isNaN(undefined);
         * // => true
         *
         * _.isNaN(undefined);
         * // => false
         */
        function isNaN(value) {
            // `NaN` as a primitive is the only value that is not equal to itself
            // (perform the [[Class]] check first to avoid errors with some host objects in IE)
            return isNumber(value) && value != +value
        }

        /**
         * Checks if `value` is `null`.
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {Mixed} value The value to check.
         * @returns {Boolean} Returns `true`, if the `value` is `null`, else `false`.
         * @example
         *
         * _.isNull(null);
         * // => true
         *
         * _.isNull(undefined);
         * // => false
         */
        function isNull(value) {
            return value === null;
        }

        /**
         * Checks if `value` is a number.
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {Mixed} value The value to check.
         * @returns {Boolean} Returns `true`, if the `value` is a number, else `false`.
         * @example
         *
         * _.isNumber(8.4 * 5);
         * // => true
         */
        function isNumber(value) {
            return typeof value == 'number' || toString.call(value) == numberClass;
        }

        /**
         * Checks if a given `value` is an object created by the `Object` constructor.
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {Mixed} value The value to check.
         * @returns {Boolean} Returns `true`, if `value` is a plain object, else `false`.
         * @example
         *
         * function Stooge(name, age) {
         *   this.name = name;
         *   this.age = age;
         * }
         *
         * _.isPlainObject(new Stooge('moe', 40));
         * // => false
         *
         * _.isPlainObject([1, 2, 3]);
         * // => false
         *
         * _.isPlainObject({ 'name': 'moe', 'age': 40 });
         * // => true
         */
        var isPlainObject = function (value) {
            if (!(value && toString.call(value) == objectClass)) {
                return false;
            }
            var valueOf = value.valueOf,
                objProto = typeof valueOf == 'function' && (objProto = getPrototypeOf(valueOf)) && getPrototypeOf(objProto);

            return objProto
              ? (value == objProto || getPrototypeOf(value) == objProto)
              : shimIsPlainObject(value);
        };

        /**
         * Checks if `value` is a regular expression.
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {Mixed} value The value to check.
         * @returns {Boolean} Returns `true`, if the `value` is a regular expression, else `false`.
         * @example
         *
         * _.isRegExp(/moe/);
         * // => true
         */
        function isRegExp(value) {
            return value ? (typeof value == 'object' && toString.call(value) == regexpClass) : false;
        }

        /**
         * Checks if `value` is a string.
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {Mixed} value The value to check.
         * @returns {Boolean} Returns `true`, if the `value` is a string, else `false`.
         * @example
         *
         * _.isString('moe');
         * // => true
         */
        function isString(value) {
            return typeof value == 'string' || toString.call(value) == stringClass;
        }

        /**
         * Checks if `value` is `undefined`.
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {Mixed} value The value to check.
         * @returns {Boolean} Returns `true`, if the `value` is `undefined`, else `false`.
         * @example
         *
         * _.isUndefined(void 0);
         * // => true
         */
        function isUndefined(value) {
            return typeof value == 'undefined';
        }

        /**
         * Recursively merges own enumerable properties of the source object(s), that
         * don't resolve to `undefined`, into the destination object. Subsequent sources
         * will overwrite property assignments of previous sources. If a `callback` function
         * is passed, it will be executed to produce the merged values of the destination
         * and source properties. If `callback` returns `undefined`, merging will be
         * handled by the method instead. The `callback` is bound to `thisArg` and
         * invoked with two arguments; (objectValue, sourceValue).
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {Object} object The destination object.
         * @param {Object} [source1, source2, ...] The source objects.
         * @param {Function} [callback] The function to customize merging properties.
         * @param {Mixed} [thisArg] The `this` binding of `callback`.
         * @param- {Object} [deepIndicator] Indicates that `stackA` and `stackB` are
         *  arrays of traversed objects, instead of source objects.
         * @param- {Array} [stackA=[]] Tracks traversed source objects.
         * @param- {Array} [stackB=[]] Associates values with source counterparts.
         * @returns {Object} Returns the destination object.
         * @example
         *
         * var names = {
         *   'stooges': [
         *     { 'name': 'moe' },
         *     { 'name': 'larry' }
         *   ]
         * };
         *
         * var ages = {
         *   'stooges': [
         *     { 'age': 40 },
         *     { 'age': 50 }
         *   ]
         * };
         *
         * _.merge(names, ages);
         * // => { 'stooges': [{ 'name': 'moe', 'age': 40 }, { 'name': 'larry', 'age': 50 }] }
         *
         * var food = {
         *   'fruits': ['apple'],
         *   'vegetables': ['beet']
         * };
         *
         * var otherFood = {
         *   'fruits': ['banana'],
         *   'vegetables': ['carrot']
         * };
         *
         * _.merge(food, otherFood, function(a, b) {
         *   return _.isArray(a) ? a.concat(b) : undefined;
         * });
         * // => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot] }
         */
        function merge(object, source, deepIndicator) {
            var args = arguments,
                index = 0,
                length = 2;

            if (!isObject(object)) {
                return object;
            }
            if (deepIndicator === indicatorObject) {
                var callback = args[3],
                    stackA = args[4],
                    stackB = args[5];
            } else {
                var initedStack = true;
                stackA = getArray();
                stackB = getArray();

                // allows working with `_.reduce` and `_.reduceRight` without
                // using their `callback` arguments, `index|key` and `collection`
                if (typeof deepIndicator != 'number') {
                    length = args.length;
                }
                if (length > 3 && typeof args[length - 2] == 'function') {
                    callback = lodash.createCallback(args[--length - 1], args[length--], 2);
                } else if (length > 2 && typeof args[length - 1] == 'function') {
                    callback = args[--length];
                }
            }
            while (++index < length) {
                (isArray(args[index]) ? forEach : forOwn)(args[index], function (source, key) {
                    var found,
                        isArr,
                        result = source,
                        value = object[key];

                    if (source && ((isArr = isArray(source)) || isPlainObject(source))) {
                        // avoid merging previously merged cyclic sources
                        var stackLength = stackA.length;
                        while (stackLength--) {
                            if ((found = stackA[stackLength] == source)) {
                                value = stackB[stackLength];
                                break;
                            }
                        }
                        if (!found) {
                            var isShallow;
                            if (callback) {
                                result = callback(value, source);
                                if ((isShallow = typeof result != 'undefined')) {
                                    value = result;
                                }
                            }
                            if (!isShallow) {
                                value = isArr
                                  ? (isArray(value) ? value : [])
                                  : (isPlainObject(value) ? value : {});
                            }
                            // add `source` and associated `value` to the stack of traversed objects
                            stackA.push(source);
                            stackB.push(value);

                            // recursively merge objects and arrays (susceptible to call stack limits)
                            if (!isShallow) {
                                value = merge(value, source, indicatorObject, callback, stackA, stackB);
                            }
                        }
                    }
                    else {
                        if (callback) {
                            result = callback(value, source);
                            if (typeof result == 'undefined') {
                                result = source;
                            }
                        }
                        if (typeof result != 'undefined') {
                            value = result;
                        }
                    }
                    object[key] = value;
                });
            }

            if (initedStack) {
                releaseArray(stackA);
                releaseArray(stackB);
            }
            return object;
        }

        /**
         * Creates a shallow clone of `object` excluding the specified properties.
         * Property names may be specified as individual arguments or as arrays of
         * property names. If a `callback` function is passed, it will be executed
         * for each property in the `object`, omitting the properties `callback`
         * returns truthy for. The `callback` is bound to `thisArg` and invoked
         * with three arguments; (value, key, object).
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {Object} object The source object.
         * @param {Function|String} callback|[prop1, prop2, ...] The properties to omit
         *  or the function called per iteration.
         * @param {Mixed} [thisArg] The `this` binding of `callback`.
         * @returns {Object} Returns an object without the omitted properties.
         * @example
         *
         * _.omit({ 'name': 'moe', 'age': 40 }, 'age');
         * // => { 'name': 'moe' }
         *
         * _.omit({ 'name': 'moe', 'age': 40 }, function(value) {
         *   return typeof value == 'number';
         * });
         * // => { 'name': 'moe' }
         */
        function omit(object, callback, thisArg) {
            var indexOf = getIndexOf(),
                isFunc = typeof callback == 'function',
                result = {};

            if (isFunc) {
                callback = lodash.createCallback(callback, thisArg);
            } else {
                var props = concat.apply(arrayRef, nativeSlice.call(arguments, 1));
            }
            forIn(object, function (value, key, object) {
                if (isFunc
                      ? !callback(value, key, object)
                      : indexOf(props, key) < 0
                    ) {
                    result[key] = value;
                }
            });
            return result;
        }

        /**
         * Creates a two dimensional array of the given object's key-value pairs,
         * i.e. `[[key1, value1], [key2, value2]]`.
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {Object} object The object to inspect.
         * @returns {Array} Returns new array of key-value pairs.
         * @example
         *
         * _.pairs({ 'moe': 30, 'larry': 40 });
         * // => [['moe', 30], ['larry', 40]] (order is not guaranteed)
         */
        function pairs(object) {
            var index = -1,
                props = keys(object),
                length = props.length,
                result = Array(length);

            while (++index < length) {
                var key = props[index];
                result[index] = [key, object[key]];
            }
            return result;
        }

        /**
         * Creates a shallow clone of `object` composed of the specified properties.
         * Property names may be specified as individual arguments or as arrays of property
         * names. If `callback` is passed, it will be executed for each property in the
         * `object`, picking the properties `callback` returns truthy for. The `callback`
         * is bound to `thisArg` and invoked with three arguments; (value, key, object).
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {Object} object The source object.
         * @param {Array|Function|String} callback|[prop1, prop2, ...] The function called
         *  per iteration or properties to pick, either as individual arguments or arrays.
         * @param {Mixed} [thisArg] The `this` binding of `callback`.
         * @returns {Object} Returns an object composed of the picked properties.
         * @example
         *
         * _.pick({ 'name': 'moe', '_userid': 'moe1' }, 'name');
         * // => { 'name': 'moe' }
         *
         * _.pick({ 'name': 'moe', '_userid': 'moe1' }, function(value, key) {
         *   return key.charAt(0) != '_';
         * });
         * // => { 'name': 'moe' }
         */
        function pick(object, callback, thisArg) {
            var result = {};
            if (typeof callback != 'function') {
                var index = -1,
                    props = concat.apply(arrayRef, nativeSlice.call(arguments, 1)),
                    length = isObject(object) ? props.length : 0;

                while (++index < length) {
                    var key = props[index];
                    if (key in object) {
                        result[key] = object[key];
                    }
                }
            } else {
                callback = lodash.createCallback(callback, thisArg);
                forIn(object, function (value, key, object) {
                    if (callback(value, key, object)) {
                        result[key] = value;
                    }
                });
            }
            return result;
        }

        /**
         * An alternative to `_.reduce`, this method transforms an `object` to a new
         * `accumulator` object which is the result of running each of its elements
         * through the `callback`, with each `callback` execution potentially mutating
         * the `accumulator` object. The `callback` is bound to `thisArg` and invoked
         * with four arguments; (accumulator, value, key, object). Callbacks may exit
         * iteration early by explicitly returning `false`.
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {Array|Object} collection The collection to iterate over.
         * @param {Function} [callback=identity] The function called per iteration.
         * @param {Mixed} [accumulator] The custom accumulator value.
         * @param {Mixed} [thisArg] The `this` binding of `callback`.
         * @returns {Mixed} Returns the accumulated value.
         * @example
         *
         * var squares = _.transform([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function(result, num) {
         *   num *= num;
         *   if (num % 2) {
         *     return result.push(num) < 3;
         *   }
         * });
         * // => [1, 9, 25]
         *
         * var mapped = _.transform({ 'a': 1, 'b': 2, 'c': 3 }, function(result, num, key) {
         *   result[key] = num * 3;
         * });
         * // => { 'a': 3, 'b': 6, 'c': 9 }
         */
        function transform(object, callback, accumulator, thisArg) {
            var isArr = isArray(object);
            callback = lodash.createCallback(callback, thisArg, 4);

            if (accumulator == null) {
                if (isArr) {
                    accumulator = [];
                } else {
                    var ctor = object && object.constructor,
                        proto = ctor && ctor.prototype;

                    accumulator = createObject(proto);
                }
            }
            (isArr ? forEach : forOwn)(object, function (value, index, object) {
                return callback(accumulator, value, index, object);
            });
            return accumulator;
        }

        /**
         * Creates an array composed of the own enumerable property values of `object`.
         *
         * @static
         * @memberOf _
         * @category Objects
         * @param {Object} object The object to inspect.
         * @returns {Array} Returns a new array of property values.
         * @example
         *
         * _.values({ 'one': 1, 'two': 2, 'three': 3 });
         * // => [1, 2, 3] (order is not guaranteed)
         */
        function values(object) {
            var index = -1,
                props = keys(object),
                length = props.length,
                result = Array(length);

            while (++index < length) {
                result[index] = object[props[index]];
            }
            return result;
        }

        /*--------------------------------------------------------------------------*/

        /**
         * Creates an array of elements from the specified indexes, or keys, of the
         * `collection`. Indexes may be specified as individual arguments or as arrays
         * of indexes.
         *
         * @static
         * @memberOf _
         * @category Collections
         * @param {Array|Object|String} collection The collection to iterate over.
         * @param {Array|Number|String} [index1, index2, ...] The indexes of
         *  `collection` to retrieve, either as individual arguments or arrays.
         * @returns {Array} Returns a new array of elements corresponding to the
         *  provided indexes.
         * @example
         *
         * _.at(['a', 'b', 'c', 'd', 'e'], [0, 2, 4]);
         * // => ['a', 'c', 'e']
         *
         * _.at(['moe', 'larry', 'curly'], 0, 2);
         * // => ['moe', 'curly']
         */
        function at(collection) {
            var index = -1,
                props = concat.apply(arrayRef, nativeSlice.call(arguments, 1)),
                length = props.length,
                result = Array(length);

            while (++index < length) {
                result[index] = collection[props[index]];
            }
            return result;
        }

        /**
         * Checks if a given `target` element is present in a `collection` using strict
         * equality for comparisons, i.e. `===`. If `fromIndex` is negative, it is used
         * as the offset from the end of the collection.
         *
         * @static
         * @memberOf _
         * @alias include
         * @category Collections
         * @param {Array|Object|String} collection The collection to iterate over.
         * @param {Mixed} target The value to check for.
         * @param {Number} [fromIndex=0] The index to search from.
         * @returns {Boolean} Returns `true` if the `target` element is found, else `false`.
         * @example
         *
         * _.contains([1, 2, 3], 1);
         * // => true
         *
         * _.contains([1, 2, 3], 1, 2);
         * // => false
         *
         * _.contains({ 'name': 'moe', 'age': 40 }, 'moe');
         * // => true
         *
         * _.contains('curly', 'ur');
         * // => true
         */
        function contains(collection, target, fromIndex) {
            var index = -1,
                indexOf = getIndexOf(),
                length = collection ? collection.length : 0,
                result = false;

            fromIndex = (fromIndex < 0 ? nativeMax(0, length + fromIndex) : fromIndex) || 0;
            if (length && typeof length == 'number') {
                result = (isString(collection)
                  ? collection.indexOf(target, fromIndex)
                  : indexOf(collection, target, fromIndex)
                ) > -1;
            } else {
                forOwn(collection, function (value) {
                    if (++index >= fromIndex) {
                        return !(result = value === target);
                    }
                });
            }
            return result;
        }

        /**
         * Creates an object composed of keys returned from running each element of the
         * `collection` through the given `callback`. The corresponding value of each key
         * is the number of times the key was returned by the `callback`. The `callback`
         * is bound to `thisArg` and invoked with three arguments; (value, index|key, collection).
         *
         * If a property name is passed for `callback`, the created "_.pluck" style
         * callback will return the property value of the given element.
         *
         * If an object is passed for `callback`, the created "_.where" style callback
         * will return `true` for elements that have the properties of the given object,
         * else `false`.
         *
         * @static
         * @memberOf _
         * @category Collections
         * @param {Array|Object|String} collection The collection to iterate over.
         * @param {Function|Object|String} [callback=identity] The function called per
         *  iteration. If a property name or object is passed, it will be used to create
         *  a "_.pluck" or "_.where" style callback, respectively.
         * @param {Mixed} [thisArg] The `this` binding of `callback`.
         * @returns {Object} Returns the composed aggregate object.
         * @example
         *
         * _.countBy([4.3, 6.1, 6.4], function(num) { return Math.floor(num); });
         * // => { '4': 1, '6': 2 }
         *
         * _.countBy([4.3, 6.1, 6.4], function(num) { return this.floor(num); }, Math);
         * // => { '4': 1, '6': 2 }
         *
         * _.countBy(['one', 'two', 'three'], 'length');
         * // => { '3': 2, '5': 1 }
         */
        function countBy(collection, callback, thisArg) {
            var result = {};
            callback = lodash.createCallback(callback, thisArg);

            forEach(collection, function (value, key, collection) {
                key = String(callback(value, key, collection));
                (hasOwnProperty.call(result, key) ? result[key]++ : result[key] = 1);
            });
            return result;
        }

        /**
         * Checks if the `callback` returns a truthy value for **all** elements of a
         * `collection`. The `callback` is bound to `thisArg` and invoked with three
         * arguments; (value, index|key, collection).
         *
         * If a property name is passed for `callback`, the created "_.pluck" style
         * callback will return the property value of the given element.
         *
         * If an object is passed for `callback`, the created "_.where" style callback
         * will return `true` for elements that have the properties of the given object,
         * else `false`.
         *
         * @static
         * @memberOf _
         * @alias all
         * @category Collections
         * @param {Array|Object|String} collection The collection to iterate over.
         * @param {Function|Object|String} [callback=identity] The function called per
         *  iteration. If a property name or object is passed, it will be used to create
         *  a "_.pluck" or "_.where" style callback, respectively.
         * @param {Mixed} [thisArg] The `this` binding of `callback`.
         * @returns {Boolean} Returns `true` if all elements pass the callback check,
         *  else `false`.
         * @example
         *
         * _.every([true, 1, null, 'yes'], Boolean);
         * // => false
         *
         * var stooges = [
         *   { 'name': 'moe', 'age': 40 },
         *   { 'name': 'larry', 'age': 50 }
         * ];
         *
         * // using "_.pluck" callback shorthand
         * _.every(stooges, 'age');
         * // => true
         *
         * // using "_.where" callback shorthand
         * _.every(stooges, { 'age': 50 });
         * // => false
         */
        function every(collection, callback, thisArg) {
            var result = true;
            callback = lodash.createCallback(callback, thisArg);

            var index = -1,
                length = collection ? collection.length : 0;

            if (typeof length == 'number') {
                while (++index < length) {
                    if (!(result = !!callback(collection[index], index, collection))) {
                        break;
                    }
                }
            } else {
                forOwn(collection, function (value, index, collection) {
                    return (result = !!callback(value, index, collection));
                });
            }
            return result;
        }

        /**
         * Examines each element in a `collection`, returning an array of all elements
         * the `callback` returns truthy for. The `callback` is bound to `thisArg` and
         * invoked with three arguments; (value, index|key, collection).
         *
         * If a property name is passed for `callback`, the created "_.pluck" style
         * callback will return the property value of the given element.
         *
         * If an object is passed for `callback`, the created "_.where" style callback
         * will return `true` for elements that have the properties of the given object,
         * else `false`.
         *
         * @static
         * @memberOf _
         * @alias select
         * @category Collections
         * @param {Array|Object|String} collection The collection to iterate over.
         * @param {Function|Object|String} [callback=identity] The function called per
         *  iteration. If a property name or object is passed, it will be used to create
         *  a "_.pluck" or "_.where" style callback, respectively.
         * @param {Mixed} [thisArg] The `this` binding of `callback`.
         * @returns {Array} Returns a new array of elements that passed the callback check.
         * @example
         *
         * var evens = _.filter([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
         * // => [2, 4, 6]
         *
         * var food = [
         *   { 'name': 'apple',  'organic': false, 'type': 'fruit' },
         *   { 'name': 'carrot', 'organic': true,  'type': 'vegetable' }
         * ];
         *
         * // using "_.pluck" callback shorthand
         * _.filter(food, 'organic');
         * // => [{ 'name': 'carrot', 'organic': true, 'type': 'vegetable' }]
         *
         * // using "_.where" callback shorthand
         * _.filter(food, { 'type': 'fruit' });
         * // => [{ 'name': 'apple', 'organic': false, 'type': 'fruit' }]
         */
        function filter(collection, callback, thisArg) {
            var result = [];
            callback = lodash.createCallback(callback, thisArg);

            var index = -1,
                length = collection ? collection.length : 0;

            if (typeof length == 'number') {
                while (++index < length) {
                    var value = collection[index];
                    if (callback(value, index, collection)) {
                        result.push(value);
                    }
                }
            } else {
                forOwn(collection, function (value, index, collection) {
                    if (callback(value, index, collection)) {
                        result.push(value);
                    }
                });
            }
            return result;
        }

        /**
         * Examines each element in a `collection`, returning the first that the `callback`
         * returns truthy for. The `callback` is bound to `thisArg` and invoked with three
         * arguments; (value, index|key, collection).
         *
         * If a property name is passed for `callback`, the created "_.pluck" style
         * callback will return the property value of the given element.
         *
         * If an object is passed for `callback`, the created "_.where" style callback
         * will return `true` for elements that have the properties of the given object,
         * else `false`.
         *
         * @static
         * @memberOf _
         * @alias detect, findWhere
         * @category Collections
         * @param {Array|Object|String} collection The collection to iterate over.
         * @param {Function|Object|String} [callback=identity] The function called per
         *  iteration. If a property name or object is passed, it will be used to create
         *  a "_.pluck" or "_.where" style callback, respectively.
         * @param {Mixed} [thisArg] The `this` binding of `callback`.
         * @returns {Mixed} Returns the found element, else `undefined`.
         * @example
         *
         * _.find([1, 2, 3, 4], function(num) {
         *   return num % 2 == 0;
         * });
         * // => 2
         *
         * var food = [
         *   { 'name': 'apple',  'organic': false, 'type': 'fruit' },
         *   { 'name': 'banana', 'organic': true,  'type': 'fruit' },
         *   { 'name': 'beet',   'organic': false, 'type': 'vegetable' }
         * ];
         *
         * // using "_.where" callback shorthand
         * _.find(food, { 'type': 'vegetable' });
         * // => { 'name': 'beet', 'organic': false, 'type': 'vegetable' }
         *
         * // using "_.pluck" callback shorthand
         * _.find(food, 'organic');
         * // => { 'name': 'banana', 'organic': true, 'type': 'fruit' }
         */
        function find(collection, callback, thisArg) {
            callback = lodash.createCallback(callback, thisArg);

            var index = -1,
                length = collection ? collection.length : 0;

            if (typeof length == 'number') {
                while (++index < length) {
                    var value = collection[index];
                    if (callback(value, index, collection)) {
                        return value;
                    }
                }
            } else {
                var result;
                forOwn(collection, function (value, index, collection) {
                    if (callback(value, index, collection)) {
                        result = value;
                        return false;
                    }
                });
                return result;
            }
        }

        /**
         * Iterates over a `collection`, executing the `callback` for each element in
         * the `collection`. The `callback` is bound to `thisArg` and invoked with three
         * arguments; (value, index|key, collection). Callbacks may exit iteration early
         * by explicitly returning `false`.
         *
         * @static
         * @memberOf _
         * @alias each
         * @category Collections
         * @param {Array|Object|String} collection The collection to iterate over.
         * @param {Function} [callback=identity] The function called per iteration.
         * @param {Mixed} [thisArg] The `this` binding of `callback`.
         * @returns {Array|Object|String} Returns `collection`.
         * @example
         *
         * _([1, 2, 3]).forEach(alert).join(',');
         * // => alerts each number and returns '1,2,3'
         *
         * _.forEach({ 'one': 1, 'two': 2, 'three': 3 }, alert);
         * // => alerts each number value (order is not guaranteed)
         */
        function forEach(collection, callback, thisArg) {
            var index = -1,
                length = collection ? collection.length : 0;

            callback = callback && typeof thisArg == 'undefined' ? callback : lodash.createCallback(callback, thisArg);
            if (typeof length == 'number') {
                while (++index < length) {
                    if (callback(collection[index], index, collection) === false) {
                        break;
                    }
                }
            } else {
                forOwn(collection, callback);
            }
            return collection;
        }

        /**
         * Creates an object composed of keys returned from running each element of the
         * `collection` through the `callback`. The corresponding value of each key is
         * an array of elements passed to `callback` that returned the key. The `callback`
         * is bound to `thisArg` and invoked with three arguments; (value, index|key, collection).
         *
         * If a property name is passed for `callback`, the created "_.pluck" style
         * callback will return the property value of the given element.
         *
         * If an object is passed for `callback`, the created "_.where" style callback
         * will return `true` for elements that have the properties of the given object,
         * else `false`
         *
         * @static
         * @memberOf _
         * @category Collections
         * @param {Array|Object|String} collection The collection to iterate over.
         * @param {Function|Object|String} [callback=identity] The function called per
         *  iteration. If a property name or object is passed, it will be used to create
         *  a "_.pluck" or "_.where" style callback, respectively.
         * @param {Mixed} [thisArg] The `this` binding of `callback`.
         * @returns {Object} Returns the composed aggregate object.
         * @example
         *
         * _.groupBy([4.2, 6.1, 6.4], function(num) { return Math.floor(num); });
         * // => { '4': [4.2], '6': [6.1, 6.4] }
         *
         * _.groupBy([4.2, 6.1, 6.4], function(num) { return this.floor(num); }, Math);
         * // => { '4': [4.2], '6': [6.1, 6.4] }
         *
         * // using "_.pluck" callback shorthand
         * _.groupBy(['one', 'two', 'three'], 'length');
         * // => { '3': ['one', 'two'], '5': ['three'] }
         */
        function groupBy(collection, callback, thisArg) {
            var result = {};
            callback = lodash.createCallback(callback, thisArg);

            forEach(collection, function (value, key, collection) {
                key = String(callback(value, key, collection));
                (hasOwnProperty.call(result, key) ? result[key] : result[key] = []).push(value);
            });
            return result;
        }

        /**
         * Invokes the method named by `methodName` on each element in the `collection`,
         * returning an array of the results of each invoked method. Additional arguments
         * will be passed to each invoked method. If `methodName` is a function, it will
         * be invoked for, and `this` bound to, each element in the `collection`.
         *
         * @static
         * @memberOf _
         * @category Collections
         * @param {Array|Object|String} collection The collection to iterate over.
         * @param {Function|String} methodName The name of the method to invoke or
         *  the function invoked per iteration.
         * @param {Mixed} [arg1, arg2, ...] Arguments to invoke the method with.
         * @returns {Array} Returns a new array of the results of each invoked method.
         * @example
         *
         * _.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
         * // => [[1, 5, 7], [1, 2, 3]]
         *
         * _.invoke([123, 456], String.prototype.split, '');
         * // => [['1', '2', '3'], ['4', '5', '6']]
         */
        function invoke(collection, methodName) {
            var args = nativeSlice.call(arguments, 2),
                index = -1,
                isFunc = typeof methodName == 'function',
                length = collection ? collection.length : 0,
                result = Array(typeof length == 'number' ? length : 0);

            forEach(collection, function (value) {
                result[++index] = (isFunc ? methodName : value[methodName]).apply(value, args);
            });
            return result;
        }

        /**
         * Creates an array of values by running each element in the `collection`
         * through the `callback`. The `callback` is bound to `thisArg` and invoked with
         * three arguments; (value, index|key, collection).
         *
         * If a property name is passed for `callback`, the created "_.pluck" style
         * callback will return the property value of the given element.
         *
         * If an object is passed for `callback`, the created "_.where" style callback
         * will return `true` for elements that have the properties of the given object,
         * else `false`.
         *
         * @static
         * @memberOf _
         * @alias collect
         * @category Collections
         * @param {Array|Object|String} collection The collection to iterate over.
         * @param {Function|Object|String} [callback=identity] The function called per
         *  iteration. If a property name or object is passed, it will be used to create
         *  a "_.pluck" or "_.where" style callback, respectively.
         * @param {Mixed} [thisArg] The `this` binding of `callback`.
         * @returns {Array} Returns a new array of the results of each `callback` execution.
         * @example
         *
         * _.map([1, 2, 3], function(num) { return num * 3; });
         * // => [3, 6, 9]
         *
         * _.map({ 'one': 1, 'two': 2, 'three': 3 }, function(num) { return num * 3; });
         * // => [3, 6, 9] (order is not guaranteed)
         *
         * var stooges = [
         *   { 'name': 'moe', 'age': 40 },
         *   { 'name': 'larry', 'age': 50 }
         * ];
         *
         * // using "_.pluck" callback shorthand
         * _.map(stooges, 'name');
         * // => ['moe', 'larry']
         */
        function map(collection, callback, thisArg) {
            var index = -1,
                length = collection ? collection.length : 0;

            callback = lodash.createCallback(callback, thisArg);
            if (typeof length == 'number') {
                var result = Array(length);
                while (++index < length) {
                    result[index] = callback(collection[index], index, collection);
                }
            } else {
                result = [];
                forOwn(collection, function (value, key, collection) {
                    result[++index] = callback(value, key, collection);
                });
            }
            return result;
        }

        /**
         * Retrieves the maximum value of an `array`. If `callback` is passed,
         * it will be executed for each value in the `array` to generate the
         * criterion by which the value is ranked. The `callback` is bound to
         * `thisArg` and invoked with three arguments; (value, index, collection).
         *
         * If a property name is passed for `callback`, the created "_.pluck" style
         * callback will return the property value of the given element.
         *
         * If an object is passed for `callback`, the created "_.where" style callback
         * will return `true` for elements that have the properties of the given object,
         * else `false`.
         *
         * @static
         * @memberOf _
         * @category Collections
         * @param {Array|Object|String} collection The collection to iterate over.
         * @param {Function|Object|String} [callback=identity] The function called per
         *  iteration. If a property name or object is passed, it will be used to create
         *  a "_.pluck" or "_.where" style callback, respectively.
         * @param {Mixed} [thisArg] The `this` binding of `callback`.
         * @returns {Mixed} Returns the maximum value.
         * @example
         *
         * _.max([4, 2, 8, 6]);
         * // => 8
         *
         * var stooges = [
         *   { 'name': 'moe', 'age': 40 },
         *   { 'name': 'larry', 'age': 50 }
         * ];
         *
         * _.max(stooges, function(stooge) { return stooge.age; });
         * // => { 'name': 'larry', 'age': 50 };
         *
         * // using "_.pluck" callback shorthand
         * _.max(stooges, 'age');
         * // => { 'name': 'larry', 'age': 50 };
         */
        function max(collection, callback, thisArg) {
            var computed = -Infinity,
                result = computed;

            if (!callback && isArray(collection)) {
                var index = -1,
                    length = collection.length;

                while (++index < length) {
                    var value = collection[index];
                    if (value > result) {
                        result = value;
                    }
                }
            } else {
                callback = (!callback && isString(collection))
                  ? charAtCallback
                  : lodash.createCallback(callback, thisArg);

                forEach(collection, function (value, index, collection) {
                    var current = callback(value, index, collection);
                    if (current > computed) {
                        computed = current;
                        result = value;
                    }
                });
            }
            return result;
        }

        /**
         * Retrieves the minimum value of an `array`. If `callback` is passed,
         * it will be executed for each value in the `array` to generate the
         * criterion by which the value is ranked. The `callback` is bound to `thisArg`
         * and invoked with three arguments; (value, index, collection).
         *
         * If a property name is passed for `callback`, the created "_.pluck" style
         * callback will return the property value of the given element.
         *
         * If an object is passed for `callback`, the created "_.where" style callback
         * will return `true` for elements that have the properties of the given object,
         * else `false`.
         *
         * @static
         * @memberOf _
         * @category Collections
         * @param {Array|Object|String} collection The collection to iterate over.
         * @param {Function|Object|String} [callback=identity] The function called per
         *  iteration. If a property name or object is passed, it will be used to create
         *  a "_.pluck" or "_.where" style callback, respectively.
         * @param {Mixed} [thisArg] The `this` binding of `callback`.
         * @returns {Mixed} Returns the minimum value.
         * @example
         *
         * _.min([4, 2, 8, 6]);
         * // => 2
         *
         * var stooges = [
         *   { 'name': 'moe', 'age': 40 },
         *   { 'name': 'larry', 'age': 50 }
         * ];
         *
         * _.min(stooges, function(stooge) { return stooge.age; });
         * // => { 'name': 'moe', 'age': 40 };
         *
         * // using "_.pluck" callback shorthand
         * _.min(stooges, 'age');
         * // => { 'name': 'moe', 'age': 40 };
         */
        function min(collection, callback, thisArg) {
            var computed = Infinity,
                result = computed;

            if (!callback && isArray(collection)) {
                var index = -1,
                    length = collection.length;

                while (++index < length) {
                    var value = collection[index];
                    if (value < result) {
                        result = value;
                    }
                }
            } else {
                callback = (!callback && isString(collection))
                  ? charAtCallback
                  : lodash.createCallback(callback, thisArg);

                forEach(collection, function (value, index, collection) {
                    var current = callback(value, index, collection);
                    if (current < computed) {
                        computed = current;
                        result = value;
                    }
                });
            }
            return result;
        }

        /**
         * Retrieves the value of a specified property from all elements in the `collection`.
         *
         * @static
         * @memberOf _
         * @type Function
         * @category Collections
         * @param {Array|Object|String} collection The collection to iterate over.
         * @param {String} property The property to pluck.
         * @returns {Array} Returns a new array of property values.
         * @example
         *
         * var stooges = [
         *   { 'name': 'moe', 'age': 40 },
         *   { 'name': 'larry', 'age': 50 }
         * ];
         *
         * _.pluck(stooges, 'name');
         * // => ['moe', 'larry']
         */
        function pluck(collection, property) {
            var index = -1,
                length = collection ? collection.length : 0;

            if (typeof length == 'number') {
                var result = Array(length);
                while (++index < length) {
                    result[index] = collection[index][property];
                }
            }
            return result || map(collection, property);
        }

        /**
         * Reduces a `collection` to a value which is the accumulated result of running
         * each element in the `collection` through the `callback`, where each successive
         * `callback` execution consumes the return value of the previous execution.
         * If `accumulator` is not passed, the first element of the `collection` will be
         * used as the initial `accumulator` value. The `callback` is bound to `thisArg`
         * and invoked with four arguments; (accumulator, value, index|key, collection).
         *
         * @static
         * @memberOf _
         * @alias foldl, inject
         * @category Collections
         * @param {Array|Object|String} collection The collection to iterate over.
         * @param {Function} [callback=identity] The function called per iteration.
         * @param {Mixed} [accumulator] Initial value of the accumulator.
         * @param {Mixed} [thisArg] The `this` binding of `callback`.
         * @returns {Mixed} Returns the accumulated value.
         * @example
         *
         * var sum = _.reduce([1, 2, 3], function(sum, num) {
         *   return sum + num;
         * });
         * // => 6
         *
         * var mapped = _.reduce({ 'a': 1, 'b': 2, 'c': 3 }, function(result, num, key) {
         *   result[key] = num * 3;
         *   return result;
         * }, {});
         * // => { 'a': 3, 'b': 6, 'c': 9 }
         */
        function reduce(collection, callback, accumulator, thisArg) {
            if (!collection) return accumulator;
            var noaccum = arguments.length < 3;
            callback = lodash.createCallback(callback, thisArg, 4);

            var index = -1,
                length = collection.length;

            if (typeof length == 'number') {
                if (noaccum) {
                    accumulator = collection[++index];
                }
                while (++index < length) {
                    accumulator = callback(accumulator, collection[index], index, collection);
                }
            } else {
                forOwn(collection, function (value, index, collection) {
                    accumulator = noaccum
                      ? (noaccum = false, value)
                      : callback(accumulator, value, index, collection)
                });
            }
            return accumulator;
        }

        /**
         * This method is similar to `_.reduce`, except that it iterates over a
         * `collection` from right to left.
         *
         * @static
         * @memberOf _
         * @alias foldr
         * @category Collections
         * @param {Array|Object|String} collection The collection to iterate over.
         * @param {Function} [callback=identity] The function called per iteration.
         * @param {Mixed} [accumulator] Initial value of the accumulator.
         * @param {Mixed} [thisArg] The `this` binding of `callback`.
         * @returns {Mixed} Returns the accumulated value.
         * @example
         *
         * var list = [[0, 1], [2, 3], [4, 5]];
         * var flat = _.reduceRight(list, function(a, b) { return a.concat(b); }, []);
         * // => [4, 5, 2, 3, 0, 1]
         */
        function reduceRight(collection, callback, accumulator, thisArg) {
            var iterable = collection,
                length = collection ? collection.length : 0,
                noaccum = arguments.length < 3;

            if (typeof length != 'number') {
                var props = keys(collection);
                length = props.length;
            }
            callback = lodash.createCallback(callback, thisArg, 4);
            forEach(collection, function (value, index, collection) {
                index = props ? props[--length] : --length;
                accumulator = noaccum
                  ? (noaccum = false, iterable[index])
                  : callback(accumulator, iterable[index], index, collection);
            });
            return accumulator;
        }

        /**
         * The opposite of `_.filter`, this method returns the elements of a
         * `collection` that `callback` does **not** return truthy for.
         *
         * If a property name is passed for `callback`, the created "_.pluck" style
         * callback will return the property value of the given element.
         *
         * If an object is passed for `callback`, the created "_.where" style callback
         * will return `true` for elements that have the properties of the given object,
         * else `false`.
         *
         * @static
         * @memberOf _
         * @category Collections
         * @param {Array|Object|String} collection The collection to iterate over.
         * @param {Function|Object|String} [callback=identity] The function called per
         *  iteration. If a property name or object is passed, it will be used to create
         *  a "_.pluck" or "_.where" style callback, respectively.
         * @param {Mixed} [thisArg] The `this` binding of `callback`.
         * @returns {Array} Returns a new array of elements that did **not** pass the
         *  callback check.
         * @example
         *
         * var odds = _.reject([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
         * // => [1, 3, 5]
         *
         * var food = [
         *   { 'name': 'apple',  'organic': false, 'type': 'fruit' },
         *   { 'name': 'carrot', 'organic': true,  'type': 'vegetable' }
         * ];
         *
         * // using "_.pluck" callback shorthand
         * _.reject(food, 'organic');
         * // => [{ 'name': 'apple', 'organic': false, 'type': 'fruit' }]
         *
         * // using "_.where" callback shorthand
         * _.reject(food, { 'type': 'fruit' });
         * // => [{ 'name': 'carrot', 'organic': true, 'type': 'vegetable' }]
         */
        function reject(collection, callback, thisArg) {
            callback = lodash.createCallback(callback, thisArg);
            return filter(collection, function (value, index, collection) {
                return !callback(value, index, collection);
            });
        }

        /**
         * Creates an array of shuffled `array` values, using a version of the
         * Fisher-Yates shuffle. See http://en.wikipedia.org/wiki/Fisher-Yates_shuffle.
         *
         * @static
         * @memberOf _
         * @category Collections
         * @param {Array|Object|String} collection The collection to shuffle.
         * @returns {Array} Returns a new shuffled collection.
         * @example
         *
         * _.shuffle([1, 2, 3, 4, 5, 6]);
         * // => [4, 1, 6, 3, 5, 2]
         */
        function shuffle(collection) {
            var index = -1,
                length = collection ? collection.length : 0,
                result = Array(typeof length == 'number' ? length : 0);

            forEach(collection, function (value) {
                var rand = floor(nativeRandom() * (++index + 1));
                result[index] = result[rand];
                result[rand] = value;
            });
            return result;
        }

        /**
         * Gets the size of the `collection` by returning `collection.length` for arrays
         * and array-like objects or the number of own enumerable properties for objects.
         *
         * @static
         * @memberOf _
         * @category Collections
         * @param {Array|Object|String} collection The collection to inspect.
         * @returns {Number} Returns `collection.length` or number of own enumerable properties.
         * @example
         *
         * _.size([1, 2]);
         * // => 2
         *
         * _.size({ 'one': 1, 'two': 2, 'three': 3 });
         * // => 3
         *
         * _.size('curly');
         * // => 5
         */
        function size(collection) {
            var length = collection ? collection.length : 0;
            return typeof length == 'number' ? length : keys(collection).length;
        }

        /**
         * Checks if the `callback` returns a truthy value for **any** element of a
         * `collection`. The function returns as soon as it finds passing value, and
         * does not iterate over the entire `collection`. The `callback` is bound to
         * `thisArg` and invoked with three arguments; (value, index|key, collection).
         *
         * If a property name is passed for `callback`, the created "_.pluck" style
         * callback will return the property value of the given element.
         *
         * If an object is passed for `callback`, the created "_.where" style callback
         * will return `true` for elements that have the properties of the given object,
         * else `false`.
         *
         * @static
         * @memberOf _
         * @alias any
         * @category Collections
         * @param {Array|Object|String} collection The collection to iterate over.
         * @param {Function|Object|String} [callback=identity] The function called per
         *  iteration. If a property name or object is passed, it will be used to create
         *  a "_.pluck" or "_.where" style callback, respectively.
         * @param {Mixed} [thisArg] The `this` binding of `callback`.
         * @returns {Boolean} Returns `true` if any element passes the callback check,
         *  else `false`.
         * @example
         *
         * _.some([null, 0, 'yes', false], Boolean);
         * // => true
         *
         * var food = [
         *   { 'name': 'apple',  'organic': false, 'type': 'fruit' },
         *   { 'name': 'carrot', 'organic': true,  'type': 'vegetable' }
         * ];
         *
         * // using "_.pluck" callback shorthand
         * _.some(food, 'organic');
         * // => true
         *
         * // using "_.where" callback shorthand
         * _.some(food, { 'type': 'meat' });
         * // => false
         */
        function some(collection, callback, thisArg) {
            var result;
            callback = lodash.createCallback(callback, thisArg);

            var index = -1,
                length = collection ? collection.length : 0;

            if (typeof length == 'number') {
                while (++index < length) {
                    if ((result = callback(collection[index], index, collection))) {
                        break;
                    }
                }
            } else {
                forOwn(collection, function (value, index, collection) {
                    return !(result = callback(value, index, collection));
                });
            }
            return !!result;
        }

        /**
         * Creates an array of elements, sorted in ascending order by the results of
         * running each element in the `collection` through the `callback`. This method
         * performs a stable sort, that is, it will preserve the original sort order of
         * equal elements. The `callback` is bound to `thisArg` and invoked with three
         * arguments; (value, index|key, collection).
         *
         * If a property name is passed for `callback`, the created "_.pluck" style
         * callback will return the property value of the given element.
         *
         * If an object is passed for `callback`, the created "_.where" style callback
         * will return `true` for elements that have the properties of the given object,
         * else `false`.
         *
         * @static
         * @memberOf _
         * @category Collections
         * @param {Array|Object|String} collection The collection to iterate over.
         * @param {Function|Object|String} [callback=identity] The function called per
         *  iteration. If a property name or object is passed, it will be used to create
         *  a "_.pluck" or "_.where" style callback, respectively.
         * @param {Mixed} [thisArg] The `this` binding of `callback`.
         * @returns {Array} Returns a new array of sorted elements.
         * @example
         *
         * _.sortBy([1, 2, 3], function(num) { return Math.sin(num); });
         * // => [3, 1, 2]
         *
         * _.sortBy([1, 2, 3], function(num) { return this.sin(num); }, Math);
         * // => [3, 1, 2]
         *
         * // using "_.pluck" callback shorthand
         * _.sortBy(['banana', 'strawberry', 'apple'], 'length');
         * // => ['apple', 'banana', 'strawberry']
         */
        function sortBy(collection, callback, thisArg) {
            var index = -1,
                length = collection ? collection.length : 0,
                result = Array(typeof length == 'number' ? length : 0);

            callback = lodash.createCallback(callback, thisArg);
            forEach(collection, function (value, key, collection) {
                var object = result[++index] = getObject();
                object.criteria = callback(value, key, collection);
                object.index = index;
                object.value = value;
            });

            length = result.length;
            result.sort(compareAscending);
            while (length--) {
                var object = result[length];
                result[length] = object.value;
                releaseObject(object);
            }
            return result;
        }

        /**
         * Converts the `collection` to an array.
         *
         * @static
         * @memberOf _
         * @category Collections
         * @param {Array|Object|String} collection The collection to convert.
         * @returns {Array} Returns the new converted array.
         * @example
         *
         * (function() { return _.toArray(arguments).slice(1); })(1, 2, 3, 4);
         * // => [2, 3, 4]
         */
        function toArray(collection) {
            if (collection && typeof collection.length == 'number') {
                return slice(collection);
            }
            return values(collection);
        }

        /**
         * Examines each element in a `collection`, returning an array of all elements
         * that have the given `properties`. When checking `properties`, this method
         * performs a deep comparison between values to determine if they are equivalent
         * to each other.
         *
         * @static
         * @memberOf _
         * @type Function
         * @category Collections
         * @param {Array|Object|String} collection The collection to iterate over.
         * @param {Object} properties The object of property values to filter by.
         * @returns {Array} Returns a new array of elements that have the given `properties`.
         * @example
         *
         * var stooges = [
         *   { 'name': 'moe', 'age': 40 },
         *   { 'name': 'larry', 'age': 50 }
         * ];
         *
         * _.where(stooges, { 'age': 40 });
         * // => [{ 'name': 'moe', 'age': 40 }]
         */
        var where = filter;

        /*--------------------------------------------------------------------------*/

        /**
         * Creates an array with all falsey values of `array` removed. The values
         * `false`, `null`, `0`, `""`, `undefined` and `NaN` are all falsey.
         *
         * @static
         * @memberOf _
         * @category Arrays
         * @param {Array} array The array to compact.
         * @returns {Array} Returns a new filtered array.
         * @example
         *
         * _.compact([0, 1, false, 2, '', 3]);
         * // => [1, 2, 3]
         */
        function compact(array) {
            var index = -1,
                length = array ? array.length : 0,
                result = [];

            while (++index < length) {
                var value = array[index];
                if (value) {
                    result.push(value);
                }
            }
            return result;
        }

        /**
         * Creates an array of `array` elements not present in the other arrays
         * using strict equality for comparisons, i.e. `===`.
         *
         * @static
         * @memberOf _
         * @category Arrays
         * @param {Array} array The array to process.
         * @param {Array} [array1, array2, ...] Arrays to check.
         * @returns {Array} Returns a new array of `array` elements not present in the
         *  other arrays.
         * @example
         *
         * _.difference([1, 2, 3, 4, 5], [5, 2, 10]);
         * // => [1, 3, 4]
         */
        function difference(array) {
            var index = -1,
                indexOf = getIndexOf(),
                length = array ? array.length : 0,
                seen = concat.apply(arrayRef, nativeSlice.call(arguments, 1)),
                result = [];

            var isLarge = length >= largeArraySize && indexOf === basicIndexOf;

            if (isLarge) {
                var cache = createCache(seen);
                if (cache) {
                    indexOf = cacheIndexOf;
                    seen = cache;
                } else {
                    isLarge = false;
                }
            }
            while (++index < length) {
                var value = array[index];
                if (indexOf(seen, value) < 0) {
                    result.push(value);
                }
            }
            if (isLarge) {
                releaseObject(seen);
            }
            return result;
        }

        /**
         * This method is similar to `_.find`, except that it returns the index of
         * the element that passes the callback check, instead of the element itself.
         *
         * @static
         * @memberOf _
         * @category Arrays
         * @param {Array} array The array to search.
         * @param {Function|Object|String} [callback=identity] The function called per
         *  iteration. If a property name or object is passed, it will be used to create
         *  a "_.pluck" or "_.where" style callback, respectively.
         * @param {Mixed} [thisArg] The `this` binding of `callback`.
         * @returns {Mixed} Returns the index of the found element, else `-1`.
         * @example
         *
         * _.findIndex(['apple', 'banana', 'beet'], function(food) {
         *   return /^b/.test(food);
         * });
         * // => 1
         */
        function findIndex(array, callback, thisArg) {
            var index = -1,
                length = array ? array.length : 0;

            callback = lodash.createCallback(callback, thisArg);
            while (++index < length) {
                if (callback(array[index], index, array)) {
                    return index;
                }
            }
            return -1;
        }

        /**
         * Gets the first element of the `array`. If a number `n` is passed, the first
         * `n` elements of the `array` are returned. If a `callback` function is passed,
         * elements at the beginning of the array are returned as long as the `callback`
         * returns truthy. The `callback` is bound to `thisArg` and invoked with three
         * arguments; (value, index, array).
         *
         * If a property name is passed for `callback`, the created "_.pluck" style
         * callback will return the property value of the given element.
         *
         * If an object is passed for `callback`, the created "_.where" style callback
         * will return `true` for elements that have the properties of the given object,
         * else `false`.
         *
         * @static
         * @memberOf _
         * @alias head, take
         * @category Arrays
         * @param {Array} array The array to query.
         * @param {Function|Object|Number|String} [callback|n] The function called
         *  per element or the number of elements to return. If a property name or
         *  object is passed, it will be used to create a "_.pluck" or "_.where"
         *  style callback, respectively.
         * @param {Mixed} [thisArg] The `this` binding of `callback`.
         * @returns {Mixed} Returns the first element(s) of `array`.
         * @example
         *
         * _.first([1, 2, 3]);
         * // => 1
         *
         * _.first([1, 2, 3], 2);
         * // => [1, 2]
         *
         * _.first([1, 2, 3], function(num) {
         *   return num < 3;
         * });
         * // => [1, 2]
         *
         * var food = [
         *   { 'name': 'banana', 'organic': true },
         *   { 'name': 'beet',   'organic': false },
         * ];
         *
         * // using "_.pluck" callback shorthand
         * _.first(food, 'organic');
         * // => [{ 'name': 'banana', 'organic': true }]
         *
         * var food = [
         *   { 'name': 'apple',  'type': 'fruit' },
         *   { 'name': 'banana', 'type': 'fruit' },
         *   { 'name': 'beet',   'type': 'vegetable' }
         * ];
         *
         * // using "_.where" callback shorthand
         * _.first(food, { 'type': 'fruit' });
         * // => [{ 'name': 'apple', 'type': 'fruit' }, { 'name': 'banana', 'type': 'fruit' }]
         */
        function first(array, callback, thisArg) {
            if (array) {
                var n = 0,
                    length = array.length;

                if (typeof callback != 'number' && callback != null) {
                    var index = -1;
                    callback = lodash.createCallback(callback, thisArg);
                    while (++index < length && callback(array[index], index, array)) {
                        n++;
                    }
                } else {
                    n = callback;
                    if (n == null || thisArg) {
                        return array[0];
                    }
                }
                return slice(array, 0, nativeMin(nativeMax(0, n), length));
            }
        }

        /**
         * Flattens a nested array (the nesting can be to any depth). If `isShallow`
         * is truthy, `array` will only be flattened a single level. If `callback`
         * is passed, each element of `array` is passed through a `callback` before
         * flattening. The `callback` is bound to `thisArg` and invoked with three
         * arguments; (value, index, array).
         *
         * If a property name is passed for `callback`, the created "_.pluck" style
         * callback will return the property value of the given element.
         *
         * If an object is passed for `callback`, the created "_.where" style callback
         * will return `true` for elements that have the properties of the given object,
         * else `false`.
         *
         * @static
         * @memberOf _
         * @category Arrays
         * @param {Array} array The array to flatten.
         * @param {Boolean} [isShallow=false] A flag to indicate only flattening a single level.
         * @param {Function|Object|String} [callback=identity] The function called per
         *  iteration. If a property name or object is passed, it will be used to create
         *  a "_.pluck" or "_.where" style callback, respectively.
         * @param {Mixed} [thisArg] The `this` binding of `callback`.
         * @returns {Array} Returns a new flattened array.
         * @example
         *
         * _.flatten([1, [2], [3, [[4]]]]);
         * // => [1, 2, 3, 4];
         *
         * _.flatten([1, [2], [3, [[4]]]], true);
         * // => [1, 2, 3, [[4]]];
         *
         * var stooges = [
         *   { 'name': 'curly', 'quotes': ['Oh, a wise guy, eh?', 'Poifect!'] },
         *   { 'name': 'moe', 'quotes': ['Spread out!', 'You knucklehead!'] }
         * ];
         *
         * // using "_.pluck" callback shorthand
         * _.flatten(stooges, 'quotes');
         * // => ['Oh, a wise guy, eh?', 'Poifect!', 'Spread out!', 'You knucklehead!']
         */
        var flatten = overloadWrapper(function flatten(array, isShallow, callback) {
            var index = -1,
                length = array ? array.length : 0,
                result = [];

            while (++index < length) {
                var value = array[index];
                if (callback) {
                    value = callback(value, index, array);
                }
                // recursively flatten arrays (susceptible to call stack limits)
                if (isArray(value)) {
                    push.apply(result, isShallow ? value : flatten(value));
                } else {
                    result.push(value);
                }
            }
            return result;
        });

        /**
         * Gets the index at which the first occurrence of `value` is found using
         * strict equality for comparisons, i.e. `===`. If the `array` is already
         * sorted, passing `true` for `fromIndex` will run a faster binary search.
         *
         * @static
         * @memberOf _
         * @category Arrays
         * @param {Array} array The array to search.
         * @param {Mixed} value The value to search for.
         * @param {Boolean|Number} [fromIndex=0] The index to search from or `true` to
         *  perform a binary search on a sorted `array`.
         * @returns {Number} Returns the index of the matched value or `-1`.
         * @example
         *
         * _.indexOf([1, 2, 3, 1, 2, 3], 2);
         * // => 1
         *
         * _.indexOf([1, 2, 3, 1, 2, 3], 2, 3);
         * // => 4
         *
         * _.indexOf([1, 1, 2, 2, 3, 3], 2, true);
         * // => 2
         */
        function indexOf(array, value, fromIndex) {
            if (typeof fromIndex == 'number') {
                var length = array ? array.length : 0;
                fromIndex = (fromIndex < 0 ? nativeMax(0, length + fromIndex) : fromIndex || 0);
            } else if (fromIndex) {
                var index = sortedIndex(array, value);
                return array[index] === value ? index : -1;
            }
            return array ? basicIndexOf(array, value, fromIndex) : -1;
        }

        /**
         * Gets all but the last element of `array`. If a number `n` is passed, the
         * last `n` elements are excluded from the result. If a `callback` function
         * is passed, elements at the end of the array are excluded from the result
         * as long as the `callback` returns truthy. The `callback` is bound to
         * `thisArg` and invoked with three arguments; (value, index, array).
         *
         * If a property name is passed for `callback`, the created "_.pluck" style
         * callback will return the property value of the given element.
         *
         * If an object is passed for `callback`, the created "_.where" style callback
         * will return `true` for elements that have the properties of the given object,
         * else `false`.
         *
         * @static
         * @memberOf _
         * @category Arrays
         * @param {Array} array The array to query.
         * @param {Function|Object|Number|String} [callback|n=1] The function called
         *  per element or the number of elements to exclude. If a property name or
         *  object is passed, it will be used to create a "_.pluck" or "_.where"
         *  style callback, respectively.
         * @param {Mixed} [thisArg] The `this` binding of `callback`.
         * @returns {Array} Returns a slice of `array`.
         * @example
         *
         * _.initial([1, 2, 3]);
         * // => [1, 2]
         *
         * _.initial([1, 2, 3], 2);
         * // => [1]
         *
         * _.initial([1, 2, 3], function(num) {
         *   return num > 1;
         * });
         * // => [1]
         *
         * var food = [
         *   { 'name': 'beet',   'organic': false },
         *   { 'name': 'carrot', 'organic': true }
         * ];
         *
         * // using "_.pluck" callback shorthand
         * _.initial(food, 'organic');
         * // => [{ 'name': 'beet',   'organic': false }]
         *
         * var food = [
         *   { 'name': 'banana', 'type': 'fruit' },
         *   { 'name': 'beet',   'type': 'vegetable' },
         *   { 'name': 'carrot', 'type': 'vegetable' }
         * ];
         *
         * // using "_.where" callback shorthand
         * _.initial(food, { 'type': 'vegetable' });
         * // => [{ 'name': 'banana', 'type': 'fruit' }]
         */
        function initial(array, callback, thisArg) {
            if (!array) {
                return [];
            }
            var n = 0,
                length = array.length;

            if (typeof callback != 'number' && callback != null) {
                var index = length;
                callback = lodash.createCallback(callback, thisArg);
                while (index-- && callback(array[index], index, array)) {
                    n++;
                }
            } else {
                n = (callback == null || thisArg) ? 1 : callback || n;
            }
            return slice(array, 0, nativeMin(nativeMax(0, length - n), length));
        }

        /**
         * Computes the intersection of all the passed-in arrays using strict equality
         * for comparisons, i.e. `===`.
         *
         * @static
         * @memberOf _
         * @category Arrays
         * @param {Array} [array1, array2, ...] Arrays to process.
         * @returns {Array} Returns a new array of unique elements that are present
         *  in **all** of the arrays.
         * @example
         *
         * _.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]);
         * // => [1, 2]
         */
        function intersection(array) {
            var args = arguments,
                argsLength = args.length,
                argsIndex = -1,
                caches = getArray(),
                index = -1,
                indexOf = getIndexOf(),
                length = array ? array.length : 0,
                result = [],
                seen = getArray();

            while (++argsIndex < argsLength) {
                var value = args[argsIndex];
                caches[argsIndex] = indexOf === basicIndexOf &&
                  (value ? value.length : 0) >= largeArraySize &&
                  createCache(argsIndex ? args[argsIndex] : seen);
            }
            outer:
                while (++index < length) {
                    var cache = caches[0];
                    value = array[index];

                    if ((cache ? cacheIndexOf(cache, value) : indexOf(seen, value)) < 0) {
                        argsIndex = argsLength;
                        (cache || seen).push(value);
                        while (--argsIndex) {
                            cache = caches[argsIndex];
                            if ((cache ? cacheIndexOf(cache, value) : indexOf(args[argsIndex], value)) < 0) {
                                continue outer;
                            }
                        }
                        result.push(value);
                    }
                }
            while (argsLength--) {
                cache = caches[argsLength];
                if (cache) {
                    releaseObject(cache);
                }
            }
            releaseArray(caches);
            releaseArray(seen);
            return result;
        }

        /**
         * Gets the last element of the `array`. If a number `n` is passed, the
         * last `n` elements of the `array` are returned. If a `callback` function
         * is passed, elements at the end of the array are returned as long as the
         * `callback` returns truthy. The `callback` is bound to `thisArg` and
         * invoked with three arguments;(value, index, array).
         *
         *
         * If a property name is passed for `callback`, the created "_.pluck" style
         * callback will return the property value of the given element.
         *
         * If an object is passed for `callback`, the created "_.where" style callback
         * will return `true` for elements that have the properties of the given object,
         * else `false`.
         *
         * @static
         * @memberOf _
         * @category Arrays
         * @param {Array} array The array to query.
         * @param {Function|Object|Number|String} [callback|n] The function called
         *  per element or the number of elements to return. If a property name or
         *  object is passed, it will be used to create a "_.pluck" or "_.where"
         *  style callback, respectively.
         * @param {Mixed} [thisArg] The `this` binding of `callback`.
         * @returns {Mixed} Returns the last element(s) of `array`.
         * @example
         *
         * _.last([1, 2, 3]);
         * // => 3
         *
         * _.last([1, 2, 3], 2);
         * // => [2, 3]
         *
         * _.last([1, 2, 3], function(num) {
         *   return num > 1;
         * });
         * // => [2, 3]
         *
         * var food = [
         *   { 'name': 'beet',   'organic': false },
         *   { 'name': 'carrot', 'organic': true }
         * ];
         *
         * // using "_.pluck" callback shorthand
         * _.last(food, 'organic');
         * // => [{ 'name': 'carrot', 'organic': true }]
         *
         * var food = [
         *   { 'name': 'banana', 'type': 'fruit' },
         *   { 'name': 'beet',   'type': 'vegetable' },
         *   { 'name': 'carrot', 'type': 'vegetable' }
         * ];
         *
         * // using "_.where" callback shorthand
         * _.last(food, { 'type': 'vegetable' });
         * // => [{ 'name': 'beet', 'type': 'vegetable' }, { 'name': 'carrot', 'type': 'vegetable' }]
         */
        function last(array, callback, thisArg) {
            if (array) {
                var n = 0,
                    length = array.length;

                if (typeof callback != 'number' && callback != null) {
                    var index = length;
                    callback = lodash.createCallback(callback, thisArg);
                    while (index-- && callback(array[index], index, array)) {
                        n++;
                    }
                } else {
                    n = callback;
                    if (n == null || thisArg) {
                        return array[length - 1];
                    }
                }
                return slice(array, nativeMax(0, length - n));
            }
        }

        /**
         * Gets the index at which the last occurrence of `value` is found using strict
         * equality for comparisons, i.e. `===`. If `fromIndex` is negative, it is used
         * as the offset from the end of the collection.
         *
         * @static
         * @memberOf _
         * @category Arrays
         * @param {Array} array The array to search.
         * @param {Mixed} value The value to search for.
         * @param {Number} [fromIndex=array.length-1] The index to search from.
         * @returns {Number} Returns the index of the matched value or `-1`.
         * @example
         *
         * _.lastIndexOf([1, 2, 3, 1, 2, 3], 2);
         * // => 4
         *
         * _.lastIndexOf([1, 2, 3, 1, 2, 3], 2, 3);
         * // => 1
         */
        function lastIndexOf(array, value, fromIndex) {
            var index = array ? array.length : 0;
            if (typeof fromIndex == 'number') {
                index = (fromIndex < 0 ? nativeMax(0, index + fromIndex) : nativeMin(fromIndex, index - 1)) + 1;
            }
            while (index--) {
                if (array[index] === value) {
                    return index;
                }
            }
            return -1;
        }

        /**
         * Creates an array of numbers (positive and/or negative) progressing from
         * `start` up to but not including `end`.
         *
         * @static
         * @memberOf _
         * @category Arrays
         * @param {Number} [start=0] The start of the range.
         * @param {Number} end The end of the range.
         * @param {Number} [step=1] The value to increment or decrement by.
         * @returns {Array} Returns a new range array.
         * @example
         *
         * _.range(10);
         * // => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
         *
         * _.range(1, 11);
         * // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
         *
         * _.range(0, 30, 5);
         * // => [0, 5, 10, 15, 20, 25]
         *
         * _.range(0, -10, -1);
         * // => [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
         *
         * _.range(0);
         * // => []
         */
        function range(start, end, step) {
            start = +start || 0;
            step = +step || 1;

            if (end == null) {
                end = start;
                start = 0;
            }
            // use `Array(length)` so V8 will avoid the slower "dictionary" mode
            // http://youtu.be/XAqIpGU8ZZk#t=17m25s
            var index = -1,
                length = nativeMax(0, ceil((end - start) / step)),
                result = Array(length);

            while (++index < length) {
                result[index] = start;
                start += step;
            }
            return result;
        }

        /**
         * The opposite of `_.initial`, this method gets all but the first value of
         * `array`. If a number `n` is passed, the first `n` values are excluded from
         * the result. If a `callback` function is passed, elements at the beginning
         * of the array are excluded from the result as long as the `callback` returns
         * truthy. The `callback` is bound to `thisArg` and invoked with three
         * arguments; (value, index, array).
         *
         * If a property name is passed for `callback`, the created "_.pluck" style
         * callback will return the property value of the given element.
         *
         * If an object is passed for `callback`, the created "_.where" style callback
         * will return `true` for elements that have the properties of the given object,
         * else `false`.
         *
         * @static
         * @memberOf _
         * @alias drop, tail
         * @category Arrays
         * @param {Array} array The array to query.
         * @param {Function|Object|Number|String} [callback|n=1] The function called
         *  per element or the number of elements to exclude. If a property name or
         *  object is passed, it will be used to create a "_.pluck" or "_.where"
         *  style callback, respectively.
         * @param {Mixed} [thisArg] The `this` binding of `callback`.
         * @returns {Array} Returns a slice of `array`.
         * @example
         *
         * _.rest([1, 2, 3]);
         * // => [2, 3]
         *
         * _.rest([1, 2, 3], 2);
         * // => [3]
         *
         * _.rest([1, 2, 3], function(num) {
         *   return num < 3;
         * });
         * // => [3]
         *
         * var food = [
         *   { 'name': 'banana', 'organic': true },
         *   { 'name': 'beet',   'organic': false },
         * ];
         *
         * // using "_.pluck" callback shorthand
         * _.rest(food, 'organic');
         * // => [{ 'name': 'beet', 'organic': false }]
         *
         * var food = [
         *   { 'name': 'apple',  'type': 'fruit' },
         *   { 'name': 'banana', 'type': 'fruit' },
         *   { 'name': 'beet',   'type': 'vegetable' }
         * ];
         *
         * // using "_.where" callback shorthand
         * _.rest(food, { 'type': 'fruit' });
         * // => [{ 'name': 'beet', 'type': 'vegetable' }]
         */
        function rest(array, callback, thisArg) {
            if (typeof callback != 'number' && callback != null) {
                var n = 0,
                    index = -1,
                    length = array ? array.length : 0;

                callback = lodash.createCallback(callback, thisArg);
                while (++index < length && callback(array[index], index, array)) {
                    n++;
                }
            } else {
                n = (callback == null || thisArg) ? 1 : nativeMax(0, callback);
            }
            return slice(array, n);
        }

        /**
         * Uses a binary search to determine the smallest index at which the `value`
         * should be inserted into `array` in order to maintain the sort order of the
         * sorted `array`. If `callback` is passed, it will be executed for `value` and
         * each element in `array` to compute their sort ranking. The `callback` is
         * bound to `thisArg` and invoked with one argument; (value).
         *
         * If a property name is passed for `callback`, the created "_.pluck" style
         * callback will return the property value of the given element.
         *
         * If an object is passed for `callback`, the created "_.where" style callback
         * will return `true` for elements that have the properties of the given object,
         * else `false`.
         *
         * @static
         * @memberOf _
         * @category Arrays
         * @param {Array} array The array to inspect.
         * @param {Mixed} value The value to evaluate.
         * @param {Function|Object|String} [callback=identity] The function called per
         *  iteration. If a property name or object is passed, it will be used to create
         *  a "_.pluck" or "_.where" style callback, respectively.
         * @param {Mixed} [thisArg] The `this` binding of `callback`.
         * @returns {Number} Returns the index at which the value should be inserted
         *  into `array`.
         * @example
         *
         * _.sortedIndex([20, 30, 50], 40);
         * // => 2
         *
         * // using "_.pluck" callback shorthand
         * _.sortedIndex([{ 'x': 20 }, { 'x': 30 }, { 'x': 50 }], { 'x': 40 }, 'x');
         * // => 2
         *
         * var dict = {
         *   'wordToNumber': { 'twenty': 20, 'thirty': 30, 'fourty': 40, 'fifty': 50 }
         * };
         *
         * _.sortedIndex(['twenty', 'thirty', 'fifty'], 'fourty', function(word) {
         *   return dict.wordToNumber[word];
         * });
         * // => 2
         *
         * _.sortedIndex(['twenty', 'thirty', 'fifty'], 'fourty', function(word) {
         *   return this.wordToNumber[word];
         * }, dict);
         * // => 2
         */
        function sortedIndex(array, value, callback, thisArg) {
            var low = 0,
                high = array ? array.length : low;

            // explicitly reference `identity` for better inlining in Firefox
            callback = callback ? lodash.createCallback(callback, thisArg, 1) : identity;
            value = callback(value);

            while (low < high) {
                var mid = (low + high) >>> 1;
                (callback(array[mid]) < value)
                  ? low = mid + 1
                  : high = mid;
            }
            return low;
        }

        /**
         * Computes the union of the passed-in arrays using strict equality for
         * comparisons, i.e. `===`.
         *
         * @static
         * @memberOf _
         * @category Arrays
         * @param {Array} [array1, array2, ...] Arrays to process.
         * @returns {Array} Returns a new array of unique values, in order, that are
         *  present in one or more of the arrays.
         * @example
         *
         * _.union([1, 2, 3], [101, 2, 1, 10], [2, 1]);
         * // => [1, 2, 3, 101, 10]
         */
        function union(array) {
            if (!isArray(array)) {
                arguments[0] = array ? nativeSlice.call(array) : arrayRef;
            }
            return uniq(concat.apply(arrayRef, arguments));
        }

        /**
         * Creates a duplicate-value-free version of the `array` using strict equality
         * for comparisons, i.e. `===`. If the `array` is already sorted, passing `true`
         * for `isSorted` will run a faster algorithm. If `callback` is passed, each
         * element of `array` is passed through the `callback` before uniqueness is computed.
         * The `callback` is bound to `thisArg` and invoked with three arguments; (value, index, array).
         *
         * If a property name is passed for `callback`, the created "_.pluck" style
         * callback will return the property value of the given element.
         *
         * If an object is passed for `callback`, the created "_.where" style callback
         * will return `true` for elements that have the properties of the given object,
         * else `false`.
         *
         * @static
         * @memberOf _
         * @alias unique
         * @category Arrays
         * @param {Array} array The array to process.
         * @param {Boolean} [isSorted=false] A flag to indicate that the `array` is already sorted.
         * @param {Function|Object|String} [callback=identity] The function called per
         *  iteration. If a property name or object is passed, it will be used to create
         *  a "_.pluck" or "_.where" style callback, respectively.
         * @param {Mixed} [thisArg] The `this` binding of `callback`.
         * @returns {Array} Returns a duplicate-value-free array.
         * @example
         *
         * _.uniq([1, 2, 1, 3, 1]);
         * // => [1, 2, 3]
         *
         * _.uniq([1, 1, 2, 2, 3], true);
         * // => [1, 2, 3]
         *
         * _.uniq(['A', 'b', 'C', 'a', 'B', 'c'], function(letter) { return letter.toLowerCase(); });
         * // => ['A', 'b', 'C']
         *
         * _.uniq([1, 2.5, 3, 1.5, 2, 3.5], function(num) { return this.floor(num); }, Math);
         * // => [1, 2.5, 3]
         *
         * // using "_.pluck" callback shorthand
         * _.uniq([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
         * // => [{ 'x': 1 }, { 'x': 2 }]
         */
        var uniq = overloadWrapper(function (array, isSorted, callback) {
            var index = -1,
                indexOf = getIndexOf(),
                length = array ? array.length : 0,
                result = [];

            var isLarge = !isSorted && length >= largeArraySize && indexOf === basicIndexOf,
                seen = (callback || isLarge) ? getArray() : result;

            if (isLarge) {
                var cache = createCache(seen);
                if (cache) {
                    indexOf = cacheIndexOf;
                    seen = cache;
                } else {
                    isLarge = false;
                    seen = callback ? seen : (releaseArray(seen), result);
                }
            }
            while (++index < length) {
                var value = array[index],
                    computed = callback ? callback(value, index, array) : value;

                if (isSorted
                      ? !index || seen[seen.length - 1] !== computed
                      : indexOf(seen, computed) < 0
                    ) {
                    if (callback || isLarge) {
                        seen.push(computed);
                    }
                    result.push(value);
                }
            }
            if (isLarge) {
                releaseArray(seen.array);
                releaseObject(seen);
            } else if (callback) {
                releaseArray(seen);
            }
            return result;
        });

        /**
         * The inverse of `_.zip`, this method splits groups of elements into arrays
         * composed of elements from each group at their corresponding indexes.
         *
         * @static
         * @memberOf _
         * @category Arrays
         * @param {Array} array The array to process.
         * @returns {Array} Returns a new array of the composed arrays.
         * @example
         *
         * _.unzip([['moe', 30, true], ['larry', 40, false]]);
         * // => [['moe', 'larry'], [30, 40], [true, false]];
         */
        function unzip(array) {
            var index = -1,
                length = array ? max(pluck(array, 'length')) : 0,
                result = Array(length < 0 ? 0 : length);

            while (++index < length) {
                result[index] = pluck(array, index);
            }
            return result;
        }

        /**
         * Creates an array with all occurrences of the passed values removed using
         * strict equality for comparisons, i.e. `===`.
         *
         * @static
         * @memberOf _
         * @category Arrays
         * @param {Array} array The array to filter.
         * @param {Mixed} [value1, value2, ...] Values to remove.
         * @returns {Array} Returns a new filtered array.
         * @example
         *
         * _.without([1, 2, 1, 0, 3, 1, 4], 0, 1);
         * // => [2, 3, 4]
         */
        function without(array) {
            return difference(array, nativeSlice.call(arguments, 1));
        }

        /**
         * Groups the elements of each array at their corresponding indexes. Useful for
         * separate data sources that are coordinated through matching array indexes.
         * For a matrix of nested arrays, `_.zip.apply(...)` can transpose the matrix
         * in a similar fashion.
         *
         * @static
         * @memberOf _
         * @category Arrays
         * @param {Array} [array1, array2, ...] Arrays to process.
         * @returns {Array} Returns a new array of grouped elements.
         * @example
         *
         * _.zip(['moe', 'larry'], [30, 40], [true, false]);
         * // => [['moe', 30, true], ['larry', 40, false]]
         */
        function zip(array) {
            return array ? unzip(arguments) : [];
        }

        /**
         * Creates an object composed from arrays of `keys` and `values`. Pass either
         * a single two dimensional array, i.e. `[[key1, value1], [key2, value2]]`, or
         * two arrays, one of `keys` and one of corresponding `values`.
         *
         * @static
         * @memberOf _
         * @alias object
         * @category Arrays
         * @param {Array} keys The array of keys.
         * @param {Array} [values=[]] The array of values.
         * @returns {Object} Returns an object composed of the given keys and
         *  corresponding values.
         * @example
         *
         * _.zipObject(['moe', 'larry'], [30, 40]);
         * // => { 'moe': 30, 'larry': 40 }
         */
        function zipObject(keys, values) {
            var index = -1,
                length = keys ? keys.length : 0,
                result = {};

            while (++index < length) {
                var key = keys[index];
                if (values) {
                    result[key] = values[index];
                } else {
                    result[key[0]] = key[1];
                }
            }
            return result;
        }

        /*--------------------------------------------------------------------------*/

        /**
         * If `n` is greater than `0`, a function is created that is restricted to
         * executing `func`, with the `this` binding and arguments of the created
         * function, only after it is called `n` times. If `n` is less than `1`,
         * `func` is executed immediately, without a `this` binding or additional
         * arguments, and its result is returned.
         *
         * @static
         * @memberOf _
         * @category Functions
         * @param {Number} n The number of times the function must be called before
         * it is executed.
         * @param {Function} func The function to restrict.
         * @returns {Function} Returns the new restricted function.
         * @example
         *
         * var renderNotes = _.after(notes.length, render);
         * _.forEach(notes, function(note) {
         *   note.asyncSave({ 'success': renderNotes });
         * });
         * // `renderNotes` is run once, after all notes have saved
         */
        function after(n, func) {
            if (n < 1) {
                return func();
            }
            return function () {
                if (--n < 1) {
                    return func.apply(this, arguments);
                }
            };
        }

        /**
         * Creates a function that, when called, invokes `func` with the `this`
         * binding of `thisArg` and prepends any additional `bind` arguments to those
         * passed to the bound function.
         *
         * @static
         * @memberOf _
         * @category Functions
         * @param {Function} func The function to bind.
         * @param {Mixed} [thisArg] The `this` binding of `func`.
         * @param {Mixed} [arg1, arg2, ...] Arguments to be partially applied.
         * @returns {Function} Returns the new bound function.
         * @example
         *
         * var func = function(greeting) {
         *   return greeting + ' ' + this.name;
         * };
         *
         * func = _.bind(func, { 'name': 'moe' }, 'hi');
         * func();
         * // => 'hi moe'
         */
        function bind(func, thisArg) {
            // use `Function#bind` if it exists and is fast
            // (in V8 `Function#bind` is slower except when partially applied)
            return support.fastBind || (nativeBind && arguments.length > 2)
              ? nativeBind.call.apply(nativeBind, arguments)
              : createBound(func, thisArg, nativeSlice.call(arguments, 2));
        }

        /**
         * Binds methods on `object` to `object`, overwriting the existing method.
         * Method names may be specified as individual arguments or as arrays of method
         * names. If no method names are provided, all the function properties of `object`
         * will be bound.
         *
         * @static
         * @memberOf _
         * @category Functions
         * @param {Object} object The object to bind and assign the bound methods to.
         * @param {String} [methodName1, methodName2, ...] Method names on the object to bind.
         * @returns {Object} Returns `object`.
         * @example
         *
         * var view = {
         *  'label': 'docs',
         *  'onClick': function() { alert('clicked ' + this.label); }
         * };
         *
         * _.bindAll(view);
         * jQuery('#docs').on('click', view.onClick);
         * // => alerts 'clicked docs', when the button is clicked
         */
        function bindAll(object) {
            var funcs = arguments.length > 1 ? concat.apply(arrayRef, nativeSlice.call(arguments, 1)) : functions(object),
                index = -1,
                length = funcs.length;

            while (++index < length) {
                var key = funcs[index];
                object[key] = bind(object[key], object);
            }
            return object;
        }

        /**
         * Creates a function that, when called, invokes the method at `object[key]`
         * and prepends any additional `bindKey` arguments to those passed to the bound
         * function. This method differs from `_.bind` by allowing bound functions to
         * reference methods that will be redefined or don't yet exist.
         * See http://michaux.ca/articles/lazy-function-definition-pattern.
         *
         * @static
         * @memberOf _
         * @category Functions
         * @param {Object} object The object the method belongs to.
         * @param {String} key The key of the method.
         * @param {Mixed} [arg1, arg2, ...] Arguments to be partially applied.
         * @returns {Function} Returns the new bound function.
         * @example
         *
         * var object = {
         *   'name': 'moe',
         *   'greet': function(greeting) {
         *     return greeting + ' ' + this.name;
         *   }
         * };
         *
         * var func = _.bindKey(object, 'greet', 'hi');
         * func();
         * // => 'hi moe'
         *
         * object.greet = function(greeting) {
         *   return greeting + ', ' + this.name + '!';
         * };
         *
         * func();
         * // => 'hi, moe!'
         */
        function bindKey(object, key) {
            return createBound(object, key, nativeSlice.call(arguments, 2), indicatorObject);
        }

        /**
         * Creates a function that is the composition of the passed functions,
         * where each function consumes the return value of the function that follows.
         * For example, composing the functions `f()`, `g()`, and `h()` produces `f(g(h()))`.
         * Each function is executed with the `this` binding of the composed function.
         *
         * @static
         * @memberOf _
         * @category Functions
         * @param {Function} [func1, func2, ...] Functions to compose.
         * @returns {Function} Returns the new composed function.
         * @example
         *
         * var greet = function(name) { return 'hi ' + name; };
         * var exclaim = function(statement) { return statement + '!'; };
         * var welcome = _.compose(exclaim, greet);
         * welcome('moe');
         * // => 'hi moe!'
         */
        function compose() {
            var funcs = arguments;
            return function () {
                var args = arguments,
                    length = funcs.length;

                while (length--) {
                    args = [funcs[length].apply(this, args)];
                }
                return args[0];
            };
        }

        /**
         * Produces a callback bound to an optional `thisArg`. If `func` is a property
         * name, the created callback will return the property value for a given element.
         * If `func` is an object, the created callback will return `true` for elements
         * that contain the equivalent object properties, otherwise it will return `false`.
         *
         * Note: All Lo-Dash methods, that accept a `callback` argument, use `_.createCallback`.
         *
         * @static
         * @memberOf _
         * @category Functions
         * @param {Mixed} [func=identity] The value to convert to a callback.
         * @param {Mixed} [thisArg] The `this` binding of the created callback.
         * @param {Number} [argCount=3] The number of arguments the callback accepts.
         * @returns {Function} Returns a callback function.
         * @example
         *
         * var stooges = [
         *   { 'name': 'moe', 'age': 40 },
         *   { 'name': 'larry', 'age': 50 }
         * ];
         *
         * // wrap to create custom callback shorthands
         * _.createCallback = _.wrap(_.createCallback, function(func, callback, thisArg) {
         *   var match = /^(.+?)__([gl]t)(.+)$/.exec(callback);
         *   return !match ? func(callback, thisArg) : function(object) {
         *     return match[2] == 'gt' ? object[match[1]] > match[3] : object[match[1]] < match[3];
         *   };
         * });
         *
         * _.filter(stooges, 'age__gt45');
         * // => [{ 'name': 'larry', 'age': 50 }]
         *
         * // create mixins with support for "_.pluck" and "_.where" callback shorthands
         * _.mixin({
         *   'toLookup': function(collection, callback, thisArg) {
         *     callback = _.createCallback(callback, thisArg);
         *     return _.reduce(collection, function(result, value, index, collection) {
         *       return (result[callback(value, index, collection)] = value, result);
         *     }, {});
         *   }
         * });
         *
         * _.toLookup(stooges, 'name');
         * // => { 'moe': { 'name': 'moe', 'age': 40 }, 'larry': { 'name': 'larry', 'age': 50 } }
         */
        function createCallback(func, thisArg, argCount) {
            if (func == null) {
                return identity;
            }
            var type = typeof func;
            if (type != 'function') {
                if (type != 'object') {
                    return function (object) {
                        return object[func];
                    };
                }
                var props = keys(func);
                return function (object) {
                    var length = props.length,
                        result = false;
                    while (length--) {
                        if (!(result = isEqual(object[props[length]], func[props[length]], indicatorObject))) {
                            break;
                        }
                    }
                    return result;
                };
            }
            if (typeof thisArg == 'undefined' || (reThis && !reThis.test(fnToString.call(func)))) {
                return func;
            }
            if (argCount === 1) {
                return function (value) {
                    return func.call(thisArg, value);
                };
            }
            if (argCount === 2) {
                return function (a, b) {
                    return func.call(thisArg, a, b);
                };
            }
            if (argCount === 4) {
                return function (accumulator, value, index, collection) {
                    return func.call(thisArg, accumulator, value, index, collection);
                };
            }
            return function (value, index, collection) {
                return func.call(thisArg, value, index, collection);
            };
        }

        /**
         * Creates a function that will delay the execution of `func` until after
         * `wait` milliseconds have elapsed since the last time it was invoked. Pass
         * an `options` object to indicate that `func` should be invoked on the leading
         * and/or trailing edge of the `wait` timeout. Subsequent calls to the debounced
         * function will return the result of the last `func` call.
         *
         * Note: If `leading` and `trailing` options are `true`, `func` will be called
         * on the trailing edge of the timeout only if the the debounced function is
         * invoked more than once during the `wait` timeout.
         *
         * @static
         * @memberOf _
         * @category Functions
         * @param {Function} func The function to debounce.
         * @param {Number} wait The number of milliseconds to delay.
         * @param {Object} options The options object.
         *  [leading=false] A boolean to specify execution on the leading edge of the timeout.
         *  [maxWait] The maximum time `func` is allowed to be delayed before it's called.
         *  [trailing=true] A boolean to specify execution on the trailing edge of the timeout.
         * @returns {Function} Returns the new debounced function.
         * @example
         *
         * var lazyLayout = _.debounce(calculateLayout, 300);
         * jQuery(window).on('resize', lazyLayout);
         *
         * jQuery('#postbox').on('click', _.debounce(sendMail, 200, {
         *   'leading': true,
         *   'trailing': false
         * });
         */
        function debounce(func, wait, options) {
            var args,
                result,
                thisArg,
                callCount = 0,
                lastCalled = 0,
                maxWait = false,
                maxTimeoutId = null,
                timeoutId = null,
                trailing = true;

            function clear() {
                clearTimeout(maxTimeoutId);
                clearTimeout(timeoutId);
                callCount = 0;
                maxTimeoutId = timeoutId = null;
            }

            function delayed() {
                var isCalled = trailing && (!leading || callCount > 1);
                clear();
                if (isCalled) {
                    if (maxWait !== false) {
                        lastCalled = new Date;
                    }
                    result = func.apply(thisArg, args);
                }
            }

            function maxDelayed() {
                clear();
                if (trailing || (maxWait !== wait)) {
                    lastCalled = new Date;
                    result = func.apply(thisArg, args);
                }
            }

            wait = nativeMax(0, wait || 0);
            if (options === true) {
                var leading = true;
                trailing = false;
            } else if (isObject(options)) {
                leading = options.leading;
                maxWait = 'maxWait' in options && nativeMax(wait, options.maxWait || 0);
                trailing = 'trailing' in options ? options.trailing : trailing;
            }
            return function () {
                args = arguments;
                thisArg = this;
                callCount++;

                // avoid issues with Titanium and `undefined` timeout ids
                // https://github.com/appcelerator/titanium_mobile/blob/3_1_0_GA/android/titanium/src/java/ti/modules/titanium/TitaniumModule.java#L185-L192
                clearTimeout(timeoutId);

                if (maxWait === false) {
                    if (leading && callCount < 2) {
                        result = func.apply(thisArg, args);
                    }
                } else {
                    var now = new Date;
                    if (!maxTimeoutId && !leading) {
                        lastCalled = now;
                    }
                    var remaining = maxWait - (now - lastCalled);
                    if (remaining <= 0) {
                        clearTimeout(maxTimeoutId);
                        maxTimeoutId = null;
                        lastCalled = now;
                        result = func.apply(thisArg, args);
                    }
                    else if (!maxTimeoutId) {
                        maxTimeoutId = setTimeout(maxDelayed, remaining);
                    }
                }
                if (wait !== maxWait) {
                    timeoutId = setTimeout(delayed, wait);
                }
                return result;
            };
        }

        /**
         * Defers executing the `func` function until the current call stack has cleared.
         * Additional arguments will be passed to `func` when it is invoked.
         *
         * @static
         * @memberOf _
         * @category Functions
         * @param {Function} func The function to defer.
         * @param {Mixed} [arg1, arg2, ...] Arguments to invoke the function with.
         * @returns {Number} Returns the timer id.
         * @example
         *
         * _.defer(function() { alert('deferred'); });
         * // returns from the function before `alert` is called
         */
        function defer(func) {
            var args = nativeSlice.call(arguments, 1);
            return setTimeout(function () { func.apply(undefined, args); }, 1);
        }
        // use `setImmediate` if it's available in Node.js
        if (isV8 && freeModule && typeof setImmediate == 'function') {
            defer = bind(setImmediate, context);
        }

        /**
         * Executes the `func` function after `wait` milliseconds. Additional arguments
         * will be passed to `func` when it is invoked.
         *
         * @static
         * @memberOf _
         * @category Functions
         * @param {Function} func The function to delay.
         * @param {Number} wait The number of milliseconds to delay execution.
         * @param {Mixed} [arg1, arg2, ...] Arguments to invoke the function with.
         * @returns {Number} Returns the timer id.
         * @example
         *
         * var log = _.bind(console.log, console);
         * _.delay(log, 1000, 'logged later');
         * // => 'logged later' (Appears after one second.)
         */
        function delay(func, wait) {
            var args = nativeSlice.call(arguments, 2);
            return setTimeout(function () { func.apply(undefined, args); }, wait);
        }

        /**
         * Creates a function that memoizes the result of `func`. If `resolver` is
         * passed, it will be used to determine the cache key for storing the result
         * based on the arguments passed to the memoized function. By default, the first
         * argument passed to the memoized function is used as the cache key. The `func`
         * is executed with the `this` binding of the memoized function. The result
         * cache is exposed as the `cache` property on the memoized function.
         *
         * @static
         * @memberOf _
         * @category Functions
         * @param {Function} func The function to have its output memoized.
         * @param {Function} [resolver] A function used to resolve the cache key.
         * @returns {Function} Returns the new memoizing function.
         * @example
         *
         * var fibonacci = _.memoize(function(n) {
         *   return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
         * });
         */
        function memoize(func, resolver) {
            function memoized() {
                var cache = memoized.cache,
                    key = keyPrefix + (resolver ? resolver.apply(this, arguments) : arguments[0]);

                return hasOwnProperty.call(cache, key)
                  ? cache[key]
                  : (cache[key] = func.apply(this, arguments));
            }
            memoized.cache = {};
            return memoized;
        }

        /**
         * Creates a function that is restricted to execute `func` once. Repeat calls to
         * the function will return the value of the first call. The `func` is executed
         * with the `this` binding of the created function.
         *
         * @static
         * @memberOf _
         * @category Functions
         * @param {Function} func The function to restrict.
         * @returns {Function} Returns the new restricted function.
         * @example
         *
         * var initialize = _.once(createApplication);
         * initialize();
         * initialize();
         * // `initialize` executes `createApplication` once
         */
        function once(func) {
            var ran,
                result;

            return function () {
                if (ran) {
                    return result;
                }
                ran = true;
                result = func.apply(this, arguments);

                // clear the `func` variable so the function may be garbage collected
                func = null;
                return result;
            };
        }

        /**
         * Creates a function that, when called, invokes `func` with any additional
         * `partial` arguments prepended to those passed to the new function. This
         * method is similar to `_.bind`, except it does **not** alter the `this` binding.
         *
         * @static
         * @memberOf _
         * @category Functions
         * @param {Function} func The function to partially apply arguments to.
         * @param {Mixed} [arg1, arg2, ...] Arguments to be partially applied.
         * @returns {Function} Returns the new partially applied function.
         * @example
         *
         * var greet = function(greeting, name) { return greeting + ' ' + name; };
         * var hi = _.partial(greet, 'hi');
         * hi('moe');
         * // => 'hi moe'
         */
        function partial(func) {
            return createBound(func, nativeSlice.call(arguments, 1));
        }

        /**
         * This method is similar to `_.partial`, except that `partial` arguments are
         * appended to those passed to the new function.
         *
         * @static
         * @memberOf _
         * @category Functions
         * @param {Function} func The function to partially apply arguments to.
         * @param {Mixed} [arg1, arg2, ...] Arguments to be partially applied.
         * @returns {Function} Returns the new partially applied function.
         * @example
         *
         * var defaultsDeep = _.partialRight(_.merge, _.defaults);
         *
         * var options = {
         *   'variable': 'data',
         *   'imports': { 'jq': $ }
         * };
         *
         * defaultsDeep(options, _.templateSettings);
         *
         * options.variable
         * // => 'data'
         *
         * options.imports
         * // => { '_': _, 'jq': $ }
         */
        function partialRight(func) {
            return createBound(func, nativeSlice.call(arguments, 1), null, indicatorObject);
        }

        /**
         * Creates a function that, when executed, will only call the `func` function
         * at most once per every `wait` milliseconds. Pass an `options` object to
         * indicate that `func` should be invoked on the leading and/or trailing edge
         * of the `wait` timeout. Subsequent calls to the throttled function will
         * return the result of the last `func` call.
         *
         * Note: If `leading` and `trailing` options are `true`, `func` will be called
         * on the trailing edge of the timeout only if the the throttled function is
         * invoked more than once during the `wait` timeout.
         *
         * @static
         * @memberOf _
         * @category Functions
         * @param {Function} func The function to throttle.
         * @param {Number} wait The number of milliseconds to throttle executions to.
         * @param {Object} options The options object.
         *  [leading=true] A boolean to specify execution on the leading edge of the timeout.
         *  [trailing=true] A boolean to specify execution on the trailing edge of the timeout.
         * @returns {Function} Returns the new throttled function.
         * @example
         *
         * var throttled = _.throttle(updatePosition, 100);
         * jQuery(window).on('scroll', throttled);
         *
         * jQuery('.interactive').on('click', _.throttle(renewToken, 300000, {
         *   'trailing': false
         * }));
         */
        function throttle(func, wait, options) {
            var leading = true,
                trailing = true;

            if (options === false) {
                leading = false;
            } else if (isObject(options)) {
                leading = 'leading' in options ? options.leading : leading;
                trailing = 'trailing' in options ? options.trailing : trailing;
            }
            options = getObject();
            options.leading = leading;
            options.maxWait = wait;
            options.trailing = trailing;

            var result = debounce(func, wait, options);
            releaseObject(options);
            return result;
        }

        /**
         * Creates a function that passes `value` to the `wrapper` function as its
         * first argument. Additional arguments passed to the function are appended
         * to those passed to the `wrapper` function. The `wrapper` is executed with
         * the `this` binding of the created function.
         *
         * @static
         * @memberOf _
         * @category Functions
         * @param {Mixed} value The value to wrap.
         * @param {Function} wrapper The wrapper function.
         * @returns {Function} Returns the new function.
         * @example
         *
         * var hello = function(name) { return 'hello ' + name; };
         * hello = _.wrap(hello, function(func) {
         *   return 'before, ' + func('moe') + ', after';
         * });
         * hello();
         * // => 'before, hello moe, after'
         */
        function wrap(value, wrapper) {
            return function () {
                var args = [value];
                push.apply(args, arguments);
                return wrapper.apply(this, args);
            };
        }

        /*--------------------------------------------------------------------------*/

        /**
         * Converts the characters `&`, `<`, `>`, `"`, and `'` in `string` to their
         * corresponding HTML entities.
         *
         * @static
         * @memberOf _
         * @category Utilities
         * @param {String} string The string to escape.
         * @returns {String} Returns the escaped string.
         * @example
         *
         * _.escape('Moe, Larry & Curly');
         * // => 'Moe, Larry &amp; Curly'
         */
        function escape(string) {
            return string == null ? '' : String(string).replace(reUnescapedHtml, escapeHtmlChar);
        }

        /**
         * This method returns the first argument passed to it.
         *
         * @static
         * @memberOf _
         * @category Utilities
         * @param {Mixed} value Any value.
         * @returns {Mixed} Returns `value`.
         * @example
         *
         * var moe = { 'name': 'moe' };
         * moe === _.identity(moe);
         * // => true
         */
        function identity(value) {
            return value;
        }

        /**
         * Adds functions properties of `object` to the `lodash` function and chainable
         * wrapper.
         *
         * @static
         * @memberOf _
         * @category Utilities
         * @param {Object} object The object of function properties to add to `lodash`.
         * @example
         *
         * _.mixin({
         *   'capitalize': function(string) {
         *     return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
         *   }
         * });
         *
         * _.capitalize('moe');
         * // => 'Moe'
         *
         * _('moe').capitalize();
         * // => 'Moe'
         */
        function mixin(object) {
            forEach(functions(object), function (methodName) {
                var func = lodash[methodName] = object[methodName];

                lodash.prototype[methodName] = function () {
                    var value = this.__wrapped__,
                        args = [value];

                    push.apply(args, arguments);
                    var result = func.apply(lodash, args);
                    return (value && typeof value == 'object' && value === result)
                      ? this
                      : new lodashWrapper(result);
                };
            });
        }

        /**
         * Reverts the '_' variable to its previous value and returns a reference to
         * the `lodash` function.
         *
         * @static
         * @memberOf _
         * @category Utilities
         * @returns {Function} Returns the `lodash` function.
         * @example
         *
         * var lodash = _.noConflict();
         */
        function noConflict() {
            context._ = oldDash;
            return this;
        }

        /**
         * Converts the given `value` into an integer of the specified `radix`.
         * If `radix` is `undefined` or `0`, a `radix` of `10` is used unless the
         * `value` is a hexadecimal, in which case a `radix` of `16` is used.
         *
         * Note: This method avoids differences in native ES3 and ES5 `parseInt`
         * implementations. See http://es5.github.com/#E.
         *
         * @static
         * @memberOf _
         * @category Utilities
         * @param {String} value The value to parse.
         * @param {Number} [radix] The radix used to interpret the value to parse.
         * @returns {Number} Returns the new integer value.
         * @example
         *
         * _.parseInt('08');
         * // => 8
         */
        var parseInt = nativeParseInt(whitespace + '08') == 8 ? nativeParseInt : function (value, radix) {
            // Firefox and Opera still follow the ES3 specified implementation of `parseInt`
            return nativeParseInt(isString(value) ? value.replace(reLeadingSpacesAndZeros, '') : value, radix || 0);
        };

        /**
         * Produces a random number between `min` and `max` (inclusive). If only one
         * argument is passed, a number between `0` and the given number will be returned.
         *
         * @static
         * @memberOf _
         * @category Utilities
         * @param {Number} [min=0] The minimum possible value.
         * @param {Number} [max=1] The maximum possible value.
         * @returns {Number} Returns a random number.
         * @example
         *
         * _.random(0, 5);
         * // => a number between 0 and 5
         *
         * _.random(5);
         * // => also a number between 0 and 5
         */
        function random(min, max) {
            if (min == null && max == null) {
                max = 1;
            }
            min = +min || 0;
            if (max == null) {
                max = min;
                min = 0;
            } else {
                max = +max || 0;
            }
            var rand = nativeRandom();
            return (min % 1 || max % 1)
              ? min + nativeMin(rand * (max - min + parseFloat('1e-' + ((rand + '').length - 1))), max)
              : min + floor(rand * (max - min + 1));
        }

        /**
         * Resolves the value of `property` on `object`. If `property` is a function,
         * it will be invoked with the `this` binding of `object` and its result returned,
         * else the property value is returned. If `object` is falsey, then `undefined`
         * is returned.
         *
         * @static
         * @memberOf _
         * @category Utilities
         * @param {Object} object The object to inspect.
         * @param {String} property The property to get the value of.
         * @returns {Mixed} Returns the resolved value.
         * @example
         *
         * var object = {
         *   'cheese': 'crumpets',
         *   'stuff': function() {
         *     return 'nonsense';
         *   }
         * };
         *
         * _.result(object, 'cheese');
         * // => 'crumpets'
         *
         * _.result(object, 'stuff');
         * // => 'nonsense'
         */
        function result(object, property) {
            var value = object ? object[property] : undefined;
            return isFunction(value) ? object[property]() : value;
        }

        /**
         * A micro-templating method that handles arbitrary delimiters, preserves
         * whitespace, and correctly escapes quotes within interpolated code.
         *
         * Note: In the development build, `_.template` utilizes sourceURLs for easier
         * debugging. See http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl
         *
         * For more information on precompiling templates see:
         * http://lodash.com/#custom-builds
         *
         * For more information on Chrome extension sandboxes see:
         * http://developer.chrome.com/stable/extensions/sandboxingEval.html
         *
         * @static
         * @memberOf _
         * @category Utilities
         * @param {String} text The template text.
         * @param {Object} data The data object used to populate the text.
         * @param {Object} options The options object.
         *  escape - The "escape" delimiter regexp.
         *  evaluate - The "evaluate" delimiter regexp.
         *  interpolate - The "interpolate" delimiter regexp.
         *  sourceURL - The sourceURL of the template's compiled source.
         *  variable - The data object variable name.
         * @returns {Function|String} Returns a compiled function when no `data` object
         *  is given, else it returns the interpolated text.
         * @example
         *
         * // using a compiled template
         * var compiled = _.template('hello <%= name %>');
         * compiled({ 'name': 'moe' });
         * // => 'hello moe'
         *
         * var list = '<% _.forEach(people, function(name) { %><li><%= name %></li><% }); %>';
         * _.template(list, { 'people': ['moe', 'larry'] });
         * // => '<li>moe</li><li>larry</li>'
         *
         * // using the "escape" delimiter to escape HTML in data property values
         * _.template('<b><%- value %></b>', { 'value': '<script>' });
         * // => '<b>&lt;script&gt;</b>'
         *
         * // using the ES6 delimiter as an alternative to the default "interpolate" delimiter
         * _.template('hello ${ name }', { 'name': 'curly' });
         * // => 'hello curly'
         *
         * // using the internal `print` function in "evaluate" delimiters
         * _.template('<% print("hello " + epithet); %>!', { 'epithet': 'stooge' });
         * // => 'hello stooge!'
         *
         * // using custom template delimiters
         * _.templateSettings = {
         *   'interpolate': /{{([\s\S]+?)}}/g
         * };
         *
         * _.template('hello {{ name }}!', { 'name': 'mustache' });
         * // => 'hello mustache!'
         *
         * // using the `sourceURL` option to specify a custom sourceURL for the template
         * var compiled = _.template('hello <%= name %>', null, { 'sourceURL': '/basic/greeting.jst' });
         * compiled(data);
         * // => find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector
         *
         * // using the `variable` option to ensure a with-statement isn't used in the compiled template
         * var compiled = _.template('hi <%= data.name %>!', null, { 'variable': 'data' });
         * compiled.source;
         * // => function(data) {
         *   var __t, __p = '', __e = _.escape;
         *   __p += 'hi ' + ((__t = ( data.name )) == null ? '' : __t) + '!';
         *   return __p;
         * }
         *
         * // using the `source` property to inline compiled templates for meaningful
         * // line numbers in error messages and a stack trace
         * fs.writeFileSync(path.join(cwd, 'jst.js'), '\
         *   var JST = {\
         *     "main": ' + _.template(mainText).source + '\
         *   };\
         * ');
         */
        function template(text, data, options) {
            // based on John Resig's `tmpl` implementation
            // http://ejohn.org/blog/javascript-micro-templating/
            // and Laura Doktorova's doT.js
            // https://github.com/olado/doT
            var settings = lodash.templateSettings;
            text || (text = '');

            // avoid missing dependencies when `iteratorTemplate` is not defined
            options = defaults({}, options, settings);

            var imports = defaults({}, options.imports, settings.imports),
                importsKeys = keys(imports),
                importsValues = values(imports);

            var isEvaluating,
                index = 0,
                interpolate = options.interpolate || reNoMatch,
                source = "__p += '";

            // compile the regexp to match each delimiter
            var reDelimiters = RegExp(
              (options.escape || reNoMatch).source + '|' +
              interpolate.source + '|' +
              (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
              (options.evaluate || reNoMatch).source + '|$'
            , 'g');

            text.replace(reDelimiters, function (match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
                interpolateValue || (interpolateValue = esTemplateValue);

                // escape characters that cannot be included in string literals
                source += text.slice(index, offset).replace(reUnescapedString, escapeStringChar);

                // replace delimiters with snippets
                if (escapeValue) {
                    source += "' +\n__e(" + escapeValue + ") +\n'";
                }
                if (evaluateValue) {
                    isEvaluating = true;
                    source += "';\n" + evaluateValue + ";\n__p += '";
                }
                if (interpolateValue) {
                    source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
                }
                index = offset + match.length;

                // the JS engine embedded in Adobe products requires returning the `match`
                // string in order to produce the correct `offset` value
                return match;
            });

            source += "';\n";

            // if `variable` is not specified, wrap a with-statement around the generated
            // code to add the data object to the top of the scope chain
            var variable = options.variable,
                hasVariable = variable;

            if (!hasVariable) {
                variable = 'obj';
                source = 'with (' + variable + ') {\n' + source + '\n}\n';
            }
            // cleanup code by stripping empty strings
            source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
              .replace(reEmptyStringMiddle, '$1')
              .replace(reEmptyStringTrailing, '$1;');

            // frame code as the function body
            source = 'function(' + variable + ') {\n' +
              (hasVariable ? '' : variable + ' || (' + variable + ' = {});\n') +
              "var __t, __p = '', __e = _.escape" +
              (isEvaluating
                ? ', __j = Array.prototype.join;\n' +
                  "function print() { __p += __j.call(arguments, '') }\n"
                : ';\n'
              ) +
              source +
              'return __p\n}';

            // Use a sourceURL for easier debugging and wrap in a multi-line comment to
            // avoid issues with Narwhal, IE conditional compilation, and the JS engine
            // embedded in Adobe products.
            // http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl
            var sourceURL = '\n/*\n//@ sourceURL=' + (options.sourceURL || '/lodash/template/source[' + (templateCounter++) + ']') + '\n*/';

            try {
                var result = Function(importsKeys, 'return ' + source + sourceURL).apply(undefined, importsValues);
            } catch (e) {
                e.source = source;
                throw e;
            }
            if (data) {
                return result(data);
            }
            // provide the compiled function's source via its `toString` method, in
            // supported environments, or the `source` property as a convenience for
            // inlining compiled templates during the build process
            result.source = source;
            return result;
        }

        /**
         * Executes the `callback` function `n` times, returning an array of the results
         * of each `callback` execution. The `callback` is bound to `thisArg` and invoked
         * with one argument; (index).
         *
         * @static
         * @memberOf _
         * @category Utilities
         * @param {Number} n The number of times to execute the callback.
         * @param {Function} callback The function called per iteration.
         * @param {Mixed} [thisArg] The `this` binding of `callback`.
         * @returns {Array} Returns a new array of the results of each `callback` execution.
         * @example
         *
         * var diceRolls = _.times(3, _.partial(_.random, 1, 6));
         * // => [3, 6, 4]
         *
         * _.times(3, function(n) { mage.castSpell(n); });
         * // => calls `mage.castSpell(n)` three times, passing `n` of `0`, `1`, and `2` respectively
         *
         * _.times(3, function(n) { this.cast(n); }, mage);
         * // => also calls `mage.castSpell(n)` three times
         */
        function times(n, callback, thisArg) {
            n = (n = +n) > -1 ? n : 0;
            var index = -1,
                result = Array(n);

            callback = lodash.createCallback(callback, thisArg, 1);
            while (++index < n) {
                result[index] = callback(index);
            }
            return result;
        }

        /**
         * The inverse of `_.escape`, this method converts the HTML entities
         * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to their
         * corresponding characters.
         *
         * @static
         * @memberOf _
         * @category Utilities
         * @param {String} string The string to unescape.
         * @returns {String} Returns the unescaped string.
         * @example
         *
         * _.unescape('Moe, Larry &amp; Curly');
         * // => 'Moe, Larry & Curly'
         */
        function unescape(string) {
            return string == null ? '' : String(string).replace(reEscapedHtml, unescapeHtmlChar);
        }

        /**
         * Generates a unique ID. If `prefix` is passed, the ID will be appended to it.
         *
         * @static
         * @memberOf _
         * @category Utilities
         * @param {String} [prefix] The value to prefix the ID with.
         * @returns {String} Returns the unique ID.
         * @example
         *
         * _.uniqueId('contact_');
         * // => 'contact_104'
         *
         * _.uniqueId();
         * // => '105'
         */
        function uniqueId(prefix) {
            var id = ++idCounter;
            return String(prefix == null ? '' : prefix) + id;
        }

        /*--------------------------------------------------------------------------*/

        /**
         * Invokes `interceptor` with the `value` as the first argument, and then
         * returns `value`. The purpose of this method is to "tap into" a method chain,
         * in order to perform operations on intermediate results within the chain.
         *
         * @static
         * @memberOf _
         * @category Chaining
         * @param {Mixed} value The value to pass to `interceptor`.
         * @param {Function} interceptor The function to invoke.
         * @returns {Mixed} Returns `value`.
         * @example
         *
         * _([1, 2, 3, 4])
         *  .filter(function(num) { return num % 2 == 0; })
         *  .tap(alert)
         *  .map(function(num) { return num * num; })
         *  .value();
         * // => // [2, 4] (alerted)
         * // => [4, 16]
         */
        function tap(value, interceptor) {
            interceptor(value);
            return value;
        }

        /**
         * Produces the `toString` result of the wrapped value.
         *
         * @name toString
         * @memberOf _
         * @category Chaining
         * @returns {String} Returns the string result.
         * @example
         *
         * _([1, 2, 3]).toString();
         * // => '1,2,3'
         */
        function wrapperToString() {
            return String(this.__wrapped__);
        }

        /**
         * Extracts the wrapped value.
         *
         * @name valueOf
         * @memberOf _
         * @alias value
         * @category Chaining
         * @returns {Mixed} Returns the wrapped value.
         * @example
         *
         * _([1, 2, 3]).valueOf();
         * // => [1, 2, 3]
         */
        function wrapperValueOf() {
            return this.__wrapped__;
        }

        /*--------------------------------------------------------------------------*/

        // add functions that return wrapped values when chaining
        lodash.after = after;
        lodash.assign = assign;
        lodash.at = at;
        lodash.bind = bind;
        lodash.bindAll = bindAll;
        lodash.bindKey = bindKey;
        lodash.compact = compact;
        lodash.compose = compose;
        lodash.countBy = countBy;
        lodash.createCallback = createCallback;
        lodash.debounce = debounce;
        lodash.defaults = defaults;
        lodash.defer = defer;
        lodash.delay = delay;
        lodash.difference = difference;
        lodash.filter = filter;
        lodash.flatten = flatten;
        lodash.forEach = forEach;
        lodash.forIn = forIn;
        lodash.forOwn = forOwn;
        lodash.functions = functions;
        lodash.groupBy = groupBy;
        lodash.initial = initial;
        lodash.intersection = intersection;
        lodash.invert = invert;
        lodash.invoke = invoke;
        lodash.keys = keys;
        lodash.map = map;
        lodash.max = max;
        lodash.memoize = memoize;
        lodash.merge = merge;
        lodash.min = min;
        lodash.omit = omit;
        lodash.once = once;
        lodash.pairs = pairs;
        lodash.partial = partial;
        lodash.partialRight = partialRight;
        lodash.pick = pick;
        lodash.pluck = pluck;
        lodash.range = range;
        lodash.reject = reject;
        lodash.rest = rest;
        lodash.shuffle = shuffle;
        lodash.sortBy = sortBy;
        lodash.tap = tap;
        lodash.throttle = throttle;
        lodash.times = times;
        lodash.toArray = toArray;
        lodash.transform = transform;
        lodash.union = union;
        lodash.uniq = uniq;
        lodash.unzip = unzip;
        lodash.values = values;
        lodash.where = where;
        lodash.without = without;
        lodash.wrap = wrap;
        lodash.zip = zip;
        lodash.zipObject = zipObject;

        // add aliases
        lodash.collect = map;
        lodash.drop = rest;
        lodash.each = forEach;
        lodash.extend = assign;
        lodash.methods = functions;
        lodash.object = zipObject;
        lodash.select = filter;
        lodash.tail = rest;
        lodash.unique = uniq;

        // add functions to `lodash.prototype`
        mixin(lodash);

        // add Underscore compat
        lodash.chain = lodash;
        lodash.prototype.chain = function () { return this; };

        /*--------------------------------------------------------------------------*/

        // add functions that return unwrapped values when chaining
        lodash.clone = clone;
        lodash.cloneDeep = cloneDeep;
        lodash.contains = contains;
        lodash.escape = escape;
        lodash.every = every;
        lodash.find = find;
        lodash.findIndex = findIndex;
        lodash.findKey = findKey;
        lodash.has = has;
        lodash.identity = identity;
        lodash.indexOf = indexOf;
        lodash.isArguments = isArguments;
        lodash.isArray = isArray;
        lodash.isBoolean = isBoolean;
        lodash.isDate = isDate;
        lodash.isElement = isElement;
        lodash.isEmpty = isEmpty;
        lodash.isEqual = isEqual;
        lodash.isFinite = isFinite;
        lodash.isFunction = isFunction;
        lodash.isNaN = isNaN;
        lodash.isNull = isNull;
        lodash.isNumber = isNumber;
        lodash.isObject = isObject;
        lodash.isPlainObject = isPlainObject;
        lodash.isRegExp = isRegExp;
        lodash.isString = isString;
        lodash.isUndefined = isUndefined;
        lodash.lastIndexOf = lastIndexOf;
        lodash.mixin = mixin;
        lodash.noConflict = noConflict;
        lodash.parseInt = parseInt;
        lodash.random = random;
        lodash.reduce = reduce;
        lodash.reduceRight = reduceRight;
        lodash.result = result;
        lodash.runInContext = runInContext;
        lodash.size = size;
        lodash.some = some;
        lodash.sortedIndex = sortedIndex;
        lodash.template = template;
        lodash.unescape = unescape;
        lodash.uniqueId = uniqueId;

        // add aliases
        lodash.all = every;
        lodash.any = some;
        lodash.detect = find;
        lodash.findWhere = find;
        lodash.foldl = reduce;
        lodash.foldr = reduceRight;
        lodash.include = contains;
        lodash.inject = reduce;

        forOwn(lodash, function (func, methodName) {
            if (!lodash.prototype[methodName]) {
                lodash.prototype[methodName] = function () {
                    var args = [this.__wrapped__];
                    push.apply(args, arguments);
                    return func.apply(lodash, args);
                };
            }
        });

        /*--------------------------------------------------------------------------*/

        // add functions capable of returning wrapped and unwrapped values when chaining
        lodash.first = first;
        lodash.last = last;

        // add aliases
        lodash.take = first;
        lodash.head = first;

        forOwn(lodash, function (func, methodName) {
            if (!lodash.prototype[methodName]) {
                lodash.prototype[methodName] = function (callback, thisArg) {
                    var result = func(this.__wrapped__, callback, thisArg);
                    return callback == null || (thisArg && typeof callback != 'function')
                      ? result
                      : new lodashWrapper(result);
                };
            }
        });

        /*--------------------------------------------------------------------------*/

        /**
         * The semantic version number.
         *
         * @static
         * @memberOf _
         * @type String
         */
        lodash.VERSION = '1.3.1';

        // add "Chaining" functions to the wrapper
        lodash.prototype.toString = wrapperToString;
        lodash.prototype.value = wrapperValueOf;
        lodash.prototype.valueOf = wrapperValueOf;

        // add `Array` functions that return unwrapped values
        forEach(['join', 'pop', 'shift'], function (methodName) {
            var func = arrayRef[methodName];
            lodash.prototype[methodName] = function () {
                return func.apply(this.__wrapped__, arguments);
            };
        });

        // add `Array` functions that return the wrapped value
        forEach(['push', 'reverse', 'sort', 'unshift'], function (methodName) {
            var func = arrayRef[methodName];
            lodash.prototype[methodName] = function () {
                func.apply(this.__wrapped__, arguments);
                return this;
            };
        });

        // add `Array` functions that return new wrapped values
        forEach(['concat', 'slice', 'splice'], function (methodName) {
            var func = arrayRef[methodName];
            lodash.prototype[methodName] = function () {
                return new lodashWrapper(func.apply(this.__wrapped__, arguments));
            };
        });

        return lodash;
    }

    /*--------------------------------------------------------------------------*/

    // expose Lo-Dash
    var _ = runInContext();

    // some AMD build optimizers, like r.js, check for specific condition patterns like the following:
    if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
        // Expose Lo-Dash to the global object even when an AMD loader is present in
        // case Lo-Dash was injected by a third-party script and not intended to be
        // loaded as a module. The global assignment can be reverted in the Lo-Dash
        // module via its `noConflict()` method.
        window._ = _;

        // define as an anonymous module so, through path mapping, it can be
        // referenced as the "underscore" module
        define(function () {
            return _;
        });
    }
        // check for `exports` after `define` in case a build optimizer adds an `exports` object
    else if (freeExports && !freeExports.nodeType) {
        // in Node.js or RingoJS v0.8.0+
        if (freeModule) {
            (freeModule.exports = _)._ = _;
        }
            // in Narwhal or RingoJS v0.7.0-
        else {
            freeExports._ = _;
        }
    }
    else {
        // in a browser or Rhino
        window._ = _;
    }
}(this));
/**
 * Restfull Resources service for AngularJS apps
 * @version v1.0.4 - 2013-06-28
 * @link https://github.com/mgonto/restangular
 * @author Martin Gontovnikas <martin@gonto.com.ar>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
(function () {

    var module = angular.module('restangular', []);

    module.provider('Restangular', function () {
        // Configuration
        var Configurer = {};
        Configurer.init = function (object, config) {
            /**
             * Those are HTTP safe methods for which there is no need to pass any data with the request.
             */
            var safeMethods = ["get", "head", "options", "trace"];
            config.isSafe = function (operation) {
                return _.contains(safeMethods, operation.toLowerCase());
            }
            /**
             * This is the BaseURL to be used with Restangular
             */
            config.baseUrl = _.isUndefined(config.baseUrl) ? "" : config.baseUrl;
            object.setBaseUrl = function (newBaseUrl) {
                config.baseUrl = newBaseUrl;
            }

            /**
             * Sets the extra fields to keep from the parents
             */
            config.extraFields = config.extraFields || [];
            object.setExtraFields = function (newExtraFields) {
                config.extraFields = newExtraFields;
            }

            /**
             * Some default $http parameter to be used in EVERY call
            **/
            config.defaultHttpFields = config.defaultHttpFields || {};
            object.setDefaultHttpFields = function (values) {
                config.defaultHttpFields = values;
            }

            config.withHttpDefaults = function (obj) {
                return _.defaults(obj, config.defaultHttpFields);
            }

            config.defaultRequestParams = config.defaultRequestParams || {};
            object.setDefaultRequestParams = function (values) {
                config.defaultRequestParams = values;
            }

            config.defaultHeaders = config.defaultHeaders || {};
            object.setDefaultHeaders = function (headers) {
                config.defaultHeaders = headers;
            }

            /**
             * Method overriders will set which methods are sent via POST with an X-HTTP-Method-Override
             **/
            config.methodOverriders = config.methodOverriders || [];
            object.setMethodOverriders = function (values) {
                var overriders = _.extend([], values);
                if (config.isOverridenMethod('delete', overriders)) {
                    overriders.push("remove");
                }
                config.methodOverriders = overriders;
            }

            config.isOverridenMethod = function (method, values) {
                var search = values || config.methodOverriders;
                return !_.isUndefined(_.find(search, function (one) {
                    return one.toLowerCase() === method.toLowerCase();
                }));
            }

            /**
             * Sets the URL creator type. For now, only Path is created. In the future we'll have queryParams
            **/
            config.urlCreator = config.urlCreator || "path";
            object.setUrlCreator = function (name) {
                if (!_.has(config.urlCreatorFactory, name)) {
                    throw new Error("URL Path selected isn't valid");
                }
                config.urlCreator = name;
            }

            /**
             * You can set the restangular fields here. The 3 required fields for Restangular are:
             * 
             * id: Id of the element
             * route: name of the route of this element
             * parentResource: the reference to the parent resource
             * 
             *  All of this fields except for id, are handled (and created) by Restangular. By default, 
             *  the field values will be id, route and parentResource respectively
             */
            config.restangularFields = config.restangularFields || {
                id: "id",
                route: "route",
                parentResource: "parentResource",
                restangularCollection: "restangularCollection"
            }
            object.setRestangularFields = function (resFields) {
                config.restangularFields =
                  _.extend(config.restangularFields, resFields);
            }

            config.setIdToElem = function (elem, id) {
                var properties = config.restangularFields.id.split('.');
                var idValue = elem;
                _.each(_.initial(properties), function (prop) {
                    idValue[prop] = {};
                    idValue = idValue[prop];
                });
                idValue[_.last(properties)] = id;
            }

            config.getIdFromElem = function (elem) {
                var properties = config.restangularFields.id.split('.');
                var idValue = angular.copy(elem);
                _.each(properties, function (prop) {
                    idValue = idValue[prop];
                });
                return idValue;
            }

            /**
             * Sets the Response parser. This is used in case your response isn't directly the data.
             * For example if you have a response like {meta: {'meta'}, data: {name: 'Gonto'}}
             * you can extract this data which is the one that needs wrapping
             *
             * The ResponseExtractor is a function that receives the response and the method executed.
             */
            config.responseExtractor = config.responseExtractor || function (response) {
                return response;
            }
            object.setResponseExtractor = function (extractor) {
                config.responseExtractor = extractor;
            }

            object.setResponseInterceptor = object.setResponseExtractor;

            /**
             * Request interceptor is called before sending an object to the server.
             */
            config.fullRequestInterceptor = config.fullRequestInterceptor || function (element, operation,
              path, url, headers, params) {
                return {
                    element: element,
                    headers: headers,
                    params: params
                };
            }

            object.setRequestInterceptor = function (interceptor) {
                config.fullRequestInterceptor = function (elem, operation, path, url, headers, params) {
                    return {
                        headers: headers,
                        params: params,
                        element: interceptor(elem, operation, path, url)
                    }
                };
            }

            object.setFullRequestInterceptor = function (interceptor) {
                config.fullRequestInterceptor = interceptor;
            }



            config.errorInterceptor = config.errorInterceptor || function () { };

            object.setErrorInterceptor = function (interceptor) {
                config.errorInterceptor = interceptor;
            }

            /**
             * This method is called after an element has been "Restangularized".
             * 
             * It receives the element, a boolean indicating if it's an element or a collection 
             * and the name of the model
             * 
             */
            config.onElemRestangularized = config.onElemRestangularized || function (elem) {
                return elem;
            }
            object.setOnElemRestangularized = function (post) {
                config.onElemRestangularized = post;
            }

            /**
             * Depracated. Don't use this!!
             */
            object.setListTypeIsArray = function (val) {

            };

            /**
             * This lets you set a suffix to every request.
             * 
             * For example, if your api requires that for JSon requests you do /users/123.json, you can set that
             * in here.
             * 
             * 
             * By default, the suffix is null
             */
            config.suffix = _.isUndefined(config.suffix) ? null : config.suffix;
            object.setRequestSuffix = function (newSuffix) {
                config.suffix = newSuffix;
            }

            /**
             * Add element transformers for certain routes.
             */
            config.transformers = config.transformers || {};
            object.addElementTransformer = function (type, secondArg, thirdArg) {
                var isCollection = null;
                var transformer = null;
                if (arguments.length === 2) {
                    transformer = secondArg;
                } else {
                    transformer = thirdArg;
                    isCollection = secondArg;
                }

                var typeTransformers = config.transformers[type];
                if (!typeTransformers) {
                    typeTransformers = config.transformers[type] = [];
                }

                typeTransformers.push(function (coll, elem) {
                    if (_.isNull(isCollection) || (coll == isCollection)) {
                        return transformer(elem);
                    }
                    return elem;
                });
            }

            config.transformElem = function (elem, isCollection, route, Restangular) {
                var typeTransformers = config.transformers[route];
                var changedElem = elem;
                if (typeTransformers) {
                    _.each(typeTransformers, function (transformer) {
                        changedElem = transformer(isCollection, changedElem);
                    });
                }
                return config.onElemRestangularized(changedElem,
                  isCollection, route, Restangular);
            }

            config.fullResponse = _.isUndefined(config.fullResponse) ? false : config.fullResponse;
            object.setFullResponse = function (full) {
                config.fullResponse = full;
            }



            //Internal values and functions
            config.urlCreatorFactory = {};

            /**
             * Base URL Creator. Base prototype for everything related to it
             **/

            var BaseCreator = function () {
            };

            BaseCreator.prototype.setConfig = function (config) {
                this.config = config;
            }

            BaseCreator.prototype.parentsArray = function (current) {
                var parents = [];
                while (current) {
                    parents.push(current);
                    current = current[this.config.restangularFields.parentResource];
                }
                return parents.reverse();
            }

            function RestangularResource($http, url, configurer) {
                var resource = {};
                _.each(_.keys(configurer), function (key) {
                    var value = configurer[key];

                    // We don't want the ? if no params are there
                    if (_.isEmpty(value.params)) {
                        delete value.params;
                    }

                    if (config.isSafe(value.method)) {

                        resource[key] = function () {
                            return $http(_.extend(value, {
                                url: url
                            }));
                        }

                    } else {

                        resource[key] = function (data) {
                            return $http(_.extend(value, {
                                url: url,
                                data: data
                            }));
                        }

                    }
                });

                return resource;
            }

            BaseCreator.prototype.resource = function (current, $http, callHeaders, callParams, what) {

                var params = _.defaults(callParams || {}, this.config.defaultRequestParams);
                var headers = _.defaults(callHeaders || {}, this.config.defaultHeaders);

                var url = this.base(current);
                url += what ? ("/" + what) : '';
                url += (this.config.suffix || '');

                return RestangularResource($http, url, {
                    getList: this.config.withHttpDefaults({
                        method: 'GET',
                        params: params,
                        headers: headers || {}
                    }),

                    get: this.config.withHttpDefaults({
                        method: 'GET',
                        params: params,
                        headers: headers || {}
                    }),

                    put: this.config.withHttpDefaults({
                        method: 'PUT',
                        params: params,
                        headers: headers || {}
                    }),

                    post: this.config.withHttpDefaults({
                        method: 'POST',
                        params: params,
                        headers: headers || {}
                    }),

                    remove: this.config.withHttpDefaults({
                        method: 'DELETE',
                        params: params,
                        headers: headers || {}
                    }),

                    head: this.config.withHttpDefaults({
                        method: 'HEAD',
                        params: params,
                        headers: headers || {}
                    }),

                    trace: this.config.withHttpDefaults({
                        method: 'TRACE',
                        params: params,
                        headers: headers || {}
                    }),

                    options: this.config.withHttpDefaults({
                        method: 'OPTIONS',
                        params: params,
                        headers: headers || {}
                    }),

                    patch: this.config.withHttpDefaults({
                        method: 'PATCH',
                        params: params,
                        headers: headers || {}
                    })
                });
            }

            /**
             * This is the Path URL creator. It uses Path to show Hierarchy in the Rest API.
             * This means that if you have an Account that then has a set of Buildings, a URL to a building
             * would be /accounts/123/buildings/456
            **/
            var Path = function () {
            };

            Path.prototype = new BaseCreator();

            Path.prototype.base = function (current) {
                var __this = this;
                return this.config.baseUrl + _.reduce(this.parentsArray(current), function (acum, elem) {
                    var currUrl = acum + "/" + elem[__this.config.restangularFields.route];

                    if (!elem[__this.config.restangularFields.restangularCollection]) {
                        var elemId = __this.config.getIdFromElem(elem);
                        if (!_.isUndefined(elemId) && !_.isNull(elemId)) {
                            currUrl += "/" + elemId;
                        }
                    }

                    return currUrl;
                }, '');
            }



            Path.prototype.fetchUrl = function (current, what) {
                var baseUrl = this.base(current);
                if (what) {
                    baseUrl += "/" + what;
                }
                return baseUrl;
            }



            config.urlCreatorFactory.path = Path;

        }

        var globalConfiguration = {};

        Configurer.init(this, globalConfiguration);




        this.$get = ['$http', '$q', function ($http, $q) {

            function createServiceForConfiguration(config) {
                var service = {};

                var urlHandler = new config.urlCreatorFactory[config.urlCreator]();
                urlHandler.setConfig(config);

                function restangularizeBase(parent, elem, route) {
                    elem[config.restangularFields.route] = route;
                    elem.getRestangularUrl = _.bind(urlHandler.fetchUrl, urlHandler, elem);
                    elem.addRestangularMethod = _.bind(addRestangularMethodFunction, elem);

                    // RequestLess connection
                    elem.one = _.bind(one, elem, elem);
                    elem.all = _.bind(all, elem, elem);

                    if (parent) {
                        var restangularFieldsForParent = _.union(
                          _.values(_.pick(config.restangularFields, ['id', 'route', 'parentResource'])),
                          config.extraFields
                        );
                        elem[config.restangularFields.parentResource] = _.pick(parent, restangularFieldsForParent);
                    } else {
                        elem[config.restangularFields.parentResource] = null;
                    }
                    return elem;
                }



                function one(parent, route, id) {
                    var elem = {};
                    config.setIdToElem(elem, id);
                    return restangularizeElem(parent, elem, route);
                }


                function all(parent, route) {
                    return restangularizeCollection(parent, {}, route, true);
                }
                // Promises
                function restangularizePromise(promise, isCollection) {
                    promise.call = _.bind(promiseCall, promise);
                    promise.get = _.bind(promiseGet, promise);
                    promise[config.restangularFields.restangularCollection] = isCollection;
                    if (isCollection) {
                        promise.push = _.bind(promiseCall, promise, "push");
                    }
                    return promise;
                }

                function promiseCall(method) {
                    var deferred = $q.defer();
                    var callArgs = arguments;
                    this.then(function (val) {
                        var params = Array.prototype.slice.call(callArgs, 1);
                        var func = val[method];
                        func.apply(val, params);
                        deferred.resolve(val);
                    });
                    return restangularizePromise(deferred.promise, this[config.restangularFields.restangularCollection]);
                }

                function promiseGet(what) {
                    var deferred = $q.defer();
                    this.then(function (val) {
                        deferred.resolve(val[what]);
                    });
                    return restangularizePromise(deferred.promise, this[config.restangularFields.restangularCollection]);
                }

                function resolvePromise(deferred, response, data) {
                    if (config.fullResponse) {
                        return deferred.resolve(_.extend(response, {
                            data: data
                        }));
                    } else {
                        deferred.resolve(data);
                    }
                }


                // Elements

                function stripRestangular(elem) {
                    return _.omit(elem, _.values(_.omit(config.restangularFields, 'id')));
                }

                function addCustomOperation(elem) {
                    elem.customOperation = _.bind(customFunction, elem);
                    _.each(["put", "post", "get", "delete"], function (oper) {
                        _.each(["do", "custom"], function (alias) {
                            var callOperation = oper === 'delete' ? 'remove' : oper;
                            var name = alias + oper.toUpperCase();
                            elem[name] = _.bind(customFunction, elem, callOperation);
                        });
                    });
                    elem.customGETLIST = _.bind(fetchFunction, elem);
                    elem.doGETLIST = elem.customGETLIST;
                }

                function copyRestangularizedElement(fromElement) {
                    var copiedElement = angular.copy(fromElement);
                    return restangularizeElem(copiedElement[config.restangularFields.parentResource],
                            copiedElement, copiedElement[config.restangularFields.route]);
                }

                function restangularizeElem(parent, elem, route) {
                    var localElem = restangularizeBase(parent, elem, route);
                    localElem[config.restangularFields.restangularCollection] = false;
                    localElem.get = _.bind(getFunction, localElem);
                    localElem.getList = _.bind(fetchFunction, localElem);
                    localElem.put = _.bind(putFunction, localElem);
                    localElem.post = _.bind(postFunction, localElem);
                    localElem.remove = _.bind(deleteFunction, localElem);
                    localElem.head = _.bind(headFunction, localElem);
                    localElem.trace = _.bind(traceFunction, localElem);
                    localElem.options = _.bind(optionsFunction, localElem);
                    localElem.patch = _.bind(patchFunction, localElem);

                    addCustomOperation(localElem);
                    return config.transformElem(localElem, false, route, service);
                }

                function restangularizeCollection(parent, elem, route) {
                    var localElem = restangularizeBase(parent, elem, route);
                    localElem[config.restangularFields.restangularCollection] = true;
                    localElem.post = _.bind(postFunction, localElem, null);
                    localElem.head = _.bind(headFunction, localElem);
                    localElem.trace = _.bind(traceFunction, localElem);
                    localElem.putElement = _.bind(putElementFunction, localElem);
                    localElem.options = _.bind(optionsFunction, localElem);
                    localElem.patch = _.bind(patchFunction, localElem);
                    localElem.getList = _.bind(fetchFunction, localElem, null);

                    addCustomOperation(localElem);
                    return config.transformElem(localElem, true, route, service);
                }

                function putElementFunction(idx, params, headers) {
                    var __this = this;
                    var elemToPut = this[idx];
                    var deferred = $q.defer();
                    elemToPut.put(params, headers).then(function (serverElem) {
                        var newArray = copyRestangularizedElement(__this);
                        newArray[idx] = serverElem;
                        deferred.resolve(newArray);
                    }, function (response) {
                        deferred.reject(response);
                    });

                    return restangularizePromise(deferred.promise, true)
                }


                function fetchFunction(what, reqParams, headers) {
                    var __this = this;
                    var deferred = $q.defer();
                    var operation = 'getList';
                    var url = urlHandler.fetchUrl(this, what);
                    var whatFetched = what || __this[config.restangularFields.route];


                    var request = config.fullRequestInterceptor(null, operation,
                        whatFetched, url, headers || {}, reqParams || {});

                    urlHandler.resource(this, $http, request.headers, request.params, what).getList().then(function (response) {
                        var resData = response.data;
                        var data = config.responseExtractor(resData, operation, whatFetched, url);
                        var processedData = _.map(data, function (elem) {
                            if (!__this[config.restangularFields.restangularCollection]) {
                                return restangularizeElem(__this, elem, what);
                            } else {
                                return restangularizeElem(__this[config.restangularFields.parentResource],
                                  elem, __this[config.restangularFields.route]);
                            }

                        });

                        processedData = _.extend(data, processedData);
                        if (!__this[config.restangularFields.restangularCollection]) {
                            resolvePromise(deferred, response, restangularizeCollection(__this, processedData, what));
                        } else {
                            resolvePromise(deferred, response, restangularizeCollection(null, processedData, __this[config.restangularFields.route]));
                        }
                    }, function error(response) {
                        config.errorInterceptor(response);
                        deferred.reject(response);
                    });

                    return restangularizePromise(deferred.promise, true);
                }

                function elemFunction(operation, what, params, obj, headers) {
                    var __this = this;
                    var deferred = $q.defer();
                    var resParams = params || {};
                    var resObj = obj || this;
                    var route = what || this[config.restangularFields.route];
                    var fetchUrl = urlHandler.fetchUrl(this, what);

                    var callObj = obj || stripRestangular(this);
                    request = config.fullRequestInterceptor(callObj, operation, route, fetchUrl,
                      headers || {}, resParams || {});

                    var okCallback = function (response) {
                        var resData = response.data;
                        var elem = config.responseExtractor(resData, operation, route, fetchUrl) || resObj;
                        if (operation === "post" && !__this[config.restangularFields.restangularCollection]) {
                            resolvePromise(deferred, response, restangularizeElem(__this, elem, what));
                        } else {
                            resolvePromise(deferred, response, restangularizeElem(__this[config.restangularFields.parentResource], elem, __this[config.restangularFields.route]));
                        }

                    };

                    var errorCallback = function (response) {
                        config.errorInterceptor(response);
                        deferred.reject(response);
                    };
                    // Overring HTTP Method
                    var callOperation = operation;
                    var callHeaders = _.extend({}, request.headers);
                    var isOverrideOperation = config.isOverridenMethod(operation);
                    if (isOverrideOperation) {
                        callOperation = 'post';
                        callHeaders = _.extend(callHeaders, { 'X-HTTP-Method-Override': operation });
                    }

                    if (config.isSafe(operation)) {
                        if (isOverrideOperation) {
                            urlHandler.resource(this, $http, callHeaders, request.params,
                              what)[callOperation]({}).then(okCallback, errorCallback);
                        } else {
                            urlHandler.resource(this, $http, callHeaders, request.params,
                              what)[callOperation]().then(okCallback, errorCallback);
                        }
                    } else {
                        urlHandler.resource(this, $http, callHeaders, request.params,
                          what)[callOperation](request.element).then(okCallback, errorCallback);
                    }

                    return restangularizePromise(deferred.promise);
                }

                function getFunction(params, headers) {
                    return _.bind(elemFunction, this)("get", undefined, params, undefined, headers);
                }

                function deleteFunction(params, headers) {
                    return _.bind(elemFunction, this)("remove", undefined, params, undefined, headers);
                }

                function putFunction(params, headers) {
                    return _.bind(elemFunction, this)("put", undefined, params, undefined, headers);
                }

                function postFunction(what, elem, params, headers) {
                    return _.bind(elemFunction, this)("post", what, params, elem, headers);
                }

                function headFunction(params, headers) {
                    return _.bind(elemFunction, this)("head", undefined, params, undefined, headers);
                }

                function traceFunction(params, headers) {
                    return _.bind(elemFunction, this)("trace", undefined, params, undefined, headers);
                }

                function optionsFunction(params, headers) {
                    return _.bind(elemFunction, this)("options", undefined, params, undefined, headers);
                }

                function patchFunction(params, headers) {
                    return _.bind(elemFunction, this)("patch", undefined, params, undefined, headers);
                }

                function customFunction(operation, path, params, headers, elem) {
                    return _.bind(elemFunction, this)(operation, path, params, elem, headers);
                }

                function addRestangularMethodFunction(name, operation, path, defaultParams, defaultHeaders, defaultElem) {
                    var bindedFunction;
                    if (operation === 'getList') {
                        bindedFunction = _.bind(fetchFunction, this, path);
                    } else {
                        bindedFunction = _.bind(customFunction, this, operation, path);
                    }

                    this[name] = function (params, headers, elem) {
                        var callParams = _.defaults({
                            params: params,
                            headers: headers,
                            elem: elem
                        }, {
                            params: defaultParams,
                            headers: defaultHeaders,
                            elem: defaultElem
                        });
                        return bindedFunction(callParams.params, callParams.headers, callParams.elem);
                    }
                }

                function withConfigurationFunction(configurer) {
                    var newConfig = angular.copy(globalConfiguration);
                    Configurer.init(newConfig, newConfig);
                    configurer(newConfig);
                    return createServiceForConfiguration(newConfig);
                }


                Configurer.init(service, globalConfiguration);

                service.copy = _.bind(copyRestangularizedElement, service);

                service.withConfig = _.bind(withConfigurationFunction, service);

                service.one = _.bind(one, service, null);

                service.all = _.bind(all, service, null);

                service.restangularizeElement = _.bind(restangularizeElem, service);

                service.restangularizeCollection = _.bind(restangularizeCollection, service);

                return service;
            }

            return createServiceForConfiguration(globalConfiguration);


        }];
    }
    );

})();
/*! Hammer.JS - v1.0.5 - 2013-04-07
 * http://eightmedia.github.com/hammer.js
 *
 * Copyright (c) 2013 Jorik Tangelder <j.tangelder@gmail.com>;
 * Licensed under the MIT license */

(function (window, undefined) {
    'use strict';

    /**
     * Hammer
     * use this to create instances
     * @param   {HTMLElement}   element
     * @param   {Object}        options
     * @returns {Hammer.Instance}
     * @constructor
     */
    var Hammer = function (element, options) {
        return new Hammer.Instance(element, options || {});
    };

    // default settings
    Hammer.defaults = {
        // add styles and attributes to the element to prevent the browser from doing
        // its native behavior. this doesnt prevent the scrolling, but cancels
        // the contextmenu, tap highlighting etc
        // set to false to disable this
        stop_browser_behavior: {
            // this also triggers onselectstart=false for IE
            userSelect: 'none',
            // this makes the element blocking in IE10 >, you could experiment with the value
            // see for more options this issue; https://github.com/EightMedia/hammer.js/issues/241
            touchAction: 'none',
            touchCallout: 'none',
            contentZooming: 'none',
            userDrag: 'none',
            tapHighlightColor: 'rgba(0,0,0,0)'
        }

        // more settings are defined per gesture at gestures.js
    };

    // detect touchevents
    Hammer.HAS_POINTEREVENTS = navigator.pointerEnabled || navigator.msPointerEnabled;
    Hammer.HAS_TOUCHEVENTS = ('ontouchstart' in window);

    // dont use mouseevents on mobile devices
    Hammer.MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;
    Hammer.NO_MOUSEEVENTS = Hammer.HAS_TOUCHEVENTS && navigator.userAgent.match(Hammer.MOBILE_REGEX);

    // eventtypes per touchevent (start, move, end)
    // are filled by Hammer.event.determineEventTypes on setup
    Hammer.EVENT_TYPES = {};

    // direction defines
    Hammer.DIRECTION_DOWN = 'down';
    Hammer.DIRECTION_LEFT = 'left';
    Hammer.DIRECTION_UP = 'up';
    Hammer.DIRECTION_RIGHT = 'right';

    // pointer type
    Hammer.POINTER_MOUSE = 'mouse';
    Hammer.POINTER_TOUCH = 'touch';
    Hammer.POINTER_PEN = 'pen';

    // touch event defines
    Hammer.EVENT_START = 'start';
    Hammer.EVENT_MOVE = 'move';
    Hammer.EVENT_END = 'end';

    // hammer document where the base events are added at
    Hammer.DOCUMENT = document;

    // plugins namespace
    Hammer.plugins = {};

    // if the window events are set...
    Hammer.READY = false;

    /**
     * setup events to detect gestures on the document
     */
    function setup() {
        if (Hammer.READY) {
            return;
        }

        // find what eventtypes we add listeners to
        Hammer.event.determineEventTypes();

        // Register all gestures inside Hammer.gestures
        for (var name in Hammer.gestures) {
            if (Hammer.gestures.hasOwnProperty(name)) {
                Hammer.detection.register(Hammer.gestures[name]);
            }
        }

        // Add touch events on the document
        Hammer.event.onTouch(Hammer.DOCUMENT, Hammer.EVENT_MOVE, Hammer.detection.detect);
        Hammer.event.onTouch(Hammer.DOCUMENT, Hammer.EVENT_END, Hammer.detection.detect);

        // Hammer is ready...!
        Hammer.READY = true;
    }

    /**
     * create new hammer instance
     * all methods should return the instance itself, so it is chainable.
     * @param   {HTMLElement}       element
     * @param   {Object}            [options={}]
     * @returns {Hammer.Instance}
     * @constructor
     */
    Hammer.Instance = function (element, options) {
        var self = this;

        // setup HammerJS window events and register all gestures
        // this also sets up the default options
        setup();

        this.element = element;

        // start/stop detection option
        this.enabled = true;

        // merge options
        this.options = Hammer.utils.extend(
            Hammer.utils.extend({}, Hammer.defaults),
            options || {});

        // add some css to the element to prevent the browser from doing its native behavoir
        if (this.options.stop_browser_behavior) {
            Hammer.utils.stopDefaultBrowserBehavior(this.element, this.options.stop_browser_behavior);
        }

        // start detection on touchstart
        Hammer.event.onTouch(element, Hammer.EVENT_START, function (ev) {
            if (self.enabled) {
                Hammer.detection.startDetect(self, ev);
            }
        });

        // return instance
        return this;
    };


    Hammer.Instance.prototype = {
        /**
         * bind events to the instance
         * @param   {String}      gesture
         * @param   {Function}    handler
         * @returns {Hammer.Instance}
         */
        on: function onEvent(gesture, handler) {
            var gestures = gesture.split(' ');
            for (var t = 0; t < gestures.length; t++) {
                this.element.addEventListener(gestures[t], handler, false);
            }
            return this;
        },


        /**
         * unbind events to the instance
         * @param   {String}      gesture
         * @param   {Function}    handler
         * @returns {Hammer.Instance}
         */
        off: function offEvent(gesture, handler) {
            var gestures = gesture.split(' ');
            for (var t = 0; t < gestures.length; t++) {
                this.element.removeEventListener(gestures[t], handler, false);
            }
            return this;
        },


        /**
         * trigger gesture event
         * @param   {String}      gesture
         * @param   {Object}      eventData
         * @returns {Hammer.Instance}
         */
        trigger: function triggerEvent(gesture, eventData) {
            // create DOM event
            var event = Hammer.DOCUMENT.createEvent('Event');
            event.initEvent(gesture, true, true);
            event.gesture = eventData;

            // trigger on the target if it is in the instance element,
            // this is for event delegation tricks
            var element = this.element;
            if (Hammer.utils.hasParent(eventData.target, element)) {
                element = eventData.target;
            }

            element.dispatchEvent(event);
            return this;
        },


        /**
         * enable of disable hammer.js detection
         * @param   {Boolean}   state
         * @returns {Hammer.Instance}
         */
        enable: function enable(state) {
            this.enabled = state;
            return this;
        }
    };

    /**
     * this holds the last move event,
     * used to fix empty touchend issue
     * see the onTouch event for an explanation
     * @type {Object}
     */
    var last_move_event = null;


    /**
     * when the mouse is hold down, this is true
     * @type {Boolean}
     */
    var enable_detect = false;


    /**
     * when touch events have been fired, this is true
     * @type {Boolean}
     */
    var touch_triggered = false;


    Hammer.event = {
        /**
         * simple addEventListener
         * @param   {HTMLElement}   element
         * @param   {String}        type
         * @param   {Function}      handler
         */
        bindDom: function (element, type, handler) {
            var types = type.split(' ');
            for (var t = 0; t < types.length; t++) {
                element.addEventListener(types[t], handler, false);
            }
        },


        /**
         * touch events with mouse fallback
         * @param   {HTMLElement}   element
         * @param   {String}        eventType        like Hammer.EVENT_MOVE
         * @param   {Function}      handler
         */
        onTouch: function onTouch(element, eventType, handler) {
            var self = this;

            this.bindDom(element, Hammer.EVENT_TYPES[eventType], function bindDomOnTouch(ev) {
                var sourceEventType = ev.type.toLowerCase();

                // onmouseup, but when touchend has been fired we do nothing.
                // this is for touchdevices which also fire a mouseup on touchend
                if (sourceEventType.match(/mouse/) && touch_triggered) {
                    return;
                }

                    // mousebutton must be down or a touch event
                else if (sourceEventType.match(/touch/) ||   // touch events are always on screen
                    sourceEventType.match(/pointerdown/) || // pointerevents touch
                    (sourceEventType.match(/mouse/) && ev.which === 1)   // mouse is pressed
                ) {
                    enable_detect = true;
                }

                // we are in a touch event, set the touch triggered bool to true,
                // this for the conflicts that may occur on ios and android
                if (sourceEventType.match(/touch|pointer/)) {
                    touch_triggered = true;
                }

                // count the total touches on the screen
                var count_touches = 0;

                // when touch has been triggered in this detection session
                // and we are now handling a mouse event, we stop that to prevent conflicts
                if (enable_detect) {
                    // update pointerevent
                    if (Hammer.HAS_POINTEREVENTS && eventType != Hammer.EVENT_END) {
                        count_touches = Hammer.PointerEvent.updatePointer(eventType, ev);
                    }
                        // touch
                    else if (sourceEventType.match(/touch/)) {
                        count_touches = ev.touches.length;
                    }
                        // mouse
                    else if (!touch_triggered) {
                        count_touches = sourceEventType.match(/up/) ? 0 : 1;
                    }

                    // if we are in a end event, but when we remove one touch and
                    // we still have enough, set eventType to move
                    if (count_touches > 0 && eventType == Hammer.EVENT_END) {
                        eventType = Hammer.EVENT_MOVE;
                    }
                        // no touches, force the end event
                    else if (!count_touches) {
                        eventType = Hammer.EVENT_END;
                    }

                    // because touchend has no touches, and we often want to use these in our gestures,
                    // we send the last move event as our eventData in touchend
                    if (!count_touches && last_move_event !== null) {
                        ev = last_move_event;
                    }
                        // store the last move event
                    else {
                        last_move_event = ev;
                    }

                    // trigger the handler
                    handler.call(Hammer.detection, self.collectEventData(element, eventType, ev));

                    // remove pointerevent from list
                    if (Hammer.HAS_POINTEREVENTS && eventType == Hammer.EVENT_END) {
                        count_touches = Hammer.PointerEvent.updatePointer(eventType, ev);
                    }
                }

                //debug(sourceEventType +" "+ eventType);

                // on the end we reset everything
                if (!count_touches) {
                    last_move_event = null;
                    enable_detect = false;
                    touch_triggered = false;
                    Hammer.PointerEvent.reset();
                }
            });
        },


        /**
         * we have different events for each device/browser
         * determine what we need and set them in the Hammer.EVENT_TYPES constant
         */
        determineEventTypes: function determineEventTypes() {
            // determine the eventtype we want to set
            var types;

            // pointerEvents magic
            if (Hammer.HAS_POINTEREVENTS) {
                types = Hammer.PointerEvent.getEvents();
            }
                // on Android, iOS, blackberry, windows mobile we dont want any mouseevents
            else if (Hammer.NO_MOUSEEVENTS) {
                types = [
                    'touchstart',
                    'touchmove',
                    'touchend touchcancel'];
            }
                // for non pointer events browsers and mixed browsers,
                // like chrome on windows8 touch laptop
            else {
                types = [
                    'touchstart mousedown',
                    'touchmove mousemove',
                    'touchend touchcancel mouseup'];
            }

            Hammer.EVENT_TYPES[Hammer.EVENT_START] = types[0];
            Hammer.EVENT_TYPES[Hammer.EVENT_MOVE] = types[1];
            Hammer.EVENT_TYPES[Hammer.EVENT_END] = types[2];
        },


        /**
         * create touchlist depending on the event
         * @param   {Object}    ev
         * @param   {String}    eventType   used by the fakemultitouch plugin
         */
        getTouchList: function getTouchList(ev/*, eventType*/) {
            // get the fake pointerEvent touchlist
            if (Hammer.HAS_POINTEREVENTS) {
                return Hammer.PointerEvent.getTouchList();
            }
                // get the touchlist
            else if (ev.touches) {
                return ev.touches;
            }
                // make fake touchlist from mouse position
            else {
                return [{
                    identifier: 1,
                    pageX: ev.pageX,
                    pageY: ev.pageY,
                    target: ev.target
                }];
            }
        },


        /**
         * collect event data for Hammer js
         * @param   {HTMLElement}   element
         * @param   {String}        eventType        like Hammer.EVENT_MOVE
         * @param   {Object}        eventData
         */
        collectEventData: function collectEventData(element, eventType, ev) {
            var touches = this.getTouchList(ev, eventType);

            // find out pointerType
            var pointerType = Hammer.POINTER_TOUCH;
            if (ev.type.match(/mouse/) || Hammer.PointerEvent.matchType(Hammer.POINTER_MOUSE, ev)) {
                pointerType = Hammer.POINTER_MOUSE;
            }

            return {
                center: Hammer.utils.getCenter(touches),
                timeStamp: new Date().getTime(),
                target: ev.target,
                touches: touches,
                eventType: eventType,
                pointerType: pointerType,
                srcEvent: ev,

                /**
                 * prevent the browser default actions
                 * mostly used to disable scrolling of the browser
                 */
                preventDefault: function () {
                    if (this.srcEvent.preventManipulation) {
                        this.srcEvent.preventManipulation();
                    }

                    if (this.srcEvent.preventDefault) {
                        this.srcEvent.preventDefault();
                    }
                },

                /**
                 * stop bubbling the event up to its parents
                 */
                stopPropagation: function () {
                    this.srcEvent.stopPropagation();
                },

                /**
                 * immediately stop gesture detection
                 * might be useful after a swipe was detected
                 * @return {*}
                 */
                stopDetect: function () {
                    return Hammer.detection.stopDetect();
                }
            };
        }
    };

    Hammer.PointerEvent = {
        /**
         * holds all pointers
         * @type {Object}
         */
        pointers: {},

        /**
         * get a list of pointers
         * @returns {Array}     touchlist
         */
        getTouchList: function () {
            var self = this;
            var touchlist = [];

            // we can use forEach since pointerEvents only is in IE10
            Object.keys(self.pointers).sort().forEach(function (id) {
                touchlist.push(self.pointers[id]);
            });
            return touchlist;
        },

        /**
         * update the position of a pointer
         * @param   {String}   type             Hammer.EVENT_END
         * @param   {Object}   pointerEvent
         */
        updatePointer: function (type, pointerEvent) {
            if (type == Hammer.EVENT_END) {
                this.pointers = {};
            }
            else {
                pointerEvent.identifier = pointerEvent.pointerId;
                this.pointers[pointerEvent.pointerId] = pointerEvent;
            }

            return Object.keys(this.pointers).length;
        },

        /**
         * check if ev matches pointertype
         * @param   {String}        pointerType     Hammer.POINTER_MOUSE
         * @param   {PointerEvent}  ev
         */
        matchType: function (pointerType, ev) {
            if (!ev.pointerType) {
                return false;
            }

            var types = {};
            types[Hammer.POINTER_MOUSE] = (ev.pointerType == ev.MSPOINTER_TYPE_MOUSE || ev.pointerType == Hammer.POINTER_MOUSE);
            types[Hammer.POINTER_TOUCH] = (ev.pointerType == ev.MSPOINTER_TYPE_TOUCH || ev.pointerType == Hammer.POINTER_TOUCH);
            types[Hammer.POINTER_PEN] = (ev.pointerType == ev.MSPOINTER_TYPE_PEN || ev.pointerType == Hammer.POINTER_PEN);
            return types[pointerType];
        },


        /**
         * get events
         */
        getEvents: function () {
            return [
                'pointerdown MSPointerDown',
                'pointermove MSPointerMove',
                'pointerup pointercancel MSPointerUp MSPointerCancel'
            ];
        },

        /**
         * reset the list
         */
        reset: function () {
            this.pointers = {};
        }
    };


    Hammer.utils = {
        /**
         * extend method,
         * also used for cloning when dest is an empty object
         * @param   {Object}    dest
         * @param   {Object}    src
         * @parm	{Boolean}	merge		do a merge
         * @returns {Object}    dest
         */
        extend: function extend(dest, src, merge) {
            for (var key in src) {
                if (dest[key] !== undefined && merge) {
                    continue;
                }
                dest[key] = src[key];
            }
            return dest;
        },


        /**
         * find if a node is in the given parent
         * used for event delegation tricks
         * @param   {HTMLElement}   node
         * @param   {HTMLElement}   parent
         * @returns {boolean}       has_parent
         */
        hasParent: function (node, parent) {
            while (node) {
                if (node == parent) {
                    return true;
                }
                node = node.parentNode;
            }
            return false;
        },


        /**
         * get the center of all the touches
         * @param   {Array}     touches
         * @returns {Object}    center
         */
        getCenter: function getCenter(touches) {
            var valuesX = [], valuesY = [];

            for (var t = 0, len = touches.length; t < len; t++) {
                valuesX.push(touches[t].pageX);
                valuesY.push(touches[t].pageY);
            }

            return {
                pageX: ((Math.min.apply(Math, valuesX) + Math.max.apply(Math, valuesX)) / 2),
                pageY: ((Math.min.apply(Math, valuesY) + Math.max.apply(Math, valuesY)) / 2)
            };
        },


        /**
         * calculate the velocity between two points
         * @param   {Number}    delta_time
         * @param   {Number}    delta_x
         * @param   {Number}    delta_y
         * @returns {Object}    velocity
         */
        getVelocity: function getVelocity(delta_time, delta_x, delta_y) {
            return {
                x: Math.abs(delta_x / delta_time) || 0,
                y: Math.abs(delta_y / delta_time) || 0
            };
        },


        /**
         * calculate the angle between two coordinates
         * @param   {Touch}     touch1
         * @param   {Touch}     touch2
         * @returns {Number}    angle
         */
        getAngle: function getAngle(touch1, touch2) {
            var y = touch2.pageY - touch1.pageY,
                x = touch2.pageX - touch1.pageX;
            return Math.atan2(y, x) * 180 / Math.PI;
        },


        /**
         * angle to direction define
         * @param   {Touch}     touch1
         * @param   {Touch}     touch2
         * @returns {String}    direction constant, like Hammer.DIRECTION_LEFT
         */
        getDirection: function getDirection(touch1, touch2) {
            var x = Math.abs(touch1.pageX - touch2.pageX),
                y = Math.abs(touch1.pageY - touch2.pageY);

            if (x >= y) {
                return touch1.pageX - touch2.pageX > 0 ? Hammer.DIRECTION_LEFT : Hammer.DIRECTION_RIGHT;
            }
            else {
                return touch1.pageY - touch2.pageY > 0 ? Hammer.DIRECTION_UP : Hammer.DIRECTION_DOWN;
            }
        },


        /**
         * calculate the distance between two touches
         * @param   {Touch}     touch1
         * @param   {Touch}     touch2
         * @returns {Number}    distance
         */
        getDistance: function getDistance(touch1, touch2) {
            var x = touch2.pageX - touch1.pageX,
                y = touch2.pageY - touch1.pageY;
            return Math.sqrt((x * x) + (y * y));
        },


        /**
         * calculate the scale factor between two touchLists (fingers)
         * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
         * @param   {Array}     start
         * @param   {Array}     end
         * @returns {Number}    scale
         */
        getScale: function getScale(start, end) {
            // need two fingers...
            if (start.length >= 2 && end.length >= 2) {
                return this.getDistance(end[0], end[1]) /
                    this.getDistance(start[0], start[1]);
            }
            return 1;
        },


        /**
         * calculate the rotation degrees between two touchLists (fingers)
         * @param   {Array}     start
         * @param   {Array}     end
         * @returns {Number}    rotation
         */
        getRotation: function getRotation(start, end) {
            // need two fingers
            if (start.length >= 2 && end.length >= 2) {
                return this.getAngle(end[1], end[0]) -
                    this.getAngle(start[1], start[0]);
            }
            return 0;
        },


        /**
         * boolean if the direction is vertical
         * @param    {String}    direction
         * @returns  {Boolean}   is_vertical
         */
        isVertical: function isVertical(direction) {
            return (direction == Hammer.DIRECTION_UP || direction == Hammer.DIRECTION_DOWN);
        },


        /**
         * stop browser default behavior with css props
         * @param   {HtmlElement}   element
         * @param   {Object}        css_props
         */
        stopDefaultBrowserBehavior: function stopDefaultBrowserBehavior(element, css_props) {
            var prop,
                vendors = ['webkit', 'khtml', 'moz', 'ms', 'o', ''];

            if (!css_props || !element.style) {
                return;
            }

            // with css properties for modern browsers
            for (var i = 0; i < vendors.length; i++) {
                for (var p in css_props) {
                    if (css_props.hasOwnProperty(p)) {
                        prop = p;

                        // vender prefix at the property
                        if (vendors[i]) {
                            prop = vendors[i] + prop.substring(0, 1).toUpperCase() + prop.substring(1);
                        }

                        // set the style
                        element.style[prop] = css_props[p];
                    }
                }
            }

            // also the disable onselectstart
            if (css_props.userSelect == 'none') {
                element.onselectstart = function () {
                    return false;
                };
            }
        }
    };

    Hammer.detection = {
        // contains all registred Hammer.gestures in the correct order
        gestures: [],

        // data of the current Hammer.gesture detection session
        current: null,

        // the previous Hammer.gesture session data
        // is a full clone of the previous gesture.current object
        previous: null,

        // when this becomes true, no gestures are fired
        stopped: false,


        /**
         * start Hammer.gesture detection
         * @param   {Hammer.Instance}   inst
         * @param   {Object}            eventData
         */
        startDetect: function startDetect(inst, eventData) {
            // already busy with a Hammer.gesture detection on an element
            if (this.current) {
                return;
            }

            this.stopped = false;

            this.current = {
                inst: inst, // reference to HammerInstance we're working for
                startEvent: Hammer.utils.extend({}, eventData), // start eventData for distances, timing etc
                lastEvent: false, // last eventData
                name: '' // current gesture we're in/detected, can be 'tap', 'hold' etc
            };

            this.detect(eventData);
        },


        /**
         * Hammer.gesture detection
         * @param   {Object}    eventData
         * @param   {Object}    eventData
         */
        detect: function detect(eventData) {
            if (!this.current || this.stopped) {
                return;
            }

            // extend event data with calculations about scale, distance etc
            eventData = this.extendEventData(eventData);

            // instance options
            var inst_options = this.current.inst.options;

            // call Hammer.gesture handlers
            for (var g = 0, len = this.gestures.length; g < len; g++) {
                var gesture = this.gestures[g];

                // only when the instance options have enabled this gesture
                if (!this.stopped && inst_options[gesture.name] !== false) {
                    // if a handler returns false, we stop with the detection
                    if (gesture.handler.call(gesture, eventData, this.current.inst) === false) {
                        this.stopDetect();
                        break;
                    }
                }
            }

            // store as previous event event
            if (this.current) {
                this.current.lastEvent = eventData;
            }

            // endevent, but not the last touch, so dont stop
            if (eventData.eventType == Hammer.EVENT_END && !eventData.touches.length - 1) {
                this.stopDetect();
            }

            return eventData;
        },


        /**
         * clear the Hammer.gesture vars
         * this is called on endDetect, but can also be used when a final Hammer.gesture has been detected
         * to stop other Hammer.gestures from being fired
         */
        stopDetect: function stopDetect() {
            // clone current data to the store as the previous gesture
            // used for the double tap gesture, since this is an other gesture detect session
            this.previous = Hammer.utils.extend({}, this.current);

            // reset the current
            this.current = null;

            // stopped!
            this.stopped = true;
        },


        /**
         * extend eventData for Hammer.gestures
         * @param   {Object}   ev
         * @returns {Object}   ev
         */
        extendEventData: function extendEventData(ev) {
            var startEv = this.current.startEvent;

            // if the touches change, set the new touches over the startEvent touches
            // this because touchevents don't have all the touches on touchstart, or the
            // user must place his fingers at the EXACT same time on the screen, which is not realistic
            // but, sometimes it happens that both fingers are touching at the EXACT same time
            if (startEv && (ev.touches.length != startEv.touches.length || ev.touches === startEv.touches)) {
                // extend 1 level deep to get the touchlist with the touch objects
                startEv.touches = [];
                for (var i = 0, len = ev.touches.length; i < len; i++) {
                    startEv.touches.push(Hammer.utils.extend({}, ev.touches[i]));
                }
            }

            var delta_time = ev.timeStamp - startEv.timeStamp,
                delta_x = ev.center.pageX - startEv.center.pageX,
                delta_y = ev.center.pageY - startEv.center.pageY,
                velocity = Hammer.utils.getVelocity(delta_time, delta_x, delta_y);

            Hammer.utils.extend(ev, {
                deltaTime: delta_time,

                deltaX: delta_x,
                deltaY: delta_y,

                velocityX: velocity.x,
                velocityY: velocity.y,

                distance: Hammer.utils.getDistance(startEv.center, ev.center),
                angle: Hammer.utils.getAngle(startEv.center, ev.center),
                direction: Hammer.utils.getDirection(startEv.center, ev.center),

                scale: Hammer.utils.getScale(startEv.touches, ev.touches),
                rotation: Hammer.utils.getRotation(startEv.touches, ev.touches),

                startEvent: startEv
            });

            return ev;
        },


        /**
         * register new gesture
         * @param   {Object}    gesture object, see gestures.js for documentation
         * @returns {Array}     gestures
         */
        register: function register(gesture) {
            // add an enable gesture options if there is no given
            var options = gesture.defaults || {};
            if (options[gesture.name] === undefined) {
                options[gesture.name] = true;
            }

            // extend Hammer default options with the Hammer.gesture options
            Hammer.utils.extend(Hammer.defaults, options, true);

            // set its index
            gesture.index = gesture.index || 1000;

            // add Hammer.gesture to the list
            this.gestures.push(gesture);

            // sort the list by index
            this.gestures.sort(function (a, b) {
                if (a.index < b.index) {
                    return -1;
                }
                if (a.index > b.index) {
                    return 1;
                }
                return 0;
            });

            return this.gestures;
        }
    };


    Hammer.gestures = Hammer.gestures || {};

    /**
     * Custom gestures
     * ==============================
     *
     * Gesture object
     * --------------------
     * The object structure of a gesture:
     *
     * { name: 'mygesture',
     *   index: 1337,
     *   defaults: {
     *     mygesture_option: true
     *   }
     *   handler: function(type, ev, inst) {
     *     // trigger gesture event
     *     inst.trigger(this.name, ev);
     *   }
     * }
    
     * @param   {String}    name
     * this should be the name of the gesture, lowercase
     * it is also being used to disable/enable the gesture per instance config.
     *
     * @param   {Number}    [index=1000]
     * the index of the gesture, where it is going to be in the stack of gestures detection
     * like when you build an gesture that depends on the drag gesture, it is a good
     * idea to place it after the index of the drag gesture.
     *
     * @param   {Object}    [defaults={}]
     * the default settings of the gesture. these are added to the instance settings,
     * and can be overruled per instance. you can also add the name of the gesture,
     * but this is also added by default (and set to true).
     *
     * @param   {Function}  handler
     * this handles the gesture detection of your custom gesture and receives the
     * following arguments:
     *
     *      @param  {Object}    eventData
     *      event data containing the following properties:
     *          timeStamp   {Number}        time the event occurred
     *          target      {HTMLElement}   target element
     *          touches     {Array}         touches (fingers, pointers, mouse) on the screen
     *          pointerType {String}        kind of pointer that was used. matches Hammer.POINTER_MOUSE|TOUCH
     *          center      {Object}        center position of the touches. contains pageX and pageY
     *          deltaTime   {Number}        the total time of the touches in the screen
     *          deltaX      {Number}        the delta on x axis we haved moved
     *          deltaY      {Number}        the delta on y axis we haved moved
     *          velocityX   {Number}        the velocity on the x
     *          velocityY   {Number}        the velocity on y
     *          angle       {Number}        the angle we are moving
     *          direction   {String}        the direction we are moving. matches Hammer.DIRECTION_UP|DOWN|LEFT|RIGHT
     *          distance    {Number}        the distance we haved moved
     *          scale       {Number}        scaling of the touches, needs 2 touches
     *          rotation    {Number}        rotation of the touches, needs 2 touches *
     *          eventType   {String}        matches Hammer.EVENT_START|MOVE|END
     *          srcEvent    {Object}        the source event, like TouchStart or MouseDown *
     *          startEvent  {Object}        contains the same properties as above,
     *                                      but from the first touch. this is used to calculate
     *                                      distances, deltaTime, scaling etc
     *
     *      @param  {Hammer.Instance}    inst
     *      the instance we are doing the detection for. you can get the options from
     *      the inst.options object and trigger the gesture event by calling inst.trigger
     *
     *
     * Handle gestures
     * --------------------
     * inside the handler you can get/set Hammer.detection.current. This is the current
     * detection session. It has the following properties
     *      @param  {String}    name
     *      contains the name of the gesture we have detected. it has not a real function,
     *      only to check in other gestures if something is detected.
     *      like in the drag gesture we set it to 'drag' and in the swipe gesture we can
     *      check if the current gesture is 'drag' by accessing Hammer.detection.current.name
     *
     *      @readonly
     *      @param  {Hammer.Instance}    inst
     *      the instance we do the detection for
     *
     *      @readonly
     *      @param  {Object}    startEvent
     *      contains the properties of the first gesture detection in this session.
     *      Used for calculations about timing, distance, etc.
     *
     *      @readonly
     *      @param  {Object}    lastEvent
     *      contains all the properties of the last gesture detect in this session.
     *
     * after the gesture detection session has been completed (user has released the screen)
     * the Hammer.detection.current object is copied into Hammer.detection.previous,
     * this is usefull for gestures like doubletap, where you need to know if the
     * previous gesture was a tap
     *
     * options that have been set by the instance can be received by calling inst.options
     *
     * You can trigger a gesture event by calling inst.trigger("mygesture", event).
     * The first param is the name of your gesture, the second the event argument
     *
     *
     * Register gestures
     * --------------------
     * When an gesture is added to the Hammer.gestures object, it is auto registered
     * at the setup of the first Hammer instance. You can also call Hammer.detection.register
     * manually and pass your gesture object as a param
     *
     */

    /**
     * Hold
     * Touch stays at the same place for x time
     * @events  hold
     */
    Hammer.gestures.Hold = {
        name: 'hold',
        index: 10,
        defaults: {
            hold_timeout: 500,
            hold_threshold: 1
        },
        timer: null,
        handler: function holdGesture(ev, inst) {
            switch (ev.eventType) {
                case Hammer.EVENT_START:
                    // clear any running timers
                    clearTimeout(this.timer);

                    // set the gesture so we can check in the timeout if it still is
                    Hammer.detection.current.name = this.name;

                    // set timer and if after the timeout it still is hold,
                    // we trigger the hold event
                    this.timer = setTimeout(function () {
                        if (Hammer.detection.current.name == 'hold') {
                            inst.trigger('hold', ev);
                        }
                    }, inst.options.hold_timeout);
                    break;

                    // when you move or end we clear the timer
                case Hammer.EVENT_MOVE:
                    if (ev.distance > inst.options.hold_threshold) {
                        clearTimeout(this.timer);
                    }
                    break;

                case Hammer.EVENT_END:
                    clearTimeout(this.timer);
                    break;
            }
        }
    };


    /**
     * Tap/DoubleTap
     * Quick touch at a place or double at the same place
     * @events  tap, doubletap
     */
    Hammer.gestures.Tap = {
        name: 'tap',
        index: 100,
        defaults: {
            tap_max_touchtime: 250,
            tap_max_distance: 10,
            tap_always: true,
            doubletap_distance: 20,
            doubletap_interval: 300
        },
        handler: function tapGesture(ev, inst) {
            if (ev.eventType == Hammer.EVENT_END) {
                // previous gesture, for the double tap since these are two different gesture detections
                var prev = Hammer.detection.previous,
                    did_doubletap = false;

                // when the touchtime is higher then the max touch time
                // or when the moving distance is too much
                if (ev.deltaTime > inst.options.tap_max_touchtime ||
                    ev.distance > inst.options.tap_max_distance) {
                    return;
                }

                // check if double tap
                if (prev && prev.name == 'tap' &&
                    (ev.timeStamp - prev.lastEvent.timeStamp) < inst.options.doubletap_interval &&
                    ev.distance < inst.options.doubletap_distance) {
                    inst.trigger('doubletap', ev);
                    did_doubletap = true;
                }

                // do a single tap
                if (!did_doubletap || inst.options.tap_always) {
                    Hammer.detection.current.name = 'tap';
                    inst.trigger(Hammer.detection.current.name, ev);
                }
            }
        }
    };


    /**
     * Swipe
     * triggers swipe events when the end velocity is above the threshold
     * @events  swipe, swipeleft, swiperight, swipeup, swipedown
     */
    Hammer.gestures.Swipe = {
        name: 'swipe',
        index: 40,
        defaults: {
            // set 0 for unlimited, but this can conflict with transform
            swipe_max_touches: 1,
            swipe_velocity: 0.7
        },
        handler: function swipeGesture(ev, inst) {
            if (ev.eventType == Hammer.EVENT_END) {
                // max touches
                if (inst.options.swipe_max_touches > 0 &&
                    ev.touches.length > inst.options.swipe_max_touches) {
                    return;
                }

                // when the distance we moved is too small we skip this gesture
                // or we can be already in dragging
                if (ev.velocityX > inst.options.swipe_velocity ||
                    ev.velocityY > inst.options.swipe_velocity) {
                    // trigger swipe events
                    inst.trigger(this.name, ev);
                    inst.trigger(this.name + ev.direction, ev);
                }
            }
        }
    };


    /**
     * Drag
     * Move with x fingers (default 1) around on the page. Blocking the scrolling when
     * moving left and right is a good practice. When all the drag events are blocking
     * you disable scrolling on that area.
     * @events  drag, drapleft, dragright, dragup, dragdown
     */
    Hammer.gestures.Drag = {
        name: 'drag',
        index: 50,
        defaults: {
            drag_min_distance: 10,
            // set 0 for unlimited, but this can conflict with transform
            drag_max_touches: 1,
            // prevent default browser behavior when dragging occurs
            // be careful with it, it makes the element a blocking element
            // when you are using the drag gesture, it is a good practice to set this true
            drag_block_horizontal: false,
            drag_block_vertical: false,
            // drag_lock_to_axis keeps the drag gesture on the axis that it started on,
            // It disallows vertical directions if the initial direction was horizontal, and vice versa.
            drag_lock_to_axis: false,
            // drag lock only kicks in when distance > drag_lock_min_distance
            // This way, locking occurs only when the distance has become large enough to reliably determine the direction
            drag_lock_min_distance: 25
        },
        triggered: false,
        handler: function dragGesture(ev, inst) {
            // current gesture isnt drag, but dragged is true
            // this means an other gesture is busy. now call dragend
            if (Hammer.detection.current.name != this.name && this.triggered) {
                inst.trigger(this.name + 'end', ev);
                this.triggered = false;
                return;
            }

            // max touches
            if (inst.options.drag_max_touches > 0 &&
                ev.touches.length > inst.options.drag_max_touches) {
                return;
            }

            switch (ev.eventType) {
                case Hammer.EVENT_START:
                    this.triggered = false;
                    break;

                case Hammer.EVENT_MOVE:
                    // when the distance we moved is too small we skip this gesture
                    // or we can be already in dragging
                    if (ev.distance < inst.options.drag_min_distance &&
                        Hammer.detection.current.name != this.name) {
                        return;
                    }

                    // we are dragging!
                    Hammer.detection.current.name = this.name;

                    // lock drag to axis?
                    if (Hammer.detection.current.lastEvent.drag_locked_to_axis || (inst.options.drag_lock_to_axis && inst.options.drag_lock_min_distance <= ev.distance)) {
                        ev.drag_locked_to_axis = true;
                    }
                    var last_direction = Hammer.detection.current.lastEvent.direction;
                    if (ev.drag_locked_to_axis && last_direction !== ev.direction) {
                        // keep direction on the axis that the drag gesture started on
                        if (Hammer.utils.isVertical(last_direction)) {
                            ev.direction = (ev.deltaY < 0) ? Hammer.DIRECTION_UP : Hammer.DIRECTION_DOWN;
                        }
                        else {
                            ev.direction = (ev.deltaX < 0) ? Hammer.DIRECTION_LEFT : Hammer.DIRECTION_RIGHT;
                        }
                    }

                    // first time, trigger dragstart event
                    if (!this.triggered) {
                        inst.trigger(this.name + 'start', ev);
                        this.triggered = true;
                    }

                    // trigger normal event
                    inst.trigger(this.name, ev);

                    // direction event, like dragdown
                    inst.trigger(this.name + ev.direction, ev);

                    // block the browser events
                    if ((inst.options.drag_block_vertical && Hammer.utils.isVertical(ev.direction)) ||
                        (inst.options.drag_block_horizontal && !Hammer.utils.isVertical(ev.direction))) {
                        ev.preventDefault();
                    }
                    break;

                case Hammer.EVENT_END:
                    // trigger dragend
                    if (this.triggered) {
                        inst.trigger(this.name + 'end', ev);
                    }

                    this.triggered = false;
                    break;
            }
        }
    };


    /**
     * Transform
     * User want to scale or rotate with 2 fingers
     * @events  transform, pinch, pinchin, pinchout, rotate
     */
    Hammer.gestures.Transform = {
        name: 'transform',
        index: 45,
        defaults: {
            // factor, no scale is 1, zoomin is to 0 and zoomout until higher then 1
            transform_min_scale: 0.01,
            // rotation in degrees
            transform_min_rotation: 1,
            // prevent default browser behavior when two touches are on the screen
            // but it makes the element a blocking element
            // when you are using the transform gesture, it is a good practice to set this true
            transform_always_block: false
        },
        triggered: false,
        handler: function transformGesture(ev, inst) {
            // current gesture isnt drag, but dragged is true
            // this means an other gesture is busy. now call dragend
            if (Hammer.detection.current.name != this.name && this.triggered) {
                inst.trigger(this.name + 'end', ev);
                this.triggered = false;
                return;
            }

            // atleast multitouch
            if (ev.touches.length < 2) {
                return;
            }

            // prevent default when two fingers are on the screen
            if (inst.options.transform_always_block) {
                ev.preventDefault();
            }

            switch (ev.eventType) {
                case Hammer.EVENT_START:
                    this.triggered = false;
                    break;

                case Hammer.EVENT_MOVE:
                    var scale_threshold = Math.abs(1 - ev.scale);
                    var rotation_threshold = Math.abs(ev.rotation);

                    // when the distance we moved is too small we skip this gesture
                    // or we can be already in dragging
                    if (scale_threshold < inst.options.transform_min_scale &&
                        rotation_threshold < inst.options.transform_min_rotation) {
                        return;
                    }

                    // we are transforming!
                    Hammer.detection.current.name = this.name;

                    // first time, trigger dragstart event
                    if (!this.triggered) {
                        inst.trigger(this.name + 'start', ev);
                        this.triggered = true;
                    }

                    inst.trigger(this.name, ev); // basic transform event

                    // trigger rotate event
                    if (rotation_threshold > inst.options.transform_min_rotation) {
                        inst.trigger('rotate', ev);
                    }

                    // trigger pinch event
                    if (scale_threshold > inst.options.transform_min_scale) {
                        inst.trigger('pinch', ev);
                        inst.trigger('pinch' + ((ev.scale < 1) ? 'in' : 'out'), ev);
                    }
                    break;

                case Hammer.EVENT_END:
                    // trigger dragend
                    if (this.triggered) {
                        inst.trigger(this.name + 'end', ev);
                    }

                    this.triggered = false;
                    break;
            }
        }
    };


    /**
     * Touch
     * Called as first, tells the user has touched the screen
     * @events  touch
     */
    Hammer.gestures.Touch = {
        name: 'touch',
        index: -Infinity,
        defaults: {
            // call preventDefault at touchstart, and makes the element blocking by
            // disabling the scrolling of the page, but it improves gestures like
            // transforming and dragging.
            // be careful with using this, it can be very annoying for users to be stuck
            // on the page
            prevent_default: false,

            // disable mouse events, so only touch (or pen!) input triggers events
            prevent_mouseevents: false
        },
        handler: function touchGesture(ev, inst) {
            if (inst.options.prevent_mouseevents && ev.pointerType == Hammer.POINTER_MOUSE) {
                ev.stopDetect();
                return;
            }

            if (inst.options.prevent_default) {
                ev.preventDefault();
            }

            if (ev.eventType == Hammer.EVENT_START) {
                inst.trigger(this.name, ev);
            }
        }
    };


    /**
     * Release
     * Called as last, tells the user has released the screen
     * @events  release
     */
    Hammer.gestures.Release = {
        name: 'release',
        index: Infinity,
        handler: function releaseGesture(ev, inst) {
            if (ev.eventType == Hammer.EVENT_END) {
                inst.trigger(this.name, ev);
            }
        }
    };

    // node export
    if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = Hammer;
    }
        // just window export
    else {
        window.Hammer = Hammer;

        // requireJS module definition
        if (typeof window.define === 'function' && window.define.amd) {
            window.define('hammer', [], function () {
                return Hammer;
            });
        }
    }
})(this);
/*
 * angular-hammer v1.0.1
 * (c) 2013 Monospaced http://monospaced.com
 * License: MIT
 */

(function (window, angular, Hammer) {

    var hmTouchEvents = angular.module('hmTouchEvents', []),
        hmGestures = ['hmHold:hold',
                      'hmTap:tap',
                      'hmDoubletap:doubletap',
                      'hmDrag:drag',
                      'hmDragup:dragup',
                      'hmDragdown:dragdown',
                      'hmDragleft:dragleft',
                      'hmDragright:dragright',
                      'hmSwipe:swipe',
                      'hmSwipeup:swipeup',
                      'hmSwipedown:swipedown',
                      'hmSwipeleft:swipeleft',
                      'hmSwiperight:swiperight',
                      'hmTransform:transform',
                      'hmRotate:rotate',
                      'hmPinch:pinch',
                      'hmPinchin:pinchin',
                      'hmPinchout:pinchout',
                      'hmTouch:touch',
                      'hmRelease:release'];

    angular.forEach(hmGestures, function (name) {
        var directive = name.split(':'),
            directiveName = directive[0],
            eventName = directive[1];

        hmTouchEvents.directive(directiveName, ['$parse', '$window', function ($parse, $window) {
            return {
                restrict: 'A, C',
                link: function (scope, element, attr) {
                    var expr = $parse(attr[directiveName]),
                        fn = function (event) {
                            scope.$apply(function () {
                                expr(scope, { $event: event });
                            });
                        },
                        opts = $parse(attr['hmOptions'])(scope, {}),
                        hammer;

                    if (typeof Hammer === 'undefined' || !$window.addEventListener) {
                        // fallback to mouse events where appropriate
                        if (directiveName === 'hmTap') {
                            element.bind('click', fn);
                        }
                        if (directiveName === 'hmDoubletap') {
                            element.bind('dblclick', fn);
                        }
                        return;
                    }

                    // don't create multiple Hammer instances per element
                    if (!(hammer = element.data('hammer'))) {
                        hammer = Hammer(element[0], opts);
                        element.data('hammer', hammer);
                    }

                    // bind Hammer touch event
                    hammer.on(eventName, fn);

                    // unbind Hammer touch event
                    scope.$on('$destroy', function () {
                        hammer.off(eventName, fn);
                    });

                }
            };
        }]);
    });

})(window, window.angular, window.Hammer);
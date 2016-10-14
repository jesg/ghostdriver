function(){return function(){var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ba="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global?global:this;
function ca(a,b){if(b){for(var c=ba,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&aa(c,d,{configurable:!0,writable:!0,value:f})}}
ca("String.prototype.repeat",function(a){return a?a:function(a){var c;if(null==this)throw new TypeError("The 'this' value for String.prototype.repeat must not be null or undefined");c=this+"";if(0>a||1342177279<a)throw new RangeError("Invalid count value");a|=0;for(var d="";a;)if(a&1&&(d+=c),a>>>=1)c+=c;return d}});ca("Math.sign",function(a){return a?a:function(a){a=Number(a);return!a||isNaN(a)?a:0<a?1:-1}});var k=this;
function da(a,b){var c=a.split("."),d=k;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]?d=d[e]:d=d[e]={}:d[e]=b}
function ea(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function l(a){return"string"==typeof a}function fa(a,b,c){return a.call.apply(a.bind,arguments)}function ga(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function ha(a,b,c){ha=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?fa:ga;return ha.apply(null,arguments)}function ia(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
function m(a){var b=n;function c(){}c.prototype=b.prototype;a.G=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.F=function(a,c,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[c].apply(a,g)}};var ja=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function ka(a,b){for(var c=0,d=ja(String(a)).split("."),e=ja(String(b)).split("."),f=Math.max(d.length,e.length),g=0;!c&&g<f;g++){var h=d[g]||"",r=e[g]||"",x=RegExp("(\\d*)(\\D*)","g"),M=RegExp("(\\d*)(\\D*)","g");do{var W=x.exec(h)||["","",""],X=M.exec(r)||["","",""];if(0==W[0].length&&0==X[0].length)break;c=la(0==W[1].length?0:parseInt(W[1],10),0==X[1].length?0:parseInt(X[1],10))||la(0==W[2].length,0==X[2].length)||la(W[2],X[2])}while(!c)}return c}function la(a,b){return a<b?-1:a>b?1:0}
function ma(a){return String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()})};function na(a,b){if(l(a))return l(b)&&1==b.length?a.indexOf(b,0):-1;for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1}function p(a,b){for(var c=a.length,d=l(a)?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)}function oa(a,b){for(var c=a.length,d=[],e=0,f=l(a)?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];b.call(void 0,h,g,a)&&(d[e++]=h)}return d}function q(a,b,c){var d=c;p(a,function(c,f){d=b.call(void 0,d,c,f,a)});return d}
function pa(a,b){for(var c=a.length,d=l(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;return!1}function qa(a,b){var c;a:{c=a.length;for(var d=l(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:l(a)?a.charAt(c):a[c]}function ra(a){return Array.prototype.concat.apply(Array.prototype,arguments)}function sa(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)};var ta={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",
darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",
ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",
lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",
moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",
seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};var ua="backgroundColor borderTopColor borderRightColor borderBottomColor borderLeftColor color outlineColor".split(" "),va=/#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])/,wa=/^#(?:[0-9a-f]{3}){1,2}$/i,xa=/^(?:rgba)?\((\d{1,3}),\s?(\d{1,3}),\s?(\d{1,3}),\s?(0|1|0\.\d*)\)$/i,ya=/^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;var t;a:{var za=k.navigator;if(za){var Aa=za.userAgent;if(Aa){t=Aa;break a}}t=""}function u(a){return-1!=t.indexOf(a)};function Ba(){return u("Opera")||u("OPR")}function Ca(){return(u("Chrome")||u("CriOS"))&&!Ba()&&!u("Edge")};function Da(){return u("iPhone")&&!u("iPod")&&!u("iPad")};var Ea=Ba(),v=u("Trident")||u("MSIE"),Fa=u("Edge"),Ga=u("Gecko")&&!(-1!=t.toLowerCase().indexOf("webkit")&&!u("Edge"))&&!(u("Trident")||u("MSIE"))&&!u("Edge"),Ha=-1!=t.toLowerCase().indexOf("webkit")&&!u("Edge");function Ia(){var a=t;if(Ga)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Fa)return/Edge\/([\d\.]+)/.exec(a);if(v)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Ha)return/WebKit\/(\S+)/.exec(a)}function Ja(){var a=k.document;return a?a.documentMode:void 0}
var Ka=function(){if(Ea&&k.opera){var a;var b=k.opera.version;try{a=b()}catch(c){a=b}return a}a="";(b=Ia())&&(a=b?b[1]:"");return v&&(b=Ja(),null!=b&&b>parseFloat(a))?String(b):a}(),La={},Ma=k.document,w=Ma&&v?Ja()||("CSS1Compat"==Ma.compatMode?parseInt(Ka,10):5):void 0;var Na=u("Firefox"),Oa=Da()||u("iPod"),Pa=u("iPad"),y=u("Android")&&!(Ca()||u("Firefox")||Ba()||u("Silk")),Qa=Ca(),Ra=u("Safari")&&!(Ca()||u("Coast")||Ba()||u("Edge")||u("Silk")||u("Android"))&&!(Da()||u("iPad")||u("iPod"));function Sa(a){return(a=a.exec(t))?a[1]:""}var Ta=function(){if(Na)return Sa(/Firefox\/([0-9.]+)/);if(v||Fa||Ea)return Ka;if(Qa)return Sa(/Chrome\/([0-9.]+)/);if(Ra&&!(Da()||u("iPad")||u("iPod")))return Sa(/Version\/([0-9.]+)/);if(Oa||Pa){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(t);if(a)return a[1]+"."+a[2]}else if(y)return(a=Sa(/Android\s+([0-9.]+)/))?a:Sa(/Version\/([0-9.]+)/);return""}();var Ua;function Va(a){Wa?Ua(a):y?ka(Xa,a):ka(Ta,a)}var Wa=function(){if(!Ga)return!1;var a=k.Components;if(!a)return!1;try{if(!a.classes)return!1}catch(e){return!1}var b=a.classes,a=a.interfaces,c=b["@mozilla.org/xpcom/version-comparator;1"].getService(a.nsIVersionComparator),d=b["@mozilla.org/xre/app-info;1"].getService(a.nsIXULAppInfo).version;Ua=function(a){c.compare(d,""+a)};return!0}(),Ya;if(y){var Za=/Android\s+([0-9\.]+)/.exec(t);Ya=Za?Za[1]:"0"}else Ya="0";var Xa=Ya,$a=v&&!(9<=Number(w));
y&&Va(2.3);y&&Va(4);Ra&&Va(6);!Ga&&!v||v&&9<=Number(w)||Ga&&(La["1.9.1"]||(La["1.9.1"]=0<=ka(Ka,"1.9.1")));v&&(La["9"]||(La["9"]=0<=ka(Ka,"9")));function ab(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function bb(a,b){if(a==b)return 0;if(a.compareDocumentPosition)return a.compareDocumentPosition(b)&2?1:-1;if(v&&!(9<=Number(w))){if(9==a.nodeType)return-1;if(9==b.nodeType)return 1}if("sourceIndex"in a||a.parentNode&&"sourceIndex"in a.parentNode){var c=1==a.nodeType,d=1==b.nodeType;if(c&&d)return a.sourceIndex-b.sourceIndex;var e=a.parentNode,f=b.parentNode;return e==f?cb(a,b):!c&&ab(e,b)?-1*db(a,b):!d&&ab(f,a)?db(b,a):(c?a.sourceIndex:e.sourceIndex)-(d?b.sourceIndex:f.sourceIndex)}d=9==a.nodeType?
a:a.ownerDocument||a.document;c=d.createRange();c.selectNode(a);c.collapse(!0);d=d.createRange();d.selectNode(b);d.collapse(!0);return c.compareBoundaryPoints(k.Range.START_TO_END,d)}function db(a,b){var c=a.parentNode;if(c==b)return-1;for(var d=b;d.parentNode!=c;)d=d.parentNode;return cb(d,a)}function cb(a,b){for(var c=b;c=c.previousSibling;)if(c==a)return-1;return 1};/*

 The MIT License

 Copyright (c) 2007 Cybozu Labs, Inc.
 Copyright (c) 2012 Google Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to
 deal in the Software without restriction, including without limitation the
 rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 IN THE SOFTWARE.
*/
function z(a,b,c){this.a=a;this.b=b||1;this.f=c||1};var A=v&&!(9<=Number(w)),eb=v&&!(8<=Number(w));function B(a,b,c,d){this.a=a;this.nodeName=c;this.nodeValue=d;this.nodeType=2;this.parentNode=this.ownerElement=b}function fb(a,b){var c=eb&&"href"==b.nodeName?a.getAttribute(b.nodeName,2):b.nodeValue;return new B(b,a,b.nodeName,c)};function gb(a){this.b=a;this.a=0}function hb(a){a=a.match(ib);for(var b=0;b<a.length;b++)jb.test(a[b])&&a.splice(b,1);return new gb(a)}var ib=RegExp("\\$?(?:(?![0-9-\\.])(?:\\*|[\\w-\\.]+):)?(?![0-9-\\.])(?:\\*|[\\w-\\.]+)|\\/\\/|\\.\\.|::|\\d+(?:\\.\\d*)?|\\.\\d+|\"[^\"]*\"|'[^']*'|[!<>]=|\\s+|.","g"),jb=/^\s/;function C(a,b){return a.b[a.a+(b||0)]}function D(a){return a.b[a.a++]}function kb(a){return a.b.length<=a.a};function E(a){var b=null,c=a.nodeType;1==c&&(b=a.textContent,b=void 0==b||null==b?a.innerText:b,b=void 0==b||null==b?"":b);if("string"!=typeof b)if(A&&"title"==a.nodeName.toLowerCase()&&1==c)b=a.text;else if(9==c||1==c){a=9==c?a.documentElement:a.firstChild;for(var c=0,d=[],b="";a;){do 1!=a.nodeType&&(b+=a.nodeValue),A&&"title"==a.nodeName.toLowerCase()&&(b+=a.text),d[c++]=a;while(a=a.firstChild);for(;c&&!(a=d[--c].nextSibling););}}else b=a.nodeValue;return""+b}
function F(a,b,c){if(null===b)return!0;try{if(!a.getAttribute)return!1}catch(d){return!1}eb&&"class"==b&&(b="className");return null==c?!!a.getAttribute(b):a.getAttribute(b,2)==c}function lb(a,b,c,d,e){return(A?mb:nb).call(null,a,b,l(c)?c:null,l(d)?d:null,e||new G)}
function mb(a,b,c,d,e){if(a instanceof H||8==a.b||c&&null===a.b){var f=b.all;if(!f)return e;a=ob(a);if("*"!=a&&(f=b.getElementsByTagName(a),!f))return e;if(c){for(var g=[],h=0;b=f[h++];)F(b,c,d)&&g.push(b);f=g}for(h=0;b=f[h++];)"*"==a&&"!"==b.tagName||I(e,b);return e}pb(a,b,c,d,e);return e}
function nb(a,b,c,d,e){b.getElementsByName&&d&&"name"==c&&!v?(b=b.getElementsByName(d),p(b,function(b){a.a(b)&&I(e,b)})):b.getElementsByClassName&&d&&"class"==c?(b=b.getElementsByClassName(d),p(b,function(b){b.className==d&&a.a(b)&&I(e,b)})):a instanceof J?pb(a,b,c,d,e):b.getElementsByTagName&&(b=b.getElementsByTagName(a.f()),p(b,function(a){F(a,c,d)&&I(e,a)}));return e}
function qb(a,b,c,d,e){var f;if((a instanceof H||8==a.b||c&&null===a.b)&&(f=b.childNodes)){var g=ob(a);if("*"!=g&&(f=oa(f,function(a){return a.tagName&&a.tagName.toLowerCase()==g}),!f))return e;c&&(f=oa(f,function(a){return F(a,c,d)}));p(f,function(a){"*"==g&&("!"==a.tagName||"*"==g&&1!=a.nodeType)||I(e,a)});return e}return rb(a,b,c,d,e)}function rb(a,b,c,d,e){for(b=b.firstChild;b;b=b.nextSibling)F(b,c,d)&&a.a(b)&&I(e,b);return e}
function pb(a,b,c,d,e){for(b=b.firstChild;b;b=b.nextSibling)F(b,c,d)&&a.a(b)&&I(e,b),pb(a,b,c,d,e)}function ob(a){if(a instanceof J){if(8==a.b)return"!";if(null===a.b)return"*"}return a.f()};function G(){this.b=this.a=null;this.l=0}function sb(a){this.node=a;this.a=this.b=null}function tb(a,b){if(!a.a)return b;if(!b.a)return a;for(var c=a.a,d=b.a,e=null,f,g=0;c&&d;){f=c.node;var h=d.node;f==h||f instanceof B&&h instanceof B&&f.a==h.a?(f=c,c=c.a,d=d.a):0<bb(c.node,d.node)?(f=d,d=d.a):(f=c,c=c.a);(f.b=e)?e.a=f:a.a=f;e=f;g++}for(f=c||d;f;)f.b=e,e=e.a=f,g++,f=f.a;a.b=e;a.l=g;return a}G.prototype.unshift=function(a){a=new sb(a);a.a=this.a;this.b?this.a.b=a:this.a=this.b=a;this.a=a;this.l++};
function I(a,b){var c=new sb(b);c.b=a.b;a.a?a.b.a=c:a.a=a.b=c;a.b=c;a.l++}function ub(a){return(a=a.a)?a.node:null}function vb(a){return(a=ub(a))?E(a):""}function K(a,b){return new wb(a,!!b)}function wb(a,b){this.f=a;this.b=(this.c=b)?a.b:a.a;this.a=null}function L(a){var b=a.b;if(b){var c=a.a=b;a.b=a.c?b.b:b.a;return c.node}return null};function n(a){this.i=a;this.b=this.g=!1;this.f=null}function N(a){return"\n  "+a.toString().split("\n").join("\n  ")}function xb(a,b){a.g=b}function yb(a,b){a.b=b}function O(a,b){var c=a.a(b);return c instanceof G?+vb(c):+c}function P(a,b){var c=a.a(b);return c instanceof G?vb(c):""+c}function Q(a,b){var c=a.a(b);return c instanceof G?!!c.l:!!c};function zb(a,b,c){n.call(this,a.i);this.c=a;this.h=b;this.o=c;this.g=b.g||c.g;this.b=b.b||c.b;this.c==Ab&&(c.b||c.g||4==c.i||0==c.i||!b.f?b.b||b.g||4==b.i||0==b.i||!c.f||(this.f={name:c.f.name,s:b}):this.f={name:b.f.name,s:c})}m(zb);
function R(a,b,c,d,e){b=b.a(d);c=c.a(d);var f;if(b instanceof G&&c instanceof G){b=K(b);for(d=L(b);d;d=L(b))for(e=K(c),f=L(e);f;f=L(e))if(a(E(d),E(f)))return!0;return!1}if(b instanceof G||c instanceof G){b instanceof G?(e=b,d=c):(e=c,d=b);f=K(e);for(var g=typeof d,h=L(f);h;h=L(f)){switch(g){case "number":h=+E(h);break;case "boolean":h=!!E(h);break;case "string":h=E(h);break;default:throw Error("Illegal primitive type for comparison.");}if(e==b&&a(h,d)||e==c&&a(d,h))return!0}return!1}return e?"boolean"==
typeof b||"boolean"==typeof c?a(!!b,!!c):"number"==typeof b||"number"==typeof c?a(+b,+c):a(b,c):a(+b,+c)}zb.prototype.a=function(a){return this.c.m(this.h,this.o,a)};zb.prototype.toString=function(){var a="Binary Expression: "+this.c,a=a+N(this.h);return a+=N(this.o)};function Bb(a,b,c,d){this.a=a;this.w=b;this.i=c;this.m=d}Bb.prototype.toString=function(){return this.a};var Cb={};
function S(a,b,c,d){if(Cb.hasOwnProperty(a))throw Error("Binary operator already created: "+a);a=new Bb(a,b,c,d);return Cb[a.toString()]=a}S("div",6,1,function(a,b,c){return O(a,c)/O(b,c)});S("mod",6,1,function(a,b,c){return O(a,c)%O(b,c)});S("*",6,1,function(a,b,c){return O(a,c)*O(b,c)});S("+",5,1,function(a,b,c){return O(a,c)+O(b,c)});S("-",5,1,function(a,b,c){return O(a,c)-O(b,c)});S("<",4,2,function(a,b,c){return R(function(a,b){return a<b},a,b,c)});
S(">",4,2,function(a,b,c){return R(function(a,b){return a>b},a,b,c)});S("<=",4,2,function(a,b,c){return R(function(a,b){return a<=b},a,b,c)});S(">=",4,2,function(a,b,c){return R(function(a,b){return a>=b},a,b,c)});var Ab=S("=",3,2,function(a,b,c){return R(function(a,b){return a==b},a,b,c,!0)});S("!=",3,2,function(a,b,c){return R(function(a,b){return a!=b},a,b,c,!0)});S("and",2,2,function(a,b,c){return Q(a,c)&&Q(b,c)});S("or",1,2,function(a,b,c){return Q(a,c)||Q(b,c)});function Db(a,b){if(b.a.length&&4!=a.i)throw Error("Primary expression must evaluate to nodeset if filter has predicate(s).");n.call(this,a.i);this.c=a;this.h=b;this.g=a.g;this.b=a.b}m(Db);Db.prototype.a=function(a){a=this.c.a(a);return Eb(this.h,a)};Db.prototype.toString=function(){var a;a="Filter:"+N(this.c);return a+=N(this.h)};function Fb(a,b){if(b.length<a.A)throw Error("Function "+a.j+" expects at least"+a.A+" arguments, "+b.length+" given");if(null!==a.v&&b.length>a.v)throw Error("Function "+a.j+" expects at most "+a.v+" arguments, "+b.length+" given");a.B&&p(b,function(b,d){if(4!=b.i)throw Error("Argument "+d+" to function "+a.j+" is not of type Nodeset: "+b);});n.call(this,a.i);this.h=a;this.c=b;xb(this,a.g||pa(b,function(a){return a.g}));yb(this,a.D&&!b.length||a.C&&!!b.length||pa(b,function(a){return a.b}))}m(Fb);
Fb.prototype.a=function(a){return this.h.m.apply(null,ra(a,this.c))};Fb.prototype.toString=function(){var a="Function: "+this.h;if(this.c.length)var b=q(this.c,function(a,b){return a+N(b)},"Arguments:"),a=a+N(b);return a};function Gb(a,b,c,d,e,f,g,h,r){this.j=a;this.i=b;this.g=c;this.D=d;this.C=e;this.m=f;this.A=g;this.v=void 0!==h?h:g;this.B=!!r}Gb.prototype.toString=function(){return this.j};var Hb={};
function T(a,b,c,d,e,f,g,h){if(Hb.hasOwnProperty(a))throw Error("Function already created: "+a+".");Hb[a]=new Gb(a,b,c,d,!1,e,f,g,h)}T("boolean",2,!1,!1,function(a,b){return Q(b,a)},1);T("ceiling",1,!1,!1,function(a,b){return Math.ceil(O(b,a))},1);T("concat",3,!1,!1,function(a,b){return q(sa(arguments,1),function(b,d){return b+P(d,a)},"")},2,null);T("contains",2,!1,!1,function(a,b,c){b=P(b,a);a=P(c,a);return-1!=b.indexOf(a)},2);T("count",1,!1,!1,function(a,b){return b.a(a).l},1,1,!0);
T("false",2,!1,!1,function(){return!1},0);T("floor",1,!1,!1,function(a,b){return Math.floor(O(b,a))},1);T("id",4,!1,!1,function(a,b){function c(a){if(A){var b=e.all[a];if(b){if(b.nodeType&&a==b.id)return b;if(b.length)return qa(b,function(b){return a==b.id})}return null}return e.getElementById(a)}var d=a.a,e=9==d.nodeType?d:d.ownerDocument,d=P(b,a).split(/\s+/),f=[];p(d,function(a){a=c(a);!a||0<=na(f,a)||f.push(a)});f.sort(bb);var g=new G;p(f,function(a){I(g,a)});return g},1);
T("lang",2,!1,!1,function(){return!1},1);T("last",1,!0,!1,function(a){if(1!=arguments.length)throw Error("Function last expects ()");return a.f},0);T("local-name",3,!1,!0,function(a,b){var c=b?ub(b.a(a)):a.a;return c?c.localName||c.nodeName.toLowerCase():""},0,1,!0);T("name",3,!1,!0,function(a,b){var c=b?ub(b.a(a)):a.a;return c?c.nodeName.toLowerCase():""},0,1,!0);T("namespace-uri",3,!0,!1,function(){return""},0,1,!0);
T("normalize-space",3,!1,!0,function(a,b){return(b?P(b,a):E(a.a)).replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"")},0,1);T("not",2,!1,!1,function(a,b){return!Q(b,a)},1);T("number",1,!1,!0,function(a,b){return b?O(b,a):+E(a.a)},0,1);T("position",1,!0,!1,function(a){return a.b},0);T("round",1,!1,!1,function(a,b){return Math.round(O(b,a))},1);T("starts-with",2,!1,!1,function(a,b,c){b=P(b,a);a=P(c,a);return!b.lastIndexOf(a,0)},2);T("string",3,!1,!0,function(a,b){return b?P(b,a):E(a.a)},0,1);
T("string-length",1,!1,!0,function(a,b){return(b?P(b,a):E(a.a)).length},0,1);T("substring",3,!1,!1,function(a,b,c,d){c=O(c,a);if(isNaN(c)||Infinity==c||-Infinity==c)return"";d=d?O(d,a):Infinity;if(isNaN(d)||-Infinity===d)return"";c=Math.round(c)-1;var e=Math.max(c,0);a=P(b,a);return Infinity==d?a.substring(e):a.substring(e,c+Math.round(d))},2,3);T("substring-after",3,!1,!1,function(a,b,c){b=P(b,a);a=P(c,a);c=b.indexOf(a);return-1==c?"":b.substring(c+a.length)},2);
T("substring-before",3,!1,!1,function(a,b,c){b=P(b,a);a=P(c,a);a=b.indexOf(a);return-1==a?"":b.substring(0,a)},2);T("sum",1,!1,!1,function(a,b){for(var c=K(b.a(a)),d=0,e=L(c);e;e=L(c))d+=+E(e);return d},1,1,!0);T("translate",3,!1,!1,function(a,b,c,d){b=P(b,a);c=P(c,a);var e=P(d,a);a={};for(d=0;d<c.length;d++){var f=c.charAt(d);f in a||(a[f]=e.charAt(d))}c="";for(d=0;d<b.length;d++)f=b.charAt(d),c+=f in a?a[f]:f;return c},3);T("true",2,!1,!1,function(){return!0},0);function J(a,b){this.h=a;this.c=b?b:null;this.b=null;switch(a){case "comment":this.b=8;break;case "text":this.b=3;break;case "processing-instruction":this.b=7;break;case "node":break;default:throw Error("Unexpected argument");}}function Ib(a){return"comment"==a||"text"==a||"processing-instruction"==a||"node"==a}J.prototype.a=function(a){return null===this.b||this.b==a.nodeType};J.prototype.f=function(){return this.h};
J.prototype.toString=function(){var a="Kind Test: "+this.h;!this.c||(a+=N(this.c));return a};function Jb(a){n.call(this,3);this.c=a.substring(1,a.length-1)}m(Jb);Jb.prototype.a=function(){return this.c};Jb.prototype.toString=function(){return"Literal: "+this.c};function H(a,b){this.j=a.toLowerCase();var c;c="*"==this.j?"*":"http://www.w3.org/1999/xhtml";this.c=b?b.toLowerCase():c}H.prototype.a=function(a){var b=a.nodeType;if(1!=b&&2!=b)return!1;b=void 0!==a.localName?a.localName:a.nodeName;return"*"!=this.j&&this.j!=b.toLowerCase()?!1:"*"==this.c?!0:this.c==(a.namespaceURI?a.namespaceURI.toLowerCase():"http://www.w3.org/1999/xhtml")};H.prototype.f=function(){return this.j};
H.prototype.toString=function(){return"Name Test: "+("http://www.w3.org/1999/xhtml"==this.c?"":this.c+":")+this.j};function Kb(a){n.call(this,1);this.c=a}m(Kb);Kb.prototype.a=function(){return this.c};Kb.prototype.toString=function(){return"Number: "+this.c};function Lb(a,b){n.call(this,a.i);this.h=a;this.c=b;this.g=a.g;this.b=a.b;if(1==this.c.length){var c=this.c[0];c.u||c.c!=Mb||(c=c.o,"*"!=c.f()&&(this.f={name:c.f(),s:null}))}}m(Lb);function Nb(){n.call(this,4)}m(Nb);Nb.prototype.a=function(a){var b=new G;a=a.a;9==a.nodeType?I(b,a):I(b,a.ownerDocument);return b};Nb.prototype.toString=function(){return"Root Helper Expression"};function Ob(){n.call(this,4)}m(Ob);Ob.prototype.a=function(a){var b=new G;I(b,a.a);return b};Ob.prototype.toString=function(){return"Context Helper Expression"};
function Pb(a){return"/"==a||"//"==a}Lb.prototype.a=function(a){var b=this.h.a(a);if(!(b instanceof G))throw Error("Filter expression must evaluate to nodeset.");a=this.c;for(var c=0,d=a.length;c<d&&b.l;c++){var e=a[c],f=K(b,e.c.a),g;if(e.g||e.c!=Qb)if(e.g||e.c!=Rb)for(g=L(f),b=e.a(new z(g));g=L(f);)g=e.a(new z(g)),b=tb(b,g);else g=L(f),b=e.a(new z(g));else{for(g=L(f);(b=L(f))&&(!g.contains||g.contains(b))&&b.compareDocumentPosition(g)&8;g=b);b=e.a(new z(g))}}return b};
Lb.prototype.toString=function(){var a;a="Path Expression:"+N(this.h);if(this.c.length){var b=q(this.c,function(a,b){return a+N(b)},"Steps:");a+=N(b)}return a};function Sb(a,b){this.a=a;this.b=!!b}
function Eb(a,b,c){for(c=c||0;c<a.a.length;c++)for(var d=a.a[c],e=K(b),f=b.l,g,h=0;g=L(e);h++){var r=a.b?f-h:h+1;g=d.a(new z(g,r,f));if("number"==typeof g)r=r==g;else if("string"==typeof g||"boolean"==typeof g)r=!!g;else if(g instanceof G)r=0<g.l;else throw Error("Predicate.evaluate returned an unexpected type.");if(!r){r=e;g=r.f;var x=r.a;if(!x)throw Error("Next must be called at least once before remove.");var M=x.b,x=x.a;M?M.a=x:g.a=x;x?x.b=M:g.b=M;g.l--;r.a=null}}return b}
Sb.prototype.toString=function(){return q(this.a,function(a,b){return a+N(b)},"Predicates:")};function U(a,b,c,d){n.call(this,4);this.c=a;this.o=b;this.h=c||new Sb([]);this.u=!!d;b=this.h;b=0<b.a.length?b.a[0].f:null;a.b&&b&&(a=b.name,a=A?a.toLowerCase():a,this.f={name:a,s:b.s});a:{a=this.h;for(b=0;b<a.a.length;b++)if(c=a.a[b],c.g||1==c.i||0==c.i){a=!0;break a}a=!1}this.g=a}m(U);
U.prototype.a=function(a){var b=a.a,c=this.f,d=null,e=null,f=0;c&&(d=c.name,e=c.s?P(c.s,a):null,f=1);if(this.u)if(this.g||this.c!=Tb)if(b=K((new U(Ub,new J("node"))).a(a)),c=L(b))for(a=this.m(c,d,e,f);c=L(b);)a=tb(a,this.m(c,d,e,f));else a=new G;else a=lb(this.o,b,d,e),a=Eb(this.h,a,f);else a=this.m(a.a,d,e,f);return a};U.prototype.m=function(a,b,c,d){a=this.c.f(this.o,a,b,c);return a=Eb(this.h,a,d)};
U.prototype.toString=function(){var a;a="Step:"+N("Operator: "+(this.u?"//":"/"));this.c.j&&(a+=N("Axis: "+this.c));a+=N(this.o);if(this.h.a.length){var b=q(this.h.a,function(a,b){return a+N(b)},"Predicates:");a+=N(b)}return a};function Vb(a,b,c,d){this.j=a;this.f=b;this.a=c;this.b=d}Vb.prototype.toString=function(){return this.j};var Wb={};function V(a,b,c,d){if(Wb.hasOwnProperty(a))throw Error("Axis already created: "+a);b=new Vb(a,b,c,!!d);return Wb[a]=b}
V("ancestor",function(a,b){for(var c=new G,d=b;d=d.parentNode;)a.a(d)&&c.unshift(d);return c},!0);V("ancestor-or-self",function(a,b){var c=new G,d=b;do a.a(d)&&c.unshift(d);while(d=d.parentNode);return c},!0);
var Mb=V("attribute",function(a,b){var c=new G,d=a.f();if("style"==d&&A&&b.style)return I(c,new B(b.style,b,"style",b.style.cssText)),c;var e=b.attributes;if(e)if(a instanceof J&&null===a.b||"*"==d)for(var d=0,f;f=e[d];d++)A?f.nodeValue&&I(c,fb(b,f)):I(c,f);else(f=e.getNamedItem(d))&&(A?f.nodeValue&&I(c,fb(b,f)):I(c,f));return c},!1),Tb=V("child",function(a,b,c,d,e){return(A?qb:rb).call(null,a,b,l(c)?c:null,l(d)?d:null,e||new G)},!1,!0);V("descendant",lb,!1,!0);
var Ub=V("descendant-or-self",function(a,b,c,d){var e=new G;F(b,c,d)&&a.a(b)&&I(e,b);return lb(a,b,c,d,e)},!1,!0),Qb=V("following",function(a,b,c,d){var e=new G;do for(var f=b;f=f.nextSibling;)F(f,c,d)&&a.a(f)&&I(e,f),e=lb(a,f,c,d,e);while(b=b.parentNode);return e},!1,!0);V("following-sibling",function(a,b){for(var c=new G,d=b;d=d.nextSibling;)a.a(d)&&I(c,d);return c},!1);V("namespace",function(){return new G},!1);
var Xb=V("parent",function(a,b){var c=new G;if(9==b.nodeType)return c;if(2==b.nodeType)return I(c,b.ownerElement),c;var d=b.parentNode;a.a(d)&&I(c,d);return c},!1),Rb=V("preceding",function(a,b,c,d){var e=new G,f=[];do f.unshift(b);while(b=b.parentNode);for(var g=1,h=f.length;g<h;g++){var r=[];for(b=f[g];b=b.previousSibling;)r.unshift(b);for(var x=0,M=r.length;x<M;x++)b=r[x],F(b,c,d)&&a.a(b)&&I(e,b),e=lb(a,b,c,d,e)}return e},!0,!0);
V("preceding-sibling",function(a,b){for(var c=new G,d=b;d=d.previousSibling;)a.a(d)&&c.unshift(d);return c},!0);var Yb=V("self",function(a,b){var c=new G;a.a(b)&&I(c,b);return c},!1);function Zb(a){n.call(this,1);this.c=a;this.g=a.g;this.b=a.b}m(Zb);Zb.prototype.a=function(a){return-O(this.c,a)};Zb.prototype.toString=function(){return"Unary Expression: -"+N(this.c)};function $b(a){n.call(this,4);this.c=a;xb(this,pa(this.c,function(a){return a.g}));yb(this,pa(this.c,function(a){return a.b}))}m($b);$b.prototype.a=function(a){var b=new G;p(this.c,function(c){c=c.a(a);if(!(c instanceof G))throw Error("Path expression must evaluate to NodeSet.");b=tb(b,c)});return b};$b.prototype.toString=function(){return q(this.c,function(a,b){return a+N(b)},"Union Expression:")};function ac(a,b){this.a=a;this.b=b}function bc(a){for(var b,c=[];;){Y(a,"Missing right hand side of binary expression.");b=cc(a);var d=D(a.a);if(!d)break;var e=(d=Cb[d]||null)&&d.w;if(!e){a.a.a--;break}for(;c.length&&e<=c[c.length-1].w;)b=new zb(c.pop(),c.pop(),b);c.push(b,d)}for(;c.length;)b=new zb(c.pop(),c.pop(),b);return b}function Y(a,b){if(kb(a.a))throw Error(b);}function dc(a,b){var c=D(a.a);if(c!=b)throw Error("Bad token, expected: "+b+" got: "+c);}
function ec(a){a=D(a.a);if(")"!=a)throw Error("Bad token: "+a);}function fc(a){a=D(a.a);if(2>a.length)throw Error("Unclosed literal string");return new Jb(a)}
function gc(a){var b,c=[],d;if(Pb(C(a.a))){b=D(a.a);d=C(a.a);if("/"==b&&(kb(a.a)||"."!=d&&".."!=d&&"@"!=d&&"*"!=d&&!/(?![0-9])[\w]/.test(d)))return new Nb;d=new Nb;Y(a,"Missing next location step.");b=hc(a,b);c.push(b)}else{a:{b=C(a.a);d=b.charAt(0);switch(d){case "$":throw Error("Variable reference not allowed in HTML XPath");case "(":D(a.a);b=bc(a);Y(a,'unclosed "("');dc(a,")");break;case '"':case "'":b=fc(a);break;default:if(isNaN(+b))if(!Ib(b)&&/(?![0-9])[\w]/.test(d)&&"("==C(a.a,1)){b=D(a.a);
b=Hb[b]||null;D(a.a);for(d=[];")"!=C(a.a);){Y(a,"Missing function argument list.");d.push(bc(a));if(","!=C(a.a))break;D(a.a)}Y(a,"Unclosed function argument list.");ec(a);b=new Fb(b,d)}else{b=null;break a}else b=new Kb(+D(a.a))}"["==C(a.a)&&(d=new Sb(ic(a)),b=new Db(b,d))}if(b)if(Pb(C(a.a)))d=b;else return b;else b=hc(a,"/"),d=new Ob,c.push(b)}for(;Pb(C(a.a));)b=D(a.a),Y(a,"Missing next location step."),b=hc(a,b),c.push(b);return new Lb(d,c)}
function hc(a,b){var c,d,e;if("/"!=b&&"//"!=b)throw Error('Step op should be "/" or "//"');if("."==C(a.a))return d=new U(Yb,new J("node")),D(a.a),d;if(".."==C(a.a))return d=new U(Xb,new J("node")),D(a.a),d;var f;if("@"==C(a.a))f=Mb,D(a.a),Y(a,"Missing attribute name");else if("::"==C(a.a,1)){if(!/(?![0-9])[\w]/.test(C(a.a).charAt(0)))throw Error("Bad token: "+D(a.a));c=D(a.a);f=Wb[c]||null;if(!f)throw Error("No axis with name: "+c);D(a.a);Y(a,"Missing node name")}else f=Tb;c=C(a.a);if(/(?![0-9])[\w\*]/.test(c.charAt(0)))if("("==
C(a.a,1)){if(!Ib(c))throw Error("Invalid node type: "+c);c=D(a.a);if(!Ib(c))throw Error("Invalid type name: "+c);dc(a,"(");Y(a,"Bad nodetype");e=C(a.a).charAt(0);var g=null;if('"'==e||"'"==e)g=fc(a);Y(a,"Bad nodetype");ec(a);c=new J(c,g)}else if(c=D(a.a),e=c.indexOf(":"),-1==e)c=new H(c);else{var g=c.substring(0,e),h;if("*"==g)h="*";else if(h=a.b(g),!h)throw Error("Namespace prefix not declared: "+g);c=c.substr(e+1);c=new H(c,h)}else throw Error("Bad token: "+D(a.a));e=new Sb(ic(a),f.a);return d||
new U(f,c,e,"//"==b)}function ic(a){for(var b=[];"["==C(a.a);){D(a.a);Y(a,"Missing predicate expression.");var c=bc(a);b.push(c);Y(a,"Unclosed predicate expression.");dc(a,"]")}return b}function cc(a){if("-"==C(a.a))return D(a.a),new Zb(cc(a));var b=gc(a);if("|"!=C(a.a))a=b;else{for(b=[b];"|"==D(a.a);)Y(a,"Missing next union location path."),b.push(gc(a));a.a.a--;a=new $b(b)}return a};function jc(a){switch(a.nodeType){case 1:return ia(kc,a);case 9:return jc(a.documentElement);case 11:case 10:case 6:case 12:return lc;default:return a.parentNode?jc(a.parentNode):lc}}function lc(){return null}function kc(a,b){if(a.prefix==b)return a.namespaceURI||"http://www.w3.org/1999/xhtml";var c=a.getAttributeNode("xmlns:"+b);return c&&c.specified?c.value||null:a.parentNode&&9!=a.parentNode.nodeType?kc(a.parentNode,b):null};function mc(a,b){if(!a.length)throw Error("Empty XPath expression.");var c=hb(a);if(kb(c))throw Error("Invalid XPath expression.");b?"function"==ea(b)||(b=ha(b.lookupNamespaceURI,b)):b=function(){return null};var d=bc(new ac(c,b));if(!kb(c))throw Error("Bad token: "+D(c));this.evaluate=function(a,b){var c=d.a(new z(a));return new Z(c,b)}}
function Z(a,b){if(!b)if(a instanceof G)b=4;else if("string"==typeof a)b=2;else if("number"==typeof a)b=1;else if("boolean"==typeof a)b=3;else throw Error("Unexpected evaluation result.");if(2!=b&&1!=b&&3!=b&&!(a instanceof G))throw Error("value could not be converted to the specified type");this.resultType=b;var c;switch(b){case 2:this.stringValue=a instanceof G?vb(a):""+a;break;case 1:this.numberValue=a instanceof G?+vb(a):+a;break;case 3:this.booleanValue=a instanceof G?0<a.l:!!a;break;case 4:case 5:case 6:case 7:var d=
K(a);c=[];for(var e=L(d);e;e=L(d))c.push(e instanceof B?e.a:e);this.snapshotLength=a.l;this.invalidIteratorState=!1;break;case 8:case 9:d=ub(a);this.singleNodeValue=d instanceof B?d.a:d;break;default:throw Error("Unknown XPathResult type.");}var f=0;this.iterateNext=function(){if(4!=b&&5!=b)throw Error("iterateNext called with wrong result type");return f>=c.length?null:c[f++]};this.snapshotItem=function(a){if(6!=b&&7!=b)throw Error("snapshotItem called with wrong result type");return a>=c.length||
0>a?null:c[a]}}Z.ANY_TYPE=0;Z.NUMBER_TYPE=1;Z.STRING_TYPE=2;Z.BOOLEAN_TYPE=3;Z.UNORDERED_NODE_ITERATOR_TYPE=4;Z.ORDERED_NODE_ITERATOR_TYPE=5;Z.UNORDERED_NODE_SNAPSHOT_TYPE=6;Z.ORDERED_NODE_SNAPSHOT_TYPE=7;Z.ANY_UNORDERED_NODE_TYPE=8;Z.FIRST_ORDERED_NODE_TYPE=9;function nc(a){this.lookupNamespaceURI=jc(a)}
da("wgxpath.install",function(a,b){var c=a||k,d=c.Document&&c.Document.prototype||c.document;if(!d.evaluate||b)c.XPathResult=Z,d.evaluate=function(a,b,c,d){return(new mc(a,c)).evaluate(b,d)},d.createExpression=function(a,b){return new mc(a,b)},d.createNSResolver=function(a){return new nc(a)}});function oc(a,b){var c=a.currentStyle||a.style,d=c[b];void 0===d&&"function"==ea(c.getPropertyValue)&&(d=c.getPropertyValue(b));if("inherit"!=d)return void 0!==d?d:null;for(c=a.parentNode;c&&1!=c.nodeType&&9!=c.nodeType&&11!=c.nodeType;)c=c.parentNode;return(c=c&&1==c.nodeType?c:null)?oc(c,b):null};da("_",function(a,b){var c=ma(b);if("float"==c||"cssFloat"==c||"styleFloat"==c)c=$a?"styleFloat":"cssFloat";var d;a:{d=c;var e=9==a.nodeType?a:a.ownerDocument||a.document;if(e.defaultView&&e.defaultView.getComputedStyle&&(e=e.defaultView.getComputedStyle(a,null))){d=e[d]||e.getPropertyValue(d)||"";break a}d=""}d=d||oc(a,c);if(null===d)d=null;else if(0<=na(ua,c)){b:{var f=d.match(xa);if(f){var c=Number(f[1]),e=Number(f[2]),g=Number(f[3]),f=Number(f[4]);if(0<=c&&255>=c&&0<=e&&255>=e&&0<=g&&255>=g&&
0<=f&&1>=f){c=[c,e,g,f];break b}}c=null}if(!c)b:{if(g=d.match(ya))if(c=Number(g[1]),e=Number(g[2]),g=Number(g[3]),0<=c&&255>=c&&0<=e&&255>=e&&0<=g&&255>=g){c=[c,e,g,1];break b}c=null}if(!c)b:{c=d.toLowerCase();e=ta[c.toLowerCase()];if(!e&&(e="#"==c.charAt(0)?c:"#"+c,4==e.length&&(e=e.replace(va,"#$1$1$2$2$3$3")),!wa.test(e))){c=null;break b}c=[parseInt(e.substr(1,2),16),parseInt(e.substr(3,2),16),parseInt(e.substr(5,2),16),1]}d=c?"rgba("+c.join(", ")+")":d}return d});; return this._.apply(null,arguments);}.apply({navigator:typeof window!=undefined?window.navigator:null,document:typeof window!=undefined?window.document:null}, arguments);}

/*
  lazysizes v5.3.2
*/
!function(e){var t=function(f,D,u){"use strict";var k,H;if(function(){var e;var t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:true,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:true,ricTimeout:0,throttleDelay:125};H=f.lazySizesConfig||f.lazysizesConfig||{};for(e in t){if(!(e in H)){H[e]=t[e]}}}(),!D||!D.getElementsByClassName){return{init:function(){},cfg:H,noSupport:true}}var O=D.documentElement,i=f.HTMLPictureElement,P="addEventListener",$="getAttribute",q=f[P].bind(f),I=f.setTimeout,U=f.requestAnimationFrame||I,o=f.requestIdleCallback,j=/^picture$/i,r=["load","error","lazyincluded","_lazyloaded"],a={},G=Array.prototype.forEach,J=function(e,t){if(!a[t]){a[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")}return a[t].test(e[$]("class")||"")&&a[t]},K=function(e,t){if(!J(e,t)){e.setAttribute("class",(e[$]("class")||"").trim()+" "+t)}},Q=function(e,t){var a;if(a=J(e,t)){e.setAttribute("class",(e[$]("class")||"").replace(a," "))}},V=function(t,a,e){var i=e?P:"removeEventListener";if(e){V(t,a)}r.forEach(function(e){t[i](e,a)})},X=function(e,t,a,i,r){var n=D.createEvent("Event");if(!a){a={}}a.instance=k;n.initEvent(t,!i,!r);n.detail=a;e.dispatchEvent(n);return n},Y=function(e,t){var a;if(!i&&(a=f.picturefill||H.pf)){if(t&&t.src&&!e[$]("srcset")){e.setAttribute("srcset",t.src)}a({reevaluate:true,elements:[e]})}else if(t&&t.src){e.src=t.src}},Z=function(e,t){return(getComputedStyle(e,null)||{})[t]},s=function(e,t,a){a=a||e.offsetWidth;while(a<H.minSize&&t&&!e._lazysizesWidth){a=t.offsetWidth;t=t.parentNode}return a},ee=function(){var a,i;var t=[];var r=[];var n=t;var s=function(){var e=n;n=t.length?r:t;a=true;i=false;while(e.length){e.shift()()}a=false};var e=function(e,t){if(a&&!t){e.apply(this,arguments)}else{n.push(e);if(!i){i=true;(D.hidden?I:U)(s)}}};e._lsFlush=s;return e}(),te=function(a,e){return e?function(){ee(a)}:function(){var e=this;var t=arguments;ee(function(){a.apply(e,t)})}},ae=function(e){var a;var i=0;var r=H.throttleDelay;var n=H.ricTimeout;var t=function(){a=false;i=u.now();e()};var s=o&&n>49?function(){o(t,{timeout:n});if(n!==H.ricTimeout){n=H.ricTimeout}}:te(function(){I(t)},true);return function(e){var t;if(e=e===true){n=33}if(a){return}a=true;t=r-(u.now()-i);if(t<0){t=0}if(e||t<9){s()}else{I(s,t)}}},ie=function(e){var t,a;var i=99;var r=function(){t=null;e()};var n=function(){var e=u.now()-a;if(e<i){I(n,i-e)}else{(o||r)(r)}};return function(){a=u.now();if(!t){t=I(n,i)}}},e=function(){var v,m,c,h,e;var y,z,g,p,C,b,A;var n=/^img$/i;var d=/^iframe$/i;var E="onscroll"in f&&!/(gle|ing)bot/.test(navigator.userAgent);var _=0;var w=0;var M=0;var N=-1;var L=function(e){M--;if(!e||M<0||!e.target){M=0}};var x=function(e){if(A==null){A=Z(D.body,"visibility")=="hidden"}return A||!(Z(e.parentNode,"visibility")=="hidden"&&Z(e,"visibility")=="hidden")};var W=function(e,t){var a;var i=e;var r=x(e);g-=t;b+=t;p-=t;C+=t;while(r&&(i=i.offsetParent)&&i!=D.body&&i!=O){r=(Z(i,"opacity")||1)>0;if(r&&Z(i,"overflow")!="visible"){a=i.getBoundingClientRect();r=C>a.left&&p<a.right&&b>a.top-1&&g<a.bottom+1}}return r};var t=function(){var e,t,a,i,r,n,s,o,l,f,u,c;var d=k.elements;if((h=H.loadMode)&&M<8&&(e=d.length)){t=0;N++;for(;t<e;t++){if(!d[t]||d[t]._lazyRace){continue}if(!E||k.prematureUnveil&&k.prematureUnveil(d[t])){R(d[t]);continue}if(!(o=d[t][$]("data-expand"))||!(n=o*1)){n=w}if(!f){f=!H.expand||H.expand<1?O.clientHeight>500&&O.clientWidth>500?500:370:H.expand;k._defEx=f;u=f*H.expFactor;c=H.hFac;A=null;if(w<u&&M<1&&N>2&&h>2&&!D.hidden){w=u;N=0}else if(h>1&&N>1&&M<6){w=f}else{w=_}}if(l!==n){y=innerWidth+n*c;z=innerHeight+n;s=n*-1;l=n}a=d[t].getBoundingClientRect();if((b=a.bottom)>=s&&(g=a.top)<=z&&(C=a.right)>=s*c&&(p=a.left)<=y&&(b||C||p||g)&&(H.loadHidden||x(d[t]))&&(m&&M<3&&!o&&(h<3||N<4)||W(d[t],n))){R(d[t]);r=true;if(M>9){break}}else if(!r&&m&&!i&&M<4&&N<4&&h>2&&(v[0]||H.preloadAfterLoad)&&(v[0]||!o&&(b||C||p||g||d[t][$](H.sizesAttr)!="auto"))){i=v[0]||d[t]}}if(i&&!r){R(i)}}};var a=ae(t);var S=function(e){var t=e.target;if(t._lazyCache){delete t._lazyCache;return}L(e);K(t,H.loadedClass);Q(t,H.loadingClass);V(t,B);X(t,"lazyloaded")};var i=te(S);var B=function(e){i({target:e.target})};var T=function(e,t){var a=e.getAttribute("data-load-mode")||H.iframeLoadMode;if(a==0){e.contentWindow.location.replace(t)}else if(a==1){e.src=t}};var F=function(e){var t;var a=e[$](H.srcsetAttr);if(t=H.customMedia[e[$]("data-media")||e[$]("media")]){e.setAttribute("media",t)}if(a){e.setAttribute("srcset",a)}};var s=te(function(t,e,a,i,r){var n,s,o,l,f,u;if(!(f=X(t,"lazybeforeunveil",e)).defaultPrevented){if(i){if(a){K(t,H.autosizesClass)}else{t.setAttribute("sizes",i)}}s=t[$](H.srcsetAttr);n=t[$](H.srcAttr);if(r){o=t.parentNode;l=o&&j.test(o.nodeName||"")}u=e.firesLoad||"src"in t&&(s||n||l);f={target:t};K(t,H.loadingClass);if(u){clearTimeout(c);c=I(L,2500);V(t,B,true)}if(l){G.call(o.getElementsByTagName("source"),F)}if(s){t.setAttribute("srcset",s)}else if(n&&!l){if(d.test(t.nodeName)){T(t,n)}else{t.src=n}}if(r&&(s||l)){Y(t,{src:n})}}if(t._lazyRace){delete t._lazyRace}Q(t,H.lazyClass);ee(function(){var e=t.complete&&t.naturalWidth>1;if(!u||e){if(e){K(t,H.fastLoadedClass)}S(f);t._lazyCache=true;I(function(){if("_lazyCache"in t){delete t._lazyCache}},9)}if(t.loading=="lazy"){M--}},true)});var R=function(e){if(e._lazyRace){return}var t;var a=n.test(e.nodeName);var i=a&&(e[$](H.sizesAttr)||e[$]("sizes"));var r=i=="auto";if((r||!m)&&a&&(e[$]("src")||e.srcset)&&!e.complete&&!J(e,H.errorClass)&&J(e,H.lazyClass)){return}t=X(e,"lazyunveilread").detail;if(r){re.updateElem(e,true,e.offsetWidth)}e._lazyRace=true;M++;s(e,t,r,i,a)};var r=ie(function(){H.loadMode=3;a()});var o=function(){if(H.loadMode==3){H.loadMode=2}r()};var l=function(){if(m){return}if(u.now()-e<999){I(l,999);return}m=true;H.loadMode=3;a();q("scroll",o,true)};return{_:function(){e=u.now();k.elements=D.getElementsByClassName(H.lazyClass);v=D.getElementsByClassName(H.lazyClass+" "+H.preloadClass);q("scroll",a,true);q("resize",a,true);q("pageshow",function(e){if(e.persisted){var t=D.querySelectorAll("."+H.loadingClass);if(t.length&&t.forEach){U(function(){t.forEach(function(e){if(e.complete){R(e)}})})}}});if(f.MutationObserver){new MutationObserver(a).observe(O,{childList:true,subtree:true,attributes:true})}else{O[P]("DOMNodeInserted",a,true);O[P]("DOMAttrModified",a,true);setInterval(a,999)}q("hashchange",a,true);["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){D[P](e,a,true)});if(/d$|^c/.test(D.readyState)){l()}else{q("load",l);D[P]("DOMContentLoaded",a);I(l,2e4)}if(k.elements.length){t();ee._lsFlush()}else{a()}},checkElems:a,unveil:R,_aLSL:o}}(),re=function(){var a;var n=te(function(e,t,a,i){var r,n,s;e._lazysizesWidth=i;i+="px";e.setAttribute("sizes",i);if(j.test(t.nodeName||"")){r=t.getElementsByTagName("source");for(n=0,s=r.length;n<s;n++){r[n].setAttribute("sizes",i)}}if(!a.detail.dataAttr){Y(e,a.detail)}});var i=function(e,t,a){var i;var r=e.parentNode;if(r){a=s(e,r,a);i=X(e,"lazybeforesizes",{width:a,dataAttr:!!t});if(!i.defaultPrevented){a=i.detail.width;if(a&&a!==e._lazysizesWidth){n(e,r,i,a)}}}};var e=function(){var e;var t=a.length;if(t){e=0;for(;e<t;e++){i(a[e])}}};var t=ie(e);return{_:function(){a=D.getElementsByClassName(H.autosizesClass);q("resize",t)},checkElems:t,updateElem:i}}(),t=function(){if(!t.i&&D.getElementsByClassName){t.i=true;re._();e._()}};return I(function(){H.init&&t()}),k={cfg:H,autoSizer:re,loader:e,init:t,uP:Y,aC:K,rC:Q,hC:J,fire:X,gW:s,rAF:ee}}(e,e.document,Date);"object"==typeof module&&module.exports?module.exports=t:"function"==typeof define&&define.amd?define(t):e.lazySizes=t}(window);
/*lazysizes init*/
window.lazySizesConfig = window.lazySizesConfig || {};
document.addEventListener('lazybeforeunveil', function(e){
	var bg = e.target.getAttribute('data-bg');
	if(bg){
		e.target.style.backgroundImage = 'url(' + bg + ')';
	}
});
/*!
 * perfect-scrollbar v1.5.0
 * Copyright 2020 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */(function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):(a=a||self,a.PerfectScrollbar=b())})(this,function(){'use strict';var u=Math.abs,v=Math.floor;function a(a){return getComputedStyle(a)}function b(a,b){for(var c in b){var d=b[c];"number"==typeof d&&(d+="px"),a.style[c]=d}return a}function c(a){var b=document.createElement("div");return b.className=a,b}function d(a,b){if(!w)throw new Error("No element matching method supported");return w.call(a,b)}function e(a){a.remove?a.remove():a.parentNode&&a.parentNode.removeChild(a)}function f(a,b){return Array.prototype.filter.call(a.children,function(a){return d(a,b)})}function g(a,b){var c=a.element.classList,d=z.state.scrolling(b);c.contains(d)?clearTimeout(A[b]):c.add(d)}function h(a,b){A[b]=setTimeout(function(){return a.isAlive&&a.element.classList.remove(z.state.scrolling(b))},a.settings.scrollingThreshold)}function j(a,b){g(a,b),h(a,b)}function k(a){if("function"==typeof window.CustomEvent)return new CustomEvent(a);var b=document.createEvent("CustomEvent");return b.initCustomEvent(a,!1,!1,void 0),b}function l(a,b,c,d,e){void 0===d&&(d=!0),void 0===e&&(e=!1);var f;if("top"===b)f=["contentHeight","containerHeight","scrollTop","y","up","down"];else if("left"===b)f=["contentWidth","containerWidth","scrollLeft","x","left","right"];else throw new Error("A proper axis should be provided");m(a,c,f,d,e)}function m(a,b,c,d,e){var f=c[0],g=c[1],h=c[2],i=c[3],l=c[4],m=c[5];void 0===d&&(d=!0),void 0===e&&(e=!1);var n=a.element;// reset reach
 a.reach[i]=null,1>n[h]&&(a.reach[i]="start"),n[h]>a[f]-a[g]-1&&(a.reach[i]="end"),b&&(n.dispatchEvent(k("ps-scroll-"+i)),0>b?n.dispatchEvent(k("ps-scroll-"+l)):0<b&&n.dispatchEvent(k("ps-scroll-"+m)),d&&j(a,i)),a.reach[i]&&(b||e)&&n.dispatchEvent(k("ps-"+i+"-reach-"+a.reach[i]))}function n(a){return parseInt(a,10)||0}function o(a){return d(a,"input,[contenteditable]")||d(a,"select,[contenteditable]")||d(a,"textarea,[contenteditable]")||d(a,"button,[contenteditable]")}function p(b){var c=a(b);return n(c.width)+n(c.paddingLeft)+n(c.paddingRight)+n(c.borderLeftWidth)+n(c.borderRightWidth)}function q(a){var b=Math.ceil,c=a.element,d=v(c.scrollTop),g=c.getBoundingClientRect();a.containerWidth=b(g.width),a.containerHeight=b(g.height),a.contentWidth=c.scrollWidth,a.contentHeight=c.scrollHeight,c.contains(a.scrollbarXRail)||(f(c,z.element.rail("x")).forEach(function(a){return e(a)}),c.appendChild(a.scrollbarXRail)),c.contains(a.scrollbarYRail)||(f(c,z.element.rail("y")).forEach(function(a){return e(a)}),c.appendChild(a.scrollbarYRail)),!a.settings.suppressScrollX&&a.containerWidth+a.settings.scrollXMarginOffset<a.contentWidth?(a.scrollbarXActive=!0,a.railXWidth=a.containerWidth-a.railXMarginWidth,a.railXRatio=a.containerWidth/a.railXWidth,a.scrollbarXWidth=r(a,n(a.railXWidth*a.containerWidth/a.contentWidth)),a.scrollbarXLeft=n((a.negativeScrollAdjustment+c.scrollLeft)*(a.railXWidth-a.scrollbarXWidth)/(a.contentWidth-a.containerWidth))):a.scrollbarXActive=!1,!a.settings.suppressScrollY&&a.containerHeight+a.settings.scrollYMarginOffset<a.contentHeight?(a.scrollbarYActive=!0,a.railYHeight=a.containerHeight-a.railYMarginHeight,a.railYRatio=a.containerHeight/a.railYHeight,a.scrollbarYHeight=r(a,n(a.railYHeight*a.containerHeight/a.contentHeight)),a.scrollbarYTop=n(d*(a.railYHeight-a.scrollbarYHeight)/(a.contentHeight-a.containerHeight))):a.scrollbarYActive=!1,a.scrollbarXLeft>=a.railXWidth-a.scrollbarXWidth&&(a.scrollbarXLeft=a.railXWidth-a.scrollbarXWidth),a.scrollbarYTop>=a.railYHeight-a.scrollbarYHeight&&(a.scrollbarYTop=a.railYHeight-a.scrollbarYHeight),s(c,a),a.scrollbarXActive?c.classList.add(z.state.active("x")):(c.classList.remove(z.state.active("x")),a.scrollbarXWidth=0,a.scrollbarXLeft=0,c.scrollLeft=!0===a.isRtl?a.contentWidth:0),a.scrollbarYActive?c.classList.add(z.state.active("y")):(c.classList.remove(z.state.active("y")),a.scrollbarYHeight=0,a.scrollbarYTop=0,c.scrollTop=0)}function r(a,b){var c=Math.min,d=Math.max;return a.settings.minScrollbarLength&&(b=d(b,a.settings.minScrollbarLength)),a.settings.maxScrollbarLength&&(b=c(b,a.settings.maxScrollbarLength)),b}function s(a,c){var d={width:c.railXWidth},e=v(a.scrollTop);d.left=c.isRtl?c.negativeScrollAdjustment+a.scrollLeft+c.containerWidth-c.contentWidth:a.scrollLeft,c.isScrollbarXUsingBottom?d.bottom=c.scrollbarXBottom-e:d.top=c.scrollbarXTop+e,b(c.scrollbarXRail,d);var f={top:e,height:c.railYHeight};c.isScrollbarYUsingRight?c.isRtl?f.right=c.contentWidth-(c.negativeScrollAdjustment+a.scrollLeft)-c.scrollbarYRight-c.scrollbarYOuterWidth-9:f.right=c.scrollbarYRight-a.scrollLeft:c.isRtl?f.left=c.negativeScrollAdjustment+a.scrollLeft+2*c.containerWidth-c.contentWidth-c.scrollbarYLeft-c.scrollbarYOuterWidth:f.left=c.scrollbarYLeft+a.scrollLeft,b(c.scrollbarYRail,f),b(c.scrollbarX,{left:c.scrollbarXLeft,width:c.scrollbarXWidth-c.railBorderXWidth}),b(c.scrollbarY,{top:c.scrollbarYTop,height:c.scrollbarYHeight-c.railBorderYWidth})}function t(a,b){function c(b){b.touches&&b.touches[0]&&(b[k]=b.touches[0].pageY),s[o]=t+v*(b[k]-u),g(a,p),q(a),b.stopPropagation(),b.preventDefault()}function d(){h(a,p),a[r].classList.remove(z.state.clicking),a.event.unbind(a.ownerDocument,"mousemove",c)}function f(b,e){t=s[o],e&&b.touches&&(b[k]=b.touches[0].pageY),u=b[k],v=(a[j]-a[i])/(a[l]-a[n]),e?a.event.bind(a.ownerDocument,"touchmove",c):(a.event.bind(a.ownerDocument,"mousemove",c),a.event.once(a.ownerDocument,"mouseup",d),b.preventDefault()),a[r].classList.add(z.state.clicking),b.stopPropagation()}var i=b[0],j=b[1],k=b[2],l=b[3],m=b[4],n=b[5],o=b[6],p=b[7],r=b[8],s=a.element,t=null,u=null,v=null;a.event.bind(a[m],"mousedown",function(a){f(a)}),a.event.bind(a[m],"touchstart",function(a){f(a,!0)})}var w="undefined"!=typeof Element&&(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector),z={main:"ps",rtl:"ps__rtl",element:{thumb:function(a){return"ps__thumb-"+a},rail:function(a){return"ps__rail-"+a},consuming:"ps__child--consume"},state:{focus:"ps--focus",clicking:"ps--clicking",active:function(a){return"ps--active-"+a},scrolling:function(a){return"ps--scrolling-"+a}}},A={x:null,y:null},B=function(a){this.element=a,this.handlers={}},C={isEmpty:{configurable:!0}};B.prototype.bind=function(a,b){"undefined"==typeof this.handlers[a]&&(this.handlers[a]=[]),this.handlers[a].push(b),this.element.addEventListener(a,b,!1)},B.prototype.unbind=function(a,b){var c=this;this.handlers[a]=this.handlers[a].filter(function(d){return!!(b&&d!==b)||(c.element.removeEventListener(a,d,!1),!1)})},B.prototype.unbindAll=function(){for(var a in this.handlers)this.unbind(a)},C.isEmpty.get=function(){var a=this;return Object.keys(this.handlers).every(function(b){return 0===a.handlers[b].length})},Object.defineProperties(B.prototype,C);var D=function(){this.eventElements=[]};D.prototype.eventElement=function(a){var b=this.eventElements.filter(function(b){return b.element===a})[0];return b||(b=new B(a),this.eventElements.push(b)),b},D.prototype.bind=function(a,b,c){this.eventElement(a).bind(b,c)},D.prototype.unbind=function(a,b,c){var d=this.eventElement(a);d.unbind(b,c),d.isEmpty&&this.eventElements.splice(this.eventElements.indexOf(d),1)},D.prototype.unbindAll=function(){this.eventElements.forEach(function(a){return a.unbindAll()}),this.eventElements=[]},D.prototype.once=function(a,b,c){var d=this.eventElement(a),e=function(a){d.unbind(b,e),c(a)};d.bind(b,e)};var E={isWebKit:"undefined"!=typeof document&&"WebkitAppearance"in document.documentElement.style,supportsTouch:"undefined"!=typeof window&&("ontouchstart"in window||"maxTouchPoints"in window.navigator&&0<window.navigator.maxTouchPoints||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:"undefined"!=typeof navigator&&navigator.msMaxTouchPoints,isChrome:"undefined"!=typeof navigator&&/Chrome/i.test(navigator&&navigator.userAgent)},F=function(){return{handlers:["click-rail","drag-thumb","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollingThreshold:1e3,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!0,wheelSpeed:1}},G={"click-rail":function(a){a.element;a.event.bind(a.scrollbarY,"mousedown",function(a){return a.stopPropagation()}),a.event.bind(a.scrollbarYRail,"mousedown",function(b){var c=b.pageY-window.pageYOffset-a.scrollbarYRail.getBoundingClientRect().top,d=c>a.scrollbarYTop?1:-1;a.element.scrollTop+=d*a.containerHeight,q(a),b.stopPropagation()}),a.event.bind(a.scrollbarX,"mousedown",function(a){return a.stopPropagation()}),a.event.bind(a.scrollbarXRail,"mousedown",function(b){var c=b.pageX-window.pageXOffset-a.scrollbarXRail.getBoundingClientRect().left,d=c>a.scrollbarXLeft?1:-1;a.element.scrollLeft+=d*a.containerWidth,q(a),b.stopPropagation()})},"drag-thumb":function(a){t(a,["containerWidth","contentWidth","pageX","railXWidth","scrollbarX","scrollbarXWidth","scrollLeft","x","scrollbarXRail"]),t(a,["containerHeight","contentHeight","pageY","railYHeight","scrollbarY","scrollbarYHeight","scrollTop","y","scrollbarYRail"])},keyboard:function(a){function b(b,d){var e=v(c.scrollTop);if(0===b){if(!a.scrollbarYActive)return!1;if(0===e&&0<d||e>=a.contentHeight-a.containerHeight&&0>d)return!a.settings.wheelPropagation}var f=c.scrollLeft;if(0===d){if(!a.scrollbarXActive)return!1;if(0===f&&0>b||f>=a.contentWidth-a.containerWidth&&0<b)return!a.settings.wheelPropagation}return!0}var c=a.element,f=function(){return d(c,":hover")},g=function(){return d(a.scrollbarX,":focus")||d(a.scrollbarY,":focus")};a.event.bind(a.ownerDocument,"keydown",function(d){if(!(d.isDefaultPrevented&&d.isDefaultPrevented()||d.defaultPrevented)&&(f()||g())){var e=document.activeElement?document.activeElement:a.ownerDocument.activeElement;if(e){if("IFRAME"===e.tagName)e=e.contentDocument.activeElement;else// go deeper if element is a webcomponent
 for(;e.shadowRoot;)e=e.shadowRoot.activeElement;if(o(e))return}var h=0,i=0;switch(d.which){case 37:h=d.metaKey?-a.contentWidth:d.altKey?-a.containerWidth:-30;break;case 38:i=d.metaKey?a.contentHeight:d.altKey?a.containerHeight:30;break;case 39:h=d.metaKey?a.contentWidth:d.altKey?a.containerWidth:30;break;case 40:i=d.metaKey?-a.contentHeight:d.altKey?-a.containerHeight:-30;break;case 32:i=d.shiftKey?a.containerHeight:-a.containerHeight;break;case 33:i=a.containerHeight;break;case 34:i=-a.containerHeight;break;case 36:i=a.contentHeight;break;case 35:i=-a.contentHeight;break;default:return;}a.settings.suppressScrollX&&0!==h||a.settings.suppressScrollY&&0!==i||(c.scrollTop-=i,c.scrollLeft+=h,q(a),b(h,i)&&d.preventDefault())}})},wheel:function(b){function c(a,c){var d,e=v(h.scrollTop),f=0===h.scrollTop,g=e+h.offsetHeight===h.scrollHeight,i=0===h.scrollLeft,j=h.scrollLeft+h.offsetWidth===h.scrollWidth;return d=u(c)>u(a)?f||g:i||j,!d||!b.settings.wheelPropagation}function d(a){var b=a.deltaX,c=-1*a.deltaY;return("undefined"==typeof b||"undefined"==typeof c)&&(b=-1*a.wheelDeltaX/6,c=a.wheelDeltaY/6),a.deltaMode&&1===a.deltaMode&&(b*=10,c*=10),b!==b&&c!==c/* NaN checks */&&(b=0,c=a.wheelDelta),a.shiftKey?[-c,-b]:[b,c]}function f(b,c,d){// FIXME: this is a workaround for <select> issue in FF and IE #571
 if(!E.isWebKit&&h.querySelector("select:focus"))return!0;if(!h.contains(b))return!1;for(var e=b;e&&e!==h;){if(e.classList.contains(z.element.consuming))return!0;var f=a(e);// if deltaY && vertical scrollable
 if(d&&f.overflowY.match(/(scroll|auto)/)){var g=e.scrollHeight-e.clientHeight;if(0<g&&(0<e.scrollTop&&0>d||e.scrollTop<g&&0<d))return!0}// if deltaX && horizontal scrollable
 if(c&&f.overflowX.match(/(scroll|auto)/)){var i=e.scrollWidth-e.clientWidth;if(0<i&&(0<e.scrollLeft&&0>c||e.scrollLeft<i&&0<c))return!0}e=e.parentNode}return!1}function g(a){var e=d(a),g=e[0],i=e[1];if(!f(a.target,g,i)){var j=!1;b.settings.useBothWheelAxes?b.scrollbarYActive&&!b.scrollbarXActive?(i?h.scrollTop-=i*b.settings.wheelSpeed:h.scrollTop+=g*b.settings.wheelSpeed,j=!0):b.scrollbarXActive&&!b.scrollbarYActive&&(g?h.scrollLeft+=g*b.settings.wheelSpeed:h.scrollLeft-=i*b.settings.wheelSpeed,j=!0):(h.scrollTop-=i*b.settings.wheelSpeed,h.scrollLeft+=g*b.settings.wheelSpeed),q(b),j=j||c(g,i),j&&!a.ctrlKey&&(a.stopPropagation(),a.preventDefault())}}var h=b.element;"undefined"==typeof window.onwheel?"undefined"!=typeof window.onmousewheel&&b.event.bind(h,"mousewheel",g):b.event.bind(h,"wheel",g)},touch:function(b){function c(a,c){var d=v(l.scrollTop),e=l.scrollLeft,f=u(a),g=u(c);if(g>f){// user is perhaps trying to swipe up/down the page
 if(0>c&&d===b.contentHeight-b.containerHeight||0<c&&0===d)// set prevent for mobile Chrome refresh
 return 0===window.scrollY&&0<c&&E.isChrome;}else if(f>g&&(0>a&&e===b.contentWidth-b.containerWidth||0<a&&0===e))// user is perhaps trying to swipe left/right across the page
 return!0;return!0}function d(a,c){l.scrollTop-=c,l.scrollLeft-=a,q(b)}function f(a){return a.targetTouches?a.targetTouches[0]:a}function g(a){return!(a.pointerType&&"pen"===a.pointerType&&0===a.buttons)&&(!!(a.targetTouches&&1===a.targetTouches.length)||!!(a.pointerType&&"mouse"!==a.pointerType&&a.pointerType!==a.MSPOINTER_TYPE_MOUSE))}function h(a){if(g(a)){var b=f(a);m.pageX=b.pageX,m.pageY=b.pageY,n=new Date().getTime(),null!==p&&clearInterval(p)}}function i(b,c,d){if(!l.contains(b))return!1;for(var e=b;e&&e!==l;){if(e.classList.contains(z.element.consuming))return!0;var f=a(e);// if deltaY && vertical scrollable
 if(d&&f.overflowY.match(/(scroll|auto)/)){var g=e.scrollHeight-e.clientHeight;if(0<g&&(0<e.scrollTop&&0>d||e.scrollTop<g&&0<d))return!0}// if deltaX && horizontal scrollable
 if(c&&f.overflowX.match(/(scroll|auto)/)){var h=e.scrollWidth-e.clientWidth;if(0<h&&(0<e.scrollLeft&&0>c||e.scrollLeft<h&&0<c))return!0}e=e.parentNode}return!1}function j(a){if(g(a)){var b=f(a),e={pageX:b.pageX,pageY:b.pageY},h=e.pageX-m.pageX,j=e.pageY-m.pageY;if(i(a.target,h,j))return;d(h,j),m=e;var k=new Date().getTime(),l=k-n;0<l&&(o.x=h/l,o.y=j/l,n=k),c(h,j)&&a.preventDefault()}}function k(){b.settings.swipeEasing&&(clearInterval(p),p=setInterval(function(){return b.isInitialized?void clearInterval(p):o.x||o.y?.01>u(o.x)&&.01>u(o.y)?void clearInterval(p):void(d(30*o.x,30*o.y),o.x*=.8,o.y*=.8):void clearInterval(p)},10))}if(E.supportsTouch||E.supportsIePointer){var l=b.element,m={},n=0,o={},p=null;E.supportsTouch?(b.event.bind(l,"touchstart",h),b.event.bind(l,"touchmove",j),b.event.bind(l,"touchend",k)):E.supportsIePointer&&(window.PointerEvent?(b.event.bind(l,"pointerdown",h),b.event.bind(l,"pointermove",j),b.event.bind(l,"pointerup",k)):window.MSPointerEvent&&(b.event.bind(l,"MSPointerDown",h),b.event.bind(l,"MSPointerMove",j),b.event.bind(l,"MSPointerUp",k)))}}},H=function(d,e){var f=this;if(void 0===e&&(e={}),"string"==typeof d&&(d=document.querySelector(d)),!d||!d.nodeName)throw new Error("no element is specified to initialize PerfectScrollbar");for(var g in this.element=d,d.classList.add(z.main),this.settings=F(),e)this.settings[g]=e[g];this.containerWidth=null,this.containerHeight=null,this.contentWidth=null,this.contentHeight=null;var h=function(){return d.classList.add(z.state.focus)},i=function(){return d.classList.remove(z.state.focus)};this.isRtl="rtl"===a(d).direction,!0===this.isRtl&&d.classList.add(z.rtl),this.isNegativeScroll=function(){var a=d.scrollLeft,b=null;return d.scrollLeft=-1,b=0>d.scrollLeft,d.scrollLeft=a,b}(),this.negativeScrollAdjustment=this.isNegativeScroll?d.scrollWidth-d.clientWidth:0,this.event=new D,this.ownerDocument=d.ownerDocument||document,this.scrollbarXRail=c(z.element.rail("x")),d.appendChild(this.scrollbarXRail),this.scrollbarX=c(z.element.thumb("x")),this.scrollbarXRail.appendChild(this.scrollbarX),this.scrollbarX.setAttribute("tabindex",0),this.event.bind(this.scrollbarX,"focus",h),this.event.bind(this.scrollbarX,"blur",i),this.scrollbarXActive=null,this.scrollbarXWidth=null,this.scrollbarXLeft=null;var j=a(this.scrollbarXRail);this.scrollbarXBottom=parseInt(j.bottom,10),isNaN(this.scrollbarXBottom)?(this.isScrollbarXUsingBottom=!1,this.scrollbarXTop=n(j.top)):this.isScrollbarXUsingBottom=!0,this.railBorderXWidth=n(j.borderLeftWidth)+n(j.borderRightWidth),b(this.scrollbarXRail,{display:"block"}),this.railXMarginWidth=n(j.marginLeft)+n(j.marginRight),b(this.scrollbarXRail,{display:""}),this.railXWidth=null,this.railXRatio=null,this.scrollbarYRail=c(z.element.rail("y")),d.appendChild(this.scrollbarYRail),this.scrollbarY=c(z.element.thumb("y")),this.scrollbarYRail.appendChild(this.scrollbarY),this.scrollbarY.setAttribute("tabindex",0),this.event.bind(this.scrollbarY,"focus",h),this.event.bind(this.scrollbarY,"blur",i),this.scrollbarYActive=null,this.scrollbarYHeight=null,this.scrollbarYTop=null;var k=a(this.scrollbarYRail);this.scrollbarYRight=parseInt(k.right,10),isNaN(this.scrollbarYRight)?(this.isScrollbarYUsingRight=!1,this.scrollbarYLeft=n(k.left)):this.isScrollbarYUsingRight=!0,this.scrollbarYOuterWidth=this.isRtl?p(this.scrollbarY):null,this.railBorderYWidth=n(k.borderTopWidth)+n(k.borderBottomWidth),b(this.scrollbarYRail,{display:"block"}),this.railYMarginHeight=n(k.marginTop)+n(k.marginBottom),b(this.scrollbarYRail,{display:""}),this.railYHeight=null,this.railYRatio=null,this.reach={x:0>=d.scrollLeft?"start":d.scrollLeft>=this.contentWidth-this.containerWidth?"end":null,y:0>=d.scrollTop?"start":d.scrollTop>=this.contentHeight-this.containerHeight?"end":null},this.isAlive=!0,this.settings.handlers.forEach(function(a){return G[a](f)}),this.lastScrollTop=v(d.scrollTop),this.lastScrollLeft=d.scrollLeft,this.event.bind(this.element,"scroll",function(a){return f.onScroll(a)}),q(this)};return H.prototype.update=function(){this.isAlive&&(// Recalcuate negative scrollLeft adjustment
 // Recalculate rail margins
 // Hide scrollbars not to affect scrollWidth and scrollHeight
 this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0,b(this.scrollbarXRail,{display:"block"}),b(this.scrollbarYRail,{display:"block"}),this.railXMarginWidth=n(a(this.scrollbarXRail).marginLeft)+n(a(this.scrollbarXRail).marginRight),this.railYMarginHeight=n(a(this.scrollbarYRail).marginTop)+n(a(this.scrollbarYRail).marginBottom),b(this.scrollbarXRail,{display:"none"}),b(this.scrollbarYRail,{display:"none"}),q(this),l(this,"top",0,!1,!0),l(this,"left",0,!1,!0),b(this.scrollbarXRail,{display:""}),b(this.scrollbarYRail,{display:""}))},H.prototype.onScroll=function(){this.isAlive&&(q(this),l(this,"top",this.element.scrollTop-this.lastScrollTop),l(this,"left",this.element.scrollLeft-this.lastScrollLeft),this.lastScrollTop=v(this.element.scrollTop),this.lastScrollLeft=this.element.scrollLeft)},H.prototype.destroy=function(){this.isAlive&&(// unset elements
 this.event.unbindAll(),e(this.scrollbarX),e(this.scrollbarY),e(this.scrollbarXRail),e(this.scrollbarYRail),this.removePsClasses(),this.element=null,this.scrollbarX=null,this.scrollbarY=null,this.scrollbarXRail=null,this.scrollbarYRail=null,this.isAlive=!1)},H.prototype.removePsClasses=function(){this.element.className=this.element.className.split(" ").filter(function(a){return!a.match(/^ps([-_].+|)$/)}).join(" ")},H});
 //# sourceMappingURL=perfect-scrollbar.min.js.map

/*
	Menu Desktop
*/
var menuDesktop = (function(){
    function dropdownHandler(){
		var objMenu = document.getElementById("jsDesktopMenu");
        if(window.innerWidth >= 1100){
            objMenu.querySelectorAll('li').forEach(function(dropdownItem){
                dropdownItem.querySelectorAll('ul').forEach(function(itemUl){
                  var objUl = itemUl.parentNode;
                  objUl.classList.add('has_submenu');
                });
                dropdownItem.onmouseenter = function(event){
				  event.target.classList.add('is_active');
                };
                dropdownItem.onmouseleave = function(event){
					event.target.classList.remove('is_active');
                };
            });
			Array.prototype.slice.call(objMenu.querySelectorAll('nav > ul > li')).forEach(function(itemUl){
				if(itemUl.classList.contains('has-submenu')){
					itemUl.classList.add('top-level');
				};
			});
			function checkActiveMenu(){
				Array.prototype.slice.call(objMenu.querySelectorAll('.is-active')).forEach(function(itemActive){
					let obj = itemActive.closest(".has-submenu");
					let obj2 = itemActive.closest(".top-level");

					obj?.classList.add('itemParentActive');
					obj2?.classList.add('itemParentActive');
				});
			};
			checkActiveMenu();
        };
    };
    dropdownHandler();
    window.addEventListener("resize", dropdownHandler);
})();
/*
	Header Sticky
*/
function findOffset(element) {
			var top = 0, left = 0;
			do {
				top += element.offsetTop  || 0;
				left += element.offsetLeft || 0;
				element = element.offsetParent;
			} while(element);
			return {
				top: top,
				left: left
			};
		}
		(function () {
			var stickyHeader = document.getElementById('js-init-sticky');
			if(!stickyHeader) return false;
			var headerOffset = findOffset(stickyHeader);

			if(stickyHeader && headerOffset){
				window.onscroll = function() {
					initStickyheader();
				};
				initStickyheader();
			};
			function initStickyheader(){
				var bodyScrollTop = document.documentElement.scrollTop || document.body.scrollTop;

				if (bodyScrollTop >= headerOffset.top) {
					stickyHeader.classList.add('sticky-header');
				} else {
					stickyHeader.classList.remove('sticky-header');
				}
			};
})();
import{o as ne,c as oe,d as re}from"./index-CFoRZlhQ.js";const ae="/assets/IMG_2039-DCDy5Klu.jpg";function ie(L){return L&&L.__esModule&&Object.prototype.hasOwnProperty.call(L,"default")?L.default:L}var Q={exports:{}},ue=Q.exports,ee;function se(){return ee||(ee=1,function(L,te){(function(y,u){L.exports=u()})(ue,function(){return function(y){function u(n){if(a[n])return a[n].exports;var s=a[n]={exports:{},id:n,loaded:!1};return y[n].call(s.exports,s,s.exports,u),s.loaded=!0,s.exports}var a={};return u.m=y,u.c=a,u.p="dist/",u(0)}([function(y,u,a){function n(o){return o&&o.__esModule?o:{default:o}}var s=Object.assign||function(o){for(var k=1;k<arguments.length;k++){var A=arguments[k];for(var H in A)Object.prototype.hasOwnProperty.call(A,H)&&(o[H]=A[H])}return o},b=a(1),w=(n(b),a(6)),r=n(w),p=a(7),i=n(p),c=a(8),l=n(c),m=a(9),j=n(m),_=a(10),V=n(_),J=a(11),K=n(J),R=a(14),F=n(R),M=[],Y=!1,v={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},E=function(){var o=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(o&&(Y=!0),Y)return M=(0,K.default)(M,v),(0,V.default)(M,v.once),M},P=function(){M=(0,F.default)(),E()},t=function(){M.forEach(function(o,k){o.node.removeAttribute("data-aos"),o.node.removeAttribute("data-aos-easing"),o.node.removeAttribute("data-aos-duration"),o.node.removeAttribute("data-aos-delay")})},e=function(o){return o===!0||o==="mobile"&&j.default.mobile()||o==="phone"&&j.default.phone()||o==="tablet"&&j.default.tablet()||typeof o=="function"&&o()===!0},d=function(o){v=s(v,o),M=(0,F.default)();var k=document.all&&!window.atob;return e(v.disable)||k?t():(v.disableMutationObserver||l.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),v.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",v.easing),document.querySelector("body").setAttribute("data-aos-duration",v.duration),document.querySelector("body").setAttribute("data-aos-delay",v.delay),v.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?E(!0):v.startEvent==="load"?window.addEventListener(v.startEvent,function(){E(!0)}):document.addEventListener(v.startEvent,function(){E(!0)}),window.addEventListener("resize",(0,i.default)(E,v.debounceDelay,!0)),window.addEventListener("orientationchange",(0,i.default)(E,v.debounceDelay,!0)),window.addEventListener("scroll",(0,r.default)(function(){(0,V.default)(M,v.once)},v.throttleDelay)),v.disableMutationObserver||l.default.ready("[data-aos]",P),M)};y.exports={init:d,refresh:E,refreshHard:P}},function(y,u){},,,,,function(y,u){(function(a){function n(e,d,o){function k(f){var O=z,B=T;return z=T=void 0,C=f,x=e.apply(B,O)}function A(f){return C=f,h=setTimeout(I,d),$?k(f):x}function H(f){var O=f-S,B=f-C,Z=d-O;return D?P(Z,N-B):Z}function W(f){var O=f-S,B=f-C;return S===void 0||O>=d||O<0||D&&B>=N}function I(){var f=t();return W(f)?U(f):void(h=setTimeout(I,H(f)))}function U(f){return h=void 0,g&&z?k(f):(z=T=void 0,x)}function X(){h!==void 0&&clearTimeout(h),C=0,z=S=T=h=void 0}function G(){return h===void 0?x:U(t())}function q(){var f=t(),O=W(f);if(z=arguments,T=this,S=f,O){if(h===void 0)return A(S);if(D)return h=setTimeout(I,d),k(S)}return h===void 0&&(h=setTimeout(I,d)),x}var z,T,N,x,h,S,C=0,$=!1,D=!1,g=!0;if(typeof e!="function")throw new TypeError(c);return d=p(d)||0,b(o)&&($=!!o.leading,D="maxWait"in o,N=D?E(p(o.maxWait)||0,d):N,g="trailing"in o?!!o.trailing:g),q.cancel=X,q.flush=G,q}function s(e,d,o){var k=!0,A=!0;if(typeof e!="function")throw new TypeError(c);return b(o)&&(k="leading"in o?!!o.leading:k,A="trailing"in o?!!o.trailing:A),n(e,d,{leading:k,maxWait:d,trailing:A})}function b(e){var d=typeof e>"u"?"undefined":i(e);return!!e&&(d=="object"||d=="function")}function w(e){return!!e&&(typeof e>"u"?"undefined":i(e))=="object"}function r(e){return(typeof e>"u"?"undefined":i(e))=="symbol"||w(e)&&v.call(e)==m}function p(e){if(typeof e=="number")return e;if(r(e))return l;if(b(e)){var d=typeof e.valueOf=="function"?e.valueOf():e;e=b(d)?d+"":d}if(typeof e!="string")return e===0?e:+e;e=e.replace(j,"");var o=V.test(e);return o||J.test(e)?K(e.slice(2),o?2:8):_.test(e)?l:+e}var i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",l=NaN,m="[object Symbol]",j=/^\s+|\s+$/g,_=/^[-+]0x[0-9a-f]+$/i,V=/^0b[01]+$/i,J=/^0o[0-7]+$/i,K=parseInt,R=(typeof a>"u"?"undefined":i(a))=="object"&&a&&a.Object===Object&&a,F=(typeof self>"u"?"undefined":i(self))=="object"&&self&&self.Object===Object&&self,M=R||F||Function("return this")(),Y=Object.prototype,v=Y.toString,E=Math.max,P=Math.min,t=function(){return M.Date.now()};y.exports=s}).call(u,function(){return this}())},function(y,u){(function(a){function n(t,e,d){function o(g){var f=q,O=z;return q=z=void 0,S=g,N=t.apply(O,f)}function k(g){return S=g,x=setTimeout(W,e),C?o(g):N}function A(g){var f=g-h,O=g-S,B=e-f;return $?E(B,T-O):B}function H(g){var f=g-h,O=g-S;return h===void 0||f>=e||f<0||$&&O>=T}function W(){var g=P();return H(g)?I(g):void(x=setTimeout(W,A(g)))}function I(g){return x=void 0,D&&q?o(g):(q=z=void 0,N)}function U(){x!==void 0&&clearTimeout(x),S=0,q=h=z=x=void 0}function X(){return x===void 0?N:I(P())}function G(){var g=P(),f=H(g);if(q=arguments,z=this,h=g,f){if(x===void 0)return k(h);if($)return x=setTimeout(W,e),o(h)}return x===void 0&&(x=setTimeout(W,e)),N}var q,z,T,N,x,h,S=0,C=!1,$=!1,D=!0;if(typeof t!="function")throw new TypeError(i);return e=r(e)||0,s(d)&&(C=!!d.leading,$="maxWait"in d,T=$?v(r(d.maxWait)||0,e):T,D="trailing"in d?!!d.trailing:D),G.cancel=U,G.flush=X,G}function s(t){var e=typeof t>"u"?"undefined":p(t);return!!t&&(e=="object"||e=="function")}function b(t){return!!t&&(typeof t>"u"?"undefined":p(t))=="object"}function w(t){return(typeof t>"u"?"undefined":p(t))=="symbol"||b(t)&&Y.call(t)==l}function r(t){if(typeof t=="number")return t;if(w(t))return c;if(s(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=s(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(m,"");var d=_.test(t);return d||V.test(t)?J(t.slice(2),d?2:8):j.test(t)?c:+t}var p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i="Expected a function",c=NaN,l="[object Symbol]",m=/^\s+|\s+$/g,j=/^[-+]0x[0-9a-f]+$/i,_=/^0b[01]+$/i,V=/^0o[0-7]+$/i,J=parseInt,K=(typeof a>"u"?"undefined":p(a))=="object"&&a&&a.Object===Object&&a,R=(typeof self>"u"?"undefined":p(self))=="object"&&self&&self.Object===Object&&self,F=K||R||Function("return this")(),M=Object.prototype,Y=M.toString,v=Math.max,E=Math.min,P=function(){return F.Date.now()};y.exports=n}).call(u,function(){return this}())},function(y,u){function a(p){var i=void 0,c=void 0;for(i=0;i<p.length;i+=1)if(c=p[i],c.dataset&&c.dataset.aos||c.children&&a(c.children))return!0;return!1}function n(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function s(){return!!n()}function b(p,i){var c=window.document,l=n(),m=new l(w);r=i,m.observe(c.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function w(p){p&&p.forEach(function(i){var c=Array.prototype.slice.call(i.addedNodes),l=Array.prototype.slice.call(i.removedNodes),m=c.concat(l);if(a(m))return r()})}Object.defineProperty(u,"__esModule",{value:!0});var r=function(){};u.default={isSupported:s,ready:b}},function(y,u){function a(c,l){if(!(c instanceof l))throw new TypeError("Cannot call a class as a function")}function n(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(u,"__esModule",{value:!0});var s=function(){function c(l,m){for(var j=0;j<m.length;j++){var _=m[j];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(l,_.key,_)}}return function(l,m,j){return m&&c(l.prototype,m),j&&c(l,j),l}}(),b=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,w=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,p=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,i=function(){function c(){a(this,c)}return s(c,[{key:"phone",value:function(){var l=n();return!(!b.test(l)&&!w.test(l.substr(0,4)))}},{key:"mobile",value:function(){var l=n();return!(!r.test(l)&&!p.test(l.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),c}();u.default=new i},function(y,u){Object.defineProperty(u,"__esModule",{value:!0});var a=function(s,b,w){var r=s.node.getAttribute("data-aos-once");b>s.position?s.node.classList.add("aos-animate"):typeof r<"u"&&(r==="false"||!w&&r!=="true")&&s.node.classList.remove("aos-animate")},n=function(s,b){var w=window.pageYOffset,r=window.innerHeight;s.forEach(function(p,i){a(p,r+w,b)})};u.default=n},function(y,u,a){function n(r){return r&&r.__esModule?r:{default:r}}Object.defineProperty(u,"__esModule",{value:!0});var s=a(12),b=n(s),w=function(r,p){return r.forEach(function(i,c){i.node.classList.add("aos-init"),i.position=(0,b.default)(i.node,p.offset)}),r};u.default=w},function(y,u,a){function n(r){return r&&r.__esModule?r:{default:r}}Object.defineProperty(u,"__esModule",{value:!0});var s=a(13),b=n(s),w=function(r,p){var i=0,c=0,l=window.innerHeight,m={offset:r.getAttribute("data-aos-offset"),anchor:r.getAttribute("data-aos-anchor"),anchorPlacement:r.getAttribute("data-aos-anchor-placement")};switch(m.offset&&!isNaN(m.offset)&&(c=parseInt(m.offset)),m.anchor&&document.querySelectorAll(m.anchor)&&(r=document.querySelectorAll(m.anchor)[0]),i=(0,b.default)(r).top,m.anchorPlacement){case"top-bottom":break;case"center-bottom":i+=r.offsetHeight/2;break;case"bottom-bottom":i+=r.offsetHeight;break;case"top-center":i+=l/2;break;case"bottom-center":i+=l/2+r.offsetHeight;break;case"center-center":i+=l/2+r.offsetHeight/2;break;case"top-top":i+=l;break;case"bottom-top":i+=r.offsetHeight+l;break;case"center-top":i+=r.offsetHeight/2+l}return m.anchorPlacement||m.offset||isNaN(p)||(c=p),i+c};u.default=w},function(y,u){Object.defineProperty(u,"__esModule",{value:!0});var a=function(n){for(var s=0,b=0;n&&!isNaN(n.offsetLeft)&&!isNaN(n.offsetTop);)s+=n.offsetLeft-(n.tagName!="BODY"?n.scrollLeft:0),b+=n.offsetTop-(n.tagName!="BODY"?n.scrollTop:0),n=n.offsetParent;return{top:b,left:s}};u.default=a},function(y,u){Object.defineProperty(u,"__esModule",{value:!0});var a=function(n){return n=n||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(n,function(s){return{node:s}})};u.default=a}])})}(Q)),Q.exports}var le=se();const ce=ie(le),de={class:"relative w-full","data-aos":"zoom-in-up"},pe={__name:"HeroSection",setup(L){return ce.init(),(te,y)=>(ne(),oe("section",de,y[0]||(y[0]=[re(`<div class="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative"><div class="grid lg:grid-cols-2 gap-10 xl:gap-14 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto"><div class="lg:py-6"><div class="text-center lg:text-left"><h1 class="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl"> Bonjour, Je suis <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500"> THIEBAUT Mattéo </span></h1></div><p class="text-gray-300 pt-8 text-center lg:text-left mx-auto max-w-xl"> Je m’appelle Mattéo Thiebaut, je suis âgé de 24 ans et je viens d&#39;obtenir mon Diplôme de niveau 7 RNCP 35584 en tant qu’Expert en informatique et système d’information. J’ai réalisé 2 ans d’alternance en tant que Développeur Full Stack et souhaite maintenant découvrir divers horizons dans le domaine du web. </p><div class="flex items-center gap-3 pt-9 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0"><button class="px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center"><span class="absolute inset-0 rounded-3xl group-hover:scale-105 origin-center transition-all ease-in-out bg-primary border-2 border-transparent"></span><span class="relative flex items-center justify-center text-white"><a href="#contact">Contact</a></span></button><button class="border border-primary px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center bg-gradient-to-r from-cyan-500 to-blue-500"><div class="hover:scale-105 transition-all ease-in-out flex justify-center items-center relative"><div class="svg-container"><svg class="download-icon" width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="download-arrow" d="M13 9L9 13M9 13L5 9M9 13V1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1 17V18C1 18.7956 1.31607 19.5587 1.87868 20.1213C2.44129\r
                                    20.6839 3.20435 21 4 21H14C14.7956 21 15.5587 20.6839 16.1213\r
                                    20.1213C16.6839 19.5587 17 18.7956 17 18V17" stroke="white" stroke-width="2" stroke-linecap="round"></path></svg><div class="download-loader text-white hidden"></div></div><a href="/resume.pdf" download="resume.pdf" class="pl-2 text-white"> Télécharger mon CV</a></div></button></div></div><div class="lg:h-full md:flex"><div class="flex w-full h-96 min-h-[24rem] lg:min-h-[none] lg:w-full lg:h-full items-center relative"><div class="absolute z-0 top-1/2 -translate-y-1/2 w-5/6 right-0 h-[calc(80%+20px)] opacity-25 blur-2xl bg-gradient-to-r from-cyan-500 to-blue-500"></div><div class="absolute h-full z-10 p-2 -translate-y-1/2 top-1/2 lg:right-3 md:right-40 sm:right-16 rounded-full"><img src="`+ae+'" alt="Hero pic" width="350" height="auto" loading="lazy" class="rounded-full object-cover shadow-2xl"></div></div></div></div></div>',1)])))}};export{pe as default};
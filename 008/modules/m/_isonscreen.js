//# sourceMappingURL=_isonscreen.js.map
//# sourceMappingURL=_isonscreen.js.map
window._?window._.fn.isOnScreen=function(a,b){window._ios=this[0].getBoundingClientRect().top-this[0].getBoundingClientRect().height+window.scrollY;window._ose=this[0];window.onscroll=function(){window.scrollY>window._ios?"function"===typeof b?b():"string"===typeof b&&"."===b.substr(0,1)?window._ose.className=b.substr(1,b.length):window._ose.style.cssText=b:"function"===typeof a?a():"string"===typeof a&&"."===a.substr(0,1)?window._ose.className=a.substr(1,a.length):window._ose.style.cssText=a};window.onscroll()}:
window.alert("Please make sure _.js is loaded!");

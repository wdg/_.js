//# sourceMappingURL=_multimedia.js.map
//# sourceMappingURL=_multimedia.js.map
//# sourceMappingURL=_multimedia.js.map
window._?(window.players={},window.video="video",window.audio="audio",window.MMActive="",window.MMTime=0,window.MMLTime=0,window.MMisSeek=!1,window._.fn.multimedia=function(a){for(var h=this.length;h--;){var g={mp3:"audio",ogg:"ERROR",wav:"audio",mp4:"video",webm:"video"},k={mp3:"audio/mpeg",ogg:"audio/ogg",wav:"audio/wav",webm:"audio/webm"},l={mp4:"video/mp4",ogg:"video/ogg",webm:"video/webm"},d={autoplay:!0,controls:!1,visible:!1,default:!0,type:"ERROR"};if("object"===typeof a){if(this.isUndefined(a.file)){console.error("Need a file!");
console.error("Please see: https://github.com/wesdegroot/_.js/wiki/module_multimedia");break}else"undefined"!==typeof a.options?(d.type="undefined"!==typeof a.options.type?a.options.type:"object"===typeof a.file?g[a.file[0].substr(a.file[0].indexOf(".")+1)]:g[a.file.substr(a.file.indexOf(".")+1)],"undefined"!==typeof a.options.autoplay&&(d.autoplay=a.options.autoplay),"undefined"!==typeof a.options.controls&&(d.controls=a.options.controls),"undefined"!==typeof a.options.visible&&(d.visible=a.options.visible),
d["default"]=!1):d.type=g[a.file.substr(a.file.indexOf(".")+1)],"ERROR"===d.type&&(console.error("File extension is .ogg!, we can't detect if it is a audio or a video file. sorry."),console.error("Please see: https://github.com/wesdegroot/_.js/wiki/module_multimedia"));this[h].innerHTML="";if(!this.isUndefined(a.before))if("object"===typeof a.before)console.error("Not yet supported :("),console.error("Please see: https://github.com/wesdegroot/_.js/wiki/module_multimedia");else{var b=document.createElement(g[a.before.substr(a.before.indexOf(".")+
1)]);b.setAttribute("preload","auto");b.setAttribute("height","100%");b.setAttribute("width","100%");b.setAttribute("style","width:100%;height:100%;");b.setAttribute("id","MMMain0");b.autobuffer=!0;var c=document.createElement("source");"video"!==g[a.before.substr(a.before.indexOf(".")+1)]?c.type=k[a.before.substr(a.before.indexOf(".")+1)]:c.type=l[a.before.substr(a.before.indexOf(".")+1)];c.src=a.before;b.appendChild(c);b.load();d.autoplay&&b.play();window.MMActive=0;b.addEventListener("seeking",
function(a){window.MMisSeek=!0;this.currentTime>window.MMLTime&&(this.currentTime=window.MMLTime);window.MMisSeek=!1});b.addEventListener("timeupdate",function(a){window.MMisSeek||(window.MMLTime=window.MMTime,window.MMTime=this.currentTime)});b.addEventListener("ended",function(){this.pause();this.style.visibility="hidden";this.style.display="none";document.getElementById("MMMain1").style.visibility="";document.getElementById("MMMain1").style.display="block";document.getElementById("MMMain1").play();
window.MMActive=1;window.MMTime=0});this[h].appendChild(b);window.players=this.merge(window.players,{MMMain0:{file:a.before,html:b,options:d}})}"object"!==typeof a.file&&(a.file=[a.file]);for(var e=0;e<a.file.length;e++){var f=this.isUndefined(a.before)?e:e+1,b=document.createElement(g[a.file[e].substr(a.file[e].indexOf(".")+1)]);d.controls&&b.setAttribute("controls","yes");b.setAttribute("preload","auto");b.setAttribute("height","100%");b.setAttribute("width","100%");this.isUndefined(a.before)?b.setAttribute("style",
"width:100%;height:100%;"):b.setAttribute("style","visibility:hidden;display:none;width:100%;height:100%;");b.setAttribute("id","MMMain"+f);this.isUndefined(a.before)&&(window.MMActive=b);d.autoplay&&this.isUndefined(a.before)&&b.play();b.autobuffer=!0;c=document.createElement("source");c.type="video"!==d.type?k[a.file[e].substr(a.file[e].indexOf(".")+1)]:l[a.file[e].substr(a.file[e].indexOf(".")+1)];c.src=a.file[e];b.appendChild(c);b.load();b.addEventListener("ended",function(){f=window.MMActive;
null!=document.getElementById("MMMain"+(f+1))&&(this.pause(),this.style.visibility="hidden",this.style.display="none",document.getElementById("MMMain"+(f+1)).style.visibility="",document.getElementById("MMMain"+(f+1)).style.display="block",document.getElementById("MMMain"+(f+1)).play(),window.MMActive=f+1,window.MMTime=0)});this[h].appendChild(b);eval("window.players=this.merge(window.players,{MMMain"+f+":{file:data['file'][i],html:MMElement,options:options}});")}this.isUndefined(a.after)||("object"===
typeof a.after?(console.error("Not yet supported :("),console.error("Please see: https://github.com/wesdegroot/_.js/wiki/module_multimedia")):(b=document.createElement(g[a.after.substr(a.after.indexOf(".")+1)]),b.setAttribute("preload","auto"),b.setAttribute("height","100%"),b.setAttribute("width","100%"),b.setAttribute("style","visibility:hidden;display:none;width:100%;height:100%;"),b.setAttribute("id","MMMain"+(f+1)),b.autobuffer=!0,c=document.createElement("source"),"video"!==g[a.after.substr(a.after.indexOf(".")+
1)]?c.type=k[a.after.substr(a.after.indexOf(".")+1)]:c.type=l[a.after.substr(a.after.indexOf(".")+1)],c.src=a.after,b.appendChild(c),b.load(),b.addEventListener("seeking",function(a){window.MMisSeek=!0;this.currentTime>window.MMLTime&&(this.currentTime=window.MMLTime);window.MMisSeek=!1}),b.addEventListener("timeupdate",function(a){window.MMisSeek||(window.MMLTime=window.MMTime,window.MMTime=this.currentTime)}),b.addEventListener("ended",function(){this.pause();window.MMTime=0}),this[h].appendChild(b),
eval("window.players=this.merge(window.players,{MMMain"+(f+1)+":{file:data['after'],html:MMElement,options:options}});")))}else console.error("Please see: https://github.com/wesdegroot/_.js/wiki/module_multimedia")}},window._.fn.multimedia_start=function(){document.getElementById("MMMain"+window.MMActive).play()},window._.fn.multimedia_pause=function(){document.getElementById("MMMain"+window.MMActive).pause()},window._.fn.multimedia_stop=function(){document.getElementById("MMMain"+window.MMActive).pause();
window.MMTime=0;document.getElementById("MMMain"+window.MMActive).currentTime=0},window._.fn.multimedia_skip=function(){null!=document.getElementById("MMMain"+(window.MMActive+1))?(document.getElementById("MMMain"+window.MMActive).pause(),document.getElementById("MMMain"+window.MMActive).style.visibility="hidden",document.getElementById("MMMain"+window.MMActive).style.display="none",document.getElementById("MMMain"+(window.MMActive+1)).style.visibility="",document.getElementById("MMMain"+(window.MMActive+
1)).style.display="block",document.getElementById("MMMain"+(window.MMActive+1)).play(),window.MMActive+=1,window.MMTime=0):console.error("Please see: https://github.com/wesdegroot/_.js/wiki/module_multimedia")}):window.alert("Please make sure _.js is loaded!");

(function(g){var window=this;var $Ba=function(a,b,c,d){var e=b.ac();g.U(a.element,"ytp-suggestion-set",!!e.videoId);var f=b.getPlaylistId();d=b.gd(c,d?d:"mqdefault.jpg");var k=b instanceof g.xO&&b.lengthSeconds?g.fV(b.lengthSeconds):null,l=!!f;f=l&&"RD"==(new g.yQ(f.substr(0,2),f.substr(2))).type;var m=b instanceof g.xO?b.Ka:null;c={title:b.title,author:b.author,author_and_views:e.shortViewCount?b.author+" \u2022 "+e.shortViewCount:b.author,aria_label:b.Sl||g.$G("YTP_WATCH_VIDEO_OR_PLAYLIST",{TITLE:b.title},b.title),duration:k,
url:b.Gm(c),is_live:m,is_list:l,is_mix:f,background:d?"background-image: url("+d+")":""};b instanceof g.AQ&&(c.playlist_length=b.getLength());a.update(c)},y5=function(a,b){g.zH.call(this,{I:"div",
ea:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.B=a;this.created=!1},z5=function(a){g.W.call(this,{I:"div",
M:"ytp-upnext",U:{"aria-label":"{{aria_label}}"},P:[{I:"div",M:"ytp-cued-thumbnail-overlay-image",U:{style:"{{background}}"}},{I:"span",M:"ytp-upnext-top",P:[{I:"span",M:"ytp-upnext-header",da:"Siguiente"},{I:"span",M:"ytp-upnext-title",da:"{{title}}"},{I:"span",M:"ytp-upnext-author",da:"{{author}}"}]},{I:"a",M:"ytp-upnext-autoplay-icon",U:{role:"button",href:"{{url}}","aria-label":"Reproducir siguiente v\u00eddeo"},P:[{I:"svg",U:{height:"100%",version:"1.1",viewBox:"0 0 72 72",width:"100%"},P:[{I:"circle",
M:"ytp-svg-autoplay-circle",U:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{I:"circle",M:"ytp-svg-autoplay-ring",U:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{I:"path",M:"ytp-svg-fill",U:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{I:"span",M:"ytp-upnext-bottom",P:[{I:"span",M:"ytp-upnext-cancel"},{I:"span",M:"ytp-upnext-paused",da:"La reproducci\u00f3n autom\u00e1tica est\u00e1 en pausa"}]}]});
this.D=null;var b=this.o["ytp-upnext-cancel"];this.D=new g.W({I:"button",ea:["ytp-upnext-cancel-button","ytp-button"],U:{tabindex:"0","aria-label":"Cancelar reproducci\u00f3n autom\u00e1tica"},da:"Cancelar"});g.N(this,this.D);this.D.W("click",this.pS,this);this.D.wa(b);this.B=a;this.L=this.o["ytp-svg-autoplay-ring"];this.H=this.G=this.C=this.F=null;this.J=new g.V(this.So,5E3,this);g.N(this,this.J);this.K=0;this.R(this.o["ytp-upnext-autoplay-icon"],"click",this.BU);this.bE();this.R(a,"autonavvisibility",
this.bE);this.R(a,"mdxnowautoplaying",this.PT);this.R(a,"mdxautoplaycanceled",this.QT);this.R(a,"mdxautoplayupnext",this.LG);3==this.B.Sa()&&(a=(a=g.dU(g.XT(this.B)))?a.sL():null)&&this.LG(a)},aCa=function(a,b){a.F=b;
$Ba(a,b,g.Y(a.B),"hqdefault.jpg")},A5=function(a,b){if(!a.C){g.YF("a11y-announce","Siguiente "+a.F.title);
a.K=g.iG();a.C=new g.V((0,g.B)(a.Is,a,b),25);a.Is(b);var c=b||g.Y(a.B).experiments.A("autoplay_time")||1E4;a.B.ya("onAutonavCoundownStarted",c)}g.Aq(a.element,"ytp-upnext-autoplay-paused")},C5=function(a){B5(a);
a.K=g.iG();a.Is();g.T(a.element,"ytp-upnext-autoplay-paused")},B5=function(a){a.C&&(a.C.dispose(),a.C=null)},D5=function(a,b){b=void 0===b?!1:b;
var c=g.Y(a.B);if(c.experiments.o("autonav_notifications")&&b&&window.Notification&&window.document.hasFocus){var d=window.Notification.permission;"default"==d?window.Notification.requestPermission():"granted"!=d||window.document.hasFocus()||(d=a.F.ac(),a.So(),a.G=new window.Notification("Siguiente",{body:d.title,icon:d.gd(c)}),a.H=a.R(a.G,"click",a.rU),a.J.start())}B5(a);a.B.Xk(!1,b)},bCa=function(a){y5.call(this,a,"subscribecard-endscreen");
var b=a.getVideoData();this.C=new g.W({I:"div",M:"ytp-subscribe-card",P:[{I:"img",M:"ytp-author-image",U:{src:b.profilePicture}},{I:"div",M:"ytp-subscribe-card-right",P:[{I:"div",M:"ytp-author-name",da:b.author},{I:"div",M:"html5-subscribe-button-container"}]}]});g.N(this,this.C);this.C.wa(this.element);this.D=new g.NZ("Suscribirse",null,"Cancelar suscripci\u00f3n",null,!0,!1,b.El,b.subscribed,"trailer-endscreen",null,null,a);g.N(this,this.D);this.D.wa(this.C.o["html5-subscribe-button-container"]);
this.hide()},E5=function(a){var b=g.Y(a),c=g.lI||g.of?{style:"will-change: opacity"}:void 0,d=b.o,e=["ytp-videowall-still"];
b.B&&e.push("ytp-videowall-show-text");g.W.call(this,{I:"a",ea:e,U:{href:"{{url}}",target:d?"_blank":"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},P:[{I:"div",M:"ytp-videowall-still-image",U:{style:"{{background}}"}},{I:"span",M:"ytp-videowall-still-info",P:[{I:"span",M:"ytp-videowall-still-info-bg",P:[{I:"span",M:"ytp-videowall-still-info-content",U:c,P:[{I:"span",M:"ytp-videowall-still-info-title",da:"{{title}}"},{I:"span",
M:"ytp-videowall-still-info-author",da:"{{author_and_views}}"},{I:"span",M:"ytp-videowall-still-info-live",da:"En directo"},{I:"span",M:"ytp-videowall-still-info-duration",da:"{{duration}}"}]}]}]},{I:"span",ea:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],P:[{I:"span",M:"ytp-videowall-still-listlabel-icon"},"Lista de reproducci\u00f3n",{I:"span",M:"ytp-videowall-still-listlabel-length",P:[" (",{I:"span",da:"{{playlist_length}}"},")"]}]},{I:"span",ea:["ytp-videowall-still-listlabel-mix",
"ytp-videowall-still-listlabel"],P:[{I:"span",M:"ytp-videowall-still-listlabel-mix-icon"},"Mix",{I:"span",M:"ytp-videowall-still-listlabel-length",da:" (50+)"}]}]});this.F=d;this.B=a;this.C=null;this.D=new g.GF(this);g.N(this,this.D);this.W("click",this.H);this.W("keypress",this.J);this.D.R(a,"videodatachange",this.G);g.Y(a).Y&&(a=a.app.na,b=this.element,g.Ma(a.o,b),g.Pa(a.o,b),c=String(a.H++),b.setAttribute("data-visual-id",c),g.hf(this,(0,g.B)(a.G,a,b)));this.G()},F5=function(a){y5.call(this,a,
"videowall-endscreen");
this.L=a;this.H=0;this.D=[];this.J=this.G=this.F=null;this.K=this.Y=!1;this.Z=new g.GF(this);g.N(this,this.Z);this.N=new g.V(g.Da(g.T,this.element,"ytp-show-tiles"),0);g.N(this,this.N);var b=new g.W({I:"button",ea:["ytp-button","ytp-endscreen-previous"],U:{"aria-label":"Anterior"},P:[g.ZU()]});g.N(this,b);b.wa(this.element);b.W("click",this.pQ,this);this.O=new g.tH({I:"div",M:"ytp-endscreen-content"});g.N(this,this.O);this.O.wa(this.element);b=new g.W({I:"button",ea:["ytp-button","ytp-endscreen-next"],
U:{"aria-label":"Siguiente"},P:[g.$U()]});g.N(this,b);b.wa(this.element);b.W("click",this.oQ,this);this.C=new z5(a);g.N(this,this.C);g.wU(this.B,this.C.element,4);this.hide()},G5=function(a){return g.yU(a.B)&&a.rz()&&!a.J},cCa=function(a,b){return(0,g.I)(b.suggestions,function(b){b=g.IX(g.Y(a.L),b);
g.N(a,b);return b})},H5=function(a){var b=a.Kv();
b!=a.Y&&(a.Y=b,a.B.V("autonavvisibility"))},I5=function(a){g.GU.call(this,a);
this.A=null;this.B=new g.GF(this);g.N(this,this.B);this.C=g.Y(a);dCa(a)?this.A=new F5(this.o):this.C.Ia?this.A=new bCa(this.o):this.A=new y5(this.o);g.N(this,this.A);g.wU(this.o,this.A.element,4);this.wF();this.B.R(a,"videodatachange",this.wF,this);this.B.R(a,"crn_endscreen",this.nO,this);this.B.R(a,"crx_endscreen",this.oO,this)},dCa=function(a){a=g.Y(a);
return a.qd&&!a.Ia};
g.r(y5,g.zH);y5.prototype.create=function(){this.created=!0};
y5.prototype.destroy=function(){this.created=!1};
y5.prototype.rz=function(){return!1};
y5.prototype.Kv=function(){return!1};g.r(z5,g.W);g.h=z5.prototype;g.h.So=function(){this.G&&(this.J.stop(),this.Ha(this.H),this.H=null,this.G.close(),this.G=null)};
g.h.bE=function(){g.yH(this,g.ZT(this.B))};
g.h.rU=function(){window.focus();this.So()};
g.h.hide=function(){g.W.prototype.hide.call(this)};
g.h.Is=function(a){a=a||g.Y(this.B).experiments.A("autoplay_time")||1E4;var b=Math.min(g.iG()-this.K,a);a=Math.min(b/a,1);this.L.setAttribute("stroke-dashoffset",-211*(a+1));1<=a&&3!=this.B.Sa()?D5(this,!0):this.C&&this.C.start()};
g.h.BU=function(a){!g.Zd(this.D.element,g.uF(a))&&g.JW(a,this.B)&&D5(this)};
g.h.pS=function(){g.aU(this.B,!0)};
g.h.PT=function(a){this.B.Sa();this.show();A5(this,a)};
g.h.LG=function(a){this.B.Sa();this.F&&this.F.ac().videoId==a.ac().videoId||aCa(this,a)};
g.h.QT=function(){this.B.Sa();B5(this);this.hide()};
g.h.X=function(){B5(this);this.So();g.W.prototype.X.call(this)};g.r(bCa,y5);g.r(E5,g.W);E5.prototype.tl=function(){g.BU(this.B,this.element);var a=this.C.ac().videoId,b=this.C.getPlaylistId();g.c0(this.B.app,a,this.C.Zd,b,void 0,void 0,void 0)};
E5.prototype.H=function(a){g.JW(a,this.B,this.F,this.C.Zd||void 0)&&this.tl()};
E5.prototype.J=function(a){switch(a.keyCode){case 13:case 32:g.zF(a)||(this.tl(),g.yF(a))}};
E5.prototype.G=function(){var a=this.B.getVideoData(),b=g.Y(this.B);this.F=a.isDni?!1:b.o};g.r(F5,y5);g.h=F5.prototype;g.h.create=function(){y5.prototype.create.call(this);var a=this.B.getVideoData();a&&(this.F=cCa(this,a),this.G=a);this.kh();this.Z.R(this.B,"appresize",this.kh);this.Z.R(this.B,"onVideoAreaChange",this.kh);this.Z.R(this.B,"videodatachange",this.qQ);this.Z.R(this.B,"autonavchange",this.XC);this.Z.R(this.B,"autonavcancel",this.nQ);this.Z.R(this.element,"transitionend",this.TV)};
g.h.destroy=function(){g.IF(this.Z);g.lf(this.D);this.D=[];this.F=null;y5.prototype.destroy.call(this);g.Aq(this.element,"ytp-show-tiles");this.N.stop()};
g.h.rz=function(){return 1!=this.G.autonavState};
g.h.show=function(){y5.prototype.show.call(this);g.Aq(this.element,"ytp-show-tiles");g.Y(this.B).B?g.mu(this.N):this.N.start();(this.K||this.J&&this.J!=this.G.clientPlaybackNonce)&&g.aU(this.B,!1);G5(this)?(H5(this),2==this.G.autonavState?g.Y(this.B).experiments.o("fast_autonav_in_background")&&3==this.B.wj()?D5(this.C,!0):A5(this.C):3==this.G.autonavState&&C5(this.C)):(g.aU(this.B,!0),H5(this))};
g.h.hide=function(){y5.prototype.hide.call(this);C5(this.C);H5(this)};
g.h.TV=function(a){g.uF(a)==this.element&&this.kh()};
g.h.kh=function(){if(this.F&&this.F.length){g.T(this.element,"ytp-endscreen-paginate");var a=g.nU(this.L,!0),b=g.NH(this.L);b&&(b=b.ld()?48:32,a.width-=2*b);var c=a.width/a.height,d=96/54,e=b=2,f=Math.max(a.width/96,2),k=Math.max(a.height/54,2),l=this.F.length,m=Math.pow(2,2);var n=l*m+(Math.pow(2,2)-m);n+=Math.pow(2,2)-m;for(n-=m;0<n&&(b<f||e<k);){var p=b/2,t=e/2,w=b<=f-2&&n>=t*m,A=e<=k-2&&n>=p*m;if((p+1)/t*d/c>c/(p/(t+1)*d)&&A)n-=p*m,e+=2;else if(w)n-=t*m,b+=2;else if(A)n-=p*m,e+=2;else break}d=
!1;n>=3*m&&6>=l*m-n&&(4<=e||4<=b)&&(d=!0);m=96*b;n=54*e;c=m/n<c?a.height/n:a.width/m;c=Math.min(c,2);m*=c;n*=c;m*=g.kd(a.width/m||1,1,1.21);n*=g.kd(a.height/n||1,1,1.21);m=Math.floor(Math.min(a.width,m));n=Math.floor(Math.min(a.height,n));a=this.O.element;g.Oh(a,m,n);g.vh(a,{marginLeft:m/-2+"px",marginTop:n/-2+"px"});aCa(this.C,this.F[0]);g.U(this.element,"ytp-endscreen-takeover",G5(this));H5(this);m+=4;n+=4;for(f=c=0;f<b;f++)for(k=0;k<e;k++)if(p=c,t=0,d&&f>=b-2&&k>=e-2?t=1:0==k%2&&0==f%2&&(2>k&&
2>f?0==k&&0==f&&(t=2):t=2),p=g.ld(p+this.H,l),0!=t){w=this.D[c];w||(w=new E5(this.B),this.D[c]=w,a.appendChild(w.element));A=Math.floor(n*k/e);var E=Math.floor(m*f/b),J=Math.floor(n*(k+t)/e)-A-4,Q=Math.floor(m*(f+t)/b)-E-4;g.Ch(w.element,E,A);g.Oh(w.element,Q,J);g.vh(w.element,"transitionDelay",(k+f)/20+"s");g.U(w.element,"ytp-videowall-still-mini",1==t);g.U(w.element,"ytp-videowall-still-large",2<t);t=w;p=this.F[p];t.C!=p&&(t.C=p,$Ba(t,p,g.Y(t.B),g.yq(t.element,"ytp-videowall-still-large")?"hqdefault.jpg":
"mqdefault.jpg"),w=(p=p.Zd)&&p.itct)&&(p=t.B,g.Y(p).Y&&(p=p.app.na,t=t.element,A=t.getAttribute("data-visual-id"),g.Ma(p.o,t),g.zU(p,"onLogServerVeCreated",{id:A,tracking_params:w})));c++}g.U(this.element,"ytp-endscreen-paginate",c<l);for(b=this.D.length-1;b>=c;b--)e=this.D[b],g.Sd(e.element),g.kf(e);this.D.length=c}};
g.h.qQ=function(){var a=this.B.getVideoData();this.G!=a&&(this.H=0,this.F=cCa(this,a),this.G=a,this.kh())};
g.h.oQ=function(){this.H+=this.D.length;this.kh()};
g.h.pQ=function(){this.H-=this.D.length;this.kh()};
g.h.vN=function(){return!!this.C.C};
g.h.XC=function(a){1==a?(this.K=!1,this.J=this.G.clientPlaybackNonce,B5(this.C),this.A&&this.kh()):(this.K=!0,this.A&&G5(this)&&(2==a?A5(this.C):3==a&&C5(this.C)))};
g.h.nQ=function(a){if(a){for(a=0;a<this.D.length;a++)g.CU(this.L,this.D[a].element,!0);this.XC(1)}else this.J=null,this.K=!1;this.kh()};
g.h.Kv=function(){return this.A&&G5(this)};g.r(I5,g.GU);g.h=I5.prototype;g.h.xC=function(){var a=this.o.getVideoData(),b=!!(a&&a.suggestions&&a.suggestions.length);b=!dCa(this.o)||b;a=g.ZO(a,"ypc_module");var c=g.G_(this.o.app);return b&&!a&&!c};
g.h.wC=function(){return this.A.Kv()};
g.h.rN=function(){return this.wC()?this.A.vN():!1};
g.h.X=function(){g.uU(this.o,"endscreen");g.GU.prototype.X.call(this)};
g.h.load=function(){g.GU.prototype.load.call(this);this.A.show()};
g.h.unload=function(){g.GU.prototype.unload.call(this);this.A.hide();this.A.destroy()};
g.h.nO=function(a){this.xC()&&(this.A.created||this.A.create(),"load"==a.getId()&&this.load())};
g.h.oO=function(a){"load"==a.getId()&&this.loaded&&this.unload()};
g.h.wF=function(){g.uU(this.o,"endscreen");var a=Math.max(1E3*(this.o.getVideoData().lengthSeconds-10),0);a=new g.vQ(a,0x8000000000000,{id:"preload",namespace:"endscreen"});g.N(this,a);var b=new g.vQ(0x8000000000000,0x8000000000000,{id:"load",priority:6,namespace:"endscreen"});g.N(this,b);g.qU(this.o,[a,b])};g.CX.endscreen=I5;})(_yt_player);

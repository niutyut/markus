(function(e){function t(t){for(var r,i,o=t[0],c=t[1],p=t[2],u=0,d=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(d.length)d.shift()();return s.push.apply(s,p||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},s=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var p=0;p<o.length;p++)t(o[p]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],i=(n("034f"),n("2877")),o={},c=Object(i["a"])(o,a,s,!1,null,null,null),p=c.exports,l=n("9483");Object(l["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var u=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("l-map",{ref:"myMap",staticStyle:{height:"350px"},attrs:{id:"mapid",zoom:e.zoom,center:e.center},on:{click:e.onMapClick}},[n("l-control-layers",{attrs:{position:"topright"}}),e._l(e.tileProviders,(function(e){return n("l-tile-layer",{key:e.name,attrs:{name:e.name,visible:e.visible,url:e.url,attribution:e.attribution,"layer-type":"base"}})})),e._l(e.overlaymapsProviders,(function(e){return n("l-tile-layer",{key:e.name,attrs:{name:e.name,visible:e.visible,url:e.url,attribution:e.attribution,opacityopacity:"0.9","layer-type":"overlay"}})}))],2),n("div",{attrs:{id:"list"}},[e._l(e.places,(function(t){return n("span",{key:t.sys_id,attrs:{id:t.sys_id}},[n("a",{staticClass:"hook",on:{click:function(n){return e.sent(t)}}},[e._v(e._s(t.sys_id))]),n("br"),e._v(" "+e._s(t.name)+" "+e._s(t["parent name"])+" "),n("br"),n("span",{},[e._v(e._s(t.years?"("+t.years+")":"")+" "+e._s(t["xy coordinates"]?"["+t["xy coordinates"]+"]":"No Geo-Information"))]),n("br"),n("br")])})),e._v(" "+e._s(0===e.places.length?"無資料 / None":"")+" "),n("br")],2)],1)},m=[],f=(n("99af"),n("4de4"),n("4160"),n("c975"),n("13d5"),n("b0c0"),n("d3b7"),n("ac1f"),n("25f0"),n("5319"),n("1276"),n("159b"),n("96cf"),n("1da1")),h=n("3835"),g=n("e11e"),b=n.n(g),y=n("2699"),v=n("a40a"),x=n("4e2b"),w=n("9ee8"),k=n("e464"),M=n("f60f"),_={name:"Home",components:{LMap:y["a"],LTileLayer:v["a"],LMarker:x["a"],LControlLayers:w["a"],LImageOverlay:k["a"],LPopup:M["a"]},data:function(){return{KP:null,markerLatLng:[47.31322,-1.319482],url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",mymap:null,list:"",places:[],zoom:3,center:[28,107],popup:b.a.popup(),markers:null,tileProviders:[{name:"Mapbox",visible:!0,attribution:'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',url:"https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"},{name:"OpenTopoMap",visible:!0,attribution:'Map data: {attribution.OpenStreetMap}, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',url:"https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"},{name:"Stamen.Terrain",visible:!0,attribution:'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data {attribution.OpenStreetMap}',url:"https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png"},{name:"Esri.WorldImagery",visible:!0,attribution:"{attribution.Esri} &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"},{name:"OpenStreetMap",visible:!0,attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"},{name:"CartoDB Positron",visible:!0,url:"https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'}],overlaymapsProviders:[{name:"1904日治臺灣堡圖(明治版)",visible:!1,url:"https://gis.sinica.edu.tw/tileserver/file-exists.php?img=JM20K_1904-jpg-{z}-{x}-{y}",attribution:'中央研究院 WMTS 服務"'},{name:"1921日治臺灣堡圖(大正版)",visible:!1,url:"https://gis.sinica.edu.tw/tileserver/file-exists.php?img=JM20K_1921-jpg-{z}-{x}-{y}",attribution:'中央研究院 WMTS 服務"'},{name:"1921日治地形圖",visible:!1,url:"https://gis.sinica.edu.tw/tileserver/file-exists.php?img=JM25K_1921-png-{z}-{x}-{y}",attribution:'中央研究院 WMTS 服務"'},{name:"1942日治地形圖(昭和修正版)",visible:!1,url:"https://gis.sinica.edu.tw/tileserver/file-exists.php?img=JM25K_1942-png-{z}-{x}-{y}",attribution:'中央研究院 WMTS 服務"'},{name:"1944日治地形圖(航照修正版)",visible:!1,url:"https://gis.sinica.edu.tw/tileserver/file-exists.php?img=JM25K_1944-png-{z}-{x}-{y}",attribution:'中央研究院 WMTS 服務"'},{name:"1989臺灣經建1版地形圖",visible:!1,url:"https://gis.sinica.edu.tw/tileserver/file-exists.php?img=TM25K_1989-jpg-{z}-{x}-{y}",attribution:'中央研究院 WMTS 服務"'},{name:"1993臺灣經建2版地形圖",visible:!1,url:"https://gis.sinica.edu.tw/tileserver/file-exists.php?img=TM25K_1993-jpg-{z}-{x}-{y}",attribution:'中央研究院 WMTS 服務"'},{name:"2001臺灣經建3版地形圖",visible:!1,url:"https://gis.sinica.edu.tw/tileserver/file-exists.php?img=TM25K_2001-jpg-{z}-{x}-{y}",attribution:'中央研究院 WMTS 服務"'},{name:"2003臺灣經建4版地形圖",visible:!1,url:"https://gis.sinica.edu.tw/tileserver/file-exists.php?img=TM25K_2003-jpg-{z}-{x}-{y}",attribution:'中央研究院 WMTS 服務"'},{name:"1953竹北二堡上北勢庄地籍圖",visible:!1,url:"https://gis.sinica.edu.tw/dijitu/file-exists.php?img=tj7a0421-png-{z}-{x}-{y}",attribution:'中央研究院 WMTS 服務"'}]}},methods:{sent:function(e){parent.postMessage(e.sys_id,"*")},drawMakers:function(e){var t=this;null!==this.markers&&this.$refs.myMap.mapObject.removeLayer(this.markers),this.markers=b.a.markerClusterGroup();var n="";e.filter((function(e){return e["xy coordinates"].length>0})).forEach((function(e){var r=e.sys_id,a=e.name,s=e["parent name"],i=e.years,o=e["xy coordinates"].split(","),c=Object(h["a"])(o,2),p=c[0],l=c[1];n=n+'<br><span id="'+r+'"><a class="hook">'+r+"</a><br>"+a+" "+s+'<br><span class="">('+i+") ["+e["xy coordinates"]+"]</span></span><br>\n";var u=b.a.marker(new b.a.LatLng(l,p),{title:a});u.bindPopup("".concat(r,"<br/>").concat(a,"<br/>").concat(s,"<br/>").concat(i)),t.markers.addLayer(u)})),this.places=e,this.$refs.myMap.mapObject.addLayer(this.markers)},onMapClick:function(e){this.popup.setLatLng(e.latlng).setContent(e.latlng.toString()).openOn(this.$refs.myMap.mapObject)},text2Number:function(e){return e.replace("番","").replace("│","-").replace("|","-").replace("ノ","-").replace("之","-").replace(/○/g,"0").replace(/一/g,"1").replace(/二/g,"2").replace(/三/g,"3").replace(/四/g,"4").replace(/五/g,"5").replace(/六/g,"6").replace(/七/g,"7").replace(/八/g,"8").replace(/九/g,"9").replace(/十/g,"0")},dealCadastre:function(e){var t,n=!1,r="",a="",s={isCadastre:!1},i=/[一二三四五六七八九十○]{1,3}(│|\||ノ|番?之)[一二三四五六七八九十○]{1,3}/g;while(null!==(t=i.exec(e)))t.index===i.lastIndex&&i.lastIndex++,r=t[0],a=this.text2Number(t[0]),n=!0;if(!n)return s.isCadastre=!1,s;if(e=e.replace(r,a).replace(/\s/g,""),e.indexOf("土名")>-1){var o,c=/([\u4e00-\u9fa5]+堡)([\u4e00-\u9fa5]+庄)土名([\u4e00-\u9fa5]{2,4})(\d+)-(\d+)/g;while(null!==(o=c.exec(e)))o.index===c.lastIndex&&c.lastIndex++,s.isCadastre=!0,s.b=o[1],s.z=o[2],s.d=o[3],s.mn=o[4],s.sn=o[5]}else{var p,l=/([\u4e00-\u9fa5]+堡)([\u4e00-\u9fa5]+庄)(\d+)-(\d+)/g;while(null!==(p=l.exec(e)))p.index===l.lastIndex&&l.lastIndex++,s.isCadastre=!0,s.b=p[1],s.z=p[2],s.d="",s.mn=p[3],s.sn=p[4]}return s}},created:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a,s,i,o,c,p,l,u,d,m,f,h,g,b;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://dhumanities.github.io/markus/js/kPlaceLatLon.json");case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,r=this.$route.params.keyword,a=this.dealCadastre(r),!a.isCadastre){e.next=18;break}return s="https://docusky.org.tw/DocuSky/docutools/geocode/twcada.php?t=&b="+encodeURIComponent(a.b)+"&z="+encodeURIComponent(a.z)+"&d="+encodeURIComponent(a.d)+"&n="+a.mn,e.next=12,fetch(s);case 12:return i=e.sent,e.next=15,i.json();case 15:return o=e.sent,o.placenames.length>0&&this.drawMakers(o.placenames),e.abrupt("return");case 18:if(!(null!==r||r.length>0)){e.next=63;break}if(!(r.indexOf("twcada_")>-1)){e.next=30;break}return c="https://docusky.org.tw/DocuSky/docutools/geocode/twcada.php?n="+r,e.next=23,fetch(c);case 23:return p=e.sent,e.next=26,p.json();case 26:l=e.sent,l.placenames.length>0&&this.drawMakers(l.placenames),e.next=63;break;case 30:return u=[],d="https://docusky.org.tw/DocuSky/docutools/geocode/tw.php?n="+encodeURIComponent(r),e.next=34,fetch(d);case 34:return m=e.sent,e.next=37,m.json();case 37:if(e.t0=e.sent,e.t0){e.next=40;break}e.t0={placenames:[]};case 40:return f=e.t0,f.placenames.length>0&&(u=u.concat(f.placenames)),h="https://dh.chinese-empires.eu/chgis?fmt=json&n="+r,e.prev=43,e.next=46,fetch(h);case 46:return m=e.sent,e.next=49,m.json();case 49:if(e.t1=e.sent,e.t1){e.next=52;break}e.t1={placenames:[]};case 52:f=e.t1,f.placenames.length>0&&(u=u.concat(f.placenames)),e.next=59;break;case 56:e.prev=56,e.t2=e["catch"](43),console.log(e.t2);case 59:g=decodeURIComponent(r).split("|"),b=n.filter((function(e){return g.reduce((function(t,n){return t||(t||e[2].indexOf(n)>-1||"koreanPlace_"+e[0]===n)}),!1)})).sort((function(e,t){return e[2].length>t[2].length?1:e[2].length===t[1].length?0:-1}))||[],u=b.reduce((function(e,t){return e.push({sys_id:"koreanPlace_"+t[0],name:"".concat(t[2]).concat(t[3]?"(".concat(t[3],")"):""),transcription:"",years:t[4]||"","parent sys_id":"","parent name":"","feature type":"POINT","xy coordinates":t[6].length>0?"".concat(t[6],",").concat(t[7]):"","data source":""}),e}),u),this.drawMakers(u);case 63:case"end":return e.stop()}}),e,this,[[43,56]])})));function t(){return e.apply(this,arguments)}return t}()},S=_,j=(n("cccb"),Object(i["a"])(S,d,m,!1,null,null,null)),O=j.exports;r["a"].use(u["a"]);var I=[{path:"/:keyword",name:"Home",component:O}],C=new u["a"]({routes:I}),z=C,T=(n("6cc5"),n("ca9f")),P=n.n(T);delete b.a.Icon.Default.prototype._getIconUrl,b.a.Icon.Default.mergeOptions({iconRetinaUrl:n("584d"),iconUrl:n("6397"),shadowUrl:n("e2b9")}),r["a"].config.productionTip=!1,r["a"].component("v-marker-cluster",P.a),new r["a"]({router:z,render:function(e){return e(p)}}).$mount("#app")},"5ced":function(e,t,n){},"85ec":function(e,t,n){},cccb:function(e,t,n){"use strict";var r=n("5ced"),a=n.n(r);a.a}});
//# sourceMappingURL=app.fe293d67.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-content-detail-content-detail"],{"299b":function(t,e,i){"use strict";var a=i("e3e8"),n=i.n(a);n.a},"29b1":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"page"},[2==t.type?[i("v-uni-view",{staticClass:"video-wrap"},[i("v-uni-video",{staticClass:"video-wrap",attrs:{src:t.url,poster:t.thumb,controls:"true",autoplay:"true",muted:"false"}})],1)]:3==t.type?[i("v-uni-view",{staticClass:"video-wrap3"},[i("v-uni-image",{staticClass:"video-wrap",attrs:{src:t.thumb}}),i("v-uni-video",{ref:"video",staticClass:"hidden",attrs:{id:"myVideo",src:t.url,autoplay:"true"},on:{timeupdate:function(e){arguments[0]=e=t.$handleEvent(e),t.timeupdate.apply(void 0,arguments)},loadedmetadata:function(e){arguments[0]=e=t.$handleEvent(e),t.loadedmetadata.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"slider-box"},[i("v-uni-text",{staticClass:"mm"},[t._v(t._s(t.start))]),i("v-uni-slider",{staticClass:"slider",attrs:{"block-size":"28",min:0,max:t.duration,value:t.currentTime,activeColor:"#64D3AD"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.sliderChange.apply(void 0,arguments)},changing:function(e){arguments[0]=e=t.$handleEvent(e),t.sliderChanging.apply(void 0,arguments)}}}),i("v-uni-text",{staticClass:"ss"},[t._v(t._s(t.end))])],1),i("v-uni-image",{staticClass:"button",attrs:{src:t.buttonimage},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.pause.apply(void 0,arguments)}}})],1)]:void 0,i("v-uni-view",{staticClass:"cdetail-all-wrap"},[i("v-uni-view",{staticClass:"content-title"},[t._v(t._s(t.name))]),i("v-uni-view",{staticClass:"content-time"},[t._v(t._s(t.adddtime))]),i("v-uni-rich-text",{attrs:{nodes:t.content}})],1)],2)},o=[]},"9e30":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".page[data-v-219ee03c]{width:100%}.button[data-v-219ee03c]{margin-top:%?20?%;width:%?80?%;height:%?80?%}.mm[data-v-219ee03c]{padding-left:%?20?%}.ss[data-v-219ee03c]{padding-right:%?20?%}.hidden[data-v-219ee03c]{position:fixed;z-index:-1;width:%?1?%;height:%?1?%}.slider-box[data-v-219ee03c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?26?%;color:#999}.slider[data-v-219ee03c]{padding-left:%?20?%;padding-right:%?20?%;width:100%}.live-all-wrap[data-v-219ee03c]{background-color:#f4f5f6}.video-wrap[data-v-219ee03c]{text-align:center;width:100%;height:%?400?%;background-color:#000}.video-wrap3[data-v-219ee03c]{text-align:center;width:100%;height:%?550?%}.audio[data-v-219ee03c]{width:92%;height:%?40?%;padding-left:%?10?%;padding-right:%?10?%}.cdetail-all-wrap[data-v-219ee03c]{width:92%;padding-left:%?10?%;margin-top:%?60?%}.content-title[data-v-219ee03c]{height:%?40?%;font-weight:700}.content-time[data-v-219ee03c]{font-size:%?20?%;color:#969696;margin-top:%?60?%;margin-bottom:%?40?%}",""]),t.exports=e},ace6:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{live_info:{},name:"",adddtime:"",content:"",url:"",type:"",thumb:"",duration:"",currentTime:0,videoContext:"",buttonimage:"",status:1,start:"",end:""}},onLoad:function(e){this.type=e.type,this.live_info=JSON.parse(decodeURIComponent(e.info)),t("log",this.live_info," at pages/content-detail/content-detail.vue:56"),this.name=this.live_info.name,this.adddtime=this.live_info.add_time,this.content=this.live_info.content,this.thumb=e.thumb,1==this.type||(this.url=this.decypt(this.live_info.url),3==this.type&&(this.videoContext=uni.createVideoContext("myVideo"),this.buttonimage="../../static/voice2.png"))},methods:{decypt:function(t){for(var e="",i="1ecxXyLRB.COdrAi:q09Z62ash-QGn8VFNIlb=fM/D74WjS_EUzYuw?HmTPvkJ3otK5gp",a=0;a<t.length;a++)for(var n=t[a],o=0;o<i.length;o++){var d=i[o];n==d&&(e+=0==o?i[i.length-1]:i[o-1])}return e},pause:function(){0==this.status?(this.status=1,this.videoContext.play(),this.buttonimage="../../static/voice2.png"):(this.status=0,this.videoContext.pause(),this.buttonimage="../../static/voice.png")},timeupdate:function(t){t.detail.detail?(this.currentTime=t.detail.detail.currentTime,this.duration=t.detail.detail.duration,this.start=this.calcTimer(this.currentTime),this.end=this.calcTimer(this.duration)):(this.currentTime=t.detail.currentTime,this.duration=t.detail.duration,this.start=this.calcTimer(t.detail.currentTime),this.end=this.calcTimer(t.detail.duration))},sliderChange:function(t){this.videoContext.seek(t.detail.value)},sliderChanging:function(t){this.currentTime=t.detail.value,this.start=this.calcTimer(t.detail.value)},loadedmetadata:function(e){this.duration=e.detail.duration,this.start=this.calcTimer(e.detail.duration),t("log","音频加载完成"," at pages/content-detail/content-detail.vue:134")},calcTimer:function(t){if(0===t||"number"!==typeof t)return"00:00";var e=Math.floor(t/60),i=Math.floor(t%60);return e<10&&(e="0"+e),i<10&&(i="0"+i),e+":"+i}}};e.default=i}).call(this,i("0de9")["log"])},b7ed:function(t,e,i){"use strict";i.r(e);var a=i("ace6"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},e3e8:function(t,e,i){var a=i("9e30");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("0ffc7c4c",a,!0,{sourceMap:!1,shadowMode:!1})},f10b:function(t,e,i){"use strict";i.r(e);var a=i("29b1"),n=i("b7ed");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("299b");var d,s=i("f0c5"),r=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"219ee03c",null,!1,a["a"],d);e["default"]=r.exports}}]);
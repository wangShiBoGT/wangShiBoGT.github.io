(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{554:function(t,i,e){},603:function(t,i,e){"use strict";e(554)},619:function(t,i,e){"use strict";e.r(i);var s=e(602),n=e.n(s),a={},r={props:{gistId:{type:String,required:!0},file:{type:String,required:!1,default:""}},data:function(){return{gistData:"loading..."}},created:function(){this.getGistData(this.gistId)},methods:{getGistData:function(t){var i=this;this.file.length>0&&(a.file=this.file),n.a.ajax({url:"https://gist.github.com/"+t+".json",data:a,dataType:"jsonp",timeout:2e4,success:function(t){i.gistData=t.div},error:function(t){console.log("error")}})}}},o=(e(603),e(5)),u=Object(o.a)(r,(function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"div-style"},[i("p",{domProps:{innerHTML:this._s(this.gistData)}})])}),[],!1,null,"c492343e",null);i.default=u.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60dec9df"],{"1c4e":function(t,e,i){"use strict";i.r(e);i("b0c0");var c=i("7a23"),n={class:"centering_item"},r={class:"centering_item"},o=Object(c["createVNode"])("tr",null,[Object(c["createVNode"])("th",null,"画像"),Object(c["createVNode"])("th",null,"コメント")],-1),s=Object(c["createTextVNode"])("戻る"),l=Object(c["createTextVNode"])("コメントを追加");function a(t,e,i,a,b,h){var u=this,d=Object(c["resolveComponent"])("router-link");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[Object(c["createVNode"])("h1",null,Object(c["toDisplayString"])(this.exhibit.name),1),Object(c["createVNode"])("img",{src:b.exhibitImageUrl+this.exhibit.id,class:"item"},null,8,["src"]),Object(c["createVNode"])("div",n,[Object(c["createVNode"])("table",r,[o,(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(b.exhibitCommentList,(function(t,e){return Object(c["openBlock"])(),Object(c["createBlock"])("tr",{key:e},[Object(c["createVNode"])("td",null,[Object(c["createVNode"])("img",{src:b.exhibitImageUrl+u.exhibit.id,class:"item"},null,8,["src"])]),Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(t.comment),1)])})),128)),Object(c["createVNode"])("tr",null,[Object(c["createVNode"])("td",null,[Object(c["createVNode"])(d,{to:"/"},{default:Object(c["withCtx"])((function(){return[s]})),_:1})]),Object(c["createVNode"])("td",null,[Object(c["createVNode"])(d,{to:{name:"cutPicture",query:{id:t.$route.query.id}}},{default:Object(c["withCtx"])((function(){return[l]})),_:1},8,["to"])])])])])],64)}i("d3b7");var b={name:"exhibitionInfo",data:function(){return{exhibit:null,exhibitList:null,exhibitCommentList:null,exhibitImageUrl:this.$store.getters.getBaseUrl+"/image_content/thumbnail/",exhibitCommentUrl:this.$store.getters.getBaseUrl+"/exhibit_comment/"}},methods:{LoadExhibit:function(t){this.exhibitList=t}},mounted:function(){var t=this;this.$store.watch((function(t,e){return e.getExhibitList}),(function(e,i){console.log("prefecture changed! %s => %s",i,e),t.LoadExhibit(e)}))},created:function(){var t=this;if(this.$store.state.exhibitList.length>0){var e=this.$store.state.exhibitList;this.LoadExhibit(e)}this.exhibit=this.$store.state.exhibitList[this.$route.query.id],fetch(this.exhibitCommentUrl+this.exhibit.id).then((function(t){return t.json()})).then((function(e){t.exhibitCommentList=e,console.log("success: "+e)})).catch((function(t){console.log("error: "+t)}))}};i("2ddc");b.render=a;e["default"]=b},"2ddc":function(t,e,i){"use strict";i("36de")},"36de":function(t,e,i){}}]);
//# sourceMappingURL=chunk-60dec9df.4478465b.js.map
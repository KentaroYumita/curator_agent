(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47188471"],{"0cb2":function(e,t,r){var n=r("7b0b"),o=Math.floor,a="".replace,i=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,c=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,r,s,u,l){var p=r+e.length,f=s.length,d=c;return void 0!==u&&(u=n(u),d=i),a.call(l,d,(function(n,a){var i;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,r);case"'":return t.slice(p);case"<":i=u[a.slice(1,-1)];break;default:var c=+a;if(0===c)return n;if(c>f){var l=o(c/10);return 0===l?n:l<=f?void 0===s[l-1]?a.charAt(1):s[l-1]+a.charAt(1):n}i=s[c-1]}return void 0===i?"":i}))}},"14c3":function(e,t,r){var n=r("c6b6"),o=r("9263");e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var a=r.call(e,t);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==n(e))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(e,t)}},4546:function(e,t,r){"use strict";r.r(t);r("b0c0");var n=r("7a23"),o={class:"content"},a={class:"cropper-area"},i={class:"img-cropper"},c=Object(n["createVNode"])("div",{class:"actions"},null,-1),s=Object(n["createVNode"])("section",{class:"preview-area"},[Object(n["createVNode"])("div",{class:"preview"})],-1),u={class:"centering_item"},l={class:"centering_item"},p=Object(n["createTextVNode"])("戻る"),f=Object(n["createTextVNode"])("変更");function d(e,t,r,d,h,g){var v=this,m=Object(n["resolveComponent"])("vue-cropper"),b=Object(n["resolveComponent"])("router-link");return Object(n["openBlock"])(),Object(n["createBlock"])("div",null,[Object(n["createTextVNode"])(Object(n["toDisplayString"])(this.exhibit.name)+" ",1),Object(n["createVNode"])("input",{ref:"input",type:"file",name:"image",accept:"image/*",onChange:t[1]||(t[1]=function(){return g.setImage&&g.setImage.apply(g,arguments)})},null,544),Object(n["createVNode"])("div",o,[Object(n["createVNode"])("section",a,[Object(n["createVNode"])("div",i,[Object(n["createVNode"])(m,{ref:"cropper","aspect-ratio":16/9,src:h.imgSrc,preview:".preview"},null,8,["src"])]),c]),s]),Object(n["createVNode"])("div",u,[Object(n["withDirectives"])(Object(n["createVNode"])("textarea",{name:"comment","onUpdate:modelValue":t[2]||(t[2]=function(e){return v.beforeComment.comment=e})},null,512),[[n["vModelText"],this.beforeComment.comment]]),Object(n["createVNode"])("table",l,[Object(n["createVNode"])("tr",null,[Object(n["createVNode"])("td",null,[Object(n["createVNode"])(b,{to:{name:"exhibitionList"}},{default:Object(n["withCtx"])((function(){return[p]})),_:1})]),Object(n["createVNode"])("td",null,[Object(n["createVNode"])(b,{to:{name:""},onClick:g.sendData},{default:Object(n["withCtx"])((function(){return[f]})),_:1},8,["onClick"])])])])])])}r("ac1f"),r("5319"),r("d3b7");var h=r("95c3"),g=r.n(h),v=(r("6107"),{components:{VueCropper:g.a},data:function(){return{imgSrc:this.$store.getters.getBaseUrl+"/image_content/preview/"+this.$store.state.exhibitList[this.$route.query.id[0]].id,cropImg:"",data:null,beforeComment:this.$store.state.commentList[this.$route.query.id[1]],exhibit:this.$store.state.exhibitList[this.$route.query.id[0]]}},methods:{cropImage:function(){this.cropImg=this.$refs.cropper.getCroppedCanvas().toDataURL()},flipX:function(){var e=this.$refs.flipX,t=e.getAttribute("data-scale");t=t?-t:-1,this.$refs.cropper.scaleX(t),e.setAttribute("data-scale",t)},flipY:function(){var e=this.$refs.flipY,t=e.getAttribute("data-scale");t=t?-t:-1,this.$refs.cropper.scaleY(t),e.setAttribute("data-scale",t)},getCropBoxData:function(){this.data=JSON.stringify(this.$refs.cropper.getCropBoxData(),null,4)},getData:function(){this.data=JSON.stringify(this.$refs.cropper.getData(),null,4)},move:function(e,t){this.$refs.cropper.move(e,t)},reset:function(){this.$refs.cropper.reset()},rotate:function(e){this.$refs.cropper.rotate(e)},setCropBoxData:function(){this.data&&this.$refs.cropper.setCropBoxData(JSON.parse(this.data))},setData:function(){this.data&&this.$refs.cropper.setData(JSON.parse(this.data))},setImage:function(e){var t=this,r=e.target.files[0];if(-1!==r.type.indexOf("image/"))if("function"===typeof FileReader){var n=new FileReader;n.onload=function(e){t.imgSrc=e.target.result,t.$refs.cropper.replace(e.target.result)},n.readAsDataURL(r)}else alert("Sorry, FileReader API not supported");else alert("Please select an image file")},showFileChooser:function(){this.$refs.input.click()},zoom:function(e){this.$refs.cropper.relativeZoom(e)},sendData:function(){var e=document.getElementsByName("comment")[0];if(null==e)return alert("textdata が読み込めません"),!1;var t=e.value;if(""==t)return alert("コメントを入力してください"),!1;this.getData();var r=JSON.parse(this.data),n={id:this.beforeComment.id,comment:t,image_x:r.x,image_y:r.y,image_width:r.width,image_height:r.height};fetch(this.$store.getters.getBaseUrl+"/exhibit_comment/",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){console.log("success: "+e)})).catch((function(e){console.log("error: "+e)})),this.$router.push({name:"exhibitionList"})}}});r("509d");v.render=d;t["default"]=v},"509d":function(e,t,r){"use strict";r("9f1d")},5319:function(e,t,r){"use strict";var n=r("d784"),o=r("825a"),a=r("50c4"),i=r("a691"),c=r("1d80"),s=r("8aa5"),u=r("0cb2"),l=r("14c3"),p=Math.max,f=Math.min,d=function(e){return void 0===e?e:String(e)};n("replace",2,(function(e,t,r,n){var h=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,g=n.REPLACE_KEEPS_$0,v=h?"$":"$0";return[function(r,n){var o=c(this),a=void 0==r?void 0:r[e];return void 0!==a?a.call(r,o,n):t.call(String(o),r,n)},function(e,n){if(!h&&g||"string"===typeof n&&-1===n.indexOf(v)){var c=r(t,e,this,n);if(c.done)return c.value}var m=o(e),b=String(this),x="function"===typeof n;x||(n=String(n));var y=m.global;if(y){var C=m.unicode;m.lastIndex=0}var O=[];while(1){var N=l(m,b);if(null===N)break;if(O.push(N),!y)break;var S=String(N[0]);""===S&&(m.lastIndex=s(b,a(m.lastIndex),C))}for(var E="",D=0,$=0;$<O.length;$++){N=O[$];for(var B=String(N[0]),j=p(f(i(N.index),b.length),0),R=[],w=1;w<N.length;w++)R.push(d(N[w]));var A=N.groups;if(x){var _=[B].concat(R,j,b);void 0!==A&&_.push(A);var I=String(n.apply(void 0,_))}else I=u(B,b,j,R,A,n);j>=D&&(E+=b.slice(D,j)+I,D=j+B.length)}return E+b.slice(D)}]}))},6547:function(e,t,r){var n=r("a691"),o=r("1d80"),a=function(e){return function(t,r){var a,i,c=String(o(t)),s=n(r),u=c.length;return s<0||s>=u?e?"":void 0:(a=c.charCodeAt(s),a<55296||a>56319||s+1===u||(i=c.charCodeAt(s+1))<56320||i>57343?e?c.charAt(s):a:e?c.slice(s,s+2):i-56320+(a-55296<<10)+65536)}};e.exports={codeAt:a(!1),charAt:a(!0)}},"8aa5":function(e,t,r){"use strict";var n=r("6547").charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},9263:function(e,t,r){"use strict";var n=r("ad6d"),o=r("9f7f"),a=r("5692"),i=RegExp.prototype.exec,c=a("native-string-replace",String.prototype.replace),s=i,u=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),l=o.UNSUPPORTED_Y||o.BROKEN_CARET,p=void 0!==/()??/.exec("")[1],f=u||p||l;f&&(s=function(e){var t,r,o,a,s=this,f=l&&s.sticky,d=n.call(s),h=s.source,g=0,v=e;return f&&(d=d.replace("y",""),-1===d.indexOf("g")&&(d+="g"),v=String(e).slice(s.lastIndex),s.lastIndex>0&&(!s.multiline||s.multiline&&"\n"!==e[s.lastIndex-1])&&(h="(?: "+h+")",v=" "+v,g++),r=new RegExp("^(?:"+h+")",d)),p&&(r=new RegExp("^"+h+"$(?!\\s)",d)),u&&(t=s.lastIndex),o=i.call(f?r:s,v),f?o?(o.input=o.input.slice(g),o[0]=o[0].slice(g),o.index=s.lastIndex,s.lastIndex+=o[0].length):s.lastIndex=0:u&&o&&(s.lastIndex=s.global?o.index+o[0].length:t),p&&o&&o.length>1&&c.call(o[0],r,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(o[a]=void 0)})),o}),e.exports=s},"95c3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("7a23"),o=r("bab4"),a=i(o);function i(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}var s="undefined"===typeof window?[String,Array]:[String,Array,Element,NodeList];t.default={render:function(){var e=this.crossorigin||void 0;return(0,n.h)("div",{style:this.containerStyle},[(0,n.h)("img",{ref:"img",src:this.src,alt:this.alt||"image",style:[{"max-width":"100%"},this.imgStyle],crossorigin:e})])},props:{containerStyle:Object,src:{type:String,default:""},alt:String,imgStyle:Object,viewMode:Number,dragMode:String,initialAspectRatio:Number,aspectRatio:Number,data:Object,preview:s,responsive:{type:Boolean,default:!0},restore:{type:Boolean,default:!0},checkCrossOrigin:{type:Boolean,default:!0},checkOrientation:{type:Boolean,default:!0},crossorigin:{type:String},modal:{type:Boolean,default:!0},guides:{type:Boolean,default:!0},center:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0},background:{type:Boolean,default:!0},autoCrop:{type:Boolean,default:!0},autoCropArea:Number,movable:{type:Boolean,default:!0},rotatable:{type:Boolean,default:!0},scalable:{type:Boolean,default:!0},zoomable:{type:Boolean,default:!0},zoomOnTouch:{type:Boolean,default:!0},zoomOnWheel:{type:Boolean,default:!0},wheelZoomRatio:Number,cropBoxMovable:{type:Boolean,default:!0},cropBoxResizable:{type:Boolean,default:!0},toggleDragModeOnDblclick:{type:Boolean,default:!0},minCanvasWidth:Number,minCanvasHeight:Number,minCropBoxWidth:Number,minCropBoxHeight:Number,minContainerWidth:Number,minContainerHeight:Number,ready:Function,cropstart:Function,cropmove:Function,cropend:Function,crop:Function,zoom:Function},mounted:function(){var e=this.$options.props,t=(e.containerStyle,e.src,e.alt,e.imgStyle,c(e,["containerStyle","src","alt","imgStyle"])),r={};for(var n in t)void 0!==this[n]&&(r[n]=this[n]);this.cropper=new a.default(this.$refs.img,r)},methods:{reset:function(){return this.cropper.reset()},clear:function(){return this.cropper.clear()},initCrop:function(){return this.cropper.crop()},replace:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.cropper.replace(e,t)},enable:function(){return this.cropper.enable()},disable:function(){return this.cropper.disable()},destroy:function(){return this.cropper.destroy()},move:function(e,t){return this.cropper.move(e,t)},moveTo:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;return this.cropper.moveTo(e,t)},relativeZoom:function(e,t){return this.cropper.zoom(e,t)},zoomTo:function(e,t){return this.cropper.zoomTo(e,t)},rotate:function(e){return this.cropper.rotate(e)},rotateTo:function(e){return this.cropper.rotateTo(e)},scaleX:function(e){return this.cropper.scaleX(e)},scaleY:function(e){return this.cropper.scaleY(e)},scale:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;return this.cropper.scale(e,t)},getData:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.cropper.getData(e)},setData:function(e){return this.cropper.setData(e)},getContainerData:function(){return this.cropper.getContainerData()},getImageData:function(){return this.cropper.getImageData()},getCanvasData:function(){return this.cropper.getCanvasData()},setCanvasData:function(e){return this.cropper.setCanvasData(e)},getCropBoxData:function(){return this.cropper.getCropBoxData()},setCropBoxData:function(e){return this.cropper.setCropBoxData(e)},getCroppedCanvas:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.cropper.getCroppedCanvas(e)},setAspectRatio:function(e){return this.cropper.setAspectRatio(e)},setDragMode:function(e){return this.cropper.setDragMode(e)}}}},"9f1d":function(e,t,r){},"9f7f":function(e,t,r){"use strict";var n=r("d039");function o(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=n((function(){var e=o("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=n((function(){var e=o("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,r){"use strict";var n=r("23e7"),o=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},ad6d:function(e,t,r){"use strict";var n=r("825a");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d784:function(e,t,r){"use strict";r("ac1f");var n=r("6eeb"),o=r("9263"),a=r("d039"),i=r("b622"),c=r("9112"),s=i("species"),u=RegExp.prototype,l=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),p=function(){return"$0"==="a".replace(/./,"$0")}(),f=i("replace"),d=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),h=!a((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));e.exports=function(e,t,r,f){var g=i(e),v=!a((function(){var t={};return t[g]=function(){return 7},7!=""[e](t)})),m=v&&!a((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[s]=function(){return r},r.flags="",r[g]=/./[g]),r.exec=function(){return t=!0,null},r[g](""),!t}));if(!v||!m||"replace"===e&&(!l||!p||d)||"split"===e&&!h){var b=/./[g],x=r(g,""[e],(function(e,t,r,n,a){var i=t.exec;return i===o||i===u.exec?v&&!a?{done:!0,value:b.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}}),{REPLACE_KEEPS_$0:p,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),y=x[0],C=x[1];n(String.prototype,e,y),n(u,g,2==t?function(e,t){return C.call(e,this,t)}:function(e){return C.call(e,this)})}f&&c(u[g],"sham",!0)}}}]);
//# sourceMappingURL=chunk-47188471.cb22258c.js.map
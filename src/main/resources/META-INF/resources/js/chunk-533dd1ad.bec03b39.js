(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-533dd1ad"],{"0cb2":function(e,t,r){var n=r("7b0b"),a=Math.floor,o="".replace,i=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,c=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,r,s,u,l){var p=r+e.length,f=s.length,d=c;return void 0!==u&&(u=n(u),d=i),o.call(l,d,(function(n,o){var i;switch(o.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,r);case"'":return t.slice(p);case"<":i=u[o.slice(1,-1)];break;default:var c=+o;if(0===c)return n;if(c>f){var l=a(c/10);return 0===l?n:l<=f?void 0===s[l-1]?o.charAt(1):s[l-1]+o.charAt(1):n}i=s[c-1]}return void 0===i?"":i}))}},"14c3":function(e,t,r){var n=r("c6b6"),a=r("9263");e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var o=r.call(e,t);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==n(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},5319:function(e,t,r){"use strict";var n=r("d784"),a=r("825a"),o=r("50c4"),i=r("a691"),c=r("1d80"),s=r("8aa5"),u=r("0cb2"),l=r("14c3"),p=Math.max,f=Math.min,d=function(e){return void 0===e?e:String(e)};n("replace",2,(function(e,t,r,n){var h=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,g=n.REPLACE_KEEPS_$0,v=h?"$":"$0";return[function(r,n){var a=c(this),o=void 0==r?void 0:r[e];return void 0!==o?o.call(r,a,n):t.call(String(a),r,n)},function(e,n){if(!h&&g||"string"===typeof n&&-1===n.indexOf(v)){var c=r(t,e,this,n);if(c.done)return c.value}var m=a(e),b=String(this),x="function"===typeof n;x||(n=String(n));var y=m.global;if(y){var O=m.unicode;m.lastIndex=0}var C=[];while(1){var S=l(m,b);if(null===S)break;if(C.push(S),!y)break;var N=String(S[0]);""===N&&(m.lastIndex=s(b,o(m.lastIndex),O))}for(var E="",B=0,D=0;D<C.length;D++){S=C[D];for(var $=String(S[0]),j=p(f(i(S.index),b.length),0),R=[],w=1;w<S.length;w++)R.push(d(S[w]));var A=S.groups;if(x){var _=[$].concat(R,j,b);void 0!==A&&_.push(A);var I=String(n.apply(void 0,_))}else I=u($,b,j,R,A,n);j>=B&&(E+=b.slice(B,j)+I,B=j+$.length)}return E+b.slice(B)}]}))},6547:function(e,t,r){var n=r("a691"),a=r("1d80"),o=function(e){return function(t,r){var o,i,c=String(a(t)),s=n(r),u=c.length;return s<0||s>=u?e?"":void 0:(o=c.charCodeAt(s),o<55296||o>56319||s+1===u||(i=c.charCodeAt(s+1))<56320||i>57343?e?c.charAt(s):o:e?c.slice(s,s+2):i-56320+(o-55296<<10)+65536)}};e.exports={codeAt:o(!1),charAt:o(!0)}},7073:function(e,t,r){"use strict";r("8f3a")},"8aa5":function(e,t,r){"use strict";var n=r("6547").charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},"8f3a":function(e,t,r){},9263:function(e,t,r){"use strict";var n=r("ad6d"),a=r("9f7f"),o=r("5692"),i=RegExp.prototype.exec,c=o("native-string-replace",String.prototype.replace),s=i,u=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),l=a.UNSUPPORTED_Y||a.BROKEN_CARET,p=void 0!==/()??/.exec("")[1],f=u||p||l;f&&(s=function(e){var t,r,a,o,s=this,f=l&&s.sticky,d=n.call(s),h=s.source,g=0,v=e;return f&&(d=d.replace("y",""),-1===d.indexOf("g")&&(d+="g"),v=String(e).slice(s.lastIndex),s.lastIndex>0&&(!s.multiline||s.multiline&&"\n"!==e[s.lastIndex-1])&&(h="(?: "+h+")",v=" "+v,g++),r=new RegExp("^(?:"+h+")",d)),p&&(r=new RegExp("^"+h+"$(?!\\s)",d)),u&&(t=s.lastIndex),a=i.call(f?r:s,v),f?a?(a.input=a.input.slice(g),a[0]=a[0].slice(g),a.index=s.lastIndex,s.lastIndex+=a[0].length):s.lastIndex=0:u&&a&&(s.lastIndex=s.global?a.index+a[0].length:t),p&&a&&a.length>1&&c.call(a[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(a[o]=void 0)})),a}),e.exports=s},"95c3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("7a23"),a=r("bab4"),o=i(a);function i(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}var s="undefined"===typeof window?[String,Array]:[String,Array,Element,NodeList];t.default={render:function(){var e=this.crossorigin||void 0;return(0,n.h)("div",{style:this.containerStyle},[(0,n.h)("img",{ref:"img",src:this.src,alt:this.alt||"image",style:[{"max-width":"100%"},this.imgStyle],crossorigin:e})])},props:{containerStyle:Object,src:{type:String,default:""},alt:String,imgStyle:Object,viewMode:Number,dragMode:String,initialAspectRatio:Number,aspectRatio:Number,data:Object,preview:s,responsive:{type:Boolean,default:!0},restore:{type:Boolean,default:!0},checkCrossOrigin:{type:Boolean,default:!0},checkOrientation:{type:Boolean,default:!0},crossorigin:{type:String},modal:{type:Boolean,default:!0},guides:{type:Boolean,default:!0},center:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0},background:{type:Boolean,default:!0},autoCrop:{type:Boolean,default:!0},autoCropArea:Number,movable:{type:Boolean,default:!0},rotatable:{type:Boolean,default:!0},scalable:{type:Boolean,default:!0},zoomable:{type:Boolean,default:!0},zoomOnTouch:{type:Boolean,default:!0},zoomOnWheel:{type:Boolean,default:!0},wheelZoomRatio:Number,cropBoxMovable:{type:Boolean,default:!0},cropBoxResizable:{type:Boolean,default:!0},toggleDragModeOnDblclick:{type:Boolean,default:!0},minCanvasWidth:Number,minCanvasHeight:Number,minCropBoxWidth:Number,minCropBoxHeight:Number,minContainerWidth:Number,minContainerHeight:Number,ready:Function,cropstart:Function,cropmove:Function,cropend:Function,crop:Function,zoom:Function},mounted:function(){var e=this.$options.props,t=(e.containerStyle,e.src,e.alt,e.imgStyle,c(e,["containerStyle","src","alt","imgStyle"])),r={};for(var n in t)void 0!==this[n]&&(r[n]=this[n]);this.cropper=new o.default(this.$refs.img,r)},methods:{reset:function(){return this.cropper.reset()},clear:function(){return this.cropper.clear()},initCrop:function(){return this.cropper.crop()},replace:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.cropper.replace(e,t)},enable:function(){return this.cropper.enable()},disable:function(){return this.cropper.disable()},destroy:function(){return this.cropper.destroy()},move:function(e,t){return this.cropper.move(e,t)},moveTo:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;return this.cropper.moveTo(e,t)},relativeZoom:function(e,t){return this.cropper.zoom(e,t)},zoomTo:function(e,t){return this.cropper.zoomTo(e,t)},rotate:function(e){return this.cropper.rotate(e)},rotateTo:function(e){return this.cropper.rotateTo(e)},scaleX:function(e){return this.cropper.scaleX(e)},scaleY:function(e){return this.cropper.scaleY(e)},scale:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;return this.cropper.scale(e,t)},getData:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.cropper.getData(e)},setData:function(e){return this.cropper.setData(e)},getContainerData:function(){return this.cropper.getContainerData()},getImageData:function(){return this.cropper.getImageData()},getCanvasData:function(){return this.cropper.getCanvasData()},setCanvasData:function(e){return this.cropper.setCanvasData(e)},getCropBoxData:function(){return this.cropper.getCropBoxData()},setCropBoxData:function(e){return this.cropper.setCropBoxData(e)},getCroppedCanvas:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.cropper.getCroppedCanvas(e)},setAspectRatio:function(e){return this.cropper.setAspectRatio(e)},setDragMode:function(e){return this.cropper.setDragMode(e)}}}},"9f7f":function(e,t,r){"use strict";var n=r("d039");function a(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=n((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=n((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,r){"use strict";var n=r("23e7"),a=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(e,t,r){"use strict";var n=r("825a");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d262:function(e,t,r){"use strict";r.r(t);r("b0c0");var n=r("7a23"),a={class:"content"},o={class:"cropper-area"},i={class:"img-cropper"},c=Object(n["createVNode"])("div",{class:"actions"},null,-1),s=Object(n["createVNode"])("section",{class:"preview-area"},[Object(n["createVNode"])("div",{class:"preview"})],-1),u={class:"centering_item"},l=Object(n["createVNode"])("textarea",{name:"comment"},null,-1),p={class:"centering_item"},f=Object(n["createTextVNode"])("戻る"),d=Object(n["createTextVNode"])("新しいコメントを追加");function h(e,t,r,h,g,v){var m=Object(n["resolveComponent"])("vue-cropper"),b=Object(n["resolveComponent"])("router-link");return Object(n["openBlock"])(),Object(n["createBlock"])("div",null,[Object(n["createTextVNode"])(Object(n["toDisplayString"])(this.exhibit.name)+" ",1),Object(n["createVNode"])("input",{ref:"input",type:"file",name:"image",accept:"image/*",onChange:t[1]||(t[1]=function(){return v.setImage&&v.setImage.apply(v,arguments)})},null,544),Object(n["createVNode"])("div",a,[Object(n["createVNode"])("section",o,[Object(n["createVNode"])("div",i,[Object(n["createVNode"])(m,{ref:"cropper","aspect-ratio":16/9,src:g.imgSrc,preview:".preview"},null,8,["src"])]),c]),s]),Object(n["createVNode"])("div",u,[l,Object(n["createVNode"])("table",p,[Object(n["createVNode"])("tr",null,[Object(n["createVNode"])("td",null,[Object(n["createVNode"])(b,{to:{name:"exhibitionList"}},{default:Object(n["withCtx"])((function(){return[f]})),_:1})]),Object(n["createVNode"])("td",null,[Object(n["createVNode"])(b,{to:{name:""},onClick:v.sendData},{default:Object(n["withCtx"])((function(){return[d]})),_:1},8,["onClick"])])])])])])}r("ac1f"),r("5319"),r("d3b7");var g=r("95c3"),v=r.n(g),m=(r("6107"),{components:{VueCropper:v.a},data:function(){return{imgSrc:this.$store.getters.getBaseUrl+"/image_content/preview/"+this.$store.state.exhibitList[this.$route.query.id].id,cropImg:"",data:null,exhibit:this.$store.state.exhibitList[this.$route.query.id]}},methods:{cropImage:function(){this.cropImg=this.$refs.cropper.getCroppedCanvas().toDataURL()},flipX:function(){var e=this.$refs.flipX,t=e.getAttribute("data-scale");t=t?-t:-1,this.$refs.cropper.scaleX(t),e.setAttribute("data-scale",t)},flipY:function(){var e=this.$refs.flipY,t=e.getAttribute("data-scale");t=t?-t:-1,this.$refs.cropper.scaleY(t),e.setAttribute("data-scale",t)},getCropBoxData:function(){this.data=JSON.stringify(this.$refs.cropper.getCropBoxData(),null,4)},getData:function(){this.data=JSON.stringify(this.$refs.cropper.getData(),null,4)},move:function(e,t){this.$refs.cropper.move(e,t)},reset:function(){this.$refs.cropper.reset()},rotate:function(e){this.$refs.cropper.rotate(e)},setCropBoxData:function(){this.data&&this.$refs.cropper.setCropBoxData(JSON.parse(this.data))},setData:function(){this.data&&this.$refs.cropper.setData(JSON.parse(this.data))},setImage:function(e){var t=this,r=e.target.files[0];if(-1!==r.type.indexOf("image/"))if("function"===typeof FileReader){var n=new FileReader;n.onload=function(e){t.imgSrc=e.target.result,t.$refs.cropper.replace(e.target.result)},n.readAsDataURL(r)}else alert("Sorry, FileReader API not supported");else alert("Please select an image file")},showFileChooser:function(){this.$refs.input.click()},zoom:function(e){this.$refs.cropper.relativeZoom(e)},sendData:function(){var e=document.getElementsByName("comment")[0];if(null==e)return alert("textdata が読み込めません"),!1;var t=e.value;if(""==t)return alert("コメントを入力してください"),!1;this.getData();var r=JSON.parse(this.data),n={exhibit:this.exhibit,comment:t,image_x:r.x,image_y:r.y,image_width:r.width,image_height:r.height};fetch(this.$store.getters.getBaseUrl+"/exhibit_comment/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){console.log("success: "+e)})).catch((function(e){console.log("error: "+e)})),this.$router.push({name:"exhibitionList"})}}});r("7073");m.render=h;t["default"]=m},d784:function(e,t,r){"use strict";r("ac1f");var n=r("6eeb"),a=r("9263"),o=r("d039"),i=r("b622"),c=r("9112"),s=i("species"),u=RegExp.prototype,l=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),p=function(){return"$0"==="a".replace(/./,"$0")}(),f=i("replace"),d=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),h=!o((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));e.exports=function(e,t,r,f){var g=i(e),v=!o((function(){var t={};return t[g]=function(){return 7},7!=""[e](t)})),m=v&&!o((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[s]=function(){return r},r.flags="",r[g]=/./[g]),r.exec=function(){return t=!0,null},r[g](""),!t}));if(!v||!m||"replace"===e&&(!l||!p||d)||"split"===e&&!h){var b=/./[g],x=r(g,""[e],(function(e,t,r,n,o){var i=t.exec;return i===a||i===u.exec?v&&!o?{done:!0,value:b.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}}),{REPLACE_KEEPS_$0:p,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),y=x[0],O=x[1];n(String.prototype,e,y),n(u,g,2==t?function(e,t){return O.call(e,this,t)}:function(e){return O.call(e,this)})}f&&c(u[g],"sham",!0)}}}]);
//# sourceMappingURL=chunk-533dd1ad.bec03b39.js.map
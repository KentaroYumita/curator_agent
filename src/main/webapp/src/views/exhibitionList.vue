<template>
  <h1>Comment List</h1>
  <div class="centering_item">
    <table border=1 class="centering_item">
      <thead>
        <tr>
          <th>名前</th>
          <th>展示</th>
          <th style="width: 20em">コメント数</th>
          <th>コメント追加</th>
          <th style="width: 6em"></th>
        </tr>
      </thead>
      <!--
      <tr>
        <td>展示A</td>
        <td><img alt="exhibitionA" src="../assets/exhibitionA.jpg" class="miniimg"></td>
        <td><router-link to="/exhibitionInfo">詳細</router-link></td>
      </tr>
      <tr>
        <td>展示B</td>
        <td><img alt="exhibitionB" src="../assets/exhibitionB.jpg" class="miniimg"></td>
        <td><router-link to="/exhibitionInfo">詳細</router-link></td>
      </tr>
      -->
      <tbody v-for="(exhibit, index) in exhibitList" :key="index" class="hidden_box">
        <tr>
          <td>{{exhibit.name}}</td>
          <td><img  v-bind:src="exhibitImageUrl+exhibit.id" class="item"/></td>
          <td>{{ commentList.filter(c=>c.exhibit.id==exhibit.id).length }}</td>
          <td>
            <router-link :to="{ name: 'cutPicture', query: {id: index}}" >
              コメント追加
            </router-link>
          </td>
          <td>
            <label v-bind:for="index">v</label>
            <input type="checkbox" v-bind:id="index" @click="CheckBox(index)"/>
          </td>
        </tr>

        <!-- ここから非表示 -->
        <tr v-for="(comment, index2) in commentList.filter(c=>c.exhibit.id==exhibit.id)" :key="index2" class="hidden_show" v-bind:id="index">
          <td></td>
          <td>
            <img v-bind:src="exhibitImagePreviewUrl+exhibit.id"/>
          </td>
          <td style="width:20em">{{ comment.comment }}</td>
          <td>
            <router-link :to="{ name: 'comment', query: {id: [index,index2]} }">
              編集
            </router-link>
          </td>
          <td>
            <router-link :to="{ name: ''}" v-on:click="showPopup(comment)" style="background-color: red;">
              削除
            </router-link>
          </td>
        </tr>
        <!-- ここまで非表示 -->

      </tbody>
    </table>

    <div class="popup">
      <div class="popup-inner">
        <p></p>
        <router-link :to="{ name: ''}" v-on:click="DeleteComment()" style="background-color: red;">
          OK
        </router-link>
        <router-link :to="{ name: ''}" v-on:click="hidePopup()">
          キャンセル
        </router-link>
      </div>
      <div class="black-background"></div>
    </div>
  </div>

</template>

<script>
export default {
  name: "exhibitionList",

  data () {
    return {
      exhibitList:null, // 展示リスト
      exhibit:null,   // 展示
      commentList:null, // 展示コメントリスト
      comment:null, // 展示コメント
      exhibitImageUrl:this.$store.getters.getBaseUrl+"/image_content/thumbnail/", // Quarkusの展示画像(thumbnail)URL
      exhibitImagePreviewUrl:this.$store.getters.getBaseUrl+"/image_content/preview/", // Quarkusの展示画像(preview)URL
      exhibitCommentUrl:this.$store.getters.getBaseUrl+"/exhibit_comment", // Quarkusの展示コメントURL

      delComment: null, // 削除する展示コメント
    }
  },
  methods:{
    LoadExhibit(exhibitList) {
      this.exhibitList = exhibitList;
      console.log("exhibit load completed")
    },

    LoadComment(commentList) {
      this.commentList = commentList;
      console.log("comment load completed")
    },

    // コメント削除
    DeleteComment() {
      fetch(this.$store.getters.getBaseUrl + '/exhibit_comment/' + this.delComment.id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.delComment)
      })
          .then(response => {
            return response.json()
          })
          .then(data => {
            console.log('success: ' + data)
          }).catch(error => {
        console.log('error: ' + error)
      })

      this.$router.push({name: 'exhibitionList'})
      window.location.reload()

      this.hidePopup();
    },

    // コメントの表示/非表示
    CheckBox(index){
      let check = document.getElementById(index)
      let lab = document.getElementsByTagName("label")[index]
      let hides = document.getElementsByClassName("hidden_show")

      // 表示
      if(check.checked){
        // ラベルを^に変える
        lab.innerHTML = "^"

        // コメントのcssを変える
        for(let i=0; i<hides.length; i++) {
          if(hides[i].id==index) {
            hides[i].style =
                "  padding: 10px 0;\n" +
                "  height: auto;\n" +
                "  opacity: 1;" +
                "  background-color: #96c8ff\n"

            hides[i].style.display='table-row';
          }
        }
      }

      // 非表示
      else{
        // ラベルをvに変える
        lab.innerHTML = "v"

        // コメントのcssを変える
        for(let i=0; i<hides.length; i++) {
          if(hides[i].id==index) {
            hides[i].style =
                "  height: 0;\n" +
                "  padding: 0;\n" +
                "  overflow: hidden;"

            hides[i].style.display='none';
          }
        }
      }
    },

    // 展示画像のスタイル
    createImageStyle() {
      let hs = document.getElementsByClassName("hidden_show")
      let sorted_list = this.$store.state.commentList.sort((a,b) => {
        return a.exhibit.id - b.exhibit.id;
      })

      for(let i=0; i<hs.length; i++) {
        let img_tag = hs[i].getElementsByTagName("img")[0]
        let img = new Image()
        let comment = sorted_list[i]

        img.onload = function () {
          img_tag.style.width = comment.image_width+'px'
          img_tag.style.height = comment.image_height+'px'
          img_tag.style.objectPosition = (comment.image_x/(img.width-comment.image_width))*100+'% '+(comment.image_y/(img.height-comment.image_height))*100+'%'
          img_tag.style.objectFit = 'none'
        }

        img.src = img_tag.src
      }
    },

    // 削除ポップアップを表示
    showPopup(cm){
      let popup = document.getElementsByClassName("popup")[0];
      popup.style.visibility = "visible";

      let p = popup.getElementsByTagName("p")[0];
      p.innerText = "展示コメントを削除します。\n\"" + cm.comment+"\"";

      this.delComment = cm;

      // PCでのスクロール禁止
      document.addEventListener("mousewheel", this.scroll_control, { passive: false });
      // スマホでのタッチ操作でのスクロール禁止
      document.addEventListener("touchmove", this.scroll_control, { passive: false });
    },

    // 削除ポップアップを削除
    hidePopup(){
      let popup = document.getElementsByClassName("popup")[0];
      popup.style.visibility = "hidden";

      this.delComment=null;

      // PCでのスクロール禁止解除
      document.removeEventListener("mousewheel", this.scroll_control, { passive: false });
      // スマホでのタッチ操作でのスクロール禁止解除
      document.removeEventListener('touchmove', this.scroll_control, { passive: false });
    },

    // スクロール関連メソッド
    scroll_control(event) {
      event.preventDefault();
    },
  },
  mounted() {
    this.$store.watch(
        (state, getters) => getters.getExhibitList,
        (newValue, oldValue) => {
          console.log('exhibit prefecture changed! %s => %s', oldValue, newValue);
          this.LoadExhibit(newValue);
        }
    )
    this.$store.watch(
        (state, getters) => getters.getCommentList,
        (newValue, oldValue) => {
          console.log('comment prefecture changed! %s => %s', oldValue, newValue);
          this.LoadComment(newValue);
        }
    )

    this.createImageStyle()
  },
  created(){
    // 展示読み込み
    if(this.$store.state.exhibitList.length > 0){
      const val = this.$store.state.exhibitList;
      this.LoadExhibit(val);
    }

    // 展示コメント読み込み
    if(this.$store.state.commentList.length > 0){
      const val = this.$store.state.commentList;
      this.LoadComment(val);
    }
  },
  updated(){
    this.$store.watch(
        (state, getters) => getters.getExhibitList,
        (newValue, oldValue) => {
          console.log('exhibit prefecture changed! %s => %s', oldValue, newValue);
          this.LoadExhibit(newValue);
        }
    )
    this.$store.watch(
        (state, getters) => getters.getCommentList,
        (newValue, oldValue) => {
          console.log('comment prefecture changed! %s => %s', oldValue, newValue);
          this.LoadComment(newValue);
        }
    )
    this.createImageStyle()
  }
}
</script>

<style>
img.miniimg {
  width: 96px;
  height: 65px;
}

.centering_item {
  margin: 0 auto; /* 中央寄せ */
}

.centering_item label {
  padding: 15px;
  font-weight: bold;
  cursor :pointer;
  background: #0062CC;
  color: white;
}

/*チェックボックスを非表示*/
/*
.centering_item label:hover {
  background: #efefef;
}
*/

.centering_item input {
  display: none;
}

.hidden_box .hidden_show {
  height: 0;
  padding: 0;
  opacity: 0;
  display: none;
}
.hidden_box input:checked ~ .hidden_show {
  padding: 10px 0;
  height: auto;
  opacity: 1;
  display:table;
}

.centering_item a {
  display: inline-block;
  padding: 5px 15px;
  background: #0062CC;
  color: white;
  text-decoration: none;
  border-radius: 3px;
  margin-right: 1rem;
  margin-left: 1rem;
}

/* 削除ポップアップ */

.popup{
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  visibility: hidden;
}

.popup-inner {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  width: 80%;
  max-width: 600px;
  padding: 50px;
  background-color: #fff;
  z-index: 2;
  text-align: center;
}

.black-background {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.8);
  z-index: 1;
  cursor: pointer;
}
</style>
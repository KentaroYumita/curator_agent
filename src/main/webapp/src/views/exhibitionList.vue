<template>
  <h1>Comment List</h1>
  <div class="centering_item">
    <table border=1 class="centering_item">
      <tr>
        <th>名前</th>
        <th>展示</th>
        <th>コメント数</th>
        <th>コメント追加</th>
        <th></th>
      </tr>
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
      <tbody v-for="(exhibit, index) in exhibitList" :key="index" >
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
          <label v-bind:for="index">V</label>
          <input type="checkbox" v-bind:id="index"/>
        </td>
      </tr>
      <tr v-for="(comment, index2) in commentList.filter(c=>c.exhibit.id==exhibit.id)" :key="index2" style="background-color: #96c8ff" class="hidden_showa">
        <td></td>
        <td>画像</td>
        <td style="width:20em">{{ comment.comment }}</td>
        <td>
          <router-link :to="{ name: ''}">
            編集
          </router-link>
        </td>
        <td>
          <router-link :to="{ name: ''}" v-on:click="DeleteComment(comment)">
            削除
          </router-link>
        </td>
      </tr>

      </tbody>
    </table>
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
      exhibitImageUrl:this.$store.getters.getBaseUrl+"/image_content/thumbnail/", // Quarkusの展示URL
      exhibitCommentUrl:this.$store.getters.getBaseUrl+"/exhibit_comment" // Quarkusの展示コメントURL
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

    DeleteComment(cm){
      if(window.confirm("削除します。よろしいですか？")) {
        fetch(this.$store.getters.getBaseUrl + '/exhibit_comment/'+cm.id, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(cm)
        })
            .then(response => {
              return response.json()
            })
            .then(data => {
              console.log('success: ' + data)
            }).catch(error => {
          console.log('error: ' + error)
        })

        document.location.reload()
      }
    }
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
.centering_item label:hover {
  background: #efefef;
}

.centering_item .hidden_show {
  height: 0;
  padding: 0;
  overflow: hidden;
  opacity: 0;
  transition: 0.8s;
}
.centering_item input:checked ~ .hidden_show {
  padding: 10px 0;
  height: auto;
  opacity: 1;
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
</style>
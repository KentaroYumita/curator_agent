<template>
  <h1>{{ this.exhibit.name }}</h1>
  <img  v-bind:src="exhibitImageUrl+this.exhibit.id" class="item"/>


  <div class="centering_item">
    <table class="centering_item">
      <tr>
        <th>画像</th>
        <th>コメント</th>
      </tr>
      <tr v-for="(comment, index) in exhibitCommentList" :key="index" >
        <td><img  v-bind:src="exhibitImageUrl+this.exhibit.id" class="item"/></td>
        <td>{{ comment.comment }}</td>
      </tr>
      <!--
      <tr>
        <td><img  v-bind:src="exhibitImageUrl+this.exhibit.id" class="item"/></td>
        <td>コメント</td>
      </tr>
      <tr>
        <td><img  v-bind:src="exhibitImageUrl+this.exhibit.id" class="item"/></td>
        <td>コメント</td>
      </tr>
      -->
      <tr>
        <td><router-link to="/">戻る</router-link></td>
        <td><router-link :to="{ name: 'cutPicture', query: {id: $route.query.id} }">コメントを追加</router-link></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "exhibitionInfo",

  data () {
    return {
      exhibit: null,
      exhibitList:null,
      exhibitCommentList:null,
      exhibitImageUrl:this.$store.getters.getBaseUrl+"/image_content/thumbnail/",
      exhibitCommentUrl:this.$store.getters.getBaseUrl+"/exhibit_comment/",
    }
  },
  methods:{
    LoadExhibit(exhibitList) {
      this.exhibitList = exhibitList;
    }
  },
  mounted() {
    this.$store.watch(
        (state, getters) => getters.getExhibitList,
        (newValue, oldValue) => {
          console.log('prefecture changed! %s => %s', oldValue, newValue);
          this.LoadExhibit(newValue);
        }
    );
  },
  created(){
    if(this.$store.state.exhibitList.length > 0){
        const val = this.$store.state.exhibitList;
        this.LoadExhibit(val);
      }

    this.exhibit = this.$store.state.exhibitList[this.$route.query.id]

    fetch(this.exhibitCommentUrl+this.exhibit.id)
        .then(response => {return response.json()})
        .then(data => {
          this.exhibitCommentList = data
          console.log('success: '+data)
        })
        .catch(error => {
          console.log('error: '+error)
        })
  }
}
</script>

<style >
img.bigimg {
  width: 200px;
  height: 130px;
}
img.miniimg {
  width: 96px;
  height: 65px;
}
.centering_item {
  margin: 0 auto; /* 中央寄せ */
}
</style>
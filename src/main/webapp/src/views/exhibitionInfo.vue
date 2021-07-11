<template>
  <h1>{{ exhibitList[$route.params.id-1].name }}</h1>
  <img  v-bind:src="exhibitImageUrl+$route.params.id" class="item"/>


  <div class="centering_item">
    <table class="centering_item">
      <tr>
        <th>画像</th>
        <th>コメント</th>
      </tr>
      <tr>
        <td><img  v-bind:src="exhibitImageUrl+$route.params.id" class="item"/></td>
        <td>コメント</td>
      </tr>
      <tr>
        <td><img  v-bind:src="exhibitImageUrl+$route.params.id" class="item"/></td>
        <td>コメント</td>
      </tr>
      <tr>
        <td><router-link to="/">戻る</router-link></td>
        <td><router-link to="/cutPicture">コメントを追加</router-link></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "exhibitionInfo",

  data () {
    return {
      exhibitList:null,
      exhibitImageUrl:this.$store.getters.getBaseUrl+"/image_content/thumbnail/",
      exhibitCommentUrl:this.$store.getters.getBaseUrl+"/text_content/exhibit/",
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
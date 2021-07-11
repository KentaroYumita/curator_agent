<template>
  <h1>Exhibition List</h1>
  <div class="centering_item">
  <table border=1 class="centering_item">
    <tr>
      <th>名前</th>
      <th>展示</th>
      <th>詳細</th>
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
    <tr v-for="(exhibit, index) in exhibitList" :key="index" >
      <td>{{exhibit.name}}</td>
      <td><img  v-bind:src="exhibitImageUrl+exhibit.id" class="item"/></td>
      <td>
        <router-link :to="`/exhibitionInfo/${exhibit.id}`" >
          詳細
        </router-link>
      </td>
    </tr>
  </table>
  </div>

</template>

<script>
export default {
  name: "exhibitionList",

  data () {
    return {
      exhibitList:null,
      exhibit:null,
      exhibitImageUrl:this.$store.getters.getBaseUrl+"/image_content/thumbnail/"
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

<style>
img.miniimg {
  width: 96px;
  height: 65px;
}


.centering_item {
  margin: 0 auto; /* 中央寄せ */
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
<template>
  <div id="nav">
    <router-link to="/">List</router-link> |
    <router-link to="/exhibitionInfo">Info</router-link> |
    <router-link to="/cutPicture">cut</router-link> |
    <router-link to="/comment">comment</router-link> |
    <router-link to="/peopleMap">Map</router-link>

  </div>
  <router-view/>
</template>
<script>
import {mapActions} from "vuex";

export default {
  name: 'App',

  methods: {
    initializeExhibit(resList) {
      this.initExhibit(resList)
    },
    initializeComment(resList){
      this.initComment(resList)
    },
    ...mapActions(['initExhibit', 'initComment', 'initBaseUrl']),
  },

  created: function () {
    this.initBaseUrl("http://localhost:8980");
    console.log(this.$store.state.baseUrl)

    // 展示読み込み
    fetch(this.$store.getters.getBaseUrl + '/exhibit/')
        .then(response=>{return response.json()})
        .then(data => {
          //console.log(data)
          this.initializeExhibit(data);
          //console.log(this.$store.state.exhibitList)
        }).catch(error => {
          console.log('error: '+error)
        })

    // 展示コメント読み込み
    fetch(this.$store.getters.getBaseUrl + '/kurate/comment')
        .then(response=>{return response.json()})
        .then(data => {
          //console.log(data)
          this.initializeComment(data);
          //console.log(this.$store.state.commentList)
        }).catch(error => {
      console.log('error: '+error)
    })
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<template>
  <div id="nav">
    <router-link to="/exhibitionList">List</router-link> |
    <router-link to="/exhibitionInfo">Info</router-link> |
    <router-link to="/cutPicture">cut</router-link> |
    <router-link to="/comment">comment</router-link>

  </div>
  <router-view/>
</template>
<script>
import {mapActions} from "vuex";
import axios from "axios";

export default {
  name: 'App',

  methods: {
    initialize(resList) {
      this.initExhibit(resList)
    },
    ...mapActions(['initExhibit', 'initBaseUrl']),
  },

  created: function () {
    this.initBaseUrl("http://localhost:8980");
    console.log(this.$store.state.baseUrl)
    axios.get(this.$store.getters.getBaseUrl + '/exhibit/')
        .then(response => {
          console.log(response.data)
          this.initialize(response.data);
          console.log(this.$store.state.exhibitList)
        }).catch(response => {
         console.log(response)
    })
  }
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

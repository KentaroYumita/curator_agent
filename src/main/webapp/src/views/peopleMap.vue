<template>
  <div class="example">

    <MyCanvas />

    <!--<p><input type="range" min="0" max="100" v-model.number="radius"></p>-->
  </div>


</template>

<script>
import MyCanvas from '../components/MyCanvas.vue'
export default {
  components: {
    MyCanvas
  },
}
</script>

<style scoped>

</style>
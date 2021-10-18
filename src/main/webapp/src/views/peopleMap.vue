<template>
  <div class="example">

    <MyCanvas />

    <!--<p><input type="range" min="0" max="100" v-model.number="radius"></p>-->
    <p>
    <input type="date" name="example1"><br><br>
    9:30<input type="range" name="speed" min="0" max="11">17:00<br><br>
    <button type="back">戻る</button>
    <button type="run">再生</button>
    <button type="go">進む</button>
      <br><br><br><br>
    </p>
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
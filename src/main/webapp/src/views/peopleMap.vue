<template>
  <div class="example">
    <p>↓</p>
    <canvas width="200" height="200" class="canvas"></canvas>
<!--    <MyCanvas :radius="radius"/>-->
    <p>↑</p>
    <p><input type="range" min="0" max="100" v-model.number="radius"></p>
  </div>
</template>

<script>
import MyCanvas from '../components/MyCanvas.vue'
export default {
  mounted() {
    this.ctx = this.canvas.getContext('2d')
    this.draw(this.radius)
  },

  props: {
    radius: {
      type: Number,
      default: 50
    }
  },
  watch: {
    radius() {
      this.draw(this.radius)
    }
  },
  methods: {
    draw(radius) {
      this.ctx.beginPath()
      this.ctx.clearRect(0, 0, 200, 200)
      this.ctx.arc(100, 100, radius, 0, Math.PI * 2)
      this.ctx.fill()
    }
  },


}
</script>

<style scoped>
.canvas {
  border: 1px solid #000;
}
</style>
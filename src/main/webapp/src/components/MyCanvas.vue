<template>
  <canvas id="canvas" ref="canvas" width="200" height="200" class="canvas"></canvas>
</template>

<script>
export default {
  props: {
    radius: {
      type: Number,
      default: 50
    }
  },
  data(){
    return {
      canvas: null,
      ctx: null,
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
  mounted() {
    this.canvas = this.$refs.canvas
    this.ctx = this.canvas.getContext('2d')
    this.draw(this.radius)
  }
}
</script>

<style scoped>
.canvas {
  border: 1px solid #000;
}
</style>
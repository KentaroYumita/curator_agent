<template>
  <canvas ref="canvas" width="1234" height="623" class="canvas"></canvas>
</template>

<script>
import AssetImage from "@/assets/fks_museum_layout_c.png"
export default {
  data(){
    return {
      canvas: null,
      ctx: null,

      points: [
          {x:950, y:270},
        {x:720, y:270},
        {x:470, y:270},
        {x:470, y:480},
        {x:300, y:480},
        {x:200, y:480},
        {x:60, y:480},
        {x:200, y:270},
        {x:200, y:220},
        {x:700, y:100},
        {x:750, y:100},
      ],
    }
  },
  watch: {
    radius() {
      this.draw()
    }
  },
  methods: {
    draw() {
      this.ctx.clearRect(0, 0, 200, 200)

      // 地図を背景にする
      let img = new Image()
      img.src = AssetImage
      img.onload = () => {
        this.ctx.drawImage(img, 0, 0)

        // センサー毎に描画
        console.log(this.points)
        this.ctx.strokeStyle = "#000000"
        this.ctx.font = "20px normal"
        for(let i=0; i<this.points.length; i++) {
          let p = this.points[i]

          this.ctx.beginPath()
          this.ctx.arc(p.x, p.y, 20, 0, Math.PI * 2)
          this.ctx.fillStyle = "#FFFF00"
          this.ctx.fill()
          this.ctx.stroke()
          this.ctx.fillStyle = "#000000"
          this.ctx.fillText(i+1,p.x-5, p.y+2)
        }
      }
    }
  },
  mounted() {
    this.canvas = this.$refs.canvas
    this.ctx = this.canvas.getContext('2d')
    this.draw()
  },
}
</script>

<style scoped>
.canvas {
  border: 1px solid #000;
}
</style>
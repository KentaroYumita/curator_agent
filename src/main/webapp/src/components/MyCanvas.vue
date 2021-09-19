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

      // センサー情報
      // シリアル番号は一致していない
      sensor: [
          {x:850, y:250, serial:"dca63282b7a3", people:[]},
        {x:680, y:250, serial:"dca63282b8c9", people:[]},
        {x:430, y:250, serial:"dca63282b8d2", people:[]},
        {x:430, y:450, serial:"dca63282b98f", people:[]},
        {x:300, y:450, serial:"dca63282b9b6", people:[]},
        {x:170, y:450, serial:"dca63282b9da", people:[]},
        {x:30, y:450, serial:"dca63282b9e3", people:[]},
        {x:130, y:250, serial:"dca63282ba53", people:[]},
        {x:130, y:190, serial:"dca63282ba85", people:[]},
        {x:610, y:100, serial:"dca63282ba98", people:[]},
        {x:740, y:100, serial:"dca63282baaf", people:[]},
      ],
    }
  },
  watch: {
    radius() {
      this.draw()
    }
  },
  methods: {
    // 地図の表示
    draw() {
      this.ctx.clearRect(0, 0, 200, 200)

      // 地図を背景にする
      let img = new Image()
      img.src = AssetImage
      img.onload = () => {
        this.ctx.drawImage(img, 0, 0)
      }
    },

    // センサー毎に描画
    drawPeople(sensor){
      this.ctx.font = "20px normal"

      for(let i=0; i<this.sensor.length; i++) {
        // グラフの背景
        this.ctx.fillStyle = "#FFFFFF"
        this.ctx.fillRect(sensor.x,sensor.y,110,50)

        // 各データの描画
        let people_data = sensor.people
        for(let j=0; j<people_data.length; j++) {
          let people = sensor.people[j];

          // 少ないと青、中程度だと紫、多いと赤
          this.ctx.fillStyle = people <= 2 ? "#3333FF" : (people <= 4 ? "#FF33FF" : "#FF3333")
          this.ctx.fillRect(sensor.x + 10 * j, sensor.y + 5 * (10 - people), 10, 5 * people)
        }

        // 枠線
        this.ctx.strokeStyle = "#000000"
        this.ctx.strokeRect(sensor.x,sensor.y,110,50)

        // グラフの中央を表すマーク
        this.ctx.fillStyle = "#FFFF00"
        this.ctx.strokeStyle = "#000000"
        this.ctx.beginPath()
        this.ctx.arc(sensor.x+10*5+5, sensor.y+5*10,5, 0 * Math.PI / 180, 360 * Math.PI / 180, false );
        this.ctx.fill()
        this.ctx.stroke()
      }
    },

    // センサーからデータ取得
    getSensor() {
      for (let i = 0; i < this.sensor.length; i++) {
        fetch("https://teamapps.u-aizu.ac.jp/sense/presence/"+this.sensor[i].serial)
            .then(response => {
              return response.json()
            })
            .then(data => {
              // 11個のデータを取得
              for (let j = 0; j < 11; j++) {
                this.sensor[i].people.push(data[j].reading)
                this.drawPeople(this.sensor[i])
              }
              console.log(data)
            }).catch(error => {
          console.log('error: ' + error)
        })
      }
    }
  },
  mounted() {
    this.canvas = this.$refs.canvas
    this.ctx = this.canvas.getContext('2d')

    this.draw()
    this.getSensor()
  },
}
</script>

<style scoped>
.canvas {
  border: 1px solid #000;
}
</style>
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

      // 経路(グラフ構造)
      route: [
        [1,2],
        [2],
        [3,4,7],
        [4],
        [5,7],
        [6,7],
        [7,8],
        [8],
        [9,10],
        [10],
        [],
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
          this.ctx.fillStyle = people <= 2 ? "#3333FF" : (people <= 5 ? "#FF33FF" : "#FF3333")
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

    // 矢印の描画
    drawArrow(){
      this.ctx.lineWidth = "5"
      this.ctx.fillStyle = "#FFFF00"
      this.ctx.strokeStyle = "#FF0000"

      for(let i=0; i<this.route.length; i++){
        for(let j=0; j<this.route[i].length; j++){
          // 始点
          let start = {x: this.sensor[i].x + 110/2, y: this.sensor[i].y + 50}
          // 終点
          let end = {x: this.sensor[this.route[i][j]].x + 110/2, y: this.sensor[this.route[i][j]].y + 50}

          // 矢印の長さ
          let len = Math.sqrt((start.x-end.x)*(start.x-end.x) + (start.y-end.y)*(start.y-end.y))
          // 先端の大きさ
          let arrowSize = 20

          // 線分 start-end 上の点、矢印の境目
          // 線分 start-end を (len-arrowSize : len) で内分する点
          let p = {x:(start.x*arrowSize+(len-arrowSize)*end.x)/len, y:(start.y*arrowSize+(len-arrowSize)*end.y)/len}

          // 矢印の先端を成す点1
          let sin = Math.sin(Math.PI/4)
          let cos = Math.cos(Math.PI/4)
          let p1 = {x:(p.x-end.x)*cos-(p.y-end.y)*sin+end.x, y:(p.x-end.x)*sin+(p.y-end.y)*cos+end.y}

          // 矢印の先端を成す点2
          sin = Math.sin(-Math.PI/4)
          cos = Math.cos(-Math.PI/4)
          let p2 = {x:(p.x-end.x)*cos-(p.y-end.y)*sin+end.x, y:(p.x-end.x)*sin+(p.y-end.y)*cos+end.y}

          // 線分の描画
          this.ctx.beginPath()
          this.ctx.moveTo(start.x, start.y)
          this.ctx.lineTo(end.x, end.y)
          this.ctx.stroke()

          // 先端の描画
          this.ctx.beginPath()
          this.ctx.moveTo(end.x,end.y)
          this.ctx.lineTo(p1.x,p1.y)
          this.ctx.lineTo(p2.x,p2.y)
          this.ctx.lineTo(end.x,end.y)
          this.ctx.fill()
          this.ctx.stroke()
        }
      }
    },

    // センサーからデータ取得
    async getSensor() {
      let results = []
      for (let i = 0; i < this.sensor.length; i++) {
        results.push(fetch("https://teamapps.u-aizu.ac.jp/sense/presence/" + this.sensor[i].serial))
      }

      // 全てのデータ取得が終わるまで待つ
      let responses = await Promise.all(results)

      // センサー毎に人数を記録
      for (let i = 0; i < responses.length; i++) {
        let data = await responses[i].json()

        // 11個のデータを取得
        for (let j = 0; j < 11; j++) {
          this.sensor[i].people.push(data[11 - (j + 1)].reading)
        }
      }
    }
  },
  async mounted() {
    this.canvas = this.$refs.canvas
    this.ctx = this.canvas.getContext('2d')

    // 地図
    this.draw()

    // センサー情報取得(終わるまで待つ)
    await this.getSensor()

    // グラフの描画
    for(let i=0; i<this.sensor.length; i++){
      this.drawPeople(this.sensor[i])
    }

    // 矢印の描画
    this.drawArrow()
  },
}
</script>

<style scoped>
.canvas {
  border: 1px solid #000;
}
</style>
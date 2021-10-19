<template>
  <div id="my_canvas">
    <canvas ref="canvas" width="1234" height="623" class="canvas"></canvas>

    <div id="slider_area">
      <!-- <input type="date" name="example1"><br><br> -->
      <div id="date">0000-00-00 00:00:00</div>
      過去<input type="range" id="slider" min="5" max="94" value="94" disabled>現在<br><br>
      <input type="button" id="back" value="戻る" disabled/>
      <input type="button" id="play" value="再生" disabled/>
      <input type="button" id="next" value="進む" disabled/>
      <br><br><br><br>
    </div>
  </div>
</template>

<script>
import AssetImage from "@/assets/fks_museum_layout_c.png"

export default {
  el: '#my_canvas',
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

      // センサー情報(全範囲)
      sensor_all: [
          [],
          [],
          [],
          [],
          [],
          [],
          [],
          [],
          [],
          [],
          [],
      ],

      // スライダー再生フラグ
      play_flag: false,
      // 再生関数格納用変数
      siv: null,
      // スライダー最小値
      slider_min: 5,
      // スライダー最大値
      slider_max: 94,
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
      this.ctx.clearRect(0, 0, 1234, 623)

      // 地図を背景にする
      let img = new Image()
      img.src = AssetImage
      img.onload = () => {
        this.ctx.drawImage(img, 0, 0)
      }
    },

    // センサー毎に描画
    drawPeople(sensor){
      let max = 20
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
          this.ctx.fillStyle = people <= max*0.2 ? "#3333FF" : (people <= max*0.5 ? "#FF33FF" : "#FF3333")
          this.ctx.fillRect(sensor.x + 10 * j, sensor.y + (50/max) * (max - people), 10, (50/max) * people)
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

    // 全ての矢印の描画
    drawAllArrows(){
      for(let i=0; i<this.route.length; i++){
        for(let j=0; j<this.route[i].length; j++){
          // 始点
          let start = {x: this.sensor[i].x + 110/2, y: this.sensor[i].y + 50/2, people: this.sensor[i].people}
          // 終点
          let end = {x: this.sensor[this.route[i][j]].x + 110/2, y: this.sensor[this.route[i][j]].y + 50/2, people: this.sensor[this.route[i][j]].people}

          // 矢印を引けるか判定
          if(this.checkArrow(start.people, end.people)) {
            this.drawArrow(start, end)
            break
          }
        }
      }
    },

    // 矢印が引けるかどうか判定
    checkArrow(startP, endP){
      // 始点における人数の増減
      let startFluc = []
      for(let i=0; i<startP.length-1; i++){
        startFluc.push(startP[i+1]-startP[i])
      }

      // 終点における人数の増減
      let endFluc = []
      for(let i=0; i<endP.length-1; i++){
        endFluc.push(endP[i+1]-endP[i])
      }

      for(let i=0; i<startFluc.length; i++){

        // 始点で減った場所について調べる
        if(startFluc[i] >= 0) continue;
        for(let j=i; j<endFluc.length; j++){

          // 始点で減った後で、終点が増えた地点がある場合
          // 終点に向けて矢印を引く
          if(endFluc[j] + startFluc[i] >= 0){
            return true
          }
        }
      }
      return false
    },

    // 矢印の描画
    drawArrow(start, end) {
      this.ctx.lineWidth = "5"
      this.ctx.fillStyle = "#FFFF00"
      this.ctx.strokeStyle = "#FF0000"

      // 矢印の長さ
      let len = Math.sqrt((start.x - end.x) * (start.x - end.x) + (start.y - end.y) * (start.y - end.y))
      // 先端の大きさ
      let arrowSize = 20

      // 線分 start-end 上の点、矢印の境目
      // 線分 start-end を (len-arrowSize : len) で内分する点
      let p = {
        x: (start.x * arrowSize + (len - arrowSize) * end.x) / len,
        y: (start.y * arrowSize + (len - arrowSize) * end.y) / len
      }

      // 矢印の先端を成す点1
      let sin = Math.sin(Math.PI / 4)
      let cos = Math.cos(Math.PI / 4)
      let p1 = {
        x: (p.x - end.x) * cos - (p.y - end.y) * sin + end.x,
        y: (p.x - end.x) * sin + (p.y - end.y) * cos + end.y
      }

      // 矢印の先端を成す点2
      sin = Math.sin(-Math.PI / 4)
      cos = Math.cos(-Math.PI / 4)
      let p2 = {
        x: (p.x - end.x) * cos - (p.y - end.y) * sin + end.x,
        y: (p.x - end.x) * sin + (p.y - end.y) * cos + end.y
      }

      // 始点の描画
      this.ctx.beginPath()
      this.ctx.arc(start.x,start.y,5,0,Math.PI*2)
      this.ctx.fill()
      this.ctx.stroke()

      // 線分の描画
      this.ctx.beginPath()
      this.ctx.moveTo(start.x, start.y)
      this.ctx.lineTo(end.x, end.y)
      this.ctx.stroke()

      // 先端の描画
      this.ctx.beginPath()
      this.ctx.moveTo(end.x, end.y)
      this.ctx.lineTo(p1.x, p1.y)
      this.ctx.lineTo(p2.x, p2.y)
      this.ctx.lineTo(end.x, end.y)
      this.ctx.fill()
      this.ctx.stroke()
    },

    // スライダー操作
    sliderEvent(){
      let slider = document.getElementById("slider")
      let date = document.getElementById("date")
      let back = document.getElementById("back")
      let next = document.getElementById("next")
      let play = document.getElementById("play")

      slider.disabled = false
      back.disabled = false
      next.disabled = false
      play.disabled = false

      // 日付表示
      date.innerHTML = this.sensor_all[0][slider.value].timeOfCreate

      // スライダー
      slider.addEventListener('input', () => {
        date.innerHTML = this.sensor_all[0][slider.value].timeOfCreate
        this.redraw(slider.value)
      })

      // 戻る
      back.addEventListener('click', () => {
        slider.value -= 1
        date.innerHTML = this.sensor_all[0][slider.value].timeOfCreate
        this.redraw(slider.value)
      })

      // 進む
      next.addEventListener('click', () => {
        slider.value = +slider.value +1
        date.innerHTML = this.sensor_all[0][slider.value].timeOfCreate
        this.redraw(slider.value)
      })

      // 再生
      play.addEventListener(('click'), () => {
        // 再生開始
        if(play.value == "再生") {
          play.value = "停止"
          // 初期化
          if (!this.play_flag) {
            this.play_flag = true
            slider.disabled = true
            back.disabled = true
            next.disabled = true
          }

          this.siv = setInterval(() => {
            slider.value = +slider.value + 1
            date.innerHTML = this.sensor_all[0][slider.value].timeOfCreate
            this.redraw(slider.value)

            if (slider.value >= this.slider_max) {
              play.value = "再生"
              this.play_flag = false
              clearInterval(this.siv)
              slider.disabled = false
              back.disabled = false
              next.disabled = false
            }
          }, 100)
        }

        // 再生停止
        else{
          play.value = "再生"
          this.play_flag = false
          clearInterval(this.siv)
          slider.disabled = false
          back.disabled = false
          next.disabled = false
        }
      })
    },

    // 再描画
    redraw(slider){
      // 地図
      //this.draw()

      // 地図を背景にする
      let img = new Image()
      img.src = AssetImage
      img.onload = () => {
        this.ctx.drawImage(img, 0, 0)

        // グラフの描画
        for(let i=0; i<this.sensor.length; i++) {
          // センサーデータの更新
          for (let j = 0; j < 11; j++) {
            this.sensor[i].people[j] = this.sensor_all[i][j + (+slider - 5)].reading
          }
        }
        for(let i=0; i<this.sensor.length; i++) {
          this.drawPeople(this.sensor[i])
        }

        // 矢印の描画
        //this.drawAllArrows()
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

        // 全データを取得
        for(let j=0; j<data.length; j++){
          this.sensor_all[i].push(data[data.length - (j + 1)])
        }

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
    //this.drawAllArrows()

    // スライダー操作
    this.sliderEvent()
  },
}
</script>

<style scoped>
.canvas {
  border: 1px solid #000;
}
</style>
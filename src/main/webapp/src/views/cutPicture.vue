<template>
  <div>
    {{ this.exhibit.name }}
    <input
        ref="input"
        type="file"
        name="image"
        accept="image/*"
        @change="setImage"
    />

    <div class="content">
      <section class="cropper-area">
        <div class="img-cropper">
          <vue-cropper
              ref="cropper"
              :aspect-ratio="16 / 9"
              :src="imgSrc"
              preview=".preview"
          />
        </div>
        <div class="actions">
          <!--<router-link to="/exhibitionInfo">戻る</router-link>
          <a
              href="#"
              role="button"
              @click.prevent="cropImage"
          >
            切り取る
          </a>
          -->
        </div>

      </section>
      <section class="preview-area">
        <div class="preview"></div>
        <!--
        <div class="cropped-image">
          <img
              v-if="cropImg"
              :src="cropImg"
              alt="Cropped Image"
          />
          <div v-else class="crop-placeholder" />
        </div>
        -->
      </section>
    </div>

    <div class="centering_item">
      <textarea name="comment"></textarea >
      <table class="centering_item">
        <tr>
          <td><router-link :to="{ name: 'exhibitionList'}">戻る</router-link></td>
          <td><router-link :to="{ name: ''}" @click="sendData">追加</router-link></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';
export default {
  components: {
    VueCropper,
  },
  data() {
    return {
      imgSrc: this.$store.getters.getBaseUrl+"/image_content/preview/"+this.$store.state.exhibitList[this.$route.query.id].id, //'/assets/images/exhibitionA.jpg',
      cropImg: '',
      data: null,

      exhibit: this.$store.state.exhibitList[this.$route.query.id],
    };
  },
  methods: {
    cropImage() {
      // get image data for post processing, e.g. upload or setting image src
      this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
    },
    flipX() {
      const dom = this.$refs.flipX;
      let scale = dom.getAttribute('data-scale');
      scale = scale ? -scale : -1;
      this.$refs.cropper.scaleX(scale);
      dom.setAttribute('data-scale', scale);
    },
    flipY() {
      const dom = this.$refs.flipY;
      let scale = dom.getAttribute('data-scale');
      scale = scale ? -scale : -1;
      this.$refs.cropper.scaleY(scale);
      dom.setAttribute('data-scale', scale);
    },
    getCropBoxData() {
      this.data = JSON.stringify(this.$refs.cropper.getCropBoxData(), null, 4);
    },
    getData() {
      this.data = JSON.stringify(this.$refs.cropper.getData(), null, 4);
    },
    move(offsetX, offsetY) {
      this.$refs.cropper.move(offsetX, offsetY);
    },
    reset() {
      this.$refs.cropper.reset();
    },
    rotate(deg) {
      this.$refs.cropper.rotate(deg);
    },
    setCropBoxData() {
      if (!this.data) return;
      this.$refs.cropper.setCropBoxData(JSON.parse(this.data));
    },
    setData() {
      if (!this.data) return;
      this.$refs.cropper.setData(JSON.parse(this.data));
    },
    setImage(e) {
      const file = e.target.files[0];
      if (file.type.indexOf('image/') === -1) {
        alert('Please select an image file');
        return;
      }
      if (typeof FileReader === 'function') {
        const reader = new FileReader();
        reader.onload = (event) => {
          this.imgSrc = event.target.result;
          // rebuild cropperjs with the updated source
          this.$refs.cropper.replace(event.target.result);
        };
        reader.readAsDataURL(file);
      } else {
        alert('Sorry, FileReader API not supported');
      }
    },
    showFileChooser() {
      this.$refs.input.click();
    },
    zoom(percent) {
      this.$refs.cropper.relativeZoom(percent);
    },

    sendData(){
      // textarea読み込み失敗
      let textarea = document.getElementsByName("comment")[0]
      if(textarea==null){
        alert("textdata が読み込めません")
        return false
      }

      // コメントが空の場合
      let comment = textarea.value
      if(comment==""){
        alert("コメントを入力してください")
        return false
      }

      // 送信データ(JSON)
      this.getData()
      let ImageData = JSON.parse(this.data)
      let jsonObj = {
        exhibit: this.exhibit,
        comment: comment,
        image_x: ImageData.x,
        image_y: ImageData.y,
        image_width: ImageData.width,
        image_height: ImageData.height,
      }

      fetch(this.$store.getters.getBaseUrl + '/exhibit_comment/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonObj)
      })
          .then(response => {return response.json()})
          .then(data => {
            console.log('success: '+data)
          }).catch(error => {
            console.log('error: '+error)
          })

      this.$router.push({name:"exhibitionList"})
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  width: 1024px;
  margin: 0 auto;
}
input[type="file"] {
  display: none;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 5px 0;
}
.header h2 {
  margin: 0;
}
.header a {
  text-decoration: none;
  color: black;
}
.content {
  display: flex;
  justify-content: space-between;
}
.cropper-area {
  width: 614px;
}
.actions {
  margin-top: 1rem;
}
.actions a {
  display: inline-block;
  padding: 5px 15px;
  background: #0062CC;
  color: white;
  text-decoration: none;
  border-radius: 3px;
  margin-right: 1rem;
  margin-bottom: 1rem;
}
textarea {
  width: 100%;
  height: 100px;
}
.preview-area {
  width: 307px;
}
.preview-area p {
  font-size: 1.25rem;
  margin: 0;
  margin-bottom: 1rem;
}
.preview-area p:last-of-type {
  margin-top: 1rem;
}
.preview {
  width: 100%;
  height: calc(372px * (9 / 16));
  overflow: hidden;
}
.crop-placeholder {
  width: 100%;
  height: 200px;
  background: #ccc;
}
.cropped-image img {
  max-width: 100%;
}
</style>